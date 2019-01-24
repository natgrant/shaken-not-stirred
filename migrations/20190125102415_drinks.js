
exports.up = function (knex, Promise) {
    return knex.schema.createTable('drinks', (t) => {
        t.increments('drink_id').primary()
        t.string('name')


    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('drinks')
};
