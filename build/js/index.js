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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loading_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _intro_animation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _portfolio_rotate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_footer_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _preworks_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _preworks_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_preworks_js__WEBPACK_IMPORTED_MODULE_4__);




 // import * as $ from 'jquery';

/********only-for-test ********/

$("document").ready(function () {
  $(".site").click(function (e) {
    console.log(e.target);
  });
});
/*******detact logo path********/
// const logo = document.querySelectorAll("#logo path");
// for (let i = 0 ;i < logo.length ; i++) {
//     console.log(`letter ${i} is ${logo[i].getTotalLength()}`);
// }

/*******title-btn hover event********/

$(".title-btn").mouseenter(function (e) {
  // console.log(e.target);
  e.target.tagName === "BUTTON" ? $(".sunburst > #title-bg").animate({
    opacity: 1
  }, 200) : $(".sunburst > #title-bg").animate({
    opacity: 0
  }, 200);
});
$(".title-btn").mouseout(function (e) {
  e.target.tagName === "BUTTON" ? $(".sunburst > #title-bg").animate({
    opacity: 0
  }, 200) : $(".sunburst > #title-bg").animate({
    opacity: 1
  }, 200);
}); // $(".title-img-area > #title-img")
//     .mouseenter(function(e){
//         e.target.tagName === "IMG" ?
//             $(".sunburst > #title-bg").animate({ opacity: 1},200) :
//             $(".sunburst > #title-bg").animate({ opacity: 0},200);
//     });
// $(".title-img-area > #title-img")
// .mouseout(function(e){
//     e.target.tagName === "IMG" ?
//             $(".sunburst > #title-bg").animate({ opacity: 0},200) :
//             $(".sunburst > #title-bg").animate({ opacity: 1},200);
//     });
//     /*******hanburger manu click event********/

$(".menu-btn").click(function (e) {
  if (e.target.className.split(" ")[0] === 'menu-btn' || e.target.className.split(" ")[0] === 'menu-btn-hamburger') {
    $(".menu-btn").toggleClass("expanded");
    $(".menu-btn-hamburger").toggleClass("expanded");
    $(".nav").toggleClass("expanded");
  }

  console.log(e.target);
});
/********** click change my picture(mobile)********/

/********* change img for mobile*********/

var toggle = false;
var titleImg = document.getElementById('title-img');

function changImg() {
  if (toggle === true) {
    titleImg.src = './images/portfolio7.png';
  } else {
    titleImg.src = './images/portfolio0.png';
  }

  toggle = !toggle;
}

var breakPointMb = window.matchMedia("(max-width: 801px)");
document.querySelector('#title-img').addEventListener('click', function (e) {
  // console.log(e.target);
  if (breakPointMb.matches) {
    changImg();
  }
}, false); //   $("document").ready(function() {
//         $("#title-img")
//             .click(function() {
//                 if ( $(this).data('active') ) {
//                     $(this).attr('src', './images/portfolio7.svg');
//                     $(this).data('active', false);
//                   } else {
//                     $(this).attr('src', './images/portfolio0.svg');
//                     $(this).data('active', true);
//                   }
//             })
//     });

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _portfolio_rotate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

var img_Speed = 8;
var counter = 0; // var timer = 300;

function loaderRotate() {
  if (counter > _portfolio_rotate_js__WEBPACK_IMPORTED_MODULE_0__["imgArray"].length - 1) {
    counter = 0;
  }

  document.getElementById('loader').src = _portfolio_rotate_js__WEBPACK_IMPORTED_MODULE_0__["imgArray"][counter++].src; // setTimeout(imgRotate, timer);
  // window.requestAnimationFrame(imgRotate);
  // use requestAnimationFrame instead of settimeout to get the smooth animation
} //inspired by Web Dev Simplified "How To Code The Snake Game In Javascript"


var lastRenderedTime = 0;
var stopped = true;
var requestId = 0;

function timer(currentTime) {
  if (stopped == false) {
    requestId = window.requestAnimationFrame(timer);
    var secondsSinceLastRendered = (currentTime - lastRenderedTime) / 1000; //to milliseconds //0.00....

    if (secondsSinceLastRendered < 1 / img_Speed) {
      return;
    } //if img_Speed = 2 then start caculate larger than 0.5 seconds 


    lastRenderedTime = currentTime; //first update the lastRenderedTime

    loaderRotate();
  }
} // window.onload = requestAnimationFrame(timer);
// imgRotate();


function startAnimation() {
  stopped = false;
  requestAnimationFrame(timer);
  loaderRotate();
}

function stopAnimation() {
  if (requestId) {
    window.cancelAnimationFrame(requestId);
    stopped = true;
  }
}

startAnimation();
$(window).on('load', function () {
  setTimeout(removeLoader, 1000); // removeLoader() //wait for page load PLUS two seconds.
});

function removeLoader() {
  $(".loading").fadeOut(500, function () {
    // fadeOut complete. Remove the loading div
    $(".loading").remove(); //makes page more lightweight 

    stopAnimation();
  });
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imgArray", function() { return imgArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakPointPc", function() { return breakPointPc; });
// /********** mouseover rotate my picture(PC)********/
var img_Speed = 6; //how many times one picture changes per second

