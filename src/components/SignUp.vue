<template>
  <div class="mt-3">
    <div v-show="box === 'EMAIL'">
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
            :loading="loading"
            @click="loading = true"
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
        <form @submit.prevent="signUpUser">
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
import { mapActions } from "vuex";
import router from "../router/index";

extend("digits", digits);
extend("required", required);
extend("regex", {
  ...regex,
  message: "{_field_} {_value_} does not match {regex}",
});
extend("email", {
  ...email,
  message: "Email must be valid",
});
extend("length", length);
extend("verify_password", {
  message: `The password must contain at least: 1 uppercase letter, 1 lowercase letter, 1 number, and one special character (E.g. , . _ & ? etc)`,
  validate: (value) => {
    var strongRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})"
    );
    return strongRegex.test(value);
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
    email: "vabusi@ryteto.me",
    address: "",
    city: "",
    password: "asdfA234@",
    otp: "123123",
    show1: false,
    box: "EMAIL",
    show2: false,
    loading: false,
  }),

  methods: {
    ...mapActions([
      "updateUserData",
      "triggerOTP",
      "verifyOTP", //also supports payload `this.nameOfAction(amount)`
    ]),
    trigger() {
      this.triggerOTP(this.email)
        .then((r) => {
          console.log(r);
          this.loading = false;
          this.box = "OTP";
        })
        .catch((error) => {
          console.error(error);
        });
    },
    verify() {
      this.verifyOTP(this.otp);
      this.box = "CREATE";
    },
    signUpUser() {
      this.$refs.observer.validate();
      this.updateUserData({
        name: this.name,
        email: this.email,
        address: this.address,
        city: this.city,
        password: this.password,
      });
      router.push({ name: "Order" });
    },
    change() {
      console.log("changed");
      this.box == "EMAIL"
        ? (this.box = "OTP")
        : this.box == "OTP"
        ? (this.box = "CREATE")
        : this.box;
    },
    reVerify() {
      this.box = "EMAIL";
    },
  },
};
</script>
