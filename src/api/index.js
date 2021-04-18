const resturants = require("../fakeData/resturants").default.resturants;
const resturantsDetail = require("../fakeData/resturants").default
	.resturantsDetail;

let getResturants = () => {
	return new Promise((resolve) => {
		setTimeout(function() {
			resolve(resturants);
		}, 1000);
	});
};

let getResturantsDetail = (id) => {
	return new Promise((resolve) => {
		setTimeout(function() {
			resolve({
				data: resturantsDetail.data.find((el) => el.id == id),
			});
		}, 1000);
	});
};

let postOrder = (order) => {
	console.log("OrderPosted");
	console.log(order);
};

let bookTable = (details) => {
	console.log("TableBooked");
	console.log(details);
};

let cancelTable = (details) => {
	console.log("TableCanceled");
	console.log(details);
};
export default {
	getResturantsDetail,
	getResturants,
	postOrder,
	bookTable,
	cancelTable,
};
