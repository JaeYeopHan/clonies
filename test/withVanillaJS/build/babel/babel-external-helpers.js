/* eslint-disable */

//babel-external-helpers -l createClass -t umd > babel-external-helpers.js
(function(){
	var babelHelpers = {};

	//["typeof"]  prevent keyword property error at the <= IE 8
	babelHelpers["typeof"] = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
			return typeof obj;
		} : function (obj) {
			return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
		};

	babelHelpers.createClass = (function () {
		var isSupportedDefineProperty = !!Object.defineProperty;

		if (isSupportedDefineProperty) {	// IE8에서는 DOM만 작동하는 이슈
			try {
				Object.defineProperty({}, "", {});
			} catch (e) {
				isSupportedDefineProperty = false;
			}
		}
		
		var getProperty;
		if (isSupportedDefineProperty) {
			getProperty = function (target, descriptor) {
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		} else {
			getProperty = function (target, descriptor) {
				target[descriptor.key] = descriptor.value;
			}
		}

		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;

				getProperty(target, descriptor);
			}
		}

		return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	})();


	babelHelpers.classCallCheck = function classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			// throw new TypeError("Cannot call a class as a function");
			// 배포시 압축을 위해 console로 변경
			console.error("Cannot call a class as a function");
		}
	};

	babelHelpers.inherits = function (d, b) {
		for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		function __() {
			this.constructor = d;
		}

		d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};

	babelHelpers.possibleConstructorReturn = function (self, call) {
		if (!self) {
			console.error("this hasn't been initialised - super() hasn't been called");
		}
		return call && (typeof call === "object" || typeof call === "function") ? call : self;
	};

	// es modules
	// babelHelpers.interopRequireDefault = function (obj) {
	// 	return obj && obj.__esModule ? obj : {
	// 		default: obj
	// 	};
	// };
	//
	// babelHelpers.interopRequireWildcard = function (obj) {
	// 	if (obj && obj.__esModule) {
	// 		return obj;
	// 	} else {
	// 		var newObj = {};
	//
	// 		if (obj != null) {
	// 			for (var key in obj) {
	// 				if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	// 			}
	// 		}
	//
	// 		newObj.default = obj;
	// 		return newObj;
	// 	}
	// };

	module.exports = babelHelpers;
})();
