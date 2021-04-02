// import api from "../../api/index";

export default {
	state: {
		resturantName: "",
		cart: [],
		load: false,
		totalPrice: Number,
		totalQuantity: Number,
		deliveryCharges: Number,
	},
	getters: {
		getCart: (state) => state.cart,
		getName: (state) => state.resturantName,
		getOrder: (state) => {
			return {
				rName: state.resturantName,
				totalPrice: state.totalPrice,
				totalItems: state.totalQuantity,
				cart: state.cart,
				deliveryCharges: state.deliveryCharges,
			};
		},
	},
	mutations: {
		setCart(state, payload) {
			state.cart = payload;
		},
		setLoad(state, payload) {
			state.load = payload;
		},
		setResturantName(state, payload) {
			state.resturantName = payload;
		},
		setTotalPrice(state, payload) {
			state.totalPrice = payload;
		},
		setTotalQuantity(state, payload) {
			state.totalQuantity = payload;
		},
		setDeliveryCharges(state, payload) {
			state.deliveryCharges = payload;
		},
	},
	actions: {
		updateCart({ commit }, payload) {
			commit("setCart", payload);
		},
		updateLoad({ commit }, payload) {
			commit("setLoad", payload);
		},
		updateName({ commit }, payload) {
			commit("setResturantName", payload);
		},
		updateTotalPrice({ commit }, payload) {
			commit("setTotalPrice", payload);
		},
		updateTotalQuantity({ commit }, payload) {
			commit("setTotalQuantity", payload);
		},
		updateDeliveryCharges({ commit }, payload) {
			commit("setDeliveryCharges", payload);
		},
	},
};
