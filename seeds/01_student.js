
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
        },
        {
         firstName: 'Maddie', 
         lastName: 'Kreamer',
         hometown: 'Des Moines, IA', 
         prevOccupation: 'Server/Bartender',
         favoriteNum: 7, 
         pastime: 'Backpacking'
        },
        {
         firstName: 'Steve', 
         lastName: 'Lopez', 
         hometown: 'FrankFort', 
         prevOccupation: 'Bounty Hunter', 
         favoriteNum: 710, 
         pastime: 'running'
        },
        { 
         firstName: 'Kevin', 
         lastName: 'Potts',
         hometown: 'OC', 
         prevOccupation: 'Skydiver', 
         favoriteNum: 13, 
         pastime: 'coding'
        }, 
        {
          firstName: 'Brice', 
          lastName: 'Sinkule', 
          hometown: 'Crete, NE', 
          prevOccupation: 'Sale Consultant', 
          favoriteNum: 12, 
          pastime: 'Basketball'
        },
        {
         firstName: 'Anhuelita', 
         lastName: 'LaChica', 
         hometown: 'Kazakhstan', 
         prevOccupation: 'Masseuse', 
         favoriteNum: 2, 
         pastime: 'sleeping'
        },
        {
         firstName: 'Conrad',
         lastName: 'Wright',
         hometown: 'Durango',
         prevOccupation: 'Rural Development Consultant',
         favoriteNum: 'infinity',
         pastime: 'Bird Watching'
        },
        {
          firstName: 'Jose',
          lastName: 'Stricklin',
          hometown: 'San German',
          prevOccupation: 'Retail',
          favoriteNum: 4,
          pastime:  'Shakespearean Elocution'
        },
        {
         firstName:  'Jed', 
         lastName:  'Prentup', 
         hometown:  'Boulder', 
         prevOccupation: 'PokerDealer', 
         favoriteNum: 24, 
         pastime: 'delving'
        }

      ]);
    });
};

