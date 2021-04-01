// import api from "../../api/index";

export default {
	state: {
		cart: [],
		load: false,
	},
	getters: {
		getCart: (state) => state.cart,
	},
	mutations: {
		setCart(state, payload) {
			state.cart = payload;
		},
		setLoad(state, payload) {
			state.load = payload;
		},
	},
	actions: {
		updateCart({ commit }, payload) {
			commit("setCart", payload);
		},
		updateLoad({ commit }, payload) {
			commit("setLoad", payload);
		},
	},
};
