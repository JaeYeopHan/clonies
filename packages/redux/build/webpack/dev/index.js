/**
 * webpack 개발 설정
 */

const merge = require("webpack-merge");
const DevServerConfig = require("./devServer.config");
const SourceMapConfig = require("./sourceMap.config");

module.exports = merge(DevServerConfig, SourceMapConfig);
