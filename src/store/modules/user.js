export default {
	state: {
		userName: "Rebecca Ann",
		userAddress: "",
		userEmail: "jw1xf5lyckb@temporary-mail.net",
		randomPaymentString: "4532259913102589",
		userLocation: "",
		userImg:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
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
	},
	mutations: {
		setAddress(state, payload) {
			state.userAddress = payload;
		},
		setCity(state, payload) {
			console.log(payload);
			state.userLocation = payload;
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
