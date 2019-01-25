exports.up = function(knex, Promise) {
  return knex.schema.createTable("favourites", t => {
    t.string("name");
    t.string("favourite");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("favourites");
};
