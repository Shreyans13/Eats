module.exports = {
	transpileDependencies: ["vuetify"],
	publicPath:
		process.env.NODE_ENV === "production"
			? "/studious-octo-rotary-phone/"
			: "/",
};
