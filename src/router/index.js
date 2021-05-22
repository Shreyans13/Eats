import Vue from "vue";
import VueRouter from "vue-router";
import Order from "@/views/Order.vue";
// import Resturant from "@/views/Resturant.vue";
Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Order",
		component: Order,
	},
	{
		path: "/go-out",
		name: "Go Out",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "goout" */ "../views/GoOut.vue"),
	},
	{
		path: "/history",
		name: "History",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "history" */ "../views/History.vue"),
	},

	{
		path: "/account",
		name: "Account",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "account" */ "../views/Account.vue"),
	},
	{
		path: "/order/:id",
		name: "Menu",
		// component: Resturant,
		component: () =>
			import(/* webpackChunkName: "menu" */ "../views/Menu.vue"),
	},
	{
		path: "/order/:id/book-resturant",
		name: "BookResturant",
		// component: Resturant,
		component: () =>
			import(
				/* webpackChunkName: "bookresturant" */ "../views/BookResturant.vue"
			),
	},
	{
		path: "/order/:id/confirm-order",
		name: "ConfirmOrder",
		// component: Resturant,
		component: () =>
			import(
				/* webpackChunkName: "confirmorder" */ "../views/ConfirmOrder.vue"
			),
	},
	{
		path: "/history/:id/summary",
		name: "Summary",
		component: () =>
			import(
				/* webpackChunkName: "ordersummary" */ "../views/OrderSummary.vue"
			),
	},
	{
		path: "/order/:id/order-delivery/",
		name: "OrderDelivery",
		component: () =>
			import(
				/* webpackChunkName: "orderdelivery" */ "../views/OrderDelivery.vue"
			),
	},
	{
		path: "/signup",
		name: "Sign Up",
		component: () =>
		import(
			/* webpackChunkName: "signup" */ "../views/SignUp.vue"
		),
	}
];

const router = new VueRouter({
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else {
			return { x: 0, y: 0 };
		}
	},
});

export default router;
