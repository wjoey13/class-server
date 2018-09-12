
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        { first: 'Terry', last: 'Larry'},
        { first: 'Larry', last: 'Sherry'},
        { first: 'Sherry',last: 'Mary'}
      ]);
    });
};

