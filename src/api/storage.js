const storage = {
  setOTPSessionToken(payload) {
    if (localStorage) {
      localStorage.setItem("OTPKEY", JSON.stringify(payload));
    }
  },

  getOTPSessionToken() {
    if (localStorage) {
      return JSON.parse(localStorage.getItem("OTPKEY")).verification_key;
    }
  },
  setJWTToken(payload) {
    if (localStorage) {
      localStorage.setItem("TOKEN", JSON.stringify(payload));
    }
  },
  getJWTToken() {
    if (localStorage) {
      return JSON.parse(localStorage.getItem("TOKEN")).verification_key;
    }
  },
  clearALL() {
    if (localStorage) {
      localStorage.clear();
    }
  },
};

export default storage;
