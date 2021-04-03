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
			<v-expansion-panels readonly multiple :value="Panels" class="mt-5">
				<v-expansion-panel
					v-for="(item, i) in info.detailReviews"
					:key="i"
				>
					<v-expansion-panel-header class="text-subtitle-1">
						<v-row align="center" class="spacer" no-gutters>
							<v-col cols="3">
								<v-avatar size="36px">
									<img
										alt="Avatar"
										src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
									/>
								</v-avatar>
							</v-col>
							<v-col cols="9">{{ item.name }}</v-col>
						</v-row>
						<template v-slot:actions>
							<v-rating
								small
								:value="info.rating"
								background-color="amber lighten-3"
								color="amber"
							></v-rating>
						</template>
					</v-expansion-panel-header>
					<v-expansion-panel-content>
						{{ item.review }}
					</v-expansion-panel-content>
				</v-expansion-panel>
			</v-expansion-panels>
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
		Panels: [],
	}),
	computed: {
		...mapGetters({
			loading: "loading",
			info: "getDetailResturant",
		}),
	},
	mounted() {
		// console.log(this.id);
		this.calcSelec();
		this.setDetailResturant(this.$route.params.id);
	},
	methods: {
		...mapActions(["setDetailResturant"]),
		backNavigation() {
			router.go(-1);
		},
		calcSelec() {
			for (let i = 0; i < 5; i++) {
				this.Panels.push(i);
			}
		},
	},
};
</script>
