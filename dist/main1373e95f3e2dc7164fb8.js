/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/explosion.png */ "./src/assets/explosion.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n  font-size: 16px;\n  --teal-200: #80CBC4;\n  --teal-600: #26A69A;\n  --teal-400:#26A69A;\n  --deep-purple-300:#9575CD;\n  --deep-purple-600: #5E35B1;\n  --deep-purple-900: #311B92;\n  --teal-800: #00695C;\n  --green-800: #1B5E20;\n  --pink-900:#880E4F;\n\n  --red-500: #F44336;\n  --gray-500: #9E9E9E;\n  --light-blue-300: #4FC3F7;\n}\n*{\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Poppins', sans-serif;\n}\nbody{\n  width: 100%;\n  min-height: 100vh;\n  background-color: var(--teal-200);\n}\nheader{\n  height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nheader h1{\n  font-size: 40px;\n  color: var(--deep-purple-900);\n}\ndiv.select-content{\n  height: 100%;\n  margin: auto;\n  width: 100%;\n  min-height: 500px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\ndiv.select-panel{\n  background-color: white;\n  width: 280px;\n  height: 350px;\n  border-radius: 10px;\n  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n}\n.select-panel h2{\n  text-align: center;\n  padding: 15px;\n  margin-top: 20px;\n  margin-bottom: 60px;\n}\ndiv.target{\n  height: calc(100vh - 100px);\n  width: 100%;\n}\n.placement-grid{\n  max-height: 500px;\n  height: 500px;\n  width: 500px;\n  min-width: 500px;\n  background-color: white;\n  /* border: 3px solid black; */\n  border-top: 2px solid black;\n  border-left: 2px solid black;\n  border-bottom: 3px solid black;\n  border-right: 3px solid black;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  margin: 0 100px;\n}\n.placement-grid-square,.attack-grid-square,.display-grid-square,.reveal-grid-square{\n  /* border: 1px solid black; */\n  border-left: 1px solid black;\n  border-top: 1px solid black;\n  background-color: white;\n  width: 100%;\n  height: 100%;\n}\ndiv.attack-grid-square{\n  background-color: var(--gray-500);\n}\n.placement-grid .valid-square{\n  background-color: var(--teal-200);\n}\n.placement-grid .invalid-square{\n  background-color: var(--red-500);\n}\n.ship-panel,.button-panel{\n  border: 3px solid black;\n  height: 500px;\n  width: 200px;\n  background-color: var(--deep-purple-300);\n}\n.button-panel, .ship-button-container{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n}\n.ship-panel{\n  display: flex;\n  flex-direction: column;\n}\n.ship-button-container{\n  flex-grow: 1;\n  padding: 15px;\n}\n.button-panel button, .ship-button-container button{\n  display: block;\n  width: 120px;\n  height: 50px;\n  border-radius: 5px;\n  border: none;\n  font-size: 16px;\n  box-shadow: 2px 2px 3px rgb(101, 101, 101);\n}\n.select-btn-container{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 50px;\n}\n.select-btn-container button{\n  display: block;\n  width: 120px;\n  padding: 10px 5px;\n  border: none;\n  background-color: var(--deep-purple-600);\n  color: white;\n  border-radius: 5px;\n}\n.select-btn-container button:hover{\n  background-color: var(--deep-purple-900);\n}\n.ship-button-container button.selected{\n  background-color: var(--teal-800);\n  color: white;\n}\n.button-panel button:hover:not(:disabled), .ship-button-container button:hover:not(.selected){\n  background-color: rgb(197, 197, 197);\n}\n.ship-panel h3{\n  text-align: center;\n  color: white;\n  padding: 10px;\n}\n.placement-grid div.carrier-color,.display-grid div.carrier-color,.reveal-grid div.carrier-color{\n  background-color: var(--deep-purple-900);\n}\n.placement-grid div.battleship-color,.display-grid div.battleship-color,.reveal-grid div.battleship-color{\n  background-color: var(--teal-800);\n}\n.placement-grid div.destroyer-color,.display-grid div.destroyer-color,.reveal-grid div.destroyer-color{\n  background-color: var(--pink-900);\n}\n.placement-grid div.submarine-color,.display-grid div.submarine-color,.reveal-grid div.submarine-color{\n  background-color: var(--green-800);\n}\n.placement-grid div.boat-color,.display-grid div.boat-color,.reveal-grid div.boat-color{\n  background-color: var(--deep-purple-600);\n}\ndiv.main-content{\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n.placement-container{\n  min-height: 500px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 110px;\n}\n.placement-info{\n  margin-top: 20px;\n  width: 500px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center;\n  white-space: nowrap;\n}\n.game-content{\n  height: 100%;\n  margin: auto;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 50px;\n}\n.gameboard-container{\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 250px;\n  width: 100%;\n  padding-bottom: 100px;\n}\n.left-side,.right-side{\n  width: 400px;\n  min-width: 400px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.display-grid,.attack-grid, .reveal-grid{\n  width: 400px;\n  height: 400px;\n  background-color:white;\n  border-top: 2px solid black;\n  border-left: 2px solid black;\n  border-bottom: 3px solid black;\n  border-right: 3px solid black;\n  display: grid;\n  grid-template-columns: repeat(10,1fr);\n  grid-template-rows: repeat(10,1fr);\n}\n.game-info{\n  margin-top: 20px;\n  width: 500px;\n  text-align: center;\n  color: white;\n  padding: 15px;\n  background-color: #9575CD;\n  border-radius: 10px;\n  border: 3px solid var(--deep-purple-600) ;\n}\n.sunk{\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: center;\n  background-size: cover;\n}\n.display-grid div.miss, .attack-grid div.miss, .reveal-grid div.miss{\n  background-color: var(--light-blue-300);\n}\n\n.attack-grid div.sunk{\n  background-color: var(--red-500);\n}\n.modal-container{\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.3);\n  backdrop-filter: blur(4px);\n  z-index: 100;\n  top: 0%;\n  left: 0%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  pointer-events: auto;\n  opacity: 1;\n  transition: opacity 0.3s ease;\n}\n.modal{\n  border-radius: 5px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.24);\n  height: 210px;\n  width: 320px;\n  background-color: white;\n  text-align: center;\n  position: relative;\n}\n\n.modal h2{\n  margin-top: 15px;\n  margin-bottom: 40px;\n}\n\n.modal-btn-container{\n  margin-top: 20px;\n}\n.modal-btn-container button{\n  display: inline-block;\n  width: 80px;\n  margin: 0px 20px;\n  padding: 5px;\n  border: none;\n  box-shadow: 2px 2px 3px rgb(101, 101, 101);\n  color: white;\n  font-size: 16px;\n}\n#btn-yes{\n  background-color: var(--teal-600);\n}\n#btn-no{\n  background-color: var(--red-500);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');\n:root{\n  font-size: 16px;\n  --teal-200: #80CBC4;\n  --teal-600: #26A69A;\n  --teal-400:#26A69A;\n  --deep-purple-300:#9575CD;\n  --deep-purple-600: #5E35B1;\n  --deep-purple-900: #311B92;\n  --teal-800: #00695C;\n  --green-800: #1B5E20;\n  --pink-900:#880E4F;\n\n  --red-500: #F44336;\n  --gray-500: #9E9E9E;\n  --light-blue-300: #4FC3F7;\n}\n*{\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Poppins', sans-serif;\n}\nbody{\n  width: 100%;\n  min-height: 100vh;\n  background-color: var(--teal-200);\n}\nheader{\n  height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nheader h1{\n  font-size: 40px;\n  color: var(--deep-purple-900);\n}\ndiv.select-content{\n  height: 100%;\n  margin: auto;\n  width: 100%;\n  min-height: 500px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\ndiv.select-panel{\n  background-color: white;\n  width: 280px;\n  height: 350px;\n  border-radius: 10px;\n  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n}\n.select-panel h2{\n  text-align: center;\n  padding: 15px;\n  margin-top: 20px;\n  margin-bottom: 60px;\n}\ndiv.target{\n  height: calc(100vh - 100px);\n  width: 100%;\n}\n.placement-grid{\n  max-height: 500px;\n  height: 500px;\n  width: 500px;\n  min-width: 500px;\n  background-color: white;\n  /* border: 3px solid black; */\n  border-top: 2px solid black;\n  border-left: 2px solid black;\n  border-bottom: 3px solid black;\n  border-right: 3px solid black;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  margin: 0 100px;\n}\n.placement-grid-square,.attack-grid-square,.display-grid-square,.reveal-grid-square{\n  /* border: 1px solid black; */\n  border-left: 1px solid black;\n  border-top: 1px solid black;\n  background-color: white;\n  width: 100%;\n  height: 100%;\n}\ndiv.attack-grid-square{\n  background-color: var(--gray-500);\n}\n.placement-grid .valid-square{\n  background-color: var(--teal-200);\n}\n.placement-grid .invalid-square{\n  background-color: var(--red-500);\n}\n.ship-panel,.button-panel{\n  border: 3px solid black;\n  height: 500px;\n  width: 200px;\n  background-color: var(--deep-purple-300);\n}\n.button-panel, .ship-button-container{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n}\n.ship-panel{\n  display: flex;\n  flex-direction: column;\n}\n.ship-button-container{\n  flex-grow: 1;\n  padding: 15px;\n}\n.button-panel button, .ship-button-container button{\n  display: block;\n  width: 120px;\n  height: 50px;\n  border-radius: 5px;\n  border: none;\n  font-size: 16px;\n  box-shadow: 2px 2px 3px rgb(101, 101, 101);\n}\n.select-btn-container{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 50px;\n}\n.select-btn-container button{\n  display: block;\n  width: 120px;\n  padding: 10px 5px;\n  border: none;\n  background-color: var(--deep-purple-600);\n  color: white;\n  border-radius: 5px;\n}\n.select-btn-container button:hover{\n  background-color: var(--deep-purple-900);\n}\n.ship-button-container button.selected{\n  background-color: var(--teal-800);\n  color: white;\n}\n.button-panel button:hover:not(:disabled), .ship-button-container button:hover:not(.selected){\n  background-color: rgb(197, 197, 197);\n}\n.ship-panel h3{\n  text-align: center;\n  color: white;\n  padding: 10px;\n}\n.placement-grid div.carrier-color,.display-grid div.carrier-color,.reveal-grid div.carrier-color{\n  background-color: var(--deep-purple-900);\n}\n.placement-grid div.battleship-color,.display-grid div.battleship-color,.reveal-grid div.battleship-color{\n  background-color: var(--teal-800);\n}\n.placement-grid div.destroyer-color,.display-grid div.destroyer-color,.reveal-grid div.destroyer-color{\n  background-color: var(--pink-900);\n}\n.placement-grid div.submarine-color,.display-grid div.submarine-color,.reveal-grid div.submarine-color{\n  background-color: var(--green-800);\n}\n.placement-grid div.boat-color,.display-grid div.boat-color,.reveal-grid div.boat-color{\n  background-color: var(--deep-purple-600);\n}\ndiv.main-content{\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n.placement-container{\n  min-height: 500px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 110px;\n}\n.placement-info{\n  margin-top: 20px;\n  width: 500px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center;\n  white-space: nowrap;\n}\n.game-content{\n  height: 100%;\n  margin: auto;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 50px;\n}\n.gameboard-container{\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 250px;\n  width: 100%;\n  padding-bottom: 100px;\n}\n.left-side,.right-side{\n  width: 400px;\n  min-width: 400px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.display-grid,.attack-grid, .reveal-grid{\n  width: 400px;\n  height: 400px;\n  background-color:white;\n  border-top: 2px solid black;\n  border-left: 2px solid black;\n  border-bottom: 3px solid black;\n  border-right: 3px solid black;\n  display: grid;\n  grid-template-columns: repeat(10,1fr);\n  grid-template-rows: repeat(10,1fr);\n}\n.game-info{\n  margin-top: 20px;\n  width: 500px;\n  text-align: center;\n  color: white;\n  padding: 15px;\n  background-color: #9575CD;\n  border-radius: 10px;\n  border: 3px solid var(--deep-purple-600) ;\n}\n.sunk{\n  background-image: url(./assets/explosion.png);\n  background-position: center;\n  background-size: cover;\n}\n.display-grid div.miss, .attack-grid div.miss, .reveal-grid div.miss{\n  background-color: var(--light-blue-300);\n}\n\n.attack-grid div.sunk{\n  background-color: var(--red-500);\n}\n.modal-container{\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.3);\n  backdrop-filter: blur(4px);\n  z-index: 100;\n  top: 0%;\n  left: 0%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  pointer-events: auto;\n  opacity: 1;\n  transition: opacity 0.3s ease;\n}\n.modal{\n  border-radius: 5px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.24);\n  height: 210px;\n  width: 320px;\n  background-color: white;\n  text-align: center;\n  position: relative;\n}\n\n.modal h2{\n  margin-top: 15px;\n  margin-bottom: 40px;\n}\n\n.modal-btn-container{\n  margin-top: 20px;\n}\n.modal-btn-container button{\n  display: inline-block;\n  width: 80px;\n  margin: 0px 20px;\n  padding: 5px;\n  border: none;\n  box-shadow: 2px 2px 3px rgb(101, 101, 101);\n  color: white;\n  font-size: 16px;\n}\n#btn-yes{\n  background-color: var(--teal-600);\n}\n#btn-no{\n  background-color: var(--red-500);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/app/gameboard.js":
/*!**************************************!*\
  !*** ./src/modules/app/gameboard.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gameboard": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/modules/app/ship.js");


const Gameboard = function () {
  const gameboard = _createBoard();

  // ship factories
  const carrier = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)(5, 'carrier');
  const battleship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)(4, 'battleship');
  const destroyer = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)(3, 'destroyer');
  const submarine = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)(3, 'submarine');
  const boat = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)(2, 'boat');

  // getters
  const getGameboard = () => {
    return gameboard;
  };
  const getShipLocation = () => {
    return shipLocation;
  };

  // ship location data
  const shipLocation = {
    carrier: [],
    battleship: [],
    destroyer: [],
    submarine: [],
    boat: [],
  };

  function _createBoard() {
    const board = [];
    for (let y = 0; y < 10; y++) {
      const col = [];
      for (let x = 0; x < 10; x++) {
        col.push('O');
      }
      board.push(col);
    }
    return board;
  }
  // check no-overlapping ships
  function _isPlaceableSquare(x, y) {
    if (gameboard[x][y] !== 'O') return false;
    else if (gameboard[x][y] === 'O') return true;
  }
  // pass x,y to ship location
  function _storeShipLoaction(x, y, shipname) {
    const xpos = x;
    const ypos = y;
    shipLocation[shipname].push({ x: xpos, y: ypos });
  }
  function _getShipByName(name) {
    if (name === 'carrier') {
      return carrier;
    } else if (name === 'battleship') {
      return battleship;
    } else if (name === 'destroyer') {
      return destroyer;
    } else if (name === 'submarine') {
      return submarine;
    } else if (name === 'boat') {
      return boat;
    }
  }
  // place ship by the "head"
  const placeShip = function (x, y, shipname, horizontal) {
    if (x > 9 || y > 9) return false;
    const ship = _getShipByName(shipname);
    const length = ship.shipLength;

    if (horizontal) {
      // check bounds
      if (x + length > 10) return false;
      // look right
      for (let i = 0; i < length; i++) {
        if (!_isPlaceableSquare(x + i, y)) return false;
      }
      for (let j = 0; j < length; j++) {
        gameboard[x + j][y] = 'X';
        _storeShipLoaction(x + j, y, shipname);
      }
      return true;
    } else {
      // check bounds
      if (y + length > 10) return false;
      // look down
      for (let i = 0; i < length; i++) {
        if (!_isPlaceableSquare(x, y + i)) return false;
      }
      for (let j = 0; j < length; j++) {
        gameboard[x][y + j] = 'X';
        _storeShipLoaction(x, y + j, shipname);
      }
      return true;
    }
  };
  // checks the gameboard, X is unsunk ship, O is unhit water, S is sunk ship, H is hit water
  const receiveAttack = function (x, y) {
    if (gameboard[x][y] === 'X' || gameboard[x][y] === 'O') {
      if (gameboard[x][y] === 'X') {
        gameboard[x][y] = 'S';
        struckShip(x, y);
      } else if (gameboard[x][y] === 'O') {
        gameboard[x][y] = 'H';
      }
      return true;
    } else return false;
  };
  // checks if ship was struck and applys hit to ship instance
  const struckShip = function (x, y) {
    for (const key in shipLocation) {
      const ship = _getShipByName(key);
      const length = shipLocation[key].length;
      let position = 1;
      for (let i = 0; i < length; i++) {
        if (
          shipLocation[key][i]['x'] === x &&
          shipLocation[key][i]['y'] === y
        ) {
          ship.hit(position);
          return true;
        }
        position++;
      }
    }
    return false;
  };
  const isFleetDestroyed = function () {
    if (
      carrier.isSunk() === true &&
      battleship.isSunk() === true &&
      destroyer.isSunk() === true &&
      submarine.isSunk() === true &&
      boat.isSunk() === true
    ) {
      return true;
    } else return false;
  };

  return {
    getGameboard,
    getShipLocation,
    placeShip,
    receiveAttack,
    struckShip,
    isFleetDestroyed,
  };
};




/***/ }),

/***/ "./src/modules/app/gamecontroller.js":
/*!*******************************************!*\
  !*** ./src/modules/app/gamecontroller.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameController": () => (/* binding */ gameController)
