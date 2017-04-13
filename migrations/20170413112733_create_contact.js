
exports.up = function(knex, Promise) {
  return knex.schema.createTable('contact', function(t) {
    t.increments();
    t.string('sfid');
    t.string('name');
    t.string('email');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contact');
};
