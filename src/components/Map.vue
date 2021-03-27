<template>
	<l-map
		class="nodes-map"
		:zoom="zoom"
		:center="center"
		style="height: 100%; width: 100%"
	>
		<l-tile-layer :url="url"></l-tile-layer>
	</l-map>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer } from "vue2-leaflet";

export default {
	name: "MobileMap",
	components: {
		LMap,
		LTileLayer,
	},
	data: () => ({
		lat: 22.804565,
		long: 86.202873,
		zoom: 13,
		center: latLng(22.804565, 86.202873),
		url:
			"https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png",
	}),
};
</script>
