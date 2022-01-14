const url = "https://4e52-103-112-21-234.ngrok.io";

export default {
  email: {
    trigger: `${url}` + "/email/trigger/otp",
    verify: `${url}` + "/email/verify/otp",
  },
};
