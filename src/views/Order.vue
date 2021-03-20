<template>
	<div>
		<v-card class="mx-auto mb-5" max-width="400">
			<v-img
				class="white--text align-end"
				height="200px"
				src="https://thefoodhog.com/wp-content/uploads/2020/02/india-2731817_1920.jpg"
			>
				<v-card-title>Special Discount for you</v-card-title>
			</v-img>
		</v-card>
		<v-row>
			<v-col v-for="i in 10" :key="i">
				<food-box />
			</v-col>
		</v-row>
	</div>
</template>
<script>
import FoodBox from "../components/FoodBox.vue";
export default {
	components: { FoodBox },
	name: "Order",
};
</script>
