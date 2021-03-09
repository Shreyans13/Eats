<template>
	<v-app>
		<top-bar></top-bar>
		<v-main>
			<v-container fluid>
				<router-view />
			</v-container>
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
		//
	}),
};
</script>
