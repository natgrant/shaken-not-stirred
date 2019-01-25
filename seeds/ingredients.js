exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { id: 2, ing: "Coke" },
        { id: 202, ing: "Vodka" },
        { id: 203, ing: "Beer" },
        { id: 204, ing: "Vanilla" },
        { id: 205, ing: "Lime" }
      ]);
    });
};
