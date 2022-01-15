<template>
  <div>
    <v-alert
      text
      prominent
      type="error"
      icon="mdi-cloud-alert"
      v-if="Error.status === 'FAILURE'"
    >
      {{ Error.message }}
    </v-alert>
    <validation-observer ref="observer" v-slot="{ invalid }">
      <form @submit.prevent="submit">
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

        <v-btn
          class="mr-4 mt-3"
          type="submit"
          :disabled="invalid"
          block
          elevation="3"
          color="success"
          :loading="getLoading"
          >Log In
        </v-btn>
      </form>
    </validation-observer>
  </div>
</template>

<script>
import { required, digits, email, max, regex } from "vee-validate/dist/rules";
import { extend, ValidationObserver, ValidationProvider } from "vee-validate";
import router from "../router/index";
import { mapActions, mapGetters } from "vuex";

extend("digits", digits);
extend("required", required);
extend("max", max);
extend("regex", regex);
extend("email", email);

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
  name: "Login",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    email: "qojinabi@ryteto.me",
    password: "asdfA234@",
    show1: false,
  }),
  computed: {
    ...mapGetters({ getLoading: "getLoading", Error: "getError" }),
  },
  methods: {
    ...mapActions(["loginUser", "updateUserData"]),
    submit() {
      this.$refs.observer.validate();
      this.updateUserData({
        email: this.email,
      });
      this.loginUser(this.password).then((status) => {
        if (status === "SUCCESS") {
          router.push({ name: "Order" });
        }
      });
    },
  },
};
</script>
