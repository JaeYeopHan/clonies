/**
 * webpack 공통 설정
 */

const merge = require("webpack-merge");
const WebpackHtmlConfig = require("./html.config");
const ES6pConfig = require("./es6p.config");

module.exports = merge(WebpackHtmlConfig, ES6pConfig);
