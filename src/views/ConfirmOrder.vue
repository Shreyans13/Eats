<template>
	<div>
		<v-app-bar app fixed flat elevate-on-scroll scroll color="#1e1e1e">
			<v-btn icon @click="backNavigation">
				<v-icon>fas fa-arrow-left</v-icon>
			</v-btn>
			<span>Your Order Details</span>
		</v-app-bar>
        <v-card class="mt-3">
            <v-list>

      <v-list-item
      >
        <v-list-item-avatar>
          <v-img
            src="https://cdn.vuetifyjs.com/images/lists/4.jpg"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="text-h5"
						>Yogesh `s Cafe</v-list-item-title
					>
        </v-list-item-content>
      </v-list-item>
            </v-list>
        </v-card>
		<v-card class="mt-3">
			<v-list-item class="pa-0">
				<v-list-item-content class="pa-0">
					<v-data-table
						mobile-breakpoint="0"
						:headers="headers"
						:items="order"
						hide-default-header
						hide-default-footer
					></v-data-table>
				</v-list-item-content>
			</v-list-item>
			<v-divider />
			<v-list-item>
				<v-list-item-content>
					Order
				</v-list-item-content>
				<v-list-item-content class="text-right mr-3">
					<span>
						₹ 100
					</span>
				</v-list-item-content>
			</v-list-item>
			<v-list-item>
				<v-list-item-content>
					Delivery charges
				</v-list-item-content>
				<v-list-item-content class="text-right mr-3">
					<span>
						₹ 50
					</span>
				</v-list-item-content>
			</v-list-item>
			<v-divider />
			<v-list-item>
				<v-list-item-content class="font-weight-bold text-h5">
					Total
				</v-list-item-content>
				<v-list-item-content class="text-right mr-3 text-h4">
					<span>
						₹ 50
					</span>
				</v-list-item-content>
			</v-list-item>
		</v-card>
		<v-card class="mt-3">
			<v-list-item
      >
        <v-list-item-avatar>
          <v-img
            src="https://cdn.vuetifyjs.com/images/lists/2.jpg"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title 
						>Vivek Kumar Sony</v-list-item-title
					>
        </v-list-item-content>
      </v-list-item>
			<v-list-item>
				<v-list-item-content>
					<v-list-item-title class="text-h6">Address</v-list-item-title>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Quia, dolor quod.
				</v-list-item-content>
			</v-list-item>
		</v-card>
		<v-card class="mt-3">
			<v-list>
				<v-list-item>
					<v-list-item-icon>
						<v-icon>
							fab fa-bitcoin
						</v-icon>
					</v-list-item-icon>

					<v-list-item-content>
						<v-list-item-title class="text-h6 font-weight-black"
							>1234 ABCD 5678 EFGH 910I</v-list-item-title
						>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-card>

		<v-footer fixed>
			<v-col class="text-center" cols="12">
				<v-btn block color="green" @click="navigate($event, '/order/123/order-delivery')"
		to="/order/123/order-delivery">Confirm Order</v-btn>
			</v-col>
		</v-footer>
	</div>
</template>

<script>
import router from "../router/index";

export default {
	name: "ConfirmOrder",
	data() {
		return {
			headers: [
				{ text: "Quantity", value: "quantity", sortable: false },
				{ text: "Items Ordered", value: "name", sortable: false },
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
	methods: {
		backNavigation() {
			router.go(-1);
		},
		navigate(event, link) {
			this.$vuetify.goTo(link);
		},
	},
};
</script>
