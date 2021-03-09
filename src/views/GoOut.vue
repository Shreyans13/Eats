<template>
	<div>
		<h2>Recommended for you</h2>
		<food-box v-for="i in 10" :key="i" />
	</div>
</template>

<script>
import FoodBox from "../components/FoodBox.vue";
// @ is an alias to /src
export default {
	components: { FoodBox },
	name: "GoOut",
};
</script>
