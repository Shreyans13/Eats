<template>
	<v-card background-color="#121212">
		<v-app-bar app fixed flat color="#121212">
			<v-btn icon>
				<v-icon>fas fa-street-view</v-icon>
			</v-btn>

			<v-toolbar-title class="text-h6">
				{{ getCity == "" ? "Add your Location" : getCity }}
			</v-toolbar-title>
			<v-spacer />
			<v-btn
				class="py-3 mr-3 hidden-md-and-down"
				text
				v-for="(link, i) in bottomLink"
				:key="i"
				:to="link.to"
				@click="navigate($event, link)"
				style="height: max-content"
			>
				<v-icon class="pr-2">{{ link.icon }}</v-icon>
				<span>{{ link.text }}</span>
			</v-btn>

			<template v-slot:extension v-if="toggleSearchBar">
				<v-text-field
					label="Search Resturant"
					append-icon="fab fa-searchengin"
					v-model="searchQuery"
					@change="setSearchQuery(searchQuery)"
				></v-text-field>
				
			</template>
		</v-app-bar>
	</v-card>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
	name: "TopBar",
	data: () => ({
		searchQuery : ""
		// activeBtn: "/",
	}),
	computed: {
		...mapGetters(["bottomLink", "getCity"]),
		toggleSearchBar() {
			if (this.$route.name == "Order" || this.$route.name == "Go Out")
				return true;
			return false;
		},
	},
	methods: {
		...mapActions(["setSearchQuery"]),
		navigate(event, link) {
			// event.stopPropogation();
			if (link.to || !link.href) return;
			this.$vuetify.goTo(link.href);
		},
	},
};
</script>
