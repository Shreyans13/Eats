<template>
	<div>
		<resturant-box />
		<v-expansion-panels
			multiple
			:value="panel"
			mandatory="true"
			readonly
			class="mt-5"
		>
			<v-expansion-panel v-for="(item, i) in 15" :key="i">
				<v-expansion-panel-header>
					Recommended
				</v-expansion-panel-header>
				<v-expansion-panel-content>
					<v-list-item :key="i">
						<v-icon color="green" small>
							fas fa-stop-circle
						</v-icon>
						<v-list-item-content class="ml-3">
							Veg Pulao
						</v-list-item-content>
					</v-list-item>
					<v-list-item :key="i">
						<v-icon color="red" small>
							fas fa-stop-circle
						</v-icon>
						<v-list-item-content class="ml-3">
							<span>
								Non Veg Pulao
							</span>
						</v-list-item-content>
					</v-list-item>
				</v-expansion-panel-content>
			</v-expansion-panel>
		</v-expansion-panels>
	</div>
</template>

<script>
import ResturantBox from "../components/ResturantBox.vue";
export default {
	components: { ResturantBox },
	data: () => ({
		panel: [0, 1, 2, 3],
	}),
};
</script>
