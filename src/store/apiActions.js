import API from "../api/index";
import STORAGE from "../api/storage";

export const apiAction = {
  triggerOTP({ commit }, email) {
    commit("toggleLoading", true);
    return API.triggerOTP({ email: email })
      .then((response) => {
        STORAGE.setOTPSessionToken(response.data);
        commit("apiSuccess");
        return "SUCCESS";
      })
      .catch((error) => {
        const err = error.toJSON();
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
  verifyOTP({ state, commit }, otp) {
    commit("toggleLoading", true);
    return API.verifyOTP({
      otp: otp,
      verification_key: STORAGE.getOTPSessionToken(),
      check: state.user.userEmail,
    })
      .then(() => {
        commit("apiSuccess");
        return "SUCCESS";
      })
      .catch((error) => {
        const err = error.toJSON();
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
  signUpUser({ state, commit }, password) {
    commit("toggleLoading", true);
    return API.signUpUser({
      name: state.user.userName,
      email: state.user.userEmail,
      address: state.user.userAddress,
      city: state.user.userCity,
      password: password,
    })
      .then((response) => {
        STORAGE.setJWTToken(response.data.token);
        commit("apiSuccess");
        commit("setAuthentication", true);
        return "SUCCESS";
      })
      .catch((error) => {
        const err = error.toJSON();
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

  loginUser({ state, commit }, password) {
    commit("toggleLoading", true);
    return API.loginUser({
      email: state.user.userEmail,
      password: password,
    })
      .then((response) => {
        STORAGE.setJWTToken(response.data.token);
        commit("setUserData", response.data.user);
        commit("apiSuccess");
        commit("setAuthentication", true);
        return "SUCCESS";
      })
      .catch((error) => {
        const err = error.toJSON();
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
  logoutUser({ commit }) {
    commit("unsetUserData");
    return API.logout({})
      .then(() => {
        commit("apiSuccess");
        commit("setAuthentication", false);
        commit("unsetUserData");
        STORAGE.clearALL();
        return "SUCCESS";
      })
      .catch((error) => {
        const err = error.toJSON();
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
    commit("setUserData", payload);
  },
  setResturants({ commit, state }) {
    if (!state.shop.resturants) {
      commit("updateLoadingState", true);
      API.getResturants().then((resturants) => {
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
};
