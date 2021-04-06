<template>
	<!-- <v-container> -->
	<!-- <v-row justify="space-around"> -->
	<div>
		<v-app-bar flat color="rgba(0, 0, 0, 0)">
			<v-toolbar-title>
				Account
			</v-toolbar-title>
		</v-app-bar>
		<v-list>
			<v-list-item>
				<v-list-item-avatar size="50">
					<v-img
						src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
					></v-img>
				</v-list-item-avatar>

				<v-list-item-content>
					<v-list-item-title>John Doe</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</v-list>
		<v-expansion-panels class="mt-5">
			<v-expansion-panel v-for="(item, i) in expPanels" :key="i">
				<v-expansion-panel-header>
					<v-list-item>
						<v-list-item-icon>
							<v-icon small>{{ item.icon }}</v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>{{
								item.header
							}}</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-expansion-panel-header>
				<v-expansion-panel-content v-if="i == 1">
					<v-textarea
						rows="1"
						filled
						auto-grow
						:value="getUser.address"
					></v-textarea>
					<!-- <v-btn-toggle> -->
					<v-btn tile color="success" @click="updateAddress">
						<v-icon left>
							mdi-pencil
						</v-icon>
						Save
					</v-btn>
					<!-- </v-btn-toggle> -->
				</v-expansion-panel-content>
				<v-expansion-panel-content v-else>
					{{ item.content }}
				</v-expansion-panel-content>
			</v-expansion-panel>
		</v-expansion-panels>
		<v-expansion-panels class="mt-5">
			<v-expansion-panel v-for="(item, i) in expPanels" :key="i">
				<v-expansion-panel-header>
					<v-list-item>
						<v-list-item-icon>
							<v-icon small>{{ item.icon }}</v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>
								Notification
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-expansion-panel-header>
				<v-expansion-panel-content v-if="i == 1">
					<v-textarea
						rows="1"
						filled
						auto-grow
						:value="getUser.address"
					></v-textarea>
					<!-- <v-btn-toggle> -->
					<v-btn tile color="success" @click="updateAddress">
						<v-icon left>
							mdi-pencil
						</v-icon>
						Save
					</v-btn>
					<!-- </v-btn-toggle> -->
				</v-expansion-panel-content>
				<v-expansion-panel-content v-else>
					{{ item.content }}
				</v-expansion-panel-content>
			</v-expansion-panel>
		</v-expansion-panels>
	</div>
	<!-- </v-row> -->
	<!-- </v-container> -->
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
	data: () => ({
		address: "",
		expPanels: [
			{
				header: "Payment Methods",
				content: "We don`t do that here",
				icon: "fas fa-credit-card",
			},
			{
				header: "Address",
				icon: "fas fa-address-card",
			},
			{
				header: "My Vouchers",
				content:
					"In time you will know what it’s like to lose your money, offcourse",
				icon: "fas fa-ticket-alt",
			},
		],
	}),
	computed: {
		...mapGetters(["getUser"]),
	},
	methods: {
		...mapActions(["updateAddress"]),
	},
};
</script>
