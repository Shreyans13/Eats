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
			console.log(id);
			console.log(commit);
			api.getResturantsDetail(id).then((resturant) => {
				console.log(resturant.data);
				commit("updateDetailResturants", resturant.data);
			});
		},
	},
};
