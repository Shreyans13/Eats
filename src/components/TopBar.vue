<template>
	<v-card background-color="#121212">
		<v-app-bar app fixed flat color="#121212">
			<v-btn icon>
				<v-icon>fas fa-street-view</v-icon>
			</v-btn>

			<v-toolbar-title class="text-h6">
				{{ getCity }}
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

			<template v-slot:extension>
				<v-text-field
					label="Search Resturant"
					append-icon="fab fa-searchengin"
				></v-text-field>
			</template>
		</v-app-bar>
	</v-card>
</template>

<script>
import { mapGetters } from "vuex";
// import { mapState } from "vuex";

export default {
	name: "TopBar",
	data: () => ({
		// activeBtn: "/",
	}),
	computed: {
		...mapGetters(["bottomLink", "getCity"]),
	},
	methods: {
		navigate(event, link) {
			// event.stopPropogation();
			if (link.to || !link.href) return;
			this.$vuetify.goTo(link.href);
		},
	},
};
</script>
