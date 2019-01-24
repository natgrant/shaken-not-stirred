
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', (t) => {
      t.increments('id').primary()
      t.string('ing1')
      t.string('ing2')
      t.string('ing3')
      t.string('ing4')
      t.string('ing5')
      t.string('ing6')
      t.string('ing7')
      t.string('ing8')
      t.string('ing9')
      t.string('ing10')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ingredients')
};
