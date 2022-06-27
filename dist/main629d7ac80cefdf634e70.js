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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n  font-size: 16px;\n  --teal-200: #80CBC4;\n  --deep-purple-300:#9575CD;\n  --deep-purple-600: #5E35B1;\n  --deep-purple-900: #311B92;\n  --teal-800: #00695C;\n  --red-500: #F44336;\n  --orange-800: #EF6C00;\n  --blue-800: #1565C0;\n  --pink-800:#AD1457;\n}\n*{\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Poppins', sans-serif;\n}\nbody{\n  width: 100%;\n  min-height: 100vh;\n  background-color: var(--teal-200);\n}\nheader{\n  height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nheader h1{\n  font-size: 40px;\n  color: var(--deep-purple-900);\n}\ndiv.select-content{\n  height: 100%;\n  margin: auto;\n  width: 100%;\n  min-height: 500px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\ndiv.select-panel{\n  background-color: white;\n  width: 280px;\n  height: 350px;\n  border-radius: 10px;\n  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n}\n.select-panel h2{\n  text-align: center;\n  padding: 15px;\n  margin-top: 20px;\n  margin-bottom: 60px;\n}\ndiv.target{\n  height: calc(100vh - 100px);\n  width: 100%;\n}\n.placement-grid{\n  max-height: 500px;\n  height: 500px;\n  width: 500px;\n  min-width: 500px;\n  background-color: white;\n  border: 3px solid black;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  margin: 0 100px;\n}\n.placement-grid-square{\n  border: 1px solid black;\n  background-color: white;\n  width: 100%;\n  height: 100%;\n}\n.placement-grid .valid-square{\n  background-color: var(--teal-200);\n}\n.placement-grid .invalid-square{\n  background-color: var(--red-500);\n}\n.ship-panel,.button-panel{\n  border: 3px solid black;\n  height: 500px;\n  width: 200px;\n  background-color: var(--deep-purple-300);\n}\n.button-panel, .ship-button-container{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n}\n.ship-panel{\n  display: flex;\n  flex-direction: column;\n}\n.ship-button-container{\n  flex-grow: 1;\n  padding: 15px;\n}\n.button-panel button, .ship-button-container button{\n  display: block;\n  width: 120px;\n  height: 50px;\n  border-radius: 5px;\n  border: none;\n  font-size: 16px;\n  box-shadow: 2px 2px 3px rgb(101, 101, 101);\n}\n.select-btn-container{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 50px;\n}\n.select-btn-container button{\n  display: block;\n  width: 120px;\n  padding: 10px 5px;\n  border: none;\n  background-color: var(--deep-purple-600);\n  color: white;\n  border-radius: 5px;\n}\n.select-btn-container button:hover{\n  background-color: var(--deep-purple-900);\n}\n.ship-button-container button.selected{\n  background-color: var(--teal-800);\n  color: white;\n}\n.button-panel button:hover:not(:disabled), .ship-button-container button:hover:not(.selected){\n  background-color: rgb(197, 197, 197);\n}\n.ship-panel h3{\n  text-align: center;\n  color: white;\n  padding: 10px;\n}\n.placement-grid div.carrier-color{\n  background-color: var(--teal-800);\n}\n.placement-grid div.battleship-color{\n  background-color: var(--deep-purple-900);\n}\n.placement-grid div.destroyer-color{\n  background-color: var(--orange-800);\n}\n.placement-grid div.submarine-color{\n  background-color: var(--blue-800);\n}\n.placement-grid div.boat-color{\n  background-color: var(--pink-800);\n}\ndiv.main-content{\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n.placement-container{\n  min-height: 500px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 110px;\n}\n.placement-info{\n  margin-top: 20px;\n  width: 500px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center;\n  white-space: nowrap;\n}\n.game-content{\n  height: 100%;\n  margin: auto;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 50px;\n}\n.gameboard-container{\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 250px;\n  width: 100%;\n  padding-bottom: 100px;\n}\n.left-side,.right-side{\n  width: 400px;\n  min-width: 400px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.display-grid,.attack-grid{\n  width: 400px;\n  height: 400px;\n  background-color:white;\n  border: 2px solid black;\n  display: grid;\n  grid-template-columns: repeat(10,1fr);\n  grid-template-rows: repeat(10,1fr);\n}\n.game-info{\n  margin-top: 20px;\n  width: 500px;\n  text-align: center;\n  color: white;\n  padding: 15px;\n  background-color: #9575CD;\n  border-radius: 10px;\n  border: 3px solid var(--deep-purple-600) ;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AACA;EACE,eAAe;EACf,mBAAmB;EACnB,yBAAyB;EACzB,0BAA0B;EAC1B,0BAA0B;EAC1B,mBAAmB;EACnB,kBAAkB;EAClB,qBAAqB;EACrB,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,kCAAkC;AACpC;AACA;EACE,WAAW;EACX,iBAAiB;EACjB,iCAAiC;AACnC;AACA;EACE,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,eAAe;EACf,6BAA6B;AAC/B;AACA;EACE,YAAY;EACZ,YAAY;EACZ,WAAW;EACX,iBAAiB;EACjB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,mDAAmD;AACrD;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,gBAAgB;EAChB,mBAAmB;AACrB;AACA;EACE,2BAA2B;EAC3B,WAAW;AACb;AACA;EACE,iBAAiB;EACjB,aAAa;EACb,YAAY;EACZ,gBAAgB;EAChB,uBAAuB;EACvB,uBAAuB;EACvB,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,eAAe;AACjB;AACA;EACE,uBAAuB;EACvB,uBAAuB;EACvB,WAAW;EACX,YAAY;AACd;AACA;EACE,iCAAiC;AACnC;AACA;EACE,gCAAgC;AAClC;AACA;EACE,uBAAuB;EACvB,aAAa;EACb,YAAY;EACZ,wCAAwC;AAC1C;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,6BAA6B;AAC/B;AACA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,YAAY;EACZ,aAAa;AACf;AACA;EACE,cAAc;EACd,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,0CAA0C;AAC5C;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,cAAc;EACd,YAAY;EACZ,iBAAiB;EACjB,YAAY;EACZ,wCAAwC;EACxC,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE,wCAAwC;AAC1C;AACA;EACE,iCAAiC;EACjC,YAAY;AACd;AACA;EACE,oCAAoC;AACtC;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;AACf;AACA;EACE,iCAAiC;AACnC;AACA;EACE,wCAAwC;AAC1C;AACA;EACE,mCAAmC;AACrC;AACA;EACE,iCAAiC;AACnC;AACA;EACE,iCAAiC;AACnC;AACA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;AACA;EACE,iBAAiB;EACjB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,qBAAqB;AACvB;AACA;EACE,gBAAgB;EAChB,YAAY;EACZ,gBAAgB;EAChB,uBAAuB;EACvB,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,YAAY;EACZ,YAAY;EACZ,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,UAAU;EACV,WAAW;EACX,qBAAqB;AACvB;AACA;EACE,YAAY;EACZ,gBAAgB;EAChB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,aAAa;EACb,qCAAqC;EACrC,kCAAkC;AACpC;AACA;EACE,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,yBAAyB;EACzB,mBAAmB;EACnB,yCAAyC;AAC3C","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');\n:root{\n  font-size: 16px;\n  --teal-200: #80CBC4;\n  --deep-purple-300:#9575CD;\n  --deep-purple-600: #5E35B1;\n  --deep-purple-900: #311B92;\n  --teal-800: #00695C;\n  --red-500: #F44336;\n  --orange-800: #EF6C00;\n  --blue-800: #1565C0;\n  --pink-800:#AD1457;\n}\n*{\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Poppins', sans-serif;\n}\nbody{\n  width: 100%;\n  min-height: 100vh;\n  background-color: var(--teal-200);\n}\nheader{\n  height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nheader h1{\n  font-size: 40px;\n  color: var(--deep-purple-900);\n}\ndiv.select-content{\n  height: 100%;\n  margin: auto;\n  width: 100%;\n  min-height: 500px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\ndiv.select-panel{\n  background-color: white;\n  width: 280px;\n  height: 350px;\n  border-radius: 10px;\n  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n}\n.select-panel h2{\n  text-align: center;\n  padding: 15px;\n  margin-top: 20px;\n  margin-bottom: 60px;\n}\ndiv.target{\n  height: calc(100vh - 100px);\n  width: 100%;\n}\n.placement-grid{\n  max-height: 500px;\n  height: 500px;\n  width: 500px;\n  min-width: 500px;\n  background-color: white;\n  border: 3px solid black;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  margin: 0 100px;\n}\n.placement-grid-square{\n  border: 1px solid black;\n  background-color: white;\n  width: 100%;\n  height: 100%;\n}\n.placement-grid .valid-square{\n  background-color: var(--teal-200);\n}\n.placement-grid .invalid-square{\n  background-color: var(--red-500);\n}\n.ship-panel,.button-panel{\n  border: 3px solid black;\n  height: 500px;\n  width: 200px;\n  background-color: var(--deep-purple-300);\n}\n.button-panel, .ship-button-container{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n}\n.ship-panel{\n  display: flex;\n  flex-direction: column;\n}\n.ship-button-container{\n  flex-grow: 1;\n  padding: 15px;\n}\n.button-panel button, .ship-button-container button{\n  display: block;\n  width: 120px;\n  height: 50px;\n  border-radius: 5px;\n  border: none;\n  font-size: 16px;\n  box-shadow: 2px 2px 3px rgb(101, 101, 101);\n}\n.select-btn-container{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 50px;\n}\n.select-btn-container button{\n  display: block;\n  width: 120px;\n  padding: 10px 5px;\n  border: none;\n  background-color: var(--deep-purple-600);\n  color: white;\n  border-radius: 5px;\n}\n.select-btn-container button:hover{\n  background-color: var(--deep-purple-900);\n}\n.ship-button-container button.selected{\n  background-color: var(--teal-800);\n  color: white;\n}\n.button-panel button:hover:not(:disabled), .ship-button-container button:hover:not(.selected){\n  background-color: rgb(197, 197, 197);\n}\n.ship-panel h3{\n  text-align: center;\n  color: white;\n  padding: 10px;\n}\n.placement-grid div.carrier-color{\n  background-color: var(--teal-800);\n}\n.placement-grid div.battleship-color{\n  background-color: var(--deep-purple-900);\n}\n.placement-grid div.destroyer-color{\n  background-color: var(--orange-800);\n}\n.placement-grid div.submarine-color{\n  background-color: var(--blue-800);\n}\n.placement-grid div.boat-color{\n  background-color: var(--pink-800);\n}\ndiv.main-content{\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n.placement-container{\n  min-height: 500px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 110px;\n}\n.placement-info{\n  margin-top: 20px;\n  width: 500px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center;\n  white-space: nowrap;\n}\n.game-content{\n  height: 100%;\n  margin: auto;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 50px;\n}\n.gameboard-container{\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 250px;\n  width: 100%;\n  padding-bottom: 100px;\n}\n.left-side,.right-side{\n  width: 400px;\n  min-width: 400px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.display-grid,.attack-grid{\n  width: 400px;\n  height: 400px;\n  background-color:white;\n  border: 2px solid black;\n  display: grid;\n  grid-template-columns: repeat(10,1fr);\n  grid-template-rows: repeat(10,1fr);\n}\n.game-info{\n  margin-top: 20px;\n  width: 500px;\n  text-align: center;\n  color: white;\n  padding: 15px;\n  background-color: #9575CD;\n  border-radius: 10px;\n  border: 3px solid var(--deep-purple-600) ;\n}\n"],"sourceRoot":""}]);
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
  const getGameboard = () => gameboard;
  const getShipLocation = () => shipLocation;

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
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/modules/app/player.js");


