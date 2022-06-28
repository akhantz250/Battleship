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
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n  font-size: 16px;\n  --teal-200: #80CBC4;\n  --teal-600: #26A69A;\n  --teal-400:#26A69A;\n  --deep-purple-300:#9575CD;\n  --deep-purple-600: #5E35B1;\n  --deep-purple-900: #311B92;\n  --teal-800: #00695C;\n  --green-800: #1B5E20;\n  --pink-900:#880E4F;\n\n  --red-500: #F44336;\n  --gray-500: #9E9E9E;\n  --light-blue-300: #4FC3F7;\n}\n*{\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Poppins', sans-serif;\n}\nbody{\n  width: 100%;\n  min-height: 100vh;\n  background-color: var(--teal-200);\n}\nheader{\n  height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nheader h1{\n  font-size: 40px;\n  color: var(--deep-purple-900);\n}\ndiv.select-content{\n  height: 100%;\n  margin: auto;\n  width: 100%;\n  min-height: 500px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\ndiv.select-panel{\n  background-color: white;\n  width: 280px;\n  height: 350px;\n  border-radius: 10px;\n  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n}\n.select-panel h2{\n  text-align: center;\n  padding: 15px;\n  margin-top: 20px;\n  margin-bottom: 60px;\n}\ndiv.target{\n  height: calc(100vh - 100px);\n  width: 100%;\n}\n.placement-grid{\n  max-height: 500px;\n  height: 500px;\n  width: 500px;\n  min-width: 500px;\n  background-color: white;\n  /* border: 3px solid black; */\n  border-top: 2px solid black;\n  border-left: 2px solid black;\n  border-bottom: 3px solid black;\n  border-right: 3px solid black;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  margin: 0 100px;\n}\n.placement-grid-square,.attack-grid-square,.display-grid-square,.reveal-grid-square{\n  /* border: 1px solid black; */\n  border-left: 1px solid black;\n  border-top: 1px solid black;\n  background-color: white;\n  width: 100%;\n  height: 100%;\n}\ndiv.attack-grid-square{\n  background-color: var(--gray-500);\n}\n.placement-grid .valid-square{\n  background-color: var(--teal-200);\n}\n.placement-grid .invalid-square{\n  background-color: var(--red-500);\n}\n.ship-panel,.button-panel{\n  border: 3px solid black;\n  height: 500px;\n  width: 200px;\n  background-color: var(--deep-purple-300);\n}\n.button-panel, .ship-button-container{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n}\n.ship-panel{\n  display: flex;\n  flex-direction: column;\n}\n.ship-button-container{\n  flex-grow: 1;\n  padding: 15px;\n}\n.button-panel button, .ship-button-container button{\n  display: block;\n  width: 120px;\n  height: 50px;\n  border-radius: 5px;\n  border: none;\n  font-size: 16px;\n  box-shadow: 2px 2px 3px rgb(101, 101, 101);\n}\n.select-btn-container{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 50px;\n}\n.select-btn-container button{\n  display: block;\n  width: 120px;\n  padding: 10px 5px;\n  border: none;\n  background-color: var(--deep-purple-600);\n  color: white;\n  border-radius: 5px;\n}\n.select-btn-container button:hover{\n  background-color: var(--deep-purple-900);\n}\n.ship-button-container button.selected{\n  background-color: var(--teal-800);\n  color: white;\n}\n.button-panel button:hover:not(:disabled), .ship-button-container button:hover:not(.selected){\n  background-color: rgb(197, 197, 197);\n}\n.ship-panel h3{\n  text-align: center;\n  color: white;\n  padding: 10px;\n}\n.placement-grid div.carrier-color,.display-grid div.carrier-color,.reveal-grid div.carrier-color{\n  background-color: var(--deep-purple-900);\n}\n.placement-grid div.battleship-color,.display-grid div.battleship-color,.reveal-grid div.battleship-color{\n  background-color: var(--teal-800);\n}\n.placement-grid div.destroyer-color,.display-grid div.destroyer-color,.reveal-grid div.destroyer-color{\n  background-color: var(--pink-900);\n}\n.placement-grid div.submarine-color,.display-grid div.submarine-color,.reveal-grid div.submarine-color{\n  background-color: var(--green-800);\n}\n.placement-grid div.boat-color,.display-grid div.boat-color,.reveal-grid div.boat-color{\n  background-color: var(--deep-purple-600);\n}\ndiv.main-content{\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n.placement-container{\n  min-height: 500px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 110px;\n}\n.placement-info{\n  margin-top: 20px;\n  width: 500px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center;\n  white-space: nowrap;\n}\n.game-content{\n  height: 100%;\n  margin: auto;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 50px;\n}\n.gameboard-container{\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 250px;\n  width: 100%;\n  padding-bottom: 100px;\n}\n.left-side,.right-side{\n  width: 400px;\n  min-width: 400px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.display-grid,.attack-grid, .reveal-grid{\n  width: 400px;\n  height: 400px;\n  background-color:white;\n  border-top: 2px solid black;\n  border-left: 2px solid black;\n  border-bottom: 3px solid black;\n  border-right: 3px solid black;\n  display: grid;\n  grid-template-columns: repeat(10,1fr);\n  grid-template-rows: repeat(10,1fr);\n}\n.game-info{\n  margin-top: 20px;\n  width: 500px;\n  text-align: center;\n  color: white;\n  padding: 15px;\n  background-color: #9575CD;\n  border-radius: 10px;\n  border: 3px solid var(--deep-purple-600) ;\n}\n.sunk{\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: center;\n  background-size: cover;\n}\n.display-grid div.miss, .attack-grid div.miss, .reveal-grid div.miss{\n  background-color: var(--light-blue-300);\n}\n\n.attack-grid div.sunk{\n  background-color: var(--red-500);\n}\n.modal-container{\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.3);\n  backdrop-filter: blur(4px);\n  z-index: 100;\n  top: 0%;\n  left: 0%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  pointer-events: auto;\n  opacity: 1;\n  transition: opacity 0.3s ease;\n}\n.modal{\n  border-radius: 5px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.24);\n  height: 210px;\n  width: 320px;\n  background-color: white;\n  text-align: center;\n  position: relative;\n}\n\n.modal h2{\n  margin-top: 15px;\n  margin-bottom: 40px;\n}\n\n.modal-btn-container{\n  margin-top: 20px;\n}\n.modal-btn-container button{\n  display: inline-block;\n  width: 80px;\n  margin: 0px 20px;\n  padding: 5px;\n  border: none;\n  box-shadow: 2px 2px 3px rgb(101, 101, 101);\n  color: white;\n  font-size: 16px;\n}\n#btn-yes{\n  background-color: var(--teal-600);\n}\n#btn-no{\n  background-color: var(--red-500);\n}\n.pass-screen{\n  width: 100vw;\n  height: 100vh;\n  background-color: var(--deep-purple-600);\n  position: fixed;\n  visibility: hidden;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  gap: 70px;\n  z-index: 100;\n}\n.pass-screen button{\n  font-size: 24px;\n  padding: 8px 24px;\n  border-radius: 10px;\n  border: none;\n  box-shadow: 2px 2px 3px rgba(0, 0, 0,0.2);\n}\n.pass-screen h1{\n  font-size: 48px;\n  color: white;\n}\n.pass-screen button:hover{\n  background-color: var(--teal-800);\n  color: white;\n}\n.show-screen{\n  visibility: visible;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');\n:root{\n  font-size: 16px;\n  --teal-200: #80CBC4;\n  --teal-600: #26A69A;\n  --teal-400:#26A69A;\n  --deep-purple-300:#9575CD;\n  --deep-purple-600: #5E35B1;\n  --deep-purple-900: #311B92;\n  --teal-800: #00695C;\n  --green-800: #1B5E20;\n  --pink-900:#880E4F;\n\n  --red-500: #F44336;\n  --gray-500: #9E9E9E;\n  --light-blue-300: #4FC3F7;\n}\n*{\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Poppins', sans-serif;\n}\nbody{\n  width: 100%;\n  min-height: 100vh;\n  background-color: var(--teal-200);\n}\nheader{\n  height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nheader h1{\n  font-size: 40px;\n  color: var(--deep-purple-900);\n}\ndiv.select-content{\n  height: 100%;\n  margin: auto;\n  width: 100%;\n  min-height: 500px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\ndiv.select-panel{\n  background-color: white;\n  width: 280px;\n  height: 350px;\n  border-radius: 10px;\n  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n}\n.select-panel h2{\n  text-align: center;\n  padding: 15px;\n  margin-top: 20px;\n  margin-bottom: 60px;\n}\ndiv.target{\n  height: calc(100vh - 100px);\n  width: 100%;\n}\n.placement-grid{\n  max-height: 500px;\n  height: 500px;\n  width: 500px;\n  min-width: 500px;\n  background-color: white;\n  /* border: 3px solid black; */\n  border-top: 2px solid black;\n  border-left: 2px solid black;\n  border-bottom: 3px solid black;\n  border-right: 3px solid black;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  margin: 0 100px;\n}\n.placement-grid-square,.attack-grid-square,.display-grid-square,.reveal-grid-square{\n  /* border: 1px solid black; */\n  border-left: 1px solid black;\n  border-top: 1px solid black;\n  background-color: white;\n  width: 100%;\n  height: 100%;\n}\ndiv.attack-grid-square{\n  background-color: var(--gray-500);\n}\n.placement-grid .valid-square{\n  background-color: var(--teal-200);\n}\n.placement-grid .invalid-square{\n  background-color: var(--red-500);\n}\n.ship-panel,.button-panel{\n  border: 3px solid black;\n  height: 500px;\n  width: 200px;\n  background-color: var(--deep-purple-300);\n}\n.button-panel, .ship-button-container{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n}\n.ship-panel{\n  display: flex;\n  flex-direction: column;\n}\n.ship-button-container{\n  flex-grow: 1;\n  padding: 15px;\n}\n.button-panel button, .ship-button-container button{\n  display: block;\n  width: 120px;\n  height: 50px;\n  border-radius: 5px;\n  border: none;\n  font-size: 16px;\n  box-shadow: 2px 2px 3px rgb(101, 101, 101);\n}\n.select-btn-container{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 50px;\n}\n.select-btn-container button{\n  display: block;\n  width: 120px;\n  padding: 10px 5px;\n  border: none;\n  background-color: var(--deep-purple-600);\n  color: white;\n  border-radius: 5px;\n}\n.select-btn-container button:hover{\n  background-color: var(--deep-purple-900);\n}\n.ship-button-container button.selected{\n  background-color: var(--teal-800);\n  color: white;\n}\n.button-panel button:hover:not(:disabled), .ship-button-container button:hover:not(.selected){\n  background-color: rgb(197, 197, 197);\n}\n.ship-panel h3{\n  text-align: center;\n  color: white;\n  padding: 10px;\n}\n.placement-grid div.carrier-color,.display-grid div.carrier-color,.reveal-grid div.carrier-color{\n  background-color: var(--deep-purple-900);\n}\n.placement-grid div.battleship-color,.display-grid div.battleship-color,.reveal-grid div.battleship-color{\n  background-color: var(--teal-800);\n}\n.placement-grid div.destroyer-color,.display-grid div.destroyer-color,.reveal-grid div.destroyer-color{\n  background-color: var(--pink-900);\n}\n.placement-grid div.submarine-color,.display-grid div.submarine-color,.reveal-grid div.submarine-color{\n  background-color: var(--green-800);\n}\n.placement-grid div.boat-color,.display-grid div.boat-color,.reveal-grid div.boat-color{\n  background-color: var(--deep-purple-600);\n}\ndiv.main-content{\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n.placement-container{\n  min-height: 500px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 110px;\n}\n.placement-info{\n  margin-top: 20px;\n  width: 500px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center;\n  white-space: nowrap;\n}\n.game-content{\n  height: 100%;\n  margin: auto;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 50px;\n}\n.gameboard-container{\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 250px;\n  width: 100%;\n  padding-bottom: 100px;\n}\n.left-side,.right-side{\n  width: 400px;\n  min-width: 400px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.display-grid,.attack-grid, .reveal-grid{\n  width: 400px;\n  height: 400px;\n  background-color:white;\n  border-top: 2px solid black;\n  border-left: 2px solid black;\n  border-bottom: 3px solid black;\n  border-right: 3px solid black;\n  display: grid;\n  grid-template-columns: repeat(10,1fr);\n  grid-template-rows: repeat(10,1fr);\n}\n.game-info{\n  margin-top: 20px;\n  width: 500px;\n  text-align: center;\n  color: white;\n  padding: 15px;\n  background-color: #9575CD;\n  border-radius: 10px;\n  border: 3px solid var(--deep-purple-600) ;\n}\n.sunk{\n  background-image: url(./assets/explosion.png);\n  background-position: center;\n  background-size: cover;\n}\n.display-grid div.miss, .attack-grid div.miss, .reveal-grid div.miss{\n  background-color: var(--light-blue-300);\n}\n\n.attack-grid div.sunk{\n  background-color: var(--red-500);\n}\n.modal-container{\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.3);\n  backdrop-filter: blur(4px);\n  z-index: 100;\n  top: 0%;\n  left: 0%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  pointer-events: auto;\n  opacity: 1;\n  transition: opacity 0.3s ease;\n}\n.modal{\n  border-radius: 5px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.24);\n  height: 210px;\n  width: 320px;\n  background-color: white;\n  text-align: center;\n  position: relative;\n}\n\n.modal h2{\n  margin-top: 15px;\n  margin-bottom: 40px;\n}\n\n.modal-btn-container{\n  margin-top: 20px;\n}\n.modal-btn-container button{\n  display: inline-block;\n  width: 80px;\n  margin: 0px 20px;\n  padding: 5px;\n  border: none;\n  box-shadow: 2px 2px 3px rgb(101, 101, 101);\n  color: white;\n  font-size: 16px;\n}\n#btn-yes{\n  background-color: var(--teal-600);\n}\n#btn-no{\n  background-color: var(--red-500);\n}\n.pass-screen{\n  width: 100vw;\n  height: 100vh;\n  background-color: var(--deep-purple-600);\n  position: fixed;\n  visibility: hidden;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  gap: 70px;\n  z-index: 100;\n}\n.pass-screen button{\n  font-size: 24px;\n  padding: 8px 24px;\n  border-radius: 10px;\n  border: none;\n  box-shadow: 2px 2px 3px rgba(0, 0, 0,0.2);\n}\n.pass-screen h1{\n  font-size: 48px;\n  color: white;\n}\n.pass-screen button:hover{\n  background-color: var(--teal-800);\n  color: white;\n}\n.show-screen{\n  visibility: visible;\n}\n"],"sourceRoot":""}]);
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
  let leftSide, rightSide, attackGrid, displayGrid, passScreen;

  const initialize = function () {
    target.innerHTML = ``;
    target.appendChild(content);
    _setUpAttackGrid();
    _setUpDisplayGrid();
    _setUpPassScreen();
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
  function _setUpPassScreen() {
    passScreen = document.querySelector('.pass-screen');
    const button = document.querySelector('#pass-screen-btn');
    button.addEventListener('click', () =>
      passScreen.classList.remove('show-screen')
    );
  }
  function _showPassScreen(currentPlayer) {
    passScreen.classList.add('show-screen');
    const textInfo = document.querySelector('#pass-screen-info');
    textInfo.textContent = `Pass the device to Player ${
      currentPlayer === 1 ? 'One' : 'Two'
    }`;
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
    if (mode === 'player') {
      _showPassScreen(currentPlayer);
      switchGridPos(currentPlayer);
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZ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b0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLEtBQUssYUFBYSxLQUFLO0FBQzdDO0FBQ0EsZ0NBQWdDLEtBQUs7QUFDckM7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG1EQUFNO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxlQUFlO0FBQ3ZEOztBQUVBLFdBQVc7QUFDWCxDQUFDOztBQUV3Qjs7Ozs7Ozs7Ozs7Ozs7OztBQ25jdUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUscUVBQXlCLFlBQVksb0VBQXdCO0FBQ3ZFLEtBQUs7QUFDTDtBQUNBLFVBQVUscUVBQXlCLFNBQVMsb0VBQXdCO0FBQ3BFLEtBQUs7QUFDTDtBQUNBLFdBQVc7QUFDWCxDQUFDO0FBQ3dCOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFCekI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ3lDOztBQUU5RCxrRkFBd0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9hcHAvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2FwcC9nYW1lY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9hcHAvaGVscGVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2FwcC9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvYXBwL3NoaXAuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvdmlld3MvZ2FtZVZpZXcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvdmlld3MvcGxhY2VtZW50Vmlldy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy92aWV3cy9zZWxlY3Rpb25WaWV3LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9leHBsb3Npb24ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIC0tdGVhbC0yMDA6ICM4MENCQzQ7XFxuICAtLXRlYWwtNjAwOiAjMjZBNjlBO1xcbiAgLS10ZWFsLTQwMDojMjZBNjlBO1xcbiAgLS1kZWVwLXB1cnBsZS0zMDA6Izk1NzVDRDtcXG4gIC0tZGVlcC1wdXJwbGUtNjAwOiAjNUUzNUIxO1xcbiAgLS1kZWVwLXB1cnBsZS05MDA6ICMzMTFCOTI7XFxuICAtLXRlYWwtODAwOiAjMDA2OTVDO1xcbiAgLS1ncmVlbi04MDA6ICMxQjVFMjA7XFxuICAtLXBpbmstOTAwOiM4ODBFNEY7XFxuXFxuICAtLXJlZC01MDA6ICNGNDQzMzY7XFxuICAtLWdyYXktNTAwOiAjOUU5RTlFO1xcbiAgLS1saWdodC1ibHVlLTMwMDogIzRGQzNGNztcXG59XFxuKntcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG59XFxuYm9keXtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZWFsLTIwMCk7XFxufVxcbmhlYWRlcntcXG4gIGhlaWdodDogMTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5oZWFkZXIgaDF7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBjb2xvcjogdmFyKC0tZGVlcC1wdXJwbGUtOTAwKTtcXG59XFxuZGl2LnNlbGVjdC1jb250ZW50e1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiA1MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbmRpdi5zZWxlY3QtcGFuZWx7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiAyODBweDtcXG4gIGhlaWdodDogMzUwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE1KSAxLjk1cHggMS45NXB4IDIuNnB4O1xcbn1cXG4uc2VsZWN0LXBhbmVsIGgye1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xcbn1cXG5kaXYudGFyZ2V0e1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5wbGFjZW1lbnQtZ3JpZHtcXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIG1pbi13aWR0aDogNTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIC8qIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrOyAqL1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIGJsYWNrO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBtYXJnaW46IDAgMTAwcHg7XFxufVxcbi5wbGFjZW1lbnQtZ3JpZC1zcXVhcmUsLmF0dGFjay1ncmlkLXNxdWFyZSwuZGlzcGxheS1ncmlkLXNxdWFyZSwucmV2ZWFsLWdyaWQtc3F1YXJle1xcbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuZGl2LmF0dGFjay1ncmlkLXNxdWFyZXtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktNTAwKTtcXG59XFxuLnBsYWNlbWVudC1ncmlkIC52YWxpZC1zcXVhcmV7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZWFsLTIwMCk7XFxufVxcbi5wbGFjZW1lbnQtZ3JpZCAuaW52YWxpZC1zcXVhcmV7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtNTAwKTtcXG59XFxuLnNoaXAtcGFuZWwsLmJ1dHRvbi1wYW5lbHtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZXAtcHVycGxlLTMwMCk7XFxufVxcbi5idXR0b24tcGFuZWwsIC5zaGlwLWJ1dHRvbi1jb250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuLnNoaXAtcGFuZWx7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnNoaXAtYnV0dG9uLWNvbnRhaW5lcntcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIHBhZGRpbmc6IDE1cHg7XFxufVxcbi5idXR0b24tcGFuZWwgYnV0dG9uLCAuc2hpcC1idXR0b24tY29udGFpbmVyIGJ1dHRvbntcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggcmdiKDEwMSwgMTAxLCAxMDEpO1xcbn1cXG4uc2VsZWN0LWJ0bi1jb250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDUwcHg7XFxufVxcbi5zZWxlY3QtYnRuLWNvbnRhaW5lciBidXR0b257XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMjBweDtcXG4gIHBhZGRpbmc6IDEwcHggNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcC1wdXJwbGUtNjAwKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLnNlbGVjdC1idG4tY29udGFpbmVyIGJ1dHRvbjpob3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZXAtcHVycGxlLTkwMCk7XFxufVxcbi5zaGlwLWJ1dHRvbi1jb250YWluZXIgYnV0dG9uLnNlbGVjdGVke1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVhbC04MDApO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4uYnV0dG9uLXBhbmVsIGJ1dHRvbjpob3Zlcjpub3QoOmRpc2FibGVkKSwgLnNoaXAtYnV0dG9uLWNvbnRhaW5lciBidXR0b246aG92ZXI6bm90KC5zZWxlY3RlZCl7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk3LCAxOTcsIDE5Nyk7XFxufVxcbi5zaGlwLXBhbmVsIGgze1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuLnBsYWNlbWVudC1ncmlkIGRpdi5jYXJyaWVyLWNvbG9yLC5kaXNwbGF5LWdyaWQgZGl2LmNhcnJpZXItY29sb3IsLnJldmVhbC1ncmlkIGRpdi5jYXJyaWVyLWNvbG9ye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcC1wdXJwbGUtOTAwKTtcXG59XFxuLnBsYWNlbWVudC1ncmlkIGRpdi5iYXR0bGVzaGlwLWNvbG9yLC5kaXNwbGF5LWdyaWQgZGl2LmJhdHRsZXNoaXAtY29sb3IsLnJldmVhbC1ncmlkIGRpdi5iYXR0bGVzaGlwLWNvbG9ye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVhbC04MDApO1xcbn1cXG4ucGxhY2VtZW50LWdyaWQgZGl2LmRlc3Ryb3llci1jb2xvciwuZGlzcGxheS1ncmlkIGRpdi5kZXN0cm95ZXItY29sb3IsLnJldmVhbC1ncmlkIGRpdi5kZXN0cm95ZXItY29sb3J7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1waW5rLTkwMCk7XFxufVxcbi5wbGFjZW1lbnQtZ3JpZCBkaXYuc3VibWFyaW5lLWNvbG9yLC5kaXNwbGF5LWdyaWQgZGl2LnN1Ym1hcmluZS1jb2xvciwucmV2ZWFsLWdyaWQgZGl2LnN1Ym1hcmluZS1jb2xvcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuLTgwMCk7XFxufVxcbi5wbGFjZW1lbnQtZ3JpZCBkaXYuYm9hdC1jb2xvciwuZGlzcGxheS1ncmlkIGRpdi5ib2F0LWNvbG9yLC5yZXZlYWwtZ3JpZCBkaXYuYm9hdC1jb2xvcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZXAtcHVycGxlLTYwMCk7XFxufVxcbmRpdi5tYWluLWNvbnRlbnR7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4ucGxhY2VtZW50LWNvbnRhaW5lcntcXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiAxMTBweDtcXG59XFxuLnBsYWNlbWVudC1pbmZve1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbi5nYW1lLWNvbnRlbnR7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNTBweDtcXG59XFxuLmdhbWVib2FyZC1jb250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyNTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xcbn1cXG4ubGVmdC1zaWRlLC5yaWdodC1zaWRle1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgbWluLXdpZHRoOiA0MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5kaXNwbGF5LWdyaWQsLmF0dGFjay1ncmlkLCAucmV2ZWFsLWdyaWR7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCBibGFjaztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsMWZyKTtcXG59XFxuLmdhbWUtaW5mb3tcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICB3aWR0aDogNTAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk1NzVDRDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1kZWVwLXB1cnBsZS02MDApIDtcXG59XFxuLnN1bmt7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuLmRpc3BsYXktZ3JpZCBkaXYubWlzcywgLmF0dGFjay1ncmlkIGRpdi5taXNzLCAucmV2ZWFsLWdyaWQgZGl2Lm1pc3N7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlLTMwMCk7XFxufVxcblxcbi5hdHRhY2stZ3JpZCBkaXYuc3Vua3tcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC01MDApO1xcbn1cXG4ubW9kYWwtY29udGFpbmVye1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xcbiAgei1pbmRleDogMTAwO1xcbiAgdG9wOiAwJTtcXG4gIGxlZnQ6IDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xcbn1cXG4ubW9kYWx7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcXG4gIGhlaWdodDogMjEwcHg7XFxuICB3aWR0aDogMzIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm1vZGFsIGgye1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxufVxcblxcbi5tb2RhbC1idG4tY29udGFpbmVye1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuLm1vZGFsLWJ0bi1jb250YWluZXIgYnV0dG9ue1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDgwcHg7XFxuICBtYXJnaW46IDBweCAyMHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggcmdiKDEwMSwgMTAxLCAxMDEpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4jYnRuLXllc3tcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlYWwtNjAwKTtcXG59XFxuI2J0bi1ub3tcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC01MDApO1xcbn1cXG4ucGFzcy1zY3JlZW57XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcC1wdXJwbGUtNjAwKTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA3MHB4O1xcbiAgei1pbmRleDogMTAwO1xcbn1cXG4ucGFzcy1zY3JlZW4gYnV0dG9ue1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgcGFkZGluZzogOHB4IDI0cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggcmdiYSgwLCAwLCAwLDAuMik7XFxufVxcbi5wYXNzLXNjcmVlbiBoMXtcXG4gIGZvbnQtc2l6ZTogNDhweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLnBhc3Mtc2NyZWVuIGJ1dHRvbjpob3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlYWwtODAwKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLnNob3ctc2NyZWVue1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGtCQUFrQjs7RUFFbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGtDQUFrQztBQUNwQztBQUNBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbURBQW1EO0FBQ3JEO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQixXQUFXO0FBQ2I7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsNkJBQTZCO0VBQzdCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsOEJBQThCO0VBQzlCLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztFQUNuQyxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsaUNBQWlDO0FBQ25DO0FBQ0E7RUFDRSxpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLGdDQUFnQztBQUNsQztBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixZQUFZO0VBQ1osd0NBQXdDO0FBQzFDO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLDBDQUEwQztBQUM1QztBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osd0NBQXdDO0VBQ3hDLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHdDQUF3QztBQUMxQztBQUNBO0VBQ0UsaUNBQWlDO0VBQ2pDLFlBQVk7QUFDZDtBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUNBO0VBQ0Usd0NBQXdDO0FBQzFDO0FBQ0E7RUFDRSxpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLGlDQUFpQztBQUNuQztBQUNBO0VBQ0Usa0NBQWtDO0FBQ3BDO0FBQ0E7RUFDRSx3Q0FBd0M7QUFDMUM7QUFDQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsU0FBUztBQUNYO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsOEJBQThCO0VBQzlCLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLGtDQUFrQztBQUNwQztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLHlDQUF5QztBQUMzQztBQUNBO0VBQ0UseURBQTZDO0VBQzdDLDJCQUEyQjtFQUMzQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQztBQUNBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osT0FBTztFQUNQLFFBQVE7RUFDUixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsVUFBVTtFQUNWLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlDQUF5QztFQUN6QyxhQUFhO0VBQ2IsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7RUFDWiwwQ0FBMEM7RUFDMUMsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFDQTtFQUNFLGlDQUFpQztBQUNuQztBQUNBO0VBQ0UsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHdDQUF3QztFQUN4QyxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsWUFBWTtBQUNkO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1oseUNBQXlDO0FBQzNDO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkO0FBQ0E7RUFDRSxpQ0FBaUM7RUFDakMsWUFBWTtBQUNkO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGlucyZkaXNwbGF5PXN3YXAnKTtcXG46cm9vdHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIC0tdGVhbC0yMDA6ICM4MENCQzQ7XFxuICAtLXRlYWwtNjAwOiAjMjZBNjlBO1xcbiAgLS10ZWFsLTQwMDojMjZBNjlBO1xcbiAgLS1kZWVwLXB1cnBsZS0zMDA6Izk1NzVDRDtcXG4gIC0tZGVlcC1wdXJwbGUtNjAwOiAjNUUzNUIxO1xcbiAgLS1kZWVwLXB1cnBsZS05MDA6ICMzMTFCOTI7XFxuICAtLXRlYWwtODAwOiAjMDA2OTVDO1xcbiAgLS1ncmVlbi04MDA6ICMxQjVFMjA7XFxuICAtLXBpbmstOTAwOiM4ODBFNEY7XFxuXFxuICAtLXJlZC01MDA6ICNGNDQzMzY7XFxuICAtLWdyYXktNTAwOiAjOUU5RTlFO1xcbiAgLS1saWdodC1ibHVlLTMwMDogIzRGQzNGNztcXG59XFxuKntcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG59XFxuYm9keXtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZWFsLTIwMCk7XFxufVxcbmhlYWRlcntcXG4gIGhlaWdodDogMTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5oZWFkZXIgaDF7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBjb2xvcjogdmFyKC0tZGVlcC1wdXJwbGUtOTAwKTtcXG59XFxuZGl2LnNlbGVjdC1jb250ZW50e1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiA1MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbmRpdi5zZWxlY3QtcGFuZWx7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiAyODBweDtcXG4gIGhlaWdodDogMzUwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE1KSAxLjk1cHggMS45NXB4IDIuNnB4O1xcbn1cXG4uc2VsZWN0LXBhbmVsIGgye1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xcbn1cXG5kaXYudGFyZ2V0e1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5wbGFjZW1lbnQtZ3JpZHtcXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIG1pbi13aWR0aDogNTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIC8qIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrOyAqL1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIGJsYWNrO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBtYXJnaW46IDAgMTAwcHg7XFxufVxcbi5wbGFjZW1lbnQtZ3JpZC1zcXVhcmUsLmF0dGFjay1ncmlkLXNxdWFyZSwuZGlzcGxheS1ncmlkLXNxdWFyZSwucmV2ZWFsLWdyaWQtc3F1YXJle1xcbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuZGl2LmF0dGFjay1ncmlkLXNxdWFyZXtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktNTAwKTtcXG59XFxuLnBsYWNlbWVudC1ncmlkIC52YWxpZC1zcXVhcmV7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZWFsLTIwMCk7XFxufVxcbi5wbGFjZW1lbnQtZ3JpZCAuaW52YWxpZC1zcXVhcmV7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtNTAwKTtcXG59XFxuLnNoaXAtcGFuZWwsLmJ1dHRvbi1wYW5lbHtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZXAtcHVycGxlLTMwMCk7XFxufVxcbi5idXR0b24tcGFuZWwsIC5zaGlwLWJ1dHRvbi1jb250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuLnNoaXAtcGFuZWx7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnNoaXAtYnV0dG9uLWNvbnRhaW5lcntcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIHBhZGRpbmc6IDE1cHg7XFxufVxcbi5idXR0b24tcGFuZWwgYnV0dG9uLCAuc2hpcC1idXR0b24tY29udGFpbmVyIGJ1dHRvbntcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggcmdiKDEwMSwgMTAxLCAxMDEpO1xcbn1cXG4uc2VsZWN0LWJ0bi1jb250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDUwcHg7XFxufVxcbi5zZWxlY3QtYnRuLWNvbnRhaW5lciBidXR0b257XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMjBweDtcXG4gIHBhZGRpbmc6IDEwcHggNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcC1wdXJwbGUtNjAwKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLnNlbGVjdC1idG4tY29udGFpbmVyIGJ1dHRvbjpob3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZXAtcHVycGxlLTkwMCk7XFxufVxcbi5zaGlwLWJ1dHRvbi1jb250YWluZXIgYnV0dG9uLnNlbGVjdGVke1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVhbC04MDApO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4uYnV0dG9uLXBhbmVsIGJ1dHRvbjpob3Zlcjpub3QoOmRpc2FibGVkKSwgLnNoaXAtYnV0dG9uLWNvbnRhaW5lciBidXR0b246aG92ZXI6bm90KC5zZWxlY3RlZCl7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk3LCAxOTcsIDE5Nyk7XFxufVxcbi5zaGlwLXBhbmVsIGgze1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuLnBsYWNlbWVudC1ncmlkIGRpdi5jYXJyaWVyLWNvbG9yLC5kaXNwbGF5LWdyaWQgZGl2LmNhcnJpZXItY29sb3IsLnJldmVhbC1ncmlkIGRpdi5jYXJyaWVyLWNvbG9ye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcC1wdXJwbGUtOTAwKTtcXG59XFxuLnBsYWNlbWVudC1ncmlkIGRpdi5iYXR0bGVzaGlwLWNvbG9yLC5kaXNwbGF5LWdyaWQgZGl2LmJhdHRsZXNoaXAtY29sb3IsLnJldmVhbC1ncmlkIGRpdi5iYXR0bGVzaGlwLWNvbG9ye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVhbC04MDApO1xcbn1cXG4ucGxhY2VtZW50LWdyaWQgZGl2LmRlc3Ryb3llci1jb2xvciwuZGlzcGxheS1ncmlkIGRpdi5kZXN0cm95ZXItY29sb3IsLnJldmVhbC1ncmlkIGRpdi5kZXN0cm95ZXItY29sb3J7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1waW5rLTkwMCk7XFxufVxcbi5wbGFjZW1lbnQtZ3JpZCBkaXYuc3VibWFyaW5lLWNvbG9yLC5kaXNwbGF5LWdyaWQgZGl2LnN1Ym1hcmluZS1jb2xvciwucmV2ZWFsLWdyaWQgZGl2LnN1Ym1hcmluZS1jb2xvcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuLTgwMCk7XFxufVxcbi5wbGFjZW1lbnQtZ3JpZCBkaXYuYm9hdC1jb2xvciwuZGlzcGxheS1ncmlkIGRpdi5ib2F0LWNvbG9yLC5yZXZlYWwtZ3JpZCBkaXYuYm9hdC1jb2xvcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZXAtcHVycGxlLTYwMCk7XFxufVxcbmRpdi5tYWluLWNvbnRlbnR7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4ucGxhY2VtZW50LWNvbnRhaW5lcntcXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiAxMTBweDtcXG59XFxuLnBsYWNlbWVudC1pbmZve1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbi5nYW1lLWNvbnRlbnR7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNTBweDtcXG59XFxuLmdhbWVib2FyZC1jb250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyNTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xcbn1cXG4ubGVmdC1zaWRlLC5yaWdodC1zaWRle1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgbWluLXdpZHRoOiA0MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5kaXNwbGF5LWdyaWQsLmF0dGFjay1ncmlkLCAucmV2ZWFsLWdyaWR7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCBibGFjaztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsMWZyKTtcXG59XFxuLmdhbWUtaW5mb3tcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICB3aWR0aDogNTAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk1NzVDRDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1kZWVwLXB1cnBsZS02MDApIDtcXG59XFxuLnN1bmt7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvZXhwbG9zaW9uLnBuZyk7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG4uZGlzcGxheS1ncmlkIGRpdi5taXNzLCAuYXR0YWNrLWdyaWQgZGl2Lm1pc3MsIC5yZXZlYWwtZ3JpZCBkaXYubWlzc3tcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUtMzAwKTtcXG59XFxuXFxuLmF0dGFjay1ncmlkIGRpdi5zdW5re1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLTUwMCk7XFxufVxcbi5tb2RhbC1jb250YWluZXJ7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxuICB6LWluZGV4OiAxMDA7XFxuICB0b3A6IDAlO1xcbiAgbGVmdDogMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XFxufVxcbi5tb2RhbHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xcbiAgaGVpZ2h0OiAyMTBweDtcXG4gIHdpZHRoOiAzMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubW9kYWwgaDJ7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG59XFxuXFxuLm1vZGFsLWJ0bi1jb250YWluZXJ7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG4ubW9kYWwtYnRuLWNvbnRhaW5lciBidXR0b257XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogODBweDtcXG4gIG1hcmdpbjogMHB4IDIwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDNweCByZ2IoMTAxLCAxMDEsIDEwMSk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbiNidG4teWVze1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVhbC02MDApO1xcbn1cXG4jYnRuLW5ve1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLTUwMCk7XFxufVxcbi5wYXNzLXNjcmVlbntcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWVwLXB1cnBsZS02MDApO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDcwcHg7XFxuICB6LWluZGV4OiAxMDA7XFxufVxcbi5wYXNzLXNjcmVlbiBidXR0b257XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBwYWRkaW5nOiA4cHggMjRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDNweCByZ2JhKDAsIDAsIDAsMC4yKTtcXG59XFxuLnBhc3Mtc2NyZWVuIGgxe1xcbiAgZm9udC1zaXplOiA0OHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4ucGFzcy1zY3JlZW4gYnV0dG9uOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVhbC04MDApO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4uc2hvdy1zY3JlZW57XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gJy4vc2hpcCc7XG5cbmNvbnN0IEdhbWVib2FyZCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZ2FtZWJvYXJkID0gX2NyZWF0ZUJvYXJkKCk7XG5cbiAgLy8gc2hpcCBmYWN0b3JpZXNcbiAgY29uc3QgY2FycmllciA9IFNoaXAoNSwgJ2NhcnJpZXInKTtcbiAgY29uc3QgYmF0dGxlc2hpcCA9IFNoaXAoNCwgJ2JhdHRsZXNoaXAnKTtcbiAgY29uc3QgZGVzdHJveWVyID0gU2hpcCgzLCAnZGVzdHJveWVyJyk7XG4gIGNvbnN0IHN1Ym1hcmluZSA9IFNoaXAoMywgJ3N1Ym1hcmluZScpO1xuICBjb25zdCBib2F0ID0gU2hpcCgyLCAnYm9hdCcpO1xuXG4gIC8vIGdldHRlcnNcbiAgY29uc3QgZ2V0R2FtZWJvYXJkID0gKCkgPT4ge1xuICAgIHJldHVybiBnYW1lYm9hcmQ7XG4gIH07XG4gIGNvbnN0IGdldFNoaXBMb2NhdGlvbiA9ICgpID0+IHtcbiAgICByZXR1cm4gc2hpcExvY2F0aW9uO1xuICB9O1xuXG4gIC8vIHNoaXAgbG9jYXRpb24gZGF0YVxuICBjb25zdCBzaGlwTG9jYXRpb24gPSB7XG4gICAgY2FycmllcjogW10sXG4gICAgYmF0dGxlc2hpcDogW10sXG4gICAgZGVzdHJveWVyOiBbXSxcbiAgICBzdWJtYXJpbmU6IFtdLFxuICAgIGJvYXQ6IFtdLFxuICB9O1xuXG4gIGZ1bmN0aW9uIF9jcmVhdGVCb2FyZCgpIHtcbiAgICBjb25zdCBib2FyZCA9IFtdO1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgMTA7IHkrKykge1xuICAgICAgY29uc3QgY29sID0gW107XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDEwOyB4KyspIHtcbiAgICAgICAgY29sLnB1c2goJ08nKTtcbiAgICAgIH1cbiAgICAgIGJvYXJkLnB1c2goY29sKTtcbiAgICB9XG4gICAgcmV0dXJuIGJvYXJkO1xuICB9XG4gIC8vIGNoZWNrIG5vLW92ZXJsYXBwaW5nIHNoaXBzXG4gIGZ1bmN0aW9uIF9pc1BsYWNlYWJsZVNxdWFyZSh4LCB5KSB7XG4gICAgaWYgKGdhbWVib2FyZFt4XVt5XSAhPT0gJ08nKSByZXR1cm4gZmFsc2U7XG4gICAgZWxzZSBpZiAoZ2FtZWJvYXJkW3hdW3ldID09PSAnTycpIHJldHVybiB0cnVlO1xuICB9XG4gIC8vIHBhc3MgeCx5IHRvIHNoaXAgbG9jYXRpb25cbiAgZnVuY3Rpb24gX3N0b3JlU2hpcExvYWN0aW9uKHgsIHksIHNoaXBuYW1lKSB7XG4gICAgY29uc3QgeHBvcyA9IHg7XG4gICAgY29uc3QgeXBvcyA9IHk7XG4gICAgc2hpcExvY2F0aW9uW3NoaXBuYW1lXS5wdXNoKHsgeDogeHBvcywgeTogeXBvcyB9KTtcbiAgfVxuICBmdW5jdGlvbiBfZ2V0U2hpcEJ5TmFtZShuYW1lKSB7XG4gICAgaWYgKG5hbWUgPT09ICdjYXJyaWVyJykge1xuICAgICAgcmV0dXJuIGNhcnJpZXI7XG4gICAgfSBlbHNlIGlmIChuYW1lID09PSAnYmF0dGxlc2hpcCcpIHtcbiAgICAgIHJldHVybiBiYXR0bGVzaGlwO1xuICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ2Rlc3Ryb3llcicpIHtcbiAgICAgIHJldHVybiBkZXN0cm95ZXI7XG4gICAgfSBlbHNlIGlmIChuYW1lID09PSAnc3VibWFyaW5lJykge1xuICAgICAgcmV0dXJuIHN1Ym1hcmluZTtcbiAgICB9IGVsc2UgaWYgKG5hbWUgPT09ICdib2F0Jykge1xuICAgICAgcmV0dXJuIGJvYXQ7XG4gICAgfVxuICB9XG4gIC8vIHBsYWNlIHNoaXAgYnkgdGhlIFwiaGVhZFwiXG4gIGNvbnN0IHBsYWNlU2hpcCA9IGZ1bmN0aW9uICh4LCB5LCBzaGlwbmFtZSwgaG9yaXpvbnRhbCkge1xuICAgIGlmICh4ID4gOSB8fCB5ID4gOSkgcmV0dXJuIGZhbHNlO1xuICAgIGNvbnN0IHNoaXAgPSBfZ2V0U2hpcEJ5TmFtZShzaGlwbmFtZSk7XG4gICAgY29uc3QgbGVuZ3RoID0gc2hpcC5zaGlwTGVuZ3RoO1xuXG4gICAgaWYgKGhvcml6b250YWwpIHtcbiAgICAgIC8vIGNoZWNrIGJvdW5kc1xuICAgICAgaWYgKHggKyBsZW5ndGggPiAxMCkgcmV0dXJuIGZhbHNlO1xuICAgICAgLy8gbG9vayByaWdodFxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoIV9pc1BsYWNlYWJsZVNxdWFyZSh4ICsgaSwgeSkpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZ2FtZWJvYXJkW3ggKyBqXVt5XSA9ICdYJztcbiAgICAgICAgX3N0b3JlU2hpcExvYWN0aW9uKHggKyBqLCB5LCBzaGlwbmFtZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY2hlY2sgYm91bmRzXG4gICAgICBpZiAoeSArIGxlbmd0aCA+IDEwKSByZXR1cm4gZmFsc2U7XG4gICAgICAvLyBsb29rIGRvd25cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCFfaXNQbGFjZWFibGVTcXVhcmUoeCwgeSArIGkpKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxlbmd0aDsgaisrKSB7XG4gICAgICAgIGdhbWVib2FyZFt4XVt5ICsgal0gPSAnWCc7XG4gICAgICAgIF9zdG9yZVNoaXBMb2FjdGlvbih4LCB5ICsgaiwgc2hpcG5hbWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9O1xuICAvLyBjaGVja3MgdGhlIGdhbWVib2FyZCwgWCBpcyB1bnN1bmsgc2hpcCwgTyBpcyB1bmhpdCB3YXRlciwgUyBpcyBzdW5rIHNoaXAsIEggaXMgaGl0IHdhdGVyXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgIGlmIChnYW1lYm9hcmRbeF1beV0gPT09ICdYJyB8fCBnYW1lYm9hcmRbeF1beV0gPT09ICdPJykge1xuICAgICAgaWYgKGdhbWVib2FyZFt4XVt5XSA9PT0gJ1gnKSB7XG4gICAgICAgIGdhbWVib2FyZFt4XVt5XSA9ICdTJztcbiAgICAgICAgc3RydWNrU2hpcCh4LCB5KTtcbiAgICAgIH0gZWxzZSBpZiAoZ2FtZWJvYXJkW3hdW3ldID09PSAnTycpIHtcbiAgICAgICAgZ2FtZWJvYXJkW3hdW3ldID0gJ0gnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHJldHVybiBmYWxzZTtcbiAgfTtcbiAgLy8gY2hlY2tzIGlmIHNoaXAgd2FzIHN0cnVjayBhbmQgYXBwbHlzIGhpdCB0byBzaGlwIGluc3RhbmNlXG4gIGNvbnN0IHN0cnVja1NoaXAgPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgIGZvciAoY29uc3Qga2V5IGluIHNoaXBMb2NhdGlvbikge1xuICAgICAgY29uc3Qgc2hpcCA9IF9nZXRTaGlwQnlOYW1lKGtleSk7XG4gICAgICBjb25zdCBsZW5ndGggPSBzaGlwTG9jYXRpb25ba2V5XS5sZW5ndGg7XG4gICAgICBsZXQgcG9zaXRpb24gPSAxO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgc2hpcExvY2F0aW9uW2tleV1baV1bJ3gnXSA9PT0geCAmJlxuICAgICAgICAgIHNoaXBMb2NhdGlvbltrZXldW2ldWyd5J10gPT09IHlcbiAgICAgICAgKSB7XG4gICAgICAgICAgc2hpcC5oaXQocG9zaXRpb24pO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHBvc2l0aW9uKys7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbiAgY29uc3QgaXNGbGVldERlc3Ryb3llZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoXG4gICAgICBjYXJyaWVyLmlzU3VuaygpID09PSB0cnVlICYmXG4gICAgICBiYXR0bGVzaGlwLmlzU3VuaygpID09PSB0cnVlICYmXG4gICAgICBkZXN0cm95ZXIuaXNTdW5rKCkgPT09IHRydWUgJiZcbiAgICAgIHN1Ym1hcmluZS5pc1N1bmsoKSA9PT0gdHJ1ZSAmJlxuICAgICAgYm9hdC5pc1N1bmsoKSA9PT0gdHJ1ZVxuICAgICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldEdhbWVib2FyZCxcbiAgICBnZXRTaGlwTG9jYXRpb24sXG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgc3RydWNrU2hpcCxcbiAgICBpc0ZsZWV0RGVzdHJveWVkLFxuICB9O1xufTtcblxuZXhwb3J0IHsgR2FtZWJvYXJkIH07XG4iLCJpbXBvcnQgeyBnYW1lVmlldyB9IGZyb20gJy4uL3ZpZXdzL2dhbWVWaWV3JztcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vcGxheWVyJztcblxuY29uc3QgZ2FtZUNvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xuICBsZXQgcGxheWVyMSwgcGxheWVyMiwgZ2FtZW1vZGUsIHR1cm5ObywgY3VycmVudFBsYXllclR1cm4sIGlzR2FtZW92ZXI7XG4gIGNvbnN0IGNyZWF0ZVBsYXllcjEgPSBmdW5jdGlvbiAoYm9hcmQpIHtcbiAgICBwbGF5ZXIxID0gUGxheWVyKCk7XG4gICAgaWYgKGJvYXJkID09PSBudWxsKSB7XG4gICAgICBwbGF5ZXIxLnBsYWNlUmFuZG9tKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBsYXllcjEubWFrZUJvYXJkKGJvYXJkKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2cocGxheWVyMS5nYW1lYm9hcmQuZ2V0U2hpcExvY2F0aW9uKCkpO1xuICB9O1xuICBjb25zdCBjcmVhdGVQbGF5ZXIyID0gZnVuY3Rpb24gKGJvYXJkKSB7XG4gICAgcGxheWVyMiA9IFBsYXllcigpO1xuICAgIGlmIChib2FyZCA9PT0gbnVsbCkge1xuICAgICAgcGxheWVyMi5wbGFjZVJhbmRvbSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwbGF5ZXIyLm1ha2VCb2FyZChib2FyZCk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHBsYXllcjIuZ2FtZWJvYXJkLmdldFNoaXBMb2NhdGlvbigpKTtcbiAgfTtcbiAgY29uc3Qgc3RhcnRHYW1lID0gZnVuY3Rpb24gKG1vZGUpIHtcbiAgICBnYW1lbW9kZSA9IG1vZGUgPT09ICdwbGF5ZXInID8gJ3BsYXllcicgOiAnY3B1JztcbiAgICBjdXJyZW50UGxheWVyVHVybiA9IDE7XG4gICAgdHVybk5vID0gMTtcbiAgICBpc0dhbWVvdmVyID0gZmFsc2U7XG4gIH07XG4gIGNvbnN0IGdldFBsYXllck9uZVNoaXBzID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBwbGF5ZXIxLmdhbWVib2FyZC5nZXRTaGlwTG9jYXRpb24oKTtcbiAgfTtcbiAgY29uc3QgZ2V0UGxheWVyVHdvU2hpcHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHBsYXllcjIuZ2FtZWJvYXJkLmdldFNoaXBMb2NhdGlvbigpO1xuICB9O1xuICBjb25zdCBnZXRQbGF5ZXJPbmVCb2FyZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcGxheWVyMS5nYW1lYm9hcmQuZ2V0R2FtZWJvYXJkKCk7XG4gIH07XG4gIGNvbnN0IGdldFBsYXllclR3b0JvYXJkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBwbGF5ZXIyLmdhbWVib2FyZC5nZXRHYW1lYm9hcmQoKTtcbiAgfTtcbiAgY29uc3QgY2hhbmdlVHVybiA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgaWYgKGlzR2FtZW92ZXIpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoY3VycmVudFBsYXllclR1cm4gPT09IDEgJiYgZ2FtZW1vZGUgPT09ICdwbGF5ZXInKSB7XG4gICAgICBpZiAocGxheWVyMi50YWtlQXR0YWNrKHgsIHkpKSB7XG4gICAgICAgIGlmIChwbGF5ZXIyLmNoZWNrTG9zZSgpID09PSB0cnVlKSB7XG4gICAgICAgICAgaXNHYW1lb3ZlciA9IHRydWU7XG4gICAgICAgICAgZ2FtZVZpZXcubG9hZFdpbigxLCBnYW1lbW9kZSk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNoaXAgPSBnZXRQbGF5ZXJUd29TaGlwcygpO1xuICAgICAgICBjb25zdCBkaXNwbGF5Qm9hcmQgPSBnZXRQbGF5ZXJUd29Cb2FyZCgpO1xuICAgICAgICBjb25zdCBhdHRhY2tib2FyZCA9IGdldFBsYXllck9uZUJvYXJkKCk7XG4gICAgICAgIC8vIGxvYWQgcGxheWVyIDIncyB2aWV3XG4gICAgICAgIGN1cnJlbnRQbGF5ZXJUdXJuID0gMjtcbiAgICAgICAgZ2FtZVZpZXcubG9hZFR1cm4oXG4gICAgICAgICAgc2hpcCxcbiAgICAgICAgICBkaXNwbGF5Qm9hcmQsXG4gICAgICAgICAgYXR0YWNrYm9hcmQsXG4gICAgICAgICAgY3VycmVudFBsYXllclR1cm4sXG4gICAgICAgICAgdHVybk5vLFxuICAgICAgICAgIGdhbWVtb2RlXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2ludmFsaWQgbW92ZScpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjdXJyZW50UGxheWVyVHVybiA9PT0gMiAmJiBnYW1lbW9kZSA9PT0gJ3BsYXllcicpIHtcbiAgICAgIGlmIChwbGF5ZXIxLnRha2VBdHRhY2soeCwgeSkpIHtcbiAgICAgICAgaWYgKHBsYXllcjEuY2hlY2tMb3NlKCkgPT09IHRydWUpIHtcbiAgICAgICAgICBpc0dhbWVvdmVyID0gdHJ1ZTtcbiAgICAgICAgICBnYW1lVmlldy5sb2FkV2luKDIsIGdhbWVtb2RlKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2hpcCA9IGdldFBsYXllck9uZVNoaXBzKCk7XG4gICAgICAgIGNvbnN0IGRpc3BsYXlCb2FyZCA9IGdldFBsYXllck9uZUJvYXJkKCk7XG4gICAgICAgIGNvbnN0IGF0dGFja0JvYXJkID0gZ2V0UGxheWVyVHdvQm9hcmQoKTtcbiAgICAgICAgLy8gbG9hZCBwbGF5ZXIgMSdzIHZpZXdcbiAgICAgICAgY3VycmVudFBsYXllclR1cm4gPSAxO1xuICAgICAgICB0dXJuTm8rKztcbiAgICAgICAgZ2FtZVZpZXcubG9hZFR1cm4oXG4gICAgICAgICAgc2hpcCxcbiAgICAgICAgICBkaXNwbGF5Qm9hcmQsXG4gICAgICAgICAgYXR0YWNrQm9hcmQsXG4gICAgICAgICAgY3VycmVudFBsYXllclR1cm4sXG4gICAgICAgICAgdHVybk5vLFxuICAgICAgICAgIGdhbWVtb2RlXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2ludmFsaWQgbW92ZScpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChnYW1lbW9kZSA9PT0gJ2NwdScpIHtcbiAgICAgIGlmIChwbGF5ZXIyLnRha2VBdHRhY2soeCwgeSkpIHtcbiAgICAgICAgaWYgKHBsYXllcjIuY2hlY2tMb3NlKCkgPT09IHRydWUpIHtcbiAgICAgICAgICBpc0dhbWVvdmVyID0gdHJ1ZTtcbiAgICAgICAgICBnYW1lVmlldy5sb2FkV2luKDEsIGdhbWVtb2RlKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcGxheWVyMS50YWtlUmFuZG9tQXR0YWNrKCk7XG4gICAgICAgIGlmIChwbGF5ZXIxLmNoZWNrTG9zZSgpID09PSB0cnVlKSB7XG4gICAgICAgICAgaXNHYW1lb3ZlciA9IHRydWU7XG4gICAgICAgICAgZ2FtZVZpZXcubG9hZFdpbigyLCBnYW1lbW9kZSk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHR1cm5ObysrO1xuICAgICAgICBjb25zdCBzaGlwID0gZ2V0UGxheWVyT25lU2hpcHMoKTtcbiAgICAgICAgY29uc3QgZGlzcGxheUJvYXJkID0gZ2V0UGxheWVyT25lQm9hcmQoKTtcbiAgICAgICAgY29uc3QgYXR0YWNrQm9hcmQgPSBnZXRQbGF5ZXJUd29Cb2FyZCgpO1xuICAgICAgICBnYW1lVmlldy5sb2FkVHVybihcbiAgICAgICAgICBzaGlwLFxuICAgICAgICAgIGRpc3BsYXlCb2FyZCxcbiAgICAgICAgICBhdHRhY2tCb2FyZCxcbiAgICAgICAgICBjdXJyZW50UGxheWVyVHVybixcbiAgICAgICAgICB0dXJuTm8sXG4gICAgICAgICAgZ2FtZW1vZGVcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgc3RhcnRHYW1lLFxuICAgIGNyZWF0ZVBsYXllcjEsXG4gICAgY3JlYXRlUGxheWVyMixcbiAgICBnZXRQbGF5ZXJPbmVTaGlwcyxcbiAgICBnZXRQbGF5ZXJUd29TaGlwcyxcbiAgICBnZXRQbGF5ZXJPbmVCb2FyZCxcbiAgICBnZXRQbGF5ZXJUd29Cb2FyZCxcbiAgICBjaGFuZ2VUdXJuLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IHsgZ2FtZUNvbnRyb2xsZXIgfTtcbiIsImNvbnN0IGhlbHBlciA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHJhbmRvbVRydWVPckZhbHNlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKSA9PT0gMCA/IGZhbHNlIDogdHJ1ZTtcbiAgfTtcbiAgY29uc3QgZ2V0UmFuZG9tSW50ID0gZnVuY3Rpb24gKG4pIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbik7XG4gIH07XG4gIGNvbnN0IHNoaXBJbmZvID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBpZiAobmFtZSA9PT0gJ2NhcnJpZXInKSB7XG4gICAgICByZXR1cm4geyBzaGlwOiBuYW1lLCBsZW5ndGg6IDUgfTtcbiAgICB9IGVsc2UgaWYgKG5hbWUgPT09ICdiYXR0bGVzaGlwJykge1xuICAgICAgcmV0dXJuIHsgc2hpcDogbmFtZSwgbGVuZ3RoOiA0IH07XG4gICAgfSBlbHNlIGlmIChuYW1lID09PSAnZGVzdHJveWVyJykge1xuICAgICAgcmV0dXJuIHsgc2hpcDogbmFtZSwgbGVuZ3RoOiAzIH07XG4gICAgfSBlbHNlIGlmIChuYW1lID09PSAnc3VibWFyaW5lJykge1xuICAgICAgcmV0dXJuIHsgc2hpcDogbmFtZSwgbGVuZ3RoOiAzIH07XG4gICAgfSBlbHNlIGlmIChuYW1lID09PSAnYm9hdCcpIHtcbiAgICAgIHJldHVybiB7IHNoaXA6IG5hbWUsIGxlbmd0aDogMiB9O1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHsgcmFuZG9tVHJ1ZU9yRmFsc2UsIGdldFJhbmRvbUludCwgc2hpcEluZm8gfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGhlbHBlciB9O1xuIiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSAnLi9nYW1lYm9hcmQnO1xuaW1wb3J0IHsgaGVscGVyIH0gZnJvbSAnLi9oZWxwZXInO1xuXG5jb25zdCBQbGF5ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGdhbWVib2FyZCA9IEdhbWVib2FyZCgpO1xuXG4gIGNvbnN0IHBsYWNlUmFuZG9tID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHNoaXBzID0gWydjYXJyaWVyJywgJ2JhdHRsZXNoaXAnLCAnZGVzdHJveWVyJywgJ3N1Ym1hcmluZScsICdib2F0J107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgd2hpbGUgKFxuICAgICAgICAhZ2FtZWJvYXJkLnBsYWNlU2hpcChcbiAgICAgICAgICBoZWxwZXIuZ2V0UmFuZG9tSW50KDEwKSxcbiAgICAgICAgICBoZWxwZXIuZ2V0UmFuZG9tSW50KDEwKSxcbiAgICAgICAgICBzaGlwc1tpXSxcbiAgICAgICAgICBoZWxwZXIucmFuZG9tVHJ1ZU9yRmFsc2UoKVxuICAgICAgICApXG4gICAgICApIHt9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IGZ1bmN0aW9uICh4LCB5LCBzaGlwbmFtZSwgaXNIb3Jpem9udGFsKSB7XG4gICAgcmV0dXJuIGdhbWVib2FyZC5wbGFjZVNoaXAoeCwgeSwgc2hpcG5hbWUsIGlzSG9yaXpvbnRhbCk7XG4gIH07XG5cbiAgY29uc3QgdGFrZUF0dGFjayA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgcmV0dXJuIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICB9O1xuXG4gIGNvbnN0IHRha2VSYW5kb21BdHRhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgbW92ZXMgPSBnZXRMZWdpYmxlUGxhY2VtZW50KCk7XG4gICAgY29uc3QgbGVuZ3RoID0gbW92ZXMubGVuZ3RoO1xuICAgIGNvbnN0IHBsYWNlbWVudCA9IG1vdmVzW2hlbHBlci5nZXRSYW5kb21JbnQobGVuZ3RoKV07XG4gICAgdGFrZUF0dGFjayguLi5wbGFjZW1lbnQpO1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrTG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZ2FtZWJvYXJkLmlzRmxlZXREZXN0cm95ZWQoKTtcbiAgfTtcbiAgY29uc3QgbWFrZUJvYXJkID0gZnVuY3Rpb24gKGJvYXJkKSB7XG4gICAgZm9yIChjb25zdCBzaGlwIGluIGJvYXJkKSB7XG4gICAgICBjb25zdCB4cG9zID0gYm9hcmRbc2hpcF0ubG9jYXRpb25bMF1bJ3gnXTtcbiAgICAgIGNvbnN0IHlwb3MgPSBib2FyZFtzaGlwXS5sb2NhdGlvblswXVsneSddO1xuICAgICAgY29uc3QgaXNIb3Jpem9udGFsID0gYm9hcmRbc2hpcF0uZmFjaW5nID09PSAnaG9yaXpvbnRhbCcgPyB0cnVlIDogZmFsc2U7XG4gICAgICBwbGFjZVNoaXAoeHBvcywgeXBvcywgc2hpcCwgaXNIb3Jpem9udGFsKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiBnYW1lYm9hcmQ7XG5cbiAgZnVuY3Rpb24gZ2V0TGVnaWJsZVBsYWNlbWVudCgpIHtcbiAgICBjb25zdCBsZWdpYmxlTW92ZXMgPSBbXTtcbiAgICBjb25zdCBib2FyZCA9IGdhbWVib2FyZC5nZXRHYW1lYm9hcmQoKTtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDEwOyB4KyspIHtcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgMTA7IHkrKykge1xuICAgICAgICBpZiAoYm9hcmRbeF1beV0gPT09ICdPJyB8fCBib2FyZFt4XVt5XSA9PT0gJ1gnKSB7XG4gICAgICAgICAgbGVnaWJsZU1vdmVzLnB1c2goW3gsIHldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbGVnaWJsZU1vdmVzO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnYW1lYm9hcmQsXG4gICAgZ2V0TGVnaWJsZVBsYWNlbWVudCxcbiAgICBnZXRCb2FyZCxcbiAgICBwbGFjZVNoaXAsXG4gICAgcGxhY2VSYW5kb20sXG4gICAgdGFrZVJhbmRvbUF0dGFjayxcbiAgICBjaGVja0xvc2UsXG4gICAgdGFrZUF0dGFjayxcbiAgICBtYWtlQm9hcmQsXG4gIH07XG59O1xuXG5leHBvcnQgeyBQbGF5ZXIgfTtcbiIsImNvbnN0IFNoaXAgPSBmdW5jdGlvbiAobGVuZ3RoKSB7XG4gIGNvbnN0IHNoaXBMZW5ndGggPSBsZW5ndGg7XG4gIGxldCBkYW1hZ2UgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGRhbWFnZS5wdXNoKGZhbHNlKTtcbiAgfVxuICBjb25zdCBoaXQgPSBmdW5jdGlvbiAocG9zaXRpb24pIHtcbiAgICBpZiAocG9zaXRpb24gPiBsZW5ndGgpIHJldHVybjtcbiAgICBkYW1hZ2VbcG9zaXRpb24gLSAxXSA9IHRydWU7XG4gIH07XG4gIGNvbnN0IGlzU3VuayA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZGFtYWdlLmluY2x1ZGVzKGZhbHNlKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSByZXR1cm4gdHJ1ZTtcbiAgfTtcbiAgcmV0dXJuIHsgaGl0LCBpc1N1bmssIHNoaXBMZW5ndGggfTtcbn07XG5cbmV4cG9ydCB7IFNoaXAgfTtcbiIsImltcG9ydCB7IGdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi4vYXBwL2dhbWVjb250cm9sbGVyJztcbmNvbnN0IGdhbWVWaWV3ID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhcmdldCcpO1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gYFxuICA8ZGl2IGNsYXNzPVwiZ2FtZS1jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJnYW1lLWluZm9cIj48aDI+VHVybiAxOiBQbGF5ZXIgT25lJ3MgdHVybjwvaDI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJnYW1lYm9hcmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtc2lkZVwiPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyaWdodC1zaWRlXCI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gIGA7XG4gIGxldCBsZWZ0U2lkZSwgcmlnaHRTaWRlLCBhdHRhY2tHcmlkLCBkaXNwbGF5R3JpZCwgcGFzc1NjcmVlbjtcblxuICBjb25zdCBpbml0aWFsaXplID0gZnVuY3Rpb24gKCkge1xuICAgIHRhcmdldC5pbm5lckhUTUwgPSBgYDtcbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgX3NldFVwQXR0YWNrR3JpZCgpO1xuICAgIF9zZXRVcERpc3BsYXlHcmlkKCk7XG4gICAgX3NldFVwUGFzc1NjcmVlbigpO1xuICAgIGxlZnRTaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnQtc2lkZScpO1xuICAgIHJpZ2h0U2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yaWdodC1zaWRlJyk7XG4gICAgbGVmdFNpZGUuYXBwZW5kQ2hpbGQoZGlzcGxheUdyaWQpO1xuICAgIHJpZ2h0U2lkZS5hcHBlbmRDaGlsZChhdHRhY2tHcmlkKTtcbiAgICByZW5kZXJBdHRhY2tHcmlkKGdhbWVDb250cm9sbGVyLmdldFBsYXllclR3b0JvYXJkKCkpO1xuICAgIHJlbmRlckRpc3BsYXlHcmlkKFxuICAgICAgZ2FtZUNvbnRyb2xsZXIuZ2V0UGxheWVyT25lU2hpcHMoKSxcbiAgICAgIGdhbWVDb250cm9sbGVyLmdldFBsYXllck9uZUJvYXJkKClcbiAgICApO1xuICB9O1xuICBmdW5jdGlvbiBfc2V0VXBBdHRhY2tHcmlkKCkge1xuICAgIGF0dGFja0dyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhdHRhY2tHcmlkLmNsYXNzTGlzdC5hZGQoJ2F0dGFjay1ncmlkJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdhdHRhY2stZ3JpZC1zcXVhcmUnKTtcbiAgICAgICAgc3F1YXJlLmRhdGFzZXQueCA9IGo7XG4gICAgICAgIHNxdWFyZS5kYXRhc2V0LnkgPSBpO1xuICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHhwb3MgPSBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LngpO1xuICAgICAgICAgIGNvbnN0IHlwb3MgPSBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnkpO1xuICAgICAgICAgIGdhbWVDb250cm9sbGVyLmNoYW5nZVR1cm4oeHBvcywgeXBvcyk7XG4gICAgICAgIH0pO1xuICAgICAgICBhdHRhY2tHcmlkLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIF9zZXRVcERpc3BsYXlHcmlkKCkge1xuICAgIGRpc3BsYXlHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGlzcGxheUdyaWQuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1ncmlkJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LWdyaWQtc3F1YXJlJyk7XG4gICAgICAgIHNxdWFyZS5kYXRhc2V0LnggPSBqO1xuICAgICAgICBzcXVhcmUuZGF0YXNldC55ID0gaTtcbiAgICAgICAgZGlzcGxheUdyaWQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gX3NldFVwUGFzc1NjcmVlbigpIHtcbiAgICBwYXNzU2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhc3Mtc2NyZWVuJyk7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bhc3Mtc2NyZWVuLWJ0bicpO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgICBwYXNzU2NyZWVuLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3ctc2NyZWVuJylcbiAgICApO1xuICB9XG4gIGZ1bmN0aW9uIF9zaG93UGFzc1NjcmVlbihjdXJyZW50UGxheWVyKSB7XG4gICAgcGFzc1NjcmVlbi5jbGFzc0xpc3QuYWRkKCdzaG93LXNjcmVlbicpO1xuICAgIGNvbnN0IHRleHRJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bhc3Mtc2NyZWVuLWluZm8nKTtcbiAgICB0ZXh0SW5mby50ZXh0Q29udGVudCA9IGBQYXNzIHRoZSBkZXZpY2UgdG8gUGxheWVyICR7XG4gICAgICBjdXJyZW50UGxheWVyID09PSAxID8gJ09uZScgOiAnVHdvJ1xuICAgIH1gO1xuICB9XG4gIGNvbnN0IHJlbmRlckF0dGFja0dyaWQgPSBmdW5jdGlvbiAoYm9hcmQpIHtcbiAgICBjb25zdCBzcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmF0dGFjay1ncmlkLXNxdWFyZScpO1xuICAgIHNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgnc3VuaycpO1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ21pc3MnKTtcblxuICAgICAgY29uc3QgeXBvcyA9IHBhcnNlSW50KHNxdWFyZS5kYXRhc2V0LnkpO1xuICAgICAgY29uc3QgeHBvcyA9IHBhcnNlSW50KHNxdWFyZS5kYXRhc2V0LngpO1xuICAgICAgaWYgKGJvYXJkW3hwb3NdW3lwb3NdID09PSAnUycpIHtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3N1bmsnKTtcbiAgICAgIH0gZWxzZSBpZiAoYm9hcmRbeHBvc11beXBvc10gPT09ICdIJykge1xuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICBjb25zdCByZW5kZXJEaXNwbGF5R3JpZCA9IGZ1bmN0aW9uIChzaGlwcywgYm9hcmQpIHtcbiAgICBjb25zdCBzcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRpc3BsYXktZ3JpZC1zcXVhcmUnKTtcbiAgICBzcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgICAgJ21pc3MnLFxuICAgICAgICAnc3VuaycsXG4gICAgICAgICdjYXJyaWVyLWNvbG9yJyxcbiAgICAgICAgJ2JhdHRsZXNoaXAtY29sb3InLFxuICAgICAgICAnZGVzdHJveWVyLWNvbG9yJyxcbiAgICAgICAgJ3N1Ym1hcmluZS1jb2xvcicsXG4gICAgICAgICdib2F0LWNvbG9yJyxcbiAgICAgIF07XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSguLi5jbGFzc2VzKTtcbiAgICAgIGNvbnN0IHlwb3MgPSBwYXJzZUludChzcXVhcmUuZGF0YXNldC55KTtcbiAgICAgIGNvbnN0IHhwb3MgPSBwYXJzZUludChzcXVhcmUuZGF0YXNldC54KTtcbiAgICAgIGlmIChib2FyZFt4cG9zXVt5cG9zXSA9PT0gJ0gnKSB7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICB9IGVsc2UgaWYgKGJvYXJkW3hwb3NdW3lwb3NdID09PSAnUycpIHtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3N1bmsnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBmb3IgKGNvbnN0IHNoaXAgaW4gc2hpcHMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHNbc2hpcF0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgeHBvcyA9IHNoaXBzW3NoaXBdW2ldWyd4J107XG4gICAgICAgIGNvbnN0IHlwb3MgPSBzaGlwc1tzaGlwXVtpXVsneSddO1xuICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGAuZGlzcGxheS1ncmlkLXNxdWFyZVtkYXRhLXg9XCIke3hwb3N9XCJdW2RhdGEteT1cIiR7eXBvc31cIl1gXG4gICAgICAgICk7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKGAke3NoaXB9LWNvbG9yYCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBmdW5jdGlvbiBzd2l0Y2hHcmlkUG9zKGFjdGl2ZVBsYXllcikge1xuICAgIGlmIChhY3RpdmVQbGF5ZXIgPT09IDIpIHtcbiAgICAgIGxlZnRTaWRlLnJlbW92ZUNoaWxkKGRpc3BsYXlHcmlkKTtcbiAgICAgIHJpZ2h0U2lkZS5yZW1vdmVDaGlsZChhdHRhY2tHcmlkKTtcbiAgICAgIGxlZnRTaWRlLmFwcGVuZENoaWxkKGF0dGFja0dyaWQpO1xuICAgICAgcmlnaHRTaWRlLmFwcGVuZENoaWxkKGRpc3BsYXlHcmlkKTtcbiAgICB9IGVsc2UgaWYgKGFjdGl2ZVBsYXllciA9PT0gMSkge1xuICAgICAgbGVmdFNpZGUucmVtb3ZlQ2hpbGQoYXR0YWNrR3JpZCk7XG4gICAgICByaWdodFNpZGUucmVtb3ZlQ2hpbGQoZGlzcGxheUdyaWQpO1xuICAgICAgbGVmdFNpZGUuYXBwZW5kQ2hpbGQoZGlzcGxheUdyaWQpO1xuICAgICAgcmlnaHRTaWRlLmFwcGVuZENoaWxkKGF0dGFja0dyaWQpO1xuICAgIH1cbiAgfVxuICBjb25zdCBsb2FkVHVybiA9IGZ1bmN0aW9uIChcbiAgICBzaGlwcyxcbiAgICBkaXNwbGF5Qm9hcmQsXG4gICAgYXR0YWNrQm9hcmQsXG4gICAgY3VycmVudFBsYXllcixcbiAgICB0dXJuTm8sXG4gICAgbW9kZVxuICApIHtcbiAgICBpZiAobW9kZSA9PT0gJ3BsYXllcicpIHtcbiAgICAgIF9zaG93UGFzc1NjcmVlbihjdXJyZW50UGxheWVyKTtcbiAgICAgIHN3aXRjaEdyaWRQb3MoY3VycmVudFBsYXllcik7XG4gICAgfVxuICAgIHJlbmRlckF0dGFja0dyaWQoYXR0YWNrQm9hcmQpO1xuICAgIHJlbmRlckRpc3BsYXlHcmlkKHNoaXBzLCBkaXNwbGF5Qm9hcmQpO1xuICAgIHVwZGF0ZUluZm8oY3VycmVudFBsYXllciwgdHVybk5vKTtcbiAgfTtcbiAgZnVuY3Rpb24gdXBkYXRlSW5mbyhjdXJyZW50UGxheWVyLCB0dXJuTm8pIHtcbiAgICBjb25zdCBwbGF5ZXIgPSBjdXJyZW50UGxheWVyID09PSAxID8gJ09uZScgOiAnVHdvJztcbiAgICBjb25zdCBpbmZvRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLWluZm8gaDInKTtcbiAgICBpbmZvRWxlbWVudC50ZXh0Q29udGVudCA9IGBUdXJuICR7dHVybk5vfTogUGxheWVyICR7cGxheWVyfSdzIHR1cm5gO1xuICB9XG4gIGZ1bmN0aW9uIF9zZXRVcE1vZGFsKHdpbm5lciwgbW9kZSkge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwtY29udGFpbmVyJyk7XG4gICAgbW9kYWwuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbFwiPlxuICAgICAgICA8aDIgY2xhc3M9XCJ3aW5uZXJcIj48L2gyPlxuICAgICAgICA8aDM+UGxheSBhZ2Fpbj88L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYnRuLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxidXR0b24gaWQ9XCJidG4teWVzXCI+WWVzPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBpZD1cImJ0bi1ub1wiPk5vPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+YDtcbiAgICBjb25zdCBib2R5RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBib2R5RWxlbWVudC5hcHBlbmRDaGlsZChtb2RhbCk7XG4gICAgY29uc3Qgd2lubmVyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5uZXInKTtcbiAgICBpZiAobW9kZSA9PT0gJ2NwdScgJiYgd2lubmVyID09PSAyKSB7XG4gICAgICB3aW5uZXJFbGVtZW50LnRleHRDb250ZW50ID0gJ1lvdSBsb3N0Lic7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbm5lckVsZW1lbnQudGV4dENvbnRlbnQgPVxuICAgICAgICB3aW5uZXIgPT09IDEgPyBgUGxheWVyIE9uZSBoYXMgd29uIWAgOiAnUGxheWVyIFR3byBoYXMgd29uISc7XG4gICAgfVxuICAgIGNvbnN0IHllc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG4teWVzJyk7XG4gICAgY29uc3Qgbm9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuLW5vJyk7XG4gICAgeWVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbG9jYXRpb24ucmVsb2FkKCkpO1xuICAgIG5vQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gYm9keUVsZW1lbnQucmVtb3ZlQ2hpbGQobW9kYWwpKTtcbiAgfVxuICBmdW5jdGlvbiBfY3JlYXRlUmV2ZWFsR3JpZChzaGlwcywgYm9hcmQpIHtcbiAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdyZXZlYWwtZ3JpZCcpO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgncmV2ZWFsLWdyaWQtc3F1YXJlJyk7XG4gICAgICAgIHNxdWFyZS5kYXRhc2V0LnggPSBqO1xuICAgICAgICBzcXVhcmUuZGF0YXNldC55ID0gaTtcblxuICAgICAgICBpZiAoYm9hcmRbaV1bal0gPT09ICdIJykge1xuICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICAgIH0gZWxzZSBpZiAoYm9hcmRbaV1bal0gPT09ICdTJykge1xuICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzdW5rJyk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBzaGlwIGluIHNoaXBzKSB7XG4gICAgICAgICAgZm9yIChsZXQgeiA9IDA7IHogPCBzaGlwc1tzaGlwXS5sZW5ndGg7IHorKykge1xuICAgICAgICAgICAgY29uc3QgeHBvcyA9IHNoaXBzW3NoaXBdW3pdWyd4J107XG4gICAgICAgICAgICBjb25zdCB5cG9zID0gc2hpcHNbc2hpcF1bel1bJ3knXTtcbiAgICAgICAgICAgIGlmIChpID09PSB4cG9zICYmIGogPT09IHlwb3MpIHNxdWFyZS5jbGFzc0xpc3QuYWRkKGAke3NoaXB9LWNvbG9yYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGdyaWQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGdyaWQ7XG4gIH1cbiAgY29uc3QgbG9hZFdpbiA9IGZ1bmN0aW9uICh3aW5uZXIsIG1vZGUpIHtcbiAgICBfc2V0VXBNb2RhbCh3aW5uZXIsIG1vZGUpO1xuICAgIGlmICh3aW5uZXIgPT09IDEgfHwgbW9kZSA9PT0gJ2NwdScpIHtcbiAgICAgIGxlZnRTaWRlLnJlbW92ZUNoaWxkKGRpc3BsYXlHcmlkKTtcbiAgICAgIHJpZ2h0U2lkZS5yZW1vdmVDaGlsZChhdHRhY2tHcmlkKTtcbiAgICB9IGVsc2UgaWYgKHdpbm5lciA9PT0gMikge1xuICAgICAgbGVmdFNpZGUucmVtb3ZlQ2hpbGQoYXR0YWNrR3JpZCk7XG4gICAgICByaWdodFNpZGUucmVtb3ZlQ2hpbGQoZGlzcGxheUdyaWQpO1xuICAgIH1cbiAgICBsZWZ0U2lkZS5hcHBlbmRDaGlsZChcbiAgICAgIF9jcmVhdGVSZXZlYWxHcmlkKFxuICAgICAgICBnYW1lQ29udHJvbGxlci5nZXRQbGF5ZXJPbmVTaGlwcygpLFxuICAgICAgICBnYW1lQ29udHJvbGxlci5nZXRQbGF5ZXJPbmVCb2FyZCgpXG4gICAgICApXG4gICAgKTtcbiAgICByaWdodFNpZGUuYXBwZW5kQ2hpbGQoXG4gICAgICBfY3JlYXRlUmV2ZWFsR3JpZChcbiAgICAgICAgZ2FtZUNvbnRyb2xsZXIuZ2V0UGxheWVyVHdvU2hpcHMoKSxcbiAgICAgICAgZ2FtZUNvbnRyb2xsZXIuZ2V0UGxheWVyVHdvQm9hcmQoKVxuICAgICAgKVxuICAgICk7XG4gICAgaWYgKG1vZGUgPT09ICdjcHUnKSB7XG4gICAgICBjb25zdCB3aW5uZXJUZXh0ID0gd2lubmVyID09PSAxID8gJ1lvdSBoYXZlIHdvbiEnIDogJ1lvdSBoYXZlIGxvc3QuJztcbiAgICAgIGNvbnN0IGluZm9FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtaW5mbyBoMicpO1xuICAgICAgaW5mb0VsZW1lbnQudGV4dENvbnRlbnQgPSB3aW5uZXJUZXh0O1xuICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gJ3BsYXllcicpIHtcbiAgICAgIGNvbnN0IHdpbm5lclRleHQgPSB3aW5uZXIgPT09IDEgPyAnT25lJyA6ICdUd28nO1xuICAgICAgY29uc3QgaW5mb0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1pbmZvIGgyJyk7XG4gICAgICBpbmZvRWxlbWVudC50ZXh0Q29udGVudCA9IGBQbGF5ZXIgJHt3aW5uZXJUZXh0fSBoYXMgd29uIWA7XG4gICAgfVxuICB9O1xuICByZXR1cm4geyBpbml0aWFsaXplLCByZW5kZXJBdHRhY2tHcmlkLCBsb2FkVHVybiwgbG9hZFdpbiB9O1xufSkoKTtcbmV4cG9ydCB7IGdhbWVWaWV3IH07XG4iLCJpbXBvcnQgeyBnYW1lQ29udHJvbGxlciB9IGZyb20gJy4uL2FwcC9nYW1lY29udHJvbGxlcic7XG5pbXBvcnQgeyBoZWxwZXIgfSBmcm9tICcuLi9hcHAvaGVscGVyJztcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4uL2FwcC9wbGF5ZXInO1xuaW1wb3J0IHsgZ2FtZVZpZXcgfSBmcm9tICcuL2dhbWVWaWV3JztcbmNvbnN0IHBsYWNlbWVudFZpZXcgPSAoZnVuY3Rpb24gKCkge1xuICBsZXQgc2VsZWN0ZWRTaGlwO1xuICBsZXQgcGxhY2VtZW50T3JpZW50YXRpb247XG4gIGxldCBnYW1lbW9kZTtcbiAgbGV0IHBsYXllcnNTZXQgPSAwO1xuICBjb25zdCBzaGlwRGF0YSA9IHtcbiAgICBjYXJyaWVyOiB7IGxvY2F0aW9uOiBbXSwgZmFjaW5nOiBudWxsIH0sXG4gICAgYmF0dGxlc2hpcDogeyBsb2NhdGlvbjogW10sIGZhY2luZzogbnVsbCB9LFxuICAgIGRlc3Ryb3llcjogeyBsb2NhdGlvbjogW10sIGZhY2luZzogbnVsbCB9LFxuICAgIHN1Ym1hcmluZTogeyBsb2NhdGlvbjogW10sIGZhY2luZzogbnVsbCB9LFxuICAgIGJvYXQ6IHsgbG9jYXRpb246IFtdLCBmYWNpbmc6IG51bGwgfSxcbiAgfTtcbiAgbGV0IHBsYWNlbWVudEdyaWQ7XG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhcmdldCcpO1xuICBjb25zdCBpbml0aWFsaXplID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJtYWluLWNvbnRlbnRcIj5cbiAgICA8aDIgY2xhc3M9XCJwbGFjZW1lbnQtaW5mb1wiPlBsYXllciBuIGNob29zZSBib2FyZDwvaDI+XG4gICAgPGRpdiBjbGFzcz1cInBsYWNlbWVudC1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJidXR0b24tcGFuZWxcIj5cbiAgICAgICAgPGJ1dHRvbiBpZD1cInJvdGF0ZS1idG5cIj5Sb3RhdGU8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBpZD1cInJhbmRvbWlzZS1idG5cIj5SYW5kb21pc2U8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBpZD1cInJlc2V0LWJ0blwiPlJlc2V0PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gaWQ9XCJnby1idG5cIiBkaXNhYmxlZD5HbzwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicGxhY2VtZW50LWdyaWRcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzaGlwLXBhbmVsXCI+XG4gICAgICAgIDxoMz5QbGFjZSB5b3VyIHNoaXBzPC9oMz5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNoaXAtYnV0dG9uLWNvbnRhaW5lclwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICAgIGA7XG4gICAgcGxhY2VtZW50R3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGFjZW1lbnQtZ3JpZCcpO1xuICAgIHNlbGVjdGVkU2hpcCA9IG51bGw7XG4gICAgcGxhY2VtZW50T3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCc7XG4gICAgX2NsZWFyU2hpcERhdGEoKTtcbiAgICBfdXBkYXRlVHVybkRpc3BsYXkoKTtcbiAgICBfbWFrZVBsYWNlbWVudEdyaWQoKTtcbiAgICBfbWFrZUJ1dHRvbnMoKTtcbiAgICBfc2V0VXBDb250cm9sQnRucygpO1xuICB9O1xuICBjb25zdCBzZXRHYW1lbW9kZSA9IGZ1bmN0aW9uIChtb2RlKSB7XG4gICAgaWYgKG1vZGUgPT09ICdwbGF5ZXInKSB7XG4gICAgICBnYW1lbW9kZSA9IG1vZGU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKG1vZGUgPT09ICdjcHUnKSB7XG4gICAgICBnYW1lbW9kZSA9IG1vZGU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xuICB9O1xuICBmdW5jdGlvbiBfbWFrZVBsYWNlbWVudEdyaWQoKSB7XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCAxMDsgeSsrKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDEwOyB4KyspIHtcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdwbGFjZW1lbnQtZ3JpZC1zcXVhcmUnKTtcbiAgICAgICAgc3F1YXJlLmRhdGFzZXQueSA9IHk7XG4gICAgICAgIHNxdWFyZS5kYXRhc2V0LnggPSB4O1xuICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIChlKSA9PiB7XG4gICAgICAgICAgaWYgKHNlbGVjdGVkU2hpcCA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIGRpc3BsYXlTaGlwT25WaWV3KHgsIHkpO1xuICAgICAgICB9KTtcbiAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoZSkgPT4ge1xuICAgICAgICAgIGNsZWFyRGlzcGxheVNoaXAoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgJ2NvbnRleHRtZW51JyxcbiAgICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3Qgc2hpcE5hbWUgPSBlLnRhcmdldC5kYXRhc2V0LnNoaXB0eXBlO1xuICAgICAgICAgICAgaWYgKHJlbW92ZVNoaXAoc2hpcE5hbWUpKSB7XG4gICAgICAgICAgICAgIHJlbmRlckdyaWQoKTtcbiAgICAgICAgICAgICAgX21ha2VCdXR0b25zKCk7XG4gICAgICAgICAgICAgIGNsZWFyRGlzcGxheVNoaXAoKTtcbiAgICAgICAgICAgICAgZGlzcGxheVNoaXBPblZpZXcoeCwgeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWxzZVxuICAgICAgICApO1xuICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKHNlbGVjdGVkU2hpcCA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICAgIGlmIChhZGRTaGlwKHgsIHksIHNlbGVjdGVkU2hpcCwgcGxhY2VtZW50T3JpZW50YXRpb24pKSB7XG4gICAgICAgICAgICByZW5kZXJHcmlkKCk7XG4gICAgICAgICAgICBzZWxlY3RlZFNoaXAgPSBudWxsO1xuICAgICAgICAgICAgX21ha2VCdXR0b25zKCk7XG4gICAgICAgICAgICBjbGVhckRpc3BsYXlTaGlwKCk7XG4gICAgICAgICAgICBkaXNwbGF5U2hpcE9uVmlldyh4LCB5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHBsYWNlbWVudEdyaWQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gX3NldFVwQ29udHJvbEJ0bnMoKSB7XG4gICAgY29uc3Qgcm90YXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JvdGF0ZS1idG4nKTtcbiAgICBjb25zdCByZXNldEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNldC1idG4nKTtcbiAgICBjb25zdCByYW5kb21CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmFuZG9taXNlLWJ0bicpO1xuICAgIGNvbnN0IGdvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dvLWJ0bicpO1xuICAgIHJvdGF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHBsYWNlbWVudE9yaWVudGF0aW9uID1cbiAgICAgICAgcGxhY2VtZW50T3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJyA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCc7XG4gICAgfSk7XG4gICAgcmVzZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICByZW1vdmVTaGlwKCdjYXJyaWVyJyk7XG4gICAgICByZW1vdmVTaGlwKCdiYXR0bGVzaGlwJyk7XG4gICAgICByZW1vdmVTaGlwKCdkZXN0cm95ZXInKTtcbiAgICAgIHJlbW92ZVNoaXAoJ3N1Ym1hcmluZScpO1xuICAgICAgcmVtb3ZlU2hpcCgnYm9hdCcpO1xuICAgICAgcmVuZGVyR3JpZCgpO1xuICAgICAgX21ha2VCdXR0b25zKCk7XG4gICAgfSk7XG4gICAgcmFuZG9tQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcmVtb3ZlU2hpcCgnY2FycmllcicpO1xuICAgICAgcmVtb3ZlU2hpcCgnYmF0dGxlc2hpcCcpO1xuICAgICAgcmVtb3ZlU2hpcCgnZGVzdHJveWVyJyk7XG4gICAgICByZW1vdmVTaGlwKCdzdWJtYXJpbmUnKTtcbiAgICAgIHJlbW92ZVNoaXAoJ2JvYXQnKTtcbiAgICAgIGNvbnN0IGJvYXJkID0gX2dldFJhbmRvbUJvYXJkKCk7XG4gICAgICBfYWRkUmFuZG9tQm9hcmQoYm9hcmQpO1xuICAgICAgX21ha2VCdXR0b25zKCk7XG4gICAgICByZW5kZXJHcmlkKCk7XG4gICAgICBzZWxlY3RlZFNoaXAgPSBudWxsO1xuICAgIH0pO1xuICAgIGdvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKGdhbWVtb2RlID09PSAnY3B1Jykge1xuICAgICAgICBjb25zb2xlLmxvZygnZ2FtZSBzdGFydGVkJyk7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gT2JqZWN0LmFzc2lnbih7fSwgc2hpcERhdGEpO1xuICAgICAgICBnYW1lQ29udHJvbGxlci5jcmVhdGVQbGF5ZXIxKGJvYXJkKTtcbiAgICAgICAgZ2FtZUNvbnRyb2xsZXIuY3JlYXRlUGxheWVyMihudWxsKTtcbiAgICAgICAgZ2FtZUNvbnRyb2xsZXIuc3RhcnRHYW1lKGdhbWVtb2RlKTtcbiAgICAgICAgZ2FtZVZpZXcuaW5pdGlhbGl6ZSgpO1xuICAgICAgfSBlbHNlIGlmIChnYW1lbW9kZSA9PT0gJ3BsYXllcicpIHtcbiAgICAgICAgaWYgKHBsYXllcnNTZXQgPT09IDApIHtcbiAgICAgICAgICBwbGF5ZXJzU2V0Kys7XG4gICAgICAgICAgY29uc3QgYm9hcmQgPSBPYmplY3QuYXNzaWduKHt9LCBzaGlwRGF0YSk7XG4gICAgICAgICAgZ2FtZUNvbnRyb2xsZXIuY3JlYXRlUGxheWVyMShib2FyZCk7XG4gICAgICAgICAgaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKHBsYXllcnNTZXQgPT09IDEpIHtcbiAgICAgICAgICBjb25zdCBib2FyZCA9IE9iamVjdC5hc3NpZ24oe30sIHNoaXBEYXRhKTtcbiAgICAgICAgICBnYW1lQ29udHJvbGxlci5jcmVhdGVQbGF5ZXIyKGJvYXJkKTtcbiAgICAgICAgICBjb25zb2xlLmxvZygncGxheWVyIDIgc2V0Jyk7XG4gICAgICAgICAgZ2FtZUNvbnRyb2xsZXIuc3RhcnRHYW1lKGdhbWVtb2RlKTtcbiAgICAgICAgICBnYW1lVmlldy5pbml0aWFsaXplKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICAvLyByZXR1cm5zIHRydWUgb3IgZmFsc2UgaWYgbW91c2VvdmVyIHNxYXVyZSBpcyBhIHZhbGlkIHBsYWNlbWVudFxuICBmdW5jdGlvbiBjaGVja1ZhbGlkUGxhY2VtZW50KHgsIHksIGxlbmd0aCwgb3JpZW50YXRpb24pIHtcbiAgICAvLyBjaGVjayBvdXQgb2YgYm91bmRzXG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIGlmICh4ICsgbGVuZ3RoID4gMTApIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICBpZiAoeSArIGxlbmd0aCA+IDEwKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIGNoZWNrIG5vIG92ZXJsYXAsIGVubnVtZXJhdGUgc2hpcGxvY2F0aW9uXG4gICAgZm9yIChsZXQgc2hpcCBpbiBzaGlwRGF0YSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaGlwRGF0YVtzaGlwXS5sb2NhdGlvbi5sZW5ndGg7IGorKykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgY2hlY2tYID0gb3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJyA/IHggKyBpIDogeDtcbiAgICAgICAgICBjb25zdCBjaGVja1kgPSBvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJyA/IHkgKyBpIDogeTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBzaGlwRGF0YVtzaGlwXVsnbG9jYXRpb24nXVtqXVsneCddID09PSBjaGVja1ggJiZcbiAgICAgICAgICAgIHNoaXBEYXRhW3NoaXBdWydsb2NhdGlvbiddW2pdWyd5J10gPT09IGNoZWNrWVxuICAgICAgICAgIClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvLyBoaWdobGlnaHQgcmVkIG9yIGdyZWVuIHNoaXAgb24gZ3JpZFxuICBmdW5jdGlvbiBkaXNwbGF5U2hpcE9uVmlldyh4LCB5KSB7XG4gICAgaWYgKHNlbGVjdGVkU2hpcCA9PT0gbnVsbCkgcmV0dXJuO1xuICAgIGNvbnN0IGxlbmd0aCA9IGhlbHBlci5zaGlwSW5mbyhzZWxlY3RlZFNoaXApLmxlbmd0aDtcbiAgICBjb25zdCBvcmllbnRhdGlvbiA9IHBsYWNlbWVudE9yaWVudGF0aW9uO1xuICAgIGNvbnN0IGlzVmFsaWQgPSBjaGVja1ZhbGlkUGxhY2VtZW50KHgsIHksIGxlbmd0aCwgb3JpZW50YXRpb24pO1xuXG4gICAgaWYgKGlzVmFsaWQpXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHhwb3MgPSBvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnID8geCArIGkgOiB4O1xuICAgICAgICBjb25zdCB5cG9zID0gb3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcgPyB5ICsgaSA6IHk7XG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYFtkYXRhLXg9XCIke3hwb3N9XCJdW2RhdGEteT1cIiR7eXBvc31cIl1gXG4gICAgICAgICk7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCd2YWxpZC1zcXVhcmUnKTtcbiAgICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgeHBvcyA9IG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcgPyB4ICsgaSA6IHg7XG4gICAgICAgIGNvbnN0IHlwb3MgPSBvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJyA/IHkgKyBpIDogeTtcbiAgICAgICAgaWYgKHhwb3MgPiA5IHx8IHlwb3MgPiA5KSBicmVhaztcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgW2RhdGEteD1cIiR7eHBvc31cIl1bZGF0YS15PVwiJHt5cG9zfVwiXWBcbiAgICAgICAgKTtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQtc3F1YXJlJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIGNsZWFycyB2YWxpZCBvciBpbnZhbGlkIHNxdWFyZSB3aGVuIGhvdmVyaW5nXG4gIGZ1bmN0aW9uIGNsZWFyRGlzcGxheVNoaXAoKSB7XG4gICAgY29uc3Qgc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGFjZW1lbnQtZ3JpZCA+IConKTtcbiAgICBzcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQtc3F1YXJlJyk7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgndmFsaWQtc3F1YXJlJyk7XG4gICAgfSk7XG4gIH1cbiAgLy8gY2FsbGJhY2sgZm9yIGNsaWNrIHNxdWFyZSBwbGFjZW1lbnQgZXZlbnQgaWYgdmFsaWQgcGxhY2VkXG4gIGZ1bmN0aW9uIGFkZFNoaXAoeCwgeSwgbmFtZSwgb3JpZW50YXRpb24pIHtcbiAgICBjb25zdCBsZW5ndGggPSBoZWxwZXIuc2hpcEluZm8obmFtZSkubGVuZ3RoO1xuICAgIGlmICghY2hlY2tWYWxpZFBsYWNlbWVudCh4LCB5LCBsZW5ndGgsIG9yaWVudGF0aW9uKSkge1xuICAgICAgY29uc29sZS5sb2coJ25vdCBwb3NzaWJsZScpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoc2hpcERhdGFbbmFtZV0ubG9jYXRpb24ubGVuZ3RoICE9PSAwKSB7XG4gICAgICBhbGVydChgJHtuYW1lfSBhbHJlYWR5IGV4aXN0c2ApO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gLy9wcmV2ZW50cyBvdmVyd3JpdGluZ1xuICAgIGNvbnN0IGxvY2F0aW9uID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY29vcmQgPSB7fTtcbiAgICAgIGNvbnN0IHhwb3MgPSBvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnID8geCArIGkgOiB4O1xuICAgICAgY29uc3QgeXBvcyA9IG9yaWVudGF0aW9uID09PSAndmVydGljYWwnID8geSArIGkgOiB5O1xuICAgICAgY29vcmQueCA9IHhwb3M7XG4gICAgICBjb29yZC55ID0geXBvcztcbiAgICAgIGxvY2F0aW9uLnB1c2goY29vcmQpO1xuICAgIH1cbiAgICBzaGlwRGF0YVtuYW1lXS5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuICAgIHNoaXBEYXRhW25hbWVdLmZhY2luZyA9IG9yaWVudGF0aW9uO1xuICAgIF9jaGVja1N0YXJ0Q29uZGl0aW9uKCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgZnVuY3Rpb24gcmVtb3ZlU2hpcChuYW1lKSB7XG4gICAgaWYgKG5hbWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZhbHNlO1xuICAgIHNoaXBEYXRhW25hbWVdLmxvY2F0aW9uID0gW107XG4gICAgc2hpcERhdGFbbmFtZV0uZmFjaW5nID0gbnVsbDtcbiAgICBfY2hlY2tTdGFydENvbmRpdGlvbigpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGZ1bmN0aW9uIHJlbmRlckdyaWQoKSB7XG4gICAgY29uc3Qgc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGFjZW1lbnQtZ3JpZCA+IConKTtcbiAgICBzcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ2NhcnJpZXItY29sb3InKTtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKCdiYXR0bGVzaGlwLWNvbG9yJyk7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgnZGVzdHJveWVyLWNvbG9yJyk7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgnc3VibWFyaW5lLWNvbG9yJyk7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgnYm9hdC1jb2xvcicpO1xuICAgICAgc3F1YXJlLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1zaGlwdHlwZScsICcnKTtcbiAgICB9KTtcbiAgICBmb3IgKGNvbnN0IHNoaXAgaW4gc2hpcERhdGEpIHtcbiAgICAgIHNoaXBEYXRhW3NoaXBdWydsb2NhdGlvbiddLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICAgIGNvbnN0IHhwb3MgPSBjb29yZC54O1xuICAgICAgICBjb25zdCB5cG9zID0gY29vcmQueTtcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgW2RhdGEteD1cIiR7eHBvc31cIl1bZGF0YS15PVwiJHt5cG9zfVwiXWBcbiAgICAgICAgKTtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoYCR7c2hpcH0tY29sb3JgKTtcbiAgICAgICAgc3F1YXJlLmRhdGFzZXQuc2hpcHR5cGUgPSBzaGlwO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIF9tYWtlQnV0dG9ucygpIHtcbiAgICBsZXQgZmlyc3QgPSBmYWxzZTtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1idXR0b24tY29udGFpbmVyJyk7XG4gICAgbGV0IGNhcnJpZXJCdG4sIGJhdHRsZXNoaXBCdG4sIGRlc3Ryb3llckJ0biwgc3VibWFyaW5lQnRuLCBib2F0QnRuO1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICBpZiAoc2hpcERhdGFbJ2NhcnJpZXInXS5sb2NhdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICAgIGNhcnJpZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGNhcnJpZXJCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdjYXJyaWVyLWJ0bicpO1xuICAgICAgY2FycmllckJ0bi50ZXh0Q29udGVudCA9ICdDYXJyaWVyJztcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJyaWVyQnRuKTtcbiAgICAgIGlmIChmaXJzdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgZmlyc3QgPSB0cnVlO1xuICAgICAgICBzZWxlY3RlZFNoaXAgPSAnY2Fycmllcic7XG4gICAgICAgIGNhcnJpZXJCdG4uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICcnKTtcbiAgICAgICAgY2FycmllckJ0bi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc2hpcERhdGFbJ2JhdHRsZXNoaXAnXS5sb2NhdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICAgIGJhdHRsZXNoaXBCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGJhdHRsZXNoaXBCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdiYXR0bGVzaGlwLWJ0bicpO1xuICAgICAgYmF0dGxlc2hpcEJ0bi50ZXh0Q29udGVudCA9ICdCYXR0bGVzaGlwJztcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChiYXR0bGVzaGlwQnRuKTtcbiAgICAgIGlmIChmaXJzdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgZmlyc3QgPSB0cnVlO1xuICAgICAgICBzZWxlY3RlZFNoaXAgPSAnYmF0dGxlc2hpcCc7XG4gICAgICAgIGJhdHRsZXNoaXBCdG4uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICcnKTtcbiAgICAgICAgYmF0dGxlc2hpcEJ0bi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc2hpcERhdGFbJ2Rlc3Ryb3llciddLmxvY2F0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZGVzdHJveWVyQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBkZXN0cm95ZXJCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdkZXN0cm95ZXItYnRuJyk7XG4gICAgICBkZXN0cm95ZXJCdG4udGV4dENvbnRlbnQgPSAnRGVzdHJveWVyJztcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXN0cm95ZXJCdG4pO1xuICAgICAgaWYgKGZpcnN0ID09PSBmYWxzZSkge1xuICAgICAgICBmaXJzdCA9IHRydWU7XG4gICAgICAgIHNlbGVjdGVkU2hpcCA9ICdkZXN0cm95ZXInO1xuICAgICAgICBkZXN0cm95ZXJCdG4uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICcnKTtcbiAgICAgICAgZGVzdHJveWVyQnRuLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzaGlwRGF0YVsnc3VibWFyaW5lJ10ubG9jYXRpb24ubGVuZ3RoID09PSAwKSB7XG4gICAgICBzdWJtYXJpbmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIHN1Ym1hcmluZUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1Ym1hcmluZS1idG4nKTtcbiAgICAgIHN1Ym1hcmluZUJ0bi50ZXh0Q29udGVudCA9ICdTdWJtYXJpbmUnO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1hcmluZUJ0bik7XG4gICAgICBpZiAoZmlyc3QgPT09IGZhbHNlKSB7XG4gICAgICAgIGZpcnN0ID0gdHJ1ZTtcbiAgICAgICAgc2VsZWN0ZWRTaGlwID0gJ3N1Ym1hcmluZSc7XG4gICAgICAgIHN1Ym1hcmluZUJ0bi5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJycpO1xuICAgICAgICBzdWJtYXJpbmVCdG4uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNoaXBEYXRhWydib2F0J10ubG9jYXRpb24ubGVuZ3RoID09PSAwKSB7XG4gICAgICBib2F0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBib2F0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnYm9hdC1idG4nKTtcbiAgICAgIGJvYXRCdG4udGV4dENvbnRlbnQgPSAnUGF0cm9sJztcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChib2F0QnRuKTtcbiAgICAgIGlmIChmaXJzdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgZmlyc3QgPSB0cnVlO1xuICAgICAgICBzZWxlY3RlZFNoaXAgPSAnYm9hdCc7XG4gICAgICAgIGJvYXRCdG4uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICcnKTtcbiAgICAgICAgYm9hdEJ0bi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFsbEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgJy5zaGlwLWJ1dHRvbi1jb250YWluZXIgPiBidXR0b24nXG4gICAgKTtcbiAgICBpZiAoc2hpcERhdGFbJ2NhcnJpZXInXS5sb2NhdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICAgIGNhcnJpZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoc2VsZWN0ZWRTaGlwID09PSAnY2FycmllcicpIHtcbiAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgIHNlbGVjdGVkU2hpcCA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWxsQnRucy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICBzZWxlY3RlZFNoaXAgPSAnY2Fycmllcic7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoc2hpcERhdGFbJ2JhdHRsZXNoaXAnXS5sb2NhdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICAgIGJhdHRsZXNoaXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoc2VsZWN0ZWRTaGlwID09PSAnYmF0dGxlc2hpcCcpIHtcbiAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgIHNlbGVjdGVkU2hpcCA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWxsQnRucy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICBzZWxlY3RlZFNoaXAgPSAnYmF0dGxlc2hpcCc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoc2hpcERhdGFbJ2Rlc3Ryb3llciddLmxvY2F0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZGVzdHJveWVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKHNlbGVjdGVkU2hpcCA9PT0gJ2Rlc3Ryb3llcicpIHtcbiAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgIHNlbGVjdGVkU2hpcCA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWxsQnRucy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICBzZWxlY3RlZFNoaXAgPSAnZGVzdHJveWVyJztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChzaGlwRGF0YVsnc3VibWFyaW5lJ10ubG9jYXRpb24ubGVuZ3RoID09PSAwKSB7XG4gICAgICBzdWJtYXJpbmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoc2VsZWN0ZWRTaGlwID09PSAnc3VibWFyaW5lJykge1xuICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgc2VsZWN0ZWRTaGlwID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGxCdG5zLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICAgIHNlbGVjdGVkU2hpcCA9ICdzdWJtYXJpbmUnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHNoaXBEYXRhWydib2F0J10ubG9jYXRpb24ubGVuZ3RoID09PSAwKSB7XG4gICAgICBib2F0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKHNlbGVjdGVkU2hpcCA9PT0gJ2JvYXQnKSB7XG4gICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICBzZWxlY3RlZFNoaXAgPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFsbEJ0bnMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgc2VsZWN0ZWRTaGlwID0gJ2JvYXQnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gX2dldFJhbmRvbUJvYXJkKCkge1xuICAgIGNvbnN0IHBsYXllciA9IFBsYXllcigpO1xuICAgIHBsYXllci5wbGFjZVJhbmRvbSgpO1xuICAgIGNvbnN0IGJvYXJkID0gcGxheWVyLmdldEJvYXJkKCk7XG4gICAgY29uc3QgbG9jYXRpb24gPSBib2FyZC5nZXRTaGlwTG9jYXRpb24oKTtcbiAgICByZXR1cm4gbG9jYXRpb247XG4gIH1cbiAgZnVuY3Rpb24gX2FkZFJhbmRvbUJvYXJkKGJvYXJkKSB7XG4gICAgZm9yIChsZXQgc2hpcCBpbiBib2FyZCkge1xuICAgICAgbGV0IHNoaXBPcmllbnRhdGlvbjtcbiAgICAgIGNvbnN0IGNvb3JkWCA9IGJvYXJkW3NoaXBdWzBdWyd4J107XG4gICAgICBjb25zdCBjb29yZFkgPSBib2FyZFtzaGlwXVswXVsneSddO1xuICAgICAgaWYgKGJvYXJkW3NoaXBdWzFdWyd4J10gLSBib2FyZFtzaGlwXVswXVsneCddID09PSAxKSB7XG4gICAgICAgIHNoaXBPcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJztcbiAgICAgIH0gZWxzZSBzaGlwT3JpZW50YXRpb24gPSAndmVydGljYWwnO1xuICAgICAgYWRkU2hpcChjb29yZFgsIGNvb3JkWSwgc2hpcCwgc2hpcE9yaWVudGF0aW9uKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gX2NoZWNrU3RhcnRDb25kaXRpb24oKSB7XG4gICAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ28tYnRuJyk7XG4gICAgZm9yIChsZXQgc2hpcCBpbiBzaGlwRGF0YSkge1xuICAgICAgaWYgKHNoaXBEYXRhW3NoaXBdLmxvY2F0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBzdGFydEJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHN0YXJ0QnRuLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBmdW5jdGlvbiBfY2xlYXJTaGlwRGF0YSgpIHtcbiAgICBmb3IgKGxldCBzaGlwIGluIHNoaXBEYXRhKSB7XG4gICAgICBzaGlwRGF0YVtzaGlwXS5sb2NhdGlvbiA9IFtdO1xuICAgICAgc2hpcERhdGFbc2hpcF0uZmFjaW5nID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gX3VwZGF0ZVR1cm5EaXNwbGF5KCkge1xuICAgIGNvbnN0IGluZm9EaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYWNlbWVudC1pbmZvJyk7XG4gICAgaW5mb0Rpc3BsYXkudGV4dENvbnRlbnQgPSBgUGxheWVyICR7cGxheWVyc1NldCArIDF9J3MgdHVybiB0byBwbGFjZWA7XG4gIH1cblxuICByZXR1cm4geyBpbml0aWFsaXplLCBzZXRHYW1lbW9kZSB9O1xufSkoKTtcblxuZXhwb3J0IHsgcGxhY2VtZW50VmlldyB9O1xuIiwiaW1wb3J0IHsgcGxhY2VtZW50VmlldyB9IGZyb20gJy4vcGxhY2VtZW50Vmlldyc7XG5jb25zdCBzZWxlY3Rpb25WaWV3ID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhcmdldCcpO1xuICBjb25zdCBpbml0aWFsaXplID0gZnVuY3Rpb24gKCkge1xuICAgIHRhcmdldC5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cInNlbGVjdC1jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZWxlY3QtcGFuZWxcIj5cbiAgICAgICAgICA8aDI+R0FNRU1PREU8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWxlY3QtYnRuLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInBsYXllclwiPlBMQVlFUjwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNwdVwiPkNQVTwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gICAgY29uc3QgcGxheWVyTW9kZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXInKTtcbiAgICBjb25zdCBjcHVNb2RlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NwdScpO1xuICAgIHBsYXllck1vZGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAocGxhY2VtZW50Vmlldy5zZXRHYW1lbW9kZSgncGxheWVyJykpIHBsYWNlbWVudFZpZXcuaW5pdGlhbGl6ZSgpO1xuICAgIH0pO1xuICAgIGNwdU1vZGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAocGxhY2VtZW50Vmlldy5zZXRHYW1lbW9kZSgnY3B1JykpIHBsYWNlbWVudFZpZXcuaW5pdGlhbGl6ZSgpO1xuICAgIH0pO1xuICB9O1xuICByZXR1cm4geyBpbml0aWFsaXplIH07XG59KSgpO1xuZXhwb3J0IHsgc2VsZWN0aW9uVmlldyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgc2VsZWN0aW9uVmlldyB9IGZyb20gJy4vbW9kdWxlcy92aWV3cy9zZWxlY3Rpb25WaWV3Jztcblxuc2VsZWN0aW9uVmlldy5pbml0aWFsaXplKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=