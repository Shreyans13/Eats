<template>
	<v-card>
		<v-app-bar app dark fixed>
			<v-btn icon>
				<v-icon>fas fa-street-view</v-icon>
			</v-btn>

			<!-- <v-app-bar-title>Jamshedpur</v-app-bar-title> -->
			<v-toolbar-title class="text-h6"> Jamshedpur </v-toolbar-title>

			<template v-slot:extension>
				<p>ABC`</p>
				<p>def</p>
				<p>GHI</p>
				<p>jkl</p>
			</template>
		</v-app-bar>
	</v-card>
</template>
