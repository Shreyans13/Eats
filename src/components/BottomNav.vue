<template>
	<v-bottom-navigation color="primary" grow app height="auto" class="py-0">
		<v-btn
			class="py-3"
			text
			v-for="(link, i) in bottomLink"
			:key="i"
			:to="link.to"
			@click="navigate($event, link)"
			style="height: max-content"
		>
			<span>{{ link.text }}</span>
			<v-icon class="pb-1">{{ link.icon }}</v-icon>
		</v-btn>
	</v-bottom-navigation>
</template>
<script>
import { mapGetters } from "vuex";

export default {
	name: "BottomNav",
	data: () => ({
		// activeBtn: "/",
	}),
	computed: {
		...mapGetters(["bottomLink"]),
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
