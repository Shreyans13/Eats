import Vue from "vue";
import VueRouter from "vue-router";
import Order from "@/views/Order.vue";
import store from "@/store/index.js";
// import Resturant from "@/views/Resturant.vue";
Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Order",
		component: Order,
		meta: {
			requiresAuth: false
		},
	},
	{
		path: "/go-out",
		name: "Go Out",
		meta: {
			requiresAuth: false
		},
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "goout" */ "../views/GoOut.vue"),
	},
	{
		path: "/history",
		name: "History",
		meta: {
			requiresAuth: true
		},
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "history" */ "../views/History.vue"),
	},

	{
		path: "/account",
		name: "Account",
		meta: {
			requiresAuth: true
		},
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "account" */ "../views/Account.vue"),
	},
	{
		path: "/order/:id",
		name: "Menu",
		meta: {
			requiresAuth: true
		},
		// component: Resturant,
		component: () =>
			import(/* webpackChunkName: "menu" */ "../views/Menu.vue"),
	},
	{
		path: "/order/:id/book-resturant",
		name: "BookResturant",
		meta: {
			requiresAuth: true
		},
		// component: Resturant,
		component: () =>
			import(
				/* webpackChunkName: "bookresturant" */ "../views/BookResturant.vue"
			),
	},
	{
		path: "/order/:id/confirm-order",
		name: "ConfirmOrder",
		meta: {
			requiresAuth: true
		},
		// component: Resturant,
		component: () =>
			import(
				/* webpackChunkName: "confirmorder" */ "../views/ConfirmOrder.vue"
			),
	},
	{
		path: "/history/:id/summary",
		name: "Summary",
		meta: {
			requiresAuth: true
		},
		component: () =>
			import(
				/* webpackChunkName: "ordersummary" */ "../views/OrderSummary.vue"
			),
	},
	{
		path: "/order/:id/order-delivery/",
		name: "OrderDelivery",
		meta: {
			requiresAuth: true
		},
		component: () =>
			import(
				/* webpackChunkName: "orderdelivery" */ "../views/OrderDelivery.vue"
			),
	},
	{
		path: "/new-user",
		name: "Register",
		component: () =>
		import(
			/* webpackChunkName: "register" */ "../views/Register.vue"
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
router.beforeEach((to, from, next) => {
	console.log(to.name)
	if (to.name === "Register" && store.getters.getAuthentication) next({ name: 'Account'})
	else if (to.matched.some(record => record.meta.requiresAuth) && !store.getters.getAuthentication ) next({ name: 'Register' })
  	else next()
})
export default router;
