
exports.up = function (knex, Promise) {
  return knex.schema.createTable('ingredients', (t) => {
    t.increments('id').primary()
    t.string('ing')
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('ingredients')
};
