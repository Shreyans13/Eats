import api from "../../api/index";

export default {
	namespace: "true",
	state: {
		resturants: null,
		detailResturant: {},
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
		setDetailResturant({ commit }, id) {
			commit("updateLoadingState", true);
			api.getResturantsDetail(id).then((resturant) => {
				commit("updateDetailResturants", resturant.data);
				commit("updateLoadingState", false);
			});
		},
	},
};
