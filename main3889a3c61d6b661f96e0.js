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
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n  font-size: 16px;\n  --teal-200: #80CBC4;\n  --deep-purple-300:#9575CD;\n  --deep-purple-600: #5E35B1;\n  --deep-purple-900: #311B92;\n  --teal-800: #00695C;\n  --red-500: #F44336;\n  --orange-800: #EF6C00;\n  --blue-800: #1565C0;\n  --pink-800:#AD1457;\n}\n*{\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Poppins', sans-serif;\n}\nbody{\n  width: 100%;\n  min-height: 100vh;\n  background-color: var(--teal-200);\n}\nheader{\n  height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nheader h1{\n  font-size: 40px;\n  color: var(--deep-purple-900);\n}\ndiv.select-content{\n  height: 100%;\n  margin: auto;\n  width: 100%;\n  min-height: 500px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\ndiv.select-panel{\n  background-color: white;\n  width: 280px;\n  height: 350px;\n  border-radius: 10px;\n  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n}\n.select-panel h2{\n  text-align: center;\n  padding: 15px;\n  margin-top: 20px;\n  margin-bottom: 60px;\n}\ndiv.target{\n  height: calc(100vh - 100px);\n  width: 100%;\n}\n.placement-grid{\n  height: 500px;\n  width: 500px;\n  min-width: 500px;\n  background-color: white;\n  border: 3px solid black;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  margin: 0 100px;\n}\n.placement-grid-square{\n  border: 1px solid black;\n  background-color: white;\n  width: 100%;\n  height: 100%;\n}\n.placement-grid .valid-square{\n  background-color: var(--teal-200);\n}\n.placement-grid .invalid-square{\n  background-color: var(--red-500);\n}\n\n.ship-panel,.button-panel{\n  border: 3px solid black;\n  height: 500px;\n  width: 200px;\n  background-color: var(--deep-purple-300);\n}\n\n.button-panel, .ship-button-container{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n}\n.ship-panel{\n  display: flex;\n  flex-direction: column;\n}\n\n.ship-button-container{\n  flex-grow: 1;\n  padding: 15px;\n}\n\n.button-panel button, .ship-button-container button{\n  display: block;\n  width: 120px;\n  height: 50px;\n  border-radius: 5px;\n  border: none;\n  font-size: 16px;\n  box-shadow: 2px 2px 3px rgb(101, 101, 101);\n}\n\n.select-btn-container{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 50px;\n}\n.select-btn-container button{\n  display: block;\n  width: 120px;\n  padding: 10px 5px;\n  border: none;\n  background-color: var(--deep-purple-600);\n  color: white;\n  border-radius: 5px;\n}\n.select-btn-container button:hover{\n  background-color: var(--deep-purple-900);\n}\n\n.ship-button-container button.selected{\n  background-color: var(--teal-800);\n  color: white;\n}\n\n.button-panel button:hover:not(:disabled), .ship-button-container button:hover:not(.selected){\n  background-color: rgb(197, 197, 197);\n}\n\n.ship-panel h3{\n  text-align: center;\n  color: white;\n  padding: 10px;\n}\n\n.placement-grid div.carrier-color{\n  background-color: var(--teal-800);\n}\n.placement-grid div.battleship-color{\n  background-color: var(--deep-purple-900);\n}\n.placement-grid div.destroyer-color{\n  background-color: var(--orange-800);\n}\n.placement-grid div.submarine-color{\n  background-color: var(--blue-800);\n}\n.placement-grid div.boat-color{\n  background-color: var(--pink-800);\n}\ndiv.main-content{\n  height: 100%;\n  margin: auto;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n}\n.placement-container{\n  min-height: 500px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.placement-info{\n  width: 500px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center;\n  white-space: nowrap;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AACA;EACE,eAAe;EACf,mBAAmB;EACnB,yBAAyB;EACzB,0BAA0B;EAC1B,0BAA0B;EAC1B,mBAAmB;EACnB,kBAAkB;EAClB,qBAAqB;EACrB,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,kCAAkC;AACpC;AACA;EACE,WAAW;EACX,iBAAiB;EACjB,iCAAiC;AACnC;AACA;EACE,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,eAAe;EACf,6BAA6B;AAC/B;AACA;EACE,YAAY;EACZ,YAAY;EACZ,WAAW;EACX,iBAAiB;EACjB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,mDAAmD;AACrD;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,gBAAgB;EAChB,mBAAmB;AACrB;AACA;EACE,2BAA2B;EAC3B,WAAW;AACb;AACA;EACE,aAAa;EACb,YAAY;EACZ,gBAAgB;EAChB,uBAAuB;EACvB,uBAAuB;EACvB,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,eAAe;AACjB;AACA;EACE,uBAAuB;EACvB,uBAAuB;EACvB,WAAW;EACX,YAAY;AACd;AACA;EACE,iCAAiC;AACnC;AACA;EACE,gCAAgC;AAClC;;AAEA;EACE,uBAAuB;EACvB,aAAa;EACb,YAAY;EACZ,wCAAwC;AAC1C;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,6BAA6B;AAC/B;AACA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,0CAA0C;AAC5C;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,cAAc;EACd,YAAY;EACZ,iBAAiB;EACjB,YAAY;EACZ,wCAAwC;EACxC,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE,wCAAwC;AAC1C;;AAEA;EACE,iCAAiC;EACjC,YAAY;AACd;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,iCAAiC;AACnC;AACA;EACE,wCAAwC;AAC1C;AACA;EACE,mCAAmC;AACrC;AACA;EACE,iCAAiC;AACnC;AACA;EACE,iCAAiC;AACnC;AACA;EACE,YAAY;EACZ,YAAY;EACZ,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;AACA;EACE,iBAAiB;EACjB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,YAAY;EACZ,gBAAgB;EAChB,uBAAuB;EACvB,kBAAkB;EAClB,mBAAmB;AACrB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');\n:root{\n  font-size: 16px;\n  --teal-200: #80CBC4;\n  --deep-purple-300:#9575CD;\n  --deep-purple-600: #5E35B1;\n  --deep-purple-900: #311B92;\n  --teal-800: #00695C;\n  --red-500: #F44336;\n  --orange-800: #EF6C00;\n  --blue-800: #1565C0;\n  --pink-800:#AD1457;\n}\n*{\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Poppins', sans-serif;\n}\nbody{\n  width: 100%;\n  min-height: 100vh;\n  background-color: var(--teal-200);\n}\nheader{\n  height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nheader h1{\n  font-size: 40px;\n  color: var(--deep-purple-900);\n}\ndiv.select-content{\n  height: 100%;\n  margin: auto;\n  width: 100%;\n  min-height: 500px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\ndiv.select-panel{\n  background-color: white;\n  width: 280px;\n  height: 350px;\n  border-radius: 10px;\n  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n}\n.select-panel h2{\n  text-align: center;\n  padding: 15px;\n  margin-top: 20px;\n  margin-bottom: 60px;\n}\ndiv.target{\n  height: calc(100vh - 100px);\n  width: 100%;\n}\n.placement-grid{\n  height: 500px;\n  width: 500px;\n  min-width: 500px;\n  background-color: white;\n  border: 3px solid black;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  margin: 0 100px;\n}\n.placement-grid-square{\n  border: 1px solid black;\n  background-color: white;\n  width: 100%;\n  height: 100%;\n}\n.placement-grid .valid-square{\n  background-color: var(--teal-200);\n}\n.placement-grid .invalid-square{\n  background-color: var(--red-500);\n}\n\n.ship-panel,.button-panel{\n  border: 3px solid black;\n  height: 500px;\n  width: 200px;\n  background-color: var(--deep-purple-300);\n}\n\n.button-panel, .ship-button-container{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n}\n.ship-panel{\n  display: flex;\n  flex-direction: column;\n}\n\n.ship-button-container{\n  flex-grow: 1;\n  padding: 15px;\n}\n\n.button-panel button, .ship-button-container button{\n  display: block;\n  width: 120px;\n  height: 50px;\n  border-radius: 5px;\n  border: none;\n  font-size: 16px;\n  box-shadow: 2px 2px 3px rgb(101, 101, 101);\n}\n\n.select-btn-container{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 50px;\n}\n.select-btn-container button{\n  display: block;\n  width: 120px;\n  padding: 10px 5px;\n  border: none;\n  background-color: var(--deep-purple-600);\n  color: white;\n  border-radius: 5px;\n}\n.select-btn-container button:hover{\n  background-color: var(--deep-purple-900);\n}\n\n.ship-button-container button.selected{\n  background-color: var(--teal-800);\n  color: white;\n}\n\n.button-panel button:hover:not(:disabled), .ship-button-container button:hover:not(.selected){\n  background-color: rgb(197, 197, 197);\n}\n\n.ship-panel h3{\n  text-align: center;\n  color: white;\n  padding: 10px;\n}\n\n.placement-grid div.carrier-color{\n  background-color: var(--teal-800);\n}\n.placement-grid div.battleship-color{\n  background-color: var(--deep-purple-900);\n}\n.placement-grid div.destroyer-color{\n  background-color: var(--orange-800);\n}\n.placement-grid div.submarine-color{\n  background-color: var(--blue-800);\n}\n.placement-grid div.boat-color{\n  background-color: var(--pink-800);\n}\ndiv.main-content{\n  height: 100%;\n  margin: auto;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n}\n.placement-container{\n  min-height: 500px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.placement-info{\n  width: 500px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center;\n  white-space: nowrap;\n}\n"],"sourceRoot":""}]);
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
  let player1, player2;
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
  const startGame = function () {};

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
        // gameController.startGame();
        // gameView.initialize();
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
/* harmony import */ var _modules_views_placementView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/views/placementView */ "./src/modules/views/placementView.js");




