// import api from "../../api/index";
const defaultState = () => {
	return {
		resturantName: "",
		resturantAdress: "",
		resturantImg: "",
		cart: [],
		load: false,
		totalPrice: Number,
		totalQuantity: Number,
		deliveryCharges: Number,
	};
};
export default {
	state: defaultState,
	getters: {
		getCart: (state) => state.cart,
		getName: (state) => state.resturantName,
		getOrder: (state) => {
			return {
				rName: state.resturantName,
				rAdd: state.resturantAdress,
				rImg: state.resturantImg,
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
		setResturantAddress(state, payload) {
			state.resturantAdress = payload;
		},
		setResturantImage(state, payload) {
			state.resturantImg = payload;
		},
		resetState(state) {
			Object.assign(state, defaultState());
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
		updateResturantAddress({ commit }, payload) {
			commit("setResturantAddress", payload);
		},
		updateResturantImage({ commit }, payload) {
			commit("setResturantImage", payload);
		},
		updateState({ commit }) {
			console.log("ustate");
			commit("resetState");
		},
	},
};
