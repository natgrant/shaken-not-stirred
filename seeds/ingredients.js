exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ing1: 'Coke', ing2: 'Vodka', ing3: '', ing4: '', ing5: '', ing6: '', ing7: '', ing8: '', ing9: '', ing10: ''},
        {id: 2, ing1: 'Vodka', ing2: 'Tomato Juice', ing3: 'Worchestershire Sauce', ing4: '', ing5: '', ing6: '', ing7: '', ing8: '', ing9: '', ing10: ''},
        {id: 3, ing1: 'Beer', ing2: 'Hot Sauce', ing3: 'Maggi Sauce', ing4: '', ing5: '', ing6: '', ing7: '', ing8: '', ing9: '', ing10: ''},
      ]);
    });
};
