// import api from "../../api/index";

export default {
	state: {
		resturantName: "",
		cart: [],
		load: false,
	},
	getters: {
		getCart: (state) => state.cart,
		getName: (state) => state.resturantName,
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
	},
};
