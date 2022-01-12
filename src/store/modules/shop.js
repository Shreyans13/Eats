export default {
  namespace: "true",
  state: {
    resturants: null,
    detailResturant: {},
    id: Number,
    searchQuery: "",
  },
  getters: {
    getResturants: (state) => {
      if (state.searchQuery)
        return state.resturants.filter((item) => {
          return state.searchQuery
            .toLowerCase()
            .split(" ")
            .every((v) => item.name.toLowerCase().includes(v));
        });
      else return state.resturants;
    },
    getDetailResturant: (state) => state.detailResturant,
    getSearchQuery: (state) => state.searchQuery,
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
    updateSearchQuery(state, payload) {
      state.searchQuery = payload;
    },
  },
  actions: {
    setSearchQuery({ commit }, query) {
      commit("updateSearchQuery", query);
    },
  },
};
