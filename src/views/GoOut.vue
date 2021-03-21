<template>
	<v-container fluid>
		<h2>Recommended for you</h2>
		<br />
		<v-row>
			<v-col v-for="i in 10" :key="i">
				<food-box />
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import FoodBox from "../components/FoodBox.vue";
// @ is an alias to /src
export default {
	components: { FoodBox },
	name: "GoOut",
};
</script>
