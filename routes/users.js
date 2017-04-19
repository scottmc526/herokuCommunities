require('dotenv').load();
var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var bcrypt = require('bcrypt');

function Users() {
  return knex('users')
}

function Contact() {
  return knex('contact');
}

router.get('/users', function(req, res, next) {
  Contact().select().then(function(result) {
    res.json(result);
  })
});

router.get('/users/:id', function(req, res, next) {
  Contact().where('sfid', req.params.id).then(function(result) {
    res.json(result);
  })
})

router.get('/registeredUsers', function(req, res, next) {
  Users().select().then(function(result) {
    res.json(result)
  })
})

router.post('/registeredUsers', function(req, res, next) {
  var user = {};
  user.contactId = req.body.id;
  user.username = req.body.email;
  Users().insert(user).then(function(result) {
    res.send('success')
  })
})

router.get('/registeredUsers/:id', function(req, res, next) {
  Users().where('contactId', req.params.id).then(function(result) {
    res.json(result);
  })
});

router.put('/registeredUsers/:id', function(req, res, next) {
  var encrypted;
  req.body.password ? encrypted = bcrypt.hashSync(req.body.password, 8) : encrypted = null

  var user ={}
  user.password = encrypted;
  Users().where('contactId', req.params.id).update(user).then(function(result) {
    res.cookie('user', req.params.id);
    res.sendStatus(200);
  })
})

router.post('/registeredUsers/:id', function(req, res, next) {
  Users().where('contactId', req.params.id).then(function(result) {
    if(result) {
      if(bcrypt.compareSync(req.body.password, result[0].password)) {
        res.cookie('user', req.params.id)
        res.sendStatus(200);
      } else {
        res.send('invalid password')
      }
    }
  })
})
module.exports = router;