/* harmony export */ });
/* harmony import */ var _views_gameView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/gameView */ "./src/modules/views/gameView.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/modules/app/player.js");



const gameController = (function () {
  let player1, player2, gamemode, turnNo, currentPlayerTurn, isGameover;
  const createPlayer1 = function (board) {
    player1 = (0,_player__WEBPACK_IMPORTED_MODULE_1__.Player)();
    if (board === null) {
      player1.placeRandom();
    } else {
      player1.makeBoard(board);
    }
    console.log(player1.gameboard.getShipLocation());
  };
  const createPlayer2 = function (board) {
    player2 = (0,_player__WEBPACK_IMPORTED_MODULE_1__.Player)();
    if (board === null) {
      player2.placeRandom();
    } else {
      player2.makeBoard(board);
    }
    console.log(player2.gameboard.getShipLocation());
  };
  const startGame = function (mode) {
    gamemode = mode === 'player' ? 'player' : 'cpu';
    currentPlayerTurn = 1;
    turnNo = 1;
    isGameover = false;
  };
  const getPlayerOneShips = function () {
    return player1.gameboard.getShipLocation();
  };
  const getPlayerTwoShips = function () {
    return player2.gameboard.getShipLocation();
  };
  const getPlayerOneBoard = function () {
    return player1.gameboard.getGameboard();
  };
  const getPlayerTwoBoard = function () {
    return player2.gameboard.getGameboard();
  };
  const changeTurn = function (x, y) {
    if (isGameover) return false;
    if (currentPlayerTurn === 1 && gamemode === 'player') {
      if (player2.takeAttack(x, y)) {
        if (player2.checkLose() === true) {
          isGameover = true;
          _views_gameView__WEBPACK_IMPORTED_MODULE_0__.gameView.loadWin(1, gamemode);
          return false;
        }
        const ship = getPlayerTwoShips();
        const displayBoard = getPlayerTwoBoard();
        const attackboard = getPlayerOneBoard();
        // load player 2's view
        currentPlayerTurn = 2;
        _views_gameView__WEBPACK_IMPORTED_MODULE_0__.gameView.loadTurn(
          ship,
          displayBoard,
          attackboard,
          currentPlayerTurn,
          turnNo,
          gamemode
        );
        return true;
      } else {
        console.log('invalid move');
        return false;
      }
    } else if (currentPlayerTurn === 2 && gamemode === 'player') {
      if (player1.takeAttack(x, y)) {
        if (player1.checkLose() === true) {
          isGameover = true;
          _views_gameView__WEBPACK_IMPORTED_MODULE_0__.gameView.loadWin(2, gamemode);
          return false;
        }
        const ship = getPlayerOneShips();
        const displayBoard = getPlayerOneBoard();
        const attackBoard = getPlayerTwoBoard();
        // load player 1's view
        currentPlayerTurn = 1;
        turnNo++;
        _views_gameView__WEBPACK_IMPORTED_MODULE_0__.gameView.loadTurn(
          ship,
          displayBoard,
          attackBoard,
          currentPlayerTurn,
          turnNo,
          gamemode
        );
        return true;
      } else {
        console.log('invalid move');
        return false;
      }
    } else if (gamemode === 'cpu') {
      if (player2.takeAttack(x, y)) {
        if (player2.checkLose() === true) {
          isGameover = true;
          _views_gameView__WEBPACK_IMPORTED_MODULE_0__.gameView.loadWin(1, gamemode);
          return false;
        }
        player1.takeRandomAttack();
        if (player1.checkLose() === true) {
          isGameover = true;
          _views_gameView__WEBPACK_IMPORTED_MODULE_0__.gameView.loadWin(2, gamemode);
          return false;
        }
        turnNo++;
        const ship = getPlayerOneShips();
        const displayBoard = getPlayerOneBoard();
        const attackBoard = getPlayerTwoBoard();
        _views_gameView__WEBPACK_IMPORTED_MODULE_0__.gameView.loadTurn(
          ship,
          displayBoard,
          attackBoard,
          currentPlayerTurn,
          turnNo,
          gamemode
        );
      }
    }
    return false;
  };

  return {
    startGame,
    createPlayer1,
    createPlayer2,
    getPlayerOneShips,
    getPlayerTwoShips,
    getPlayerOneBoard,
    getPlayerTwoBoard,
    changeTurn,
  };
})();




/***/ }),

/***/ "./src/modules/app/helper.js":
/*!***********************************!*\
  !*** ./src/modules/app/helper.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "helper": () => (/* binding */ helper)
/* harmony export */ });
const helper = (function () {
  const randomTrueOrFalse = function () {
    return Math.floor(Math.random() * 2) === 0 ? false : true;
  };
  const getRandomInt = function (n) {
    return Math.floor(Math.random() * n);
  };
  const shipInfo = function (name) {
    if (name === 'carrier') {
      return { ship: name, length: 5 };
    } else if (name === 'battleship') {
      return { ship: name, length: 4 };
    } else if (name === 'destroyer') {
      return { ship: name, length: 3 };
    } else if (name === 'submarine') {
      return { ship: name, length: 3 };
    } else if (name === 'boat') {
      return { ship: name, length: 2 };
    }
  };
  return { randomTrueOrFalse, getRandomInt, shipInfo };
})();




/***/ }),

/***/ "./src/modules/app/player.js":
/*!***********************************!*\
  !*** ./src/modules/app/player.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/modules/app/gameboard.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ "./src/modules/app/helper.js");



const Player = function () {
  const gameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();

  const placeRandom = function () {
    const ships = ['carrier', 'battleship', 'destroyer', 'submarine', 'boat'];
    for (let i = 0; i < ships.length; i++) {
      while (
        !gameboard.placeShip(
          _helper__WEBPACK_IMPORTED_MODULE_1__.helper.getRandomInt(10),
          _helper__WEBPACK_IMPORTED_MODULE_1__.helper.getRandomInt(10),
          ships[i],
          _helper__WEBPACK_IMPORTED_MODULE_1__.helper.randomTrueOrFalse()
        )
      ) {}
    }
  };

  const placeShip = function (x, y, shipname, isHorizontal) {
    return gameboard.placeShip(x, y, shipname, isHorizontal);
  };

  const takeAttack = function (x, y) {
    return gameboard.receiveAttack(x, y);
  };

  const takeRandomAttack = function () {
    const moves = getLegiblePlacement();
    const length = moves.length;
    const placement = moves[_helper__WEBPACK_IMPORTED_MODULE_1__.helper.getRandomInt(length)];
    takeAttack(...placement);
  };

  const checkLose = function () {
    return gameboard.isFleetDestroyed();
  };
  const makeBoard = function (board) {
    for (const ship in board) {
      const xpos = board[ship].location[0]['x'];
      const ypos = board[ship].location[0]['y'];
      const isHorizontal = board[ship].facing === 'horizontal' ? true : false;
      placeShip(xpos, ypos, ship, isHorizontal);
    }
  };

  const getBoard = () => gameboard;

  function getLegiblePlacement() {
    const legibleMoves = [];
    const board = gameboard.getGameboard();
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        if (board[x][y] === 'O' || board[x][y] === 'X') {
          legibleMoves.push([x, y]);
        }
      }
    }
    return legibleMoves;
  }

  return {
    gameboard,
    getLegiblePlacement,
    getBoard,
    placeShip,
    placeRandom,
    takeRandomAttack,
    checkLose,
    takeAttack,
    makeBoard,
  };
};




/***/ }),

/***/ "./src/modules/app/ship.js":
/*!*********************************!*\
  !*** ./src/modules/app/ship.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ship": () => (/* binding */ Ship)
/* harmony export */ });
const Ship = function (length) {
  const shipLength = length;
  let damage = [];
  for (let i = 0; i < length; i++) {
    damage.push(false);
  }
  const hit = function (position) {
    if (position > length) return;
    damage[position - 1] = true;
  };
  const isSunk = function () {
    if (damage.includes(false)) {
      return false;
    } else return true;
  };
  return { hit, isSunk, shipLength };
};




/***/ }),

/***/ "./src/modules/views/gameView.js":
/*!***************************************!*\
  !*** ./src/modules/views/gameView.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameView": () => (/* binding */ gameView)
/* harmony export */ });
/* harmony import */ var _app_gamecontroller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/gamecontroller */ "./src/modules/app/gamecontroller.js");

const gameView = (function () {
  const target = document.querySelector('.target');
  const content = document.createElement('div');
  content.innerHTML = `
  <div class="game-content">
        <div class="game-info"><h2>Turn 1: Player One's turn</h2></div>
        <div class="gameboard-container">
          <div class="left-side">
          </div>
          <div class="right-side">
          </div>
        </div>
      </div>
  `;
  let leftSide, rightSide, attackGrid, displayGrid;

  const initialize = function () {
    target.innerHTML = ``;
    target.appendChild(content);
    _setUpAttackGrid();
    _setUpDisplayGrid();
    leftSide = document.querySelector('.left-side');
    rightSide = document.querySelector('.right-side');
    leftSide.appendChild(displayGrid);
    rightSide.appendChild(attackGrid);
    renderAttackGrid(_app_gamecontroller__WEBPACK_IMPORTED_MODULE_0__.gameController.getPlayerTwoBoard());
    renderDisplayGrid(
      _app_gamecontroller__WEBPACK_IMPORTED_MODULE_0__.gameController.getPlayerOneShips(),
      _app_gamecontroller__WEBPACK_IMPORTED_MODULE_0__.gameController.getPlayerOneBoard()
    );
  };
  function _setUpAttackGrid() {
    attackGrid = document.createElement('div');
    attackGrid.classList.add('attack-grid');
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const square = document.createElement('div');
        square.classList.add('attack-grid-square');
        square.dataset.x = j;
        square.dataset.y = i;
        square.addEventListener('click', (e) => {
          const xpos = parseInt(e.target.dataset.x);
          const ypos = parseInt(e.target.dataset.y);
          _app_gamecontroller__WEBPACK_IMPORTED_MODULE_0__.gameController.changeTurn(xpos, ypos);
        });
        attackGrid.appendChild(square);
      }
    }
  }
  function _setUpDisplayGrid() {
    displayGrid = document.createElement('div');
    displayGrid.classList.add('display-grid');
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const square = document.createElement('div');
        square.classList.add('display-grid-square');
        square.dataset.x = j;
        square.dataset.y = i;
        displayGrid.appendChild(square);
      }
    }
  }
  const renderAttackGrid = function (board) {
    const squares = document.querySelectorAll('.attack-grid-square');
    squares.forEach((square) => {
      square.classList.remove('sunk');
      square.classList.remove('miss');

      const ypos = parseInt(square.dataset.y);
      const xpos = parseInt(square.dataset.x);
      if (board[xpos][ypos] === 'S') {
        square.classList.add('sunk');
      } else if (board[xpos][ypos] === 'H') {
        square.classList.add('miss');
      }
    });
  };
  const renderDisplayGrid = function (ships, board) {
    const squares = document.querySelectorAll('.display-grid-square');
    squares.forEach((square) => {
      const classes = [
        'miss',
        'sunk',
        'carrier-color',
        'battleship-color',
        'destroyer-color',
        'submarine-color',
        'boat-color',
      ];
      square.classList.remove(...classes);
      const ypos = parseInt(square.dataset.y);
      const xpos = parseInt(square.dataset.x);
      if (board[xpos][ypos] === 'H') {
        square.classList.add('miss');
      } else if (board[xpos][ypos] === 'S') {
        square.classList.add('sunk');
      }
    });
    for (const ship in ships) {
      for (let i = 0; i < ships[ship].length; i++) {
        const xpos = ships[ship][i]['x'];
        const ypos = ships[ship][i]['y'];
        const square = document.querySelector(
          `.display-grid-square[data-x="${xpos}"][data-y="${ypos}"]`
        );
        square.classList.add(`${ship}-color`);
      }
    }
  };
  function switchGridPos(activePlayer) {
    if (activePlayer === 2) {
      leftSide.removeChild(displayGrid);
      rightSide.removeChild(attackGrid);
      leftSide.appendChild(attackGrid);
      rightSide.appendChild(displayGrid);
    } else if (activePlayer === 1) {
      leftSide.removeChild(attackGrid);
      rightSide.removeChild(displayGrid);
      leftSide.appendChild(displayGrid);
      rightSide.appendChild(attackGrid);
    }
  }
  const loadTurn = function (
    ships,
    displayBoard,
    attackBoard,
    currentPlayer,
    turnNo,
    mode
  ) {
    if (mode === 'player') switchGridPos(currentPlayer);
    renderAttackGrid(attackBoard);
    renderDisplayGrid(ships, displayBoard);
    updateInfo(currentPlayer, turnNo);
  };
  function updateInfo(currentPlayer, turnNo) {
    const player = currentPlayer === 1 ? 'One' : 'Two';
    const infoElement = document.querySelector('.game-info h2');
    infoElement.textContent = `Turn ${turnNo}: Player ${player}'s turn`;
  }
  function _setUpModal(winner, mode) {
    const modal = document.createElement('div');
    modal.classList.add('modal-container');
    modal.innerHTML = `
    <div class="modal">
        <h2 class="winner"></h2>
        <h3>Play again?</h3>
        <div class="modal-btn-container">
          <button id="btn-yes">Yes</button>
          <button id="btn-no">No</button>
        </div>
      </div>`;
    const bodyElement = document.querySelector('body');
    bodyElement.appendChild(modal);
    const winnerElement = document.querySelector('.winner');
    if (mode === 'cpu' && winner === 2) {
      winnerElement.textContent = 'You lost.';
    } else {
      winnerElement.textContent =
        winner === 1 ? `Player One has won!` : 'Player Two has won!';
    }
    const yesBtn = document.querySelector('#btn-yes');
    const noBtn = document.querySelector('#btn-no');
    yesBtn.addEventListener('click', () => location.reload());
    noBtn.addEventListener('click', () => bodyElement.removeChild(modal));
  }
  function _createRevealGrid(ships, board) {
    const grid = document.createElement('div');
    grid.classList.add('reveal-grid');
    for (let j = 0; j < 10; j++) {
      for (let i = 0; i < 10; i++) {
        const square = document.createElement('div');
        square.classList.add('reveal-grid-square');
        square.dataset.x = j;
        square.dataset.y = i;

        if (board[i][j] === 'H') {
          square.classList.add('miss');
        } else if (board[i][j] === 'S') {
          square.classList.add('sunk');
        }
        for (const ship in ships) {
          for (let z = 0; z < ships[ship].length; z++) {
            const xpos = ships[ship][z]['x'];
            const ypos = ships[ship][z]['y'];
            if (i === xpos && j === ypos) square.classList.add(`${ship}-color`);
          }
        }
        grid.appendChild(square);
      }
    }
    return grid;
  }
  const loadWin = function (winner, mode) {
    _setUpModal(winner, mode);
    if (winner === 1 || mode === 'cpu') {
      leftSide.removeChild(displayGrid);
      rightSide.removeChild(attackGrid);
    } else if (winner === 2) {
      leftSide.removeChild(attackGrid);
      rightSide.removeChild(displayGrid);
    }
    leftSide.appendChild(
      _createRevealGrid(
        _app_gamecontroller__WEBPACK_IMPORTED_MODULE_0__.gameController.getPlayerOneShips(),
        _app_gamecontroller__WEBPACK_IMPORTED_MODULE_0__.gameController.getPlayerOneBoard()
      )
    );
    rightSide.appendChild(
      _createRevealGrid(
        _app_gamecontroller__WEBPACK_IMPORTED_MODULE_0__.gameController.getPlayerTwoShips(),
        _app_gamecontroller__WEBPACK_IMPORTED_MODULE_0__.gameController.getPlayerTwoBoard()
      )
    );
    if (mode === 'cpu') {
      const winnerText = winner === 1 ? 'You have won!' : 'You have lost.';
      const infoElement = document.querySelector('.game-info h2');
      infoElement.textContent = winnerText;
    } else if (mode === 'player') {
      const winnerText = winner === 1 ? 'One' : 'Two';
      const infoElement = document.querySelector('.game-info h2');
      infoElement.textContent = `Player ${winnerText} has won!`;
    }
  };
  return { initialize, renderAttackGrid, loadTurn, loadWin };
})();



/***/ }),

/***/ "./src/modules/views/placementView.js":
/*!********************************************!*\
  !*** ./src/modules/views/placementView.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "placementView": () => (/* binding */ placementView)
/* harmony export */ });
/* harmony import */ var _app_gamecontroller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/gamecontroller */ "./src/modules/app/gamecontroller.js");
/* harmony import */ var _app_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/helper */ "./src/modules/app/helper.js");
/* harmony import */ var _app_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/player */ "./src/modules/app/player.js");
/* harmony import */ var _gameView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameView */ "./src/modules/views/gameView.js");




