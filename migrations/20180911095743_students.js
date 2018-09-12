
exports.up = function(knex, Promise) {
    return knex.schema.createTable('students',(student) => {
        student.increments('id')
        student.text('firstName')
        student.text('lastName')
        student.text('hometown')
        student.text('prevOccupation')
        student.float('favoriteNum')
        student.text('pastime')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('students')
  
};
