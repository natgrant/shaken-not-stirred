const config = require("./knexfile").development;
const database = require("knex")(config);

// module.exports = {
//   getUser: getUser,
//   getUsers: getUsers
// }

// function getUsers (db = connection) {
//   return db('users').select()
// }

// function getUser (id, db = connection) {
//   return db('users').where('id', id).first()
// }
