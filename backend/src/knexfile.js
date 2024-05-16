module.exports = {
	development: {
		client: 'postgresql',
		connection: { 
			database: 'postgres',
			user: 'postgres', 
			password: 'brenna',
			ssl: {
				rejectUnauthorized: false, // Ignora a verificação do certificado SSL
			},
		},
		pool: { 
      min: 2, 
      max: 20 },
		migrations: { filename: './migrations/'}
		},
	
};
