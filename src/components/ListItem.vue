<template>
	<v-expansion-panel-content>
		<v-list-item>
			<v-icon :color="item.type == 'veg' ? 'green' : 'red'" small>
				fas fa-stop-circle
			</v-icon>
			<v-list-item-content class="ml-3">
				<v-row>
					<v-col class="text-left" cols="5">
						<span class="text-subtitle-1 font-weight-medium">{{
							item.name
						}}</span>
						<br />
						<span class="text-subtitle-2">₹ {{ item.rate }}</span>
					</v-col>
					<v-col class="text-right pa-2" cols="7">
						<v-btn
							color="red"
							icon
							v-if="counter == 0"
							@click="increment"
						>
							<v-icon small>fas fa-plus</v-icon>
						</v-btn>
						<div v-else class="mr-2">
							<v-btn color="red" icon @click="decrement">
								<v-icon small>
									fas fa-minus
								</v-icon>
							</v-btn>
							<v-btn text v-if="counter != 0">
								{{ counter }}
							</v-btn>
							<v-btn color="green" icon @click="increment">
								<v-icon small>fas fa-plus</v-icon>
							</v-btn>
						</div>
					</v-col>
				</v-row>
			</v-list-item-content>
		</v-list-item>
		<v-divider />
	</v-expansion-panel-content>
</template>

<script>
export default {
	data: () => ({
		counter: 0,
	}),
	props: ["item"],
	methods: {
		increment() {
			// console.log("inc");
			this.counter++;
			this.$emit("getItem", {
				name: this.item.name,
				quantity: this.counter,
				rate: this.item.rate,
				// totalPrice: this.counter * this.item.rate,
			});
		},
		decrement() {
			// console.log("dec");
			if (this.counter > 0) this.counter--;
			this.$emit("getItem", {
				name: this.item.name,
				quantity: this.counter,
				rate: this.item.rate,
				// totalPrice: this.counter * this.item.rate,
			});
		},
	},
};
</script>
