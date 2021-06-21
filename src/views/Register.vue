<template>
  <v-container fill-height>
    <v-row class="mx-auto mb-3">
      <v-col class="float-right hidden-sm-and-down pa-0">
        <v-card>
          <v-img height="605" src="@/assets/eats.png"></v-img>
        </v-card>
      </v-col>
      <v-col class="float-left pa-0">
        <v-card class="mx-auto" max-width="344" min-height="605">
          <v-img
            src="@/assets/eats.png"
            height="200px"
            class="hidden-sm-and-up"
          ></v-img>

          <v-card-title class="text-h4"> Eats </v-card-title>

          <v-card-text>
            <v-tabs v-model="tab" fixed-tabs>
              <v-tabs-slider color="orange"></v-tabs-slider>

              <v-tab v-for="item in items" :key="item">
                {{ item }}
              </v-tab>
            </v-tabs>
            <v-tabs-items v-model="tab">
              <v-tab-item v-for="item in items" :key="item">
                <!-- <keep-alive> -->
                <component v-bind:is="item"></component>
                <!-- </keep-alive> -->
                <!-- <v-card flat>
                <v-card-text v-text="text"></v-card-text>
              </v-card> -->
              </v-tab-item>
            </v-tabs-items>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SignUp from "../components/SignUp.vue";
import Login from "../components/Login.vue";
export default {
  components: { SignUp, Login },
  name: "Register",
  data() {
    return {
      tab: null,
      items: ["SignUp", "Login"],
    };
  },
};
</script>