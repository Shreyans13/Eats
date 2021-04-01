<template>
	<v-card max-width="374" @click="navigate()">
		<v-img height="150" :src="data.imgSrc" :lazy-src="data.imgSrc">
			<template v-slot:placeholder>
				<v-row class="fill-height ma-0" align="center" justify="center">
					<v-progress-circular
						indeterminate
						color="grey lighten-5"
					></v-progress-circular>
				</v-row>
			</template>
		</v-img>
		<v-card-title>
			{{ data.name }}
			<v-row class="justify-end">
				<v-btn icon color="amber">
					<v-icon small>fas fa-star</v-icon>
				</v-btn>
				<div class="mr-2" color="amber">
					<h5>{{ data.rating }}</h5>
				</div>
			</v-row>
		</v-card-title>
		<v-card-text class="white--text">
			<v-row>
				<v-col cols="6">{{ data.type }}</v-col>
				<v-col cols="6" class="grey--text d-flex align-end flex-column">
					<h4 class="success--text">Rs {{ data.rate }} for one</h4>
				</v-col>
			</v-row>
			<div class="warning--text">Opens at {{ data.timing }}</div>
		</v-card-text>
		<v-divider class="mx-4"></v-divider>
	</v-card>
</template>

<script>
import router from "../router/index";
export default {
	name: "FoodBox",
	props: ["data"],
	methods: {
		navigate() {
			// this.$vuetify.goTo(link);
			router.push({ name: "Menu", params: { id: this.data.id } });
		},
	},
};
</script>
