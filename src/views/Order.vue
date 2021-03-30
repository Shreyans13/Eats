<template>
	<v-container fluid>
		<v-card class="mx-auto mb-5" max-width="400">
			<v-img
				class="white--text align-end"
				height="200px"
				src="https://thefoodhog.com/wp-content/uploads/2020/02/india-2731817_1920.jpg"
			>
				<v-card-title>Special Discount for you</v-card-title>
			</v-img>
		</v-card>
		<v-skeleton-loader max-width="374" type="card" :loading="loading">
			<v-row>
				<v-col v-for="(data, i) in resturants" :key="i">
					<food-box :data="data" />
				</v-col>
			</v-row>
		</v-skeleton-loader>
	</v-container>
</template>
<script>
import FoodBox from "../components/FoodBox.vue";
import { mapActions, mapGetters } from "vuex";

export default {
	components: { FoodBox },
	name: "Order",
	computed: {
		...mapGetters({ loading: "loading", resturants: "getResturants" }),
	},
	mounted() {
		this.setResturants();
	},
	methods: {
		...mapActions(["setResturants"]),
	},
};
</script>
