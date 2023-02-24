exports.up = function (knex) {
    return knex("energizers").insert([
        { name: "Red Bull", description: " Morning Energypiugpyifgyuvuyhvjhvjhbc EYGC liugqd  uigigas iugigf" },
        { name: "Monster", description: "Rise and shine jhgaef POIUOIUJR ;UH iugf oih g ihi jh" },
        { name: "5-hour Energy", description: "Energy Shot uiguif biuhoiuj yitg uitgwef ov fiu fr iuy" },
        { name: "Rockstar", description: "Helloooo uef  oihoihwgf piuiuf  'oih'oh'ohf o';ouh;ef Energy Drink" },
        { name: "Bang", description: "Hi gyuigwef honey ;uhf 'oihoihw ef iuh;ugfw Energy Drink" },
    ])
        .then(function () {
            return knex("energizer_ratings").insert([
                { energizer_id: 1, rating: 4 },
                { energizer_id: 2, rating: 3 },
                { energizer_id: 3, rating: 5 },
                { energizer_id: 4, rating: 2 },
                { energizer_id: 5, rating: 4 },
            ]);
        });
};

exports.down = function (knex) {
    return knex("energizers").whereIn("name", ["Red Bull", "Monster", "5-hour Energy", "Rockstar", "Bang"]).del()
        .then(function () {
            return knex("energizer_ratings").del();
        });
};
