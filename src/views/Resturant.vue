<template>
	<div>
		<v-app-bar app fixed flat elevate-on-scroll scroll color="#1e1e1e">
			<v-btn icon @click="backNavigation">
				<v-icon>fas fa-arrow-left</v-icon> </v-btn
			><span class="text-h6">Cafe Badilico</span>
		</v-app-bar>
		<resturant-box />
		<v-expansion-panels readonly multiple :value="Panels" class="mt-5">
			<v-expansion-panel v-for="(item, i) in 1" :key="i">
				<v-expansion-panel-header>
					Recommended
				</v-expansion-panel-header>
				<list-item :item="temp" @getItem="updateItem" />
				<list-item :item="temp2" @getItem="updateItem" />
			</v-expansion-panel>
		</v-expansion-panels>
		<v-footer app v-if="totalItems != 0">
			<v-col class="text-center" cols="12">
				<v-btn-toggle borderless >
					<v-btn color="green"
						><span class="font-weight-bold text-h6">
							Q {{ totalItems }}
						</span>
					</v-btn>
					<v-btn color="red" @click="navigate($event, '/order/123/confirm-order')" to="/order/123/confirm-order">
						<v-icon class="mr-3">fas fa-shopping-bag</v-icon>
						<span class="font-weight-bold text-h6 mr-3">
							₹ {{ totalPrice }}</span
						>
						Buy Now
					</v-btn>
				</v-btn-toggle>
			</v-col>
		</v-footer>
	</div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
import ResturantBox from "../components/ResturantBox.vue";
import router from "../router/index";

export default {
	components: { ResturantBox, ListItem },
	data: () => ({
		Panels: [],
		order: [],
		totalItems: 0,
		totalPrice: 0,
		temp: {
			name: "Kachori",
			rate: "50",
			type: "veg",
		},
		temp2: {
			name: "Fish",
			rate: "100",
			type: "non-veg",
		},
	}),
	mounted() {
		this.calcSelec();
	},
	methods: {
		navigate(event, link) {
			this.$vuetify.goTo(link);
		},
		backNavigation() {
			router.go(-1);
		},
		calcSelec() {
			for (let i = 0; i < 1; i++) {
				this.Panels.push(i);
			}
		},
		updateItem(temp) {
			const find = this.order.findIndex(
				(element) => element.name == temp.name
			);
			if (find == -1) {
				this.order.push(temp);
			} else if (temp.quantity == 0) {
				this.order.splice(find, 1);
			} else {
				this.order[find].quantity = temp.quantity;
			}
			this.updateItemPrice();
		},
		updateItemPrice() {
			let total = 0;
			let noOfItems = 0;
			this.order.forEach((element) => {
				total += element.rate * element.quantity;
				noOfItems += element.quantity;
			});
			this.totalItems = noOfItems;
			this.totalPrice = total;
		},
	},
};
</script>
