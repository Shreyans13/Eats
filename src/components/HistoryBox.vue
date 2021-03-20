<template>
	<v-card class="mx-auto" max-width="400">
		<v-list-item two-line>
			<v-list-item-content>
				<v-list-item-title class="headline">
					Swarnim`s Cafe
				</v-list-item-title>
				<v-list-item-subtitle> Kharar, Chandigarh</v-list-item-subtitle>
			</v-list-item-content>
		</v-list-item>
		<v-list-item class="my-n2">
			<v-chip color="green" text-color="white" small>
				Delivered
			</v-chip>
		</v-list-item>
		<v-list-item>
			<v-list-item-content>
				<v-list-item-subtitle>ORDERED ON</v-list-item-subtitle>
				<v-list-item-title>20 MARCH 2020 at 12:30 PM</v-list-item-title>
			</v-list-item-content>
		</v-list-item>
		<v-list-item class="my-n3">
			<v-rating
				v-model="rating"
				background-color="red lighten-3"
				color="red"
			></v-rating>
		</v-list-item>
		<v-data-table
			mobile-breakpoint="0"
			:headers="headers"
			:items="order"
			hide-default-header
			hide-default-footer
		></v-data-table>
		<v-divider></v-divider>
		<v-card-actions>
			<v-btn text depressed color="primary">
				<v-icon small class="ma-2">
					fas fa-shopping-bag
				</v-icon>
				View Order
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
export default {
	data() {
		return {
			rating: 4,
			headers: [
				{ text: "Items Ordered", value: "name", sortable: false },
				{ text: "Quantity", value: "quantity", sortable: false },
				{ text: "Price", value: "price", sortable: false },
			],
			order: [
				{
					name: "Paneer Makhani Biryani",
					quantity: "x3",
					price: "₹ 50",
				},
				{ name: "Dahi Kebab", quantity: "x5", price: "₹ 120" },
				{
					name: "Matar Paneer Lababdaar",
					quantity: "x1",
					price: "₹ 75",
				},
			],
		};
	},
};
</script>
