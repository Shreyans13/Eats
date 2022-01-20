const url = "https://1f63-103-195-253-86.ngrok.io";

export default {
  email: {
    trigger: `${url}` + "/email/trigger/otp",
    verify: `${url}` + "/email/verify/otp",
  },
  user: {
    create: `${url}` + "/user/create",
    login: `${url}` + "/user/login",
    logout: `${url}` + "/user/logout",
  },
  resturant: {
    get: `${url}` + "/resturants",
  },
};
