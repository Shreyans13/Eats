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
			import(/* webpackChunkName: "about" */ "../views/GoOut.vue"),
	},
	{
		path: "/history",
		name: "History",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/History.vue"),
	},

	{
		path: "/account",
		name: "Account",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/Account.vue"),
	},
	{
		path: "/order/:id",
		name: "Resturant",
		// component: Resturant,
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/Menu.vue"),
	},
	{
		path: "/order/:id/confirm-order",
		name: "ConfirmOrder",
		// component: Resturant,
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/ConfirmOrder.vue"),
	},
	{
		path: "/history/:id/summary",
		name: "Summary",
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/OrderSummary.vue"),
	},
	{
		path: "/order/:id/order-delivery/",
		name: "OrderDelivery",
		component: () =>
			import(
				/* webpackChunkName: "about" */ "../views/OrderDelivery.vue"
			),
	},
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
