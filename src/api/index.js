const resturants = require("../fakeData/resturants").default.resturants;
const resturantsDetail = require("../fakeData/resturants").default
  .resturantsDetail;
import Endpoints from "./endpoints";
const axios = require("axios");

let history = [];
const apiCall = (endpoint, payload) => {
  const resp = axios({
    method: "post",
    url: endpoint,
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(payload),
  });
  return resp;
};

const triggerOTP = (email) => {
  const response = apiCall(Endpoints.email.trigger, {
    email: email,
  });
  return response;
};

const verifyOTP = (payload) => {
  const response = apiCall(Endpoints.email.verify, {
    verification_key: payload.verification_key,
    otp: payload.otp,
    check: payload.check,
  });
  return response;
};

const signUpUser = (payload) => {
  const response = apiCall(Endpoints.user.create, {
    name: payload.name,
    email: payload.email,
    address: payload.address,
    city: payload.city,
    password: payload.password,
  });
  return response;
};

const loginUser = (payload) => {
  const response = apiCall(Endpoints.user.login, payload);
  return response;
};

const getResturants = () => {
  return new Promise((resolve) => {
    setTimeout(function() {
      resolve(resturants);
    }, 1000);
  });
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

const logout = () => {
  console.log("Loged Out");
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
