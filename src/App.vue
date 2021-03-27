<template>
	<v-app>
		<top-bar v-if="toggleTopBar"> </top-bar>
		<v-main>
			<router-view />
		</v-main>

		<bottom-nav v-if="toggleBottomBar" />
	</v-app>
</template>

<script>
import BottomNav from "@/components/BottomNav.vue";
import TopBar from "@/components/TopBar.vue";
export default {
	components: { BottomNav, TopBar },
	name: "App",
	data: () => ({
		// TopBarToggleTopBar: true,
	}),
	computed: {
		toggleTopBar() {
			if (
				this.$route.name == "History" ||
				this.$route.name == "Account" ||
				this.$route.name == "Resturant" ||
				this.$route.name == "Summary" ||
				this.$route.name == "ConfirmOrder" ||
				this.$route.name == "OrderDelivery"
			)
				return false;
			return true;
		},
		toggleBottomBar() {
			if (
				this.$route.name == "Resturant" ||
				this.$route.name == "Summary" ||
				this.$route.name == "ConfirmOrder" ||
				this.$route.name == "OrderDelivery"
			)
				return false;
			else return true;
		},
	},
};
</script>
