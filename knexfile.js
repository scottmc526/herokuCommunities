require('dotenv').load();

module.exports = {
  development: {
      client: 'pg',
      connection: 'postgres://localhost/heroku_comm'
    },

    production: {
      client: 'pg',
      connection: process.env.DATABASE_URL + '?ssl=true'
    }
};
