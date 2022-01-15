const url = "https://4448-103-112-21-234.ngrok.io";

export default {
  email: {
    trigger: `${url}` + "/email/trigger/otp",
    verify: `${url}` + "/email/verify/otp",
  },
  user: {
    create: `${url}` + "/user/create",
    login: `${url}` + "/user/login",
  },
};