var imgArray = [];
var img_Items = 8;

for (var i = 0; i < img_Items; i++) {
  imgArray[i] = document.createElement('img');
  imgArray[i].src = "./images/portfolio".concat(i, ".png");
}

var counter = 0; // var timer = 300;

function imgRotate() {
  if (counter > imgArray.length - 1) {
    counter = 0;
  }

  document.getElementById('title-img').src = imgArray[counter++].src; // setTimeout(imgRotate, timer);
  // window.requestAnimationFrame(imgRotate);
  // use requestAnimationFrame instead of settimeout to get the smooth animation
} //set timer and render the rotation


var lastRenderedTime = 0;
var stopped = true;
var requestId = 0;

function timer(currentTime) {
  if (stopped == false) {
    requestId = window.requestAnimationFrame(timer);
    var secondsSinceLastRendered = (currentTime - lastRenderedTime) / 1000; //to milliseconds //0.00....

    if (secondsSinceLastRendered < 1 / img_Speed) {
      return;
    } //if img_Speed = 2 then start caculate larger than 0.5 seconds 


    lastRenderedTime = currentTime; //first update the lastRenderedTime

    imgRotate();
  }
} // window.onload = requestAnimationFrame(timer);
// imgRotate();


function startAnimation() {
  stopped = false;
  requestAnimationFrame(timer);
  imgRotate();
}

function stopAnimation() {
  if (requestId) {
    window.cancelAnimationFrame(requestId);
    stopped = true;
  }
}

var breakPointPc = window.matchMedia("(min-width: 801px)");
document.querySelector('#title-img').addEventListener('mouseover', function (e) {
  // console.log(e.target);
  if (breakPointPc.matches && e.target.tagName === 'IMG') {
    // console.log(e.target);
    startAnimation();
    console.log(requestId);
  } else {
    stopAnimation();
  }

  document.querySelector('#title-img').addEventListener('mouseout', function (e) {
    // console.log(e.target);
    stopAnimation();
  }, false);
}, false);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _portfolio_rotate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/************** GSAP and else***************/
// import ScrollMagic from 'scrollmagic'
// import '../../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'
// import '../../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/jquery.ScrollMagic'
// import '../../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'
// import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";

console.log(_portfolio_rotate_js__WEBPACK_IMPORTED_MODULE_0__["breakPointPc"]); // const breakPointPc = window.matchMedia("(min-width: 801px)")

gsap.from('#sub-logo ', {
  opacity: 0,
  delay: 1.5,
  duration: 1.5,
  ease: 'Power4.easeInOut'
}); // gsap.from('.lang-btn ',{opacity:0, delay:1, duration:1, ease:'Power4.easeInOut'})
// gsap.fromTo('.menu-btn ',{opacity:0},{opacity:1, delay:1, duration:1, ease:'Power4.easeInOut'})

gsap.from('.intro ', {
  opacity: 0,
  delay: 1.5,
  duration: 1.5,
  ease: 'Power4.easeInOut'
});
gsap.from('.colophon ', {
  opacity: 0,
  delay: 1.5,
  duration: 1.5,
  ease: 'Power4.easeInOut'
});

if (!_portfolio_rotate_js__WEBPACK_IMPORTED_MODULE_0__["breakPointPc"].matches) {
  //if bp matches title-bg opacity0 in home.scss
  gsap.from('#title-bg ', {
    opacity: 0,
    duration: 1.5,
    ease: 'Power4.easeInOut'
  });
  gsap.to('#title-bg ', {
    opacity: 0,
    delay: 1,
    duration: 1.5,
    ease: 'Power3.easeInOut'
  });
  gsap.from('#title-img ', {
    opacity: 0,
    duration: 0.5,
    ease: 'Power4.easeInOut'
  });
}

if (_portfolio_rotate_js__WEBPACK_IMPORTED_MODULE_0__["breakPointPc"].matches) {
  gsap.from('#title-img ', {
    opacity: 0,
    delay: 1.5,
    y: 100,
    duration: 0.5,
    ease: 'Power4.easeInOut'
  });
  gsap.from('.sidetext-ability ', {
    opacity: 0,
    delay: 1.5,
    y: 100,
    duration: 0.5,
    ease: 'Power2.easeInOut'
  });
  gsap.from('.currentLearning-content  ', {
    opacity: 0,
    delay: 1.5,
    y: 100,
    duration: 0.5,
    ease: 'Power4.easeInOut'
  });
  gsap.from('.ad-marker-area  ', {
    opacity: 0,
    delay: 1.5,
    y: 100,
    duration: 0.5,
    ease: 'Power4.easeInOut'
  }); // gsap.from('.title-btn ',{ opacity:0,delay:1,y:100, duration:0.5, ease:'Power4.easeInOut'})
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var date = new Date();
var copyRight = document.getElementById("copyRight");
copyRight.innerHTML = "<p>Copyright \xA9 ".concat(date.getFullYear(), " Yu, Chao</p>");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

console.log("hi");
$.getJSON('.src/json/en-preworks.json', function (data) {
  console.log(data);
});

/***/ })
/******/ ]);