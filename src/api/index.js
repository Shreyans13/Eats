const resturants = require("../fakeData/resturants").default.resturants;
const resturantsDetail = require("../fakeData/resturants").default
	.resturantsDetail;

let history = [];

const getResturants = () => {
	return new Promise((resolve) => {
		setTimeout(function() {
			resolve(resturants);
		}, 1000);
	});
};

const getResturantsDetail = (id) => {
	return new Promise((resolve) => {
		setTimeout(function() {
			resolve({
				data: resturantsDetail.data.find((el) => el.id == id),
			});
		}, 1000);
	});
};

const getHistory = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(history);
		}, 1000);
	});
};

const postOrder = (order) => {
	console.log("OrderPosted");
	console.log(order);
	history.push(order);
	console.log(history);
};

const bookTable = (details) => {
	console.log("TableBooked");
	console.log(details);
};

const cancelTable = (details) => {
	console.log("TableCanceled");
	console.log(details);
};

const signUpUser = user => {
	console.log("User Signed Up")
	console.log(user)
}

const logout = () => {
	console.log("Loged Out")
}
export default {
	getResturantsDetail,
	getResturants,
	getHistory,
	postOrder,
	bookTable,
	cancelTable,
	signUpUser,
	logout
};
