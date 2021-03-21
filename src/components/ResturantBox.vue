<template>
	<v-card>
		<v-card-title>Cafe Badilico</v-card-title>
		<v-card-text>
			<v-row align="center" class="mx-0">
				<v-rating
					:value="4.5"
					color="amber"
					dense
					half-increments
					readonly
					size="14"
				></v-rating>

				<div class="grey--text ml-4">
					4.5 (413)
				</div>
			</v-row>

			<div class="my-4 subtitle-1">
				North Indian, Chinese, Biryani
			</div>

			<div>
				Small plates, salads & sandwiches - an intimate setting with 12
				indoor seats plus patio seating.
			</div>
		</v-card-text>

		<v-divider class="mx-4"></v-divider>

		<v-card-text>
			<v-btn color="primary" class="pa-3 mx-1">
				<span class="text-truncate" style="max-width: 75px;">
					40% OFF
					<br />
					Save upto 500
				</span>
			</v-btn>

			<v-btn color="primary" class="pa-3 mx-3">
				<span class="text-truncate" style="max-width: 75px;">
					40% OFF
					<br />
					Save upto 500
				</span>
			</v-btn>
		</v-card-text>
	</v-card>
</template>

<script>
export default {};
</script>
