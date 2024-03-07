//
const path = require("path");
//
module.exports = {
  develoment: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'library_knex'
    },
    migrations: {
      directory: path.resolve(
        __dirname,
        'src',
        'database',
        'knex',
        'migrations'
      )
    },
    useNullAsDefault: true,
  },
}