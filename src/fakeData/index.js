var faker = require("faker");

let resturants = {
	data: [
		// {
		// 	name: "Yogesh`s Cafe",
		// 	rating: "4.5",
		// 	type: "North Crusines",
		// 	timing: "10:00am",
		// 	rate: "75",
		// 	id: "123",
		// 	imgSrc:
		// 		"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
		// },
		// {
		// 	name: "Vtrix`s Cafe",
		// 	rating: "4.0",
		// 	type: "South Crusines",
		// 	timing: "11:00am",
		// 	rate: "100",
		// 	id: "456",
		// 	imgSrc:
		// 		"https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
		// },
	],
};
let resturantsDetail = {
	data: [
		{
			name: "Yogesh`s Cafe",
			rating: 4.7,
			reviews: "413",
			type: "North Crusines",
			deliveryCharges: 50,
			address: "Resturant Address goes here",
			img:
				"https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60",
			shortDesc:
				"In the coffee shop we are as awkward lovers, pretending to be there of convenience, afraid of our need to connect to one another. This place filled with people always so close and so far apart... this is the community of our era... as close as we can be without admitting the truth.",
			deliveryTime: "30 mins",
			rate: "75",
			id: "123",
			detailReviews: [
				{
					name: "Swarnim Doegar",
					review: "This app looks awaesome.",
					rating: 4,
				},
				{
					name: "Prasanna Kumar",
					review: "Hope food was better than the app",
					rating: 3,
				},
			],
			imgSrc: [
				"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
				"https://images.unsplash.com/photo-1432139509613-5c4255815697?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzN8fGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
				"https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
			],
			foodItems: [
				{
					type: "Recommended",
					list: [
						{
							name: "Chole Bhature",
							price: "50",
							type: "veg",
							imgSrc:
								"https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mzd8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60",
						},
						{
							name: "Rogan Josh",
							price: "60",
							type: "non-veg",
							imgSrc:
								"https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mzd8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60",
						},
						{
							name: "Stuffed Bati",
							price: "70",
							type: "veg",
							imgSrc:
								"https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mzd8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60",
						},
					],
				},
				{
					type: "Chef Specials",
					list: [
						{
							name: "Chicken Dum Biryani",
							price: "70",
							type: "non-veg",
							imgSrc:
								"https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mzd8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60",
						},
						{
							name: "Malai ka Kheer",
							price: "110",
							type: "veg",
							imgSrc:
								"https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mzd8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60",
						},
					],
				},
			],
		},
		{
			name: "Vtrix`s Cafe", // -------------
			rating: 4.0, // -----------------
			reviews: "400", // ------------
			type: "South Crusines", // -------------
			deliveryCharges: 50, // ----------
			address: "Resturant Address goes here", // ----
			// --------
			img:
				"https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60",
			shortDesc:
				"In the coffee shop we are as awkward lovers, pretending to be there of convenience, afraid of our need to connect to one another. This place filled with people always so close and so far apart... this is the community of our era... as close as we can be without admitting the truth.",

			deliveryTime: "45 mins",
			rate: "100",
			id: "456", // ---------------------------
			detailReviews: [
				{
					name: "Swarnim Doegar",
					review: "This app looks awaesome.",
					rating: 4,
				},
				{
					name: "Prasanna Kumar",
					review: "Hope food was better than the app",
					rating: 3,
				},
			],
			imgSrc: [
				"https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
				"https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
				"https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
			],
			foodItems: [
				{
					type: "Recommended",
					list: [
						{
							name: "Chole Bhature",
							price: "50",
							type: "veg",
							imgSrc:
								"https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mzd8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60",
						},
						{
							name: "Rogan Josh",
							price: "60",
							type: "non-veg",
							imgSrc:
								"https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mzd8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60",
						},
						{
							name: "Stuffed Bati",
							price: "70",
							type: "veg",
							imgSrc:
								"https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mzd8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60",
						},
					],
				},
				{
					type: "Chef Specials",
					list: [
						{
							name: "Chole Bhature",
							price: "50",
							type: "veg",
							imgSrc:
								"https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mzd8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60",
						},
						{
							name: "Rogan Josh",
							price: "60",
							type: "non-veg",
							imgSrc:
								"https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mzd8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60",
						},
						{
							name: "Stuffed Bati",
							price: "70",
							type: "veg",
							imgSrc:
								"https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mzd8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60",
						},
						{
							name: "Chicken Dum Biryani",
							price: "70",
							type: "non-veg",
							imgSrc:
								"https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mzd8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60",
						},
						{
							name: "Malai ka Kheer",
							price: "110",
							type: "veg",
							imgSrc:
								"https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mzd8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60",
						},
					],
				},
			],
		},
	],
};
let data = [];
for (let i = 0; i < 1; i++) {
	let id = faker.datatype.uuid();
	let name = faker.company.companyName();
	let rating = faker.datatype.number(5);
	resturants.data.push({
		name: name,
		rating: rating,
		type: "Crusines",
		time: "11:00am",
		rate: faker.datatype.number(1000),
		id: id,
		imgSrc: "https://source.unsplash.com/1600x900/?food",
	});
	resturantsDetail.data.push({
		id: id,
		name: name,
		rating: rating,
		type: "Crusines",
		reviews: faker.datatype.number(500),
		deliveryCharges: faker.datatype.number(500),
		address: faker.address.streetAddress(),
		img: "https://source.unsplash.com/1600x900/?resturant",
		shortDesc:
			"In the coffee shop we are as awkward lovers, pretending to be there of convenience, afraid of our need to connect to one another. This place filled with people always so close and so far apart... this is the community of our era... as close as we can be without admitting the truth.",
		deliveryTime: "45 mins",
		rate: faker.datatype.number(500),
		detailReviews: [
			{
				name: "Swarnim Doegar",
				review: "This app looks awaesome.",
				rating: 4,
			},
			{
				name: "Prasanna Kumar",
				review: "Hope food was better than the app",
				rating: 3,
			},
		],
		imgSrc: [
			"https://source.unsplash.com/1600x900/?resturant",
			"https://source.unsplash.com/1600x900/?resturant",
			"https://source.unsplash.com/1600x900/?resturant",
		],
		foodItems: [
			{
				type: "Recommended",
				list: [
					{
						name: "Chole Bhature",
						price: "50",
						type: "veg",
						imgSrc:
							"https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mzd8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60",
					},
					{
						name: "Rogan Josh",
						price: "60",
						type: "non-veg",
						imgSrc:
							"https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mzd8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60",
					},
					{
						name: "Stuffed Bati",
						price: "70",
						type: "veg",
						imgSrc:
							"https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mzd8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60",
					},
				],
			},
			{
				type: "Chef Specials",
				list: [
					{
						name: "Chole Bhature",
						price: "50",
						type: "veg",
						imgSrc:
							"https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mzd8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60",
					},
					{
						name: "Rogan Josh",
						price: "60",
						type: "non-veg",
						imgSrc:
							"https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mzd8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60",
					},
					{
						name: "Stuffed Bati",
						price: "70",
						type: "veg",
						imgSrc:
							"https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mzd8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60",
					},
					{
						name: "Chicken Dum Biryani",
						price: "70",
						type: "non-veg",
						imgSrc:
							"https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mzd8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60",
					},
					{
						name: "Malai ka Kheer",
						price: "110",
						type: "veg",
						imgSrc:
							"https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mzd8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60",
					},
				],
			},
		],
	});
}
console.log(resturants.data);
// let  = {
console.log(resturantsDetail);

// export default resturants;
// export default resturantsDetail;
