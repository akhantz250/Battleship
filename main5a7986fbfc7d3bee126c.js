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
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n  font-size: 16px;\n  --teal-200: #80CBC4;\n  --teal-600: #26A69A;\n  --teal-400:#26A69A;\n  --deep-purple-300:#9575CD;\n  --deep-purple-600: #5E35B1;\n  --deep-purple-900: #311B92;\n  --teal-800: #00695C;\n  --green-800: #1B5E20;\n  --pink-900:#880E4F;\n\n  --red-500: #F44336;\n  --gray-500: #9E9E9E;\n  --light-blue-300: #4FC3F7;\n}\n*{\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Poppins', sans-serif;\n}\nbody{\n  width: 100%;\n  min-height: 100vh;\n  background-color: var(--teal-200);\n}\nheader{\n  height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nheader h1{\n  font-size: 40px;\n  color: var(--deep-purple-900);\n}\ndiv.select-content{\n  height: 100%;\n  margin: auto;\n  width: 100%;\n  min-height: 500px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\ndiv.select-panel{\n  background-color: white;\n  width: 280px;\n  height: 350px;\n  border-radius: 10px;\n  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n}\n.select-panel h2{\n  text-align: center;\n  padding: 15px;\n  margin-top: 20px;\n  margin-bottom: 60px;\n}\ndiv.target{\n  height: calc(100vh - 100px);\n  width: 100%;\n}\n.placement-grid{\n  max-height: 500px;\n  height: 500px;\n  width: 500px;\n  min-width: 500px;\n  background-color: white;\n  /* border: 3px solid black; */\n  border-top: 2px solid black;\n  border-left: 2px solid black;\n  border-bottom: 3px solid black;\n  border-right: 3px solid black;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  margin: 0 100px;\n}\n.placement-grid-square,.attack-grid-square,.display-grid-square,.reveal-grid-square{\n  /* border: 1px solid black; */\n  border-left: 1px solid black;\n  border-top: 1px solid black;\n  background-color: white;\n  width: 100%;\n  height: 100%;\n}\ndiv.attack-grid-square{\n  background-color: var(--gray-500);\n}\n.placement-grid .valid-square{\n  background-color: var(--teal-200);\n}\n.placement-grid .invalid-square{\n  background-color: var(--red-500);\n}\n.ship-panel,.button-panel{\n  border: 3px solid black;\n  height: 500px;\n  width: 200px;\n  background-color: var(--deep-purple-300);\n}\n.button-panel, .ship-button-container{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n}\n.ship-panel{\n  display: flex;\n  flex-direction: column;\n}\n.ship-button-container{\n  flex-grow: 1;\n  padding: 15px;\n}\n.button-panel button, .ship-button-container button{\n  display: block;\n  width: 120px;\n  height: 50px;\n  border-radius: 5px;\n  border: none;\n  font-size: 16px;\n  box-shadow: 2px 2px 3px rgb(101, 101, 101);\n}\n.select-btn-container{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 50px;\n}\n.select-btn-container button{\n  display: block;\n  width: 120px;\n  padding: 10px 5px;\n  border: none;\n  background-color: var(--deep-purple-600);\n  color: white;\n  border-radius: 5px;\n}\n.select-btn-container button:hover{\n  background-color: var(--deep-purple-900);\n}\n.ship-button-container button.selected{\n  background-color: var(--teal-800);\n  color: white;\n}\n.button-panel button:hover:not(:disabled), .ship-button-container button:hover:not(.selected){\n  background-color: rgb(197, 197, 197);\n}\n.ship-panel h3{\n  text-align: center;\n  color: white;\n  padding: 10px;\n}\n.placement-grid div.carrier-color,.display-grid div.carrier-color,.reveal-grid div.carrier-color{\n  background-color: var(--deep-purple-900);\n}\n.placement-grid div.battleship-color,.display-grid div.battleship-color,.reveal-grid div.battleship-color{\n  background-color: var(--teal-800);\n}\n.placement-grid div.destroyer-color,.display-grid div.destroyer-color,.reveal-grid div.destroyer-color{\n  background-color: var(--deep-purple-900);\n}\n.placement-grid div.submarine-color,.display-grid div.submarine-color,.reveal-grid div.submarine-color{\n  background-color: var(--teal-800);\n}\n.placement-grid div.boat-color,.display-grid div.boat-color,.reveal-grid div.boat-color{\n  background-color: var(--deep-purple-900);\n}\ndiv.main-content{\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n.placement-container{\n  min-height: 500px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 110px;\n}\n.placement-info{\n  margin-top: 20px;\n  width: 500px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center;\n  white-space: nowrap;\n}\n.game-content{\n  height: 100%;\n  margin: auto;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 50px;\n}\n.gameboard-container{\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 250px;\n  width: 100%;\n  padding-bottom: 100px;\n}\n.left-side,.right-side{\n  width: 400px;\n  min-width: 400px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.display-grid,.attack-grid, .reveal-grid{\n  width: 400px;\n  height: 400px;\n  background-color:white;\n  border-top: 2px solid black;\n  border-left: 2px solid black;\n  border-bottom: 3px solid black;\n  border-right: 3px solid black;\n  display: grid;\n  grid-template-columns: repeat(10,1fr);\n  grid-template-rows: repeat(10,1fr);\n}\n.game-info{\n  margin-top: 20px;\n  width: 500px;\n  text-align: center;\n  color: white;\n  padding: 15px;\n  background-color: #9575CD;\n  border-radius: 10px;\n  border: 3px solid var(--deep-purple-600) ;\n}\n.sunk{\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: center;\n  background-size: cover;\n}\n.display-grid div.miss, .attack-grid div.miss, .reveal-grid div.miss{\n  background-color: var(--light-blue-300);\n}\n\n.attack-grid div.sunk{\n  background-color: var(--red-500);\n}\n.modal-container{\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.3);\n  backdrop-filter: blur(4px);\n  z-index: 100;\n  top: 0%;\n  left: 0%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  pointer-events: auto;\n  opacity: 1;\n  transition: opacity 0.3s ease;\n}\n.modal{\n  border-radius: 5px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.24);\n  height: 210px;\n  width: 320px;\n  background-color: white;\n  text-align: center;\n  position: relative;\n}\n\n.modal h2{\n  margin-top: 15px;\n  margin-bottom: 40px;\n}\n\n.modal-btn-container{\n  margin-top: 20px;\n}\n.modal-btn-container button{\n  display: inline-block;\n  width: 80px;\n  margin: 0px 20px;\n  padding: 5px;\n  border: none;\n  box-shadow: 2px 2px 3px rgb(101, 101, 101);\n  color: white;\n  font-size: 16px;\n}\n#btn-yes{\n  background-color: var(--teal-600);\n}\n#btn-no{\n  background-color: var(--red-500);\n}\n.pass-screen{\n  width: 100vw;\n  height: 100vh;\n  background-color: var(--deep-purple-600);\n  position: fixed;\n  visibility: hidden;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  gap: 70px;\n  z-index: 100;\n}\n.pass-screen button{\n  font-size: 24px;\n  padding: 8px 24px;\n  border-radius: 10px;\n  border: none;\n  box-shadow: 2px 2px 3px rgba(0, 0, 0,0.2);\n}\n.pass-screen h1{\n  font-size: 48px;\n  color: white;\n}\n.pass-screen button:hover{\n  background-color: var(--teal-800);\n  color: white;\n}\n.show-screen{\n  visibility: visible;\n}\n.placement-grid .ship-head-horizontal,.display-grid .ship-head-horizontal,.reveal-grid .ship-head-horizontal{\n  border-right: none;\n}\n.placement-grid .ship-body-horizontal,.display-grid .ship-body-horizontal,.reveal-grid .ship-body-horizontal{\n  border-left: none;\n  border-right: none;\n}\n.placement-grid .ship-tail-horizontal,.display-grid .ship-tail-horizontal,.reveal-grid .ship-tail-horizontal{\n  border-left: none;\n}\n.placement-grid .ship-head-vertical,.display-grid .ship-head-vertical, .reveal-grid .ship-head-vertical{\n  border-bottom: none;\n}\n.placement-grid .ship-body-vertical, .display-grid .ship-body-vertical, .reveal-grid .ship-body-vertical{\n  border-top: none;\n  border-bottom: none;\n}\n.placement-grid .ship-tail-vertical,.display-grid .ship-tail-vertical,.reveal-grid .ship-tail-vertical{\n  border-top: none;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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AAgC;AAClC;AACA;EACE,eAAe;EACf,YAAY;EACZ,aAAa;EACb,oCAAoC;EACpC,0BAA0B;EAC1B,YAAY;EACZ,OAAO;EACP,QAAQ;EACR,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,oBAAoB;EACpB,UAAU;EACV,6BAA6B;AAC/B;AACA;EACE,kBAAkB;EAClB,yCAAyC;EACzC,aAAa;EACb,YAAY;EACZ,uBAAuB;EACvB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;AACA;EACE,qBAAqB;EACrB,WAAW;EACX,gBAAgB;EAChB,YAAY;EACZ,YAAY;EACZ,0CAA0C;EAC1C,YAAY;EACZ,eAAe;AACjB;AACA;EACE,iCAAiC;AACnC;AACA;EACE,gCAAgC;AAClC;AACA;EACE,YAAY;EACZ,aAAa;EACb,wCAAwC;EACxC,eAAe;EACf,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,YAAY;AACd;AACA;EACE,eAAe;EACf,iBAAiB;EACjB,mBAAmB;EACnB,YAAY;EACZ,yCAAyC;AAC3C;AACA;EACE,eAAe;EACf,YAAY;AACd;AACA;EACE,iCAAiC;EACjC,YAAY;AACd;AACA;EACE,mBAAmB;AACrB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,gBAAgB;EAChB,mBAAmB;AACrB;AACA;EACE,gBAAgB;AAClB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');\n:root{\n  font-size: 16px;\n  --teal-200: #80CBC4;\n  --teal-600: #26A69A;\n  --teal-400:#26A69A;\n  --deep-purple-300:#9575CD;\n  --deep-purple-600: #5E35B1;\n  --deep-purple-900: #311B92;\n  --teal-800: #00695C;\n  --green-800: #1B5E20;\n  --pink-900:#880E4F;\n\n  --red-500: #F44336;\n  --gray-500: #9E9E9E;\n  --light-blue-300: #4FC3F7;\n}\n*{\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Poppins', sans-serif;\n}\nbody{\n  width: 100%;\n  min-height: 100vh;\n  background-color: var(--teal-200);\n}\nheader{\n  height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nheader h1{\n  font-size: 40px;\n  color: var(--deep-purple-900);\n}\ndiv.select-content{\n  height: 100%;\n  margin: auto;\n  width: 100%;\n  min-height: 500px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\ndiv.select-panel{\n  background-color: white;\n  width: 280px;\n  height: 350px;\n  border-radius: 10px;\n  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n}\n.select-panel h2{\n  text-align: center;\n  padding: 15px;\n  margin-top: 20px;\n  margin-bottom: 60px;\n}\ndiv.target{\n  height: calc(100vh - 100px);\n  width: 100%;\n}\n.placement-grid{\n  max-height: 500px;\n  height: 500px;\n  width: 500px;\n  min-width: 500px;\n  background-color: white;\n  /* border: 3px solid black; */\n  border-top: 2px solid black;\n  border-left: 2px solid black;\n  border-bottom: 3px solid black;\n  border-right: 3px solid black;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  margin: 0 100px;\n}\n.placement-grid-square,.attack-grid-square,.display-grid-square,.reveal-grid-square{\n  /* border: 1px solid black; */\n  border-left: 1px solid black;\n  border-top: 1px solid black;\n  background-color: white;\n  width: 100%;\n  height: 100%;\n}\ndiv.attack-grid-square{\n  background-color: var(--gray-500);\n}\n.placement-grid .valid-square{\n  background-color: var(--teal-200);\n}\n.placement-grid .invalid-square{\n  background-color: var(--red-500);\n}\n.ship-panel,.button-panel{\n  border: 3px solid black;\n  height: 500px;\n  width: 200px;\n  background-color: var(--deep-purple-300);\n}\n.button-panel, .ship-button-container{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n}\n.ship-panel{\n  display: flex;\n  flex-direction: column;\n}\n.ship-button-container{\n  flex-grow: 1;\n  padding: 15px;\n}\n.button-panel button, .ship-button-container button{\n  display: block;\n  width: 120px;\n  height: 50px;\n  border-radius: 5px;\n  border: none;\n  font-size: 16px;\n  box-shadow: 2px 2px 3px rgb(101, 101, 101);\n}\n.select-btn-container{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 50px;\n}\n.select-btn-container button{\n  display: block;\n  width: 120px;\n  padding: 10px 5px;\n  border: none;\n  background-color: var(--deep-purple-600);\n  color: white;\n  border-radius: 5px;\n}\n.select-btn-container button:hover{\n  background-color: var(--deep-purple-900);\n}\n.ship-button-container button.selected{\n  background-color: var(--teal-800);\n  color: white;\n}\n.button-panel button:hover:not(:disabled), .ship-button-container button:hover:not(.selected){\n  background-color: rgb(197, 197, 197);\n}\n.ship-panel h3{\n  text-align: center;\n  color: white;\n  padding: 10px;\n}\n.placement-grid div.carrier-color,.display-grid div.carrier-color,.reveal-grid div.carrier-color{\n  background-color: var(--deep-purple-900);\n}\n.placement-grid div.battleship-color,.display-grid div.battleship-color,.reveal-grid div.battleship-color{\n  background-color: var(--teal-800);\n}\n.placement-grid div.destroyer-color,.display-grid div.destroyer-color,.reveal-grid div.destroyer-color{\n  background-color: var(--deep-purple-900);\n}\n.placement-grid div.submarine-color,.display-grid div.submarine-color,.reveal-grid div.submarine-color{\n  background-color: var(--teal-800);\n}\n.placement-grid div.boat-color,.display-grid div.boat-color,.reveal-grid div.boat-color{\n  background-color: var(--deep-purple-900);\n}\ndiv.main-content{\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n.placement-container{\n  min-height: 500px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 110px;\n}\n.placement-info{\n  margin-top: 20px;\n  width: 500px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center;\n  white-space: nowrap;\n}\n.game-content{\n  height: 100%;\n  margin: auto;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 50px;\n}\n.gameboard-container{\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 250px;\n  width: 100%;\n  padding-bottom: 100px;\n}\n.left-side,.right-side{\n  width: 400px;\n  min-width: 400px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.display-grid,.attack-grid, .reveal-grid{\n  width: 400px;\n  height: 400px;\n  background-color:white;\n  border-top: 2px solid black;\n  border-left: 2px solid black;\n  border-bottom: 3px solid black;\n  border-right: 3px solid black;\n  display: grid;\n  grid-template-columns: repeat(10,1fr);\n  grid-template-rows: repeat(10,1fr);\n}\n.game-info{\n  margin-top: 20px;\n  width: 500px;\n  text-align: center;\n  color: white;\n  padding: 15px;\n  background-color: #9575CD;\n  border-radius: 10px;\n  border: 3px solid var(--deep-purple-600) ;\n}\n.sunk{\n  background-image: url(./assets/explosion.png);\n  background-position: center;\n  background-size: cover;\n}\n.display-grid div.miss, .attack-grid div.miss, .reveal-grid div.miss{\n  background-color: var(--light-blue-300);\n}\n\n.attack-grid div.sunk{\n  background-color: var(--red-500);\n}\n.modal-container{\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.3);\n  backdrop-filter: blur(4px);\n  z-index: 100;\n  top: 0%;\n  left: 0%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  pointer-events: auto;\n  opacity: 1;\n  transition: opacity 0.3s ease;\n}\n.modal{\n  border-radius: 5px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.24);\n  height: 210px;\n  width: 320px;\n  background-color: white;\n  text-align: center;\n  position: relative;\n}\n\n.modal h2{\n  margin-top: 15px;\n  margin-bottom: 40px;\n}\n\n.modal-btn-container{\n  margin-top: 20px;\n}\n.modal-btn-container button{\n  display: inline-block;\n  width: 80px;\n  margin: 0px 20px;\n  padding: 5px;\n  border: none;\n  box-shadow: 2px 2px 3px rgb(101, 101, 101);\n  color: white;\n  font-size: 16px;\n}\n#btn-yes{\n  background-color: var(--teal-600);\n}\n#btn-no{\n  background-color: var(--red-500);\n}\n.pass-screen{\n  width: 100vw;\n  height: 100vh;\n  background-color: var(--deep-purple-600);\n  position: fixed;\n  visibility: hidden;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  gap: 70px;\n  z-index: 100;\n}\n.pass-screen button{\n  font-size: 24px;\n  padding: 8px 24px;\n  border-radius: 10px;\n  border: none;\n  box-shadow: 2px 2px 3px rgba(0, 0, 0,0.2);\n}\n.pass-screen h1{\n  font-size: 48px;\n  color: white;\n}\n.pass-screen button:hover{\n  background-color: var(--teal-800);\n  color: white;\n}\n.show-screen{\n  visibility: visible;\n}\n.placement-grid .ship-head-horizontal,.display-grid .ship-head-horizontal,.reveal-grid .ship-head-horizontal{\n  border-right: none;\n}\n.placement-grid .ship-body-horizontal,.display-grid .ship-body-horizontal,.reveal-grid .ship-body-horizontal{\n  border-left: none;\n  border-right: none;\n}\n.placement-grid .ship-tail-horizontal,.display-grid .ship-tail-horizontal,.reveal-grid .ship-tail-horizontal{\n  border-left: none;\n}\n.placement-grid .ship-head-vertical,.display-grid .ship-head-vertical, .reveal-grid .ship-head-vertical{\n  border-bottom: none;\n}\n.placement-grid .ship-body-vertical, .display-grid .ship-body-vertical, .reveal-grid .ship-body-vertical{\n  border-top: none;\n  border-bottom: none;\n}\n.placement-grid .ship-tail-vertical,.display-grid .ship-tail-vertical,.reveal-grid .ship-tail-vertical{\n  border-top: none;\n}"],"sourceRoot":""}]);
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
  };
  const createPlayer2 = function (board) {
    player2 = (0,_player__WEBPACK_IMPORTED_MODULE_1__.Player)();
    if (board === null) {
      player2.placeRandom();
    } else {
      player2.makeBoard(board);
    }
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
        // console.log('invalid move');
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
        // console.log('invalid move');
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
        'ship-head-horizontal',
        'ship-body-horizontal',
        'ship-tail-horizontal',
        'ship-head-vertical',
        'ship-body-vertical',
        'ship-tail-vertical',
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
      const length = ships[ship].length;
      const orientation =
        ships[ship][1]['x'] - ships[ship][0]['x'] === 1
          ? 'horizontal'
          : 'vertical';
      for (let i = 0; i < length; i++) {
        const xpos = ships[ship][i]['x'];
        const ypos = ships[ship][i]['y'];
        const square = document.querySelector(
          `.display-grid-square[data-x="${xpos}"][data-y="${ypos}"]`
        );
        square.classList.add(`${ship}-color`);
        if (i === 0) {
          square.classList.add(`ship-head-${orientation}`);
        } else if (i === length - 1) {
          square.classList.add(`ship-tail-${orientation}`);
        } else {
          square.classList.add(`ship-body-${orientation}`);
        }
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
          const length = ships[ship].length;
          const orientation =
            ships[ship][1]['x'] - ships[ship][0]['x'] === 1
              ? 'horizontal'
              : 'vertical';
          for (let z = 0; z < length; z++) {
            const xpos = ships[ship][z]['x'];
            const ypos = ships[ship][z]['y'];
            if (i === xpos && j === ypos) {
              square.classList.add(`${ship}-color`);
              if (z === 0) {
                square.classList.add(`ship-head-${orientation}`);
              } else if (z === length - 1) {
                square.classList.add(`ship-tail-${orientation}`);
              } else {
                square.classList.add(`ship-body-${orientation}`);
              }
            }
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
      // console.log('not possible');
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
      const classes = [
        'ship-head-horizontal',
        'ship-body-horizontal',
        'ship-tail-horizontal',
        'ship-head-vertical',
        'ship-body-vertical',
        'ship-tail-vertical',
      ];
      square.classList.remove(...classes);
      square.classList.remove('carrier-color');
      square.classList.remove('battleship-color');
      square.classList.remove('destroyer-color');
      square.classList.remove('submarine-color');
      square.classList.remove('boat-color');
      square.removeAttribute('data-shiptype', '');
    });
    for (const ship in shipData) {
      shipData[ship]['location'].forEach((coord, index) => {
        const xpos = coord.x;
        const ypos = coord.y;
        const square = document.querySelector(
          `[data-x="${xpos}"][data-y="${ypos}"]`
        );
        square.classList.add(`${ship}-color`);
        square.dataset.shiptype = ship;
        if (index === 0) {
          square.classList.add(`ship-head-${shipData[ship]['facing']}`);
        } else if (index === shipData[ship].location.length - 1) {
          square.classList.add(`ship-tail-${shipData[ship]['facing']}`);
        } else {
          square.classList.add(`ship-body-${shipData[ship]['facing']}`);
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbjVhNzk4NmZiZmM3ZDNiZWUxMjZjLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMseUhBQXlDO0FBQ3JGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YscUhBQXFIO0FBQ3JILHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSxnREFBZ0Qsb0JBQW9CLHdCQUF3Qix3QkFBd0IsdUJBQXVCLDhCQUE4QiwrQkFBK0IsK0JBQStCLHdCQUF3Qix5QkFBeUIsdUJBQXVCLHlCQUF5Qix3QkFBd0IsOEJBQThCLEdBQUcsSUFBSSxjQUFjLGVBQWUsMkJBQTJCLHVDQUF1QyxHQUFHLE9BQU8sZ0JBQWdCLHNCQUFzQixzQ0FBc0MsR0FBRyxTQUFTLGtCQUFrQixrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLFlBQVksb0JBQW9CLGtDQUFrQyxHQUFHLHFCQUFxQixpQkFBaUIsaUJBQWlCLGdCQUFnQixzQkFBc0Isa0JBQWtCLDRCQUE0Qix3QkFBd0IsR0FBRyxtQkFBbUIsNEJBQTRCLGlCQUFpQixrQkFBa0Isd0JBQXdCLHdEQUF3RCxHQUFHLG1CQUFtQix1QkFBdUIsa0JBQWtCLHFCQUFxQix3QkFBd0IsR0FBRyxhQUFhLGdDQUFnQyxnQkFBZ0IsR0FBRyxrQkFBa0Isc0JBQXNCLGtCQUFrQixpQkFBaUIscUJBQXFCLDRCQUE0QixnQ0FBZ0Msa0NBQWtDLGlDQUFpQyxtQ0FBbUMsa0NBQWtDLGtCQUFrQiwyQ0FBMkMsd0NBQXdDLG9CQUFvQixHQUFHLHNGQUFzRixnQ0FBZ0MsbUNBQW1DLGdDQUFnQyw0QkFBNEIsZ0JBQWdCLGlCQUFpQixHQUFHLHlCQUF5QixzQ0FBc0MsR0FBRyxnQ0FBZ0Msc0NBQXNDLEdBQUcsa0NBQWtDLHFDQUFxQyxHQUFHLDRCQUE0Qiw0QkFBNEIsa0JBQWtCLGlCQUFpQiw2Q0FBNkMsR0FBRyx3Q0FBd0Msa0JBQWtCLDJCQUEyQix3QkFBd0Isa0NBQWtDLEdBQUcsY0FBYyxrQkFBa0IsMkJBQTJCLEdBQUcseUJBQXlCLGlCQUFpQixrQkFBa0IsR0FBRyxzREFBc0QsbUJBQW1CLGlCQUFpQixpQkFBaUIsdUJBQXVCLGlCQUFpQixvQkFBb0IsK0NBQStDLEdBQUcsd0JBQXdCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLGNBQWMsR0FBRywrQkFBK0IsbUJBQW1CLGlCQUFpQixzQkFBc0IsaUJBQWlCLDZDQUE2QyxpQkFBaUIsdUJBQXVCLEdBQUcscUNBQXFDLDZDQUE2QyxHQUFHLHlDQUF5QyxzQ0FBc0MsaUJBQWlCLEdBQUcsZ0dBQWdHLHlDQUF5QyxHQUFHLGlCQUFpQix1QkFBdUIsaUJBQWlCLGtCQUFrQixHQUFHLG1HQUFtRyw2Q0FBNkMsR0FBRyw0R0FBNEcsc0NBQXNDLEdBQUcseUdBQXlHLDZDQUE2QyxHQUFHLHlHQUF5RyxzQ0FBc0MsR0FBRywwRkFBMEYsNkNBQTZDLEdBQUcsbUJBQW1CLGdCQUFnQixrQkFBa0IsMkJBQTJCLHdCQUF3Qiw0QkFBNEIsY0FBYyxHQUFHLHVCQUF1QixzQkFBc0Isa0JBQWtCLDRCQUE0Qix3QkFBd0IsMEJBQTBCLEdBQUcsa0JBQWtCLHFCQUFxQixpQkFBaUIscUJBQXFCLDRCQUE0Qix1QkFBdUIsd0JBQXdCLEdBQUcsZ0JBQWdCLGlCQUFpQixpQkFBaUIsZ0JBQWdCLGtCQUFrQiwyQkFBMkIsZ0NBQWdDLHdCQUF3QixjQUFjLEdBQUcsdUJBQXVCLGtCQUFrQix3QkFBd0IsNEJBQTRCLGVBQWUsZ0JBQWdCLDBCQUEwQixHQUFHLHlCQUF5QixpQkFBaUIscUJBQXFCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLEdBQUcsMkNBQTJDLGlCQUFpQixrQkFBa0IsMkJBQTJCLGdDQUFnQyxpQ0FBaUMsbUNBQW1DLGtDQUFrQyxrQkFBa0IsMENBQTBDLHVDQUF1QyxHQUFHLGFBQWEscUJBQXFCLGlCQUFpQix1QkFBdUIsaUJBQWlCLGtCQUFrQiw4QkFBOEIsd0JBQXdCLDhDQUE4QyxHQUFHLFFBQVEsc0VBQXNFLGdDQUFnQywyQkFBMkIsR0FBRyx1RUFBdUUsNENBQTRDLEdBQUcsMEJBQTBCLHFDQUFxQyxHQUFHLG1CQUFtQixvQkFBb0IsaUJBQWlCLGtCQUFrQix5Q0FBeUMsK0JBQStCLGlCQUFpQixZQUFZLGFBQWEsa0JBQWtCLDRCQUE0Qix3QkFBd0IseUJBQXlCLGVBQWUsa0NBQWtDLEdBQUcsU0FBUyx1QkFBdUIsOENBQThDLGtCQUFrQixpQkFBaUIsNEJBQTRCLHVCQUF1Qix1QkFBdUIsR0FBRyxjQUFjLHFCQUFxQix3QkFBd0IsR0FBRyx5QkFBeUIscUJBQXFCLEdBQUcsOEJBQThCLDBCQUEwQixnQkFBZ0IscUJBQXFCLGlCQUFpQixpQkFBaUIsK0NBQStDLGlCQUFpQixvQkFBb0IsR0FBRyxXQUFXLHNDQUFzQyxHQUFHLFVBQVUscUNBQXFDLEdBQUcsZUFBZSxpQkFBaUIsa0JBQWtCLDZDQUE2QyxvQkFBb0IsdUJBQXVCLGtCQUFrQiw0QkFBNEIsMkJBQTJCLHdCQUF3QixjQUFjLGlCQUFpQixHQUFHLHNCQUFzQixvQkFBb0Isc0JBQXNCLHdCQUF3QixpQkFBaUIsOENBQThDLEdBQUcsa0JBQWtCLG9CQUFvQixpQkFBaUIsR0FBRyw0QkFBNEIsc0NBQXNDLGlCQUFpQixHQUFHLGVBQWUsd0JBQXdCLEdBQUcsK0dBQStHLHVCQUF1QixHQUFHLCtHQUErRyxzQkFBc0IsdUJBQXVCLEdBQUcsK0dBQStHLHNCQUFzQixHQUFHLDBHQUEwRyx3QkFBd0IsR0FBRywyR0FBMkcscUJBQXFCLHdCQUF3QixHQUFHLHlHQUF5RyxxQkFBcUIsR0FBRyxPQUFPLGdGQUFnRixVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksdUdBQXVHLFFBQVEsb0JBQW9CLHdCQUF3Qix3QkFBd0IsdUJBQXVCLDhCQUE4QiwrQkFBK0IsK0JBQStCLHdCQUF3Qix5QkFBeUIsdUJBQXVCLHlCQUF5Qix3QkFBd0IsOEJBQThCLEdBQUcsSUFBSSxjQUFjLGVBQWUsMkJBQTJCLHVDQUF1QyxHQUFHLE9BQU8sZ0JBQWdCLHNCQUFzQixzQ0FBc0MsR0FBRyxTQUFTLGtCQUFrQixrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLFlBQVksb0JBQW9CLGtDQUFrQyxHQUFHLHFCQUFxQixpQkFBaUIsaUJBQWlCLGdCQUFnQixzQkFBc0Isa0JBQWtCLDRCQUE0Qix3QkFBd0IsR0FBRyxtQkFBbUIsNEJBQTRCLGlCQUFpQixrQkFBa0Isd0JBQXdCLHdEQUF3RCxHQUFHLG1CQUFtQix1QkFBdUIsa0JBQWtCLHFCQUFxQix3QkFBd0IsR0FBRyxhQUFhLGdDQUFnQyxnQkFBZ0IsR0FBRyxrQkFBa0Isc0JBQXNCLGtCQUFrQixpQkFBaUIscUJBQXFCLDRCQUE0QixnQ0FBZ0Msa0NBQWtDLGlDQUFpQyxtQ0FBbUMsa0NBQWtDLGtCQUFrQiwyQ0FBMkMsd0NBQXdDLG9CQUFvQixHQUFHLHNGQUFzRixnQ0FBZ0MsbUNBQW1DLGdDQUFnQyw0QkFBNEIsZ0JBQWdCLGlCQUFpQixHQUFHLHlCQUF5QixzQ0FBc0MsR0FBRyxnQ0FBZ0Msc0NBQXNDLEdBQUcsa0NBQWtDLHFDQUFxQyxHQUFHLDRCQUE0Qiw0QkFBNEIsa0JBQWtCLGlCQUFpQiw2Q0FBNkMsR0FBRyx3Q0FBd0Msa0JBQWtCLDJCQUEyQix3QkFBd0Isa0NBQWtDLEdBQUcsY0FBYyxrQkFBa0IsMkJBQTJCLEdBQUcseUJBQXlCLGlCQUFpQixrQkFBa0IsR0FBRyxzREFBc0QsbUJBQW1CLGlCQUFpQixpQkFBaUIsdUJBQXVCLGlCQUFpQixvQkFBb0IsK0NBQStDLEdBQUcsd0JBQXdCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLGNBQWMsR0FBRywrQkFBK0IsbUJBQW1CLGlCQUFpQixzQkFBc0IsaUJBQWlCLDZDQUE2QyxpQkFBaUIsdUJBQXVCLEdBQUcscUNBQXFDLDZDQUE2QyxHQUFHLHlDQUF5QyxzQ0FBc0MsaUJBQWlCLEdBQUcsZ0dBQWdHLHlDQUF5QyxHQUFHLGlCQUFpQix1QkFBdUIsaUJBQWlCLGtCQUFrQixHQUFHLG1HQUFtRyw2Q0FBNkMsR0FBRyw0R0FBNEcsc0NBQXNDLEdBQUcseUdBQXlHLDZDQUE2QyxHQUFHLHlHQUF5RyxzQ0FBc0MsR0FBRywwRkFBMEYsNkNBQTZDLEdBQUcsbUJBQW1CLGdCQUFnQixrQkFBa0IsMkJBQTJCLHdCQUF3Qiw0QkFBNEIsY0FBYyxHQUFHLHVCQUF1QixzQkFBc0Isa0JBQWtCLDRCQUE0Qix3QkFBd0IsMEJBQTBCLEdBQUcsa0JBQWtCLHFCQUFxQixpQkFBaUIscUJBQXFCLDRCQUE0Qix1QkFBdUIsd0JBQXdCLEdBQUcsZ0JBQWdCLGlCQUFpQixpQkFBaUIsZ0JBQWdCLGtCQUFrQiwyQkFBMkIsZ0NBQWdDLHdCQUF3QixjQUFjLEdBQUcsdUJBQXVCLGtCQUFrQix3QkFBd0IsNEJBQTRCLGVBQWUsZ0JBQWdCLDBCQUEwQixHQUFHLHlCQUF5QixpQkFBaUIscUJBQXFCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLEdBQUcsMkNBQTJDLGlCQUFpQixrQkFBa0IsMkJBQTJCLGdDQUFnQyxpQ0FBaUMsbUNBQW1DLGtDQUFrQyxrQkFBa0IsMENBQTBDLHVDQUF1QyxHQUFHLGFBQWEscUJBQXFCLGlCQUFpQix1QkFBdUIsaUJBQWlCLGtCQUFrQiw4QkFBOEIsd0JBQXdCLDhDQUE4QyxHQUFHLFFBQVEsa0RBQWtELGdDQUFnQywyQkFBMkIsR0FBRyx1RUFBdUUsNENBQTRDLEdBQUcsMEJBQTBCLHFDQUFxQyxHQUFHLG1CQUFtQixvQkFBb0IsaUJBQWlCLGtCQUFrQix5Q0FBeUMsK0JBQStCLGlCQUFpQixZQUFZLGFBQWEsa0JBQWtCLDRCQUE0Qix3QkFBd0IseUJBQXlCLGVBQWUsa0NBQWtDLEdBQUcsU0FBUyx1QkFBdUIsOENBQThDLGtCQUFrQixpQkFBaUIsNEJBQTRCLHVCQUF1Qix1QkFBdUIsR0FBRyxjQUFjLHFCQUFxQix3QkFBd0IsR0FBRyx5QkFBeUIscUJBQXFCLEdBQUcsOEJBQThCLDBCQUEwQixnQkFBZ0IscUJBQXFCLGlCQUFpQixpQkFBaUIsK0NBQStDLGlCQUFpQixvQkFBb0IsR0FBRyxXQUFXLHNDQUFzQyxHQUFHLFVBQVUscUNBQXFDLEdBQUcsZUFBZSxpQkFBaUIsa0JBQWtCLDZDQUE2QyxvQkFBb0IsdUJBQXVCLGtCQUFrQiw0QkFBNEIsMkJBQTJCLHdCQUF3QixjQUFjLGlCQUFpQixHQUFHLHNCQUFzQixvQkFBb0Isc0JBQXNCLHdCQUF3QixpQkFBaUIsOENBQThDLEdBQUcsa0JBQWtCLG9CQUFvQixpQkFBaUIsR0FBRyw0QkFBNEIsc0NBQXNDLGlCQUFpQixHQUFHLGVBQWUsd0JBQXdCLEdBQUcsK0dBQStHLHVCQUF1QixHQUFHLCtHQUErRyxzQkFBc0IsdUJBQXVCLEdBQUcsK0dBQStHLHNCQUFzQixHQUFHLDBHQUEwRyx3QkFBd0IsR0FBRywyR0FBMkcscUJBQXFCLHdCQUF3QixHQUFHLHlHQUF5RyxxQkFBcUIsR0FBRyxtQkFBbUI7QUFDM3luQjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1gxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0RBQW9EOztBQUVwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM1QmE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDZjhCOztBQUU5QjtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLDJDQUFJO0FBQ3RCLHFCQUFxQiwyQ0FBSTtBQUN6QixvQkFBb0IsMkNBQUk7QUFDeEIsb0JBQW9CLDJDQUFJO0FBQ3hCLGVBQWUsMkNBQUk7O0FBRW5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0Esc0JBQXNCLFFBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGtCQUFrQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFlBQVk7QUFDbEM7QUFDQTtBQUNBLHNCQUFzQixZQUFZO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixZQUFZO0FBQ2xDO0FBQ0E7QUFDQSxzQkFBc0IsWUFBWTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFlBQVk7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFcUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckp3QjtBQUNYOztBQUVsQztBQUNBO0FBQ0E7QUFDQSxjQUFjLCtDQUFNO0FBQ3BCO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLCtDQUFNO0FBQ3BCO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSw2REFBZ0I7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDhEQUFpQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxVQUFVLDZEQUFnQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw4REFBaUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsVUFBVSw2REFBZ0I7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsNkRBQWdCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsOERBQWlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUV5Qjs7Ozs7Ozs7Ozs7Ozs7O0FDdEkxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsTUFBTTtBQUNOLGVBQWU7QUFDZixNQUFNO0FBQ04sZUFBZTtBQUNmLE1BQU07QUFDTixlQUFlO0FBQ2YsTUFBTTtBQUNOLGVBQWU7QUFDZjtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUM7O0FBRWlCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCc0I7QUFDTjs7QUFFbEM7QUFDQSxvQkFBb0IscURBQVM7O0FBRTdCO0FBQ0E7QUFDQSxvQkFBb0Isa0JBQWtCO0FBQ3RDO0FBQ0E7QUFDQSxVQUFVLHdEQUFtQjtBQUM3QixVQUFVLHdEQUFtQjtBQUM3QjtBQUNBLFVBQVUsNkRBQXdCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHdEQUFtQjtBQUMvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUIsc0JBQXNCLFFBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVrQjs7Ozs7Ozs7Ozs7Ozs7O0FDM0VsQjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxXQUFXO0FBQ1g7O0FBRWdCOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEJ1QztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaUZBQWdDO0FBQ3JEO0FBQ0EsTUFBTSxpRkFBZ0M7QUFDdEMsTUFBTSxpRkFBZ0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCLHNCQUFzQixRQUFRO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSwwRUFBeUI7QUFDbkMsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUIsc0JBQXNCLFFBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsWUFBWTtBQUNsQztBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsS0FBSyxhQUFhLEtBQUs7QUFDakU7QUFDQSxnQ0FBZ0MsS0FBSztBQUNyQztBQUNBLDRDQUE0QyxZQUFZO0FBQ3hELFVBQVU7QUFDViw0Q0FBNEMsWUFBWTtBQUN4RCxVQUFVO0FBQ1YsNENBQTRDLFlBQVk7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsT0FBTyxXQUFXLE9BQU87QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QixzQkFBc0IsUUFBUTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsWUFBWTtBQUN0QztBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsS0FBSztBQUMzQztBQUNBLGtEQUFrRCxZQUFZO0FBQzlELGdCQUFnQjtBQUNoQixrREFBa0QsWUFBWTtBQUM5RCxnQkFBZ0I7QUFDaEIsa0RBQWtELFlBQVk7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRkFBZ0M7QUFDeEMsUUFBUSxpRkFBZ0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlGQUFnQztBQUN4QyxRQUFRLGlGQUFnQztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLDBDQUEwQyxZQUFZO0FBQ3REO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsQ0FBQztBQUNtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JSbUM7QUFDaEI7QUFDQTtBQUNEO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsNEJBQTRCO0FBQzNDLGtCQUFrQiw0QkFBNEI7QUFDOUMsaUJBQWlCLDRCQUE0QjtBQUM3QyxpQkFBaUIsNEJBQTRCO0FBQzdDLFlBQVksNEJBQTRCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUIsc0JBQXNCLFFBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQztBQUN0QyxRQUFRLDZFQUE0QjtBQUNwQyxRQUFRLDZFQUE0QjtBQUNwQyxRQUFRLHlFQUF3QjtBQUNoQyxRQUFRLDBEQUFtQjtBQUMzQixRQUFRO0FBQ1I7QUFDQTtBQUNBLHdDQUF3QztBQUN4QyxVQUFVLDZFQUE0QjtBQUN0QztBQUNBLFVBQVU7QUFDVix3Q0FBd0M7QUFDeEMsVUFBVSw2RUFBNEI7QUFDdEMsVUFBVSx5RUFBd0I7QUFDbEMsVUFBVSwwREFBbUI7QUFDN0I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isb0NBQW9DO0FBQzFELHdCQUF3QixZQUFZO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix3REFBZTtBQUNsQztBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLFlBQVk7QUFDbEM7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLEtBQUssYUFBYSxLQUFLO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFlBQVk7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsS0FBSyxhQUFhLEtBQUs7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsd0RBQWU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsTUFBTTtBQUNyQjtBQUNBLE1BQU07QUFDTjtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsS0FBSyxhQUFhLEtBQUs7QUFDN0M7QUFDQSxnQ0FBZ0MsS0FBSztBQUNyQztBQUNBO0FBQ0EsNENBQTRDLHlCQUF5QjtBQUNyRSxVQUFVO0FBQ1YsNENBQTRDLHlCQUF5QjtBQUNyRSxVQUFVO0FBQ1YsNENBQTRDLHlCQUF5QjtBQUNyRTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbURBQU07QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLGVBQWU7QUFDdkQ7O0FBRUEsV0FBVztBQUNYLENBQUM7O0FBRXdCOzs7Ozs7Ozs7Ozs7Ozs7O0FDamR1QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxxRUFBeUIsWUFBWSxvRUFBd0I7QUFDdkUsS0FBSztBQUNMO0FBQ0EsVUFBVSxxRUFBeUIsU0FBUyxvRUFBd0I7QUFDcEUsS0FBSztBQUNMO0FBQ0EsV0FBVztBQUNYLENBQUM7QUFDd0I7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUJ6QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDeUM7O0FBRTlELGtGQUF3QiIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2FwcC9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvYXBwL2dhbWVjb250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2FwcC9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvYXBwL3BsYXllci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9hcHAvc2hpcC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy92aWV3cy9nYW1lVmlldy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy92aWV3cy9wbGFjZW1lbnRWaWV3LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3ZpZXdzL3NlbGVjdGlvblZpZXcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2V4cGxvc2lvbi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnMmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290e1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgLS10ZWFsLTIwMDogIzgwQ0JDNDtcXG4gIC0tdGVhbC02MDA6ICMyNkE2OUE7XFxuICAtLXRlYWwtNDAwOiMyNkE2OUE7XFxuICAtLWRlZXAtcHVycGxlLTMwMDojOTU3NUNEO1xcbiAgLS1kZWVwLXB1cnBsZS02MDA6ICM1RTM1QjE7XFxuICAtLWRlZXAtcHVycGxlLTkwMDogIzMxMUI5MjtcXG4gIC0tdGVhbC04MDA6ICMwMDY5NUM7XFxuICAtLWdyZWVuLTgwMDogIzFCNUUyMDtcXG4gIC0tcGluay05MDA6Izg4MEU0RjtcXG5cXG4gIC0tcmVkLTUwMDogI0Y0NDMzNjtcXG4gIC0tZ3JheS01MDA6ICM5RTlFOUU7XFxuICAtLWxpZ2h0LWJsdWUtMzAwOiAjNEZDM0Y3O1xcbn1cXG4qe1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5ib2R5e1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlYWwtMjAwKTtcXG59XFxuaGVhZGVye1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbmhlYWRlciBoMXtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGNvbG9yOiB2YXIoLS1kZWVwLXB1cnBsZS05MDApO1xcbn1cXG5kaXYuc2VsZWN0LWNvbnRlbnR7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuZGl2LnNlbGVjdC1wYW5lbHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDI4MHB4O1xcbiAgaGVpZ2h0OiAzNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTUpIDEuOTVweCAxLjk1cHggMi42cHg7XFxufVxcbi5zZWxlY3QtcGFuZWwgaDJ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XFxufVxcbmRpdi50YXJnZXR7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDBweCk7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnBsYWNlbWVudC1ncmlke1xcbiAgbWF4LWhlaWdodDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgbWluLXdpZHRoOiA1MDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgLyogYm9yZGVyOiAzcHggc29saWQgYmxhY2s7ICovXFxuICBib3JkZXItdG9wOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgYmxhY2s7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIG1hcmdpbjogMCAxMDBweDtcXG59XFxuLnBsYWNlbWVudC1ncmlkLXNxdWFyZSwuYXR0YWNrLWdyaWQtc3F1YXJlLC5kaXNwbGF5LWdyaWQtc3F1YXJlLC5yZXZlYWwtZ3JpZC1zcXVhcmV7XFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5kaXYuYXR0YWNrLWdyaWQtc3F1YXJle1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS01MDApO1xcbn1cXG4ucGxhY2VtZW50LWdyaWQgLnZhbGlkLXNxdWFyZXtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlYWwtMjAwKTtcXG59XFxuLnBsYWNlbWVudC1ncmlkIC5pbnZhbGlkLXNxdWFyZXtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC01MDApO1xcbn1cXG4uc2hpcC1wYW5lbCwuYnV0dG9uLXBhbmVse1xcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcC1wdXJwbGUtMzAwKTtcXG59XFxuLmJ1dHRvbi1wYW5lbCwgLnNoaXAtYnV0dG9uLWNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4uc2hpcC1wYW5lbHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uc2hpcC1idXR0b24tY29udGFpbmVye1xcbiAgZmxleC1ncm93OiAxO1xcbiAgcGFkZGluZzogMTVweDtcXG59XFxuLmJ1dHRvbi1wYW5lbCBidXR0b24sIC5zaGlwLWJ1dHRvbi1jb250YWluZXIgYnV0dG9ue1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTIwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDNweCByZ2IoMTAxLCAxMDEsIDEwMSk7XFxufVxcbi5zZWxlY3QtYnRuLWNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNTBweDtcXG59XFxuLnNlbGVjdC1idG4tY29udGFpbmVyIGJ1dHRvbntcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgcGFkZGluZzogMTBweCA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWVwLXB1cnBsZS02MDApO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4uc2VsZWN0LWJ0bi1jb250YWluZXIgYnV0dG9uOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcC1wdXJwbGUtOTAwKTtcXG59XFxuLnNoaXAtYnV0dG9uLWNvbnRhaW5lciBidXR0b24uc2VsZWN0ZWR7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZWFsLTgwMCk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5idXR0b24tcGFuZWwgYnV0dG9uOmhvdmVyOm5vdCg6ZGlzYWJsZWQpLCAuc2hpcC1idXR0b24tY29udGFpbmVyIGJ1dHRvbjpob3Zlcjpub3QoLnNlbGVjdGVkKXtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTcsIDE5NywgMTk3KTtcXG59XFxuLnNoaXAtcGFuZWwgaDN7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG4ucGxhY2VtZW50LWdyaWQgZGl2LmNhcnJpZXItY29sb3IsLmRpc3BsYXktZ3JpZCBkaXYuY2Fycmllci1jb2xvciwucmV2ZWFsLWdyaWQgZGl2LmNhcnJpZXItY29sb3J7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWVwLXB1cnBsZS05MDApO1xcbn1cXG4ucGxhY2VtZW50LWdyaWQgZGl2LmJhdHRsZXNoaXAtY29sb3IsLmRpc3BsYXktZ3JpZCBkaXYuYmF0dGxlc2hpcC1jb2xvciwucmV2ZWFsLWdyaWQgZGl2LmJhdHRsZXNoaXAtY29sb3J7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZWFsLTgwMCk7XFxufVxcbi5wbGFjZW1lbnQtZ3JpZCBkaXYuZGVzdHJveWVyLWNvbG9yLC5kaXNwbGF5LWdyaWQgZGl2LmRlc3Ryb3llci1jb2xvciwucmV2ZWFsLWdyaWQgZGl2LmRlc3Ryb3llci1jb2xvcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZXAtcHVycGxlLTkwMCk7XFxufVxcbi5wbGFjZW1lbnQtZ3JpZCBkaXYuc3VibWFyaW5lLWNvbG9yLC5kaXNwbGF5LWdyaWQgZGl2LnN1Ym1hcmluZS1jb2xvciwucmV2ZWFsLWdyaWQgZGl2LnN1Ym1hcmluZS1jb2xvcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlYWwtODAwKTtcXG59XFxuLnBsYWNlbWVudC1ncmlkIGRpdi5ib2F0LWNvbG9yLC5kaXNwbGF5LWdyaWQgZGl2LmJvYXQtY29sb3IsLnJldmVhbC1ncmlkIGRpdi5ib2F0LWNvbG9ye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcC1wdXJwbGUtOTAwKTtcXG59XFxuZGl2Lm1haW4tY29udGVudHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcbi5wbGFjZW1lbnQtY29udGFpbmVye1xcbiAgbWluLWhlaWdodDogNTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDExMHB4O1xcbn1cXG4ucGxhY2VtZW50LWluZm97XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuLmdhbWUtY29udGVudHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1MHB4O1xcbn1cXG4uZ2FtZWJvYXJkLWNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDI1MHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XFxufVxcbi5sZWZ0LXNpZGUsLnJpZ2h0LXNpZGV7XFxuICB3aWR0aDogNDAwcHg7XFxuICBtaW4td2lkdGg6IDQwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmRpc3BsYXktZ3JpZCwuYXR0YWNrLWdyaWQsIC5yZXZlYWwtZ3JpZHtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIGJsYWNrO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwxZnIpO1xcbn1cXG4uZ2FtZS1pbmZve1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTU3NUNEO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWRlZXAtcHVycGxlLTYwMCkgO1xcbn1cXG4uc3Vua3tcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG4uZGlzcGxheS1ncmlkIGRpdi5taXNzLCAuYXR0YWNrLWdyaWQgZGl2Lm1pc3MsIC5yZXZlYWwtZ3JpZCBkaXYubWlzc3tcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUtMzAwKTtcXG59XFxuXFxuLmF0dGFjay1ncmlkIGRpdi5zdW5re1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLTUwMCk7XFxufVxcbi5tb2RhbC1jb250YWluZXJ7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxuICB6LWluZGV4OiAxMDA7XFxuICB0b3A6IDAlO1xcbiAgbGVmdDogMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XFxufVxcbi5tb2RhbHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xcbiAgaGVpZ2h0OiAyMTBweDtcXG4gIHdpZHRoOiAzMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubW9kYWwgaDJ7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG59XFxuXFxuLm1vZGFsLWJ0bi1jb250YWluZXJ7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG4ubW9kYWwtYnRuLWNvbnRhaW5lciBidXR0b257XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogODBweDtcXG4gIG1hcmdpbjogMHB4IDIwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDNweCByZ2IoMTAxLCAxMDEsIDEwMSk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbiNidG4teWVze1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVhbC02MDApO1xcbn1cXG4jYnRuLW5ve1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLTUwMCk7XFxufVxcbi5wYXNzLXNjcmVlbntcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWVwLXB1cnBsZS02MDApO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDcwcHg7XFxuICB6LWluZGV4OiAxMDA7XFxufVxcbi5wYXNzLXNjcmVlbiBidXR0b257XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBwYWRkaW5nOiA4cHggMjRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDNweCByZ2JhKDAsIDAsIDAsMC4yKTtcXG59XFxuLnBhc3Mtc2NyZWVuIGgxe1xcbiAgZm9udC1zaXplOiA0OHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4ucGFzcy1zY3JlZW4gYnV0dG9uOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVhbC04MDApO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4uc2hvdy1zY3JlZW57XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG4ucGxhY2VtZW50LWdyaWQgLnNoaXAtaGVhZC1ob3Jpem9udGFsLC5kaXNwbGF5LWdyaWQgLnNoaXAtaGVhZC1ob3Jpem9udGFsLC5yZXZlYWwtZ3JpZCAuc2hpcC1oZWFkLWhvcml6b250YWx7XFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxufVxcbi5wbGFjZW1lbnQtZ3JpZCAuc2hpcC1ib2R5LWhvcml6b250YWwsLmRpc3BsYXktZ3JpZCAuc2hpcC1ib2R5LWhvcml6b250YWwsLnJldmVhbC1ncmlkIC5zaGlwLWJvZHktaG9yaXpvbnRhbHtcXG4gIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbn1cXG4ucGxhY2VtZW50LWdyaWQgLnNoaXAtdGFpbC1ob3Jpem9udGFsLC5kaXNwbGF5LWdyaWQgLnNoaXAtdGFpbC1ob3Jpem9udGFsLC5yZXZlYWwtZ3JpZCAuc2hpcC10YWlsLWhvcml6b250YWx7XFxuICBib3JkZXItbGVmdDogbm9uZTtcXG59XFxuLnBsYWNlbWVudC1ncmlkIC5zaGlwLWhlYWQtdmVydGljYWwsLmRpc3BsYXktZ3JpZCAuc2hpcC1oZWFkLXZlcnRpY2FsLCAucmV2ZWFsLWdyaWQgLnNoaXAtaGVhZC12ZXJ0aWNhbHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcbi5wbGFjZW1lbnQtZ3JpZCAuc2hpcC1ib2R5LXZlcnRpY2FsLCAuZGlzcGxheS1ncmlkIC5zaGlwLWJvZHktdmVydGljYWwsIC5yZXZlYWwtZ3JpZCAuc2hpcC1ib2R5LXZlcnRpY2Fse1xcbiAgYm9yZGVyLXRvcDogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcbi5wbGFjZW1lbnQtZ3JpZCAuc2hpcC10YWlsLXZlcnRpY2FsLC5kaXNwbGF5LWdyaWQgLnNoaXAtdGFpbC12ZXJ0aWNhbCwucmV2ZWFsLWdyaWQgLnNoaXAtdGFpbC12ZXJ0aWNhbHtcXG4gIGJvcmRlci10b3A6IG5vbmU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpc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QkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixZQUFZO0VBQ1osMENBQTBDO0VBQzFDLFlBQVk7RUFDWixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLGdDQUFnQztBQUNsQztBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix3Q0FBd0M7RUFDeEMsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHlDQUF5QztBQUMzQztBQUNBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUNBO0VBQ0UsaUNBQWlDO0VBQ2pDLFlBQVk7QUFDZDtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGlucyZkaXNwbGF5PXN3YXAnKTtcXG46cm9vdHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIC0tdGVhbC0yMDA6ICM4MENCQzQ7XFxuICAtLXRlYWwtNjAwOiAjMjZBNjlBO1xcbiAgLS10ZWFsLTQwMDojMjZBNjlBO1xcbiAgLS1kZWVwLXB1cnBsZS0zMDA6Izk1NzVDRDtcXG4gIC0tZGVlcC1wdXJwbGUtNjAwOiAjNUUzNUIxO1xcbiAgLS1kZWVwLXB1cnBsZS05MDA6ICMzMTFCOTI7XFxuICAtLXRlYWwtODAwOiAjMDA2OTVDO1xcbiAgLS1ncmVlbi04MDA6ICMxQjVFMjA7XFxuICAtLXBpbmstOTAwOiM4ODBFNEY7XFxuXFxuICAtLXJlZC01MDA6ICNGNDQzMzY7XFxuICAtLWdyYXktNTAwOiAjOUU5RTlFO1xcbiAgLS1saWdodC1ibHVlLTMwMDogIzRGQzNGNztcXG59XFxuKntcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG59XFxuYm9keXtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZWFsLTIwMCk7XFxufVxcbmhlYWRlcntcXG4gIGhlaWdodDogMTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5oZWFkZXIgaDF7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBjb2xvcjogdmFyKC0tZGVlcC1wdXJwbGUtOTAwKTtcXG59XFxuZGl2LnNlbGVjdC1jb250ZW50e1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiA1MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbmRpdi5zZWxlY3QtcGFuZWx7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiAyODBweDtcXG4gIGhlaWdodDogMzUwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE1KSAxLjk1cHggMS45NXB4IDIuNnB4O1xcbn1cXG4uc2VsZWN0LXBhbmVsIGgye1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xcbn1cXG5kaXYudGFyZ2V0e1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5wbGFjZW1lbnQtZ3JpZHtcXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIG1pbi13aWR0aDogNTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIC8qIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrOyAqL1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIGJsYWNrO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBtYXJnaW46IDAgMTAwcHg7XFxufVxcbi5wbGFjZW1lbnQtZ3JpZC1zcXVhcmUsLmF0dGFjay1ncmlkLXNxdWFyZSwuZGlzcGxheS1ncmlkLXNxdWFyZSwucmV2ZWFsLWdyaWQtc3F1YXJle1xcbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuZGl2LmF0dGFjay1ncmlkLXNxdWFyZXtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktNTAwKTtcXG59XFxuLnBsYWNlbWVudC1ncmlkIC52YWxpZC1zcXVhcmV7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZWFsLTIwMCk7XFxufVxcbi5wbGFjZW1lbnQtZ3JpZCAuaW52YWxpZC1zcXVhcmV7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtNTAwKTtcXG59XFxuLnNoaXAtcGFuZWwsLmJ1dHRvbi1wYW5lbHtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZXAtcHVycGxlLTMwMCk7XFxufVxcbi5idXR0b24tcGFuZWwsIC5zaGlwLWJ1dHRvbi1jb250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuLnNoaXAtcGFuZWx7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnNoaXAtYnV0dG9uLWNvbnRhaW5lcntcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIHBhZGRpbmc6IDE1cHg7XFxufVxcbi5idXR0b24tcGFuZWwgYnV0dG9uLCAuc2hpcC1idXR0b24tY29udGFpbmVyIGJ1dHRvbntcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggcmdiKDEwMSwgMTAxLCAxMDEpO1xcbn1cXG4uc2VsZWN0LWJ0bi1jb250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDUwcHg7XFxufVxcbi5zZWxlY3QtYnRuLWNvbnRhaW5lciBidXR0b257XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMjBweDtcXG4gIHBhZGRpbmc6IDEwcHggNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcC1wdXJwbGUtNjAwKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLnNlbGVjdC1idG4tY29udGFpbmVyIGJ1dHRvbjpob3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZXAtcHVycGxlLTkwMCk7XFxufVxcbi5zaGlwLWJ1dHRvbi1jb250YWluZXIgYnV0dG9uLnNlbGVjdGVke1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVhbC04MDApO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4uYnV0dG9uLXBhbmVsIGJ1dHRvbjpob3Zlcjpub3QoOmRpc2FibGVkKSwgLnNoaXAtYnV0dG9uLWNvbnRhaW5lciBidXR0b246aG92ZXI6bm90KC5zZWxlY3RlZCl7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk3LCAxOTcsIDE5Nyk7XFxufVxcbi5zaGlwLXBhbmVsIGgze1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuLnBsYWNlbWVudC1ncmlkIGRpdi5jYXJyaWVyLWNvbG9yLC5kaXNwbGF5LWdyaWQgZGl2LmNhcnJpZXItY29sb3IsLnJldmVhbC1ncmlkIGRpdi5jYXJyaWVyLWNvbG9ye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcC1wdXJwbGUtOTAwKTtcXG59XFxuLnBsYWNlbWVudC1ncmlkIGRpdi5iYXR0bGVzaGlwLWNvbG9yLC5kaXNwbGF5LWdyaWQgZGl2LmJhdHRsZXNoaXAtY29sb3IsLnJldmVhbC1ncmlkIGRpdi5iYXR0bGVzaGlwLWNvbG9ye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVhbC04MDApO1xcbn1cXG4ucGxhY2VtZW50LWdyaWQgZGl2LmRlc3Ryb3llci1jb2xvciwuZGlzcGxheS1ncmlkIGRpdi5kZXN0cm95ZXItY29sb3IsLnJldmVhbC1ncmlkIGRpdi5kZXN0cm95ZXItY29sb3J7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWVwLXB1cnBsZS05MDApO1xcbn1cXG4ucGxhY2VtZW50LWdyaWQgZGl2LnN1Ym1hcmluZS1jb2xvciwuZGlzcGxheS1ncmlkIGRpdi5zdWJtYXJpbmUtY29sb3IsLnJldmVhbC1ncmlkIGRpdi5zdWJtYXJpbmUtY29sb3J7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZWFsLTgwMCk7XFxufVxcbi5wbGFjZW1lbnQtZ3JpZCBkaXYuYm9hdC1jb2xvciwuZGlzcGxheS1ncmlkIGRpdi5ib2F0LWNvbG9yLC5yZXZlYWwtZ3JpZCBkaXYuYm9hdC1jb2xvcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZXAtcHVycGxlLTkwMCk7XFxufVxcbmRpdi5tYWluLWNvbnRlbnR7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4ucGxhY2VtZW50LWNvbnRhaW5lcntcXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiAxMTBweDtcXG59XFxuLnBsYWNlbWVudC1pbmZve1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbi5nYW1lLWNvbnRlbnR7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNTBweDtcXG59XFxuLmdhbWVib2FyZC1jb250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyNTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xcbn1cXG4ubGVmdC1zaWRlLC5yaWdodC1zaWRle1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgbWluLXdpZHRoOiA0MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5kaXNwbGF5LWdyaWQsLmF0dGFjay1ncmlkLCAucmV2ZWFsLWdyaWR7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCBibGFjaztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsMWZyKTtcXG59XFxuLmdhbWUtaW5mb3tcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICB3aWR0aDogNTAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk1NzVDRDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1kZWVwLXB1cnBsZS02MDApIDtcXG59XFxuLnN1bmt7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvZXhwbG9zaW9uLnBuZyk7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG4uZGlzcGxheS1ncmlkIGRpdi5taXNzLCAuYXR0YWNrLWdyaWQgZGl2Lm1pc3MsIC5yZXZlYWwtZ3JpZCBkaXYubWlzc3tcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUtMzAwKTtcXG59XFxuXFxuLmF0dGFjay1ncmlkIGRpdi5zdW5re1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLTUwMCk7XFxufVxcbi5tb2RhbC1jb250YWluZXJ7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxuICB6LWluZGV4OiAxMDA7XFxuICB0b3A6IDAlO1xcbiAgbGVmdDogMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XFxufVxcbi5tb2RhbHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xcbiAgaGVpZ2h0OiAyMTBweDtcXG4gIHdpZHRoOiAzMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubW9kYWwgaDJ7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG59XFxuXFxuLm1vZGFsLWJ0bi1jb250YWluZXJ7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG4ubW9kYWwtYnRuLWNvbnRhaW5lciBidXR0b257XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogODBweDtcXG4gIG1hcmdpbjogMHB4IDIwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDNweCByZ2IoMTAxLCAxMDEsIDEwMSk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbiNidG4teWVze1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVhbC02MDApO1xcbn1cXG4jYnRuLW5ve1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLTUwMCk7XFxufVxcbi5wYXNzLXNjcmVlbntcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWVwLXB1cnBsZS02MDApO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDcwcHg7XFxuICB6LWluZGV4OiAxMDA7XFxufVxcbi5wYXNzLXNjcmVlbiBidXR0b257XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBwYWRkaW5nOiA4cHggMjRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDNweCByZ2JhKDAsIDAsIDAsMC4yKTtcXG59XFxuLnBhc3Mtc2NyZWVuIGgxe1xcbiAgZm9udC1zaXplOiA0OHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4ucGFzcy1zY3JlZW4gYnV0dG9uOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVhbC04MDApO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4uc2hvdy1zY3JlZW57XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG4ucGxhY2VtZW50LWdyaWQgLnNoaXAtaGVhZC1ob3Jpem9udGFsLC5kaXNwbGF5LWdyaWQgLnNoaXAtaGVhZC1ob3Jpem9udGFsLC5yZXZlYWwtZ3JpZCAuc2hpcC1oZWFkLWhvcml6b250YWx7XFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxufVxcbi5wbGFjZW1lbnQtZ3JpZCAuc2hpcC1ib2R5LWhvcml6b250YWwsLmRpc3BsYXktZ3JpZCAuc2hpcC1ib2R5LWhvcml6b250YWwsLnJldmVhbC1ncmlkIC5zaGlwLWJvZHktaG9yaXpvbnRhbHtcXG4gIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbn1cXG4ucGxhY2VtZW50LWdyaWQgLnNoaXAtdGFpbC1ob3Jpem9udGFsLC5kaXNwbGF5LWdyaWQgLnNoaXAtdGFpbC1ob3Jpem9udGFsLC5yZXZlYWwtZ3JpZCAuc2hpcC10YWlsLWhvcml6b250YWx7XFxuICBib3JkZXItbGVmdDogbm9uZTtcXG59XFxuLnBsYWNlbWVudC1ncmlkIC5zaGlwLWhlYWQtdmVydGljYWwsLmRpc3BsYXktZ3JpZCAuc2hpcC1oZWFkLXZlcnRpY2FsLCAucmV2ZWFsLWdyaWQgLnNoaXAtaGVhZC12ZXJ0aWNhbHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcbi5wbGFjZW1lbnQtZ3JpZCAuc2hpcC1ib2R5LXZlcnRpY2FsLCAuZGlzcGxheS1ncmlkIC5zaGlwLWJvZHktdmVydGljYWwsIC5yZXZlYWwtZ3JpZCAuc2hpcC1ib2R5LXZlcnRpY2Fse1xcbiAgYm9yZGVyLXRvcDogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcbi5wbGFjZW1lbnQtZ3JpZCAuc2hpcC10YWlsLXZlcnRpY2FsLC5kaXNwbGF5LWdyaWQgLnNoaXAtdGFpbC12ZXJ0aWNhbCwucmV2ZWFsLWdyaWQgLnNoaXAtdGFpbC12ZXJ0aWNhbHtcXG4gIGJvcmRlci10b3A6IG5vbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSAnLi9zaGlwJztcblxuY29uc3QgR2FtZWJvYXJkID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBnYW1lYm9hcmQgPSBfY3JlYXRlQm9hcmQoKTtcblxuICAvLyBzaGlwIGZhY3Rvcmllc1xuICBjb25zdCBjYXJyaWVyID0gU2hpcCg1LCAnY2FycmllcicpO1xuICBjb25zdCBiYXR0bGVzaGlwID0gU2hpcCg0LCAnYmF0dGxlc2hpcCcpO1xuICBjb25zdCBkZXN0cm95ZXIgPSBTaGlwKDMsICdkZXN0cm95ZXInKTtcbiAgY29uc3Qgc3VibWFyaW5lID0gU2hpcCgzLCAnc3VibWFyaW5lJyk7XG4gIGNvbnN0IGJvYXQgPSBTaGlwKDIsICdib2F0Jyk7XG5cbiAgLy8gZ2V0dGVyc1xuICBjb25zdCBnZXRHYW1lYm9hcmQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGdhbWVib2FyZDtcbiAgfTtcbiAgY29uc3QgZ2V0U2hpcExvY2F0aW9uID0gKCkgPT4ge1xuICAgIHJldHVybiBzaGlwTG9jYXRpb247XG4gIH07XG5cbiAgLy8gc2hpcCBsb2NhdGlvbiBkYXRhXG4gIGNvbnN0IHNoaXBMb2NhdGlvbiA9IHtcbiAgICBjYXJyaWVyOiBbXSxcbiAgICBiYXR0bGVzaGlwOiBbXSxcbiAgICBkZXN0cm95ZXI6IFtdLFxuICAgIHN1Ym1hcmluZTogW10sXG4gICAgYm9hdDogW10sXG4gIH07XG5cbiAgZnVuY3Rpb24gX2NyZWF0ZUJvYXJkKCkge1xuICAgIGNvbnN0IGJvYXJkID0gW107XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCAxMDsgeSsrKSB7XG4gICAgICBjb25zdCBjb2wgPSBbXTtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgMTA7IHgrKykge1xuICAgICAgICBjb2wucHVzaCgnTycpO1xuICAgICAgfVxuICAgICAgYm9hcmQucHVzaChjb2wpO1xuICAgIH1cbiAgICByZXR1cm4gYm9hcmQ7XG4gIH1cbiAgLy8gY2hlY2sgbm8tb3ZlcmxhcHBpbmcgc2hpcHNcbiAgZnVuY3Rpb24gX2lzUGxhY2VhYmxlU3F1YXJlKHgsIHkpIHtcbiAgICBpZiAoZ2FtZWJvYXJkW3hdW3ldICE9PSAnTycpIHJldHVybiBmYWxzZTtcbiAgICBlbHNlIGlmIChnYW1lYm9hcmRbeF1beV0gPT09ICdPJykgcmV0dXJuIHRydWU7XG4gIH1cbiAgLy8gcGFzcyB4LHkgdG8gc2hpcCBsb2NhdGlvblxuICBmdW5jdGlvbiBfc3RvcmVTaGlwTG9hY3Rpb24oeCwgeSwgc2hpcG5hbWUpIHtcbiAgICBjb25zdCB4cG9zID0geDtcbiAgICBjb25zdCB5cG9zID0geTtcbiAgICBzaGlwTG9jYXRpb25bc2hpcG5hbWVdLnB1c2goeyB4OiB4cG9zLCB5OiB5cG9zIH0pO1xuICB9XG4gIGZ1bmN0aW9uIF9nZXRTaGlwQnlOYW1lKG5hbWUpIHtcbiAgICBpZiAobmFtZSA9PT0gJ2NhcnJpZXInKSB7XG4gICAgICByZXR1cm4gY2FycmllcjtcbiAgICB9IGVsc2UgaWYgKG5hbWUgPT09ICdiYXR0bGVzaGlwJykge1xuICAgICAgcmV0dXJuIGJhdHRsZXNoaXA7XG4gICAgfSBlbHNlIGlmIChuYW1lID09PSAnZGVzdHJveWVyJykge1xuICAgICAgcmV0dXJuIGRlc3Ryb3llcjtcbiAgICB9IGVsc2UgaWYgKG5hbWUgPT09ICdzdWJtYXJpbmUnKSB7XG4gICAgICByZXR1cm4gc3VibWFyaW5lO1xuICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ2JvYXQnKSB7XG4gICAgICByZXR1cm4gYm9hdDtcbiAgICB9XG4gIH1cbiAgLy8gcGxhY2Ugc2hpcCBieSB0aGUgXCJoZWFkXCJcbiAgY29uc3QgcGxhY2VTaGlwID0gZnVuY3Rpb24gKHgsIHksIHNoaXBuYW1lLCBob3Jpem9udGFsKSB7XG4gICAgaWYgKHggPiA5IHx8IHkgPiA5KSByZXR1cm4gZmFsc2U7XG4gICAgY29uc3Qgc2hpcCA9IF9nZXRTaGlwQnlOYW1lKHNoaXBuYW1lKTtcbiAgICBjb25zdCBsZW5ndGggPSBzaGlwLnNoaXBMZW5ndGg7XG5cbiAgICBpZiAoaG9yaXpvbnRhbCkge1xuICAgICAgLy8gY2hlY2sgYm91bmRzXG4gICAgICBpZiAoeCArIGxlbmd0aCA+IDEwKSByZXR1cm4gZmFsc2U7XG4gICAgICAvLyBsb29rIHJpZ2h0XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICghX2lzUGxhY2VhYmxlU3F1YXJlKHggKyBpLCB5KSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsZW5ndGg7IGorKykge1xuICAgICAgICBnYW1lYm9hcmRbeCArIGpdW3ldID0gJ1gnO1xuICAgICAgICBfc3RvcmVTaGlwTG9hY3Rpb24oeCArIGosIHksIHNoaXBuYW1lKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjaGVjayBib3VuZHNcbiAgICAgIGlmICh5ICsgbGVuZ3RoID4gMTApIHJldHVybiBmYWxzZTtcbiAgICAgIC8vIGxvb2sgZG93blxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoIV9pc1BsYWNlYWJsZVNxdWFyZSh4LCB5ICsgaSkpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZ2FtZWJvYXJkW3hdW3kgKyBqXSA9ICdYJztcbiAgICAgICAgX3N0b3JlU2hpcExvYWN0aW9uKHgsIHkgKyBqLCBzaGlwbmFtZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH07XG4gIC8vIGNoZWNrcyB0aGUgZ2FtZWJvYXJkLCBYIGlzIHVuc3VuayBzaGlwLCBPIGlzIHVuaGl0IHdhdGVyLCBTIGlzIHN1bmsgc2hpcCwgSCBpcyBoaXQgd2F0ZXJcbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgaWYgKGdhbWVib2FyZFt4XVt5XSA9PT0gJ1gnIHx8IGdhbWVib2FyZFt4XVt5XSA9PT0gJ08nKSB7XG4gICAgICBpZiAoZ2FtZWJvYXJkW3hdW3ldID09PSAnWCcpIHtcbiAgICAgICAgZ2FtZWJvYXJkW3hdW3ldID0gJ1MnO1xuICAgICAgICBzdHJ1Y2tTaGlwKHgsIHkpO1xuICAgICAgfSBlbHNlIGlmIChnYW1lYm9hcmRbeF1beV0gPT09ICdPJykge1xuICAgICAgICBnYW1lYm9hcmRbeF1beV0gPSAnSCc7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xuICB9O1xuICAvLyBjaGVja3MgaWYgc2hpcCB3YXMgc3RydWNrIGFuZCBhcHBseXMgaGl0IHRvIHNoaXAgaW5zdGFuY2VcbiAgY29uc3Qgc3RydWNrU2hpcCA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gc2hpcExvY2F0aW9uKSB7XG4gICAgICBjb25zdCBzaGlwID0gX2dldFNoaXBCeU5hbWUoa2V5KTtcbiAgICAgIGNvbnN0IGxlbmd0aCA9IHNoaXBMb2NhdGlvbltrZXldLmxlbmd0aDtcbiAgICAgIGxldCBwb3NpdGlvbiA9IDE7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBzaGlwTG9jYXRpb25ba2V5XVtpXVsneCddID09PSB4ICYmXG4gICAgICAgICAgc2hpcExvY2F0aW9uW2tleV1baV1bJ3knXSA9PT0geVxuICAgICAgICApIHtcbiAgICAgICAgICBzaGlwLmhpdChwb3NpdGlvbik7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcG9zaXRpb24rKztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuICBjb25zdCBpc0ZsZWV0RGVzdHJveWVkID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChcbiAgICAgIGNhcnJpZXIuaXNTdW5rKCkgPT09IHRydWUgJiZcbiAgICAgIGJhdHRsZXNoaXAuaXNTdW5rKCkgPT09IHRydWUgJiZcbiAgICAgIGRlc3Ryb3llci5pc1N1bmsoKSA9PT0gdHJ1ZSAmJlxuICAgICAgc3VibWFyaW5lLmlzU3VuaygpID09PSB0cnVlICYmXG4gICAgICBib2F0LmlzU3VuaygpID09PSB0cnVlXG4gICAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0R2FtZWJvYXJkLFxuICAgIGdldFNoaXBMb2NhdGlvbixcbiAgICBwbGFjZVNoaXAsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBzdHJ1Y2tTaGlwLFxuICAgIGlzRmxlZXREZXN0cm95ZWQsXG4gIH07XG59O1xuXG5leHBvcnQgeyBHYW1lYm9hcmQgfTtcbiIsImltcG9ydCB7IGdhbWVWaWV3IH0gZnJvbSAnLi4vdmlld3MvZ2FtZVZpZXcnO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9wbGF5ZXInO1xuXG5jb25zdCBnYW1lQ29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gIGxldCBwbGF5ZXIxLCBwbGF5ZXIyLCBnYW1lbW9kZSwgdHVybk5vLCBjdXJyZW50UGxheWVyVHVybiwgaXNHYW1lb3ZlcjtcbiAgY29uc3QgY3JlYXRlUGxheWVyMSA9IGZ1bmN0aW9uIChib2FyZCkge1xuICAgIHBsYXllcjEgPSBQbGF5ZXIoKTtcbiAgICBpZiAoYm9hcmQgPT09IG51bGwpIHtcbiAgICAgIHBsYXllcjEucGxhY2VSYW5kb20oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGxheWVyMS5tYWtlQm9hcmQoYm9hcmQpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgY3JlYXRlUGxheWVyMiA9IGZ1bmN0aW9uIChib2FyZCkge1xuICAgIHBsYXllcjIgPSBQbGF5ZXIoKTtcbiAgICBpZiAoYm9hcmQgPT09IG51bGwpIHtcbiAgICAgIHBsYXllcjIucGxhY2VSYW5kb20oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGxheWVyMi5tYWtlQm9hcmQoYm9hcmQpO1xuICAgIH1cbiAgfTtcbiAgY29uc3Qgc3RhcnRHYW1lID0gZnVuY3Rpb24gKG1vZGUpIHtcbiAgICBnYW1lbW9kZSA9IG1vZGUgPT09ICdwbGF5ZXInID8gJ3BsYXllcicgOiAnY3B1JztcbiAgICBjdXJyZW50UGxheWVyVHVybiA9IDE7XG4gICAgdHVybk5vID0gMTtcbiAgICBpc0dhbWVvdmVyID0gZmFsc2U7XG4gIH07XG4gIGNvbnN0IGdldFBsYXllck9uZVNoaXBzID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBwbGF5ZXIxLmdhbWVib2FyZC5nZXRTaGlwTG9jYXRpb24oKTtcbiAgfTtcbiAgY29uc3QgZ2V0UGxheWVyVHdvU2hpcHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHBsYXllcjIuZ2FtZWJvYXJkLmdldFNoaXBMb2NhdGlvbigpO1xuICB9O1xuICBjb25zdCBnZXRQbGF5ZXJPbmVCb2FyZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcGxheWVyMS5nYW1lYm9hcmQuZ2V0R2FtZWJvYXJkKCk7XG4gIH07XG4gIGNvbnN0IGdldFBsYXllclR3b0JvYXJkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBwbGF5ZXIyLmdhbWVib2FyZC5nZXRHYW1lYm9hcmQoKTtcbiAgfTtcbiAgY29uc3QgY2hhbmdlVHVybiA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgaWYgKGlzR2FtZW92ZXIpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoY3VycmVudFBsYXllclR1cm4gPT09IDEgJiYgZ2FtZW1vZGUgPT09ICdwbGF5ZXInKSB7XG4gICAgICBpZiAocGxheWVyMi50YWtlQXR0YWNrKHgsIHkpKSB7XG4gICAgICAgIGlmIChwbGF5ZXIyLmNoZWNrTG9zZSgpID09PSB0cnVlKSB7XG4gICAgICAgICAgaXNHYW1lb3ZlciA9IHRydWU7XG4gICAgICAgICAgZ2FtZVZpZXcubG9hZFdpbigxLCBnYW1lbW9kZSk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNoaXAgPSBnZXRQbGF5ZXJUd29TaGlwcygpO1xuICAgICAgICBjb25zdCBkaXNwbGF5Qm9hcmQgPSBnZXRQbGF5ZXJUd29Cb2FyZCgpO1xuICAgICAgICBjb25zdCBhdHRhY2tib2FyZCA9IGdldFBsYXllck9uZUJvYXJkKCk7XG4gICAgICAgIC8vIGxvYWQgcGxheWVyIDIncyB2aWV3XG4gICAgICAgIGN1cnJlbnRQbGF5ZXJUdXJuID0gMjtcbiAgICAgICAgZ2FtZVZpZXcubG9hZFR1cm4oXG4gICAgICAgICAgc2hpcCxcbiAgICAgICAgICBkaXNwbGF5Qm9hcmQsXG4gICAgICAgICAgYXR0YWNrYm9hcmQsXG4gICAgICAgICAgY3VycmVudFBsYXllclR1cm4sXG4gICAgICAgICAgdHVybk5vLFxuICAgICAgICAgIGdhbWVtb2RlXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2ludmFsaWQgbW92ZScpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjdXJyZW50UGxheWVyVHVybiA9PT0gMiAmJiBnYW1lbW9kZSA9PT0gJ3BsYXllcicpIHtcbiAgICAgIGlmIChwbGF5ZXIxLnRha2VBdHRhY2soeCwgeSkpIHtcbiAgICAgICAgaWYgKHBsYXllcjEuY2hlY2tMb3NlKCkgPT09IHRydWUpIHtcbiAgICAgICAgICBpc0dhbWVvdmVyID0gdHJ1ZTtcbiAgICAgICAgICBnYW1lVmlldy5sb2FkV2luKDIsIGdhbWVtb2RlKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2hpcCA9IGdldFBsYXllck9uZVNoaXBzKCk7XG4gICAgICAgIGNvbnN0IGRpc3BsYXlCb2FyZCA9IGdldFBsYXllck9uZUJvYXJkKCk7XG4gICAgICAgIGNvbnN0IGF0dGFja0JvYXJkID0gZ2V0UGxheWVyVHdvQm9hcmQoKTtcbiAgICAgICAgLy8gbG9hZCBwbGF5ZXIgMSdzIHZpZXdcbiAgICAgICAgY3VycmVudFBsYXllclR1cm4gPSAxO1xuICAgICAgICB0dXJuTm8rKztcbiAgICAgICAgZ2FtZVZpZXcubG9hZFR1cm4oXG4gICAgICAgICAgc2hpcCxcbiAgICAgICAgICBkaXNwbGF5Qm9hcmQsXG4gICAgICAgICAgYXR0YWNrQm9hcmQsXG4gICAgICAgICAgY3VycmVudFBsYXllclR1cm4sXG4gICAgICAgICAgdHVybk5vLFxuICAgICAgICAgIGdhbWVtb2RlXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2ludmFsaWQgbW92ZScpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChnYW1lbW9kZSA9PT0gJ2NwdScpIHtcbiAgICAgIGlmIChwbGF5ZXIyLnRha2VBdHRhY2soeCwgeSkpIHtcbiAgICAgICAgaWYgKHBsYXllcjIuY2hlY2tMb3NlKCkgPT09IHRydWUpIHtcbiAgICAgICAgICBpc0dhbWVvdmVyID0gdHJ1ZTtcbiAgICAgICAgICBnYW1lVmlldy5sb2FkV2luKDEsIGdhbWVtb2RlKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcGxheWVyMS50YWtlUmFuZG9tQXR0YWNrKCk7XG4gICAgICAgIGlmIChwbGF5ZXIxLmNoZWNrTG9zZSgpID09PSB0cnVlKSB7XG4gICAgICAgICAgaXNHYW1lb3ZlciA9IHRydWU7XG4gICAgICAgICAgZ2FtZVZpZXcubG9hZFdpbigyLCBnYW1lbW9kZSk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHR1cm5ObysrO1xuICAgICAgICBjb25zdCBzaGlwID0gZ2V0UGxheWVyT25lU2hpcHMoKTtcbiAgICAgICAgY29uc3QgZGlzcGxheUJvYXJkID0gZ2V0UGxheWVyT25lQm9hcmQoKTtcbiAgICAgICAgY29uc3QgYXR0YWNrQm9hcmQgPSBnZXRQbGF5ZXJUd29Cb2FyZCgpO1xuICAgICAgICBnYW1lVmlldy5sb2FkVHVybihcbiAgICAgICAgICBzaGlwLFxuICAgICAgICAgIGRpc3BsYXlCb2FyZCxcbiAgICAgICAgICBhdHRhY2tCb2FyZCxcbiAgICAgICAgICBjdXJyZW50UGxheWVyVHVybixcbiAgICAgICAgICB0dXJuTm8sXG4gICAgICAgICAgZ2FtZW1vZGVcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgc3RhcnRHYW1lLFxuICAgIGNyZWF0ZVBsYXllcjEsXG4gICAgY3JlYXRlUGxheWVyMixcbiAgICBnZXRQbGF5ZXJPbmVTaGlwcyxcbiAgICBnZXRQbGF5ZXJUd29TaGlwcyxcbiAgICBnZXRQbGF5ZXJPbmVCb2FyZCxcbiAgICBnZXRQbGF5ZXJUd29Cb2FyZCxcbiAgICBjaGFuZ2VUdXJuLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IHsgZ2FtZUNvbnRyb2xsZXIgfTtcbiIsImNvbnN0IGhlbHBlciA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHJhbmRvbVRydWVPckZhbHNlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKSA9PT0gMCA/IGZhbHNlIDogdHJ1ZTtcbiAgfTtcbiAgY29uc3QgZ2V0UmFuZG9tSW50ID0gZnVuY3Rpb24gKG4pIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbik7XG4gIH07XG4gIGNvbnN0IHNoaXBJbmZvID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBpZiAobmFtZSA9PT0gJ2NhcnJpZXInKSB7XG4gICAgICByZXR1cm4geyBzaGlwOiBuYW1lLCBsZW5ndGg6IDUgfTtcbiAgICB9IGVsc2UgaWYgKG5hbWUgPT09ICdiYXR0bGVzaGlwJykge1xuICAgICAgcmV0dXJuIHsgc2hpcDogbmFtZSwgbGVuZ3RoOiA0IH07XG4gICAgfSBlbHNlIGlmIChuYW1lID09PSAnZGVzdHJveWVyJykge1xuICAgICAgcmV0dXJuIHsgc2hpcDogbmFtZSwgbGVuZ3RoOiAzIH07XG4gICAgfSBlbHNlIGlmIChuYW1lID09PSAnc3VibWFyaW5lJykge1xuICAgICAgcmV0dXJuIHsgc2hpcDogbmFtZSwgbGVuZ3RoOiAzIH07XG4gICAgfSBlbHNlIGlmIChuYW1lID09PSAnYm9hdCcpIHtcbiAgICAgIHJldHVybiB7IHNoaXA6IG5hbWUsIGxlbmd0aDogMiB9O1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHsgcmFuZG9tVHJ1ZU9yRmFsc2UsIGdldFJhbmRvbUludCwgc2hpcEluZm8gfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGhlbHBlciB9O1xuIiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSAnLi9nYW1lYm9hcmQnO1xuaW1wb3J0IHsgaGVscGVyIH0gZnJvbSAnLi9oZWxwZXInO1xuXG5jb25zdCBQbGF5ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGdhbWVib2FyZCA9IEdhbWVib2FyZCgpO1xuXG4gIGNvbnN0IHBsYWNlUmFuZG9tID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHNoaXBzID0gWydjYXJyaWVyJywgJ2JhdHRsZXNoaXAnLCAnZGVzdHJveWVyJywgJ3N1Ym1hcmluZScsICdib2F0J107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgd2hpbGUgKFxuICAgICAgICAhZ2FtZWJvYXJkLnBsYWNlU2hpcChcbiAgICAgICAgICBoZWxwZXIuZ2V0UmFuZG9tSW50KDEwKSxcbiAgICAgICAgICBoZWxwZXIuZ2V0UmFuZG9tSW50KDEwKSxcbiAgICAgICAgICBzaGlwc1tpXSxcbiAgICAgICAgICBoZWxwZXIucmFuZG9tVHJ1ZU9yRmFsc2UoKVxuICAgICAgICApXG4gICAgICApIHt9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IGZ1bmN0aW9uICh4LCB5LCBzaGlwbmFtZSwgaXNIb3Jpem9udGFsKSB7XG4gICAgcmV0dXJuIGdhbWVib2FyZC5wbGFjZVNoaXAoeCwgeSwgc2hpcG5hbWUsIGlzSG9yaXpvbnRhbCk7XG4gIH07XG5cbiAgY29uc3QgdGFrZUF0dGFjayA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgcmV0dXJuIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICB9O1xuXG4gIGNvbnN0IHRha2VSYW5kb21BdHRhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgbW92ZXMgPSBnZXRMZWdpYmxlUGxhY2VtZW50KCk7XG4gICAgY29uc3QgbGVuZ3RoID0gbW92ZXMubGVuZ3RoO1xuICAgIGNvbnN0IHBsYWNlbWVudCA9IG1vdmVzW2hlbHBlci5nZXRSYW5kb21JbnQobGVuZ3RoKV07XG4gICAgdGFrZUF0dGFjayguLi5wbGFjZW1lbnQpO1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrTG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZ2FtZWJvYXJkLmlzRmxlZXREZXN0cm95ZWQoKTtcbiAgfTtcbiAgY29uc3QgbWFrZUJvYXJkID0gZnVuY3Rpb24gKGJvYXJkKSB7XG4gICAgZm9yIChjb25zdCBzaGlwIGluIGJvYXJkKSB7XG4gICAgICBjb25zdCB4cG9zID0gYm9hcmRbc2hpcF0ubG9jYXRpb25bMF1bJ3gnXTtcbiAgICAgIGNvbnN0IHlwb3MgPSBib2FyZFtzaGlwXS5sb2NhdGlvblswXVsneSddO1xuICAgICAgY29uc3QgaXNIb3Jpem9udGFsID0gYm9hcmRbc2hpcF0uZmFjaW5nID09PSAnaG9yaXpvbnRhbCcgPyB0cnVlIDogZmFsc2U7XG4gICAgICBwbGFjZVNoaXAoeHBvcywgeXBvcywgc2hpcCwgaXNIb3Jpem9udGFsKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiBnYW1lYm9hcmQ7XG5cbiAgZnVuY3Rpb24gZ2V0TGVnaWJsZVBsYWNlbWVudCgpIHtcbiAgICBjb25zdCBsZWdpYmxlTW92ZXMgPSBbXTtcbiAgICBjb25zdCBib2FyZCA9IGdhbWVib2FyZC5nZXRHYW1lYm9hcmQoKTtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDEwOyB4KyspIHtcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgMTA7IHkrKykge1xuICAgICAgICBpZiAoYm9hcmRbeF1beV0gPT09ICdPJyB8fCBib2FyZFt4XVt5XSA9PT0gJ1gnKSB7XG4gICAgICAgICAgbGVnaWJsZU1vdmVzLnB1c2goW3gsIHldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbGVnaWJsZU1vdmVzO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnYW1lYm9hcmQsXG4gICAgZ2V0TGVnaWJsZVBsYWNlbWVudCxcbiAgICBnZXRCb2FyZCxcbiAgICBwbGFjZVNoaXAsXG4gICAgcGxhY2VSYW5kb20sXG4gICAgdGFrZVJhbmRvbUF0dGFjayxcbiAgICBjaGVja0xvc2UsXG4gICAgdGFrZUF0dGFjayxcbiAgICBtYWtlQm9hcmQsXG4gIH07XG59O1xuXG5leHBvcnQgeyBQbGF5ZXIgfTtcbiIsImNvbnN0IFNoaXAgPSBmdW5jdGlvbiAobGVuZ3RoKSB7XG4gIGNvbnN0IHNoaXBMZW5ndGggPSBsZW5ndGg7XG4gIGxldCBkYW1hZ2UgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGRhbWFnZS5wdXNoKGZhbHNlKTtcbiAgfVxuICBjb25zdCBoaXQgPSBmdW5jdGlvbiAocG9zaXRpb24pIHtcbiAgICBpZiAocG9zaXRpb24gPiBsZW5ndGgpIHJldHVybjtcbiAgICBkYW1hZ2VbcG9zaXRpb24gLSAxXSA9IHRydWU7XG4gIH07XG4gIGNvbnN0IGlzU3VuayA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZGFtYWdlLmluY2x1ZGVzKGZhbHNlKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSByZXR1cm4gdHJ1ZTtcbiAgfTtcbiAgcmV0dXJuIHsgaGl0LCBpc1N1bmssIHNoaXBMZW5ndGggfTtcbn07XG5cbmV4cG9ydCB7IFNoaXAgfTtcbiIsImltcG9ydCB7IGdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi4vYXBwL2dhbWVjb250cm9sbGVyJztcbmNvbnN0IGdhbWVWaWV3ID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhcmdldCcpO1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gYFxuICA8ZGl2IGNsYXNzPVwiZ2FtZS1jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJnYW1lLWluZm9cIj48aDI+VHVybiAxOiBQbGF5ZXIgT25lJ3MgdHVybjwvaDI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJnYW1lYm9hcmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtc2lkZVwiPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyaWdodC1zaWRlXCI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gIGA7XG4gIGxldCBsZWZ0U2lkZSwgcmlnaHRTaWRlLCBhdHRhY2tHcmlkLCBkaXNwbGF5R3JpZCwgcGFzc1NjcmVlbjtcblxuICBjb25zdCBpbml0aWFsaXplID0gZnVuY3Rpb24gKCkge1xuICAgIHRhcmdldC5pbm5lckhUTUwgPSBgYDtcbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgX3NldFVwQXR0YWNrR3JpZCgpO1xuICAgIF9zZXRVcERpc3BsYXlHcmlkKCk7XG4gICAgX3NldFVwUGFzc1NjcmVlbigpO1xuICAgIGxlZnRTaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnQtc2lkZScpO1xuICAgIHJpZ2h0U2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yaWdodC1zaWRlJyk7XG4gICAgbGVmdFNpZGUuYXBwZW5kQ2hpbGQoZGlzcGxheUdyaWQpO1xuICAgIHJpZ2h0U2lkZS5hcHBlbmRDaGlsZChhdHRhY2tHcmlkKTtcbiAgICByZW5kZXJBdHRhY2tHcmlkKGdhbWVDb250cm9sbGVyLmdldFBsYXllclR3b0JvYXJkKCkpO1xuICAgIHJlbmRlckRpc3BsYXlHcmlkKFxuICAgICAgZ2FtZUNvbnRyb2xsZXIuZ2V0UGxheWVyT25lU2hpcHMoKSxcbiAgICAgIGdhbWVDb250cm9sbGVyLmdldFBsYXllck9uZUJvYXJkKClcbiAgICApO1xuICB9O1xuICBmdW5jdGlvbiBfc2V0VXBBdHRhY2tHcmlkKCkge1xuICAgIGF0dGFja0dyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhdHRhY2tHcmlkLmNsYXNzTGlzdC5hZGQoJ2F0dGFjay1ncmlkJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdhdHRhY2stZ3JpZC1zcXVhcmUnKTtcbiAgICAgICAgc3F1YXJlLmRhdGFzZXQueCA9IGo7XG4gICAgICAgIHNxdWFyZS5kYXRhc2V0LnkgPSBpO1xuICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHhwb3MgPSBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LngpO1xuICAgICAgICAgIGNvbnN0IHlwb3MgPSBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnkpO1xuICAgICAgICAgIGdhbWVDb250cm9sbGVyLmNoYW5nZVR1cm4oeHBvcywgeXBvcyk7XG4gICAgICAgIH0pO1xuICAgICAgICBhdHRhY2tHcmlkLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIF9zZXRVcERpc3BsYXlHcmlkKCkge1xuICAgIGRpc3BsYXlHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGlzcGxheUdyaWQuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1ncmlkJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LWdyaWQtc3F1YXJlJyk7XG4gICAgICAgIHNxdWFyZS5kYXRhc2V0LnggPSBqO1xuICAgICAgICBzcXVhcmUuZGF0YXNldC55ID0gaTtcbiAgICAgICAgZGlzcGxheUdyaWQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gX3NldFVwUGFzc1NjcmVlbigpIHtcbiAgICBwYXNzU2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhc3Mtc2NyZWVuJyk7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bhc3Mtc2NyZWVuLWJ0bicpO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgICBwYXNzU2NyZWVuLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3ctc2NyZWVuJylcbiAgICApO1xuICB9XG4gIGZ1bmN0aW9uIF9zaG93UGFzc1NjcmVlbihjdXJyZW50UGxheWVyKSB7XG4gICAgcGFzc1NjcmVlbi5jbGFzc0xpc3QuYWRkKCdzaG93LXNjcmVlbicpO1xuICAgIGNvbnN0IHRleHRJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bhc3Mtc2NyZWVuLWluZm8nKTtcbiAgICB0ZXh0SW5mby50ZXh0Q29udGVudCA9IGBQYXNzIHRoZSBkZXZpY2UgdG8gUGxheWVyICR7XG4gICAgICBjdXJyZW50UGxheWVyID09PSAxID8gJ09uZScgOiAnVHdvJ1xuICAgIH1gO1xuICB9XG4gIGNvbnN0IHJlbmRlckF0dGFja0dyaWQgPSBmdW5jdGlvbiAoYm9hcmQpIHtcbiAgICBjb25zdCBzcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmF0dGFjay1ncmlkLXNxdWFyZScpO1xuICAgIHNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgnc3VuaycpO1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ21pc3MnKTtcblxuICAgICAgY29uc3QgeXBvcyA9IHBhcnNlSW50KHNxdWFyZS5kYXRhc2V0LnkpO1xuICAgICAgY29uc3QgeHBvcyA9IHBhcnNlSW50KHNxdWFyZS5kYXRhc2V0LngpO1xuICAgICAgaWYgKGJvYXJkW3hwb3NdW3lwb3NdID09PSAnUycpIHtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3N1bmsnKTtcbiAgICAgIH0gZWxzZSBpZiAoYm9hcmRbeHBvc11beXBvc10gPT09ICdIJykge1xuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICBjb25zdCByZW5kZXJEaXNwbGF5R3JpZCA9IGZ1bmN0aW9uIChzaGlwcywgYm9hcmQpIHtcbiAgICBjb25zdCBzcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRpc3BsYXktZ3JpZC1zcXVhcmUnKTtcbiAgICBzcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgICAgJ21pc3MnLFxuICAgICAgICAnc3VuaycsXG4gICAgICAgICdjYXJyaWVyLWNvbG9yJyxcbiAgICAgICAgJ2JhdHRsZXNoaXAtY29sb3InLFxuICAgICAgICAnZGVzdHJveWVyLWNvbG9yJyxcbiAgICAgICAgJ3N1Ym1hcmluZS1jb2xvcicsXG4gICAgICAgICdib2F0LWNvbG9yJyxcbiAgICAgICAgJ3NoaXAtaGVhZC1ob3Jpem9udGFsJyxcbiAgICAgICAgJ3NoaXAtYm9keS1ob3Jpem9udGFsJyxcbiAgICAgICAgJ3NoaXAtdGFpbC1ob3Jpem9udGFsJyxcbiAgICAgICAgJ3NoaXAtaGVhZC12ZXJ0aWNhbCcsXG4gICAgICAgICdzaGlwLWJvZHktdmVydGljYWwnLFxuICAgICAgICAnc2hpcC10YWlsLXZlcnRpY2FsJyxcbiAgICAgIF07XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSguLi5jbGFzc2VzKTtcbiAgICAgIGNvbnN0IHlwb3MgPSBwYXJzZUludChzcXVhcmUuZGF0YXNldC55KTtcbiAgICAgIGNvbnN0IHhwb3MgPSBwYXJzZUludChzcXVhcmUuZGF0YXNldC54KTtcbiAgICAgIGlmIChib2FyZFt4cG9zXVt5cG9zXSA9PT0gJ0gnKSB7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICB9IGVsc2UgaWYgKGJvYXJkW3hwb3NdW3lwb3NdID09PSAnUycpIHtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3N1bmsnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBmb3IgKGNvbnN0IHNoaXAgaW4gc2hpcHMpIHtcbiAgICAgIGNvbnN0IGxlbmd0aCA9IHNoaXBzW3NoaXBdLmxlbmd0aDtcbiAgICAgIGNvbnN0IG9yaWVudGF0aW9uID1cbiAgICAgICAgc2hpcHNbc2hpcF1bMV1bJ3gnXSAtIHNoaXBzW3NoaXBdWzBdWyd4J10gPT09IDFcbiAgICAgICAgICA/ICdob3Jpem9udGFsJ1xuICAgICAgICAgIDogJ3ZlcnRpY2FsJztcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgeHBvcyA9IHNoaXBzW3NoaXBdW2ldWyd4J107XG4gICAgICAgIGNvbnN0IHlwb3MgPSBzaGlwc1tzaGlwXVtpXVsneSddO1xuICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGAuZGlzcGxheS1ncmlkLXNxdWFyZVtkYXRhLXg9XCIke3hwb3N9XCJdW2RhdGEteT1cIiR7eXBvc31cIl1gXG4gICAgICAgICk7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKGAke3NoaXB9LWNvbG9yYCk7XG4gICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoYHNoaXAtaGVhZC0ke29yaWVudGF0aW9ufWApO1xuICAgICAgICB9IGVsc2UgaWYgKGkgPT09IGxlbmd0aCAtIDEpIHtcbiAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChgc2hpcC10YWlsLSR7b3JpZW50YXRpb259YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoYHNoaXAtYm9keS0ke29yaWVudGF0aW9ufWApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBmdW5jdGlvbiBzd2l0Y2hHcmlkUG9zKGFjdGl2ZVBsYXllcikge1xuICAgIGlmIChhY3RpdmVQbGF5ZXIgPT09IDIpIHtcbiAgICAgIGxlZnRTaWRlLnJlbW92ZUNoaWxkKGRpc3BsYXlHcmlkKTtcbiAgICAgIHJpZ2h0U2lkZS5yZW1vdmVDaGlsZChhdHRhY2tHcmlkKTtcbiAgICAgIGxlZnRTaWRlLmFwcGVuZENoaWxkKGF0dGFja0dyaWQpO1xuICAgICAgcmlnaHRTaWRlLmFwcGVuZENoaWxkKGRpc3BsYXlHcmlkKTtcbiAgICB9IGVsc2UgaWYgKGFjdGl2ZVBsYXllciA9PT0gMSkge1xuICAgICAgbGVmdFNpZGUucmVtb3ZlQ2hpbGQoYXR0YWNrR3JpZCk7XG4gICAgICByaWdodFNpZGUucmVtb3ZlQ2hpbGQoZGlzcGxheUdyaWQpO1xuICAgICAgbGVmdFNpZGUuYXBwZW5kQ2hpbGQoZGlzcGxheUdyaWQpO1xuICAgICAgcmlnaHRTaWRlLmFwcGVuZENoaWxkKGF0dGFja0dyaWQpO1xuICAgIH1cbiAgfVxuICBjb25zdCBsb2FkVHVybiA9IGZ1bmN0aW9uIChcbiAgICBzaGlwcyxcbiAgICBkaXNwbGF5Qm9hcmQsXG4gICAgYXR0YWNrQm9hcmQsXG4gICAgY3VycmVudFBsYXllcixcbiAgICB0dXJuTm8sXG4gICAgbW9kZVxuICApIHtcbiAgICBpZiAobW9kZSA9PT0gJ3BsYXllcicpIHtcbiAgICAgIF9zaG93UGFzc1NjcmVlbihjdXJyZW50UGxheWVyKTtcbiAgICAgIHN3aXRjaEdyaWRQb3MoY3VycmVudFBsYXllcik7XG4gICAgfVxuICAgIHJlbmRlckF0dGFja0dyaWQoYXR0YWNrQm9hcmQpO1xuICAgIHJlbmRlckRpc3BsYXlHcmlkKHNoaXBzLCBkaXNwbGF5Qm9hcmQpO1xuICAgIHVwZGF0ZUluZm8oY3VycmVudFBsYXllciwgdHVybk5vKTtcbiAgfTtcbiAgZnVuY3Rpb24gdXBkYXRlSW5mbyhjdXJyZW50UGxheWVyLCB0dXJuTm8pIHtcbiAgICBjb25zdCBwbGF5ZXIgPSBjdXJyZW50UGxheWVyID09PSAxID8gJ09uZScgOiAnVHdvJztcbiAgICBjb25zdCBpbmZvRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLWluZm8gaDInKTtcbiAgICBpbmZvRWxlbWVudC50ZXh0Q29udGVudCA9IGBUdXJuICR7dHVybk5vfTogUGxheWVyICR7cGxheWVyfSdzIHR1cm5gO1xuICB9XG4gIGZ1bmN0aW9uIF9zZXRVcE1vZGFsKHdpbm5lciwgbW9kZSkge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwtY29udGFpbmVyJyk7XG4gICAgbW9kYWwuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbFwiPlxuICAgICAgICA8aDIgY2xhc3M9XCJ3aW5uZXJcIj48L2gyPlxuICAgICAgICA8aDM+UGxheSBhZ2Fpbj88L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYnRuLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxidXR0b24gaWQ9XCJidG4teWVzXCI+WWVzPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBpZD1cImJ0bi1ub1wiPk5vPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+YDtcbiAgICBjb25zdCBib2R5RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBib2R5RWxlbWVudC5hcHBlbmRDaGlsZChtb2RhbCk7XG4gICAgY29uc3Qgd2lubmVyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5uZXInKTtcbiAgICBpZiAobW9kZSA9PT0gJ2NwdScgJiYgd2lubmVyID09PSAyKSB7XG4gICAgICB3aW5uZXJFbGVtZW50LnRleHRDb250ZW50ID0gJ1lvdSBsb3N0Lic7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbm5lckVsZW1lbnQudGV4dENvbnRlbnQgPVxuICAgICAgICB3aW5uZXIgPT09IDEgPyBgUGxheWVyIE9uZSBoYXMgd29uIWAgOiAnUGxheWVyIFR3byBoYXMgd29uISc7XG4gICAgfVxuICAgIGNvbnN0IHllc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG4teWVzJyk7XG4gICAgY29uc3Qgbm9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuLW5vJyk7XG4gICAgeWVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbG9jYXRpb24ucmVsb2FkKCkpO1xuICAgIG5vQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gYm9keUVsZW1lbnQucmVtb3ZlQ2hpbGQobW9kYWwpKTtcbiAgfVxuICBmdW5jdGlvbiBfY3JlYXRlUmV2ZWFsR3JpZChzaGlwcywgYm9hcmQpIHtcbiAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdyZXZlYWwtZ3JpZCcpO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgncmV2ZWFsLWdyaWQtc3F1YXJlJyk7XG4gICAgICAgIHNxdWFyZS5kYXRhc2V0LnggPSBqO1xuICAgICAgICBzcXVhcmUuZGF0YXNldC55ID0gaTtcblxuICAgICAgICBpZiAoYm9hcmRbaV1bal0gPT09ICdIJykge1xuICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICAgIH0gZWxzZSBpZiAoYm9hcmRbaV1bal0gPT09ICdTJykge1xuICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzdW5rJyk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBzaGlwIGluIHNoaXBzKSB7XG4gICAgICAgICAgY29uc3QgbGVuZ3RoID0gc2hpcHNbc2hpcF0ubGVuZ3RoO1xuICAgICAgICAgIGNvbnN0IG9yaWVudGF0aW9uID1cbiAgICAgICAgICAgIHNoaXBzW3NoaXBdWzFdWyd4J10gLSBzaGlwc1tzaGlwXVswXVsneCddID09PSAxXG4gICAgICAgICAgICAgID8gJ2hvcml6b250YWwnXG4gICAgICAgICAgICAgIDogJ3ZlcnRpY2FsJztcbiAgICAgICAgICBmb3IgKGxldCB6ID0gMDsgeiA8IGxlbmd0aDsgeisrKSB7XG4gICAgICAgICAgICBjb25zdCB4cG9zID0gc2hpcHNbc2hpcF1bel1bJ3gnXTtcbiAgICAgICAgICAgIGNvbnN0IHlwb3MgPSBzaGlwc1tzaGlwXVt6XVsneSddO1xuICAgICAgICAgICAgaWYgKGkgPT09IHhwb3MgJiYgaiA9PT0geXBvcykge1xuICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChgJHtzaGlwfS1jb2xvcmApO1xuICAgICAgICAgICAgICBpZiAoeiA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKGBzaGlwLWhlYWQtJHtvcmllbnRhdGlvbn1gKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh6ID09PSBsZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoYHNoaXAtdGFpbC0ke29yaWVudGF0aW9ufWApO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKGBzaGlwLWJvZHktJHtvcmllbnRhdGlvbn1gKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBncmlkLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBncmlkO1xuICB9XG4gIGNvbnN0IGxvYWRXaW4gPSBmdW5jdGlvbiAod2lubmVyLCBtb2RlKSB7XG4gICAgX3NldFVwTW9kYWwod2lubmVyLCBtb2RlKTtcbiAgICBpZiAod2lubmVyID09PSAxIHx8IG1vZGUgPT09ICdjcHUnKSB7XG4gICAgICBsZWZ0U2lkZS5yZW1vdmVDaGlsZChkaXNwbGF5R3JpZCk7XG4gICAgICByaWdodFNpZGUucmVtb3ZlQ2hpbGQoYXR0YWNrR3JpZCk7XG4gICAgfSBlbHNlIGlmICh3aW5uZXIgPT09IDIpIHtcbiAgICAgIGxlZnRTaWRlLnJlbW92ZUNoaWxkKGF0dGFja0dyaWQpO1xuICAgICAgcmlnaHRTaWRlLnJlbW92ZUNoaWxkKGRpc3BsYXlHcmlkKTtcbiAgICB9XG4gICAgbGVmdFNpZGUuYXBwZW5kQ2hpbGQoXG4gICAgICBfY3JlYXRlUmV2ZWFsR3JpZChcbiAgICAgICAgZ2FtZUNvbnRyb2xsZXIuZ2V0UGxheWVyT25lU2hpcHMoKSxcbiAgICAgICAgZ2FtZUNvbnRyb2xsZXIuZ2V0UGxheWVyT25lQm9hcmQoKVxuICAgICAgKVxuICAgICk7XG4gICAgcmlnaHRTaWRlLmFwcGVuZENoaWxkKFxuICAgICAgX2NyZWF0ZVJldmVhbEdyaWQoXG4gICAgICAgIGdhbWVDb250cm9sbGVyLmdldFBsYXllclR3b1NoaXBzKCksXG4gICAgICAgIGdhbWVDb250cm9sbGVyLmdldFBsYXllclR3b0JvYXJkKClcbiAgICAgIClcbiAgICApO1xuICAgIGlmIChtb2RlID09PSAnY3B1Jykge1xuICAgICAgY29uc3Qgd2lubmVyVGV4dCA9IHdpbm5lciA9PT0gMSA/ICdZb3UgaGF2ZSB3b24hJyA6ICdZb3UgaGF2ZSBsb3N0Lic7XG4gICAgICBjb25zdCBpbmZvRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLWluZm8gaDInKTtcbiAgICAgIGluZm9FbGVtZW50LnRleHRDb250ZW50ID0gd2lubmVyVGV4dDtcbiAgICB9IGVsc2UgaWYgKG1vZGUgPT09ICdwbGF5ZXInKSB7XG4gICAgICBjb25zdCB3aW5uZXJUZXh0ID0gd2lubmVyID09PSAxID8gJ09uZScgOiAnVHdvJztcbiAgICAgIGNvbnN0IGluZm9FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtaW5mbyBoMicpO1xuICAgICAgaW5mb0VsZW1lbnQudGV4dENvbnRlbnQgPSBgUGxheWVyICR7d2lubmVyVGV4dH0gaGFzIHdvbiFgO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHsgaW5pdGlhbGl6ZSwgcmVuZGVyQXR0YWNrR3JpZCwgbG9hZFR1cm4sIGxvYWRXaW4gfTtcbn0pKCk7XG5leHBvcnQgeyBnYW1lVmlldyB9O1xuIiwiaW1wb3J0IHsgZ2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuLi9hcHAvZ2FtZWNvbnRyb2xsZXInO1xuaW1wb3J0IHsgaGVscGVyIH0gZnJvbSAnLi4vYXBwL2hlbHBlcic7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuLi9hcHAvcGxheWVyJztcbmltcG9ydCB7IGdhbWVWaWV3IH0gZnJvbSAnLi9nYW1lVmlldyc7XG5jb25zdCBwbGFjZW1lbnRWaWV3ID0gKGZ1bmN0aW9uICgpIHtcbiAgbGV0IHNlbGVjdGVkU2hpcDtcbiAgbGV0IHBsYWNlbWVudE9yaWVudGF0aW9uO1xuICBsZXQgZ2FtZW1vZGU7XG4gIGxldCBwbGF5ZXJzU2V0ID0gMDtcbiAgY29uc3Qgc2hpcERhdGEgPSB7XG4gICAgY2FycmllcjogeyBsb2NhdGlvbjogW10sIGZhY2luZzogbnVsbCB9LFxuICAgIGJhdHRsZXNoaXA6IHsgbG9jYXRpb246IFtdLCBmYWNpbmc6IG51bGwgfSxcbiAgICBkZXN0cm95ZXI6IHsgbG9jYXRpb246IFtdLCBmYWNpbmc6IG51bGwgfSxcbiAgICBzdWJtYXJpbmU6IHsgbG9jYXRpb246IFtdLCBmYWNpbmc6IG51bGwgfSxcbiAgICBib2F0OiB7IGxvY2F0aW9uOiBbXSwgZmFjaW5nOiBudWxsIH0sXG4gIH07XG4gIGxldCBwbGFjZW1lbnRHcmlkO1xuICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXJnZXQnKTtcbiAgY29uc3QgaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb250ZW50LmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwibWFpbi1jb250ZW50XCI+XG4gICAgPGgyIGNsYXNzPVwicGxhY2VtZW50LWluZm9cIj5QbGF5ZXIgbiBjaG9vc2UgYm9hcmQ8L2gyPlxuICAgIDxkaXYgY2xhc3M9XCJwbGFjZW1lbnQtY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uLXBhbmVsXCI+XG4gICAgICAgIDxidXR0b24gaWQ9XCJyb3RhdGUtYnRuXCI+Um90YXRlPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gaWQ9XCJyYW5kb21pc2UtYnRuXCI+UmFuZG9taXNlPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gaWQ9XCJyZXNldC1idG5cIj5SZXNldDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGlkPVwiZ28tYnRuXCIgZGlzYWJsZWQ+R288L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInBsYWNlbWVudC1ncmlkXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwic2hpcC1wYW5lbFwiPlxuICAgICAgICA8aDM+UGxhY2UgeW91ciBzaGlwczwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaGlwLWJ1dHRvbi1jb250YWluZXJcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgICBgO1xuICAgIHBsYWNlbWVudEdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxhY2VtZW50LWdyaWQnKTtcbiAgICBzZWxlY3RlZFNoaXAgPSBudWxsO1xuICAgIHBsYWNlbWVudE9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnO1xuICAgIF9jbGVhclNoaXBEYXRhKCk7XG4gICAgX3VwZGF0ZVR1cm5EaXNwbGF5KCk7XG4gICAgX21ha2VQbGFjZW1lbnRHcmlkKCk7XG4gICAgX21ha2VCdXR0b25zKCk7XG4gICAgX3NldFVwQ29udHJvbEJ0bnMoKTtcbiAgfTtcbiAgY29uc3Qgc2V0R2FtZW1vZGUgPSBmdW5jdGlvbiAobW9kZSkge1xuICAgIGlmIChtb2RlID09PSAncGxheWVyJykge1xuICAgICAgZ2FtZW1vZGUgPSBtb2RlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmIChtb2RlID09PSAnY3B1Jykge1xuICAgICAgZ2FtZW1vZGUgPSBtb2RlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHJldHVybiBmYWxzZTtcbiAgfTtcbiAgZnVuY3Rpb24gX21ha2VQbGFjZW1lbnRHcmlkKCkge1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgMTA7IHkrKykge1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCAxMDsgeCsrKSB7XG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgncGxhY2VtZW50LWdyaWQtc3F1YXJlJyk7XG4gICAgICAgIHNxdWFyZS5kYXRhc2V0LnkgPSB5O1xuICAgICAgICBzcXVhcmUuZGF0YXNldC54ID0geDtcbiAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoZSkgPT4ge1xuICAgICAgICAgIGlmIChzZWxlY3RlZFNoaXAgPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICBkaXNwbGF5U2hpcE9uVmlldyh4LCB5KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKGUpID0+IHtcbiAgICAgICAgICBjbGVhckRpc3BsYXlTaGlwKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICdjb250ZXh0bWVudScsXG4gICAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHNoaXBOYW1lID0gZS50YXJnZXQuZGF0YXNldC5zaGlwdHlwZTtcbiAgICAgICAgICAgIGlmIChyZW1vdmVTaGlwKHNoaXBOYW1lKSkge1xuICAgICAgICAgICAgICByZW5kZXJHcmlkKCk7XG4gICAgICAgICAgICAgIF9tYWtlQnV0dG9ucygpO1xuICAgICAgICAgICAgICBjbGVhckRpc3BsYXlTaGlwKCk7XG4gICAgICAgICAgICAgIGRpc3BsYXlTaGlwT25WaWV3KHgsIHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFsc2VcbiAgICAgICAgKTtcbiAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIGlmIChzZWxlY3RlZFNoaXAgPT09IG51bGwpIHJldHVybjtcbiAgICAgICAgICBpZiAoYWRkU2hpcCh4LCB5LCBzZWxlY3RlZFNoaXAsIHBsYWNlbWVudE9yaWVudGF0aW9uKSkge1xuICAgICAgICAgICAgcmVuZGVyR3JpZCgpO1xuICAgICAgICAgICAgc2VsZWN0ZWRTaGlwID0gbnVsbDtcbiAgICAgICAgICAgIF9tYWtlQnV0dG9ucygpO1xuICAgICAgICAgICAgY2xlYXJEaXNwbGF5U2hpcCgpO1xuICAgICAgICAgICAgZGlzcGxheVNoaXBPblZpZXcoeCwgeSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBwbGFjZW1lbnRHcmlkLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIF9zZXRVcENvbnRyb2xCdG5zKCkge1xuICAgIGNvbnN0IHJvdGF0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb3RhdGUtYnRuJyk7XG4gICAgY29uc3QgcmVzZXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzZXQtYnRuJyk7XG4gICAgY29uc3QgcmFuZG9tQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JhbmRvbWlzZS1idG4nKTtcbiAgICBjb25zdCBnb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnby1idG4nKTtcbiAgICByb3RhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBwbGFjZW1lbnRPcmllbnRhdGlvbiA9XG4gICAgICAgIHBsYWNlbWVudE9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnO1xuICAgIH0pO1xuICAgIHJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcmVtb3ZlU2hpcCgnY2FycmllcicpO1xuICAgICAgcmVtb3ZlU2hpcCgnYmF0dGxlc2hpcCcpO1xuICAgICAgcmVtb3ZlU2hpcCgnZGVzdHJveWVyJyk7XG4gICAgICByZW1vdmVTaGlwKCdzdWJtYXJpbmUnKTtcbiAgICAgIHJlbW92ZVNoaXAoJ2JvYXQnKTtcbiAgICAgIHJlbmRlckdyaWQoKTtcbiAgICAgIF9tYWtlQnV0dG9ucygpO1xuICAgIH0pO1xuICAgIHJhbmRvbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHJlbW92ZVNoaXAoJ2NhcnJpZXInKTtcbiAgICAgIHJlbW92ZVNoaXAoJ2JhdHRsZXNoaXAnKTtcbiAgICAgIHJlbW92ZVNoaXAoJ2Rlc3Ryb3llcicpO1xuICAgICAgcmVtb3ZlU2hpcCgnc3VibWFyaW5lJyk7XG4gICAgICByZW1vdmVTaGlwKCdib2F0Jyk7XG4gICAgICBjb25zdCBib2FyZCA9IF9nZXRSYW5kb21Cb2FyZCgpO1xuICAgICAgX2FkZFJhbmRvbUJvYXJkKGJvYXJkKTtcbiAgICAgIF9tYWtlQnV0dG9ucygpO1xuICAgICAgcmVuZGVyR3JpZCgpO1xuICAgICAgc2VsZWN0ZWRTaGlwID0gbnVsbDtcbiAgICB9KTtcbiAgICBnb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmIChnYW1lbW9kZSA9PT0gJ2NwdScpIHtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBPYmplY3QuYXNzaWduKHt9LCBzaGlwRGF0YSk7XG4gICAgICAgIGdhbWVDb250cm9sbGVyLmNyZWF0ZVBsYXllcjEoYm9hcmQpO1xuICAgICAgICBnYW1lQ29udHJvbGxlci5jcmVhdGVQbGF5ZXIyKG51bGwpO1xuICAgICAgICBnYW1lQ29udHJvbGxlci5zdGFydEdhbWUoZ2FtZW1vZGUpO1xuICAgICAgICBnYW1lVmlldy5pbml0aWFsaXplKCk7XG4gICAgICB9IGVsc2UgaWYgKGdhbWVtb2RlID09PSAncGxheWVyJykge1xuICAgICAgICBpZiAocGxheWVyc1NldCA9PT0gMCkge1xuICAgICAgICAgIHBsYXllcnNTZXQrKztcbiAgICAgICAgICBjb25zdCBib2FyZCA9IE9iamVjdC5hc3NpZ24oe30sIHNoaXBEYXRhKTtcbiAgICAgICAgICBnYW1lQ29udHJvbGxlci5jcmVhdGVQbGF5ZXIxKGJvYXJkKTtcbiAgICAgICAgICBpbml0aWFsaXplKCk7XG4gICAgICAgIH0gZWxzZSBpZiAocGxheWVyc1NldCA9PT0gMSkge1xuICAgICAgICAgIGNvbnN0IGJvYXJkID0gT2JqZWN0LmFzc2lnbih7fSwgc2hpcERhdGEpO1xuICAgICAgICAgIGdhbWVDb250cm9sbGVyLmNyZWF0ZVBsYXllcjIoYm9hcmQpO1xuICAgICAgICAgIGdhbWVDb250cm9sbGVyLnN0YXJ0R2FtZShnYW1lbW9kZSk7XG4gICAgICAgICAgZ2FtZVZpZXcuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgLy8gcmV0dXJucyB0cnVlIG9yIGZhbHNlIGlmIG1vdXNlb3ZlciBzcWF1cmUgaXMgYSB2YWxpZCBwbGFjZW1lbnRcbiAgZnVuY3Rpb24gY2hlY2tWYWxpZFBsYWNlbWVudCh4LCB5LCBsZW5ndGgsIG9yaWVudGF0aW9uKSB7XG4gICAgLy8gY2hlY2sgb3V0IG9mIGJvdW5kc1xuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBpZiAoeCArIGxlbmd0aCA+IDEwKSByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgaWYgKHkgKyBsZW5ndGggPiAxMCkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBjaGVjayBubyBvdmVybGFwLCBlbm51bWVyYXRlIHNoaXBsb2NhdGlvblxuICAgIGZvciAobGV0IHNoaXAgaW4gc2hpcERhdGEpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2hpcERhdGFbc2hpcF0ubG9jYXRpb24ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IGNoZWNrWCA9IG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcgPyB4ICsgaSA6IHg7XG4gICAgICAgICAgY29uc3QgY2hlY2tZID0gb3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcgPyB5ICsgaSA6IHk7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgc2hpcERhdGFbc2hpcF1bJ2xvY2F0aW9uJ11bal1bJ3gnXSA9PT0gY2hlY2tYICYmXG4gICAgICAgICAgICBzaGlwRGF0YVtzaGlwXVsnbG9jYXRpb24nXVtqXVsneSddID09PSBjaGVja1lcbiAgICAgICAgICApXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLy8gaGlnaGxpZ2h0IHJlZCBvciBncmVlbiBzaGlwIG9uIGdyaWRcbiAgZnVuY3Rpb24gZGlzcGxheVNoaXBPblZpZXcoeCwgeSkge1xuICAgIGlmIChzZWxlY3RlZFNoaXAgPT09IG51bGwpIHJldHVybjtcbiAgICBjb25zdCBsZW5ndGggPSBoZWxwZXIuc2hpcEluZm8oc2VsZWN0ZWRTaGlwKS5sZW5ndGg7XG4gICAgY29uc3Qgb3JpZW50YXRpb24gPSBwbGFjZW1lbnRPcmllbnRhdGlvbjtcbiAgICBjb25zdCBpc1ZhbGlkID0gY2hlY2tWYWxpZFBsYWNlbWVudCh4LCB5LCBsZW5ndGgsIG9yaWVudGF0aW9uKTtcblxuICAgIGlmIChpc1ZhbGlkKVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB4cG9zID0gb3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJyA/IHggKyBpIDogeDtcbiAgICAgICAgY29uc3QgeXBvcyA9IG9yaWVudGF0aW9uID09PSAndmVydGljYWwnID8geSArIGkgOiB5O1xuICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGBbZGF0YS14PVwiJHt4cG9zfVwiXVtkYXRhLXk9XCIke3lwb3N9XCJdYFxuICAgICAgICApO1xuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgndmFsaWQtc3F1YXJlJyk7XG4gICAgICB9XG4gICAgZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHhwb3MgPSBvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnID8geCArIGkgOiB4O1xuICAgICAgICBjb25zdCB5cG9zID0gb3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcgPyB5ICsgaSA6IHk7XG4gICAgICAgIGlmICh4cG9zID4gOSB8fCB5cG9zID4gOSkgYnJlYWs7XG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYFtkYXRhLXg9XCIke3hwb3N9XCJdW2RhdGEteT1cIiR7eXBvc31cIl1gXG4gICAgICAgICk7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkLXNxdWFyZScpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBjbGVhcnMgdmFsaWQgb3IgaW52YWxpZCBzcXVhcmUgd2hlbiBob3ZlcmluZ1xuICBmdW5jdGlvbiBjbGVhckRpc3BsYXlTaGlwKCkge1xuICAgIGNvbnN0IHNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxhY2VtZW50LWdyaWQgPiAqJyk7XG4gICAgc3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkLXNxdWFyZScpO1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ3ZhbGlkLXNxdWFyZScpO1xuICAgIH0pO1xuICB9XG4gIC8vIGNhbGxiYWNrIGZvciBjbGljayBzcXVhcmUgcGxhY2VtZW50IGV2ZW50IGlmIHZhbGlkIHBsYWNlZFxuICBmdW5jdGlvbiBhZGRTaGlwKHgsIHksIG5hbWUsIG9yaWVudGF0aW9uKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gaGVscGVyLnNoaXBJbmZvKG5hbWUpLmxlbmd0aDtcbiAgICBpZiAoIWNoZWNrVmFsaWRQbGFjZW1lbnQoeCwgeSwgbGVuZ3RoLCBvcmllbnRhdGlvbikpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdub3QgcG9zc2libGUnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHNoaXBEYXRhW25hbWVdLmxvY2F0aW9uLmxlbmd0aCAhPT0gMCkge1xuICAgICAgYWxlcnQoYCR7bmFtZX0gYWxyZWFkeSBleGlzdHNgKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IC8vcHJldmVudHMgb3ZlcndyaXRpbmdcbiAgICBjb25zdCBsb2NhdGlvbiA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNvb3JkID0ge307XG4gICAgICBjb25zdCB4cG9zID0gb3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJyA/IHggKyBpIDogeDtcbiAgICAgIGNvbnN0IHlwb3MgPSBvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJyA/IHkgKyBpIDogeTtcbiAgICAgIGNvb3JkLnggPSB4cG9zO1xuICAgICAgY29vcmQueSA9IHlwb3M7XG4gICAgICBsb2NhdGlvbi5wdXNoKGNvb3JkKTtcbiAgICB9XG4gICAgc2hpcERhdGFbbmFtZV0ubG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICBzaGlwRGF0YVtuYW1lXS5mYWNpbmcgPSBvcmllbnRhdGlvbjtcbiAgICBfY2hlY2tTdGFydENvbmRpdGlvbigpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGZ1bmN0aW9uIHJlbW92ZVNoaXAobmFtZSkge1xuICAgIGlmIChuYW1lID09PSB1bmRlZmluZWQpIHJldHVybiBmYWxzZTtcbiAgICBzaGlwRGF0YVtuYW1lXS5sb2NhdGlvbiA9IFtdO1xuICAgIHNoaXBEYXRhW25hbWVdLmZhY2luZyA9IG51bGw7XG4gICAgX2NoZWNrU3RhcnRDb25kaXRpb24oKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBmdW5jdGlvbiByZW5kZXJHcmlkKCkge1xuICAgIGNvbnN0IHNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxhY2VtZW50LWdyaWQgPiAqJyk7XG4gICAgc3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAgICdzaGlwLWhlYWQtaG9yaXpvbnRhbCcsXG4gICAgICAgICdzaGlwLWJvZHktaG9yaXpvbnRhbCcsXG4gICAgICAgICdzaGlwLXRhaWwtaG9yaXpvbnRhbCcsXG4gICAgICAgICdzaGlwLWhlYWQtdmVydGljYWwnLFxuICAgICAgICAnc2hpcC1ib2R5LXZlcnRpY2FsJyxcbiAgICAgICAgJ3NoaXAtdGFpbC12ZXJ0aWNhbCcsXG4gICAgICBdO1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoLi4uY2xhc3Nlcyk7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgnY2Fycmllci1jb2xvcicpO1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ2JhdHRsZXNoaXAtY29sb3InKTtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKCdkZXN0cm95ZXItY29sb3InKTtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKCdzdWJtYXJpbmUtY29sb3InKTtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKCdib2F0LWNvbG9yJyk7XG4gICAgICBzcXVhcmUucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXNoaXB0eXBlJywgJycpO1xuICAgIH0pO1xuICAgIGZvciAoY29uc3Qgc2hpcCBpbiBzaGlwRGF0YSkge1xuICAgICAgc2hpcERhdGFbc2hpcF1bJ2xvY2F0aW9uJ10uZm9yRWFjaCgoY29vcmQsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHhwb3MgPSBjb29yZC54O1xuICAgICAgICBjb25zdCB5cG9zID0gY29vcmQueTtcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgW2RhdGEteD1cIiR7eHBvc31cIl1bZGF0YS15PVwiJHt5cG9zfVwiXWBcbiAgICAgICAgKTtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoYCR7c2hpcH0tY29sb3JgKTtcbiAgICAgICAgc3F1YXJlLmRhdGFzZXQuc2hpcHR5cGUgPSBzaGlwO1xuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChgc2hpcC1oZWFkLSR7c2hpcERhdGFbc2hpcF1bJ2ZhY2luZyddfWApO1xuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSBzaGlwRGF0YVtzaGlwXS5sb2NhdGlvbi5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoYHNoaXAtdGFpbC0ke3NoaXBEYXRhW3NoaXBdWydmYWNpbmcnXX1gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChgc2hpcC1ib2R5LSR7c2hpcERhdGFbc2hpcF1bJ2ZhY2luZyddfWApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gX21ha2VCdXR0b25zKCkge1xuICAgIGxldCBmaXJzdCA9IGZhbHNlO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLWJ1dHRvbi1jb250YWluZXInKTtcbiAgICBsZXQgY2FycmllckJ0biwgYmF0dGxlc2hpcEJ0biwgZGVzdHJveWVyQnRuLCBzdWJtYXJpbmVCdG4sIGJvYXRCdG47XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIGlmIChzaGlwRGF0YVsnY2FycmllciddLmxvY2F0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY2FycmllckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgY2FycmllckJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhcnJpZXItYnRuJyk7XG4gICAgICBjYXJyaWVyQnRuLnRleHRDb250ZW50ID0gJ0NhcnJpZXInO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcnJpZXJCdG4pO1xuICAgICAgaWYgKGZpcnN0ID09PSBmYWxzZSkge1xuICAgICAgICBmaXJzdCA9IHRydWU7XG4gICAgICAgIHNlbGVjdGVkU2hpcCA9ICdjYXJyaWVyJztcbiAgICAgICAgY2FycmllckJ0bi5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJycpO1xuICAgICAgICBjYXJyaWVyQnRuLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzaGlwRGF0YVsnYmF0dGxlc2hpcCddLmxvY2F0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgYmF0dGxlc2hpcEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgYmF0dGxlc2hpcEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2JhdHRsZXNoaXAtYnRuJyk7XG4gICAgICBiYXR0bGVzaGlwQnRuLnRleHRDb250ZW50ID0gJ0JhdHRsZXNoaXAnO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJhdHRsZXNoaXBCdG4pO1xuICAgICAgaWYgKGZpcnN0ID09PSBmYWxzZSkge1xuICAgICAgICBmaXJzdCA9IHRydWU7XG4gICAgICAgIHNlbGVjdGVkU2hpcCA9ICdiYXR0bGVzaGlwJztcbiAgICAgICAgYmF0dGxlc2hpcEJ0bi5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJycpO1xuICAgICAgICBiYXR0bGVzaGlwQnRuLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzaGlwRGF0YVsnZGVzdHJveWVyJ10ubG9jYXRpb24ubGVuZ3RoID09PSAwKSB7XG4gICAgICBkZXN0cm95ZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGRlc3Ryb3llckJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Rlc3Ryb3llci1idG4nKTtcbiAgICAgIGRlc3Ryb3llckJ0bi50ZXh0Q29udGVudCA9ICdEZXN0cm95ZXInO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc3Ryb3llckJ0bik7XG4gICAgICBpZiAoZmlyc3QgPT09IGZhbHNlKSB7XG4gICAgICAgIGZpcnN0ID0gdHJ1ZTtcbiAgICAgICAgc2VsZWN0ZWRTaGlwID0gJ2Rlc3Ryb3llcic7XG4gICAgICAgIGRlc3Ryb3llckJ0bi5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJycpO1xuICAgICAgICBkZXN0cm95ZXJCdG4uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNoaXBEYXRhWydzdWJtYXJpbmUnXS5sb2NhdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICAgIHN1Ym1hcmluZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgc3VibWFyaW5lQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VibWFyaW5lLWJ0bicpO1xuICAgICAgc3VibWFyaW5lQnRuLnRleHRDb250ZW50ID0gJ1N1Ym1hcmluZSc7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWFyaW5lQnRuKTtcbiAgICAgIGlmIChmaXJzdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgZmlyc3QgPSB0cnVlO1xuICAgICAgICBzZWxlY3RlZFNoaXAgPSAnc3VibWFyaW5lJztcbiAgICAgICAgc3VibWFyaW5lQnRuLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnJyk7XG4gICAgICAgIHN1Ym1hcmluZUJ0bi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc2hpcERhdGFbJ2JvYXQnXS5sb2NhdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICAgIGJvYXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGJvYXRCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdib2F0LWJ0bicpO1xuICAgICAgYm9hdEJ0bi50ZXh0Q29udGVudCA9ICdQYXRyb2wnO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJvYXRCdG4pO1xuICAgICAgaWYgKGZpcnN0ID09PSBmYWxzZSkge1xuICAgICAgICBmaXJzdCA9IHRydWU7XG4gICAgICAgIHNlbGVjdGVkU2hpcCA9ICdib2F0JztcbiAgICAgICAgYm9hdEJ0bi5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJycpO1xuICAgICAgICBib2F0QnRuLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYWxsQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAnLnNoaXAtYnV0dG9uLWNvbnRhaW5lciA+IGJ1dHRvbidcbiAgICApO1xuICAgIGlmIChzaGlwRGF0YVsnY2FycmllciddLmxvY2F0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY2FycmllckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChzZWxlY3RlZFNoaXAgPT09ICdjYXJyaWVyJykge1xuICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgc2VsZWN0ZWRTaGlwID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGxCdG5zLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICAgIHNlbGVjdGVkU2hpcCA9ICdjYXJyaWVyJztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChzaGlwRGF0YVsnYmF0dGxlc2hpcCddLmxvY2F0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgYmF0dGxlc2hpcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChzZWxlY3RlZFNoaXAgPT09ICdiYXR0bGVzaGlwJykge1xuICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgc2VsZWN0ZWRTaGlwID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGxCdG5zLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICAgIHNlbGVjdGVkU2hpcCA9ICdiYXR0bGVzaGlwJztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChzaGlwRGF0YVsnZGVzdHJveWVyJ10ubG9jYXRpb24ubGVuZ3RoID09PSAwKSB7XG4gICAgICBkZXN0cm95ZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoc2VsZWN0ZWRTaGlwID09PSAnZGVzdHJveWVyJykge1xuICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgc2VsZWN0ZWRTaGlwID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGxCdG5zLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICAgIHNlbGVjdGVkU2hpcCA9ICdkZXN0cm95ZXInO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHNoaXBEYXRhWydzdWJtYXJpbmUnXS5sb2NhdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICAgIHN1Ym1hcmluZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChzZWxlY3RlZFNoaXAgPT09ICdzdWJtYXJpbmUnKSB7XG4gICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICBzZWxlY3RlZFNoaXAgPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFsbEJ0bnMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgc2VsZWN0ZWRTaGlwID0gJ3N1Ym1hcmluZSc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoc2hpcERhdGFbJ2JvYXQnXS5sb2NhdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICAgIGJvYXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoc2VsZWN0ZWRTaGlwID09PSAnYm9hdCcpIHtcbiAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgIHNlbGVjdGVkU2hpcCA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWxsQnRucy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICBzZWxlY3RlZFNoaXAgPSAnYm9hdCc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBfZ2V0UmFuZG9tQm9hcmQoKSB7XG4gICAgY29uc3QgcGxheWVyID0gUGxheWVyKCk7XG4gICAgcGxheWVyLnBsYWNlUmFuZG9tKCk7XG4gICAgY29uc3QgYm9hcmQgPSBwbGF5ZXIuZ2V0Qm9hcmQoKTtcbiAgICBjb25zdCBsb2NhdGlvbiA9IGJvYXJkLmdldFNoaXBMb2NhdGlvbigpO1xuICAgIHJldHVybiBsb2NhdGlvbjtcbiAgfVxuICBmdW5jdGlvbiBfYWRkUmFuZG9tQm9hcmQoYm9hcmQpIHtcbiAgICBmb3IgKGxldCBzaGlwIGluIGJvYXJkKSB7XG4gICAgICBsZXQgc2hpcE9yaWVudGF0aW9uO1xuICAgICAgY29uc3QgY29vcmRYID0gYm9hcmRbc2hpcF1bMF1bJ3gnXTtcbiAgICAgIGNvbnN0IGNvb3JkWSA9IGJvYXJkW3NoaXBdWzBdWyd5J107XG4gICAgICBpZiAoYm9hcmRbc2hpcF1bMV1bJ3gnXSAtIGJvYXJkW3NoaXBdWzBdWyd4J10gPT09IDEpIHtcbiAgICAgICAgc2hpcE9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnO1xuICAgICAgfSBlbHNlIHNoaXBPcmllbnRhdGlvbiA9ICd2ZXJ0aWNhbCc7XG4gICAgICBhZGRTaGlwKGNvb3JkWCwgY29vcmRZLCBzaGlwLCBzaGlwT3JpZW50YXRpb24pO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBfY2hlY2tTdGFydENvbmRpdGlvbigpIHtcbiAgICBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnby1idG4nKTtcbiAgICBmb3IgKGxldCBzaGlwIGluIHNoaXBEYXRhKSB7XG4gICAgICBpZiAoc2hpcERhdGFbc2hpcF0ubG9jYXRpb24ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHN0YXJ0QnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgc3RhcnRCdG4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGZ1bmN0aW9uIF9jbGVhclNoaXBEYXRhKCkge1xuICAgIGZvciAobGV0IHNoaXAgaW4gc2hpcERhdGEpIHtcbiAgICAgIHNoaXBEYXRhW3NoaXBdLmxvY2F0aW9uID0gW107XG4gICAgICBzaGlwRGF0YVtzaGlwXS5mYWNpbmcgPSBudWxsO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBfdXBkYXRlVHVybkRpc3BsYXkoKSB7XG4gICAgY29uc3QgaW5mb0Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxhY2VtZW50LWluZm8nKTtcbiAgICBpbmZvRGlzcGxheS50ZXh0Q29udGVudCA9IGBQbGF5ZXIgJHtwbGF5ZXJzU2V0ICsgMX0ncyB0dXJuIHRvIHBsYWNlYDtcbiAgfVxuXG4gIHJldHVybiB7IGluaXRpYWxpemUsIHNldEdhbWVtb2RlIH07XG59KSgpO1xuXG5leHBvcnQgeyBwbGFjZW1lbnRWaWV3IH07XG4iLCJpbXBvcnQgeyBwbGFjZW1lbnRWaWV3IH0gZnJvbSAnLi9wbGFjZW1lbnRWaWV3JztcbmNvbnN0IHNlbGVjdGlvblZpZXcgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFyZ2V0Jyk7XG4gIGNvbnN0IGluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGFyZ2V0LmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwic2VsZWN0LWNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNlbGVjdC1wYW5lbFwiPlxuICAgICAgICAgIDxoMj5HQU1FTU9ERTwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNlbGVjdC1idG4tY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwicGxheWVyXCI+UExBWUVSPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiY3B1XCI+Q1BVPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgICBjb25zdCBwbGF5ZXJNb2RlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllcicpO1xuICAgIGNvbnN0IGNwdU1vZGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3B1Jyk7XG4gICAgcGxheWVyTW9kZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmIChwbGFjZW1lbnRWaWV3LnNldEdhbWVtb2RlKCdwbGF5ZXInKSkgcGxhY2VtZW50Vmlldy5pbml0aWFsaXplKCk7XG4gICAgfSk7XG4gICAgY3B1TW9kZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmIChwbGFjZW1lbnRWaWV3LnNldEdhbWVtb2RlKCdjcHUnKSkgcGxhY2VtZW50Vmlldy5pbml0aWFsaXplKCk7XG4gICAgfSk7XG4gIH07XG4gIHJldHVybiB7IGluaXRpYWxpemUgfTtcbn0pKCk7XG5leHBvcnQgeyBzZWxlY3Rpb25WaWV3IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBzZWxlY3Rpb25WaWV3IH0gZnJvbSAnLi9tb2R1bGVzL3ZpZXdzL3NlbGVjdGlvblZpZXcnO1xuXG5zZWxlY3Rpb25WaWV3LmluaXRpYWxpemUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==