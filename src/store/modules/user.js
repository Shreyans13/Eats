export default {
	state: {
		userName: "Rebecca Ann",
		userAddress: "Kaka Halwai Estate, Parvati, Parvati, Mumbai",
		userEmail: "jw1xf5lyckb@temporary-mail.net",
		randomPaymentString: "4532259913102589",
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
			};
		},
	},
	mutations: {
		setAddress(state, payload) {
			state.userAddress = payload;
		},
	},
	actions: {
		updateAddress({ commit }, payload) {
			console.log(payload);
			commit("setAddress", payload);
		},
	},
};
