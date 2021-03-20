import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		items: [
			{
				text: "Order",
				to: "/",
				icon: "fas fa-shopping-bag",
				meta: {
					showToolbar: true,
					showBottomNav: true,
				},
			},
			{
				text: "Go Out",
				to: "/go-out",
				icon: "fas fa-shoe-prints",
				meta: {
					showToolbar: false,
					showBottomNav: true,
				},
			},
			{
				text: "History",
				to: "/history",
				icon: "fas fa-utensils",
				meta: {
					showToolbar: true,
					showBottomNav: true,
				},
			},
			{
				text: "Account",
				to: "/account",
				icon: "mdi-account-child-circle",
				meta: {
					showToolbar: true,
					showBottomNav: true,
				},
			},
		],
	},
	getters: {
		links: (state) => state.items,
		appBarLinks: (state) =>
			state.items.filter((link) => link.meta.showToolbar === true),
		bottomLink: (state) =>
			state.items.filter((link) => link.meta.showBottomNav === true),
	},
	mutations: {},
	actions: {},
	modules: {},
});
