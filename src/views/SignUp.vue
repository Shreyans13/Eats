<template>
  <v-container fill-height>
    <v-row class="mx-auto">
      <v-col class="float-right hidden-sm-and-down pa-0">
        <v-card>
          <v-img
            height="468"
            src="https://media.discordapp.net/attachments/806525869644185626/845748290700050442/eats-hand-drawn-dribbble.png"
          ></v-img>
        </v-card>
      </v-col>
      <v-col class="float-left pa-0">
        <v-card>
          <!-- <v-img
            height="250"
            contain
            max-width="700"
            src="https://media.discordapp.net/attachments/806525869644185626/845748290700050442/eats-hand-drawn-dribbble.png"
            class="hidden-md-and-up"
          ></v-img> -->

          <!-- <v-img
            max-height="256"
            src="https://media.discordapp.net/attachments/806525869644185626/845748290700050442/eats-hand-drawn-dribbble.png"
            lazy-src="https://media.discordapp.net/attachments/806525869644185626/845748290700050442/eats-hand-drawn-dribbble.png"
            class="hidden-md-and-up"
            contain
          ></v-img> -->

          <!-- <v-img
            class="hidden-md-and-up"
             max-height="256"
              contain
							src="https://media.discordapp.net/attachments/806525869644185626/845748290700050442/eats-hand-drawn-dribbble.png"
							lazy-src="https://media.discordapp.net/attachments/806525869644185626/845748290700050442/eats-hand-drawn-dribbble.png"
						></v-img> -->

          <v-card-title>Eats</v-card-title>
          <v-card-text>
            <validation-observer ref="observer" v-slot="{ invalid }">
              <form @submit.prevent="submit">
                <validation-provider
                  v-slot="{ errors }"
                  name="Name"
                  rules="required"
                >
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
                  name="phoneNumber"
                  :rules="{
                    required: true,
                    digits: 10,
                  }"
                >
                  <!-- Add regex  -->
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
                  name="address"
                  rules="required"
                >
                  <v-text-field
                    v-model="address"
                    :error-messages="errors"
                    label="Address"
                    required
                  ></v-text-field>
                </validation-provider>

                <validation-provider
                  v-slot="{ errors }"
                  name="city"
                  rules="required"
                >
                  <v-text-field
                    v-model="city"
                    :error-messages="errors"
                    label="City"
                    required
                  ></v-text-field>
                </validation-provider>

                <v-btn class="mr-4" type="submit" :disabled="invalid">
                  submit
                </v-btn>
              </form>
            </validation-observer>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { required, digits, email, max, regex } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

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

export default {
  name: "Sign up",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    name: "",
    phoneNumber: "",
    email: "",
    address: "",
    city: "",
  }),

  methods: {
    submit() {
      this.$refs.observer.validate();
    },
  },
};
</script>

<style>
</style>