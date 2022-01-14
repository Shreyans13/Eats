import API from "../api/index";
import STORAGE from "../api/storage";

export const apiAction = {
  triggerOTP({ commit }, email) {
    commit("toggleLoading", true);
    return API.triggerOTP(email)
      .then((response) => {
        console.log(response);
        STORAGE.setOTPSessionToken(response.data);
        commit("apiSuccess");
        return "SUCCESS";
      })
      .catch((error) => {
        console.log("error");
        console.log(typeof error);
        console.log(error);
        console.log(Object.keys(error));
        console.log(error.toJSON().status);
        console.log(JSON.stringify(error));
        const err = error.toJSON();
        console.log(err);
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        commit("apiFailure", {
          statusCode: error.response.status,
          error: err.name,
          errorMessage: error.response.data.error
            ? error.response.data.error
            : err.message,
        });
        return "FAILURE";
      });
  },
  // ---------------------------------------------------------------------------------
  verifyOTP({ state, commit }, otp) {
    commit("toggleLoading", true);
    console.log("state");
    console.log(state.user.userEmail);
    return API.verifyOTP({
      otp: otp,
      verification_key: STORAGE.getOTPSessionToken(),
      check: state.user.userEmail,
    })
      .then((response) => {
        console.log(response);
        // STORAGE.setOTPSessionToken(response.data);
        commit("apiSuccess");
        return "SUCCESS";
      })
      .catch((error) => {
        const err = error.toJSON();
        console.log(err);
        commit("apiFailure", {
          statusCode: error.response.status,
          error: err.name,
          errorMessage: error.response.data.error
            ? error.response.data.error
            : err.message,
        });
        return "FAILURE";
      });
  },
  updateUserData({ commit }, payload) {
    console.log("updateUserData");
    console.log(payload);
    commit("setUserData", payload);
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
