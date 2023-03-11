/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex("energizers")
		.insert(
			[
				{
					name: "Red Bull",
					description:
						" Morning Energypiugpyifgyuvuyhvjhvjhbc EYGC liugqd  uigigas iugigf",
					submission_date: new Date("2022-01-01"),
					url_address:
						"https://images.unsplash.com/photo-1678188053105-18540da446bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
				},
				{
					name: "Monster",
					description: "Rise and shine jhgaef POIUOIUJR ;UH iugf oih g ihi jh",
					submission_date: new Date("2022-11-05"),
					url_address:
						"https://images.unsplash.com/photo-1678188053105-18540da446bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
				},
				{
					name: "5-hour Energy",
					description: "Energy Shot uiguif biuhoiuj yitg uitgwef ov fiu fr iuy",
					submission_date: new Date("2022-02-02"),
					url_address: "https://www.youtube.com/watch?v=nLhEWeflA8M",
				},
				{
					name: "Rockstar",
					description:
						"Helloooo uef  oihoihwgf piuiuf  'oih'oh'ohf o';ouh;ef Energy Drink",
					submission_date: new Date("2022-05-01"),
					url_address: "https://www.youtube.com/watch?v=yju4zwKSriI&t=715s",
				},
				{
					name: "Bang",
					description:
						"Hi gyuigwef honey ;uhf 'oihoihw ef iuh;ugfw Energy Drink",
					submission_date: new Date("2022-06-01"),
					url_address: "https://www.youtube.com/watch?v=yju4zwKSriI&t=715s",
				},
				{
					name: "Red Bull",
					description: "Morning energy drink",
					submission_date: new Date("2022-03-01"),
					url_address: "https://www.youtube.com/watch?v=yju4zwKSriI&t=715s",
				},
				{
					name: "Monster",
					description: "Energizing drink for any occasion",
					submission_date: new Date("2022-02-01"),
					url_address: "https://www.youtube.com/watch?v=yju4zwKSriI&t=715s",
				},
				{
					name: "LIFETIME Energy",
					description: "Energy shot for a quick boost",
					submission_date: new Date("2022-12-01"),
					url_address:
						"https://images.unsplash.com/photo-1677758189069-3a47f0e30ba3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
				},
				{
					name: "SHOOTING STAR",
					description: "Energy drink for those who rock",
					submission_date: new Date("2022-11-01"),
					url_address:
						"https://images.unsplash.com/photo-1677747410126-4500e928cfa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
				},
				{
					name: "BIG Bang",
					description: "Powerful energy drink with unique flavors",
					submission_date: new Date("2023-01-01"),
					url_address: "https://www.youtube.com/watch?v=Su6kidaGW_8",
				},
				{
					name: "Coca-Cola Energy",
					description: "Classic Coca-Cola flavor with an energy boost",
					submission_date: new Date("2022-01-01"),
					url_address: "https://www.youtube.com/watch?v=Su6kidaGW_8",
				},
				{
					name: "Mountain HIGH",
					description: "Energy drink for gamers",
					submission_date: new Date("2023-02-01"),
					url_address:
						"https://images.unsplash.com/photo-1608995473346-e9b35720f56f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
				},
				{
					name: "Full OF LIFE",
					description: "Energy drink for extreme sports enthusiasts",
					submission_date: new Date("2022-09-01"),
					url_address:
						"https://images.unsplash.com/photo-1608995473346-e9b35720f56f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
				},
				{
					name: "NO HAIR",
					description: "High performance energy drink",
					submission_date: new Date("2022-08-01"),
					url_address:
						"https://images.unsplash.com/photo-1608995473346-e9b35720f56f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
				},
				{
					name: "HAPPY Monster",
					description: "Energizing coffee drink",
					submission_date: new Date("2022-07-01"),
					url_address:
						"https://images.unsplash.com/photo-1608995473346-e9b35720f56f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
				},
			],
			["id"]
		)
		.then(function (rows) {
			return knex("energizer_ratings").insert([
				{ energizer_id: rows[0].id, rating: 4 },
				{ energizer_id: rows[1].id, rating: 3 },
				{ energizer_id: rows[2].id, rating: 5 },
				{ energizer_id: rows[3].id, rating: 2 },
				{ energizer_id: rows[4].id, rating: 4 },
				{ energizer_id: rows[5].id, rating: 1 },
				{ energizer_id: rows[6].id, rating: 4 },
				{ energizer_id: rows[7].id, rating: 3 },
				{ energizer_id: rows[8].id, rating: 5 },
				{ energizer_id: rows[9].id, rating: 2 },
				{ energizer_id: rows[10].id, rating: 4 },
				{ energizer_id: rows[11].id, rating: 1 },
				{ energizer_id: rows[12].id, rating: 4 },
				{ energizer_id: rows[13].id, rating: 3 },
				{ energizer_id: rows[14].id, rating: 5 },
				{ energizer_id: rows[1].id, rating: 2 },
				{ energizer_id: rows[4].id, rating: 4 },
				{ energizer_id: rows[5].id, rating: 1 },
				{ energizer_id: rows[0].id, rating: 4 },
				{ energizer_id: rows[10].id, rating: 3 },
				{ energizer_id: rows[12].id, rating: 2 },
				{ energizer_id: rows[13].id, rating: 2 },
				{ energizer_id: rows[4].id, rating: 4 },
				{ energizer_id: rows[5].id, rating: 1 },
				{ energizer_id: rows[0].id, rating: 2 },
				{ energizer_id: rows[1].id, rating: 1 },
				{ energizer_id: rows[2].id, rating: 5 },
				{ energizer_id: rows[3].id, rating: 2 },
				{ energizer_id: rows[14].id, rating: 4 },
				{ energizer_id: rows[5].id, rating: 1 },
				{ energizer_id: rows[0].id, rating: 4 },
				{ energizer_id: rows[1].id, rating: 4 },
				{ energizer_id: rows[2].id, rating: 5 },
				{ energizer_id: rows[3].id, rating: 3 },
				{ energizer_id: rows[4].id, rating: 3 },
				{ energizer_id: rows[5].id, rating: 1 },
			]);
		});
};

exports.down = function (knex) {
	return knex("energizer_ratings")
		.delete()
		.then(() => {
			return knex("energizers").delete();
		});
};
