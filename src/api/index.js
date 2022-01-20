import Endpoints from "./endpoints";
const axios = require("axios");
import STORAGE from "./storage";
const resturantsDetail = require("../fakeData/resturants").default
  .resturantsDetail;

let history = [];
const apiCall = (endpoint, method, payload, loggedIN) => {
  const resp = axios({
    method: method,
    url: endpoint,
    headers: loggedIN
      ? {
          "Content-Type": "application/json",
          authorization: "Bearer " + STORAGE.getJWTToken(),
        }
      : { "Content-Type": "application/json" },
    data: JSON.stringify(payload),
  });
  return resp;
};

const triggerOTP = (payload) => {
  return apiCall(Endpoints.email.trigger, "post", payload, false);
};

const verifyOTP = (payload) => {
  return apiCall(Endpoints.email.verify, "post", payload, false);
};

const signUpUser = (payload) => {
  return apiCall(Endpoints.user.create, "post", payload, false);
};

const loginUser = (payload) => {
  return apiCall(Endpoints.user.login, "post", payload, false);
};

const logout = (payload) => {
  return apiCall(Endpoints.user.logout, "delete", payload, true);
};

const getResturants = (payload) => {
  return apiCall(Endpoints.resturant.get, "post", payload, true);
};

const getResturantsDetail = (id) => {
  return new Promise((resolve) => {
    setTimeout(function() {
      resolve({
        data: resturantsDetail.data.find((el) => el.id == id),
      });
    }, 1000);
  });
};

const getHistory = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(history);
    }, 1000);
  });
};

const postOrder = (order) => {
  console.log("OrderPosted");
  console.log(order);
  history.push(order);
  console.log(history);
};

const bookTable = (details) => {
  console.log("TableBooked");
  console.log(details);
};

const cancelTable = (details) => {
  console.log("TableCanceled");
  console.log(details);
};

export default {
  triggerOTP,
  verifyOTP,
  signUpUser,
  loginUser,

  getResturantsDetail,
  getResturants,
  getHistory,
  postOrder,
  bookTable,
  cancelTable,
  logout,
};
