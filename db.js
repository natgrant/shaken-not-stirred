const config = require("./knexfile").development;
const database = require("knex")(config);

module.exports = {
    checkedItem,
    getIngredients
}

function checkedItem(db = database) {
    return db('ingredients').select()
}

function getIngredients(db = database) {
    return db('ingredients').select()
}

function matches(id, db = database) {
    return db('drinks')
        .join('ingredients', 'drinks.ing_id', 'ingredients.id')
        .select('drinks.drink_id', 'drinks.name', 'drinks.ing_id', 'ingredients.ing')
}

// function getUsers (db = connection) {
//   return db('users').select()
// }

// function getUser (id, db = connection) {
//   return db('users').where('id', id).first()
// }
