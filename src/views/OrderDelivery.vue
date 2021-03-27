<template>
	<div style="height: 100%">
		<v-app-bar app fixed flat elevate-on-scroll scroll color="#1e1e1e">
			<v-btn icon @click="backNavigation">
				<v-icon>fas fa-arrow-left</v-icon>
			</v-btn>
			<span>Your Order Details</span>
		</v-app-bar>
		<Map />
		<v-footer dark padless app fixed>
			<v-card class="flex" flat tile>
				<v-card-title class="justify-center">
					<strong>
						Your order will be delivered sooon
					</strong>
				</v-card-title>
			</v-card>
		</v-footer>
	</div>
</template>

<script>
import Map from "../components/Map.vue";
import router from "../router/index";

export default {
	name: "OrderDelivery",
	components: {
		Map,
	},
	data: () => ({}),
	methods: {
		backNavigation() {
			router.go(-1);
		},
	},
};
</script>
