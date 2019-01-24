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

// function getUsers (db = connection) {
//   return db('users').select()
// }

// function getUser (id, db = connection) {
//   return db('users').where('id', id).first()
// }
