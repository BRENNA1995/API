/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "mysql",
    connection: {
        host : 'localhost',
        port : 3306,
        user : 'user',
        password : 'senha',
        database : 'database'
    },
    migrations: {
      directory: "./src/migrations",
    },
    seeds: {
        directory: "./src/seeds",
    },

  }
};
