/*jshint esversion: 6 */
const dbConnection = require('./knexfile')[process.env.NODE_ENV || 'development'];
const knex = require('knex')(dbConnection);

module.exports = {
    getAll() {
        return knex.select().from('students');
    },

    soloStudent(id) {
        return knex.select().from('students').where('firstName', id)
    },
    createStudent(newStudent) {
        return knex('students').insert(newStudent)
    }

};