// Update with your config settings.

module.exports = {

    development: {
        client: 'pg',
        connection: 'postgresql://localhost/G95_DATABASE'
    },

    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL
    }

};