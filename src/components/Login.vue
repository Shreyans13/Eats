<template>
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
        name="phoneNumber"
        :rules="{
          required: true,
          digits: 10,
        }"
      >
        <v-text-field
          v-model="phoneNumber"
          :counter="10"
          :error-messages="errors"
          label="Phone Number"
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

      

      <v-btn class="mr-4 mt-3" type="submit" :disabled="invalid" block elevation="3" color="success">Log In </v-btn>
    </form>
  </validation-observer>
</template>

<script>
import { required, digits, email, max, regex } from "vee-validate/dist/rules";
import { extend, ValidationObserver, ValidationProvider } from "vee-validate";

extend("digits", {
  ...digits,
  message: "{_field_} needs to be {length} digits. ({_value_})",
});

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
});

extend("regex", {
  ...regex,
  message: "{_field_} {_value_} does not match {regex}",
});

extend("email", {
  ...email,
  message: "Email must be valid",
});

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
    phoneNumber: "",
    email: "",
    password: "",
    show1: false,
  }),

  methods: {
    submit() {
      this.$refs.observer.validate();
    },
  },
};
</script>
