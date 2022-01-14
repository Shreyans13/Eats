export default {
  state: {
    isAuthenticated: false,
    userName: "Rebecca Ann",
    userAddress: "",
    userEmail: "",
    randomPaymentString: "4532259913102589",
    userLocation: "",
    password: String,
    userImg:
      "https://image.shutterstock.com/image-vector/user-simple-vector-icon-illustration-600w-1765573355.jpg",
    jwtToken: "",
  },
  getters: {
    getUser: (state) => {
      return {
        name: state.userName,
        address: state.userAddress,
        raPaSy: state.randomPaymentString,
        img: state.userImg,
        loc: state.userLocation,
      };
    },
    getCity: (state) => {
      return state.userLocation;
    },
    getAuthentication: (state) => state.isAuthenticated,
  },
  mutations: {
    setAddress(state, payload) {
      state.userAddress = payload;
    },
    setCity(state, payload) {
      console.log(payload);
      state.userLocation = payload;
    },
    setUserData(state, { name, address, email, location, password }) {
      console.log("setUserData");
      console.log(name, address, email, location, password);
      if (name) state.userName = name;
      if (address) state.userAddress = address;
      if (email) state.userEmail = email;
      if (location) state.userLocation = location;
      if (password) state.password = password;
    },
    unsetUserData(state) {
      state.userName = "";
      state.userAddress = "";
      state.userEmail = "";
      state.userLocation = "";
      state.password = "word";
      state.isAuthenticated = false;
    },
  },
  actions: {
    updateAddress({ commit }, payload) {
      console.log(payload);
      commit("setAddress", payload);
    },
    getUserLocation({ commit }) {
      if (!navigator.geolocation) {
        alert("Geolocation is not supported by your browser");
      } else {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const key = "pk.ee127d8aab8981c5bf20facbba5ef31d";
            fetch(
              `https://us1.locationiq.com/v1/reverse.php?key=${key}&lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`
            )
              .then((res) => res.json())
              .then((res) => {
                console.log(res);
                commit("setAddress", res.display_name);
                commit("setCity", res.address.city);
              })
              .catch((err) => console.log(err));
          },
          (error) => console.log(error)
        );
      }
    },
  },
};
