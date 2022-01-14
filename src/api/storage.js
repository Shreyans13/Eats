const storage = {
  setOTPSessionToken(payload) {
    console.log("setOTPSessionToken");
    console.log(payload);
    if (localStorage) {
      localStorage.setItem("OTPKEY", JSON.stringify(payload));
    }
  },
  getOTPSessionToken() {
    if (localStorage) {
      return JSON.parse(localStorage.getItem("OTPKEY")).verification_key;
    }
  },
  clearALL() {
    if (localStorage) {
      localStorage.clear();
    }
  },
};

export default storage;
