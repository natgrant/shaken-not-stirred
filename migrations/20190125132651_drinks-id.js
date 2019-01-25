
exports.up = function(knex, Promise) {
    return knex.schema.table('drinks', function(t) {
        t.integer('ing_id')
        t.dropUnique('ing_id')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.table('drinks', function(t) {
        t.dropColumn('ing_id')
    })
};
