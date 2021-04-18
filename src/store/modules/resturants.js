import api from "../../api/index";

export default {
	namespace: "true",
	state: {
		resturants: null,
		detailResturant: {},
		id: Number,
	},
	getters: {
		getResturants: (state) => state.resturants,
		getDetailResturant: (state) => state.detailResturant,
	},
	mutations: {
		updateResturants(state, payload) {
			state.resturants = payload;
		},
		updateDetailResturants(state, payload) {
			state.detailResturant = payload;
		},
		updateId(state, payload) {
			state.id = payload;
		},
	},
	actions: {
		setResturants({ commit, state }) {
			if (!state.resturants) {
				commit("updateLoadingState", true);
				api.getResturants().then((resturants) => {
					commit("updateResturants", resturants.data);
					commit("updateLoadingState", false);
				});
			}
		},
		setDetailResturant({ commit, state }, id) {
			if (
				(Object.keys(state.detailResturant).length === 0 &&
					state.detailResturant.constructor === Object) ||
				state.id != id
			) {
				commit("updateId", id);
				commit("updateLoadingState", true);
				api.getResturantsDetail(id).then((resturant) => {
					commit("updateDetailResturants", resturant.data);
					commit("updateLoadingState", false);
				});
			}
		},
		postOrder({ getters }) {
			api.postOrder({ user: getters.getUser, order: getters.getOrder });
		},
		bookTable({ getters }) {
			api.bookTable({
				user: getters.getUser,
				resturnat: getters.getDetailResturant,
			});
		},
		unbookTable({ getters }) {
			api.cancelTable({
				user: getters.getUser,
				resturnat: getters.getDetailResturant,
			});
		},
	},
};
