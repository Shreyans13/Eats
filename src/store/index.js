import Vue from "vue";
import Vuex from "vuex";

import shop from "./modules/shop";
import cart from "./modules/cart";
import user from "./modules/user";

import { apiAction } from "./apiActions";
console.log(apiAction);
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
          // showBottomNav: true,
          showBottomNav: () => {
            return true;
          },
        },
      },
      {
        text: "Go Out",
        to: "/go-out",
        icon: "fas fa-shoe-prints",
        meta: {
          showToolbar: false,
          // showBottomNav: true,
          showBottomNav: () => {
            return true;
          },
        },
      },
      {
        text: "History",
        to: "/history",
        icon: "fas fa-utensils",
        meta: {
          showToolbar: true,
          // showBottomNav: true,
          showBottomNav: () => {
            // console.log(user)
            if (user.state.isAuthenticated) return true;
            else return false;
          },
        },
      },
      {
        text: "Account",
        to: "/account",
        icon: "mdi-account-child-circle",
        meta: {
          showToolbar: true,
          // showBottomNav: true,
          showBottomNav: () => {
            // console.log(user)
            if (user.state.isAuthenticated) return true;
            else return false;
          },
        },
      },
      {
        text: "SignUp / Login",
        to: "/new-user",
        icon: "fas fa-sign-in-alt",
        meta: {
          showToolbar: true,
          // showBottomNav: true,
          showBottomNav: () => {
            // console.log(user)
            if (user.state.isAuthenticated) return false;
            else return true;
          },
        },
      },
    ],
    theme: true,
    loading: false,
  },
  getters: {
    appBarLinks: (state) =>
      state.items.filter((link) => link.meta.showToolbar === true),
    bottomLink: (state) =>
      state.items.filter((link) => link.meta.showBottomNav() === true),
    theme: (state) => state.theme,
    loading: (state) => state.loading,
  },
  mutations: {
    updateLoadingState(state, payload) {
      state.loading = payload;
    },
  },
  actions: apiAction,
  modules: {
    shop,
    cart,
    user,
  },
});