_modules_views_selectionView__WEBPACK_IMPORTED_MODULE_1__.selectionView.initialize();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUN5QztBQUNBOztBQUU5RCxrRkFBd0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvYXBwL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9hcHAvZ2FtZWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvYXBwL2hlbHBlci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9hcHAvcGxheWVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2FwcC9zaGlwLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3ZpZXdzL3BsYWNlbWVudFZpZXcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvdmlld3Mvc2VsZWN0aW9uVmlldy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290e1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgLS10ZWFsLTIwMDogIzgwQ0JDNDtcXG4gIC0tZGVlcC1wdXJwbGUtMzAwOiM5NTc1Q0Q7XFxuICAtLWRlZXAtcHVycGxlLTYwMDogIzVFMzVCMTtcXG4gIC0tZGVlcC1wdXJwbGUtOTAwOiAjMzExQjkyO1xcbiAgLS10ZWFsLTgwMDogIzAwNjk1QztcXG4gIC0tcmVkLTUwMDogI0Y0NDMzNjtcXG4gIC0tb3JhbmdlLTgwMDogI0VGNkMwMDtcXG4gIC0tYmx1ZS04MDA6ICMxNTY1QzA7XFxuICAtLXBpbmstODAwOiNBRDE0NTc7XFxufVxcbip7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxufVxcbmJvZHl7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVhbC0yMDApO1xcbn1cXG5oZWFkZXJ7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuaGVhZGVyIGgxe1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgY29sb3I6IHZhcigtLWRlZXAtcHVycGxlLTkwMCk7XFxufVxcbmRpdi5zZWxlY3QtY29udGVudHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogNTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5kaXYuc2VsZWN0LXBhbmVse1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB3aWR0aDogMjgwcHg7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMS45NXB4IDEuOTVweCAyLjZweDtcXG59XFxuLnNlbGVjdC1wYW5lbCBoMntcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcXG59XFxuZGl2LnRhcmdldHtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ucGxhY2VtZW50LWdyaWR7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgbWluLXdpZHRoOiA1MDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIG1hcmdpbjogMCAxMDBweDtcXG59XFxuLnBsYWNlbWVudC1ncmlkLXNxdWFyZXtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLnBsYWNlbWVudC1ncmlkIC52YWxpZC1zcXVhcmV7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZWFsLTIwMCk7XFxufVxcbi5wbGFjZW1lbnQtZ3JpZCAuaW52YWxpZC1zcXVhcmV7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtNTAwKTtcXG59XFxuXFxuLnNoaXAtcGFuZWwsLmJ1dHRvbi1wYW5lbHtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZXAtcHVycGxlLTMwMCk7XFxufVxcblxcbi5idXR0b24tcGFuZWwsIC5zaGlwLWJ1dHRvbi1jb250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuLnNoaXAtcGFuZWx7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnNoaXAtYnV0dG9uLWNvbnRhaW5lcntcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbi5idXR0b24tcGFuZWwgYnV0dG9uLCAuc2hpcC1idXR0b24tY29udGFpbmVyIGJ1dHRvbntcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggcmdiKDEwMSwgMTAxLCAxMDEpO1xcbn1cXG5cXG4uc2VsZWN0LWJ0bi1jb250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDUwcHg7XFxufVxcbi5zZWxlY3QtYnRuLWNvbnRhaW5lciBidXR0b257XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMjBweDtcXG4gIHBhZGRpbmc6IDEwcHggNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcC1wdXJwbGUtNjAwKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLnNlbGVjdC1idG4tY29udGFpbmVyIGJ1dHRvbjpob3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZXAtcHVycGxlLTkwMCk7XFxufVxcblxcbi5zaGlwLWJ1dHRvbi1jb250YWluZXIgYnV0dG9uLnNlbGVjdGVke1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVhbC04MDApO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYnV0dG9uLXBhbmVsIGJ1dHRvbjpob3Zlcjpub3QoOmRpc2FibGVkKSwgLnNoaXAtYnV0dG9uLWNvbnRhaW5lciBidXR0b246aG92ZXI6bm90KC5zZWxlY3RlZCl7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk3LCAxOTcsIDE5Nyk7XFxufVxcblxcbi5zaGlwLXBhbmVsIGgze1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnBsYWNlbWVudC1ncmlkIGRpdi5jYXJyaWVyLWNvbG9ye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVhbC04MDApO1xcbn1cXG4ucGxhY2VtZW50LWdyaWQgZGl2LmJhdHRsZXNoaXAtY29sb3J7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWVwLXB1cnBsZS05MDApO1xcbn1cXG4ucGxhY2VtZW50LWdyaWQgZGl2LmRlc3Ryb3llci1jb2xvcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZS04MDApO1xcbn1cXG4ucGxhY2VtZW50LWdyaWQgZGl2LnN1Ym1hcmluZS1jb2xvcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtODAwKTtcXG59XFxuLnBsYWNlbWVudC1ncmlkIGRpdi5ib2F0LWNvbG9ye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGluay04MDApO1xcbn1cXG5kaXYubWFpbi1jb250ZW50e1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG59XFxuLnBsYWNlbWVudC1jb250YWluZXJ7XFxuICBtaW4taGVpZ2h0OiA1MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5wbGFjZW1lbnQtaW5mb3tcXG4gIHdpZHRoOiA1MDBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGtDQUFrQztBQUNwQztBQUNBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbURBQW1EO0FBQ3JEO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQixXQUFXO0FBQ2I7QUFDQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQ0FBbUM7RUFDbkMsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsWUFBWTtFQUNaLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7QUFDQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWix3Q0FBd0M7RUFDeEMsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DO0FBQ0E7RUFDRSx3Q0FBd0M7QUFDMUM7QUFDQTtFQUNFLG1DQUFtQztBQUNyQztBQUNBO0VBQ0UsaUNBQWlDO0FBQ25DO0FBQ0E7RUFDRSxpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcCcpO1xcbjpyb290e1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgLS10ZWFsLTIwMDogIzgwQ0JDNDtcXG4gIC0tZGVlcC1wdXJwbGUtMzAwOiM5NTc1Q0Q7XFxuICAtLWRlZXAtcHVycGxlLTYwMDogIzVFMzVCMTtcXG4gIC0tZGVlcC1wdXJwbGUtOTAwOiAjMzExQjkyO1xcbiAgLS10ZWFsLTgwMDogIzAwNjk1QztcXG4gIC0tcmVkLTUwMDogI0Y0NDMzNjtcXG4gIC0tb3JhbmdlLTgwMDogI0VGNkMwMDtcXG4gIC0tYmx1ZS04MDA6ICMxNTY1QzA7XFxuICAtLXBpbmstODAwOiNBRDE0NTc7XFxufVxcbip7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxufVxcbmJvZHl7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVhbC0yMDApO1xcbn1cXG5oZWFkZXJ7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuaGVhZGVyIGgxe1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgY29sb3I6IHZhcigtLWRlZXAtcHVycGxlLTkwMCk7XFxufVxcbmRpdi5zZWxlY3QtY29udGVudHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogNTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5kaXYuc2VsZWN0LXBhbmVse1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB3aWR0aDogMjgwcHg7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMS45NXB4IDEuOTVweCAyLjZweDtcXG59XFxuLnNlbGVjdC1wYW5lbCBoMntcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcXG59XFxuZGl2LnRhcmdldHtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ucGxhY2VtZW50LWdyaWR7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgbWluLXdpZHRoOiA1MDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIG1hcmdpbjogMCAxMDBweDtcXG59XFxuLnBsYWNlbWVudC1ncmlkLXNxdWFyZXtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLnBsYWNlbWVudC1ncmlkIC52YWxpZC1zcXVhcmV7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZWFsLTIwMCk7XFxufVxcbi5wbGFjZW1lbnQtZ3JpZCAuaW52YWxpZC1zcXVhcmV7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtNTAwKTtcXG59XFxuXFxuLnNoaXAtcGFuZWwsLmJ1dHRvbi1wYW5lbHtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZXAtcHVycGxlLTMwMCk7XFxufVxcblxcbi5idXR0b24tcGFuZWwsIC5zaGlwLWJ1dHRvbi1jb250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuLnNoaXAtcGFuZWx7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnNoaXAtYnV0dG9uLWNvbnRhaW5lcntcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbi5idXR0b24tcGFuZWwgYnV0dG9uLCAuc2hpcC1idXR0b24tY29udGFpbmVyIGJ1dHRvbntcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggcmdiKDEwMSwgMTAxLCAxMDEpO1xcbn1cXG5cXG4uc2VsZWN0LWJ0bi1jb250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDUwcHg7XFxufVxcbi5zZWxlY3QtYnRuLWNvbnRhaW5lciBidXR0b257XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMjBweDtcXG4gIHBhZGRpbmc6IDEwcHggNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcC1wdXJwbGUtNjAwKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLnNlbGVjdC1idG4tY29udGFpbmVyIGJ1dHRvbjpob3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZXAtcHVycGxlLTkwMCk7XFxufVxcblxcbi5zaGlwLWJ1dHRvbi1jb250YWluZXIgYnV0dG9uLnNlbGVjdGVke1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVhbC04MDApO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYnV0dG9uLXBhbmVsIGJ1dHRvbjpob3Zlcjpub3QoOmRpc2FibGVkKSwgLnNoaXAtYnV0dG9uLWNvbnRhaW5lciBidXR0b246aG92ZXI6bm90KC5zZWxlY3RlZCl7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk3LCAxOTcsIDE5Nyk7XFxufVxcblxcbi5zaGlwLXBhbmVsIGgze1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnBsYWNlbWVudC1ncmlkIGRpdi5jYXJyaWVyLWNvbG9ye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVhbC04MDApO1xcbn1cXG4ucGxhY2VtZW50LWdyaWQgZGl2LmJhdHRsZXNoaXAtY29sb3J7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWVwLXB1cnBsZS05MDApO1xcbn1cXG4ucGxhY2VtZW50LWdyaWQgZGl2LmRlc3Ryb3llci1jb2xvcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZS04MDApO1xcbn1cXG4ucGxhY2VtZW50LWdyaWQgZGl2LnN1Ym1hcmluZS1jb2xvcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtODAwKTtcXG59XFxuLnBsYWNlbWVudC1ncmlkIGRpdi5ib2F0LWNvbG9ye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGluay04MDApO1xcbn1cXG5kaXYubWFpbi1jb250ZW50e1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG59XFxuLnBsYWNlbWVudC1jb250YWluZXJ7XFxuICBtaW4taGVpZ2h0OiA1MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5wbGFjZW1lbnQtaW5mb3tcXG4gIHdpZHRoOiA1MDBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gJy4vc2hpcCc7XG5cbmNvbnN0IEdhbWVib2FyZCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZ2FtZWJvYXJkID0gX2NyZWF0ZUJvYXJkKCk7XG5cbiAgLy8gc2hpcCBmYWN0b3JpZXNcbiAgY29uc3QgY2FycmllciA9IFNoaXAoNSwgJ2NhcnJpZXInKTtcbiAgY29uc3QgYmF0dGxlc2hpcCA9IFNoaXAoNCwgJ2JhdHRsZXNoaXAnKTtcbiAgY29uc3QgZGVzdHJveWVyID0gU2hpcCgzLCAnZGVzdHJveWVyJyk7XG4gIGNvbnN0IHN1Ym1hcmluZSA9IFNoaXAoMywgJ3N1Ym1hcmluZScpO1xuICBjb25zdCBib2F0ID0gU2hpcCgyLCAnYm9hdCcpO1xuXG4gIC8vIGdldHRlcnNcbiAgY29uc3QgZ2V0R2FtZWJvYXJkID0gKCkgPT4gZ2FtZWJvYXJkO1xuICBjb25zdCBnZXRTaGlwTG9jYXRpb24gPSAoKSA9PiBzaGlwTG9jYXRpb247XG5cbiAgLy8gc2hpcCBsb2NhdGlvbiBkYXRhXG4gIGNvbnN0IHNoaXBMb2NhdGlvbiA9IHtcbiAgICBjYXJyaWVyOiBbXSxcbiAgICBiYXR0bGVzaGlwOiBbXSxcbiAgICBkZXN0cm95ZXI6IFtdLFxuICAgIHN1Ym1hcmluZTogW10sXG4gICAgYm9hdDogW10sXG4gIH07XG5cbiAgZnVuY3Rpb24gX2NyZWF0ZUJvYXJkKCkge1xuICAgIGNvbnN0IGJvYXJkID0gW107XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCAxMDsgeSsrKSB7XG4gICAgICBjb25zdCBjb2wgPSBbXTtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgMTA7IHgrKykge1xuICAgICAgICBjb2wucHVzaCgnTycpO1xuICAgICAgfVxuICAgICAgYm9hcmQucHVzaChjb2wpO1xuICAgIH1cbiAgICByZXR1cm4gYm9hcmQ7XG4gIH1cbiAgLy8gY2hlY2sgbm8tb3ZlcmxhcHBpbmcgc2hpcHNcbiAgZnVuY3Rpb24gX2lzUGxhY2VhYmxlU3F1YXJlKHgsIHkpIHtcbiAgICBpZiAoZ2FtZWJvYXJkW3hdW3ldICE9PSAnTycpIHJldHVybiBmYWxzZTtcbiAgICBlbHNlIGlmIChnYW1lYm9hcmRbeF1beV0gPT09ICdPJykgcmV0dXJuIHRydWU7XG4gIH1cbiAgLy8gcGFzcyB4LHkgdG8gc2hpcCBsb2NhdGlvblxuICBmdW5jdGlvbiBfc3RvcmVTaGlwTG9hY3Rpb24oeCwgeSwgc2hpcG5hbWUpIHtcbiAgICBjb25zdCB4cG9zID0geDtcbiAgICBjb25zdCB5cG9zID0geTtcbiAgICBzaGlwTG9jYXRpb25bc2hpcG5hbWVdLnB1c2goeyB4OiB4cG9zLCB5OiB5cG9zIH0pO1xuICB9XG4gIGZ1bmN0aW9uIF9nZXRTaGlwQnlOYW1lKG5hbWUpIHtcbiAgICBpZiAobmFtZSA9PT0gJ2NhcnJpZXInKSB7XG4gICAgICByZXR1cm4gY2FycmllcjtcbiAgICB9IGVsc2UgaWYgKG5hbWUgPT09ICdiYXR0bGVzaGlwJykge1xuICAgICAgcmV0dXJuIGJhdHRsZXNoaXA7XG4gICAgfSBlbHNlIGlmIChuYW1lID09PSAnZGVzdHJveWVyJykge1xuICAgICAgcmV0dXJuIGRlc3Ryb3llcjtcbiAgICB9IGVsc2UgaWYgKG5hbWUgPT09ICdzdWJtYXJpbmUnKSB7XG4gICAgICByZXR1cm4gc3VibWFyaW5lO1xuICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ2JvYXQnKSB7XG4gICAgICByZXR1cm4gYm9hdDtcbiAgICB9XG4gIH1cbiAgLy8gcGxhY2Ugc2hpcCBieSB0aGUgXCJoZWFkXCJcbiAgY29uc3QgcGxhY2VTaGlwID0gZnVuY3Rpb24gKHgsIHksIHNoaXBuYW1lLCBob3Jpem9udGFsKSB7XG4gICAgaWYgKHggPiA5IHx8IHkgPiA5KSByZXR1cm4gZmFsc2U7XG4gICAgY29uc3Qgc2hpcCA9IF9nZXRTaGlwQnlOYW1lKHNoaXBuYW1lKTtcbiAgICBjb25zdCBsZW5ndGggPSBzaGlwLnNoaXBMZW5ndGg7XG5cbiAgICBpZiAoaG9yaXpvbnRhbCkge1xuICAgICAgLy8gY2hlY2sgYm91bmRzXG4gICAgICBpZiAoeCArIGxlbmd0aCA+IDEwKSByZXR1cm4gZmFsc2U7XG4gICAgICAvLyBsb29rIHJpZ2h0XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICghX2lzUGxhY2VhYmxlU3F1YXJlKHggKyBpLCB5KSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsZW5ndGg7IGorKykge1xuICAgICAgICBnYW1lYm9hcmRbeCArIGpdW3ldID0gJ1gnO1xuICAgICAgICBfc3RvcmVTaGlwTG9hY3Rpb24oeCArIGosIHksIHNoaXBuYW1lKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjaGVjayBib3VuZHNcbiAgICAgIGlmICh5ICsgbGVuZ3RoID4gMTApIHJldHVybiBmYWxzZTtcbiAgICAgIC8vIGxvb2sgZG93blxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoIV9pc1BsYWNlYWJsZVNxdWFyZSh4LCB5ICsgaSkpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZ2FtZWJvYXJkW3hdW3kgKyBqXSA9ICdYJztcbiAgICAgICAgX3N0b3JlU2hpcExvYWN0aW9uKHgsIHkgKyBqLCBzaGlwbmFtZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH07XG4gIC8vIGNoZWNrcyB0aGUgZ2FtZWJvYXJkLCBYIGlzIHVuc3VuayBzaGlwLCBPIGlzIHVuaGl0IHdhdGVyLCBTIGlzIHN1bmsgc2hpcCwgSCBpcyBoaXQgd2F0ZXJcbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgaWYgKGdhbWVib2FyZFt4XVt5XSA9PT0gJ1gnIHx8IGdhbWVib2FyZFt4XVt5XSA9PT0gJ08nKSB7XG4gICAgICBpZiAoZ2FtZWJvYXJkW3hdW3ldID09PSAnWCcpIHtcbiAgICAgICAgZ2FtZWJvYXJkW3hdW3ldID0gJ1MnO1xuICAgICAgICBzdHJ1Y2tTaGlwKHgsIHkpO1xuICAgICAgfSBlbHNlIGlmIChnYW1lYm9hcmRbeF1beV0gPT09ICdPJykge1xuICAgICAgICBnYW1lYm9hcmRbeF1beV0gPSAnSCc7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xuICB9O1xuICAvLyBjaGVja3MgaWYgc2hpcCB3YXMgc3RydWNrIGFuZCBhcHBseXMgaGl0IHRvIHNoaXAgaW5zdGFuY2VcbiAgY29uc3Qgc3RydWNrU2hpcCA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gc2hpcExvY2F0aW9uKSB7XG4gICAgICBjb25zdCBzaGlwID0gX2dldFNoaXBCeU5hbWUoa2V5KTtcbiAgICAgIGNvbnN0IGxlbmd0aCA9IHNoaXBMb2NhdGlvbltrZXldLmxlbmd0aDtcbiAgICAgIGxldCBwb3NpdGlvbiA9IDE7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBzaGlwTG9jYXRpb25ba2V5XVtpXVsneCddID09PSB4ICYmXG4gICAgICAgICAgc2hpcExvY2F0aW9uW2tleV1baV1bJ3knXSA9PT0geVxuICAgICAgICApIHtcbiAgICAgICAgICBzaGlwLmhpdChwb3NpdGlvbik7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcG9zaXRpb24rKztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuICBjb25zdCBpc0ZsZWV0RGVzdHJveWVkID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChcbiAgICAgIGNhcnJpZXIuaXNTdW5rKCkgPT09IHRydWUgJiZcbiAgICAgIGJhdHRsZXNoaXAuaXNTdW5rKCkgPT09IHRydWUgJiZcbiAgICAgIGRlc3Ryb3llci5pc1N1bmsoKSA9PT0gdHJ1ZSAmJlxuICAgICAgc3VibWFyaW5lLmlzU3VuaygpID09PSB0cnVlICYmXG4gICAgICBib2F0LmlzU3VuaygpID09PSB0cnVlXG4gICAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0R2FtZWJvYXJkLFxuICAgIGdldFNoaXBMb2NhdGlvbixcbiAgICBwbGFjZVNoaXAsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBzdHJ1Y2tTaGlwLFxuICAgIGlzRmxlZXREZXN0cm95ZWQsXG4gIH07XG59O1xuXG5leHBvcnQgeyBHYW1lYm9hcmQgfTtcbiIsImltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vcGxheWVyJztcblxuY29uc3QgZ2FtZUNvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xuICBsZXQgcGxheWVyMSwgcGxheWVyMjtcbiAgY29uc3QgY3JlYXRlUGxheWVyMSA9IGZ1bmN0aW9uIChib2FyZCkge1xuICAgIHBsYXllcjEgPSBQbGF5ZXIoKTtcbiAgICBpZiAoYm9hcmQgPT09IG51bGwpIHtcbiAgICAgIHBsYXllcjEucGxhY2VSYW5kb20oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGxheWVyMS5tYWtlQm9hcmQoYm9hcmQpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhwbGF5ZXIxLmdhbWVib2FyZC5nZXRTaGlwTG9jYXRpb24oKSk7XG4gIH07XG4gIGNvbnN0IGNyZWF0ZVBsYXllcjIgPSBmdW5jdGlvbiAoYm9hcmQpIHtcbiAgICBwbGF5ZXIyID0gUGxheWVyKCk7XG4gICAgaWYgKGJvYXJkID09PSBudWxsKSB7XG4gICAgICBwbGF5ZXIyLnBsYWNlUmFuZG9tKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBsYXllcjIubWFrZUJvYXJkKGJvYXJkKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2cocGxheWVyMi5nYW1lYm9hcmQuZ2V0U2hpcExvY2F0aW9uKCkpO1xuICB9O1xuICBjb25zdCBzdGFydEdhbWUgPSBmdW5jdGlvbiAoKSB7fTtcblxuICByZXR1cm4geyBzdGFydEdhbWUsIGNyZWF0ZVBsYXllcjEsIGNyZWF0ZVBsYXllcjIgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGdhbWVDb250cm9sbGVyIH07XG4iLCJjb25zdCBoZWxwZXIgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCByYW5kb21UcnVlT3JGYWxzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikgPT09IDAgPyBmYWxzZSA6IHRydWU7XG4gIH07XG4gIGNvbnN0IGdldFJhbmRvbUludCA9IGZ1bmN0aW9uIChuKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG4pO1xuICB9O1xuICBjb25zdCBzaGlwSW5mbyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgaWYgKG5hbWUgPT09ICdjYXJyaWVyJykge1xuICAgICAgcmV0dXJuIHsgc2hpcDogbmFtZSwgbGVuZ3RoOiA1IH07XG4gICAgfSBlbHNlIGlmIChuYW1lID09PSAnYmF0dGxlc2hpcCcpIHtcbiAgICAgIHJldHVybiB7IHNoaXA6IG5hbWUsIGxlbmd0aDogNCB9O1xuICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ2Rlc3Ryb3llcicpIHtcbiAgICAgIHJldHVybiB7IHNoaXA6IG5hbWUsIGxlbmd0aDogMyB9O1xuICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ3N1Ym1hcmluZScpIHtcbiAgICAgIHJldHVybiB7IHNoaXA6IG5hbWUsIGxlbmd0aDogMyB9O1xuICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ2JvYXQnKSB7XG4gICAgICByZXR1cm4geyBzaGlwOiBuYW1lLCBsZW5ndGg6IDIgfTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB7IHJhbmRvbVRydWVPckZhbHNlLCBnZXRSYW5kb21JbnQsIHNoaXBJbmZvIH07XG59KSgpO1xuXG5leHBvcnQgeyBoZWxwZXIgfTtcbiIsImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gJy4vZ2FtZWJvYXJkJztcbmltcG9ydCB7IGhlbHBlciB9IGZyb20gJy4vaGVscGVyJztcblxuY29uc3QgUGxheWVyID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBnYW1lYm9hcmQgPSBHYW1lYm9hcmQoKTtcblxuICBjb25zdCBwbGFjZVJhbmRvbSA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBzaGlwcyA9IFsnY2FycmllcicsICdiYXR0bGVzaGlwJywgJ2Rlc3Ryb3llcicsICdzdWJtYXJpbmUnLCAnYm9hdCddO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHdoaWxlIChcbiAgICAgICAgIWdhbWVib2FyZC5wbGFjZVNoaXAoXG4gICAgICAgICAgaGVscGVyLmdldFJhbmRvbUludCgxMCksXG4gICAgICAgICAgaGVscGVyLmdldFJhbmRvbUludCgxMCksXG4gICAgICAgICAgc2hpcHNbaV0sXG4gICAgICAgICAgaGVscGVyLnJhbmRvbVRydWVPckZhbHNlKClcbiAgICAgICAgKVxuICAgICAgKSB7fVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSBmdW5jdGlvbiAoeCwgeSwgc2hpcG5hbWUsIGlzSG9yaXpvbnRhbCkge1xuICAgIHJldHVybiBnYW1lYm9hcmQucGxhY2VTaGlwKHgsIHksIHNoaXBuYW1lLCBpc0hvcml6b250YWwpO1xuICB9O1xuXG4gIGNvbnN0IHRha2VBdHRhY2sgPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgIHJldHVybiBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgfTtcblxuICBjb25zdCB0YWtlUmFuZG9tQXR0YWNrID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IG1vdmVzID0gZ2V0TGVnaWJsZVBsYWNlbWVudCgpO1xuICAgIGNvbnN0IGxlbmd0aCA9IG1vdmVzLmxlbmd0aDtcbiAgICBjb25zdCBwbGFjZW1lbnQgPSBtb3Zlc1toZWxwZXIuZ2V0UmFuZG9tSW50KGxlbmd0aCldO1xuICAgIHRha2VBdHRhY2soLi4ucGxhY2VtZW50KTtcbiAgfTtcblxuICBjb25zdCBjaGVja1dpbiA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZ2FtZWJvYXJkLmlzRmxlZXREZXN0cm95ZWQoKTtcbiAgfTtcbiAgY29uc3QgbWFrZUJvYXJkID0gZnVuY3Rpb24gKGJvYXJkKSB7XG4gICAgZm9yIChjb25zdCBzaGlwIGluIGJvYXJkKSB7XG4gICAgICBjb25zdCB4cG9zID0gYm9hcmRbc2hpcF0ubG9jYXRpb25bMF1bJ3gnXTtcbiAgICAgIGNvbnN0IHlwb3MgPSBib2FyZFtzaGlwXS5sb2NhdGlvblswXVsneSddO1xuICAgICAgY29uc3QgaXNIb3Jpem9udGFsID0gYm9hcmRbc2hpcF0uZmFjaW5nID09PSAnaG9yaXpvbnRhbCcgPyB0cnVlIDogZmFsc2U7XG4gICAgICBwbGFjZVNoaXAoeHBvcywgeXBvcywgc2hpcCwgaXNIb3Jpem9udGFsKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiBnYW1lYm9hcmQ7XG5cbiAgZnVuY3Rpb24gZ2V0TGVnaWJsZVBsYWNlbWVudCgpIHtcbiAgICBjb25zdCBsZWdpYmxlTW92ZXMgPSBbXTtcbiAgICBjb25zdCBib2FyZCA9IGdhbWVib2FyZC5nZXRHYW1lYm9hcmQoKTtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDEwOyB4KyspIHtcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgMTA7IHkrKykge1xuICAgICAgICBpZiAoYm9hcmRbeF1beV0gPT09ICdPJyB8fCBib2FyZFt4XVt5XSA9PT0gJ1gnKSB7XG4gICAgICAgICAgbGVnaWJsZU1vdmVzLnB1c2goW3gsIHldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbGVnaWJsZU1vdmVzO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnYW1lYm9hcmQsXG4gICAgZ2V0TGVnaWJsZVBsYWNlbWVudCxcbiAgICBnZXRCb2FyZCxcbiAgICBwbGFjZVNoaXAsXG4gICAgcGxhY2VSYW5kb20sXG4gICAgdGFrZVJhbmRvbUF0dGFjayxcbiAgICBjaGVja1dpbixcbiAgICB0YWtlQXR0YWNrLFxuICAgIG1ha2VCb2FyZCxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IFBsYXllciB9O1xuIiwiY29uc3QgU2hpcCA9IGZ1bmN0aW9uIChsZW5ndGgpIHtcbiAgY29uc3Qgc2hpcExlbmd0aCA9IGxlbmd0aDtcbiAgbGV0IGRhbWFnZSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgZGFtYWdlLnB1c2goZmFsc2UpO1xuICB9XG4gIGNvbnN0IGhpdCA9IGZ1bmN0aW9uIChwb3NpdGlvbikge1xuICAgIGlmIChwb3NpdGlvbiA+IGxlbmd0aCkgcmV0dXJuO1xuICAgIGRhbWFnZVtwb3NpdGlvbiAtIDFdID0gdHJ1ZTtcbiAgfTtcbiAgY29uc3QgaXNTdW5rID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChkYW1hZ2UuaW5jbHVkZXMoZmFsc2UpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHJldHVybiB0cnVlO1xuICB9O1xuICByZXR1cm4geyBoaXQsIGlzU3Vuaywgc2hpcExlbmd0aCB9O1xufTtcblxuZXhwb3J0IHsgU2hpcCB9O1xuIiwiaW1wb3J0IHsgZ2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuLi9hcHAvZ2FtZWNvbnRyb2xsZXInO1xuaW1wb3J0IHsgaGVscGVyIH0gZnJvbSAnLi4vYXBwL2hlbHBlcic7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuLi9hcHAvcGxheWVyJztcbmNvbnN0IHBsYWNlbWVudFZpZXcgPSAoZnVuY3Rpb24gKCkge1xuICBsZXQgc2VsZWN0ZWRTaGlwO1xuICBsZXQgcGxhY2VtZW50T3JpZW50YXRpb247XG4gIGxldCBnYW1lbW9kZTtcbiAgbGV0IHBsYXllcnNTZXQgPSAwO1xuICBjb25zdCBzaGlwRGF0YSA9IHtcbiAgICBjYXJyaWVyOiB7IGxvY2F0aW9uOiBbXSwgZmFjaW5nOiBudWxsIH0sXG4gICAgYmF0dGxlc2hpcDogeyBsb2NhdGlvbjogW10sIGZhY2luZzogbnVsbCB9LFxuICAgIGRlc3Ryb3llcjogeyBsb2NhdGlvbjogW10sIGZhY2luZzogbnVsbCB9LFxuICAgIHN1Ym1hcmluZTogeyBsb2NhdGlvbjogW10sIGZhY2luZzogbnVsbCB9LFxuICAgIGJvYXQ6IHsgbG9jYXRpb246IFtdLCBmYWNpbmc6IG51bGwgfSxcbiAgfTtcbiAgbGV0IHBsYWNlbWVudEdyaWQ7XG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhcmdldCcpO1xuICBjb25zdCBpbml0aWFsaXplID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJtYWluLWNvbnRlbnRcIj5cbiAgICA8aDIgY2xhc3M9XCJwbGFjZW1lbnQtaW5mb1wiPlBsYXllciBuIGNob29zZSBib2FyZDwvaDI+XG4gICAgPGRpdiBjbGFzcz1cInBsYWNlbWVudC1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJidXR0b24tcGFuZWxcIj5cbiAgICAgICAgPGJ1dHRvbiBpZD1cInJvdGF0ZS1idG5cIj5Sb3RhdGU8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBpZD1cInJhbmRvbWlzZS1idG5cIj5SYW5kb21pc2U8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBpZD1cInJlc2V0LWJ0blwiPlJlc2V0PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gaWQ9XCJnby1idG5cIiBkaXNhYmxlZD5HbzwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicGxhY2VtZW50LWdyaWRcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzaGlwLXBhbmVsXCI+XG4gICAgICAgIDxoMz5QbGFjZSB5b3VyIHNoaXBzPC9oMz5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNoaXAtYnV0dG9uLWNvbnRhaW5lclwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICAgIGA7XG4gICAgcGxhY2VtZW50R3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGFjZW1lbnQtZ3JpZCcpO1xuICAgIHNlbGVjdGVkU2hpcCA9IG51bGw7XG4gICAgcGxhY2VtZW50T3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCc7XG4gICAgX2NsZWFyU2hpcERhdGEoKTtcbiAgICBfdXBkYXRlVHVybkRpc3BsYXkoKTtcbiAgICBfbWFrZVBsYWNlbWVudEdyaWQoKTtcbiAgICBfbWFrZUJ1dHRvbnMoKTtcbiAgICBfc2V0VXBDb250cm9sQnRucygpO1xuICB9O1xuICBjb25zdCBzZXRHYW1lbW9kZSA9IGZ1bmN0aW9uIChtb2RlKSB7XG4gICAgaWYgKG1vZGUgPT09ICdwbGF5ZXInKSB7XG4gICAgICBnYW1lbW9kZSA9IG1vZGU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKG1vZGUgPT09ICdjcHUnKSB7XG4gICAgICBnYW1lbW9kZSA9IG1vZGU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xuICB9O1xuICBmdW5jdGlvbiBfbWFrZVBsYWNlbWVudEdyaWQoKSB7XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCAxMDsgeSsrKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDEwOyB4KyspIHtcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdwbGFjZW1lbnQtZ3JpZC1zcXVhcmUnKTtcbiAgICAgICAgc3F1YXJlLmRhdGFzZXQueSA9IHk7XG4gICAgICAgIHNxdWFyZS5kYXRhc2V0LnggPSB4O1xuICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIChlKSA9PiB7XG4gICAgICAgICAgaWYgKHNlbGVjdGVkU2hpcCA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIGRpc3BsYXlTaGlwT25WaWV3KHgsIHkpO1xuICAgICAgICB9KTtcbiAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoZSkgPT4ge1xuICAgICAgICAgIGNsZWFyRGlzcGxheVNoaXAoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgJ2NvbnRleHRtZW51JyxcbiAgICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3Qgc2hpcE5hbWUgPSBlLnRhcmdldC5kYXRhc2V0LnNoaXB0eXBlO1xuICAgICAgICAgICAgaWYgKHJlbW92ZVNoaXAoc2hpcE5hbWUpKSB7XG4gICAgICAgICAgICAgIHJlbmRlckdyaWQoKTtcbiAgICAgICAgICAgICAgX21ha2VCdXR0b25zKCk7XG4gICAgICAgICAgICAgIGNsZWFyRGlzcGxheVNoaXAoKTtcbiAgICAgICAgICAgICAgZGlzcGxheVNoaXBPblZpZXcoeCwgeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWxzZVxuICAgICAgICApO1xuICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKHNlbGVjdGVkU2hpcCA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICAgIGlmIChhZGRTaGlwKHgsIHksIHNlbGVjdGVkU2hpcCwgcGxhY2VtZW50T3JpZW50YXRpb24pKSB7XG4gICAgICAgICAgICByZW5kZXJHcmlkKCk7XG4gICAgICAgICAgICBzZWxlY3RlZFNoaXAgPSBudWxsO1xuICAgICAgICAgICAgX21ha2VCdXR0b25zKCk7XG4gICAgICAgICAgICBjbGVhckRpc3BsYXlTaGlwKCk7XG4gICAgICAgICAgICBkaXNwbGF5U2hpcE9uVmlldyh4LCB5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHBsYWNlbWVudEdyaWQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gX3NldFVwQ29udHJvbEJ0bnMoKSB7XG4gICAgY29uc3Qgcm90YXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JvdGF0ZS1idG4nKTtcbiAgICBjb25zdCByZXNldEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNldC1idG4nKTtcbiAgICBjb25zdCByYW5kb21CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmFuZG9taXNlLWJ0bicpO1xuICAgIGNvbnN0IGdvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dvLWJ0bicpO1xuICAgIHJvdGF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHBsYWNlbWVudE9yaWVudGF0aW9uID1cbiAgICAgICAgcGxhY2VtZW50T3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJyA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCc7XG4gICAgfSk7XG4gICAgcmVzZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICByZW1vdmVTaGlwKCdjYXJyaWVyJyk7XG4gICAgICByZW1vdmVTaGlwKCdiYXR0bGVzaGlwJyk7XG4gICAgICByZW1vdmVTaGlwKCdkZXN0cm95ZXInKTtcbiAgICAgIHJlbW92ZVNoaXAoJ3N1Ym1hcmluZScpO1xuICAgICAgcmVtb3ZlU2hpcCgnYm9hdCcpO1xuICAgICAgcmVuZGVyR3JpZCgpO1xuICAgICAgX21ha2VCdXR0b25zKCk7XG4gICAgfSk7XG4gICAgcmFuZG9tQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcmVtb3ZlU2hpcCgnY2FycmllcicpO1xuICAgICAgcmVtb3ZlU2hpcCgnYmF0dGxlc2hpcCcpO1xuICAgICAgcmVtb3ZlU2hpcCgnZGVzdHJveWVyJyk7XG4gICAgICByZW1vdmVTaGlwKCdzdWJtYXJpbmUnKTtcbiAgICAgIHJlbW92ZVNoaXAoJ2JvYXQnKTtcbiAgICAgIGNvbnN0IGJvYXJkID0gX2dldFJhbmRvbUJvYXJkKCk7XG4gICAgICBfYWRkUmFuZG9tQm9hcmQoYm9hcmQpO1xuICAgICAgX21ha2VCdXR0b25zKCk7XG4gICAgICByZW5kZXJHcmlkKCk7XG4gICAgICBzZWxlY3RlZFNoaXAgPSBudWxsO1xuICAgIH0pO1xuICAgIGdvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKGdhbWVtb2RlID09PSAnY3B1Jykge1xuICAgICAgICBjb25zb2xlLmxvZygnZ2FtZSBzdGFydGVkJyk7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gT2JqZWN0LmFzc2lnbih7fSwgc2hpcERhdGEpO1xuICAgICAgICBnYW1lQ29udHJvbGxlci5jcmVhdGVQbGF5ZXIxKGJvYXJkKTtcbiAgICAgICAgZ2FtZUNvbnRyb2xsZXIuY3JlYXRlUGxheWVyMihudWxsKTtcbiAgICAgICAgLy8gZ2FtZUNvbnRyb2xsZXIuc3RhcnRHYW1lKCk7XG4gICAgICAgIC8vIGdhbWVWaWV3LmluaXRpYWxpemUoKTtcbiAgICAgIH0gZWxzZSBpZiAoZ2FtZW1vZGUgPT09ICdwbGF5ZXInKSB7XG4gICAgICAgIGlmIChwbGF5ZXJzU2V0ID09PSAwKSB7XG4gICAgICAgICAgcGxheWVyc1NldCsrO1xuICAgICAgICAgIGNvbnN0IGJvYXJkID0gT2JqZWN0LmFzc2lnbih7fSwgc2hpcERhdGEpO1xuICAgICAgICAgIGdhbWVDb250cm9sbGVyLmNyZWF0ZVBsYXllcjEoYm9hcmQpO1xuICAgICAgICAgIGluaXRpYWxpemUoKTtcbiAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXJzU2V0ID09PSAxKSB7XG4gICAgICAgICAgY29uc3QgYm9hcmQgPSBPYmplY3QuYXNzaWduKHt9LCBzaGlwRGF0YSk7XG4gICAgICAgICAgZ2FtZUNvbnRyb2xsZXIuY3JlYXRlUGxheWVyMihib2FyZCk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3BsYXllciAyIHNldCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgLy8gcmV0dXJucyB0cnVlIG9yIGZhbHNlIGlmIG1vdXNlb3ZlciBzcWF1cmUgaXMgYSB2YWxpZCBwbGFjZW1lbnRcbiAgZnVuY3Rpb24gY2hlY2tWYWxpZFBsYWNlbWVudCh4LCB5LCBsZW5ndGgsIG9yaWVudGF0aW9uKSB7XG4gICAgLy8gY2hlY2sgb3V0IG9mIGJvdW5kc1xuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBpZiAoeCArIGxlbmd0aCA+IDEwKSByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgaWYgKHkgKyBsZW5ndGggPiAxMCkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBjaGVjayBubyBvdmVybGFwLCBlbm51bWVyYXRlIHNoaXBsb2NhdGlvblxuICAgIGZvciAobGV0IHNoaXAgaW4gc2hpcERhdGEpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2hpcERhdGFbc2hpcF0ubG9jYXRpb24ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IGNoZWNrWCA9IG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcgPyB4ICsgaSA6IHg7XG4gICAgICAgICAgY29uc3QgY2hlY2tZID0gb3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcgPyB5ICsgaSA6IHk7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgc2hpcERhdGFbc2hpcF1bJ2xvY2F0aW9uJ11bal1bJ3gnXSA9PT0gY2hlY2tYICYmXG4gICAgICAgICAgICBzaGlwRGF0YVtzaGlwXVsnbG9jYXRpb24nXVtqXVsneSddID09PSBjaGVja1lcbiAgICAgICAgICApXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLy8gaGlnaGxpZ2h0IHJlZCBvciBncmVlbiBzaGlwIG9uIGdyaWRcbiAgZnVuY3Rpb24gZGlzcGxheVNoaXBPblZpZXcoeCwgeSkge1xuICAgIGlmIChzZWxlY3RlZFNoaXAgPT09IG51bGwpIHJldHVybjtcbiAgICBjb25zdCBsZW5ndGggPSBoZWxwZXIuc2hpcEluZm8oc2VsZWN0ZWRTaGlwKS5sZW5ndGg7XG4gICAgY29uc3Qgb3JpZW50YXRpb24gPSBwbGFjZW1lbnRPcmllbnRhdGlvbjtcbiAgICBjb25zdCBpc1ZhbGlkID0gY2hlY2tWYWxpZFBsYWNlbWVudCh4LCB5LCBsZW5ndGgsIG9yaWVudGF0aW9uKTtcblxuICAgIGlmIChpc1ZhbGlkKVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB4cG9zID0gb3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJyA/IHggKyBpIDogeDtcbiAgICAgICAgY29uc3QgeXBvcyA9IG9yaWVudGF0aW9uID09PSAndmVydGljYWwnID8geSArIGkgOiB5O1xuICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGBbZGF0YS14PVwiJHt4cG9zfVwiXVtkYXRhLXk9XCIke3lwb3N9XCJdYFxuICAgICAgICApO1xuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgndmFsaWQtc3F1YXJlJyk7XG4gICAgICB9XG4gICAgZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHhwb3MgPSBvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnID8geCArIGkgOiB4O1xuICAgICAgICBjb25zdCB5cG9zID0gb3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcgPyB5ICsgaSA6IHk7XG4gICAgICAgIGlmICh4cG9zID4gOSB8fCB5cG9zID4gOSkgYnJlYWs7XG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYFtkYXRhLXg9XCIke3hwb3N9XCJdW2RhdGEteT1cIiR7eXBvc31cIl1gXG4gICAgICAgICk7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkLXNxdWFyZScpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBjbGVhcnMgdmFsaWQgb3IgaW52YWxpZCBzcXVhcmUgd2hlbiBob3ZlcmluZ1xuICBmdW5jdGlvbiBjbGVhckRpc3BsYXlTaGlwKCkge1xuICAgIGNvbnN0IHNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxhY2VtZW50LWdyaWQgPiAqJyk7XG4gICAgc3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkLXNxdWFyZScpO1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ3ZhbGlkLXNxdWFyZScpO1xuICAgIH0pO1xuICB9XG4gIC8vIGNhbGxiYWNrIGZvciBjbGljayBzcXVhcmUgcGxhY2VtZW50IGV2ZW50IGlmIHZhbGlkIHBsYWNlZFxuICBmdW5jdGlvbiBhZGRTaGlwKHgsIHksIG5hbWUsIG9yaWVudGF0aW9uKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gaGVscGVyLnNoaXBJbmZvKG5hbWUpLmxlbmd0aDtcbiAgICBpZiAoIWNoZWNrVmFsaWRQbGFjZW1lbnQoeCwgeSwgbGVuZ3RoLCBvcmllbnRhdGlvbikpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdub3QgcG9zc2libGUnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHNoaXBEYXRhW25hbWVdLmxvY2F0aW9uLmxlbmd0aCAhPT0gMCkge1xuICAgICAgYWxlcnQoYCR7bmFtZX0gYWxyZWFkeSBleGlzdHNgKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IC8vcHJldmVudHMgb3ZlcndyaXRpbmdcbiAgICBjb25zdCBsb2NhdGlvbiA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNvb3JkID0ge307XG4gICAgICBjb25zdCB4cG9zID0gb3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJyA/IHggKyBpIDogeDtcbiAgICAgIGNvbnN0IHlwb3MgPSBvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJyA/IHkgKyBpIDogeTtcbiAgICAgIGNvb3JkLnggPSB4cG9zO1xuICAgICAgY29vcmQueSA9IHlwb3M7XG4gICAgICBsb2NhdGlvbi5wdXNoKGNvb3JkKTtcbiAgICB9XG4gICAgc2hpcERhdGFbbmFtZV0ubG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICBzaGlwRGF0YVtuYW1lXS5mYWNpbmcgPSBvcmllbnRhdGlvbjtcbiAgICBfY2hlY2tTdGFydENvbmRpdGlvbigpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGZ1bmN0aW9uIHJlbW92ZVNoaXAobmFtZSkge1xuICAgIGlmIChuYW1lID09PSB1bmRlZmluZWQpIHJldHVybiBmYWxzZTtcbiAgICBzaGlwRGF0YVtuYW1lXS5sb2NhdGlvbiA9IFtdO1xuICAgIHNoaXBEYXRhW25hbWVdLmZhY2luZyA9IG51bGw7XG4gICAgX2NoZWNrU3RhcnRDb25kaXRpb24oKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBmdW5jdGlvbiByZW5kZXJHcmlkKCkge1xuICAgIGNvbnN0IHNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxhY2VtZW50LWdyaWQgPiAqJyk7XG4gICAgc3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKCdjYXJyaWVyLWNvbG9yJyk7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgnYmF0dGxlc2hpcC1jb2xvcicpO1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ2Rlc3Ryb3llci1jb2xvcicpO1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ3N1Ym1hcmluZS1jb2xvcicpO1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ2JvYXQtY29sb3InKTtcbiAgICAgIHNxdWFyZS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc2hpcHR5cGUnLCAnJyk7XG4gICAgfSk7XG4gICAgZm9yIChjb25zdCBzaGlwIGluIHNoaXBEYXRhKSB7XG4gICAgICBzaGlwRGF0YVtzaGlwXVsnbG9jYXRpb24nXS5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgICAgICBjb25zdCB4cG9zID0gY29vcmQueDtcbiAgICAgICAgY29uc3QgeXBvcyA9IGNvb3JkLnk7XG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYFtkYXRhLXg9XCIke3hwb3N9XCJdW2RhdGEteT1cIiR7eXBvc31cIl1gXG4gICAgICAgICk7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKGAke3NoaXB9LWNvbG9yYCk7XG4gICAgICAgIHNxdWFyZS5kYXRhc2V0LnNoaXB0eXBlID0gc2hpcDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBfbWFrZUJ1dHRvbnMoKSB7XG4gICAgbGV0IGZpcnN0ID0gZmFsc2U7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtYnV0dG9uLWNvbnRhaW5lcicpO1xuICAgIGxldCBjYXJyaWVyQnRuLCBiYXR0bGVzaGlwQnRuLCBkZXN0cm95ZXJCdG4sIHN1Ym1hcmluZUJ0biwgYm9hdEJ0bjtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgaWYgKHNoaXBEYXRhWydjYXJyaWVyJ10ubG9jYXRpb24ubGVuZ3RoID09PSAwKSB7XG4gICAgICBjYXJyaWVyQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBjYXJyaWVyQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2Fycmllci1idG4nKTtcbiAgICAgIGNhcnJpZXJCdG4udGV4dENvbnRlbnQgPSAnQ2Fycmllcic7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FycmllckJ0bik7XG4gICAgICBpZiAoZmlyc3QgPT09IGZhbHNlKSB7XG4gICAgICAgIGZpcnN0ID0gdHJ1ZTtcbiAgICAgICAgc2VsZWN0ZWRTaGlwID0gJ2NhcnJpZXInO1xuICAgICAgICBjYXJyaWVyQnRuLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnJyk7XG4gICAgICAgIGNhcnJpZXJCdG4uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNoaXBEYXRhWydiYXR0bGVzaGlwJ10ubG9jYXRpb24ubGVuZ3RoID09PSAwKSB7XG4gICAgICBiYXR0bGVzaGlwQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBiYXR0bGVzaGlwQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnYmF0dGxlc2hpcC1idG4nKTtcbiAgICAgIGJhdHRsZXNoaXBCdG4udGV4dENvbnRlbnQgPSAnQmF0dGxlc2hpcCc7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYmF0dGxlc2hpcEJ0bik7XG4gICAgICBpZiAoZmlyc3QgPT09IGZhbHNlKSB7XG4gICAgICAgIGZpcnN0ID0gdHJ1ZTtcbiAgICAgICAgc2VsZWN0ZWRTaGlwID0gJ2JhdHRsZXNoaXAnO1xuICAgICAgICBiYXR0bGVzaGlwQnRuLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnJyk7XG4gICAgICAgIGJhdHRsZXNoaXBCdG4uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNoaXBEYXRhWydkZXN0cm95ZXInXS5sb2NhdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICAgIGRlc3Ryb3llckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgZGVzdHJveWVyQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzdHJveWVyLWJ0bicpO1xuICAgICAgZGVzdHJveWVyQnRuLnRleHRDb250ZW50ID0gJ0Rlc3Ryb3llcic7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzdHJveWVyQnRuKTtcbiAgICAgIGlmIChmaXJzdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgZmlyc3QgPSB0cnVlO1xuICAgICAgICBzZWxlY3RlZFNoaXAgPSAnZGVzdHJveWVyJztcbiAgICAgICAgZGVzdHJveWVyQnRuLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnJyk7XG4gICAgICAgIGRlc3Ryb3llckJ0bi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc2hpcERhdGFbJ3N1Ym1hcmluZSddLmxvY2F0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgc3VibWFyaW5lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBzdWJtYXJpbmVCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdzdWJtYXJpbmUtYnRuJyk7XG4gICAgICBzdWJtYXJpbmVCdG4udGV4dENvbnRlbnQgPSAnU3VibWFyaW5lJztcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtYXJpbmVCdG4pO1xuICAgICAgaWYgKGZpcnN0ID09PSBmYWxzZSkge1xuICAgICAgICBmaXJzdCA9IHRydWU7XG4gICAgICAgIHNlbGVjdGVkU2hpcCA9ICdzdWJtYXJpbmUnO1xuICAgICAgICBzdWJtYXJpbmVCdG4uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICcnKTtcbiAgICAgICAgc3VibWFyaW5lQnRuLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzaGlwRGF0YVsnYm9hdCddLmxvY2F0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgYm9hdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgYm9hdEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2JvYXQtYnRuJyk7XG4gICAgICBib2F0QnRuLnRleHRDb250ZW50ID0gJ1BhdHJvbCc7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYm9hdEJ0bik7XG4gICAgICBpZiAoZmlyc3QgPT09IGZhbHNlKSB7XG4gICAgICAgIGZpcnN0ID0gdHJ1ZTtcbiAgICAgICAgc2VsZWN0ZWRTaGlwID0gJ2JvYXQnO1xuICAgICAgICBib2F0QnRuLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnJyk7XG4gICAgICAgIGJvYXRCdG4uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhbGxCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICcuc2hpcC1idXR0b24tY29udGFpbmVyID4gYnV0dG9uJ1xuICAgICk7XG4gICAgaWYgKHNoaXBEYXRhWydjYXJyaWVyJ10ubG9jYXRpb24ubGVuZ3RoID09PSAwKSB7XG4gICAgICBjYXJyaWVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKHNlbGVjdGVkU2hpcCA9PT0gJ2NhcnJpZXInKSB7XG4gICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICBzZWxlY3RlZFNoaXAgPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFsbEJ0bnMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgc2VsZWN0ZWRTaGlwID0gJ2NhcnJpZXInO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHNoaXBEYXRhWydiYXR0bGVzaGlwJ10ubG9jYXRpb24ubGVuZ3RoID09PSAwKSB7XG4gICAgICBiYXR0bGVzaGlwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKHNlbGVjdGVkU2hpcCA9PT0gJ2JhdHRsZXNoaXAnKSB7XG4gICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICBzZWxlY3RlZFNoaXAgPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFsbEJ0bnMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgc2VsZWN0ZWRTaGlwID0gJ2JhdHRsZXNoaXAnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHNoaXBEYXRhWydkZXN0cm95ZXInXS5sb2NhdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICAgIGRlc3Ryb3llckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChzZWxlY3RlZFNoaXAgPT09ICdkZXN0cm95ZXInKSB7XG4gICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICBzZWxlY3RlZFNoaXAgPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFsbEJ0bnMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgc2VsZWN0ZWRTaGlwID0gJ2Rlc3Ryb3llcic7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoc2hpcERhdGFbJ3N1Ym1hcmluZSddLmxvY2F0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgc3VibWFyaW5lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKHNlbGVjdGVkU2hpcCA9PT0gJ3N1Ym1hcmluZScpIHtcbiAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgIHNlbGVjdGVkU2hpcCA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWxsQnRucy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICBzZWxlY3RlZFNoaXAgPSAnc3VibWFyaW5lJztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChzaGlwRGF0YVsnYm9hdCddLmxvY2F0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgYm9hdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChzZWxlY3RlZFNoaXAgPT09ICdib2F0Jykge1xuICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgc2VsZWN0ZWRTaGlwID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGxCdG5zLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICAgIHNlbGVjdGVkU2hpcCA9ICdib2F0JztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIF9nZXRSYW5kb21Cb2FyZCgpIHtcbiAgICBjb25zdCBwbGF5ZXIgPSBQbGF5ZXIoKTtcbiAgICBwbGF5ZXIucGxhY2VSYW5kb20oKTtcbiAgICBjb25zdCBib2FyZCA9IHBsYXllci5nZXRCb2FyZCgpO1xuICAgIGNvbnN0IGxvY2F0aW9uID0gYm9hcmQuZ2V0U2hpcExvY2F0aW9uKCk7XG4gICAgcmV0dXJuIGxvY2F0aW9uO1xuICB9XG4gIGZ1bmN0aW9uIF9hZGRSYW5kb21Cb2FyZChib2FyZCkge1xuICAgIGZvciAobGV0IHNoaXAgaW4gYm9hcmQpIHtcbiAgICAgIGxldCBzaGlwT3JpZW50YXRpb247XG4gICAgICBjb25zdCBjb29yZFggPSBib2FyZFtzaGlwXVswXVsneCddO1xuICAgICAgY29uc3QgY29vcmRZID0gYm9hcmRbc2hpcF1bMF1bJ3knXTtcbiAgICAgIGlmIChib2FyZFtzaGlwXVsxXVsneCddIC0gYm9hcmRbc2hpcF1bMF1bJ3gnXSA9PT0gMSkge1xuICAgICAgICBzaGlwT3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCc7XG4gICAgICB9IGVsc2Ugc2hpcE9yaWVudGF0aW9uID0gJ3ZlcnRpY2FsJztcbiAgICAgIGFkZFNoaXAoY29vcmRYLCBjb29yZFksIHNoaXAsIHNoaXBPcmllbnRhdGlvbik7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIF9jaGVja1N0YXJ0Q29uZGl0aW9uKCkge1xuICAgIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dvLWJ0bicpO1xuICAgIGZvciAobGV0IHNoaXAgaW4gc2hpcERhdGEpIHtcbiAgICAgIGlmIChzaGlwRGF0YVtzaGlwXS5sb2NhdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgc3RhcnRCdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBzdGFydEJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgZnVuY3Rpb24gX2NsZWFyU2hpcERhdGEoKSB7XG4gICAgZm9yIChsZXQgc2hpcCBpbiBzaGlwRGF0YSkge1xuICAgICAgc2hpcERhdGFbc2hpcF0ubG9jYXRpb24gPSBbXTtcbiAgICAgIHNoaXBEYXRhW3NoaXBdLmZhY2luZyA9IG51bGw7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIF91cGRhdGVUdXJuRGlzcGxheSgpIHtcbiAgICBjb25zdCBpbmZvRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGFjZW1lbnQtaW5mbycpO1xuICAgIGluZm9EaXNwbGF5LnRleHRDb250ZW50ID0gYFBsYXllciAke3BsYXllcnNTZXQgKyAxfSdzIHR1cm4gdG8gcGxhY2VgO1xuICB9XG5cbiAgcmV0dXJuIHsgaW5pdGlhbGl6ZSwgc2V0R2FtZW1vZGUgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHBsYWNlbWVudFZpZXcgfTtcbiIsImltcG9ydCB7IHBsYWNlbWVudFZpZXcgfSBmcm9tICcuL3BsYWNlbWVudFZpZXcnO1xuY29uc3Qgc2VsZWN0aW9uVmlldyA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXJnZXQnKTtcbiAgY29uc3QgaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0YXJnZXQuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJzZWxlY3QtY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2VsZWN0LXBhbmVsXCI+XG4gICAgICAgICAgPGgyPkdBTUVNT0RFPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VsZWN0LWJ0bi1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJwbGF5ZXJcIj5QTEFZRVI8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjcHVcIj5DUFU8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICAgIGNvbnN0IHBsYXllck1vZGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyJyk7XG4gICAgY29uc3QgY3B1TW9kZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcHUnKTtcbiAgICBwbGF5ZXJNb2RlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKHBsYWNlbWVudFZpZXcuc2V0R2FtZW1vZGUoJ3BsYXllcicpKSBwbGFjZW1lbnRWaWV3LmluaXRpYWxpemUoKTtcbiAgICB9KTtcbiAgICBjcHVNb2RlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKHBsYWNlbWVudFZpZXcuc2V0R2FtZW1vZGUoJ2NwdScpKSBwbGFjZW1lbnRWaWV3LmluaXRpYWxpemUoKTtcbiAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIHsgaW5pdGlhbGl6ZSB9O1xufSkoKTtcbmV4cG9ydCB7IHNlbGVjdGlvblZpZXcgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgc2VsZWN0aW9uVmlldyB9IGZyb20gJy4vbW9kdWxlcy92aWV3cy9zZWxlY3Rpb25WaWV3JztcbmltcG9ydCB7IHBsYWNlbWVudFZpZXcgfSBmcm9tICcuL21vZHVsZXMvdmlld3MvcGxhY2VtZW50Vmlldyc7XG5cbnNlbGVjdGlvblZpZXcuaW5pdGlhbGl6ZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9