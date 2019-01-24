
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('drinks').del()
    .then(function () {
      // Inserts seed entries
      return knex('drinks').insert([
        {drink_id: 1, name: 'Black Russian', ing1: 'Vodka', ing2: 'Coke', ing3: '', ing4: '', ing5: '', ing6: '', ing7: '', ing8: '', ing9: '', ing10: ''},
        {drink_id: 2, name: 'Michelada', ing1: 'Beer', ing2: 'Maggi Sauce', ing3: 'Hot Sauce', ing4: '', ing5: '', ing6: '', ing7: '', ing8: '', ing9: '', ing10: ''},
        {drink_id: 3, name: 'Bloody Mary', ing1: 'Tomato Juice', ing2: 'Vodka', ing3: 'Worchestershire Sauce', ing4: '', ing5: '', ing6: '', ing7: '', ing8: '', ing9: '', ing10: ''},
      ]);
    });
};
