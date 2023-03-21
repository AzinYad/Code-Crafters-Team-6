/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex("energizers")
        .where({ name: "Red Bull" })
        .update({
            image_url:
                "https://images.unsplash.com/photo-1498940757830-82f7813bf178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        })
        .then(() => {
            return knex("energizers")
                .where({ name: "Monster" })
                .update({
                    image_url:
                        "https://media.istockphoto.com/id/471823439/photo/beach-dog.jpg?s=612x612&w=0&k=20&c=Y-HWX1SKoV98lAJGCoATIV39_VSTXAAr8QXwhGOoYRQ=",
                });
        })
        .then(() => {
            return knex("energizers")
                .where({ name: "5-hour Energy" })
                .update({
                    image_url:
                        "https://www.istockphoto.com/vector/manchester-terrier-english-dog-breed-digital-art-illustration-smooth-haired-pet-gm1270593903-373483647",
                });
        })
        .then(() => {
            return knex("energizers")
                .where({ name: "SHOOTING STAR" })
                .update({
                    image_url:
                        "https://images.unsplash.com/photo-1542665174-31db64d7e0e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHN0YXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                });
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.table("energizers", (table) => {
        table.dropColumn("image_url");
    });
};
