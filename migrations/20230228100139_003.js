/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up =async function (knex) {
    if (await knex.schema.hasTable("energizers")) {
        return;
    }

    return knex.schema
        .createTable("energizers", (table) => {
            table.increments("id");
            table.string("name", 50);
            table.text("description");
            table.timestamp("submission_date").defaultTo(knex.fn.now());
        })
        .createTable("energizer_ratings", (table) => {
            table.increments("id");
            table.integer("energizer_id").references("energizers.id");
            table.integer("rating");
            table.float("average_rate");
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("energizer_ratings").dropTable("energizers");
};
