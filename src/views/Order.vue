<template>
	<div>
		<v-card class="mx-auto" max-width="400">
			<v-img
				class="white--text align-end"
				height="200px"
				src="https://thefoodhog.com/wp-content/uploads/2020/02/india-2731817_1920.jpg"
			>
				<v-card-title>Special Discount for you</v-card-title>
			</v-img>
		</v-card>
		<food-box v-for="i in 10" :key="i" />
		<!-- <v-row class="my-1">
			<v-col cols="8" class="pa-0">
				<v-card dark>
					<v-card-text>
						Order Again
					</v-card-text>
				</v-card>
			</v-col>
			<v-col cols="4" class="pa-0">
				<v-card dark>
					<v-card-text>
						view history
					</v-card-text>
				</v-card>
			</v-col>
			<v-col cols="4" v-for="i in 6" :key="i" class="pa-3 ml-0">
				<v-avatar>
					<img
						src="https://cdn.vuetifyjs.com/images/john.jpg"
						alt="John"
					/>
				</v-avatar>
			</v-col>
		</v-row> -->
	</div>
</template>
<script>
import FoodBox from "../components/FoodBox.vue";
export default {
	components: { FoodBox },
	name: "Order",
};
</script>
