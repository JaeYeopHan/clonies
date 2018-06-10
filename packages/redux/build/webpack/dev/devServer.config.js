/**
 * IE8 환경에서는 `inline` 옵션을 false로 설정하여야합니다.
 *   - module export 시 Object.defineProperty 관련 babel polyfill 이 동작하지 않음
 *   - Hot reload 및 HMR(Hot Module Replacement)이 동작하지 않지만, 어차피 IE8에서는 포기해야함
 */
module.exports = {
	devServer: {
		host: "localhost",
		port: 3000,
		disableHostCheck: true,
		inline: true
	}
};
