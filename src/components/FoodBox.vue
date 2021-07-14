<template>
  <v-card max-width="374" @click="navigate(), updateState()">
    <v-img height="150" :src="data.imgSrc" :lazy-src="data.imgSrc">
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>
    <v-card-title>
      <span class="d-inline-block text-truncate" style="max-width: 225px">
        {{ data.name }}
      </span>
      <v-row class="justify-end">
        <v-icon small color="amber" class="mr-1">fas fa-star</v-icon>

        <div class="mr-2" color="amber">
          <h5>{{ data.rating }}</h5>
        </div>
      </v-row>
    </v-card-title>
    <v-card-text class="white--text">
      <v-row>
        <v-col cols="6">{{ data.type }}</v-col>
        <v-col cols="6" class="grey--text d-flex align-end flex-column">
          <h4 class="success--text">Rs {{ data.rate }} for one</h4>
        </v-col>
      </v-row>
      <div class="warning--text">Opens at {{ data.time }}</div>
    </v-card-text>
    <!-- <v-divider class="mx-4"></v-divider> -->
  </v-card>
</template>

<script>
import router from "../router/index";
import { mapActions } from "vuex";

export default {
  name: "FoodBox",
  props: ["data", "nav"],
  methods: {
    ...mapActions(["updateState"]),
    navigate() {
      // this.$vuetify.goTo(link);
      if (this.nav === "menu")
        router.push({ name: "Menu", params: { id: this.data.id } });
      else if (this.nav === "book")
        router.push({
          name: "BookResturant",
          params: { id: this.data.id },
        });
    },
  },
};
</script>
