<template>
	<v-img :aspect-ratio="1 / 2" width="100%">
		<l-map :zoom="zoom" :center="center" style="height: 100%; width: 100%">
			<l-tile-layer :url="url"></l-tile-layer>
		</l-map>
	</v-img>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer } from "vue2-leaflet";

export default {
	name: "Map",
	components: {
		LMap,
		LTileLayer,
	},
	data: () => ({
		lat: 22.804565,
		long: 86.202873,
		zoom: 11,
		center: latLng(22.804565, 86.202873),
		// url:
		// "https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png",
		url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
	}),
};
</script>
