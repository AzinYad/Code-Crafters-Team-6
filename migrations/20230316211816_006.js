/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.table("energizers", (table) => {
        table.string("image_url");
        table.string("video_url");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.table("energizers", (table) => {
        table.dropColumn("image_url");
        table.dropColumn("video_url");
    });
};
