module.exports = {
	development: {
		client: 'postgresql',
		connection: { 
      database: 'postgres',
      user: 'postgres', 
      password: 'brenna'},
		pool: { 
      min: 2, 
      max: 20 },
		migrations: { filename: './migrations/'}
		},
};
