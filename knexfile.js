// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
	development: {
		client: "postgresql",
		connection: {
			database: "cyf",
			user: "postgres",
			password: "cyf",
		},
		pool: {
			min: 1,
			max: 2,
		},
		migrations: {
			tableName: "migrations",
		},
	},

	production: {
		client: "postgresql",
		connection: process.env.DATABASE_URL,
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: "migrations",
		},
	},
};
