module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|dist|build)/,
				enforce: "pre",
				use: [{loader: "eslint-loader"}],
			},
		],
	},
};
