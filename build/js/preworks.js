/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

var date = new Date();
var copyRight = document.getElementById("copyRight");
copyRight.innerHTML = "<p>Copyright \xA9 ".concat(date.getFullYear(), " Yu, Chao</p>");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

//     /*******hanburger manu click event********/
$(".menu-btn").click(function (e) {
  if (e.target.className.split(" ")[0] === 'menu-btn' || e.target.className.split(" ")[0] === 'menu-btn-hamburger') {
    $(".menu-btn").toggleClass("expanded");
    $(".menu-btn-hamburger").toggleClass("expanded");
    $(".nav").toggleClass("expanded");
  }

  console.log(e.target);
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hamburger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _hamburger_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hamburger_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_footer_js__WEBPACK_IMPORTED_MODULE_1__);


var breakPointPc = window.matchMedia("(min-width: 801px)");
var enPreworksJson = "./json/en-preworks.json";
$.getJSON(enPreworksJson).done(function (data) {
  // console.log(data)
  var outputPc = '<ul class="cards">';
  var outputMb = '<ul class="cards">';
  $.each(data, function (key, value) {
    outputPc += "   <li class=\"card\">\n                        <a class=\"wrapper\" href=\"#\">\n                            <figure class=\"card\">\n                                <img  src=\"images/".concat(value.image, "\" alt=\"images of my articles\">\n                                <figcaption class=\"caption\">\n                                    <h2 class=\"works-title\">").concat(value.title, "</h2>\n                                    <p class=\"works-mark\">").concat(value.details.year, " at ").concat(value.details.company, " in ").concat(value.details.country[0], "</p>\n                                </figcaption>\n                            </figure>\n                        </a>\n                    </li>\n                    ");
    outputMb += "   <li class=\"card\">\n                            <a href=\"#\">\n                            <img  src=\"images/".concat(value.image, "\" alt=\"images of my articles\">\n                            <h2 class=\"works-title\">").concat(value.title, "</h2>\n                            <p class=\"works-mark\">").concat(value.details.year, " at ").concat(value.details.company, " in ").concat(value.details.country[0], "</p>\n                            </a>\n                    </li>\n                ");
  }); // console.log(outputPc);

  outputPc += '</ul>';
  outputMb += '</ul>';

  if (breakPointPc.matches) {
    $('#preworks-content').html(outputPc);
  } else {
    $('#preworks-content').html(outputMb);
  }

  $(window).resize(function () {
    if (breakPointPc.matches) {
      $('#preworks-content').html(outputPc);
    } else {
      $('#preworks-content').html(outputMb);
    }
  });
}).fail(function (jqxhr, textStatus, error) {
  var err = textStatus + ", " + error;
  console.log("Request Failed: ".concat(err, " "));
  console.log("http status: ".concat(jqxhr.status));
}); // console.log(`${key}`)
// console.log(`${value.title}`)
// console.log(`${Object.keys(value.language)}`)
// console.log(`${value.details.year}`)
// console.log(`${value.details.company}`)
// Object.keys(value.language).map(k => console.log(value.language[k]))

/***/ })
/******/ ]);