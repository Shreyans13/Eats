<template>
	<v-expansion-panel-content>
		<v-list two-line>
			<!-- {{ overlay }} -->
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
					<v-img :src="item.imgSrc" />
				</v-list-item-avatar>
				<v-overlay :value="overlay">
					<v-img :src="item.imgSrc" @click="overlay = false" />
				</v-overlay>
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
export default {
	data: () => ({
		counter: 0,
		overlay: false,
	}),
	// props: ["item"],
	props: {
		item: {
			required: true,
		},
	},
	methods: {
		increment() {
			this.counter++;
			this.$emit("getItem", {
				name: this.item.name,
				quantity: this.counter,
				price: this.item.price,
			});
		},
		decrement() {
			if (this.counter > 0) this.counter--;
			this.$emit("getItem", {
				name: this.item.name,
				quantity: this.counter,
				price: this.item.price,
			});
		},
	},
};
</script>