const placementView = (function () {
  let selectedShip;
  let placementOrientation;
  let gamemode;
  let playersSet = 0;
  const shipData = {
    carrier: { location: [], facing: null },
    battleship: { location: [], facing: null },
    destroyer: { location: [], facing: null },
    submarine: { location: [], facing: null },
    boat: { location: [], facing: null },
  };
  let placementGrid;
  let content = document.querySelector('.target');
  const initialize = function () {
    content.innerHTML = `
    <div class="main-content">
    <h2 class="placement-info">Player n choose board</h2>
    <div class="placement-container">
      <div class="button-panel">
        <button id="rotate-btn">Rotate</button>
        <button id="randomise-btn">Randomise</button>
        <button id="reset-btn">Reset</button>
        <button id="go-btn" disabled>Go</button>
      </div>
      <div class="placement-grid"></div>
      <div class="ship-panel">
        <h3>Place your ships</h3>
        <div class="ship-button-container"></div>
      </div>
    </div>
  </div>
    `;
    placementGrid = document.querySelector('.placement-grid');
    selectedShip = null;
    placementOrientation = 'horizontal';
    _clearShipData();
    _updateTurnDisplay();
    _makePlacementGrid();
    _makeButtons();
    _setUpControlBtns();
  };
  const setGamemode = function (mode) {
    if (mode === 'player') {
      gamemode = mode;
      return true;
    } else if (mode === 'cpu') {
      gamemode = mode;
      return true;
    } else return false;
  };
  function _makePlacementGrid() {
    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
        const square = document.createElement('div');
        square.classList.add('placement-grid-square');
        square.dataset.y = y;
        square.dataset.x = x;
        square.addEventListener('mouseenter', (e) => {
          if (selectedShip === null) return false;
          displayShipOnView(x, y);
        });
        square.addEventListener('mouseleave', (e) => {
          clearDisplayShip();
        });

        square.addEventListener(
          'contextmenu',
          (e) => {
            e.preventDefault();
            const shipName = e.target.dataset.shiptype;
            if (removeShip(shipName)) {
              renderGrid();
              _makeButtons();
              clearDisplayShip();
              displayShipOnView(x, y);
            }
            return false;
          },
          false
        );
        square.addEventListener('click', () => {
          if (selectedShip === null) return;
          if (addShip(x, y, selectedShip, placementOrientation)) {
            renderGrid();
            selectedShip = null;
            _makeButtons();
            clearDisplayShip();
            displayShipOnView(x, y);
          }
        });

        placementGrid.appendChild(square);
      }
    }
  }
  function _setUpControlBtns() {
    const rotateBtn = document.querySelector('#rotate-btn');
    const resetBtn = document.querySelector('#reset-btn');
    const randomBtn = document.querySelector('#randomise-btn');
    const goBtn = document.querySelector('#go-btn');
    rotateBtn.addEventListener('click', () => {
      placementOrientation =
        placementOrientation === 'horizontal' ? 'vertical' : 'horizontal';
    });
    resetBtn.addEventListener('click', () => {
      removeShip('carrier');
      removeShip('battleship');
      removeShip('destroyer');
      removeShip('submarine');
      removeShip('boat');
      renderGrid();
      _makeButtons();
    });
    randomBtn.addEventListener('click', () => {
      removeShip('carrier');
      removeShip('battleship');
      removeShip('destroyer');
      removeShip('submarine');
      removeShip('boat');
      const board = _getRandomBoard();
      _addRandomBoard(board);
      _makeButtons();
      renderGrid();
      selectedShip = null;
    });
    goBtn.addEventListener('click', () => {
      if (gamemode === 'cpu') {
        console.log('game started');
        const board = Object.assign({}, shipData);
        _app_gamecontroller__WEBPACK_IMPORTED_MODULE_0__.gameController.createPlayer1(board);
        _app_gamecontroller__WEBPACK_IMPORTED_MODULE_0__.gameController.createPlayer2(null);
        _app_gamecontroller__WEBPACK_IMPORTED_MODULE_0__.gameController.startGame(gamemode);
        _gameView__WEBPACK_IMPORTED_MODULE_3__.gameView.initialize();
      } else if (gamemode === 'player') {
        if (playersSet === 0) {
          playersSet++;
          const board = Object.assign({}, shipData);
          _app_gamecontroller__WEBPACK_IMPORTED_MODULE_0__.gameController.createPlayer1(board);
          initialize();
        } else if (playersSet === 1) {
          const board = Object.assign({}, shipData);
          _app_gamecontroller__WEBPACK_IMPORTED_MODULE_0__.gameController.createPlayer2(board);
          console.log('player 2 set');
          _app_gamecontroller__WEBPACK_IMPORTED_MODULE_0__.gameController.startGame(gamemode);
          _gameView__WEBPACK_IMPORTED_MODULE_3__.gameView.initialize();
        }
      }
    });
  }
  // returns true or false if mouseover sqaure is a valid placement
  function checkValidPlacement(x, y, length, orientation) {
    // check out of bounds
    if (orientation === 'horizontal') {
      if (x + length > 10) return false;
    } else if (orientation === 'vertical') {
      if (y + length > 10) return false;
    }
    // check no overlap, ennumerate shiplocation
    for (let ship in shipData) {
      for (let j = 0; j < shipData[ship].location.length; j++) {
        for (let i = 0; i < length; i++) {
          const checkX = orientation === 'horizontal' ? x + i : x;
          const checkY = orientation === 'vertical' ? y + i : y;
          if (
            shipData[ship]['location'][j]['x'] === checkX &&
            shipData[ship]['location'][j]['y'] === checkY
          )
            return false;
        }
      }
    }
    return true;
  }
  // highlight red or green ship on grid
  function displayShipOnView(x, y) {
    if (selectedShip === null) return;
    const length = _app_helper__WEBPACK_IMPORTED_MODULE_1__.helper.shipInfo(selectedShip).length;
    const orientation = placementOrientation;
    const isValid = checkValidPlacement(x, y, length, orientation);

    if (isValid)
      for (let i = 0; i < length; i++) {
        const xpos = orientation === 'horizontal' ? x + i : x;
        const ypos = orientation === 'vertical' ? y + i : y;
        const square = document.querySelector(
          `[data-x="${xpos}"][data-y="${ypos}"]`
        );
        square.classList.add('valid-square');
      }
    else {
      for (let i = 0; i < length; i++) {
        const xpos = orientation === 'horizontal' ? x + i : x;
        const ypos = orientation === 'vertical' ? y + i : y;
        if (xpos > 9 || ypos > 9) break;
        const square = document.querySelector(
          `[data-x="${xpos}"][data-y="${ypos}"]`
        );
        square.classList.add('invalid-square');
      }
    }
  }
  // clears valid or invalid square when hovering
  function clearDisplayShip() {
    const squares = document.querySelectorAll('.placement-grid > *');
    squares.forEach((square) => {
      square.classList.remove('invalid-square');
      square.classList.remove('valid-square');
    });
  }
  // callback for click square placement event if valid placed
  function addShip(x, y, name, orientation) {
    const length = _app_helper__WEBPACK_IMPORTED_MODULE_1__.helper.shipInfo(name).length;
    if (!checkValidPlacement(x, y, length, orientation)) {
      console.log('not possible');
      return false;
    }
    if (shipData[name].location.length !== 0) {
      alert(`${name} already exists`);
      return false;
    } //prevents overwriting
    const location = [];
    for (let i = 0; i < length; i++) {
      const coord = {};
      const xpos = orientation === 'horizontal' ? x + i : x;
      const ypos = orientation === 'vertical' ? y + i : y;
      coord.x = xpos;
      coord.y = ypos;
      location.push(coord);
    }
    shipData[name].location = location;
    shipData[name].facing = orientation;
    _checkStartCondition();
    return true;
  }
  function removeShip(name) {
    if (name === undefined) return false;
    shipData[name].location = [];
    shipData[name].facing = null;
    _checkStartCondition();
    return true;
  }
  function renderGrid() {
    const squares = document.querySelectorAll('.placement-grid > *');
    squares.forEach((square) => {
      square.classList.remove('carrier-color');
      square.classList.remove('battleship-color');
      square.classList.remove('destroyer-color');
      square.classList.remove('submarine-color');
      square.classList.remove('boat-color');
      square.removeAttribute('data-shiptype', '');
    });
    for (const ship in shipData) {
      shipData[ship]['location'].forEach((coord) => {
        const xpos = coord.x;
        const ypos = coord.y;
        const square = document.querySelector(
          `[data-x="${xpos}"][data-y="${ypos}"]`
        );
        square.classList.add(`${ship}-color`);
        square.dataset.shiptype = ship;
      });
    }
  }
  function _makeButtons() {
    let first = false;
    const container = document.querySelector('.ship-button-container');
    let carrierBtn, battleshipBtn, destroyerBtn, submarineBtn, boatBtn;
    container.innerHTML = '';
    if (shipData['carrier'].location.length === 0) {
      carrierBtn = document.createElement('button');
      carrierBtn.setAttribute('id', 'carrier-btn');
      carrierBtn.textContent = 'Carrier';
      container.appendChild(carrierBtn);
      if (first === false) {
        first = true;
        selectedShip = 'carrier';
        carrierBtn.setAttribute('selected', '');
        carrierBtn.classList.add('selected');
      }
    }
    if (shipData['battleship'].location.length === 0) {
      battleshipBtn = document.createElement('button');
      battleshipBtn.setAttribute('id', 'battleship-btn');
      battleshipBtn.textContent = 'Battleship';
      container.appendChild(battleshipBtn);
      if (first === false) {
        first = true;
        selectedShip = 'battleship';
        battleshipBtn.setAttribute('selected', '');
        battleshipBtn.classList.add('selected');
      }
    }
    if (shipData['destroyer'].location.length === 0) {
      destroyerBtn = document.createElement('button');
      destroyerBtn.setAttribute('id', 'destroyer-btn');
      destroyerBtn.textContent = 'Destroyer';
      container.appendChild(destroyerBtn);
      if (first === false) {
        first = true;
        selectedShip = 'destroyer';
        destroyerBtn.setAttribute('selected', '');
        destroyerBtn.classList.add('selected');
      }
    }
    if (shipData['submarine'].location.length === 0) {
      submarineBtn = document.createElement('button');
      submarineBtn.setAttribute('id', 'submarine-btn');
      submarineBtn.textContent = 'Submarine';
      container.appendChild(submarineBtn);
      if (first === false) {
        first = true;
        selectedShip = 'submarine';
        submarineBtn.setAttribute('selected', '');
        submarineBtn.classList.add('selected');
      }
    }
    if (shipData['boat'].location.length === 0) {
      boatBtn = document.createElement('button');
      boatBtn.setAttribute('id', 'boat-btn');
      boatBtn.textContent = 'Patrol';
      container.appendChild(boatBtn);
      if (first === false) {
        first = true;
        selectedShip = 'boat';
        boatBtn.setAttribute('selected', '');
        boatBtn.classList.add('selected');
      }
    }

    const allBtns = document.querySelectorAll(
      '.ship-button-container > button'
    );
    if (shipData['carrier'].location.length === 0) {
      carrierBtn.addEventListener('click', (e) => {
        if (selectedShip === 'carrier') {
          e.target.classList.remove('selected');
          selectedShip = null;
        } else {
          allBtns.forEach((element) => {
            element.classList.remove('selected');
          });
          e.target.classList.add('selected');
          selectedShip = 'carrier';
        }
      });
    }
    if (shipData['battleship'].location.length === 0) {
      battleshipBtn.addEventListener('click', (e) => {
        if (selectedShip === 'battleship') {
          e.target.classList.remove('selected');
          selectedShip = null;
        } else {
          allBtns.forEach((element) => {
            element.classList.remove('selected');
          });
          e.target.classList.add('selected');
          selectedShip = 'battleship';
        }
      });
    }
    if (shipData['destroyer'].location.length === 0) {
      destroyerBtn.addEventListener('click', (e) => {
        if (selectedShip === 'destroyer') {
          e.target.classList.remove('selected');
          selectedShip = null;
        } else {
          allBtns.forEach((element) => {
            element.classList.remove('selected');
          });
          e.target.classList.add('selected');
          selectedShip = 'destroyer';
        }
      });
    }
    if (shipData['submarine'].location.length === 0) {
      submarineBtn.addEventListener('click', (e) => {
        if (selectedShip === 'submarine') {
          e.target.classList.remove('selected');
          selectedShip = null;
        } else {
          allBtns.forEach((element) => {
            element.classList.remove('selected');
          });
          e.target.classList.add('selected');
          selectedShip = 'submarine';
        }
      });
    }
    if (shipData['boat'].location.length === 0) {
      boatBtn.addEventListener('click', (e) => {
        if (selectedShip === 'boat') {
          e.target.classList.remove('selected');
          selectedShip = null;
        } else {
          allBtns.forEach((element) => {
            element.classList.remove('selected');
          });
          e.target.classList.add('selected');
          selectedShip = 'boat';
        }
      });
    }
  }
  function _getRandomBoard() {
    const player = (0,_app_player__WEBPACK_IMPORTED_MODULE_2__.Player)();
    player.placeRandom();
    const board = player.getBoard();
    const location = board.getShipLocation();
    return location;
  }
  function _addRandomBoard(board) {
    for (let ship in board) {
      let shipOrientation;
      const coordX = board[ship][0]['x'];
      const coordY = board[ship][0]['y'];
      if (board[ship][1]['x'] - board[ship][0]['x'] === 1) {
        shipOrientation = 'horizontal';
      } else shipOrientation = 'vertical';
      addShip(coordX, coordY, ship, shipOrientation);
    }
  }
  function _checkStartCondition() {
    const startBtn = document.querySelector('#go-btn');
    for (let ship in shipData) {
      if (shipData[ship].location.length === 0) {
        startBtn.setAttribute('disabled', '');
        return false;
      }
    }
    startBtn.removeAttribute('disabled');
    return true;
  }
  function _clearShipData() {
    for (let ship in shipData) {
      shipData[ship].location = [];
      shipData[ship].facing = null;
    }
  }
  function _updateTurnDisplay() {
    const infoDisplay = document.querySelector('.placement-info');
    infoDisplay.textContent = `Player ${playersSet + 1}'s turn to place`;
  }

  return { initialize, setGamemode };
})();




/***/ }),

/***/ "./src/modules/views/selectionView.js":
/*!********************************************!*\
  !*** ./src/modules/views/selectionView.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectionView": () => (/* binding */ selectionView)
/* harmony export */ });
/* harmony import */ var _placementView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./placementView */ "./src/modules/views/placementView.js");

const selectionView = (function () {
  const target = document.querySelector('.target');
  const initialize = function () {
    target.innerHTML = `
    <div class="select-content">
        <div class="select-panel">
          <h2>GAMEMODE</h2>
          <div class="select-btn-container">
            <button id="player">PLAYER</button>
            <button id="cpu">CPU</button>
          </div>
        </div>
      </div>
    `;
    const playerModeBtn = document.querySelector('#player');
    const cpuModeBtn = document.querySelector('#cpu');
    playerModeBtn.addEventListener('click', () => {
      if (_placementView__WEBPACK_IMPORTED_MODULE_0__.placementView.setGamemode('player')) _placementView__WEBPACK_IMPORTED_MODULE_0__.placementView.initialize();
    });
    cpuModeBtn.addEventListener('click', () => {
      if (_placementView__WEBPACK_IMPORTED_MODULE_0__.placementView.setGamemode('cpu')) _placementView__WEBPACK_IMPORTED_MODULE_0__.placementView.initialize();
    });
  };
  return { initialize };
})();



/***/ }),

/***/ "./src/assets/explosion.png":
/*!**********************************!*\
  !*** ./src/assets/explosion.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "69f813170573973a76fd.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_views_selectionView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/views/selectionView */ "./src/modules/views/selectionView.js");



