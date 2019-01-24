
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('drinks').del()
    .then(function () {
      // Inserts seed entries
      return knex('drinks').insert([
        { drink_id: 101, name: 'Black Russian' },
        { drink_id: 102, name: 'Michelada' },
        { drink_id: 103, name: 'Bloody Mary' },
      ]);
    });
};
