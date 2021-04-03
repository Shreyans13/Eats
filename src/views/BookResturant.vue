<template>
	<div>
		<v-app-bar app fixed flat elevate-on-scroll scroll color="#1e1e1e">
			<v-btn icon @click="backNavigation">
				<v-icon>fas fa-arrow-left</v-icon> </v-btn
			><span class="text-h6">{{ info.name }}</span>
		</v-app-bar>
		<!-- {{ foodItems }} -->
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
				<template v-slot:parallax>
					<v-carousel-item v-for="img in info.imgSrc" :key="img">
						<v-parallax :src="img"></v-parallax>
						<!-- {{ img }} -->
					</v-carousel-item>
				</template>
				<template v-slot:desc>
					<div class="text-justify">{{ info.shortDesc }}</div>
				</template>
			</resturant-box>
		</v-skeleton-loader>
	</div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import ResturantBox from "../components/ResturantBox.vue";
import router from "../router/index";

export default {
	components: { ResturantBox },
	data: () => ({
		// foodItems: [],
	}),
	computed: {
		...mapGetters({
			loading: "loading",
			info: "getDetailResturant",
		}),
	},
	mounted() {
		// console.log(this.id);
		// this.calcSelec();
		this.setDetailResturant(this.$route.params.id);
	},
	methods: {
		...mapActions(["setDetailResturant"]),
		backNavigation() {
			router.go(-1);
		},
	},
};
</script>