_modules_views_selectionView__WEBPACK_IMPORTED_MODULE_1__.selectionView.initialize();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVks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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDeUM7O0FBRTlELGtGQUF3QiIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2FwcC9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvYXBwL2dhbWVjb250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2FwcC9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvYXBwL3BsYXllci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9hcHAvc2hpcC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy92aWV3cy9nYW1lVmlldy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy92aWV3cy9wbGFjZW1lbnRWaWV3LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3ZpZXdzL3NlbGVjdGlvblZpZXcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2V4cGxvc2lvbi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnMmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290e1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgLS10ZWFsLTIwMDogIzgwQ0JDNDtcXG4gIC0tdGVhbC02MDA6ICMyNkE2OUE7XFxuICAtLXRlYWwtNDAwOiMyNkE2OUE7XFxuICAtLWRlZXAtcHVycGxlLTMwMDojOTU3NUNEO1xcbiAgLS1kZWVwLXB1cnBsZS02MDA6ICM1RTM1QjE7XFxuICAtLWRlZXAtcHVycGxlLTkwMDogIzMxMUI5MjtcXG4gIC0tdGVhbC04MDA6ICMwMDY5NUM7XFxuICAtLWdyZWVuLTgwMDogIzFCNUUyMDtcXG4gIC0tcGluay05MDA6Izg4MEU0RjtcXG5cXG4gIC0tcmVkLTUwMDogI0Y0NDMzNjtcXG4gIC0tZ3JheS01MDA6ICM5RTlFOUU7XFxuICAtLWxpZ2h0LWJsdWUtMzAwOiAjNEZDM0Y3O1xcbn1cXG4qe1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5ib2R5e1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlYWwtMjAwKTtcXG59XFxuaGVhZGVye1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbmhlYWRlciBoMXtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGNvbG9yOiB2YXIoLS1kZWVwLXB1cnBsZS05MDApO1xcbn1cXG5kaXYuc2VsZWN0LWNvbnRlbnR7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuZGl2LnNlbGVjdC1wYW5lbHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDI4MHB4O1xcbiAgaGVpZ2h0OiAzNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTUpIDEuOTVweCAxLjk1cHggMi42cHg7XFxufVxcbi5zZWxlY3QtcGFuZWwgaDJ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XFxufVxcbmRpdi50YXJnZXR7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDBweCk7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnBsYWNlbWVudC1ncmlke1xcbiAgbWF4LWhlaWdodDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgbWluLXdpZHRoOiA1MDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgLyogYm9yZGVyOiAzcHggc29saWQgYmxhY2s7ICovXFxuICBib3JkZXItdG9wOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgYmxhY2s7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIG1hcmdpbjogMCAxMDBweDtcXG59XFxuLnBsYWNlbWVudC1ncmlkLXNxdWFyZSwuYXR0YWNrLWdyaWQtc3F1YXJlLC5kaXNwbGF5LWdyaWQtc3F1YXJlLC5yZXZlYWwtZ3JpZC1zcXVhcmV7XFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5kaXYuYXR0YWNrLWdyaWQtc3F1YXJle1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS01MDApO1xcbn1cXG4ucGxhY2VtZW50LWdyaWQgLnZhbGlkLXNxdWFyZXtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlYWwtMjAwKTtcXG59XFxuLnBsYWNlbWVudC1ncmlkIC5pbnZhbGlkLXNxdWFyZXtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC01MDApO1xcbn1cXG4uc2hpcC1wYW5lbCwuYnV0dG9uLXBhbmVse1xcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcC1wdXJwbGUtMzAwKTtcXG59XFxuLmJ1dHRvbi1wYW5lbCwgLnNoaXAtYnV0dG9uLWNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4uc2hpcC1wYW5lbHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uc2hpcC1idXR0b24tY29udGFpbmVye1xcbiAgZmxleC1ncm93OiAxO1xcbiAgcGFkZGluZzogMTVweDtcXG59XFxuLmJ1dHRvbi1wYW5lbCBidXR0b24sIC5zaGlwLWJ1dHRvbi1jb250YWluZXIgYnV0dG9ue1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTIwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDNweCByZ2IoMTAxLCAxMDEsIDEwMSk7XFxufVxcbi5zZWxlY3QtYnRuLWNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNTBweDtcXG59XFxuLnNlbGVjdC1idG4tY29udGFpbmVyIGJ1dHRvbntcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgcGFkZGluZzogMTBweCA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWVwLXB1cnBsZS02MDApO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4uc2VsZWN0LWJ0bi1jb250YWluZXIgYnV0dG9uOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcC1wdXJwbGUtOTAwKTtcXG59XFxuLnNoaXAtYnV0dG9uLWNvbnRhaW5lciBidXR0b24uc2VsZWN0ZWR7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZWFsLTgwMCk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5idXR0b24tcGFuZWwgYnV0dG9uOmhvdmVyOm5vdCg6ZGlzYWJsZWQpLCAuc2hpcC1idXR0b24tY29udGFpbmVyIGJ1dHRvbjpob3Zlcjpub3QoLnNlbGVjdGVkKXtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTcsIDE5NywgMTk3KTtcXG59XFxuLnNoaXAtcGFuZWwgaDN7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG4ucGxhY2VtZW50LWdyaWQgZGl2LmNhcnJpZXItY29sb3IsLmRpc3BsYXktZ3JpZCBkaXYuY2Fycmllci1jb2xvciwucmV2ZWFsLWdyaWQgZGl2LmNhcnJpZXItY29sb3J7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWVwLXB1cnBsZS05MDApO1xcbn1cXG4ucGxhY2VtZW50LWdyaWQgZGl2LmJhdHRsZXNoaXAtY29sb3IsLmRpc3BsYXktZ3JpZCBkaXYuYmF0dGxlc2hpcC1jb2xvciwucmV2ZWFsLWdyaWQgZGl2LmJhdHRsZXNoaXAtY29sb3J7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZWFsLTgwMCk7XFxufVxcbi5wbGFjZW1lbnQtZ3JpZCBkaXYuZGVzdHJveWVyLWNvbG9yLC5kaXNwbGF5LWdyaWQgZGl2LmRlc3Ryb3llci1jb2xvciwucmV2ZWFsLWdyaWQgZGl2LmRlc3Ryb3llci1jb2xvcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBpbmstOTAwKTtcXG59XFxuLnBsYWNlbWVudC1ncmlkIGRpdi5zdWJtYXJpbmUtY29sb3IsLmRpc3BsYXktZ3JpZCBkaXYuc3VibWFyaW5lLWNvbG9yLC5yZXZlYWwtZ3JpZCBkaXYuc3VibWFyaW5lLWNvbG9ye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4tODAwKTtcXG59XFxuLnBsYWNlbWVudC1ncmlkIGRpdi5ib2F0LWNvbG9yLC5kaXNwbGF5LWdyaWQgZGl2LmJvYXQtY29sb3IsLnJldmVhbC1ncmlkIGRpdi5ib2F0LWNvbG9ye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcC1wdXJwbGUtNjAwKTtcXG59XFxuZGl2Lm1haW4tY29udGVudHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcbi5wbGFjZW1lbnQtY29udGFpbmVye1xcbiAgbWluLWhlaWdodDogNTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDExMHB4O1xcbn1cXG4ucGxhY2VtZW50LWluZm97XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuLmdhbWUtY29udGVudHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1MHB4O1xcbn1cXG4uZ2FtZWJvYXJkLWNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDI1MHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XFxufVxcbi5sZWZ0LXNpZGUsLnJpZ2h0LXNpZGV7XFxuICB3aWR0aDogNDAwcHg7XFxuICBtaW4td2lkdGg6IDQwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmRpc3BsYXktZ3JpZCwuYXR0YWNrLWdyaWQsIC5yZXZlYWwtZ3JpZHtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIGJsYWNrO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwxZnIpO1xcbn1cXG4uZ2FtZS1pbmZve1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTU3NUNEO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWRlZXAtcHVycGxlLTYwMCkgO1xcbn1cXG4uc3Vua3tcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG4uZGlzcGxheS1ncmlkIGRpdi5taXNzLCAuYXR0YWNrLWdyaWQgZGl2Lm1pc3MsIC5yZXZlYWwtZ3JpZCBkaXYubWlzc3tcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUtMzAwKTtcXG59XFxuXFxuLmF0dGFjay1ncmlkIGRpdi5zdW5re1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLTUwMCk7XFxufVxcbi5tb2RhbC1jb250YWluZXJ7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxuICB6LWluZGV4OiAxMDA7XFxuICB0b3A6IDAlO1xcbiAgbGVmdDogMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XFxufVxcbi5tb2RhbHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xcbiAgaGVpZ2h0OiAyMTBweDtcXG4gIHdpZHRoOiAzMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubW9kYWwgaDJ7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG59XFxuXFxuLm1vZGFsLWJ0bi1jb250YWluZXJ7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG4ubW9kYWwtYnRuLWNvbnRhaW5lciBidXR0b257XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogODBweDtcXG4gIG1hcmdpbjogMHB4IDIwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDNweCByZ2IoMTAxLCAxMDEsIDEwMSk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbiNidG4teWVze1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVhbC02MDApO1xcbn1cXG4jYnRuLW5ve1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLTUwMCk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQiwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixrQkFBa0I7O0VBRWxCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxTQUFTO0VB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bnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcCcpO1xcbjpyb290e1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgLS10ZWFsLTIwMDogIzgwQ0JDNDtcXG4gIC0tdGVhbC02MDA6ICMyNkE2OUE7XFxuICAtLXRlYWwtNDAwOiMyNkE2OUE7XFxuICAtLWRlZXAtcHVycGxlLTMwMDojOTU3NUNEO1xcbiAgLS1kZWVwLXB1cnBsZS02MDA6ICM1RTM1QjE7XFxuICAtLWRlZXAtcHVycGxlLTkwMDogIzMxMUI5MjtcXG4gIC0tdGVhbC04MDA6ICMwMDY5NUM7XFxuICAtLWdyZWVuLTgwMDogIzFCNUUyMDtcXG4gIC0tcGluay05MDA6Izg4MEU0RjtcXG5cXG4gIC0tcmVkLTUwMDogI0Y0NDMzNjtcXG4gIC0tZ3JheS01MDA6ICM5RTlFOUU7XFxuICAtLWxpZ2h0LWJsdWUtMzAwOiAjNEZDM0Y3O1xcbn1cXG4qe1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5ib2R5e1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlYWwtMjAwKTtcXG59XFxuaGVhZGVye1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbmhlYWRlciBoMXtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGNvbG9yOiB2YXIoLS1kZWVwLXB1cnBsZS05MDApO1xcbn1cXG5kaXYuc2VsZWN0LWNvbnRlbnR7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuZGl2LnNlbGVjdC1wYW5lbHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDI4MHB4O1xcbiAgaGVpZ2h0OiAzNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTUpIDEuOTVweCAxLjk1cHggMi42cHg7XFxufVxcbi5zZWxlY3QtcGFuZWwgaDJ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XFxufVxcbmRpdi50YXJnZXR7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDBweCk7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnBsYWNlbWVudC1ncmlke1xcbiAgbWF4LWhlaWdodDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgbWluLXdpZHRoOiA1MDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgLyogYm9yZGVyOiAzcHggc29saWQgYmxhY2s7ICovXFxuICBib3JkZXItdG9wOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgYmxhY2s7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIG1hcmdpbjogMCAxMDBweDtcXG59XFxuLnBsYWNlbWVudC1ncmlkLXNxdWFyZSwuYXR0YWNrLWdyaWQtc3F1YXJlLC5kaXNwbGF5LWdyaWQtc3F1YXJlLC5yZXZlYWwtZ3JpZC1zcXVhcmV7XFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5kaXYuYXR0YWNrLWdyaWQtc3F1YXJle1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS01MDApO1xcbn1cXG4ucGxhY2VtZW50LWdyaWQgLnZhbGlkLXNxdWFyZXtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlYWwtMjAwKTtcXG59XFxuLnBsYWNlbWVudC1ncmlkIC5pbnZhbGlkLXNxdWFyZXtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC01MDApO1xcbn1cXG4uc2hpcC1wYW5lbCwuYnV0dG9uLXBhbmVse1xcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcC1wdXJwbGUtMzAwKTtcXG59XFxuLmJ1dHRvbi1wYW5lbCwgLnNoaXAtYnV0dG9uLWNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4uc2hpcC1wYW5lbHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uc2hpcC1idXR0b24tY29udGFpbmVye1xcbiAgZmxleC1ncm93OiAxO1xcbiAgcGFkZGluZzogMTVweDtcXG59XFxuLmJ1dHRvbi1wYW5lbCBidXR0b24sIC5zaGlwLWJ1dHRvbi1jb250YWluZXIgYnV0dG9ue1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTIwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDNweCByZ2IoMTAxLCAxMDEsIDEwMSk7XFxufVxcbi5zZWxlY3QtYnRuLWNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNTBweDtcXG59XFxuLnNlbGVjdC1idG4tY29udGFpbmVyIGJ1dHRvbntcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgcGFkZGluZzogMTBweCA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWVwLXB1cnBsZS02MDApO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4uc2VsZWN0LWJ0bi1jb250YWluZXIgYnV0dG9uOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcC1wdXJwbGUtOTAwKTtcXG59XFxuLnNoaXAtYnV0dG9uLWNvbnRhaW5lciBidXR0b24uc2VsZWN0ZWR7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZWFsLTgwMCk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5idXR0b24tcGFuZWwgYnV0dG9uOmhvdmVyOm5vdCg6ZGlzYWJsZWQpLCAuc2hpcC1idXR0b24tY29udGFpbmVyIGJ1dHRvbjpob3Zlcjpub3QoLnNlbGVjdGVkKXtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTcsIDE5NywgMTk3KTtcXG59XFxuLnNoaXAtcGFuZWwgaDN7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG4ucGxhY2VtZW50LWdyaWQgZGl2LmNhcnJpZXItY29sb3IsLmRpc3BsYXktZ3JpZCBkaXYuY2Fycmllci1jb2xvciwucmV2ZWFsLWdyaWQgZGl2LmNhcnJpZXItY29sb3J7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWVwLXB1cnBsZS05MDApO1xcbn1cXG4ucGxhY2VtZW50LWdyaWQgZGl2LmJhdHRsZXNoaXAtY29sb3IsLmRpc3BsYXktZ3JpZCBkaXYuYmF0dGxlc2hpcC1jb2xvciwucmV2ZWFsLWdyaWQgZGl2LmJhdHRsZXNoaXAtY29sb3J7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZWFsLTgwMCk7XFxufVxcbi5wbGFjZW1lbnQtZ3JpZCBkaXYuZGVzdHJveWVyLWNvbG9yLC5kaXNwbGF5LWdyaWQgZGl2LmRlc3Ryb3llci1jb2xvciwucmV2ZWFsLWdyaWQgZGl2LmRlc3Ryb3llci1jb2xvcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBpbmstOTAwKTtcXG59XFxuLnBsYWNlbWVudC1ncmlkIGRpdi5zdWJtYXJpbmUtY29sb3IsLmRpc3BsYXktZ3JpZCBkaXYuc3VibWFyaW5lLWNvbG9yLC5yZXZlYWwtZ3JpZCBkaXYuc3VibWFyaW5lLWNvbG9ye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4tODAwKTtcXG59XFxuLnBsYWNlbWVudC1ncmlkIGRpdi5ib2F0LWNvbG9yLC5kaXNwbGF5LWdyaWQgZGl2LmJvYXQtY29sb3IsLnJldmVhbC1ncmlkIGRpdi5ib2F0LWNvbG9ye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcC1wdXJwbGUtNjAwKTtcXG59XFxuZGl2Lm1haW4tY29udGVudHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcbi5wbGFjZW1lbnQtY29udGFpbmVye1xcbiAgbWluLWhlaWdodDogNTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDExMHB4O1xcbn1cXG4ucGxhY2VtZW50LWluZm97XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuLmdhbWUtY29udGVudHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1MHB4O1xcbn1cXG4uZ2FtZWJvYXJkLWNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDI1MHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XFxufVxcbi5sZWZ0LXNpZGUsLnJpZ2h0LXNpZGV7XFxuICB3aWR0aDogNDAwcHg7XFxuICBtaW4td2lkdGg6IDQwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmRpc3BsYXktZ3JpZCwuYXR0YWNrLWdyaWQsIC5yZXZlYWwtZ3JpZHtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIGJsYWNrO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwxZnIpO1xcbn1cXG4uZ2FtZS1pbmZve1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTU3NUNEO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWRlZXAtcHVycGxlLTYwMCkgO1xcbn1cXG4uc3Vua3tcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy9leHBsb3Npb24ucG5nKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcbi5kaXNwbGF5LWdyaWQgZGl2Lm1pc3MsIC5hdHRhY2stZ3JpZCBkaXYubWlzcywgLnJldmVhbC1ncmlkIGRpdi5taXNze1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZS0zMDApO1xcbn1cXG5cXG4uYXR0YWNrLWdyaWQgZGl2LnN1bmt7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtNTAwKTtcXG59XFxuLm1vZGFsLWNvbnRhaW5lcntcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIHRvcDogMCU7XFxuICBsZWZ0OiAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcXG59XFxuLm1vZGFse1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XFxuICBoZWlnaHQ6IDIxMHB4O1xcbiAgd2lkdGg6IDMyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5tb2RhbCBoMntcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbn1cXG5cXG4ubW9kYWwtYnRuLWNvbnRhaW5lcntcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcbi5tb2RhbC1idG4tY29udGFpbmVyIGJ1dHRvbntcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA4MHB4O1xcbiAgbWFyZ2luOiAwcHggMjBweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggM3B4IHJnYigxMDEsIDEwMSwgMTAxKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuI2J0bi15ZXN7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZWFsLTYwMCk7XFxufVxcbiNidG4tbm97XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtNTAwKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IFNoaXAgfSBmcm9tICcuL3NoaXAnO1xuXG5jb25zdCBHYW1lYm9hcmQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGdhbWVib2FyZCA9IF9jcmVhdGVCb2FyZCgpO1xuXG4gIC8vIHNoaXAgZmFjdG9yaWVzXG4gIGNvbnN0IGNhcnJpZXIgPSBTaGlwKDUsICdjYXJyaWVyJyk7XG4gIGNvbnN0IGJhdHRsZXNoaXAgPSBTaGlwKDQsICdiYXR0bGVzaGlwJyk7XG4gIGNvbnN0IGRlc3Ryb3llciA9IFNoaXAoMywgJ2Rlc3Ryb3llcicpO1xuICBjb25zdCBzdWJtYXJpbmUgPSBTaGlwKDMsICdzdWJtYXJpbmUnKTtcbiAgY29uc3QgYm9hdCA9IFNoaXAoMiwgJ2JvYXQnKTtcblxuICAvLyBnZXR0ZXJzXG4gIGNvbnN0IGdldEdhbWVib2FyZCA9ICgpID0+IHtcbiAgICByZXR1cm4gZ2FtZWJvYXJkO1xuICB9O1xuICBjb25zdCBnZXRTaGlwTG9jYXRpb24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIHNoaXBMb2NhdGlvbjtcbiAgfTtcblxuICAvLyBzaGlwIGxvY2F0aW9uIGRhdGFcbiAgY29uc3Qgc2hpcExvY2F0aW9uID0ge1xuICAgIGNhcnJpZXI6IFtdLFxuICAgIGJhdHRsZXNoaXA6IFtdLFxuICAgIGRlc3Ryb3llcjogW10sXG4gICAgc3VibWFyaW5lOiBbXSxcbiAgICBib2F0OiBbXSxcbiAgfTtcblxuICBmdW5jdGlvbiBfY3JlYXRlQm9hcmQoKSB7XG4gICAgY29uc3QgYm9hcmQgPSBbXTtcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IDEwOyB5KyspIHtcbiAgICAgIGNvbnN0IGNvbCA9IFtdO1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCAxMDsgeCsrKSB7XG4gICAgICAgIGNvbC5wdXNoKCdPJyk7XG4gICAgICB9XG4gICAgICBib2FyZC5wdXNoKGNvbCk7XG4gICAgfVxuICAgIHJldHVybiBib2FyZDtcbiAgfVxuICAvLyBjaGVjayBuby1vdmVybGFwcGluZyBzaGlwc1xuICBmdW5jdGlvbiBfaXNQbGFjZWFibGVTcXVhcmUoeCwgeSkge1xuICAgIGlmIChnYW1lYm9hcmRbeF1beV0gIT09ICdPJykgcmV0dXJuIGZhbHNlO1xuICAgIGVsc2UgaWYgKGdhbWVib2FyZFt4XVt5XSA9PT0gJ08nKSByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvLyBwYXNzIHgseSB0byBzaGlwIGxvY2F0aW9uXG4gIGZ1bmN0aW9uIF9zdG9yZVNoaXBMb2FjdGlvbih4LCB5LCBzaGlwbmFtZSkge1xuICAgIGNvbnN0IHhwb3MgPSB4O1xuICAgIGNvbnN0IHlwb3MgPSB5O1xuICAgIHNoaXBMb2NhdGlvbltzaGlwbmFtZV0ucHVzaCh7IHg6IHhwb3MsIHk6IHlwb3MgfSk7XG4gIH1cbiAgZnVuY3Rpb24gX2dldFNoaXBCeU5hbWUobmFtZSkge1xuICAgIGlmIChuYW1lID09PSAnY2FycmllcicpIHtcbiAgICAgIHJldHVybiBjYXJyaWVyO1xuICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ2JhdHRsZXNoaXAnKSB7XG4gICAgICByZXR1cm4gYmF0dGxlc2hpcDtcbiAgICB9IGVsc2UgaWYgKG5hbWUgPT09ICdkZXN0cm95ZXInKSB7XG4gICAgICByZXR1cm4gZGVzdHJveWVyO1xuICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ3N1Ym1hcmluZScpIHtcbiAgICAgIHJldHVybiBzdWJtYXJpbmU7XG4gICAgfSBlbHNlIGlmIChuYW1lID09PSAnYm9hdCcpIHtcbiAgICAgIHJldHVybiBib2F0O1xuICAgIH1cbiAgfVxuICAvLyBwbGFjZSBzaGlwIGJ5IHRoZSBcImhlYWRcIlxuICBjb25zdCBwbGFjZVNoaXAgPSBmdW5jdGlvbiAoeCwgeSwgc2hpcG5hbWUsIGhvcml6b250YWwpIHtcbiAgICBpZiAoeCA+IDkgfHwgeSA+IDkpIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCBzaGlwID0gX2dldFNoaXBCeU5hbWUoc2hpcG5hbWUpO1xuICAgIGNvbnN0IGxlbmd0aCA9IHNoaXAuc2hpcExlbmd0aDtcblxuICAgIGlmIChob3Jpem9udGFsKSB7XG4gICAgICAvLyBjaGVjayBib3VuZHNcbiAgICAgIGlmICh4ICsgbGVuZ3RoID4gMTApIHJldHVybiBmYWxzZTtcbiAgICAgIC8vIGxvb2sgcmlnaHRcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCFfaXNQbGFjZWFibGVTcXVhcmUoeCArIGksIHkpKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxlbmd0aDsgaisrKSB7XG4gICAgICAgIGdhbWVib2FyZFt4ICsgal1beV0gPSAnWCc7XG4gICAgICAgIF9zdG9yZVNoaXBMb2FjdGlvbih4ICsgaiwgeSwgc2hpcG5hbWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNoZWNrIGJvdW5kc1xuICAgICAgaWYgKHkgKyBsZW5ndGggPiAxMCkgcmV0dXJuIGZhbHNlO1xuICAgICAgLy8gbG9vayBkb3duXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICghX2lzUGxhY2VhYmxlU3F1YXJlKHgsIHkgKyBpKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsZW5ndGg7IGorKykge1xuICAgICAgICBnYW1lYm9hcmRbeF1beSArIGpdID0gJ1gnO1xuICAgICAgICBfc3RvcmVTaGlwTG9hY3Rpb24oeCwgeSArIGosIHNoaXBuYW1lKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfTtcbiAgLy8gY2hlY2tzIHRoZSBnYW1lYm9hcmQsIFggaXMgdW5zdW5rIHNoaXAsIE8gaXMgdW5oaXQgd2F0ZXIsIFMgaXMgc3VuayBzaGlwLCBIIGlzIGhpdCB3YXRlclxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICBpZiAoZ2FtZWJvYXJkW3hdW3ldID09PSAnWCcgfHwgZ2FtZWJvYXJkW3hdW3ldID09PSAnTycpIHtcbiAgICAgIGlmIChnYW1lYm9hcmRbeF1beV0gPT09ICdYJykge1xuICAgICAgICBnYW1lYm9hcmRbeF1beV0gPSAnUyc7XG4gICAgICAgIHN0cnVja1NoaXAoeCwgeSk7XG4gICAgICB9IGVsc2UgaWYgKGdhbWVib2FyZFt4XVt5XSA9PT0gJ08nKSB7XG4gICAgICAgIGdhbWVib2FyZFt4XVt5XSA9ICdIJztcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSByZXR1cm4gZmFsc2U7XG4gIH07XG4gIC8vIGNoZWNrcyBpZiBzaGlwIHdhcyBzdHJ1Y2sgYW5kIGFwcGx5cyBoaXQgdG8gc2hpcCBpbnN0YW5jZVxuICBjb25zdCBzdHJ1Y2tTaGlwID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzaGlwTG9jYXRpb24pIHtcbiAgICAgIGNvbnN0IHNoaXAgPSBfZ2V0U2hpcEJ5TmFtZShrZXkpO1xuICAgICAgY29uc3QgbGVuZ3RoID0gc2hpcExvY2F0aW9uW2tleV0ubGVuZ3RoO1xuICAgICAgbGV0IHBvc2l0aW9uID0gMTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHNoaXBMb2NhdGlvbltrZXldW2ldWyd4J10gPT09IHggJiZcbiAgICAgICAgICBzaGlwTG9jYXRpb25ba2V5XVtpXVsneSddID09PSB5XG4gICAgICAgICkge1xuICAgICAgICAgIHNoaXAuaGl0KHBvc2l0aW9uKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBwb3NpdGlvbisrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG4gIGNvbnN0IGlzRmxlZXREZXN0cm95ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKFxuICAgICAgY2Fycmllci5pc1N1bmsoKSA9PT0gdHJ1ZSAmJlxuICAgICAgYmF0dGxlc2hpcC5pc1N1bmsoKSA9PT0gdHJ1ZSAmJlxuICAgICAgZGVzdHJveWVyLmlzU3VuaygpID09PSB0cnVlICYmXG4gICAgICBzdWJtYXJpbmUuaXNTdW5rKCkgPT09IHRydWUgJiZcbiAgICAgIGJvYXQuaXNTdW5rKCkgPT09IHRydWVcbiAgICApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRHYW1lYm9hcmQsXG4gICAgZ2V0U2hpcExvY2F0aW9uLFxuICAgIHBsYWNlU2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIHN0cnVja1NoaXAsXG4gICAgaXNGbGVldERlc3Ryb3llZCxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IEdhbWVib2FyZCB9O1xuIiwiaW1wb3J0IHsgZ2FtZVZpZXcgfSBmcm9tICcuLi92aWV3cy9nYW1lVmlldyc7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL3BsYXllcic7XG5cbmNvbnN0IGdhbWVDb250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgbGV0IHBsYXllcjEsIHBsYXllcjIsIGdhbWVtb2RlLCB0dXJuTm8sIGN1cnJlbnRQbGF5ZXJUdXJuLCBpc0dhbWVvdmVyO1xuICBjb25zdCBjcmVhdGVQbGF5ZXIxID0gZnVuY3Rpb24gKGJvYXJkKSB7XG4gICAgcGxheWVyMSA9IFBsYXllcigpO1xuICAgIGlmIChib2FyZCA9PT0gbnVsbCkge1xuICAgICAgcGxheWVyMS5wbGFjZVJhbmRvbSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwbGF5ZXIxLm1ha2VCb2FyZChib2FyZCk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHBsYXllcjEuZ2FtZWJvYXJkLmdldFNoaXBMb2NhdGlvbigpKTtcbiAgfTtcbiAgY29uc3QgY3JlYXRlUGxheWVyMiA9IGZ1bmN0aW9uIChib2FyZCkge1xuICAgIHBsYXllcjIgPSBQbGF5ZXIoKTtcbiAgICBpZiAoYm9hcmQgPT09IG51bGwpIHtcbiAgICAgIHBsYXllcjIucGxhY2VSYW5kb20oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGxheWVyMi5tYWtlQm9hcmQoYm9hcmQpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhwbGF5ZXIyLmdhbWVib2FyZC5nZXRTaGlwTG9jYXRpb24oKSk7XG4gIH07XG4gIGNvbnN0IHN0YXJ0R2FtZSA9IGZ1bmN0aW9uIChtb2RlKSB7XG4gICAgZ2FtZW1vZGUgPSBtb2RlID09PSAncGxheWVyJyA/ICdwbGF5ZXInIDogJ2NwdSc7XG4gICAgY3VycmVudFBsYXllclR1cm4gPSAxO1xuICAgIHR1cm5ObyA9IDE7XG4gICAgaXNHYW1lb3ZlciA9IGZhbHNlO1xuICB9O1xuICBjb25zdCBnZXRQbGF5ZXJPbmVTaGlwcyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcGxheWVyMS5nYW1lYm9hcmQuZ2V0U2hpcExvY2F0aW9uKCk7XG4gIH07XG4gIGNvbnN0IGdldFBsYXllclR3b1NoaXBzID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBwbGF5ZXIyLmdhbWVib2FyZC5nZXRTaGlwTG9jYXRpb24oKTtcbiAgfTtcbiAgY29uc3QgZ2V0UGxheWVyT25lQm9hcmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHBsYXllcjEuZ2FtZWJvYXJkLmdldEdhbWVib2FyZCgpO1xuICB9O1xuICBjb25zdCBnZXRQbGF5ZXJUd29Cb2FyZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcGxheWVyMi5nYW1lYm9hcmQuZ2V0R2FtZWJvYXJkKCk7XG4gIH07XG4gIGNvbnN0IGNoYW5nZVR1cm4gPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgIGlmIChpc0dhbWVvdmVyKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRQbGF5ZXJUdXJuID09PSAxICYmIGdhbWVtb2RlID09PSAncGxheWVyJykge1xuICAgICAgaWYgKHBsYXllcjIudGFrZUF0dGFjayh4LCB5KSkge1xuICAgICAgICBpZiAocGxheWVyMi5jaGVja0xvc2UoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGlzR2FtZW92ZXIgPSB0cnVlO1xuICAgICAgICAgIGdhbWVWaWV3LmxvYWRXaW4oMSwgZ2FtZW1vZGUpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzaGlwID0gZ2V0UGxheWVyVHdvU2hpcHMoKTtcbiAgICAgICAgY29uc3QgZGlzcGxheUJvYXJkID0gZ2V0UGxheWVyVHdvQm9hcmQoKTtcbiAgICAgICAgY29uc3QgYXR0YWNrYm9hcmQgPSBnZXRQbGF5ZXJPbmVCb2FyZCgpO1xuICAgICAgICAvLyBsb2FkIHBsYXllciAyJ3Mgdmlld1xuICAgICAgICBjdXJyZW50UGxheWVyVHVybiA9IDI7XG4gICAgICAgIGdhbWVWaWV3LmxvYWRUdXJuKFxuICAgICAgICAgIHNoaXAsXG4gICAgICAgICAgZGlzcGxheUJvYXJkLFxuICAgICAgICAgIGF0dGFja2JvYXJkLFxuICAgICAgICAgIGN1cnJlbnRQbGF5ZXJUdXJuLFxuICAgICAgICAgIHR1cm5ObyxcbiAgICAgICAgICBnYW1lbW9kZVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpbnZhbGlkIG1vdmUnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY3VycmVudFBsYXllclR1cm4gPT09IDIgJiYgZ2FtZW1vZGUgPT09ICdwbGF5ZXInKSB7XG4gICAgICBpZiAocGxheWVyMS50YWtlQXR0YWNrKHgsIHkpKSB7XG4gICAgICAgIGlmIChwbGF5ZXIxLmNoZWNrTG9zZSgpID09PSB0cnVlKSB7XG4gICAgICAgICAgaXNHYW1lb3ZlciA9IHRydWU7XG4gICAgICAgICAgZ2FtZVZpZXcubG9hZFdpbigyLCBnYW1lbW9kZSk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNoaXAgPSBnZXRQbGF5ZXJPbmVTaGlwcygpO1xuICAgICAgICBjb25zdCBkaXNwbGF5Qm9hcmQgPSBnZXRQbGF5ZXJPbmVCb2FyZCgpO1xuICAgICAgICBjb25zdCBhdHRhY2tCb2FyZCA9IGdldFBsYXllclR3b0JvYXJkKCk7XG4gICAgICAgIC8vIGxvYWQgcGxheWVyIDEncyB2aWV3XG4gICAgICAgIGN1cnJlbnRQbGF5ZXJUdXJuID0gMTtcbiAgICAgICAgdHVybk5vKys7XG4gICAgICAgIGdhbWVWaWV3LmxvYWRUdXJuKFxuICAgICAgICAgIHNoaXAsXG4gICAgICAgICAgZGlzcGxheUJvYXJkLFxuICAgICAgICAgIGF0dGFja0JvYXJkLFxuICAgICAgICAgIGN1cnJlbnRQbGF5ZXJUdXJuLFxuICAgICAgICAgIHR1cm5ObyxcbiAgICAgICAgICBnYW1lbW9kZVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpbnZhbGlkIG1vdmUnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZ2FtZW1vZGUgPT09ICdjcHUnKSB7XG4gICAgICBpZiAocGxheWVyMi50YWtlQXR0YWNrKHgsIHkpKSB7XG4gICAgICAgIGlmIChwbGF5ZXIyLmNoZWNrTG9zZSgpID09PSB0cnVlKSB7XG4gICAgICAgICAgaXNHYW1lb3ZlciA9IHRydWU7XG4gICAgICAgICAgZ2FtZVZpZXcubG9hZFdpbigxLCBnYW1lbW9kZSk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHBsYXllcjEudGFrZVJhbmRvbUF0dGFjaygpO1xuICAgICAgICBpZiAocGxheWVyMS5jaGVja0xvc2UoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGlzR2FtZW92ZXIgPSB0cnVlO1xuICAgICAgICAgIGdhbWVWaWV3LmxvYWRXaW4oMiwgZ2FtZW1vZGUpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0dXJuTm8rKztcbiAgICAgICAgY29uc3Qgc2hpcCA9IGdldFBsYXllck9uZVNoaXBzKCk7XG4gICAgICAgIGNvbnN0IGRpc3BsYXlCb2FyZCA9IGdldFBsYXllck9uZUJvYXJkKCk7XG4gICAgICAgIGNvbnN0IGF0dGFja0JvYXJkID0gZ2V0UGxheWVyVHdvQm9hcmQoKTtcbiAgICAgICAgZ2FtZVZpZXcubG9hZFR1cm4oXG4gICAgICAgICAgc2hpcCxcbiAgICAgICAgICBkaXNwbGF5Qm9hcmQsXG4gICAgICAgICAgYXR0YWNrQm9hcmQsXG4gICAgICAgICAgY3VycmVudFBsYXllclR1cm4sXG4gICAgICAgICAgdHVybk5vLFxuICAgICAgICAgIGdhbWVtb2RlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHN0YXJ0R2FtZSxcbiAgICBjcmVhdGVQbGF5ZXIxLFxuICAgIGNyZWF0ZVBsYXllcjIsXG4gICAgZ2V0UGxheWVyT25lU2hpcHMsXG4gICAgZ2V0UGxheWVyVHdvU2hpcHMsXG4gICAgZ2V0UGxheWVyT25lQm9hcmQsXG4gICAgZ2V0UGxheWVyVHdvQm9hcmQsXG4gICAgY2hhbmdlVHVybixcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGdhbWVDb250cm9sbGVyIH07XG4iLCJjb25zdCBoZWxwZXIgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCByYW5kb21UcnVlT3JGYWxzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikgPT09IDAgPyBmYWxzZSA6IHRydWU7XG4gIH07XG4gIGNvbnN0IGdldFJhbmRvbUludCA9IGZ1bmN0aW9uIChuKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG4pO1xuICB9O1xuICBjb25zdCBzaGlwSW5mbyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgaWYgKG5hbWUgPT09ICdjYXJyaWVyJykge1xuICAgICAgcmV0dXJuIHsgc2hpcDogbmFtZSwgbGVuZ3RoOiA1IH07XG4gICAgfSBlbHNlIGlmIChuYW1lID09PSAnYmF0dGxlc2hpcCcpIHtcbiAgICAgIHJldHVybiB7IHNoaXA6IG5hbWUsIGxlbmd0aDogNCB9O1xuICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ2Rlc3Ryb3llcicpIHtcbiAgICAgIHJldHVybiB7IHNoaXA6IG5hbWUsIGxlbmd0aDogMyB9O1xuICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ3N1Ym1hcmluZScpIHtcbiAgICAgIHJldHVybiB7IHNoaXA6IG5hbWUsIGxlbmd0aDogMyB9O1xuICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ2JvYXQnKSB7XG4gICAgICByZXR1cm4geyBzaGlwOiBuYW1lLCBsZW5ndGg6IDIgfTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB7IHJhbmRvbVRydWVPckZhbHNlLCBnZXRSYW5kb21JbnQsIHNoaXBJbmZvIH07XG59KSgpO1xuXG5leHBvcnQgeyBoZWxwZXIgfTtcbiIsImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gJy4vZ2FtZWJvYXJkJztcbmltcG9ydCB7IGhlbHBlciB9IGZyb20gJy4vaGVscGVyJztcblxuY29uc3QgUGxheWVyID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBnYW1lYm9hcmQgPSBHYW1lYm9hcmQoKTtcblxuICBjb25zdCBwbGFjZVJhbmRvbSA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBzaGlwcyA9IFsnY2FycmllcicsICdiYXR0bGVzaGlwJywgJ2Rlc3Ryb3llcicsICdzdWJtYXJpbmUnLCAnYm9hdCddO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHdoaWxlIChcbiAgICAgICAgIWdhbWVib2FyZC5wbGFjZVNoaXAoXG4gICAgICAgICAgaGVscGVyLmdldFJhbmRvbUludCgxMCksXG4gICAgICAgICAgaGVscGVyLmdldFJhbmRvbUludCgxMCksXG4gICAgICAgICAgc2hpcHNbaV0sXG4gICAgICAgICAgaGVscGVyLnJhbmRvbVRydWVPckZhbHNlKClcbiAgICAgICAgKVxuICAgICAgKSB7fVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSBmdW5jdGlvbiAoeCwgeSwgc2hpcG5hbWUsIGlzSG9yaXpvbnRhbCkge1xuICAgIHJldHVybiBnYW1lYm9hcmQucGxhY2VTaGlwKHgsIHksIHNoaXBuYW1lLCBpc0hvcml6b250YWwpO1xuICB9O1xuXG4gIGNvbnN0IHRha2VBdHRhY2sgPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgIHJldHVybiBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgfTtcblxuICBjb25zdCB0YWtlUmFuZG9tQXR0YWNrID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IG1vdmVzID0gZ2V0TGVnaWJsZVBsYWNlbWVudCgpO1xuICAgIGNvbnN0IGxlbmd0aCA9IG1vdmVzLmxlbmd0aDtcbiAgICBjb25zdCBwbGFjZW1lbnQgPSBtb3Zlc1toZWxwZXIuZ2V0UmFuZG9tSW50KGxlbmd0aCldO1xuICAgIHRha2VBdHRhY2soLi4ucGxhY2VtZW50KTtcbiAgfTtcblxuICBjb25zdCBjaGVja0xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGdhbWVib2FyZC5pc0ZsZWV0RGVzdHJveWVkKCk7XG4gIH07XG4gIGNvbnN0IG1ha2VCb2FyZCA9IGZ1bmN0aW9uIChib2FyZCkge1xuICAgIGZvciAoY29uc3Qgc2hpcCBpbiBib2FyZCkge1xuICAgICAgY29uc3QgeHBvcyA9IGJvYXJkW3NoaXBdLmxvY2F0aW9uWzBdWyd4J107XG4gICAgICBjb25zdCB5cG9zID0gYm9hcmRbc2hpcF0ubG9jYXRpb25bMF1bJ3knXTtcbiAgICAgIGNvbnN0IGlzSG9yaXpvbnRhbCA9IGJvYXJkW3NoaXBdLmZhY2luZyA9PT0gJ2hvcml6b250YWwnID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgcGxhY2VTaGlwKHhwb3MsIHlwb3MsIHNoaXAsIGlzSG9yaXpvbnRhbCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldEJvYXJkID0gKCkgPT4gZ2FtZWJvYXJkO1xuXG4gIGZ1bmN0aW9uIGdldExlZ2libGVQbGFjZW1lbnQoKSB7XG4gICAgY29uc3QgbGVnaWJsZU1vdmVzID0gW107XG4gICAgY29uc3QgYm9hcmQgPSBnYW1lYm9hcmQuZ2V0R2FtZWJvYXJkKCk7XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCAxMDsgeCsrKSB7XG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IDEwOyB5KyspIHtcbiAgICAgICAgaWYgKGJvYXJkW3hdW3ldID09PSAnTycgfHwgYm9hcmRbeF1beV0gPT09ICdYJykge1xuICAgICAgICAgIGxlZ2libGVNb3Zlcy5wdXNoKFt4LCB5XSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGxlZ2libGVNb3ZlcztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2FtZWJvYXJkLFxuICAgIGdldExlZ2libGVQbGFjZW1lbnQsXG4gICAgZ2V0Qm9hcmQsXG4gICAgcGxhY2VTaGlwLFxuICAgIHBsYWNlUmFuZG9tLFxuICAgIHRha2VSYW5kb21BdHRhY2ssXG4gICAgY2hlY2tMb3NlLFxuICAgIHRha2VBdHRhY2ssXG4gICAgbWFrZUJvYXJkLFxuICB9O1xufTtcblxuZXhwb3J0IHsgUGxheWVyIH07XG4iLCJjb25zdCBTaGlwID0gZnVuY3Rpb24gKGxlbmd0aCkge1xuICBjb25zdCBzaGlwTGVuZ3RoID0gbGVuZ3RoO1xuICBsZXQgZGFtYWdlID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBkYW1hZ2UucHVzaChmYWxzZSk7XG4gIH1cbiAgY29uc3QgaGl0ID0gZnVuY3Rpb24gKHBvc2l0aW9uKSB7XG4gICAgaWYgKHBvc2l0aW9uID4gbGVuZ3RoKSByZXR1cm47XG4gICAgZGFtYWdlW3Bvc2l0aW9uIC0gMV0gPSB0cnVlO1xuICB9O1xuICBjb25zdCBpc1N1bmsgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGRhbWFnZS5pbmNsdWRlcyhmYWxzZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgcmV0dXJuIHRydWU7XG4gIH07XG4gIHJldHVybiB7IGhpdCwgaXNTdW5rLCBzaGlwTGVuZ3RoIH07XG59O1xuXG5leHBvcnQgeyBTaGlwIH07XG4iLCJpbXBvcnQgeyBnYW1lQ29udHJvbGxlciB9IGZyb20gJy4uL2FwcC9nYW1lY29udHJvbGxlcic7XG5jb25zdCBnYW1lVmlldyA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXJnZXQnKTtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250ZW50LmlubmVySFRNTCA9IGBcbiAgPGRpdiBjbGFzcz1cImdhbWUtY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FtZS1pbmZvXCI+PGgyPlR1cm4gMTogUGxheWVyIE9uZSdzIHR1cm48L2gyPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FtZWJvYXJkLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LXNpZGVcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHQtc2lkZVwiPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICBgO1xuICBsZXQgbGVmdFNpZGUsIHJpZ2h0U2lkZSwgYXR0YWNrR3JpZCwgZGlzcGxheUdyaWQ7XG5cbiAgY29uc3QgaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0YXJnZXQuaW5uZXJIVE1MID0gYGA7XG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIF9zZXRVcEF0dGFja0dyaWQoKTtcbiAgICBfc2V0VXBEaXNwbGF5R3JpZCgpO1xuICAgIGxlZnRTaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnQtc2lkZScpO1xuICAgIHJpZ2h0U2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yaWdodC1zaWRlJyk7XG4gICAgbGVmdFNpZGUuYXBwZW5kQ2hpbGQoZGlzcGxheUdyaWQpO1xuICAgIHJpZ2h0U2lkZS5hcHBlbmRDaGlsZChhdHRhY2tHcmlkKTtcbiAgICByZW5kZXJBdHRhY2tHcmlkKGdhbWVDb250cm9sbGVyLmdldFBsYXllclR3b0JvYXJkKCkpO1xuICAgIHJlbmRlckRpc3BsYXlHcmlkKFxuICAgICAgZ2FtZUNvbnRyb2xsZXIuZ2V0UGxheWVyT25lU2hpcHMoKSxcbiAgICAgIGdhbWVDb250cm9sbGVyLmdldFBsYXllck9uZUJvYXJkKClcbiAgICApO1xuICB9O1xuICBmdW5jdGlvbiBfc2V0VXBBdHRhY2tHcmlkKCkge1xuICAgIGF0dGFja0dyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhdHRhY2tHcmlkLmNsYXNzTGlzdC5hZGQoJ2F0dGFjay1ncmlkJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdhdHRhY2stZ3JpZC1zcXVhcmUnKTtcbiAgICAgICAgc3F1YXJlLmRhdGFzZXQueCA9IGo7XG4gICAgICAgIHNxdWFyZS5kYXRhc2V0LnkgPSBpO1xuICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHhwb3MgPSBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LngpO1xuICAgICAgICAgIGNvbnN0IHlwb3MgPSBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnkpO1xuICAgICAgICAgIGdhbWVDb250cm9sbGVyLmNoYW5nZVR1cm4oeHBvcywgeXBvcyk7XG4gICAgICAgIH0pO1xuICAgICAgICBhdHRhY2tHcmlkLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIF9zZXRVcERpc3BsYXlHcmlkKCkge1xuICAgIGRpc3BsYXlHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGlzcGxheUdyaWQuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1ncmlkJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LWdyaWQtc3F1YXJlJyk7XG4gICAgICAgIHNxdWFyZS5kYXRhc2V0LnggPSBqO1xuICAgICAgICBzcXVhcmUuZGF0YXNldC55ID0gaTtcbiAgICAgICAgZGlzcGxheUdyaWQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29uc3QgcmVuZGVyQXR0YWNrR3JpZCA9IGZ1bmN0aW9uIChib2FyZCkge1xuICAgIGNvbnN0IHNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXR0YWNrLWdyaWQtc3F1YXJlJyk7XG4gICAgc3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKCdzdW5rJyk7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgnbWlzcycpO1xuXG4gICAgICBjb25zdCB5cG9zID0gcGFyc2VJbnQoc3F1YXJlLmRhdGFzZXQueSk7XG4gICAgICBjb25zdCB4cG9zID0gcGFyc2VJbnQoc3F1YXJlLmRhdGFzZXQueCk7XG4gICAgICBpZiAoYm9hcmRbeHBvc11beXBvc10gPT09ICdTJykge1xuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc3VuaycpO1xuICAgICAgfSBlbHNlIGlmIChib2FyZFt4cG9zXVt5cG9zXSA9PT0gJ0gnKSB7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IHJlbmRlckRpc3BsYXlHcmlkID0gZnVuY3Rpb24gKHNoaXBzLCBib2FyZCkge1xuICAgIGNvbnN0IHNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGlzcGxheS1ncmlkLXNxdWFyZScpO1xuICAgIHNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICAnbWlzcycsXG4gICAgICAgICdzdW5rJyxcbiAgICAgICAgJ2NhcnJpZXItY29sb3InLFxuICAgICAgICAnYmF0dGxlc2hpcC1jb2xvcicsXG4gICAgICAgICdkZXN0cm95ZXItY29sb3InLFxuICAgICAgICAnc3VibWFyaW5lLWNvbG9yJyxcbiAgICAgICAgJ2JvYXQtY29sb3InLFxuICAgICAgXTtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKC4uLmNsYXNzZXMpO1xuICAgICAgY29uc3QgeXBvcyA9IHBhcnNlSW50KHNxdWFyZS5kYXRhc2V0LnkpO1xuICAgICAgY29uc3QgeHBvcyA9IHBhcnNlSW50KHNxdWFyZS5kYXRhc2V0LngpO1xuICAgICAgaWYgKGJvYXJkW3hwb3NdW3lwb3NdID09PSAnSCcpIHtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICAgIH0gZWxzZSBpZiAoYm9hcmRbeHBvc11beXBvc10gPT09ICdTJykge1xuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc3VuaycpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGZvciAoY29uc3Qgc2hpcCBpbiBzaGlwcykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwc1tzaGlwXS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB4cG9zID0gc2hpcHNbc2hpcF1baV1bJ3gnXTtcbiAgICAgICAgY29uc3QgeXBvcyA9IHNoaXBzW3NoaXBdW2ldWyd5J107XG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYC5kaXNwbGF5LWdyaWQtc3F1YXJlW2RhdGEteD1cIiR7eHBvc31cIl1bZGF0YS15PVwiJHt5cG9zfVwiXWBcbiAgICAgICAgKTtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoYCR7c2hpcH0tY29sb3JgKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGZ1bmN0aW9uIHN3aXRjaEdyaWRQb3MoYWN0aXZlUGxheWVyKSB7XG4gICAgaWYgKGFjdGl2ZVBsYXllciA9PT0gMikge1xuICAgICAgbGVmdFNpZGUucmVtb3ZlQ2hpbGQoZGlzcGxheUdyaWQpO1xuICAgICAgcmlnaHRTaWRlLnJlbW92ZUNoaWxkKGF0dGFja0dyaWQpO1xuICAgICAgbGVmdFNpZGUuYXBwZW5kQ2hpbGQoYXR0YWNrR3JpZCk7XG4gICAgICByaWdodFNpZGUuYXBwZW5kQ2hpbGQoZGlzcGxheUdyaWQpO1xuICAgIH0gZWxzZSBpZiAoYWN0aXZlUGxheWVyID09PSAxKSB7XG4gICAgICBsZWZ0U2lkZS5yZW1vdmVDaGlsZChhdHRhY2tHcmlkKTtcbiAgICAgIHJpZ2h0U2lkZS5yZW1vdmVDaGlsZChkaXNwbGF5R3JpZCk7XG4gICAgICBsZWZ0U2lkZS5hcHBlbmRDaGlsZChkaXNwbGF5R3JpZCk7XG4gICAgICByaWdodFNpZGUuYXBwZW5kQ2hpbGQoYXR0YWNrR3JpZCk7XG4gICAgfVxuICB9XG4gIGNvbnN0IGxvYWRUdXJuID0gZnVuY3Rpb24gKFxuICAgIHNoaXBzLFxuICAgIGRpc3BsYXlCb2FyZCxcbiAgICBhdHRhY2tCb2FyZCxcbiAgICBjdXJyZW50UGxheWVyLFxuICAgIHR1cm5ObyxcbiAgICBtb2RlXG4gICkge1xuICAgIGlmIChtb2RlID09PSAncGxheWVyJykgc3dpdGNoR3JpZFBvcyhjdXJyZW50UGxheWVyKTtcbiAgICByZW5kZXJBdHRhY2tHcmlkKGF0dGFja0JvYXJkKTtcbiAgICByZW5kZXJEaXNwbGF5R3JpZChzaGlwcywgZGlzcGxheUJvYXJkKTtcbiAgICB1cGRhdGVJbmZvKGN1cnJlbnRQbGF5ZXIsIHR1cm5Obyk7XG4gIH07XG4gIGZ1bmN0aW9uIHVwZGF0ZUluZm8oY3VycmVudFBsYXllciwgdHVybk5vKSB7XG4gICAgY29uc3QgcGxheWVyID0gY3VycmVudFBsYXllciA9PT0gMSA/ICdPbmUnIDogJ1R3byc7XG4gICAgY29uc3QgaW5mb0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1pbmZvIGgyJyk7XG4gICAgaW5mb0VsZW1lbnQudGV4dENvbnRlbnQgPSBgVHVybiAke3R1cm5Ob306IFBsYXllciAke3BsYXllcn0ncyB0dXJuYDtcbiAgfVxuICBmdW5jdGlvbiBfc2V0VXBNb2RhbCh3aW5uZXIsIG1vZGUpIHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWNvbnRhaW5lcicpO1xuICAgIG1vZGFsLmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwibW9kYWxcIj5cbiAgICAgICAgPGgyIGNsYXNzPVwid2lubmVyXCI+PC9oMj5cbiAgICAgICAgPGgzPlBsYXkgYWdhaW4/PC9oMz5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJ0bi1jb250YWluZXJcIj5cbiAgICAgICAgICA8YnV0dG9uIGlkPVwiYnRuLXllc1wiPlllczwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gaWQ9XCJidG4tbm9cIj5ObzwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PmA7XG4gICAgY29uc3QgYm9keUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgYm9keUVsZW1lbnQuYXBwZW5kQ2hpbGQobW9kYWwpO1xuICAgIGNvbnN0IHdpbm5lckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lubmVyJyk7XG4gICAgaWYgKG1vZGUgPT09ICdjcHUnICYmIHdpbm5lciA9PT0gMikge1xuICAgICAgd2lubmVyRWxlbWVudC50ZXh0Q29udGVudCA9ICdZb3UgbG9zdC4nO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aW5uZXJFbGVtZW50LnRleHRDb250ZW50ID1cbiAgICAgICAgd2lubmVyID09PSAxID8gYFBsYXllciBPbmUgaGFzIHdvbiFgIDogJ1BsYXllciBUd28gaGFzIHdvbiEnO1xuICAgIH1cbiAgICBjb25zdCB5ZXNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuLXllcycpO1xuICAgIGNvbnN0IG5vQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bi1ubycpO1xuICAgIHllc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGxvY2F0aW9uLnJlbG9hZCgpKTtcbiAgICBub0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGJvZHlFbGVtZW50LnJlbW92ZUNoaWxkKG1vZGFsKSk7XG4gIH1cbiAgZnVuY3Rpb24gX2NyZWF0ZVJldmVhbEdyaWQoc2hpcHMsIGJvYXJkKSB7XG4gICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgncmV2ZWFsLWdyaWQnKTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3JldmVhbC1ncmlkLXNxdWFyZScpO1xuICAgICAgICBzcXVhcmUuZGF0YXNldC54ID0gajtcbiAgICAgICAgc3F1YXJlLmRhdGFzZXQueSA9IGk7XG5cbiAgICAgICAgaWYgKGJvYXJkW2ldW2pdID09PSAnSCcpIHtcbiAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgICAgICB9IGVsc2UgaWYgKGJvYXJkW2ldW2pdID09PSAnUycpIHtcbiAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc3VuaycpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3Qgc2hpcCBpbiBzaGlwcykge1xuICAgICAgICAgIGZvciAobGV0IHogPSAwOyB6IDwgc2hpcHNbc2hpcF0ubGVuZ3RoOyB6KyspIHtcbiAgICAgICAgICAgIGNvbnN0IHhwb3MgPSBzaGlwc1tzaGlwXVt6XVsneCddO1xuICAgICAgICAgICAgY29uc3QgeXBvcyA9IHNoaXBzW3NoaXBdW3pdWyd5J107XG4gICAgICAgICAgICBpZiAoaSA9PT0geHBvcyAmJiBqID09PSB5cG9zKSBzcXVhcmUuY2xhc3NMaXN0LmFkZChgJHtzaGlwfS1jb2xvcmApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBncmlkLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBncmlkO1xuICB9XG4gIGNvbnN0IGxvYWRXaW4gPSBmdW5jdGlvbiAod2lubmVyLCBtb2RlKSB7XG4gICAgX3NldFVwTW9kYWwod2lubmVyLCBtb2RlKTtcbiAgICBpZiAod2lubmVyID09PSAxIHx8IG1vZGUgPT09ICdjcHUnKSB7XG4gICAgICBsZWZ0U2lkZS5yZW1vdmVDaGlsZChkaXNwbGF5R3JpZCk7XG4gICAgICByaWdodFNpZGUucmVtb3ZlQ2hpbGQoYXR0YWNrR3JpZCk7XG4gICAgfSBlbHNlIGlmICh3aW5uZXIgPT09IDIpIHtcbiAgICAgIGxlZnRTaWRlLnJlbW92ZUNoaWxkKGF0dGFja0dyaWQpO1xuICAgICAgcmlnaHRTaWRlLnJlbW92ZUNoaWxkKGRpc3BsYXlHcmlkKTtcbiAgICB9XG4gICAgbGVmdFNpZGUuYXBwZW5kQ2hpbGQoXG4gICAgICBfY3JlYXRlUmV2ZWFsR3JpZChcbiAgICAgICAgZ2FtZUNvbnRyb2xsZXIuZ2V0UGxheWVyT25lU2hpcHMoKSxcbiAgICAgICAgZ2FtZUNvbnRyb2xsZXIuZ2V0UGxheWVyT25lQm9hcmQoKVxuICAgICAgKVxuICAgICk7XG4gICAgcmlnaHRTaWRlLmFwcGVuZENoaWxkKFxuICAgICAgX2NyZWF0ZVJldmVhbEdyaWQoXG4gICAgICAgIGdhbWVDb250cm9sbGVyLmdldFBsYXllclR3b1NoaXBzKCksXG4gICAgICAgIGdhbWVDb250cm9sbGVyLmdldFBsYXllclR3b0JvYXJkKClcbiAgICAgIClcbiAgICApO1xuICAgIGlmIChtb2RlID09PSAnY3B1Jykge1xuICAgICAgY29uc3Qgd2lubmVyVGV4dCA9IHdpbm5lciA9PT0gMSA/ICdZb3UgaGF2ZSB3b24hJyA6ICdZb3UgaGF2ZSBsb3N0Lic7XG4gICAgICBjb25zdCBpbmZvRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLWluZm8gaDInKTtcbiAgICAgIGluZm9FbGVtZW50LnRleHRDb250ZW50ID0gd2lubmVyVGV4dDtcbiAgICB9IGVsc2UgaWYgKG1vZGUgPT09ICdwbGF5ZXInKSB7XG4gICAgICBjb25zdCB3aW5uZXJUZXh0ID0gd2lubmVyID09PSAxID8gJ09uZScgOiAnVHdvJztcbiAgICAgIGNvbnN0IGluZm9FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtaW5mbyBoMicpO1xuICAgICAgaW5mb0VsZW1lbnQudGV4dENvbnRlbnQgPSBgUGxheWVyICR7d2lubmVyVGV4dH0gaGFzIHdvbiFgO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHsgaW5pdGlhbGl6ZSwgcmVuZGVyQXR0YWNrR3JpZCwgbG9hZFR1cm4sIGxvYWRXaW4gfTtcbn0pKCk7XG5leHBvcnQgeyBnYW1lVmlldyB9O1xuIiwiaW1wb3J0IHsgZ2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuLi9hcHAvZ2FtZWNvbnRyb2xsZXInO1xuaW1wb3J0IHsgaGVscGVyIH0gZnJvbSAnLi4vYXBwL2hlbHBlcic7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuLi9hcHAvcGxheWVyJztcbmltcG9ydCB7IGdhbWVWaWV3IH0gZnJvbSAnLi9nYW1lVmlldyc7XG5jb25zdCBwbGFjZW1lbnRWaWV3ID0gKGZ1bmN0aW9uICgpIHtcbiAgbGV0IHNlbGVjdGVkU2hpcDtcbiAgbGV0IHBsYWNlbWVudE9yaWVudGF0aW9uO1xuICBsZXQgZ2FtZW1vZGU7XG4gIGxldCBwbGF5ZXJzU2V0ID0gMDtcbiAgY29uc3Qgc2hpcERhdGEgPSB7XG4gICAgY2FycmllcjogeyBsb2NhdGlvbjogW10sIGZhY2luZzogbnVsbCB9LFxuICAgIGJhdHRsZXNoaXA6IHsgbG9jYXRpb246IFtdLCBmYWNpbmc6IG51bGwgfSxcbiAgICBkZXN0cm95ZXI6IHsgbG9jYXRpb246IFtdLCBmYWNpbmc6IG51bGwgfSxcbiAgICBzdWJtYXJpbmU6IHsgbG9jYXRpb246IFtdLCBmYWNpbmc6IG51bGwgfSxcbiAgICBib2F0OiB7IGxvY2F0aW9uOiBbXSwgZmFjaW5nOiBudWxsIH0sXG4gIH07XG4gIGxldCBwbGFjZW1lbnRHcmlkO1xuICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXJnZXQnKTtcbiAgY29uc3QgaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb250ZW50LmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwibWFpbi1jb250ZW50XCI+XG4gICAgPGgyIGNsYXNzPVwicGxhY2VtZW50LWluZm9cIj5QbGF5ZXIgbiBjaG9vc2UgYm9hcmQ8L2gyPlxuICAgIDxkaXYgY2xhc3M9XCJwbGFjZW1lbnQtY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uLXBhbmVsXCI+XG4gICAgICAgIDxidXR0b24gaWQ9XCJyb3RhdGUtYnRuXCI+Um90YXRlPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gaWQ9XCJyYW5kb21pc2UtYnRuXCI+UmFuZG9taXNlPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gaWQ9XCJyZXNldC1idG5cIj5SZXNldDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGlkPVwiZ28tYnRuXCIgZGlzYWJsZWQ+R288L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInBsYWNlbWVudC1ncmlkXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwic2hpcC1wYW5lbFwiPlxuICAgICAgICA8aDM+UGxhY2UgeW91ciBzaGlwczwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaGlwLWJ1dHRvbi1jb250YWluZXJcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgICBgO1xuICAgIHBsYWNlbWVudEdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxhY2VtZW50LWdyaWQnKTtcbiAgICBzZWxlY3RlZFNoaXAgPSBudWxsO1xuICAgIHBsYWNlbWVudE9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnO1xuICAgIF9jbGVhclNoaXBEYXRhKCk7XG4gICAgX3VwZGF0ZVR1cm5EaXNwbGF5KCk7XG4gICAgX21ha2VQbGFjZW1lbnRHcmlkKCk7XG4gICAgX21ha2VCdXR0b25zKCk7XG4gICAgX3NldFVwQ29udHJvbEJ0bnMoKTtcbiAgfTtcbiAgY29uc3Qgc2V0R2FtZW1vZGUgPSBmdW5jdGlvbiAobW9kZSkge1xuICAgIGlmIChtb2RlID09PSAncGxheWVyJykge1xuICAgICAgZ2FtZW1vZGUgPSBtb2RlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmIChtb2RlID09PSAnY3B1Jykge1xuICAgICAgZ2FtZW1vZGUgPSBtb2RlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHJldHVybiBmYWxzZTtcbiAgfTtcbiAgZnVuY3Rpb24gX21ha2VQbGFjZW1lbnRHcmlkKCkge1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgMTA7IHkrKykge1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCAxMDsgeCsrKSB7XG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgncGxhY2VtZW50LWdyaWQtc3F1YXJlJyk7XG4gICAgICAgIHNxdWFyZS5kYXRhc2V0LnkgPSB5O1xuICAgICAgICBzcXVhcmUuZGF0YXNldC54ID0geDtcbiAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoZSkgPT4ge1xuICAgICAgICAgIGlmIChzZWxlY3RlZFNoaXAgPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICBkaXNwbGF5U2hpcE9uVmlldyh4LCB5KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKGUpID0+IHtcbiAgICAgICAgICBjbGVhckRpc3BsYXlTaGlwKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICdjb250ZXh0bWVudScsXG4gICAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHNoaXBOYW1lID0gZS50YXJnZXQuZGF0YXNldC5zaGlwdHlwZTtcbiAgICAgICAgICAgIGlmIChyZW1vdmVTaGlwKHNoaXBOYW1lKSkge1xuICAgICAgICAgICAgICByZW5kZXJHcmlkKCk7XG4gICAgICAgICAgICAgIF9tYWtlQnV0dG9ucygpO1xuICAgICAgICAgICAgICBjbGVhckRpc3BsYXlTaGlwKCk7XG4gICAgICAgICAgICAgIGRpc3BsYXlTaGlwT25WaWV3KHgsIHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFsc2VcbiAgICAgICAgKTtcbiAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIGlmIChzZWxlY3RlZFNoaXAgPT09IG51bGwpIHJldHVybjtcbiAgICAgICAgICBpZiAoYWRkU2hpcCh4LCB5LCBzZWxlY3RlZFNoaXAsIHBsYWNlbWVudE9yaWVudGF0aW9uKSkge1xuICAgICAgICAgICAgcmVuZGVyR3JpZCgpO1xuICAgICAgICAgICAgc2VsZWN0ZWRTaGlwID0gbnVsbDtcbiAgICAgICAgICAgIF9tYWtlQnV0dG9ucygpO1xuICAgICAgICAgICAgY2xlYXJEaXNwbGF5U2hpcCgpO1xuICAgICAgICAgICAgZGlzcGxheVNoaXBPblZpZXcoeCwgeSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBwbGFjZW1lbnRHcmlkLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIF9zZXRVcENvbnRyb2xCdG5zKCkge1xuICAgIGNvbnN0IHJvdGF0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb3RhdGUtYnRuJyk7XG4gICAgY29uc3QgcmVzZXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzZXQtYnRuJyk7XG4gICAgY29uc3QgcmFuZG9tQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JhbmRvbWlzZS1idG4nKTtcbiAgICBjb25zdCBnb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnby1idG4nKTtcbiAgICByb3RhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBwbGFjZW1lbnRPcmllbnRhdGlvbiA9XG4gICAgICAgIHBsYWNlbWVudE9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnO1xuICAgIH0pO1xuICAgIHJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcmVtb3ZlU2hpcCgnY2FycmllcicpO1xuICAgICAgcmVtb3ZlU2hpcCgnYmF0dGxlc2hpcCcpO1xuICAgICAgcmVtb3ZlU2hpcCgnZGVzdHJveWVyJyk7XG4gICAgICByZW1vdmVTaGlwKCdzdWJtYXJpbmUnKTtcbiAgICAgIHJlbW92ZVNoaXAoJ2JvYXQnKTtcbiAgICAgIHJlbmRlckdyaWQoKTtcbiAgICAgIF9tYWtlQnV0dG9ucygpO1xuICAgIH0pO1xuICAgIHJhbmRvbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHJlbW92ZVNoaXAoJ2NhcnJpZXInKTtcbiAgICAgIHJlbW92ZVNoaXAoJ2JhdHRsZXNoaXAnKTtcbiAgICAgIHJlbW92ZVNoaXAoJ2Rlc3Ryb3llcicpO1xuICAgICAgcmVtb3ZlU2hpcCgnc3VibWFyaW5lJyk7XG4gICAgICByZW1vdmVTaGlwKCdib2F0Jyk7XG4gICAgICBjb25zdCBib2FyZCA9IF9nZXRSYW5kb21Cb2FyZCgpO1xuICAgICAgX2FkZFJhbmRvbUJvYXJkKGJvYXJkKTtcbiAgICAgIF9tYWtlQnV0dG9ucygpO1xuICAgICAgcmVuZGVyR3JpZCgpO1xuICAgICAgc2VsZWN0ZWRTaGlwID0gbnVsbDtcbiAgICB9KTtcbiAgICBnb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmIChnYW1lbW9kZSA9PT0gJ2NwdScpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2dhbWUgc3RhcnRlZCcpO1xuICAgICAgICBjb25zdCBib2FyZCA9IE9iamVjdC5hc3NpZ24oe30sIHNoaXBEYXRhKTtcbiAgICAgICAgZ2FtZUNvbnRyb2xsZXIuY3JlYXRlUGxheWVyMShib2FyZCk7XG4gICAgICAgIGdhbWVDb250cm9sbGVyLmNyZWF0ZVBsYXllcjIobnVsbCk7XG4gICAgICAgIGdhbWVDb250cm9sbGVyLnN0YXJ0R2FtZShnYW1lbW9kZSk7XG4gICAgICAgIGdhbWVWaWV3LmluaXRpYWxpemUoKTtcbiAgICAgIH0gZWxzZSBpZiAoZ2FtZW1vZGUgPT09ICdwbGF5ZXInKSB7XG4gICAgICAgIGlmIChwbGF5ZXJzU2V0ID09PSAwKSB7XG4gICAgICAgICAgcGxheWVyc1NldCsrO1xuICAgICAgICAgIGNvbnN0IGJvYXJkID0gT2JqZWN0LmFzc2lnbih7fSwgc2hpcERhdGEpO1xuICAgICAgICAgIGdhbWVDb250cm9sbGVyLmNyZWF0ZVBsYXllcjEoYm9hcmQpO1xuICAgICAgICAgIGluaXRpYWxpemUoKTtcbiAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXJzU2V0ID09PSAxKSB7XG4gICAgICAgICAgY29uc3QgYm9hcmQgPSBPYmplY3QuYXNzaWduKHt9LCBzaGlwRGF0YSk7XG4gICAgICAgICAgZ2FtZUNvbnRyb2xsZXIuY3JlYXRlUGxheWVyMihib2FyZCk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3BsYXllciAyIHNldCcpO1xuICAgICAgICAgIGdhbWVDb250cm9sbGVyLnN0YXJ0R2FtZShnYW1lbW9kZSk7XG4gICAgICAgICAgZ2FtZVZpZXcuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgLy8gcmV0dXJucyB0cnVlIG9yIGZhbHNlIGlmIG1vdXNlb3ZlciBzcWF1cmUgaXMgYSB2YWxpZCBwbGFjZW1lbnRcbiAgZnVuY3Rpb24gY2hlY2tWYWxpZFBsYWNlbWVudCh4LCB5LCBsZW5ndGgsIG9yaWVudGF0aW9uKSB7XG4gICAgLy8gY2hlY2sgb3V0IG9mIGJvdW5kc1xuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBpZiAoeCArIGxlbmd0aCA+IDEwKSByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgaWYgKHkgKyBsZW5ndGggPiAxMCkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBjaGVjayBubyBvdmVybGFwLCBlbm51bWVyYXRlIHNoaXBsb2NhdGlvblxuICAgIGZvciAobGV0IHNoaXAgaW4gc2hpcERhdGEpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2hpcERhdGFbc2hpcF0ubG9jYXRpb24ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IGNoZWNrWCA9IG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcgPyB4ICsgaSA6IHg7XG4gICAgICAgICAgY29uc3QgY2hlY2tZID0gb3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcgPyB5ICsgaSA6IHk7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgc2hpcERhdGFbc2hpcF1bJ2xvY2F0aW9uJ11bal1bJ3gnXSA9PT0gY2hlY2tYICYmXG4gICAgICAgICAgICBzaGlwRGF0YVtzaGlwXVsnbG9jYXRpb24nXVtqXVsneSddID09PSBjaGVja1lcbiAgICAgICAgICApXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLy8gaGlnaGxpZ2h0IHJlZCBvciBncmVlbiBzaGlwIG9uIGdyaWRcbiAgZnVuY3Rpb24gZGlzcGxheVNoaXBPblZpZXcoeCwgeSkge1xuICAgIGlmIChzZWxlY3RlZFNoaXAgPT09IG51bGwpIHJldHVybjtcbiAgICBjb25zdCBsZW5ndGggPSBoZWxwZXIuc2hpcEluZm8oc2VsZWN0ZWRTaGlwKS5sZW5ndGg7XG4gICAgY29uc3Qgb3JpZW50YXRpb24gPSBwbGFjZW1lbnRPcmllbnRhdGlvbjtcbiAgICBjb25zdCBpc1ZhbGlkID0gY2hlY2tWYWxpZFBsYWNlbWVudCh4LCB5LCBsZW5ndGgsIG9yaWVudGF0aW9uKTtcblxuICAgIGlmIChpc1ZhbGlkKVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB4cG9zID0gb3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJyA/IHggKyBpIDogeDtcbiAgICAgICAgY29uc3QgeXBvcyA9IG9yaWVudGF0aW9uID09PSAndmVydGljYWwnID8geSArIGkgOiB5O1xuICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGBbZGF0YS14PVwiJHt4cG9zfVwiXVtkYXRhLXk9XCIke3lwb3N9XCJdYFxuICAgICAgICApO1xuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgndmFsaWQtc3F1YXJlJyk7XG4gICAgICB9XG4gICAgZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHhwb3MgPSBvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnID8geCArIGkgOiB4O1xuICAgICAgICBjb25zdCB5cG9zID0gb3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcgPyB5ICsgaSA6IHk7XG4gICAgICAgIGlmICh4cG9zID4gOSB8fCB5cG9zID4gOSkgYnJlYWs7XG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYFtkYXRhLXg9XCIke3hwb3N9XCJdW2RhdGEteT1cIiR7eXBvc31cIl1gXG4gICAgICAgICk7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkLXNxdWFyZScpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBjbGVhcnMgdmFsaWQgb3IgaW52YWxpZCBzcXVhcmUgd2hlbiBob3ZlcmluZ1xuICBmdW5jdGlvbiBjbGVhckRpc3BsYXlTaGlwKCkge1xuICAgIGNvbnN0IHNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxhY2VtZW50LWdyaWQgPiAqJyk7XG4gICAgc3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkLXNxdWFyZScpO1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ3ZhbGlkLXNxdWFyZScpO1xuICAgIH0pO1xuICB9XG4gIC8vIGNhbGxiYWNrIGZvciBjbGljayBzcXVhcmUgcGxhY2VtZW50IGV2ZW50IGlmIHZhbGlkIHBsYWNlZFxuICBmdW5jdGlvbiBhZGRTaGlwKHgsIHksIG5hbWUsIG9yaWVudGF0aW9uKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gaGVscGVyLnNoaXBJbmZvKG5hbWUpLmxlbmd0aDtcbiAgICBpZiAoIWNoZWNrVmFsaWRQbGFjZW1lbnQoeCwgeSwgbGVuZ3RoLCBvcmllbnRhdGlvbikpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdub3QgcG9zc2libGUnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHNoaXBEYXRhW25hbWVdLmxvY2F0aW9uLmxlbmd0aCAhPT0gMCkge1xuICAgICAgYWxlcnQoYCR7bmFtZX0gYWxyZWFkeSBleGlzdHNgKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IC8vcHJldmVudHMgb3ZlcndyaXRpbmdcbiAgICBjb25zdCBsb2NhdGlvbiA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNvb3JkID0ge307XG4gICAgICBjb25zdCB4cG9zID0gb3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJyA/IHggKyBpIDogeDtcbiAgICAgIGNvbnN0IHlwb3MgPSBvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJyA/IHkgKyBpIDogeTtcbiAgICAgIGNvb3JkLnggPSB4cG9zO1xuICAgICAgY29vcmQueSA9IHlwb3M7XG4gICAgICBsb2NhdGlvbi5wdXNoKGNvb3JkKTtcbiAgICB9XG4gICAgc2hpcERhdGFbbmFtZV0ubG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICBzaGlwRGF0YVtuYW1lXS5mYWNpbmcgPSBvcmllbnRhdGlvbjtcbiAgICBfY2hlY2tTdGFydENvbmRpdGlvbigpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGZ1bmN0aW9uIHJlbW92ZVNoaXAobmFtZSkge1xuICAgIGlmIChuYW1lID09PSB1bmRlZmluZWQpIHJldHVybiBmYWxzZTtcbiAgICBzaGlwRGF0YVtuYW1lXS5sb2NhdGlvbiA9IFtdO1xuICAgIHNoaXBEYXRhW25hbWVdLmZhY2luZyA9IG51bGw7XG4gICAgX2NoZWNrU3RhcnRDb25kaXRpb24oKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBmdW5jdGlvbiByZW5kZXJHcmlkKCkge1xuICAgIGNvbnN0IHNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxhY2VtZW50LWdyaWQgPiAqJyk7XG4gICAgc3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKCdjYXJyaWVyLWNvbG9yJyk7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgnYmF0dGxlc2hpcC1jb2xvcicpO1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ2Rlc3Ryb3llci1jb2xvcicpO1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ3N1Ym1hcmluZS1jb2xvcicpO1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ2JvYXQtY29sb3InKTtcbiAgICAgIHNxdWFyZS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc2hpcHR5cGUnLCAnJyk7XG4gICAgfSk7XG4gICAgZm9yIChjb25zdCBzaGlwIGluIHNoaXBEYXRhKSB7XG4gICAgICBzaGlwRGF0YVtzaGlwXVsnbG9jYXRpb24nXS5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgICAgICBjb25zdCB4cG9zID0gY29vcmQueDtcbiAgICAgICAgY29uc3QgeXBvcyA9IGNvb3JkLnk7XG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYFtkYXRhLXg9XCIke3hwb3N9XCJdW2RhdGEteT1cIiR7eXBvc31cIl1gXG4gICAgICAgICk7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKGAke3NoaXB9LWNvbG9yYCk7XG4gICAgICAgIHNxdWFyZS5kYXRhc2V0LnNoaXB0eXBlID0gc2hpcDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBfbWFrZUJ1dHRvbnMoKSB7XG4gICAgbGV0IGZpcnN0ID0gZmFsc2U7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtYnV0dG9uLWNvbnRhaW5lcicpO1xuICAgIGxldCBjYXJyaWVyQnRuLCBiYXR0bGVzaGlwQnRuLCBkZXN0cm95ZXJCdG4sIHN1Ym1hcmluZUJ0biwgYm9hdEJ0bjtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgaWYgKHNoaXBEYXRhWydjYXJyaWVyJ10ubG9jYXRpb24ubGVuZ3RoID09PSAwKSB7XG4gICAgICBjYXJyaWVyQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBjYXJyaWVyQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2Fycmllci1idG4nKTtcbiAgICAgIGNhcnJpZXJCdG4udGV4dENvbnRlbnQgPSAnQ2Fycmllcic7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FycmllckJ0bik7XG4gICAgICBpZiAoZmlyc3QgPT09IGZhbHNlKSB7XG4gICAgICAgIGZpcnN0ID0gdHJ1ZTtcbiAgICAgICAgc2VsZWN0ZWRTaGlwID0gJ2NhcnJpZXInO1xuICAgICAgICBjYXJyaWVyQnRuLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnJyk7XG4gICAgICAgIGNhcnJpZXJCdG4uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNoaXBEYXRhWydiYXR0bGVzaGlwJ10ubG9jYXRpb24ubGVuZ3RoID09PSAwKSB7XG4gICAgICBiYXR0bGVzaGlwQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBiYXR0bGVzaGlwQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnYmF0dGxlc2hpcC1idG4nKTtcbiAgICAgIGJhdHRsZXNoaXBCdG4udGV4dENvbnRlbnQgPSAnQmF0dGxlc2hpcCc7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYmF0dGxlc2hpcEJ0bik7XG4gICAgICBpZiAoZmlyc3QgPT09IGZhbHNlKSB7XG4gICAgICAgIGZpcnN0ID0gdHJ1ZTtcbiAgICAgICAgc2VsZWN0ZWRTaGlwID0gJ2JhdHRsZXNoaXAnO1xuICAgICAgICBiYXR0bGVzaGlwQnRuLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnJyk7XG4gICAgICAgIGJhdHRsZXNoaXBCdG4uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNoaXBEYXRhWydkZXN0cm95ZXInXS5sb2NhdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICAgIGRlc3Ryb3llckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgZGVzdHJveWVyQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzdHJveWVyLWJ0bicpO1xuICAgICAgZGVzdHJveWVyQnRuLnRleHRDb250ZW50ID0gJ0Rlc3Ryb3llcic7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzdHJveWVyQnRuKTtcbiAgICAgIGlmIChmaXJzdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgZmlyc3QgPSB0cnVlO1xuICAgICAgICBzZWxlY3RlZFNoaXAgPSAnZGVzdHJveWVyJztcbiAgICAgICAgZGVzdHJveWVyQnRuLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnJyk7XG4gICAgICAgIGRlc3Ryb3llckJ0bi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc2hpcERhdGFbJ3N1Ym1hcmluZSddLmxvY2F0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgc3VibWFyaW5lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBzdWJtYXJpbmVCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdzdWJtYXJpbmUtYnRuJyk7XG4gICAgICBzdWJtYXJpbmVCdG4udGV4dENvbnRlbnQgPSAnU3VibWFyaW5lJztcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtYXJpbmVCdG4pO1xuICAgICAgaWYgKGZpcnN0ID09PSBmYWxzZSkge1xuICAgICAgICBmaXJzdCA9IHRydWU7XG4gICAgICAgIHNlbGVjdGVkU2hpcCA9ICdzdWJtYXJpbmUnO1xuICAgICAgICBzdWJtYXJpbmVCdG4uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICcnKTtcbiAgICAgICAgc3VibWFyaW5lQnRuLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzaGlwRGF0YVsnYm9hdCddLmxvY2F0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgYm9hdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgYm9hdEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2JvYXQtYnRuJyk7XG4gICAgICBib2F0QnRuLnRleHRDb250ZW50ID0gJ1BhdHJvbCc7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYm9hdEJ0bik7XG4gICAgICBpZiAoZmlyc3QgPT09IGZhbHNlKSB7XG4gICAgICAgIGZpcnN0ID0gdHJ1ZTtcbiAgICAgICAgc2VsZWN0ZWRTaGlwID0gJ2JvYXQnO1xuICAgICAgICBib2F0QnRuLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnJyk7XG4gICAgICAgIGJvYXRCdG4uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhbGxCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICcuc2hpcC1idXR0b24tY29udGFpbmVyID4gYnV0dG9uJ1xuICAgICk7XG4gICAgaWYgKHNoaXBEYXRhWydjYXJyaWVyJ10ubG9jYXRpb24ubGVuZ3RoID09PSAwKSB7XG4gICAgICBjYXJyaWVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKHNlbGVjdGVkU2hpcCA9PT0gJ2NhcnJpZXInKSB7XG4gICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICBzZWxlY3RlZFNoaXAgPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFsbEJ0bnMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgc2VsZWN0ZWRTaGlwID0gJ2NhcnJpZXInO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHNoaXBEYXRhWydiYXR0bGVzaGlwJ10ubG9jYXRpb24ubGVuZ3RoID09PSAwKSB7XG4gICAgICBiYXR0bGVzaGlwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKHNlbGVjdGVkU2hpcCA9PT0gJ2JhdHRsZXNoaXAnKSB7XG4gICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICBzZWxlY3RlZFNoaXAgPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFsbEJ0bnMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgc2VsZWN0ZWRTaGlwID0gJ2JhdHRsZXNoaXAnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHNoaXBEYXRhWydkZXN0cm95ZXInXS5sb2NhdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICAgIGRlc3Ryb3llckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChzZWxlY3RlZFNoaXAgPT09ICdkZXN0cm95ZXInKSB7XG4gICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICBzZWxlY3RlZFNoaXAgPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFsbEJ0bnMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgc2VsZWN0ZWRTaGlwID0gJ2Rlc3Ryb3llcic7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoc2hpcERhdGFbJ3N1Ym1hcmluZSddLmxvY2F0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgc3VibWFyaW5lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKHNlbGVjdGVkU2hpcCA9PT0gJ3N1Ym1hcmluZScpIHtcbiAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgIHNlbGVjdGVkU2hpcCA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWxsQnRucy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICBzZWxlY3RlZFNoaXAgPSAnc3VibWFyaW5lJztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChzaGlwRGF0YVsnYm9hdCddLmxvY2F0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgYm9hdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChzZWxlY3RlZFNoaXAgPT09ICdib2F0Jykge1xuICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgc2VsZWN0ZWRTaGlwID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGxCdG5zLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICAgIHNlbGVjdGVkU2hpcCA9ICdib2F0JztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIF9nZXRSYW5kb21Cb2FyZCgpIHtcbiAgICBjb25zdCBwbGF5ZXIgPSBQbGF5ZXIoKTtcbiAgICBwbGF5ZXIucGxhY2VSYW5kb20oKTtcbiAgICBjb25zdCBib2FyZCA9IHBsYXllci5nZXRCb2FyZCgpO1xuICAgIGNvbnN0IGxvY2F0aW9uID0gYm9hcmQuZ2V0U2hpcExvY2F0aW9uKCk7XG4gICAgcmV0dXJuIGxvY2F0aW9uO1xuICB9XG4gIGZ1bmN0aW9uIF9hZGRSYW5kb21Cb2FyZChib2FyZCkge1xuICAgIGZvciAobGV0IHNoaXAgaW4gYm9hcmQpIHtcbiAgICAgIGxldCBzaGlwT3JpZW50YXRpb247XG4gICAgICBjb25zdCBjb29yZFggPSBib2FyZFtzaGlwXVswXVsneCddO1xuICAgICAgY29uc3QgY29vcmRZID0gYm9hcmRbc2hpcF1bMF1bJ3knXTtcbiAgICAgIGlmIChib2FyZFtzaGlwXVsxXVsneCddIC0gYm9hcmRbc2hpcF1bMF1bJ3gnXSA9PT0gMSkge1xuICAgICAgICBzaGlwT3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCc7XG4gICAgICB9IGVsc2Ugc2hpcE9yaWVudGF0aW9uID0gJ3ZlcnRpY2FsJztcbiAgICAgIGFkZFNoaXAoY29vcmRYLCBjb29yZFksIHNoaXAsIHNoaXBPcmllbnRhdGlvbik7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIF9jaGVja1N0YXJ0Q29uZGl0aW9uKCkge1xuICAgIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dvLWJ0bicpO1xuICAgIGZvciAobGV0IHNoaXAgaW4gc2hpcERhdGEpIHtcbiAgICAgIGlmIChzaGlwRGF0YVtzaGlwXS5sb2NhdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgc3RhcnRCdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBzdGFydEJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgZnVuY3Rpb24gX2NsZWFyU2hpcERhdGEoKSB7XG4gICAgZm9yIChsZXQgc2hpcCBpbiBzaGlwRGF0YSkge1xuICAgICAgc2hpcERhdGFbc2hpcF0ubG9jYXRpb24gPSBbXTtcbiAgICAgIHNoaXBEYXRhW3NoaXBdLmZhY2luZyA9IG51bGw7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIF91cGRhdGVUdXJuRGlzcGxheSgpIHtcbiAgICBjb25zdCBpbmZvRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGFjZW1lbnQtaW5mbycpO1xuICAgIGluZm9EaXNwbGF5LnRleHRDb250ZW50ID0gYFBsYXllciAke3BsYXllcnNTZXQgKyAxfSdzIHR1cm4gdG8gcGxhY2VgO1xuICB9XG5cbiAgcmV0dXJuIHsgaW5pdGlhbGl6ZSwgc2V0R2FtZW1vZGUgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHBsYWNlbWVudFZpZXcgfTtcbiIsImltcG9ydCB7IHBsYWNlbWVudFZpZXcgfSBmcm9tICcuL3BsYWNlbWVudFZpZXcnO1xuY29uc3Qgc2VsZWN0aW9uVmlldyA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXJnZXQnKTtcbiAgY29uc3QgaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0YXJnZXQuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJzZWxlY3QtY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2VsZWN0LXBhbmVsXCI+XG4gICAgICAgICAgPGgyPkdBTUVNT0RFPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VsZWN0LWJ0bi1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJwbGF5ZXJcIj5QTEFZRVI8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjcHVcIj5DUFU8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICAgIGNvbnN0IHBsYXllck1vZGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyJyk7XG4gICAgY29uc3QgY3B1TW9kZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcHUnKTtcbiAgICBwbGF5ZXJNb2RlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKHBsYWNlbWVudFZpZXcuc2V0R2FtZW1vZGUoJ3BsYXllcicpKSBwbGFjZW1lbnRWaWV3LmluaXRpYWxpemUoKTtcbiAgICB9KTtcbiAgICBjcHVNb2RlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKHBsYWNlbWVudFZpZXcuc2V0R2FtZW1vZGUoJ2NwdScpKSBwbGFjZW1lbnRWaWV3LmluaXRpYWxpemUoKTtcbiAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIHsgaW5pdGlhbGl6ZSB9O1xufSkoKTtcbmV4cG9ydCB7IHNlbGVjdGlvblZpZXcgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHNlbGVjdGlvblZpZXcgfSBmcm9tICcuL21vZHVsZXMvdmlld3Mvc2VsZWN0aW9uVmlldyc7XG5cbnNlbGVjdGlvblZpZXcuaW5pdGlhbGl6ZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9