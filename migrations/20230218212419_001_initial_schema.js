/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema
		.createTable("energizers", (table) => {
			table.increments("id");
			table.string("name", 50);
			table.text("energizer");
		})
		.createTable("ratings", (table) => {
			table.increments("id");
			table.integer("energizer_id").references("energizers.id");
			table.integer("rating");
		});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTable("energizers").dropTable("ratings");
};
