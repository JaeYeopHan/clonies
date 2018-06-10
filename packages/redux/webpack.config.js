const merge = require("webpack-merge");
const path = require("path");

const webpackCommonConfig = require("./build/webpack/common");
const webpackDevConfig = require("./build/webpack/dev");
const webpackProdConfig = require("./build/webpack/production");

module.exports = ({
	dev = false
} = {}) => {
	const entryOutputConfig = {
		entry: {
			"bundle": ["./src/index.js"] // "결과이름": [entry 파일 목록]
		},
		output: {
			filename: "js/[name].js", // 결과 파일 이름
			path: path.resolve(process.cwd(), "dist"), // 결과 기준 폴더
			library: "Redux", // namespace
			libraryTarget: "umd" // 결과 모듈 포맷 [commonjs | amd | umd | this | window | var (IE하위 오류로 window 사용 권장)]
		},
	};

	// merge the webpack configs
	return Promise.all([entryOutputConfig, webpackCommonConfig, dev ? webpackDevConfig : webpackProdConfig])
		.then(configs => merge(...configs));
};
