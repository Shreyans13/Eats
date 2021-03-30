let resturants = {
	data: [
		{
			name: "Yogesh`s Cafe",
			rating: "4.5",
			type: "North Crusines",
			timing: "10:00am",
			rate: "75",
			id: "123",
			imgSrc:
				"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
		},
		{
			name: "Vtrix`s Cafe",
			rating: "4.0",
			type: "South Crusines",
			timing: "11:00am",
			rate: "100",
			id: "456",
			imgSrc:
				"https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
		},
	],
};

let getResturants = () => {
	return new Promise((resolve) => {
		setTimeout(function() {
			resolve(resturants);
		}, 6000);
	});
};

let resturantsDetail = {
	data: [
		{
			name: "Yogesh`s Cafe",
			rating: "4.7",
			reviews: "413",
			type: "North Crusines",
			shortDesc:
				"In the coffee shop we are as awkward lovers, pretending to be there of convenience, afraid of our need to connect to one another. This place filled with people always so close and so far apart... this is the community of our era... as close as we can be without admitting the truth.",
			deliveryTime: "30 mins",
			rate: "75",
			id: "123",
			imgSrc: [
				"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
				"https://images.unsplash.com/photo-1432139509613-5c4255815697?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzN8fGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
				"https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
			],
			items: {
				recommended: [
					{ name: "Chole Bhature", price: "50", type: "veg" },
					{ name: "Rogan Josh", price: "60", type: "non-veg" },
					{ name: "Stuffed Bati", price: "70", type: "veg" },
				],
				specials: [
					{ name: "Chole Bhature", price: "50", type: "veg" },
					{ name: "Rogan Josh", price: "60", type: "non-veg" },
					{ name: "Stuffed Bati", price: "70", type: "veg" },
					{
						name: "Chicken Dum Biryani",
						price: "70",
						type: "non-veg",
					},
					{ name: "Malai ka Kheer", price: "110", type: "veg" },
				],
			},
		},
		{
			name: "Vtrix`s Cafe",
			rating: "4.0",
			reviews: "400",
			type: "South Crusines",
			shortDesc: "",
			deliveryTime: "45 mins",
			rate: "100",
			id: "456",
			imgSrc: [
				"https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTd8fGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
				"https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzh8fGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
				"https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
			],
			items: {
				recommended: [
					{ name: "Chole Bhature", price: "50", type: "veg" },
					{ name: "Rogan Josh", price: "60", type: "non-veg" },
					{ name: "Stuffed Bati", price: "70", type: "veg" },
				],
				specials: [
					{ name: "Chole Bhature", price: "50", type: "veg" },
					{ name: "Rogan Josh", price: "60", type: "non-veg" },
					{ name: "Stuffed Bati", price: "70", type: "veg" },
					{
						name: "Chicken Dum Biryani",
						price: "70",
						type: "non-veg",
					},
					{ name: "Malai ka Kheer", price: "110", type: "veg" },
				],
			},
		},
	],
};

let getResturantsDetail = (id) => {
	return new Promise((resolve) => {
		setTimeout(function() {
			resolve({
				data: resturantsDetail.data.find((el) => el.id == id),
			});
		}, 6000);
	});
};

export default { getResturantsDetail, getResturants };

// {
// 			name: "Yogesh`s Cafe",
// 			rating: "4.5",
// 			type: "North Crusines",
// 			timing: "10:00am",
// 			rate: "75",
// 			id: "123",
// 			imgSrc:
// 				"https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
// 		},
// 		{
// 			name: "Vtrix`s Cafe",
// 			rating: "4.0",
// 			type: "South Crusines",
// 			timing: "11:00am",
// 			rate: "100",
// 			id: "456",
// 			imgSrc:
// 				"https://images.unsplash.com/photo-1432139509613-5c4255815697?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzN8fGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
// 		},
