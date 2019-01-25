const config = require("./knexfile").development;
const database = require("knex")(config);

module.exports = {
    checkedItem,
    getIngredients,
    submitIngredients
}

function checkedItem(db = database) {
    return db('ingredients').select()
}

function getIngredients(db = database) {
    return db('ingredients').select()
}

function submitIngredients(value, db = database) {
    // return db('ingredients')




}

// function getUsers (db = connection) {
//   return db('users').select()
// }

// function getUser (id, db = connection) {
//   return db('users').where('id', id).first()
// }