const gameController = (function () {
  let player1, player2, gamemode;
  const createPlayer1 = function (board) {
    player1 = (0,_player__WEBPACK_IMPORTED_MODULE_0__.Player)();
    if (board === null) {
      player1.placeRandom();
    } else {
      player1.makeBoard(board);
    }
    console.log(player1.gameboard.getShipLocation());
  };
  const createPlayer2 = function (board) {
    player2 = (0,_player__WEBPACK_IMPORTED_MODULE_0__.Player)();
    if (board === null) {
      player2.placeRandom();
    } else {
      player2.makeBoard(board);
    }
    console.log(player2.gameboard.getShipLocation());
  };
  const startGame = function (mode) {
    gamemode = mode === 'player' ? 'player' : 'cpu';
  };

  return { startGame, createPlayer1, createPlayer2 };
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

  const checkWin = function () {
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
    checkWin,
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
            <div class="display-grid"></div>
          </div>
          <div class="right-side">
            <div class="attack-grid"></div>
          </div>
        </div>
      </div>
  `;
  const initialize = function () {
    target.innerHTML = ``;
    target.appendChild(content);
  };
  return { initialize };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtB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Q0EsV0FBVztBQUNYLENBQUM7QUFDd0I7Ozs7Ozs7VUMxQnpCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ3lDOztBQUU5RCxrRkFBd0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvYXBwL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9hcHAvZ2FtZWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvYXBwL2hlbHBlci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9hcHAvcGxheWVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2FwcC9zaGlwLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3ZpZXdzL2dhbWVWaWV3LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3ZpZXdzL3BsYWNlbWVudFZpZXcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvdmlld3Mvc2VsZWN0aW9uVmlldy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290e1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgLS10ZWFsLTIwMDogIzgwQ0JDNDtcXG4gIC0tZGVlcC1wdXJwbGUtMzAwOiM5NTc1Q0Q7XFxuICAtLWRlZXAtcHVycGxlLTYwMDogIzVFMzVCMTtcXG4gIC0tZGVlcC1wdXJwbGUtOTAwOiAjMzExQjkyO1xcbiAgLS10ZWFsLTgwMDogIzAwNjk1QztcXG4gIC0tcmVkLTUwMDogI0Y0NDMzNjtcXG4gIC0tb3JhbmdlLTgwMDogI0VGNkMwMDtcXG4gIC0tYmx1ZS04MDA6ICMxNTY1QzA7XFxuICAtLXBpbmstODAwOiNBRDE0NTc7XFxufVxcbip7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxufVxcbmJvZHl7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVhbC0yMDApO1xcbn1cXG5oZWFkZXJ7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuaGVhZGVyIGgxe1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgY29sb3I6IHZhcigtLWRlZXAtcHVycGxlLTkwMCk7XFxufVxcbmRpdi5zZWxlY3QtY29udGVudHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogNTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5kaXYuc2VsZWN0LXBhbmVse1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB3aWR0aDogMjgwcHg7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMS45NXB4IDEuOTVweCAyLjZweDtcXG59XFxuLnNlbGVjdC1wYW5lbCBoMntcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcXG59XFxuZGl2LnRhcmdldHtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ucGxhY2VtZW50LWdyaWR7XFxuICBtYXgtaGVpZ2h0OiA1MDBweDtcXG4gIGhlaWdodDogNTAwcHg7XFxuICB3aWR0aDogNTAwcHg7XFxuICBtaW4td2lkdGg6IDUwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgbWFyZ2luOiAwIDEwMHB4O1xcbn1cXG4ucGxhY2VtZW50LWdyaWQtc3F1YXJle1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4ucGxhY2VtZW50LWdyaWQgLnZhbGlkLXNxdWFyZXtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlYWwtMjAwKTtcXG59XFxuLnBsYWNlbWVudC1ncmlkIC5pbnZhbGlkLXNxdWFyZXtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC01MDApO1xcbn1cXG4uc2hpcC1wYW5lbCwuYnV0dG9uLXBhbmVse1xcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcC1wdXJwbGUtMzAwKTtcXG59XFxuLmJ1dHRvbi1wYW5lbCwgLnNoaXAtYnV0dG9uLWNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4uc2hpcC1wYW5lbHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uc2hpcC1idXR0b24tY29udGFpbmVye1xcbiAgZmxleC1ncm93OiAxO1xcbiAgcGFkZGluZzogMTVweDtcXG59XFxuLmJ1dHRvbi1wYW5lbCBidXR0b24sIC5zaGlwLWJ1dHRvbi1jb250YWluZXIgYnV0dG9ue1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTIwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDNweCByZ2IoMTAxLCAxMDEsIDEwMSk7XFxufVxcbi5zZWxlY3QtYnRuLWNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNTBweDtcXG59XFxuLnNlbGVjdC1idG4tY29udGFpbmVyIGJ1dHRvbntcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgcGFkZGluZzogMTBweCA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWVwLXB1cnBsZS02MDApO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4uc2VsZWN0LWJ0bi1jb250YWluZXIgYnV0dG9uOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcC1wdXJwbGUtOTAwKTtcXG59XFxuLnNoaXAtYnV0dG9uLWNvbnRhaW5lciBidXR0b24uc2VsZWN0ZWR7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZWFsLTgwMCk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5idXR0b24tcGFuZWwgYnV0dG9uOmhvdmVyOm5vdCg6ZGlzYWJsZWQpLCAuc2hpcC1idXR0b24tY29udGFpbmVyIGJ1dHRvbjpob3Zlcjpub3QoLnNlbGVjdGVkKXtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTcsIDE5NywgMTk3KTtcXG59XFxuLnNoaXAtcGFuZWwgaDN7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG4ucGxhY2VtZW50LWdyaWQgZGl2LmNhcnJpZXItY29sb3J7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZWFsLTgwMCk7XFxufVxcbi5wbGFjZW1lbnQtZ3JpZCBkaXYuYmF0dGxlc2hpcC1jb2xvcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZXAtcHVycGxlLTkwMCk7XFxufVxcbi5wbGFjZW1lbnQtZ3JpZCBkaXYuZGVzdHJveWVyLWNvbG9ye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlLTgwMCk7XFxufVxcbi5wbGFjZW1lbnQtZ3JpZCBkaXYuc3VibWFyaW5lLWNvbG9ye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS04MDApO1xcbn1cXG4ucGxhY2VtZW50LWdyaWQgZGl2LmJvYXQtY29sb3J7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1waW5rLTgwMCk7XFxufVxcbmRpdi5tYWluLWNvbnRlbnR7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4ucGxhY2VtZW50LWNvbnRhaW5lcntcXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiAxMTBweDtcXG59XFxuLnBsYWNlbWVudC1pbmZve1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbi5nYW1lLWNvbnRlbnR7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNTBweDtcXG59XFxuLmdhbWVib2FyZC1jb250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyNTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xcbn1cXG4ubGVmdC1zaWRlLC5yaWdodC1zaWRle1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgbWluLXdpZHRoOiA0MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5kaXNwbGF5LWdyaWQsLmF0dGFjay1ncmlke1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsMWZyKTtcXG59XFxuLmdhbWUtaW5mb3tcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICB3aWR0aDogNTAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk1NzVDRDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1kZWVwLXB1cnBsZS02MDApIDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQiwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsa0NBQWtDO0FBQ3BDO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGlDQUFpQztBQUNuQztBQUNBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtREFBbUQ7QUFDckQ7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQ0FBbUM7RUFDbkMsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLGdDQUFnQztBQUNsQztBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixZQUFZO0VBQ1osd0NBQXdDO0FBQzFDO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLDBDQUEwQztBQUM1QztBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osd0NBQXdDO0VBQ3hDLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHdDQUF3QztBQUMxQztBQUNBO0VBQ0UsaUNBQWlDO0VBQ2pDLFlBQVk7QUFDZDtBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUNBO0VBQ0UsaUNBQWlDO0FBQ25DO0FBQ0E7RUFDRSx3Q0FBd0M7QUFDMUM7QUFDQTtFQUNFLG1DQUFtQztBQUNyQztBQUNBO0VBQ0UsaUNBQWlDO0FBQ25DO0FBQ0E7RUFDRSxpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsU0FBUztBQUNYO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLGtDQUFrQztBQUNwQztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLHlDQUF5QztBQUMzQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcCcpO1xcbjpyb290e1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgLS10ZWFsLTIwMDogIzgwQ0JDNDtcXG4gIC0tZGVlcC1wdXJwbGUtMzAwOiM5NTc1Q0Q7XFxuICAtLWRlZXAtcHVycGxlLTYwMDogIzVFMzVCMTtcXG4gIC0tZGVlcC1wdXJwbGUtOTAwOiAjMzExQjkyO1xcbiAgLS10ZWFsLTgwMDogIzAwNjk1QztcXG4gIC0tcmVkLTUwMDogI0Y0NDMzNjtcXG4gIC0tb3JhbmdlLTgwMDogI0VGNkMwMDtcXG4gIC0tYmx1ZS04MDA6ICMxNTY1QzA7XFxuICAtLXBpbmstODAwOiNBRDE0NTc7XFxufVxcbip7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxufVxcbmJvZHl7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVhbC0yMDApO1xcbn1cXG5oZWFkZXJ7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuaGVhZGVyIGgxe1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgY29sb3I6IHZhcigtLWRlZXAtcHVycGxlLTkwMCk7XFxufVxcbmRpdi5zZWxlY3QtY29udGVudHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogNTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5kaXYuc2VsZWN0LXBhbmVse1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB3aWR0aDogMjgwcHg7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMS45NXB4IDEuOTVweCAyLjZweDtcXG59XFxuLnNlbGVjdC1wYW5lbCBoMntcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcXG59XFxuZGl2LnRhcmdldHtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ucGxhY2VtZW50LWdyaWR7XFxuICBtYXgtaGVpZ2h0OiA1MDBweDtcXG4gIGhlaWdodDogNTAwcHg7XFxuICB3aWR0aDogNTAwcHg7XFxuICBtaW4td2lkdGg6IDUwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgbWFyZ2luOiAwIDEwMHB4O1xcbn1cXG4ucGxhY2VtZW50LWdyaWQtc3F1YXJle1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4ucGxhY2VtZW50LWdyaWQgLnZhbGlkLXNxdWFyZXtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlYWwtMjAwKTtcXG59XFxuLnBsYWNlbWVudC1ncmlkIC5pbnZhbGlkLXNxdWFyZXtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC01MDApO1xcbn1cXG4uc2hpcC1wYW5lbCwuYnV0dG9uLXBhbmVse1xcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcC1wdXJwbGUtMzAwKTtcXG59XFxuLmJ1dHRvbi1wYW5lbCwgLnNoaXAtYnV0dG9uLWNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4uc2hpcC1wYW5lbHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uc2hpcC1idXR0b24tY29udGFpbmVye1xcbiAgZmxleC1ncm93OiAxO1xcbiAgcGFkZGluZzogMTVweDtcXG59XFxuLmJ1dHRvbi1wYW5lbCBidXR0b24sIC5zaGlwLWJ1dHRvbi1jb250YWluZXIgYnV0dG9ue1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTIwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDNweCByZ2IoMTAxLCAxMDEsIDEwMSk7XFxufVxcbi5zZWxlY3QtYnRuLWNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNTBweDtcXG59XFxuLnNlbGVjdC1idG4tY29udGFpbmVyIGJ1dHRvbntcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgcGFkZGluZzogMTBweCA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWVwLXB1cnBsZS02MDApO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4uc2VsZWN0LWJ0bi1jb250YWluZXIgYnV0dG9uOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcC1wdXJwbGUtOTAwKTtcXG59XFxuLnNoaXAtYnV0dG9uLWNvbnRhaW5lciBidXR0b24uc2VsZWN0ZWR7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZWFsLTgwMCk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5idXR0b24tcGFuZWwgYnV0dG9uOmhvdmVyOm5vdCg6ZGlzYWJsZWQpLCAuc2hpcC1idXR0b24tY29udGFpbmVyIGJ1dHRvbjpob3Zlcjpub3QoLnNlbGVjdGVkKXtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTcsIDE5NywgMTk3KTtcXG59XFxuLnNoaXAtcGFuZWwgaDN7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG4ucGxhY2VtZW50LWdyaWQgZGl2LmNhcnJpZXItY29sb3J7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZWFsLTgwMCk7XFxufVxcbi5wbGFjZW1lbnQtZ3JpZCBkaXYuYmF0dGxlc2hpcC1jb2xvcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZXAtcHVycGxlLTkwMCk7XFxufVxcbi5wbGFjZW1lbnQtZ3JpZCBkaXYuZGVzdHJveWVyLWNvbG9ye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlLTgwMCk7XFxufVxcbi5wbGFjZW1lbnQtZ3JpZCBkaXYuc3VibWFyaW5lLWNvbG9ye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS04MDApO1xcbn1cXG4ucGxhY2VtZW50LWdyaWQgZGl2LmJvYXQtY29sb3J7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1waW5rLTgwMCk7XFxufVxcbmRpdi5tYWluLWNvbnRlbnR7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4ucGxhY2VtZW50LWNvbnRhaW5lcntcXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiAxMTBweDtcXG59XFxuLnBsYWNlbWVudC1pbmZve1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbi5nYW1lLWNvbnRlbnR7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNTBweDtcXG59XFxuLmdhbWVib2FyZC1jb250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyNTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xcbn1cXG4ubGVmdC1zaWRlLC5yaWdodC1zaWRle1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgbWluLXdpZHRoOiA0MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5kaXNwbGF5LWdyaWQsLmF0dGFjay1ncmlke1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsMWZyKTtcXG59XFxuLmdhbWUtaW5mb3tcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICB3aWR0aDogNTAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk1NzVDRDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1kZWVwLXB1cnBsZS02MDApIDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSAnLi9zaGlwJztcblxuY29uc3QgR2FtZWJvYXJkID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBnYW1lYm9hcmQgPSBfY3JlYXRlQm9hcmQoKTtcblxuICAvLyBzaGlwIGZhY3Rvcmllc1xuICBjb25zdCBjYXJyaWVyID0gU2hpcCg1LCAnY2FycmllcicpO1xuICBjb25zdCBiYXR0bGVzaGlwID0gU2hpcCg0LCAnYmF0dGxlc2hpcCcpO1xuICBjb25zdCBkZXN0cm95ZXIgPSBTaGlwKDMsICdkZXN0cm95ZXInKTtcbiAgY29uc3Qgc3VibWFyaW5lID0gU2hpcCgzLCAnc3VibWFyaW5lJyk7XG4gIGNvbnN0IGJvYXQgPSBTaGlwKDIsICdib2F0Jyk7XG5cbiAgLy8gZ2V0dGVyc1xuICBjb25zdCBnZXRHYW1lYm9hcmQgPSAoKSA9PiBnYW1lYm9hcmQ7XG4gIGNvbnN0IGdldFNoaXBMb2NhdGlvbiA9ICgpID0+IHNoaXBMb2NhdGlvbjtcblxuICAvLyBzaGlwIGxvY2F0aW9uIGRhdGFcbiAgY29uc3Qgc2hpcExvY2F0aW9uID0ge1xuICAgIGNhcnJpZXI6IFtdLFxuICAgIGJhdHRsZXNoaXA6IFtdLFxuICAgIGRlc3Ryb3llcjogW10sXG4gICAgc3VibWFyaW5lOiBbXSxcbiAgICBib2F0OiBbXSxcbiAgfTtcblxuICBmdW5jdGlvbiBfY3JlYXRlQm9hcmQoKSB7XG4gICAgY29uc3QgYm9hcmQgPSBbXTtcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IDEwOyB5KyspIHtcbiAgICAgIGNvbnN0IGNvbCA9IFtdO1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCAxMDsgeCsrKSB7XG4gICAgICAgIGNvbC5wdXNoKCdPJyk7XG4gICAgICB9XG4gICAgICBib2FyZC5wdXNoKGNvbCk7XG4gICAgfVxuICAgIHJldHVybiBib2FyZDtcbiAgfVxuICAvLyBjaGVjayBuby1vdmVybGFwcGluZyBzaGlwc1xuICBmdW5jdGlvbiBfaXNQbGFjZWFibGVTcXVhcmUoeCwgeSkge1xuICAgIGlmIChnYW1lYm9hcmRbeF1beV0gIT09ICdPJykgcmV0dXJuIGZhbHNlO1xuICAgIGVsc2UgaWYgKGdhbWVib2FyZFt4XVt5XSA9PT0gJ08nKSByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvLyBwYXNzIHgseSB0byBzaGlwIGxvY2F0aW9uXG4gIGZ1bmN0aW9uIF9zdG9yZVNoaXBMb2FjdGlvbih4LCB5LCBzaGlwbmFtZSkge1xuICAgIGNvbnN0IHhwb3MgPSB4O1xuICAgIGNvbnN0IHlwb3MgPSB5O1xuICAgIHNoaXBMb2NhdGlvbltzaGlwbmFtZV0ucHVzaCh7IHg6IHhwb3MsIHk6IHlwb3MgfSk7XG4gIH1cbiAgZnVuY3Rpb24gX2dldFNoaXBCeU5hbWUobmFtZSkge1xuICAgIGlmIChuYW1lID09PSAnY2FycmllcicpIHtcbiAgICAgIHJldHVybiBjYXJyaWVyO1xuICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ2JhdHRsZXNoaXAnKSB7XG4gICAgICByZXR1cm4gYmF0dGxlc2hpcDtcbiAgICB9IGVsc2UgaWYgKG5hbWUgPT09ICdkZXN0cm95ZXInKSB7XG4gICAgICByZXR1cm4gZGVzdHJveWVyO1xuICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ3N1Ym1hcmluZScpIHtcbiAgICAgIHJldHVybiBzdWJtYXJpbmU7XG4gICAgfSBlbHNlIGlmIChuYW1lID09PSAnYm9hdCcpIHtcbiAgICAgIHJldHVybiBib2F0O1xuICAgIH1cbiAgfVxuICAvLyBwbGFjZSBzaGlwIGJ5IHRoZSBcImhlYWRcIlxuICBjb25zdCBwbGFjZVNoaXAgPSBmdW5jdGlvbiAoeCwgeSwgc2hpcG5hbWUsIGhvcml6b250YWwpIHtcbiAgICBpZiAoeCA+IDkgfHwgeSA+IDkpIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCBzaGlwID0gX2dldFNoaXBCeU5hbWUoc2hpcG5hbWUpO1xuICAgIGNvbnN0IGxlbmd0aCA9IHNoaXAuc2hpcExlbmd0aDtcblxuICAgIGlmIChob3Jpem9udGFsKSB7XG4gICAgICAvLyBjaGVjayBib3VuZHNcbiAgICAgIGlmICh4ICsgbGVuZ3RoID4gMTApIHJldHVybiBmYWxzZTtcbiAgICAgIC8vIGxvb2sgcmlnaHRcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCFfaXNQbGFjZWFibGVTcXVhcmUoeCArIGksIHkpKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxlbmd0aDsgaisrKSB7XG4gICAgICAgIGdhbWVib2FyZFt4ICsgal1beV0gPSAnWCc7XG4gICAgICAgIF9zdG9yZVNoaXBMb2FjdGlvbih4ICsgaiwgeSwgc2hpcG5hbWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNoZWNrIGJvdW5kc1xuICAgICAgaWYgKHkgKyBsZW5ndGggPiAxMCkgcmV0dXJuIGZhbHNlO1xuICAgICAgLy8gbG9vayBkb3duXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICghX2lzUGxhY2VhYmxlU3F1YXJlKHgsIHkgKyBpKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsZW5ndGg7IGorKykge1xuICAgICAgICBnYW1lYm9hcmRbeF1beSArIGpdID0gJ1gnO1xuICAgICAgICBfc3RvcmVTaGlwTG9hY3Rpb24oeCwgeSArIGosIHNoaXBuYW1lKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfTtcbiAgLy8gY2hlY2tzIHRoZSBnYW1lYm9hcmQsIFggaXMgdW5zdW5rIHNoaXAsIE8gaXMgdW5oaXQgd2F0ZXIsIFMgaXMgc3VuayBzaGlwLCBIIGlzIGhpdCB3YXRlclxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICBpZiAoZ2FtZWJvYXJkW3hdW3ldID09PSAnWCcgfHwgZ2FtZWJvYXJkW3hdW3ldID09PSAnTycpIHtcbiAgICAgIGlmIChnYW1lYm9hcmRbeF1beV0gPT09ICdYJykge1xuICAgICAgICBnYW1lYm9hcmRbeF1beV0gPSAnUyc7XG4gICAgICAgIHN0cnVja1NoaXAoeCwgeSk7XG4gICAgICB9IGVsc2UgaWYgKGdhbWVib2FyZFt4XVt5XSA9PT0gJ08nKSB7XG4gICAgICAgIGdhbWVib2FyZFt4XVt5XSA9ICdIJztcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSByZXR1cm4gZmFsc2U7XG4gIH07XG4gIC8vIGNoZWNrcyBpZiBzaGlwIHdhcyBzdHJ1Y2sgYW5kIGFwcGx5cyBoaXQgdG8gc2hpcCBpbnN0YW5jZVxuICBjb25zdCBzdHJ1Y2tTaGlwID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzaGlwTG9jYXRpb24pIHtcbiAgICAgIGNvbnN0IHNoaXAgPSBfZ2V0U2hpcEJ5TmFtZShrZXkpO1xuICAgICAgY29uc3QgbGVuZ3RoID0gc2hpcExvY2F0aW9uW2tleV0ubGVuZ3RoO1xuICAgICAgbGV0IHBvc2l0aW9uID0gMTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHNoaXBMb2NhdGlvbltrZXldW2ldWyd4J10gPT09IHggJiZcbiAgICAgICAgICBzaGlwTG9jYXRpb25ba2V5XVtpXVsneSddID09PSB5XG4gICAgICAgICkge1xuICAgICAgICAgIHNoaXAuaGl0KHBvc2l0aW9uKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBwb3NpdGlvbisrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG4gIGNvbnN0IGlzRmxlZXREZXN0cm95ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKFxuICAgICAgY2Fycmllci5pc1N1bmsoKSA9PT0gdHJ1ZSAmJlxuICAgICAgYmF0dGxlc2hpcC5pc1N1bmsoKSA9PT0gdHJ1ZSAmJlxuICAgICAgZGVzdHJveWVyLmlzU3VuaygpID09PSB0cnVlICYmXG4gICAgICBzdWJtYXJpbmUuaXNTdW5rKCkgPT09IHRydWUgJiZcbiAgICAgIGJvYXQuaXNTdW5rKCkgPT09IHRydWVcbiAgICApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRHYW1lYm9hcmQsXG4gICAgZ2V0U2hpcExvY2F0aW9uLFxuICAgIHBsYWNlU2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIHN0cnVja1NoaXAsXG4gICAgaXNGbGVldERlc3Ryb3llZCxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IEdhbWVib2FyZCB9O1xuIiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9wbGF5ZXInO1xuXG5jb25zdCBnYW1lQ29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gIGxldCBwbGF5ZXIxLCBwbGF5ZXIyLCBnYW1lbW9kZTtcbiAgY29uc3QgY3JlYXRlUGxheWVyMSA9IGZ1bmN0aW9uIChib2FyZCkge1xuICAgIHBsYXllcjEgPSBQbGF5ZXIoKTtcbiAgICBpZiAoYm9hcmQgPT09IG51bGwpIHtcbiAgICAgIHBsYXllcjEucGxhY2VSYW5kb20oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGxheWVyMS5tYWtlQm9hcmQoYm9hcmQpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhwbGF5ZXIxLmdhbWVib2FyZC5nZXRTaGlwTG9jYXRpb24oKSk7XG4gIH07XG4gIGNvbnN0IGNyZWF0ZVBsYXllcjIgPSBmdW5jdGlvbiAoYm9hcmQpIHtcbiAgICBwbGF5ZXIyID0gUGxheWVyKCk7XG4gICAgaWYgKGJvYXJkID09PSBudWxsKSB7XG4gICAgICBwbGF5ZXIyLnBsYWNlUmFuZG9tKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBsYXllcjIubWFrZUJvYXJkKGJvYXJkKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2cocGxheWVyMi5nYW1lYm9hcmQuZ2V0U2hpcExvY2F0aW9uKCkpO1xuICB9O1xuICBjb25zdCBzdGFydEdhbWUgPSBmdW5jdGlvbiAobW9kZSkge1xuICAgIGdhbWVtb2RlID0gbW9kZSA9PT0gJ3BsYXllcicgPyAncGxheWVyJyA6ICdjcHUnO1xuICB9O1xuXG4gIHJldHVybiB7IHN0YXJ0R2FtZSwgY3JlYXRlUGxheWVyMSwgY3JlYXRlUGxheWVyMiB9O1xufSkoKTtcblxuZXhwb3J0IHsgZ2FtZUNvbnRyb2xsZXIgfTtcbiIsImNvbnN0IGhlbHBlciA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHJhbmRvbVRydWVPckZhbHNlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKSA9PT0gMCA/IGZhbHNlIDogdHJ1ZTtcbiAgfTtcbiAgY29uc3QgZ2V0UmFuZG9tSW50ID0gZnVuY3Rpb24gKG4pIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbik7XG4gIH07XG4gIGNvbnN0IHNoaXBJbmZvID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBpZiAobmFtZSA9PT0gJ2NhcnJpZXInKSB7XG4gICAgICByZXR1cm4geyBzaGlwOiBuYW1lLCBsZW5ndGg6IDUgfTtcbiAgICB9IGVsc2UgaWYgKG5hbWUgPT09ICdiYXR0bGVzaGlwJykge1xuICAgICAgcmV0dXJuIHsgc2hpcDogbmFtZSwgbGVuZ3RoOiA0IH07XG4gICAgfSBlbHNlIGlmIChuYW1lID09PSAnZGVzdHJveWVyJykge1xuICAgICAgcmV0dXJuIHsgc2hpcDogbmFtZSwgbGVuZ3RoOiAzIH07XG4gICAgfSBlbHNlIGlmIChuYW1lID09PSAnc3VibWFyaW5lJykge1xuICAgICAgcmV0dXJuIHsgc2hpcDogbmFtZSwgbGVuZ3RoOiAzIH07XG4gICAgfSBlbHNlIGlmIChuYW1lID09PSAnYm9hdCcpIHtcbiAgICAgIHJldHVybiB7IHNoaXA6IG5hbWUsIGxlbmd0aDogMiB9O1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHsgcmFuZG9tVHJ1ZU9yRmFsc2UsIGdldFJhbmRvbUludCwgc2hpcEluZm8gfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGhlbHBlciB9O1xuIiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSAnLi9nYW1lYm9hcmQnO1xuaW1wb3J0IHsgaGVscGVyIH0gZnJvbSAnLi9oZWxwZXInO1xuXG5jb25zdCBQbGF5ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGdhbWVib2FyZCA9IEdhbWVib2FyZCgpO1xuXG4gIGNvbnN0IHBsYWNlUmFuZG9tID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHNoaXBzID0gWydjYXJyaWVyJywgJ2JhdHRsZXNoaXAnLCAnZGVzdHJveWVyJywgJ3N1Ym1hcmluZScsICdib2F0J107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgd2hpbGUgKFxuICAgICAgICAhZ2FtZWJvYXJkLnBsYWNlU2hpcChcbiAgICAgICAgICBoZWxwZXIuZ2V0UmFuZG9tSW50KDEwKSxcbiAgICAgICAgICBoZWxwZXIuZ2V0UmFuZG9tSW50KDEwKSxcbiAgICAgICAgICBzaGlwc1tpXSxcbiAgICAgICAgICBoZWxwZXIucmFuZG9tVHJ1ZU9yRmFsc2UoKVxuICAgICAgICApXG4gICAgICApIHt9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IGZ1bmN0aW9uICh4LCB5LCBzaGlwbmFtZSwgaXNIb3Jpem9udGFsKSB7XG4gICAgcmV0dXJuIGdhbWVib2FyZC5wbGFjZVNoaXAoeCwgeSwgc2hpcG5hbWUsIGlzSG9yaXpvbnRhbCk7XG4gIH07XG5cbiAgY29uc3QgdGFrZUF0dGFjayA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgcmV0dXJuIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICB9O1xuXG4gIGNvbnN0IHRha2VSYW5kb21BdHRhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgbW92ZXMgPSBnZXRMZWdpYmxlUGxhY2VtZW50KCk7XG4gICAgY29uc3QgbGVuZ3RoID0gbW92ZXMubGVuZ3RoO1xuICAgIGNvbnN0IHBsYWNlbWVudCA9IG1vdmVzW2hlbHBlci5nZXRSYW5kb21JbnQobGVuZ3RoKV07XG4gICAgdGFrZUF0dGFjayguLi5wbGFjZW1lbnQpO1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrV2luID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBnYW1lYm9hcmQuaXNGbGVldERlc3Ryb3llZCgpO1xuICB9O1xuICBjb25zdCBtYWtlQm9hcmQgPSBmdW5jdGlvbiAoYm9hcmQpIHtcbiAgICBmb3IgKGNvbnN0IHNoaXAgaW4gYm9hcmQpIHtcbiAgICAgIGNvbnN0IHhwb3MgPSBib2FyZFtzaGlwXS5sb2NhdGlvblswXVsneCddO1xuICAgICAgY29uc3QgeXBvcyA9IGJvYXJkW3NoaXBdLmxvY2F0aW9uWzBdWyd5J107XG4gICAgICBjb25zdCBpc0hvcml6b250YWwgPSBib2FyZFtzaGlwXS5mYWNpbmcgPT09ICdob3Jpem9udGFsJyA/IHRydWUgOiBmYWxzZTtcbiAgICAgIHBsYWNlU2hpcCh4cG9zLCB5cG9zLCBzaGlwLCBpc0hvcml6b250YWwpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZXRCb2FyZCA9ICgpID0+IGdhbWVib2FyZDtcblxuICBmdW5jdGlvbiBnZXRMZWdpYmxlUGxhY2VtZW50KCkge1xuICAgIGNvbnN0IGxlZ2libGVNb3ZlcyA9IFtdO1xuICAgIGNvbnN0IGJvYXJkID0gZ2FtZWJvYXJkLmdldEdhbWVib2FyZCgpO1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgMTA7IHgrKykge1xuICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCAxMDsgeSsrKSB7XG4gICAgICAgIGlmIChib2FyZFt4XVt5XSA9PT0gJ08nIHx8IGJvYXJkW3hdW3ldID09PSAnWCcpIHtcbiAgICAgICAgICBsZWdpYmxlTW92ZXMucHVzaChbeCwgeV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBsZWdpYmxlTW92ZXM7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdhbWVib2FyZCxcbiAgICBnZXRMZWdpYmxlUGxhY2VtZW50LFxuICAgIGdldEJvYXJkLFxuICAgIHBsYWNlU2hpcCxcbiAgICBwbGFjZVJhbmRvbSxcbiAgICB0YWtlUmFuZG9tQXR0YWNrLFxuICAgIGNoZWNrV2luLFxuICAgIHRha2VBdHRhY2ssXG4gICAgbWFrZUJvYXJkLFxuICB9O1xufTtcblxuZXhwb3J0IHsgUGxheWVyIH07XG4iLCJjb25zdCBTaGlwID0gZnVuY3Rpb24gKGxlbmd0aCkge1xuICBjb25zdCBzaGlwTGVuZ3RoID0gbGVuZ3RoO1xuICBsZXQgZGFtYWdlID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBkYW1hZ2UucHVzaChmYWxzZSk7XG4gIH1cbiAgY29uc3QgaGl0ID0gZnVuY3Rpb24gKHBvc2l0aW9uKSB7XG4gICAgaWYgKHBvc2l0aW9uID4gbGVuZ3RoKSByZXR1cm47XG4gICAgZGFtYWdlW3Bvc2l0aW9uIC0gMV0gPSB0cnVlO1xuICB9O1xuICBjb25zdCBpc1N1bmsgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGRhbWFnZS5pbmNsdWRlcyhmYWxzZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgcmV0dXJuIHRydWU7XG4gIH07XG4gIHJldHVybiB7IGhpdCwgaXNTdW5rLCBzaGlwTGVuZ3RoIH07XG59O1xuXG5leHBvcnQgeyBTaGlwIH07XG4iLCJpbXBvcnQgeyBnYW1lQ29udHJvbGxlciB9IGZyb20gJy4uL2FwcC9nYW1lY29udHJvbGxlcic7XG5jb25zdCBnYW1lVmlldyA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXJnZXQnKTtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250ZW50LmlubmVySFRNTCA9IGBcbiAgPGRpdiBjbGFzcz1cImdhbWUtY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FtZS1pbmZvXCI+PGgyPlR1cm4gMTogUGxheWVyIE9uZSdzIHR1cm48L2gyPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FtZWJvYXJkLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LXNpZGVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaXNwbGF5LWdyaWRcIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHQtc2lkZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF0dGFjay1ncmlkXCI+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gIGA7XG4gIGNvbnN0IGluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGFyZ2V0LmlubmVySFRNTCA9IGBgO1xuICAgIHRhcmdldC5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgfTtcbiAgcmV0dXJuIHsgaW5pdGlhbGl6ZSB9O1xufSkoKTtcbmV4cG9ydCB7IGdhbWVWaWV3IH07XG4iLCJpbXBvcnQgeyBnYW1lQ29udHJvbGxlciB9IGZyb20gJy4uL2FwcC9nYW1lY29udHJvbGxlcic7XG5pbXBvcnQgeyBoZWxwZXIgfSBmcm9tICcuLi9hcHAvaGVscGVyJztcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4uL2FwcC9wbGF5ZXInO1xuaW1wb3J0IHsgZ2FtZVZpZXcgfSBmcm9tICcuL2dhbWVWaWV3JztcbmNvbnN0IHBsYWNlbWVudFZpZXcgPSAoZnVuY3Rpb24gKCkge1xuICBsZXQgc2VsZWN0ZWRTaGlwO1xuICBsZXQgcGxhY2VtZW50T3JpZW50YXRpb247XG4gIGxldCBnYW1lbW9kZTtcbiAgbGV0IHBsYXllcnNTZXQgPSAwO1xuICBjb25zdCBzaGlwRGF0YSA9IHtcbiAgICBjYXJyaWVyOiB7IGxvY2F0aW9uOiBbXSwgZmFjaW5nOiBudWxsIH0sXG4gICAgYmF0dGxlc2hpcDogeyBsb2NhdGlvbjogW10sIGZhY2luZzogbnVsbCB9LFxuICAgIGRlc3Ryb3llcjogeyBsb2NhdGlvbjogW10sIGZhY2luZzogbnVsbCB9LFxuICAgIHN1Ym1hcmluZTogeyBsb2NhdGlvbjogW10sIGZhY2luZzogbnVsbCB9LFxuICAgIGJvYXQ6IHsgbG9jYXRpb246IFtdLCBmYWNpbmc6IG51bGwgfSxcbiAgfTtcbiAgbGV0IHBsYWNlbWVudEdyaWQ7XG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhcmdldCcpO1xuICBjb25zdCBpbml0aWFsaXplID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJtYWluLWNvbnRlbnRcIj5cbiAgICA8aDIgY2xhc3M9XCJwbGFjZW1lbnQtaW5mb1wiPlBsYXllciBuIGNob29zZSBib2FyZDwvaDI+XG4gICAgPGRpdiBjbGFzcz1cInBsYWNlbWVudC1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJidXR0b24tcGFuZWxcIj5cbiAgICAgICAgPGJ1dHRvbiBpZD1cInJvdGF0ZS1idG5cIj5Sb3RhdGU8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBpZD1cInJhbmRvbWlzZS1idG5cIj5SYW5kb21pc2U8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBpZD1cInJlc2V0LWJ0blwiPlJlc2V0PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gaWQ9XCJnby1idG5cIiBkaXNhYmxlZD5HbzwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicGxhY2VtZW50LWdyaWRcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzaGlwLXBhbmVsXCI+XG4gICAgICAgIDxoMz5QbGFjZSB5b3VyIHNoaXBzPC9oMz5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNoaXAtYnV0dG9uLWNvbnRhaW5lclwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICAgIGA7XG4gICAgcGxhY2VtZW50R3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGFjZW1lbnQtZ3JpZCcpO1xuICAgIHNlbGVjdGVkU2hpcCA9IG51bGw7XG4gICAgcGxhY2VtZW50T3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCc7XG4gICAgX2NsZWFyU2hpcERhdGEoKTtcbiAgICBfdXBkYXRlVHVybkRpc3BsYXkoKTtcbiAgICBfbWFrZVBsYWNlbWVudEdyaWQoKTtcbiAgICBfbWFrZUJ1dHRvbnMoKTtcbiAgICBfc2V0VXBDb250cm9sQnRucygpO1xuICB9O1xuICBjb25zdCBzZXRHYW1lbW9kZSA9IGZ1bmN0aW9uIChtb2RlKSB7XG4gICAgaWYgKG1vZGUgPT09ICdwbGF5ZXInKSB7XG4gICAgICBnYW1lbW9kZSA9IG1vZGU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKG1vZGUgPT09ICdjcHUnKSB7XG4gICAgICBnYW1lbW9kZSA9IG1vZGU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xuICB9O1xuICBmdW5jdGlvbiBfbWFrZVBsYWNlbWVudEdyaWQoKSB7XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCAxMDsgeSsrKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDEwOyB4KyspIHtcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdwbGFjZW1lbnQtZ3JpZC1zcXVhcmUnKTtcbiAgICAgICAgc3F1YXJlLmRhdGFzZXQueSA9IHk7XG4gICAgICAgIHNxdWFyZS5kYXRhc2V0LnggPSB4O1xuICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIChlKSA9PiB7XG4gICAgICAgICAgaWYgKHNlbGVjdGVkU2hpcCA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIGRpc3BsYXlTaGlwT25WaWV3KHgsIHkpO1xuICAgICAgICB9KTtcbiAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoZSkgPT4ge1xuICAgICAgICAgIGNsZWFyRGlzcGxheVNoaXAoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgJ2NvbnRleHRtZW51JyxcbiAgICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3Qgc2hpcE5hbWUgPSBlLnRhcmdldC5kYXRhc2V0LnNoaXB0eXBlO1xuICAgICAgICAgICAgaWYgKHJlbW92ZVNoaXAoc2hpcE5hbWUpKSB7XG4gICAgICAgICAgICAgIHJlbmRlckdyaWQoKTtcbiAgICAgICAgICAgICAgX21ha2VCdXR0b25zKCk7XG4gICAgICAgICAgICAgIGNsZWFyRGlzcGxheVNoaXAoKTtcbiAgICAgICAgICAgICAgZGlzcGxheVNoaXBPblZpZXcoeCwgeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWxzZVxuICAgICAgICApO1xuICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKHNlbGVjdGVkU2hpcCA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICAgIGlmIChhZGRTaGlwKHgsIHksIHNlbGVjdGVkU2hpcCwgcGxhY2VtZW50T3JpZW50YXRpb24pKSB7XG4gICAgICAgICAgICByZW5kZXJHcmlkKCk7XG4gICAgICAgICAgICBzZWxlY3RlZFNoaXAgPSBudWxsO1xuICAgICAgICAgICAgX21ha2VCdXR0b25zKCk7XG4gICAgICAgICAgICBjbGVhckRpc3BsYXlTaGlwKCk7XG4gICAgICAgICAgICBkaXNwbGF5U2hpcE9uVmlldyh4LCB5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHBsYWNlbWVudEdyaWQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gX3NldFVwQ29udHJvbEJ0bnMoKSB7XG4gICAgY29uc3Qgcm90YXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JvdGF0ZS1idG4nKTtcbiAgICBjb25zdCByZXNldEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNldC1idG4nKTtcbiAgICBjb25zdCByYW5kb21CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmFuZG9taXNlLWJ0bicpO1xuICAgIGNvbnN0IGdvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dvLWJ0bicpO1xuICAgIHJvdGF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHBsYWNlbWVudE9yaWVudGF0aW9uID1cbiAgICAgICAgcGxhY2VtZW50T3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJyA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCc7XG4gICAgfSk7XG4gICAgcmVzZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICByZW1vdmVTaGlwKCdjYXJyaWVyJyk7XG4gICAgICByZW1vdmVTaGlwKCdiYXR0bGVzaGlwJyk7XG4gICAgICByZW1vdmVTaGlwKCdkZXN0cm95ZXInKTtcbiAgICAgIHJlbW92ZVNoaXAoJ3N1Ym1hcmluZScpO1xuICAgICAgcmVtb3ZlU2hpcCgnYm9hdCcpO1xuICAgICAgcmVuZGVyR3JpZCgpO1xuICAgICAgX21ha2VCdXR0b25zKCk7XG4gICAgfSk7XG4gICAgcmFuZG9tQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcmVtb3ZlU2hpcCgnY2FycmllcicpO1xuICAgICAgcmVtb3ZlU2hpcCgnYmF0dGxlc2hpcCcpO1xuICAgICAgcmVtb3ZlU2hpcCgnZGVzdHJveWVyJyk7XG4gICAgICByZW1vdmVTaGlwKCdzdWJtYXJpbmUnKTtcbiAgICAgIHJlbW92ZVNoaXAoJ2JvYXQnKTtcbiAgICAgIGNvbnN0IGJvYXJkID0gX2dldFJhbmRvbUJvYXJkKCk7XG4gICAgICBfYWRkUmFuZG9tQm9hcmQoYm9hcmQpO1xuICAgICAgX21ha2VCdXR0b25zKCk7XG4gICAgICByZW5kZXJHcmlkKCk7XG4gICAgICBzZWxlY3RlZFNoaXAgPSBudWxsO1xuICAgIH0pO1xuICAgIGdvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKGdhbWVtb2RlID09PSAnY3B1Jykge1xuICAgICAgICBjb25zb2xlLmxvZygnZ2FtZSBzdGFydGVkJyk7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gT2JqZWN0LmFzc2lnbih7fSwgc2hpcERhdGEpO1xuICAgICAgICBnYW1lQ29udHJvbGxlci5jcmVhdGVQbGF5ZXIxKGJvYXJkKTtcbiAgICAgICAgZ2FtZUNvbnRyb2xsZXIuY3JlYXRlUGxheWVyMihudWxsKTtcbiAgICAgICAgZ2FtZUNvbnRyb2xsZXIuc3RhcnRHYW1lKGdhbWVtb2RlKTtcbiAgICAgICAgZ2FtZVZpZXcuaW5pdGlhbGl6ZSgpO1xuICAgICAgfSBlbHNlIGlmIChnYW1lbW9kZSA9PT0gJ3BsYXllcicpIHtcbiAgICAgICAgaWYgKHBsYXllcnNTZXQgPT09IDApIHtcbiAgICAgICAgICBwbGF5ZXJzU2V0Kys7XG4gICAgICAgICAgY29uc3QgYm9hcmQgPSBPYmplY3QuYXNzaWduKHt9LCBzaGlwRGF0YSk7XG4gICAgICAgICAgZ2FtZUNvbnRyb2xsZXIuY3JlYXRlUGxheWVyMShib2FyZCk7XG4gICAgICAgICAgaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKHBsYXllcnNTZXQgPT09IDEpIHtcbiAgICAgICAgICBjb25zdCBib2FyZCA9IE9iamVjdC5hc3NpZ24oe30sIHNoaXBEYXRhKTtcbiAgICAgICAgICBnYW1lQ29udHJvbGxlci5jcmVhdGVQbGF5ZXIyKGJvYXJkKTtcbiAgICAgICAgICBjb25zb2xlLmxvZygncGxheWVyIDIgc2V0Jyk7XG4gICAgICAgICAgZ2FtZUNvbnRyb2xsZXIuc3RhcnRHYW1lKGdhbWVtb2RlKTtcbiAgICAgICAgICBnYW1lVmlldy5pbml0aWFsaXplKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICAvLyByZXR1cm5zIHRydWUgb3IgZmFsc2UgaWYgbW91c2VvdmVyIHNxYXVyZSBpcyBhIHZhbGlkIHBsYWNlbWVudFxuICBmdW5jdGlvbiBjaGVja1ZhbGlkUGxhY2VtZW50KHgsIHksIGxlbmd0aCwgb3JpZW50YXRpb24pIHtcbiAgICAvLyBjaGVjayBvdXQgb2YgYm91bmRzXG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIGlmICh4ICsgbGVuZ3RoID4gMTApIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICBpZiAoeSArIGxlbmd0aCA+IDEwKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIGNoZWNrIG5vIG92ZXJsYXAsIGVubnVtZXJhdGUgc2hpcGxvY2F0aW9uXG4gICAgZm9yIChsZXQgc2hpcCBpbiBzaGlwRGF0YSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaGlwRGF0YVtzaGlwXS5sb2NhdGlvbi5sZW5ndGg7IGorKykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgY2hlY2tYID0gb3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJyA/IHggKyBpIDogeDtcbiAgICAgICAgICBjb25zdCBjaGVja1kgPSBvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJyA/IHkgKyBpIDogeTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBzaGlwRGF0YVtzaGlwXVsnbG9jYXRpb24nXVtqXVsneCddID09PSBjaGVja1ggJiZcbiAgICAgICAgICAgIHNoaXBEYXRhW3NoaXBdWydsb2NhdGlvbiddW2pdWyd5J10gPT09IGNoZWNrWVxuICAgICAgICAgIClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvLyBoaWdobGlnaHQgcmVkIG9yIGdyZWVuIHNoaXAgb24gZ3JpZFxuICBmdW5jdGlvbiBkaXNwbGF5U2hpcE9uVmlldyh4LCB5KSB7XG4gICAgaWYgKHNlbGVjdGVkU2hpcCA9PT0gbnVsbCkgcmV0dXJuO1xuICAgIGNvbnN0IGxlbmd0aCA9IGhlbHBlci5zaGlwSW5mbyhzZWxlY3RlZFNoaXApLmxlbmd0aDtcbiAgICBjb25zdCBvcmllbnRhdGlvbiA9IHBsYWNlbWVudE9yaWVudGF0aW9uO1xuICAgIGNvbnN0IGlzVmFsaWQgPSBjaGVja1ZhbGlkUGxhY2VtZW50KHgsIHksIGxlbmd0aCwgb3JpZW50YXRpb24pO1xuXG4gICAgaWYgKGlzVmFsaWQpXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHhwb3MgPSBvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnID8geCArIGkgOiB4O1xuICAgICAgICBjb25zdCB5cG9zID0gb3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcgPyB5ICsgaSA6IHk7XG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYFtkYXRhLXg9XCIke3hwb3N9XCJdW2RhdGEteT1cIiR7eXBvc31cIl1gXG4gICAgICAgICk7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCd2YWxpZC1zcXVhcmUnKTtcbiAgICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgeHBvcyA9IG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcgPyB4ICsgaSA6IHg7XG4gICAgICAgIGNvbnN0IHlwb3MgPSBvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJyA/IHkgKyBpIDogeTtcbiAgICAgICAgaWYgKHhwb3MgPiA5IHx8IHlwb3MgPiA5KSBicmVhaztcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgW2RhdGEteD1cIiR7eHBvc31cIl1bZGF0YS15PVwiJHt5cG9zfVwiXWBcbiAgICAgICAgKTtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQtc3F1YXJlJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIGNsZWFycyB2YWxpZCBvciBpbnZhbGlkIHNxdWFyZSB3aGVuIGhvdmVyaW5nXG4gIGZ1bmN0aW9uIGNsZWFyRGlzcGxheVNoaXAoKSB7XG4gICAgY29uc3Qgc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGFjZW1lbnQtZ3JpZCA+IConKTtcbiAgICBzcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQtc3F1YXJlJyk7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgndmFsaWQtc3F1YXJlJyk7XG4gICAgfSk7XG4gIH1cbiAgLy8gY2FsbGJhY2sgZm9yIGNsaWNrIHNxdWFyZSBwbGFjZW1lbnQgZXZlbnQgaWYgdmFsaWQgcGxhY2VkXG4gIGZ1bmN0aW9uIGFkZFNoaXAoeCwgeSwgbmFtZSwgb3JpZW50YXRpb24pIHtcbiAgICBjb25zdCBsZW5ndGggPSBoZWxwZXIuc2hpcEluZm8obmFtZSkubGVuZ3RoO1xuICAgIGlmICghY2hlY2tWYWxpZFBsYWNlbWVudCh4LCB5LCBsZW5ndGgsIG9yaWVudGF0aW9uKSkge1xuICAgICAgY29uc29sZS5sb2coJ25vdCBwb3NzaWJsZScpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoc2hpcERhdGFbbmFtZV0ubG9jYXRpb24ubGVuZ3RoICE9PSAwKSB7XG4gICAgICBhbGVydChgJHtuYW1lfSBhbHJlYWR5IGV4aXN0c2ApO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gLy9wcmV2ZW50cyBvdmVyd3JpdGluZ1xuICAgIGNvbnN0IGxvY2F0aW9uID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY29vcmQgPSB7fTtcbiAgICAgIGNvbnN0IHhwb3MgPSBvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnID8geCArIGkgOiB4O1xuICAgICAgY29uc3QgeXBvcyA9IG9yaWVudGF0aW9uID09PSAndmVydGljYWwnID8geSArIGkgOiB5O1xuICAgICAgY29vcmQueCA9IHhwb3M7XG4gICAgICBjb29yZC55ID0geXBvcztcbiAgICAgIGxvY2F0aW9uLnB1c2goY29vcmQpO1xuICAgIH1cbiAgICBzaGlwRGF0YVtuYW1lXS5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuICAgIHNoaXBEYXRhW25hbWVdLmZhY2luZyA9IG9yaWVudGF0aW9uO1xuICAgIF9jaGVja1N0YXJ0Q29uZGl0aW9uKCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgZnVuY3Rpb24gcmVtb3ZlU2hpcChuYW1lKSB7XG4gICAgaWYgKG5hbWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZhbHNlO1xuICAgIHNoaXBEYXRhW25hbWVdLmxvY2F0aW9uID0gW107XG4gICAgc2hpcERhdGFbbmFtZV0uZmFjaW5nID0gbnVsbDtcbiAgICBfY2hlY2tTdGFydENvbmRpdGlvbigpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGZ1bmN0aW9uIHJlbmRlckdyaWQoKSB7XG4gICAgY29uc3Qgc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGFjZW1lbnQtZ3JpZCA+IConKTtcbiAgICBzcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ2NhcnJpZXItY29sb3InKTtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKCdiYXR0bGVzaGlwLWNvbG9yJyk7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgnZGVzdHJveWVyLWNvbG9yJyk7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgnc3VibWFyaW5lLWNvbG9yJyk7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgnYm9hdC1jb2xvcicpO1xuICAgICAgc3F1YXJlLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1zaGlwdHlwZScsICcnKTtcbiAgICB9KTtcbiAgICBmb3IgKGNvbnN0IHNoaXAgaW4gc2hpcERhdGEpIHtcbiAgICAgIHNoaXBEYXRhW3NoaXBdWydsb2NhdGlvbiddLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICAgIGNvbnN0IHhwb3MgPSBjb29yZC54O1xuICAgICAgICBjb25zdCB5cG9zID0gY29vcmQueTtcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgW2RhdGEteD1cIiR7eHBvc31cIl1bZGF0YS15PVwiJHt5cG9zfVwiXWBcbiAgICAgICAgKTtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoYCR7c2hpcH0tY29sb3JgKTtcbiAgICAgICAgc3F1YXJlLmRhdGFzZXQuc2hpcHR5cGUgPSBzaGlwO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIF9tYWtlQnV0dG9ucygpIHtcbiAgICBsZXQgZmlyc3QgPSBmYWxzZTtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1idXR0b24tY29udGFpbmVyJyk7XG4gICAgbGV0IGNhcnJpZXJCdG4sIGJhdHRsZXNoaXBCdG4sIGRlc3Ryb3llckJ0biwgc3VibWFyaW5lQnRuLCBib2F0QnRuO1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICBpZiAoc2hpcERhdGFbJ2NhcnJpZXInXS5sb2NhdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICAgIGNhcnJpZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGNhcnJpZXJCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdjYXJyaWVyLWJ0bicpO1xuICAgICAgY2FycmllckJ0bi50ZXh0Q29udGVudCA9ICdDYXJyaWVyJztcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJyaWVyQnRuKTtcbiAgICAgIGlmIChmaXJzdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgZmlyc3QgPSB0cnVlO1xuICAgICAgICBzZWxlY3RlZFNoaXAgPSAnY2Fycmllcic7XG4gICAgICAgIGNhcnJpZXJCdG4uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICcnKTtcbiAgICAgICAgY2FycmllckJ0bi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc2hpcERhdGFbJ2JhdHRsZXNoaXAnXS5sb2NhdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICAgIGJhdHRsZXNoaXBCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGJhdHRsZXNoaXBCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdiYXR0bGVzaGlwLWJ0bicpO1xuICAgICAgYmF0dGxlc2hpcEJ0bi50ZXh0Q29udGVudCA9ICdCYXR0bGVzaGlwJztcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChiYXR0bGVzaGlwQnRuKTtcbiAgICAgIGlmIChmaXJzdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgZmlyc3QgPSB0cnVlO1xuICAgICAgICBzZWxlY3RlZFNoaXAgPSAnYmF0dGxlc2hpcCc7XG4gICAgICAgIGJhdHRsZXNoaXBCdG4uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICcnKTtcbiAgICAgICAgYmF0dGxlc2hpcEJ0bi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc2hpcERhdGFbJ2Rlc3Ryb3llciddLmxvY2F0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZGVzdHJveWVyQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBkZXN0cm95ZXJCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdkZXN0cm95ZXItYnRuJyk7XG4gICAgICBkZXN0cm95ZXJCdG4udGV4dENvbnRlbnQgPSAnRGVzdHJveWVyJztcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXN0cm95ZXJCdG4pO1xuICAgICAgaWYgKGZpcnN0ID09PSBmYWxzZSkge1xuICAgICAgICBmaXJzdCA9IHRydWU7XG4gICAgICAgIHNlbGVjdGVkU2hpcCA9ICdkZXN0cm95ZXInO1xuICAgICAgICBkZXN0cm95ZXJCdG4uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICcnKTtcbiAgICAgICAgZGVzdHJveWVyQnRuLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzaGlwRGF0YVsnc3VibWFyaW5lJ10ubG9jYXRpb24ubGVuZ3RoID09PSAwKSB7XG4gICAgICBzdWJtYXJpbmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIHN1Ym1hcmluZUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1Ym1hcmluZS1idG4nKTtcbiAgICAgIHN1Ym1hcmluZUJ0bi50ZXh0Q29udGVudCA9ICdTdWJtYXJpbmUnO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1hcmluZUJ0bik7XG4gICAgICBpZiAoZmlyc3QgPT09IGZhbHNlKSB7XG4gICAgICAgIGZpcnN0ID0gdHJ1ZTtcbiAgICAgICAgc2VsZWN0ZWRTaGlwID0gJ3N1Ym1hcmluZSc7XG4gICAgICAgIHN1Ym1hcmluZUJ0bi5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJycpO1xuICAgICAgICBzdWJtYXJpbmVCdG4uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNoaXBEYXRhWydib2F0J10ubG9jYXRpb24ubGVuZ3RoID09PSAwKSB7XG4gICAgICBib2F0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBib2F0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnYm9hdC1idG4nKTtcbiAgICAgIGJvYXRCdG4udGV4dENvbnRlbnQgPSAnUGF0cm9sJztcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChib2F0QnRuKTtcbiAgICAgIGlmIChmaXJzdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgZmlyc3QgPSB0cnVlO1xuICAgICAgICBzZWxlY3RlZFNoaXAgPSAnYm9hdCc7XG4gICAgICAgIGJvYXRCdG4uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICcnKTtcbiAgICAgICAgYm9hdEJ0bi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFsbEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgJy5zaGlwLWJ1dHRvbi1jb250YWluZXIgPiBidXR0b24nXG4gICAgKTtcbiAgICBpZiAoc2hpcERhdGFbJ2NhcnJpZXInXS5sb2NhdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICAgIGNhcnJpZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoc2VsZWN0ZWRTaGlwID09PSAnY2FycmllcicpIHtcbiAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgIHNlbGVjdGVkU2hpcCA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWxsQnRucy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICBzZWxlY3RlZFNoaXAgPSAnY2Fycmllcic7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoc2hpcERhdGFbJ2JhdHRsZXNoaXAnXS5sb2NhdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICAgIGJhdHRsZXNoaXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoc2VsZWN0ZWRTaGlwID09PSAnYmF0dGxlc2hpcCcpIHtcbiAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgIHNlbGVjdGVkU2hpcCA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWxsQnRucy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICBzZWxlY3RlZFNoaXAgPSAnYmF0dGxlc2hpcCc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoc2hpcERhdGFbJ2Rlc3Ryb3llciddLmxvY2F0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZGVzdHJveWVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKHNlbGVjdGVkU2hpcCA9PT0gJ2Rlc3Ryb3llcicpIHtcbiAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgIHNlbGVjdGVkU2hpcCA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWxsQnRucy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICBzZWxlY3RlZFNoaXAgPSAnZGVzdHJveWVyJztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChzaGlwRGF0YVsnc3VibWFyaW5lJ10ubG9jYXRpb24ubGVuZ3RoID09PSAwKSB7XG4gICAgICBzdWJtYXJpbmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoc2VsZWN0ZWRTaGlwID09PSAnc3VibWFyaW5lJykge1xuICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgc2VsZWN0ZWRTaGlwID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGxCdG5zLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICAgIHNlbGVjdGVkU2hpcCA9ICdzdWJtYXJpbmUnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHNoaXBEYXRhWydib2F0J10ubG9jYXRpb24ubGVuZ3RoID09PSAwKSB7XG4gICAgICBib2F0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKHNlbGVjdGVkU2hpcCA9PT0gJ2JvYXQnKSB7XG4gICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICBzZWxlY3RlZFNoaXAgPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFsbEJ0bnMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgc2VsZWN0ZWRTaGlwID0gJ2JvYXQnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gX2dldFJhbmRvbUJvYXJkKCkge1xuICAgIGNvbnN0IHBsYXllciA9IFBsYXllcigpO1xuICAgIHBsYXllci5wbGFjZVJhbmRvbSgpO1xuICAgIGNvbnN0IGJvYXJkID0gcGxheWVyLmdldEJvYXJkKCk7XG4gICAgY29uc3QgbG9jYXRpb24gPSBib2FyZC5nZXRTaGlwTG9jYXRpb24oKTtcbiAgICByZXR1cm4gbG9jYXRpb247XG4gIH1cbiAgZnVuY3Rpb24gX2FkZFJhbmRvbUJvYXJkKGJvYXJkKSB7XG4gICAgZm9yIChsZXQgc2hpcCBpbiBib2FyZCkge1xuICAgICAgbGV0IHNoaXBPcmllbnRhdGlvbjtcbiAgICAgIGNvbnN0IGNvb3JkWCA9IGJvYXJkW3NoaXBdWzBdWyd4J107XG4gICAgICBjb25zdCBjb29yZFkgPSBib2FyZFtzaGlwXVswXVsneSddO1xuICAgICAgaWYgKGJvYXJkW3NoaXBdWzFdWyd4J10gLSBib2FyZFtzaGlwXVswXVsneCddID09PSAxKSB7XG4gICAgICAgIHNoaXBPcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJztcbiAgICAgIH0gZWxzZSBzaGlwT3JpZW50YXRpb24gPSAndmVydGljYWwnO1xuICAgICAgYWRkU2hpcChjb29yZFgsIGNvb3JkWSwgc2hpcCwgc2hpcE9yaWVudGF0aW9uKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gX2NoZWNrU3RhcnRDb25kaXRpb24oKSB7XG4gICAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ28tYnRuJyk7XG4gICAgZm9yIChsZXQgc2hpcCBpbiBzaGlwRGF0YSkge1xuICAgICAgaWYgKHNoaXBEYXRhW3NoaXBdLmxvY2F0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBzdGFydEJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHN0YXJ0QnRuLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBmdW5jdGlvbiBfY2xlYXJTaGlwRGF0YSgpIHtcbiAgICBmb3IgKGxldCBzaGlwIGluIHNoaXBEYXRhKSB7XG4gICAgICBzaGlwRGF0YVtzaGlwXS5sb2NhdGlvbiA9IFtdO1xuICAgICAgc2hpcERhdGFbc2hpcF0uZmFjaW5nID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gX3VwZGF0ZVR1cm5EaXNwbGF5KCkge1xuICAgIGNvbnN0IGluZm9EaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYWNlbWVudC1pbmZvJyk7XG4gICAgaW5mb0Rpc3BsYXkudGV4dENvbnRlbnQgPSBgUGxheWVyICR7cGxheWVyc1NldCArIDF9J3MgdHVybiB0byBwbGFjZWA7XG4gIH1cblxuICByZXR1cm4geyBpbml0aWFsaXplLCBzZXRHYW1lbW9kZSB9O1xufSkoKTtcblxuZXhwb3J0IHsgcGxhY2VtZW50VmlldyB9O1xuIiwiaW1wb3J0IHsgcGxhY2VtZW50VmlldyB9IGZyb20gJy4vcGxhY2VtZW50Vmlldyc7XG5jb25zdCBzZWxlY3Rpb25WaWV3ID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhcmdldCcpO1xuICBjb25zdCBpbml0aWFsaXplID0gZnVuY3Rpb24gKCkge1xuICAgIHRhcmdldC5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cInNlbGVjdC1jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZWxlY3QtcGFuZWxcIj5cbiAgICAgICAgICA8aDI+R0FNRU1PREU8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWxlY3QtYnRuLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInBsYXllclwiPlBMQVlFUjwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNwdVwiPkNQVTwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gICAgY29uc3QgcGxheWVyTW9kZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXInKTtcbiAgICBjb25zdCBjcHVNb2RlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NwdScpO1xuICAgIHBsYXllck1vZGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAocGxhY2VtZW50Vmlldy5zZXRHYW1lbW9kZSgncGxheWVyJykpIHBsYWNlbWVudFZpZXcuaW5pdGlhbGl6ZSgpO1xuICAgIH0pO1xuICAgIGNwdU1vZGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAocGxhY2VtZW50Vmlldy5zZXRHYW1lbW9kZSgnY3B1JykpIHBsYWNlbWVudFZpZXcuaW5pdGlhbGl6ZSgpO1xuICAgIH0pO1xuICB9O1xuICByZXR1cm4geyBpbml0aWFsaXplIH07XG59KSgpO1xuZXhwb3J0IHsgc2VsZWN0aW9uVmlldyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBzZWxlY3Rpb25WaWV3IH0gZnJvbSAnLi9tb2R1bGVzL3ZpZXdzL3NlbGVjdGlvblZpZXcnO1xuXG5zZWxlY3Rpb25WaWV3LmluaXRpYWxpemUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==