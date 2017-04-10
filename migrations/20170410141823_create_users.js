
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(t) {
    t.increments();
    t.string('contactId');
    t.string('username');
    t.string('password');
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
