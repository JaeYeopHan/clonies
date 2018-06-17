const webpack = require("webpack");
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
    plugins: [new UglifyJsPlugin({
        sourceMap: true,
        compress: {
            warnings: true, // dev terminal console
            drop_console: true, // drop console.* calls
            unused: true, // drop unref'd vars/funcs
            dead_code: true, // drop unreachable code
            screw_ie8: false	// false: support ie8
        },
        mangle: {
            screw_ie8: false    // false: support ie8
        },
        output: {
            screw_ie8: false    // false: support ie8
        }
    })]
};
