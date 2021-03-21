<template>
	<v-container fluid>
		<h2>Your order History</h2>
		<history-box class="my-3" v-for="i in 10" :key="i"></history-box>
	</v-container>
</template>

<script>
import HistoryBox from "../components/HistoryBox";

export default {
	name: "History",
	components: { HistoryBox },
};
</script>
