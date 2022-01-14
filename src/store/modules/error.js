export default {
  namespace: "true",
  state: {
    status: "",
    statusCode: 0,
    error: "",
    errorMessage: "",
    apiLoading: false,
  },
  getters: {
    getLoading: (state) => state.apiLoading,
    // getStatu: (state) => state.apiLoading,
    getError: (state) => {
      return {
        status: state.status,
        message: state.errorMessage,
      };
    },
  },
  mutations: {
    setError(state, payload) {
      state.statusCode = payload.statusCode;
      state.error = payload.error;
      state.errorMessage = payload.errorMessage;
    },
    deleteError(state) {
      state.statusCode = null;
      state.error = null;
      state.errorMessage = null;
    },
    toggleLoading(state, payload) {
      console.log(state.apiLoading);
      state.apiLoading = payload;
      // state.apiLoading = !state.apiLoading;
      console.log(state.apiLoading);
    },
    apiSuccess(state) {
      state.apiLoading = false;
      state.status = "SUCCESS";
      state.statusCode = null;
      state.error = null;
      state.errorMessage = null;
    },
    apiFailure(state, payload) {
      state.apiLoading = false;
      state.status = "FAILURE";
      state.statusCode = payload.statusCode;
      state.error = payload.error;
      state.errorMessage = payload.errorMessage;
    },
  },
  actions: {},
};
