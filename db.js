const config = require("./knexfile").development;
const database = require("knex")(config);

module.exports = {
  getIngredients,
  getIngredient,
  addNew,
  deleteItem,
  editItem,
  saveFav,
  findFav
};

//get all ingredients
function getIngredients(db = database) {
  return db("ingredients").select();
}
//get a specific ingredient
function getIngredient(id, db = database) {
  console.log(id);
  return db("ingredients")
    .where({ id: id })
    .then(data => console.log(data));
}

//relationship - a users fave ingredients

//saving a favourite ingredient
function saveFav(favourite, db = database) {
  return db("favourites").insert(favourite);
}

function findFav(name, db = database) {
  return db("favourites")
    .where({ name })
    .then(data => data);
}

//add a new ingredient()
function addNew(id, name, db = database) {
  console.log(id, name);
  return db("ingredients")
    .insert({ id, ing: name })
    .then(callback => {
      return db("ingredients")
        .where({ id: callback[0] })
        .then(data => data);
    });
}

//edit existing ingredient
function editItem(id, name, db = database) {
  console.log(id, name);
  return db("ingredients")
    .where({ id })
    .update({ id, ing: name });
}

//delete an ingredient
function deleteItem(id, db = database) {
  return db("ingredients")
    .where({ id })
    .del();
}

// function matches(id, db = database) {
//   return db("drinks")
//     .join("ingredients", "drinks.ing_id", "ingredients.id")
//     .select(
//       "drinks.drink_id",
//       "drinks.name",
//       "drinks.ing_id",
//       "ingredients.ing"
//     );
// }

// function getUsers (db = connection) {
//   return db('users').select()
// }

// function getUser (id, db = connection) {
//   return db('users').where('id', id).first()
// }
