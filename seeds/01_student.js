
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {
          firstName: 'Joey', 
          lastName: 'Walter',
          hometown: 'Boulder', 
          prevOccupation: 'Warehouse',
          favoriteNum: 13.5, 
          pastime: 'Hardcore Parcore',
        },
        {
          firstName: 'Nick',
          lastName: 'Lee',
          hometown: 'San Rafael',
          prevOccupation: 'Ditch Digger',
          favoriteNum: 2,
          pastime: 'Pickle Ball'
        },
        {
          firstName: 'Cory',
          lastName: 'Pease',
          hometown: 'Denver',
          prevOccupation: 'Boss',
          favoriteNum: 34.5,
          pastime: 'Being Bald'
        },
        {
         firstName: 'Kris',
         lastName: 'Kamikawa',
         hometown: 'Mililani, HI',
         prevOccupation: 'Legislative Aide', 
         favoriteNum: 11, 
         pastime: 'easy climbing'
        }
      ]);
    });
};

