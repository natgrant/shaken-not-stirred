
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('drinks').del()
    .then(function () {
      // Inserts seed entries
      return knex('drinks').insert([
        {drink_id: 1, name: 'Black Russian', ing_id: 201},
        {drink_id: 2, name: 'Black Russian', ing_id: 202},
        {drink_id: 3, name: 'Mojito', ing_id: 205},
        {drink_id: 4, name: 'Long Island', ing_id: 205},
        {drink_id: 5, name: 'Long Island', ing_id: 202},
        {drink_id: 6, name: 'Long Island', ing_id: 204},
      ]);
    });
};
