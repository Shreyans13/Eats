<template>
	<v-card
		max-width="374"
		@click="navigate($event, '/order/123')"
		to="/order/123"
	>
		<v-img
			height="150"
			src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoUeJ-Na6Tq8HNONT8_4u3RBpEStlRWYbuxQ&usqp=CAU"
		></v-img>

		<v-card-title>
			Cafe Badilico
			<v-row class="justify-end">
				<v-btn icon>
					<v-icon small>fas fa-star</v-icon>
				</v-btn>
				<div class="grey--text mr-2">
					<h5>4.5</h5>
				</div>
			</v-row>
		</v-card-title>
		<v-card-text class="white--text">
			<v-row>
				<v-col cols="6">North Indian, Chinese</v-col>
				<v-col cols="6" class="grey--text d-flex align-end flex-column">
					<h5>Rs 100 for one</h5></v-col
				>
			</v-row>
			<div class="red--text">
				Opens at 10:00AM
			</div>
		</v-card-text>

		<v-divider class="mx-4"></v-divider>
	</v-card>
</template>

<script>
export default {
	name: "FoodBox",
	methods: {
		navigate(event, link) {
			this.$vuetify.goTo(link);
		},
	},
};
</script>
