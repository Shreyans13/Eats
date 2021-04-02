<template>
	<v-expansion-panel-content v-scroll="onScroll">
		<v-list two-line>
			<v-list-item class="px-0">
				<v-list-item-avatar rounded class="ma-0">
					<v-icon :color="item.type == 'veg' ? 'green' : 'red'" small>
						fas fa-stop-circle
					</v-icon>
				</v-list-item-avatar>
				<v-list-item-avatar
					rounded
					class="ma-1 mr-4"
					@click="overlay = !overlay"
				>
					<v-img :src="item.imgSrc" :lazy-src="item.imgSrc">
						<template v-slot:placeholder>
							<v-row
								class="fill-height ma-0"
								align="center"
								justify="center"
							>
								<v-progress-circular
									:width="2"
									indeterminate
									color="grey lighten-5"
								></v-progress-circular>
							</v-row>
						</template>
					</v-img>
				</v-list-item-avatar>
				<v-overlay :value="overlay" opacity="0.7">
					<v-img :src="item.imgSrc" @click="overlay = false" />
				</v-overlay>
				<!-- {{ cart }} -->
				<v-list-item-content>
					<v-list-item-title>{{ item.name }}</v-list-item-title>
					<v-list-item-subtitle>
						₹ {{ item.price }}
					</v-list-item-subtitle>
				</v-list-item-content>
				<v-list-item-action>
					<v-btn
						color="red"
						icon
						v-if="counter == 0"
						@click="increment"
					>
						<v-icon small>fas fa-plus</v-icon>
					</v-btn>

					<div v-else>
						<v-btn color="red" icon @click="decrement">
							<v-icon small>
								fas fa-minus
							</v-icon>
						</v-btn>
						<span class="pa-3" v-if="counter != 0">
							{{ counter }}
						</span>
						<v-btn color="green" icon @click="increment">
							<v-icon small>fas fa-plus</v-icon>
						</v-btn>
					</div>
				</v-list-item-action>
			</v-list-item>
		</v-list>
		<v-divider />
	</v-expansion-panel-content>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	name: "ListItem",
	computed: {
		...mapGetters({ cart: "getCart", name: "getName" }),
	},
	data: () => ({
		counter: 0,
		overlay: false,
	}),
	props: {
		item: {
			required: true,
		},
		resturantName: {
			required: true,
		},
	},
	mounted() {
		this.setCart();
	},
	methods: {
		emit() {
			// if (this.counter != 0)
			this.$emit("getItem", {
				name: this.item.name,
				quantity: this.counter,
				price: this.item.price,
			});
		},
		setCart() {
			if (this.resturantName == this.name) {
				this.cart.forEach((cartItem) => {
					if (this.item.name == cartItem.name) {
						this.counter = cartItem.quantity;
					}
				});
				if (this.counter != 0) this.emit();
			}
		},
		increment() {
			this.counter++;
			this.emit();
		},
		decrement() {
			if (this.counter > 0) this.counter--;
			this.emit();
		},
		onScroll() {
			if (this.overlay) this.overlay = false;
		},
	},
};
</script>
