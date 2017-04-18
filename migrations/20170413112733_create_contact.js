
exports.up = function(knex, Promise) {
  return knex.schema.createTable('contact', function(t) {
    t.boolean('isdeleted');
    t.increments();
    t.string('_hc_lastop');
    t.string('_hc_err');
    t.string('sfid');
    t.string('createddate')
    t.string('name');
    t.string('systemmodstamp')
    t.string('email');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contact');
};
