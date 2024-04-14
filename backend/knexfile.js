module.exports = {
    development: {
    client: 'mysql',
    connection: { filename: './db.mysql' },
    migrations: { filename: './src/migrations'}
    }
};