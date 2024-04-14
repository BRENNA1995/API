const knexFile = require("../knexfile.js");
const knex = require ('knex') ({
    client: 'mysql',
    connection: 'mysql://user:senha@servidor:3306/database'
    });
