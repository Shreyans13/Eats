<template>
  <v-app>
    <top-bar v-if="toggleTopBar"> </top-bar>
    <v-main>
      <router-view />
    </v-main>

    <bottom-nav v-if="toggleBottomBar" class="hidden-md-and-up" />
  </v-app>
</template>

<script>
import BottomNav from "@/components/BottomNav.vue";
import TopBar from "@/components/TopBar.vue";
import { mapActions } from "vuex";

export default {
  components: {
    BottomNav,
    TopBar,
  },
  name: "App",
  computed: {
    toggleTopBar() {
      if (
        this.$route.name == "Menu" ||
        this.$route.name == "BookResturant" ||
        this.$route.name == "Summary" ||
        // this.$route.name == "ConfirmOrder" ||
        this.$route.name == "OrderDelivery"
      )
        return false;
      return true;
    },
    toggleBottomBar() {
      if (
        this.$route.name == "Menu" ||
        this.$route.name == "BookResturant" ||
        this.$route.name == "Summary" ||
        this.$route.name == "ConfirmOrder" ||
        this.$route.name == "OrderDelivery"
      )
        return false;
      else return true;
    },
  },
  mounted() {
    this.getUserLocation();
  },
  methods: {
    ...mapActions([
      "getUserLocation", //also supports payload `this.nameOfAction(amount)`
    ]),
  },
};
</script>

<style>
@media screen and (max-device-width: 768px) {
  .v-btn:hover:before {
    opacity: 0 !important;
  }
}
</style>
