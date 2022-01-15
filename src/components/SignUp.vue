<template>
  <div class="mt-3">
    <v-alert
      text
      prominent
      type="error"
      icon="mdi-cloud-alert"
      v-if="Error.status === 'FAILURE'"
    >
      {{ Error.message }}
    </v-alert>
    <div v-show="box === 'EMAIL'">
      <div class="text-center">
        <v-btn
          plain
          elevation="2"
          color="success"
          align="center"
          @click="alreadyVerfied"
        >
          <v-icon small class="mr-3">fas fa-user-check</v-icon> EMAIL Already
          verified
        </v-btn>
      </div>
      <validation-observer ref="observer" v-slot="{ invalid }">
        <form @submit.prevent="trigger">
          <validation-provider
            v-slot="{ errors }"
            name="email"
            rules="required|email"
          >
            <v-text-field
              v-model="email"
              :error-messages="errors"
              label="E-mail"
              required
            ></v-text-field>
          </validation-provider>
          <v-btn
            color="success"
            class="mr-4 mt-3"
            type="submit"
            :disabled="invalid"
            block
            elevation="3"
            :loading="getLoading"
          >
            Send OTP
          </v-btn>
        </form>
      </validation-observer>
    </div>
    <div v-show="box === 'OTP'">
      <validation-observer ref="observer" v-slot="{ invalid }">
        <form @submit.prevent="verify">
          <validation-provider
            v-slot="{ errors }"
            name="otp"
            rules="required|digits:6|length:6"
          >
            <v-text-field
              v-model="otp"
              :error-messages="errors"
              label="OTP"
              :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show2 ? 'text' : 'password'"
              @click:append="show2 = !show2"
              required
            ></v-text-field>
          </validation-provider>
          <v-btn
            color="success"
            class="mr-4 mt-3"
            type="submit"
            :disabled="invalid"
            block
            elevation="3"
            :loading="getLoading"
          >
            Verify OTP
          </v-btn>
        </form>
      </validation-observer>
    </div>
    <div v-show="box === 'CREATE'">
      <div class="text-center">
        <v-btn
          plain
          elevation="2"
          color="success"
          align="center"
          @click="reVerify"
        >
          <v-icon small class="mr-3">fas fa-user-check</v-icon> Verify other
          Email ID
        </v-btn>
      </div>
      <validation-observer ref="observer" v-slot="{ invalid }">
        <form @submit.prevent="create">
          <validation-provider v-slot="{ errors }" name="Name" rules="required">
            <v-text-field
              v-model="name"
              :error-messages="errors"
              label="Name"
              required
            ></v-text-field>
          </validation-provider>
          <validation-provider
            v-slot="{ errors }"
            name="email"
            rules="required|email"
          >
            <v-text-field
              disabled
              v-model="email"
              :error-messages="errors"
              label="E-mail"
              required
            ></v-text-field>
          </validation-provider>
          <validation-provider
            v-slot="{ errors }"
            name="password"
            rules="required|verify_password"
          >
            <v-text-field
              v-model="password"
              :error-messages="errors"
              label="Password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show1 ? 'text' : 'password'"
              @click:append="show1 = !show1"
              required
            ></v-text-field>
          </validation-provider>

          <validation-provider
            v-slot="{ errors }"
            name="Address"
            rules="required"
          >
            <v-text-field
              v-model="address"
              :error-messages="errors"
              label="Address"
              required
            ></v-text-field>
          </validation-provider>

          <validation-provider v-slot="{ errors }" name="city" rules="required">
            <v-text-field
              v-model="city"
              :error-messages="errors"
              label="City"
              required
            ></v-text-field>
          </validation-provider>

          <v-btn
            color="success"
            class="mr-4 mt-3"
            type="submit"
            :disabled="invalid"
            block
            elevation="3"
            :loading="getLoading"
          >
            Sign Up
          </v-btn>
        </form>
      </validation-observer>
    </div>
  </div>
</template>

<script>
import {
  required,
  digits,
  email,
  regex,
  length,
} from "vee-validate/dist/rules";
import { extend, ValidationObserver, ValidationProvider } from "vee-validate";
import { mapActions, mapGetters } from "vuex";
import router from "../router/index";

extend("digits", digits);
extend("required", required);
extend("regex", regex);
extend("email", email);
extend("length", length);

extend("verify_password", {
  message: `The password must contain at least: 1 uppercase letter, 1 lowercase letter, 1 number, and one special character (E.g. , . _ & ? etc)`,
  validate: (value) => {
    return new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})"
    ).test(value);
  },
});

export default {
  name: "SignUp",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    name: "",
    email: "qojinabi@ryteto.me",
    address: "",
    city: "",
    password: "asdfA234@",
    otp: "111111",
    show1: false,
    box: "EMAIL",
    show2: false,
    // loading: false,
  }),
  computed: {
    ...mapGetters({ getLoading: "getLoading", Error: "getError" }),
  },
  methods: {
    ...mapActions(["updateUserData", "triggerOTP", "verifyOTP", "signUpUser"]),

    trigger() {
      this.updateUserData({
        email: this.email,
      });
      this.triggerOTP(this.email).then((status) => {
        console.log(status);
        if (status === "SUCCESS") {
          console.log("OTP");
          this.box = "OTP";
        }
      });
    },
    verify() {
      this.verifyOTP(this.otp).then((status) => {
        console.log(status);
        if (status === "SUCCESS") {
          console.log("CREATE");
          this.box = "CREATE";
        }
      });
      // this.box = "CREATE";
    },
    create() {
      console.log("CREATE METHOD CALLED");
      this.$refs.observer.validate();
      this.updateUserData({
        name: this.name,
        email: this.email,
        address: this.address,
        city: this.city,
      });
      this.signUpUser(this.password).then((status) => {
        console.log(status);
        if (status === "SUCCESS") {
          router.push({ name: "Order" });
        }
      });
      //
    },
    change() {
      console.log("changed");
      this.box == "EMAIL"
        ? (this.box = "OTP")
        : this.box == "OTP"
        ? (this.box = "CREATE")
        : this.box;
    },
    alreadyVerfied() {
      this.box = "CREATE";
    },
    reVerify() {
      this.box = "EMAIL";
    },
  },
};
</script>
