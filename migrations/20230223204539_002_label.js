exports.up = function (knex) {
    return knex("energizers").insert([
        { name: "Red Bull", description: " Morning Energypiugpyifgyuvuyhvjhvjhbc EYGC liugqd  uigigas iugigf" },
        { name: "Monster", description: "Rise and shine jhgaef POIUOIUJR ;UH iugf oih g ihi jh" },
        { name: "5-hour Energy", description: "Energy Shot uiguif biuhoiuj yitg uitgwef ov fiu fr iuy" },
        { name: "Rockstar", description: "Helloooo uef  oihoihwgf piuiuf  'oih'oh'ohf o';ouh;ef Energy Drink" },
        { name: "Bang", description: "Hi gyuigwef honey ;uhf 'oihoihw ef iuh;ugfw Energy Drink" },
      ],["id"])
        .then(function (rows) {
            return knex("energizer_ratings").insert([
                { energizer_id: rows[0].id , rating: 4 },
                { energizer_id: rows[1].id, rating: 3 },
                { energizer_id: rows[2].id, rating: 5 },
                { energizer_id: rows[3].id, rating: 2 },
                { energizer_id: rows[4].id, rating: 4 },
                { energizer_id: rows[0].id, rating: 1 },
            ]);
        });
};

exports.down = function (knex){
    return knex("energizer_ratings").delete()
    .then(()=>{
        return knex("energizers").delete();
    });
};
