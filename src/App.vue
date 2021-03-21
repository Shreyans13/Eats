<template>
	<v-app>
		<top-bar v-if="toggle"> </top-bar>
		<v-main>
			<router-view />
		</v-main>
		<bottom-nav />
	</v-app>
</template>

<script>
import BottomNav from "@/components/BottomNav.vue";
import TopBar from "@/components/TopBar.vue";
export default {
	components: { BottomNav, TopBar },
	name: "App",
	data: () => ({
		// TopBarToggle: true,
	}),
	computed: {
		toggle() {
			if (
				this.$route.name == "History" ||
				this.$route.name == "Account" ||
				this.$route.name == "Resturant"
			)
				return false;
			return true;
		},
	},
};
</script>
