import API from "../api/index";

export const apiAction = {
  triggerOTP({ commit }, email) {
    console.log(commit);
    return API.triggerOTP(email);
  },
  verifyOTP({ commit }, payload) {
    console.log(commit);
    console.log(payload);
  },
  updateUserData({ commit }, payload) {
    commit("setUserData", { name: "shreyans" });
    API.signUpUser(payload);
  },
  setResturants({ commit, state }) {
    console.log("this.setResturants called");
    console.log(state);
    if (!state.shop.resturants) {
      console.log("called here");
      commit("updateLoadingState", true);
      API.getResturants().then((resturants) => {
        console.log(resturants);
        commit("updateResturants", resturants.data);
        commit("updateLoadingState", false);
      });
    }
  },
  setDetailResturant({ commit, state }, id) {
    if (
      (Object.keys(state.shop.detailResturant).length === 0 &&
        state.shop.detailResturant.constructor === Object) ||
      state.shop.id != id
    ) {
      commit("updateId", id);
      commit("updateLoadingState", true);
      API.getResturantsDetail(id).then((resturant) => {
        commit("updateDetailResturants", resturant.data);
        commit("updateLoadingState", false);
      });
    }
  },
  postOrder({ getters }) {
    API.postOrder({ user: getters.getUser, order: getters.getOrder });
  },
  bookTable({ getters }) {
    API.bookTable({
      user: getters.getUser,
      resturnat: getters.getDetailResturant,
    });
  },
  unbookTable({ getters }) {
    API.cancelTable({
      user: getters.getUser,
      resturnat: getters.getDetailResturant,
    });
  },
  deleteUserData({ commit }) {
    commit("unsetUserData");
    API.logout();
  },
};
