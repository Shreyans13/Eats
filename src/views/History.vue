<template>
	<div>
		<h2>Your order History</h2>
		<history-box class="my-3" v-for="i in 10" :key="i"></history-box>
	</div>
</template>

<script>
import HistoryBox from "../components/HistoryBox";

export default {
	name: "History",
	components: { HistoryBox },
};
</script>
