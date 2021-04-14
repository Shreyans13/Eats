<template>
	<div>
		<v-app-bar flat app dark fixed>
			<v-toolbar-title class="text-h6">
				Account
			</v-toolbar-title>
		</v-app-bar>
		<v-list>
			<v-list-item>
				<v-list-item-avatar size="50">
					<v-img :src="getUser.img"></v-img>
				</v-list-item-avatar>

				<v-list-item-content>
					<v-list-item-title class="text-h6">{{
						getUser.name
					}}</v-list-item-title>
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
						:value="address"
						@click="btnToggle = true"
						v-model="address"
					></v-textarea>
					<v-btn
						v-if="btnToggle"
						tile
						color="success"
						@click="addressUpdate"
					>
						<v-icon left>
							mdi-pencil
						</v-icon>
						Save
					</v-btn>
				</v-expansion-panel-content>
				<v-expansion-panel-content v-else>
					{{ item.content }}
				</v-expansion-panel-content>
			</v-expansion-panel>
		</v-expansion-panels>

		<v-expansion-panels class="mt-5">
			<v-expansion-panel v-for="(item, i) in expPanels2" :key="i">
				<v-expansion-panel-header>
					<v-list-item>
						<v-list-item-icon>
							<v-icon small>{{ item.icon }}</v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>
								{{ item.header }}
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-expansion-panel-header>
				<v-expansion-panel-content>
					{{ item.content }}
					<!-- <v-btn link text @click="redirect(item.link)">Github</v-btn> -->
					<v-chip class="ma-2" color="info" label>
						<v-icon left class="pr-1" small>
							{{ item.icon }}
						</v-icon>
						Github
					</v-chip>
				</v-expansion-panel-content>
			</v-expansion-panel>
		</v-expansion-panels>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
	data: () => ({
		address: "",
		expPanels2: [
			{
				link: "https://www.github.com",
				header: "Github Repostory",
				content: "Find Github Repository at",
				icon: "fab fa-github",
			},
			{
				link: "https://www.github.com",
				header: "Pull Request",
				icon: "fas fa-code-branch",
				content: "Create a pull request",
			},
			{
				link: "https://www.github.com",
				header: "Suggest Feature",
				content: "Create a pull request to suggest some feature",
				icon: "fas fa-lightbulb",
			},
			{
				link: "https://www.github.com",
				header: "Find me",
				content: "You can find me at",
				icon: "fas fa-info",
			},
		],
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
		btnToggle: false,
	}),
	computed: {
		...mapGetters(["getUser"]),
	},
	mounted() {
		this.setAddress();
	},
	methods: {
		...mapActions(["updateAddress"]),
		setAddress() {
			this.address = this.getUser.address;
		},
		addressUpdate() {
			this.updateAddress(this.address);
			this.btnToggle = false;
		},
		redirect(link) {
			window.open(link, "_blank");
		},
	},
};
</script>
