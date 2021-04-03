<template>
	<v-container fluid>
		<h2>Recommended for you</h2>
		<br />
		<v-skeleton-loader max-width="374" type="card" :loading="loading">
			<v-row>
				<v-col v-for="(data, i) in resturants" :key="i">
					<food-box :data="data" nav="book" />
				</v-col>
			</v-row>
		</v-skeleton-loader>
		<!-- <v-row>
			<v-col v-for="i in 10" :key="i">
				<food-box />
			</v-col>
		</v-row> -->
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
