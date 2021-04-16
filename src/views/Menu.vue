<template>
	<div>
		<v-app-bar app fixed flat elevate-on-scroll scroll color="#1e1e1e">
			<v-btn icon @click="backNavigation">
				<v-icon>fas fa-arrow-left</v-icon> </v-btn
			><span class="text-h6">{{ info.name }}</span>
		</v-app-bar>
		<v-skeleton-loader
			type="image, article, table-heading, list-item-two-line, list-item-two-line, table-tfoot"
			:loading="loading"
		>
			<resturant-box
				:data="{
					name: info.name,
					rating: info.rating,
					reviews: info.reviews,
					type: info.type,
					desc: info.shortDesc,
					deliveryTime: info.deliveryTime,
					imgSrc: info.imgSrc,
				}"
			>
				<template v-slot:image>
					<v-carousel-item v-for="(img, id) in info.imgSrc" :key="id">
						<v-img
							width="100%"
							max-height="500px"
							:aspect-ratio="2 / 1"
							:src="img"
							:lazy-src="img"
						>
							<template v-slot:placeholder>
								<v-row
									class="fill-height ma-0"
									align="center"
									justify="center"
								>
									<v-progress-circular
										indeterminate
										color="grey lighten-5"
									></v-progress-circular>
								</v-row>
							</template>
						</v-img>
					</v-carousel-item>
				</template>
			</resturant-box>
			<v-expansion-panels readonly multiple :value="Panels" class="mt-5">
				<v-expansion-panel v-for="(item, i) in info.foodItems" :key="i">
					<v-expansion-panel-header class="text-subtitle-1">
						{{ item.type }}
					</v-expansion-panel-header>
					<div v-for="(list, i) in item.list" :key="i">
						<!-- <keep-alive>
							<component
								:is="cname"
								:item="list"
								@getItem="updateItem"
							/>
						</keep-alive> -->
						<list-item
							:item="list"
							:resturantName="info.name"
							@getItem="updateItem"
						/>
					</div>
				</v-expansion-panel>
			</v-expansion-panels>
			<v-footer app v-if="totalItems != 0">
				<v-col class="text-center" cols="12">
					<v-btn-toggle borderless>
						<v-btn color="green"
							><span class="font-weight-bold text-h6">
								Q {{ totalItems }}
							</span>
						</v-btn>
						<v-btn color="red" @click="orderFood">
							<!-- to="/order/123/confirm-order" -->
							<v-icon class="mr-3">fas fa-shopping-bag</v-icon>
							<span class="font-weight-bold text-h6 mr-3">
								₹ {{ totalPrice }}</span
							>
							Buy Now
						</v-btn>
					</v-btn-toggle>
				</v-col>
			</v-footer>
		</v-skeleton-loader>
	</div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
import ResturantBox from "../components/ResturantBox.vue";
import router from "../router/index";
import { mapActions, mapGetters } from "vuex";

export default {
	components: { ResturantBox, ListItem },
	data: () => ({
		cname: "ListItem",
		Panels: [],
		order: [],
		totalItems: 0,
		totalPrice: 0,
		foodItems: [],
	}),
	computed: {
		...mapGetters({ loading: "loading", info: "getDetailResturant" }),
		// ...mapGetters({ loading: "loading", resturants: "getResturants" }),
	},
	mounted() {
		// console.log(this.id);
		this.calcSelec();
		this.setDetailResturant(this.$route.params.id).then(() => {
			this.foodItems = this.info.foodItems;
		});
	},
	methods: {
		...mapActions([
			"setDetailResturant",
			"updateCart",
			"updateName",
			"updateTotalPrice",
			"updateTotalQuantity",
			"updateDeliveryCharges",
			"updateResturantAddress",
			"updateResturantImage",
		]),
		orderFood() {
			this.updateCart(this.order);
			this.updateName(this.info.name);
			this.updateTotalPrice(this.totalPrice);
			this.updateTotalQuantity(this.totalItems);
			this.updateDeliveryCharges(this.info.deliveryCharges);
			this.updateResturantAddress(this.info.address);
			this.updateResturantImage(this.info.img);
			this.navigate("/order/123/confirm-order");
		},
		navigate(link) {
			router.push(link);
			// this.$vuetify.goTo(link);
		},
		backNavigation() {
			router.go(-1);
		},
		calcSelec() {
			for (let i = 0; i < 5; i++) {
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
				total += element.price * element.quantity;
				noOfItems += element.quantity;
			});
			this.totalItems = noOfItems;
			this.totalPrice = total;
		},
	},
};
</script>
