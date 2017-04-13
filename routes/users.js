require('dotenv').load();
var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var bcrypt = require('bcrypt');

function Users() {
  return knex('users')
}

function Contact() {
  return knex('salesforce/contact');
}

router.get('/users', function(req, res, next) {
  Contact().select().then(function(result) {
    res.json(result);
  })
});

module.exports = router;
