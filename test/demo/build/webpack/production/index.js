/**
 * webpack 최종 빌드 설정
 */

const merge = require("webpack-merge");
const ESLintConfig = require("./eslint.config");
const UglifyConfig = require("./uglify.config");
const SourceMapConfig = require("./sourceMap.config");

module.exports = merge(ESLintConfig, SourceMapConfig, UglifyConfig);
