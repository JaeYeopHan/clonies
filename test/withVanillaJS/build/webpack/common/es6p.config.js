const webpack = require("webpack");
const path = require("path");

module.exports = {
	module: {
		rules: [
			// babel
			{
				test: /\.js$/,
				exclude: /(node_modules|build)/,
				loader: "babel-loader",
			},
		],
	},

	plugins: [
		new webpack.ProvidePlugin({
			babelHelpers: path.resolve(__dirname, "../../babel/babel-external-helpers.js")
		}),
	],
};
