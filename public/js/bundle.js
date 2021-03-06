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
/******/ 	return __webpack_require__(__webpack_require__.s = "./sources/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./sources/scss/app.scss":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/postcss-loader/dist/cjs.js??ref--5-3!./node_modules/sass-loader/dist/cjs.js??ref--5-4!./sources/scss/app.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./sources/scss/app.scss?./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/postcss-loader/dist/cjs.js??ref--5-3!./node_modules/sass-loader/dist/cjs.js??ref--5-4");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./public/projects.json":
/*!******************************!*\
  !*** ./public/projects.json ***!
  \******************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"id\\\":0,\\\"title\\\":\\\"Creative Logo\\\",\\\"category\\\":\\\"branding\\\",\\\"imgUrl\\\":\\\"img/branding/br1.jpg\\\"},{\\\"id\\\":1,\\\"title\\\":\\\"Creative Logo 2\\\",\\\"category\\\":\\\"branding\\\",\\\"imgUrl\\\":\\\"img/branding/br2.jpg\\\"},{\\\"id\\\":3,\\\"title\\\":\\\"Creative Logo 3\\\",\\\"category\\\":\\\"branding\\\",\\\"imgUrl\\\":\\\"img/branding/br3.jpg\\\"},{\\\"id\\\":4,\\\"title\\\":\\\"Creative Logo 4\\\",\\\"category\\\":\\\"branding\\\",\\\"imgUrl\\\":\\\"img/branding/br4.jpg\\\"},{\\\"id\\\":5,\\\"title\\\":\\\"Creative Logo 5\\\",\\\"category\\\":\\\"branding\\\",\\\"imgUrl\\\":\\\"img/branding/br5.jpg\\\"},{\\\"id\\\":6,\\\"title\\\":\\\"Creative Logo 6\\\",\\\"category\\\":\\\"branding\\\",\\\"imgUrl\\\":\\\"img/branding/br6.jpg\\\"},{\\\"id\\\":7,\\\"title\\\":\\\"Creative Logo 7\\\",\\\"category\\\":\\\"branding\\\",\\\"imgUrl\\\":\\\"img/branding/br7.jpg\\\"},{\\\"id\\\":8,\\\"title\\\":\\\"Creative Logo 8\\\",\\\"category\\\":\\\"branding\\\",\\\"imgUrl\\\":\\\"img/branding/br8.jpg\\\"},{\\\"id\\\":9,\\\"title\\\":\\\"Creative Logo 9\\\",\\\"category\\\":\\\"web\\\",\\\"imgUrl\\\":\\\"img/web/web1.jpg\\\"},{\\\"id\\\":10,\\\"title\\\":\\\"Creative Logo 10\\\",\\\"category\\\":\\\"web\\\",\\\"imgUrl\\\":\\\"img/web/web2.jpg\\\"},{\\\"id\\\":11,\\\"title\\\":\\\"Creative Logo\\\",\\\"category\\\":\\\"web\\\",\\\"imgUrl\\\":\\\"img/web/web3.jpg\\\"},{\\\"id\\\":12,\\\"title\\\":\\\"Creative Logo\\\",\\\"category\\\":\\\"web\\\",\\\"imgUrl\\\":\\\"img/web/web4.jpg\\\"},{\\\"id\\\":13,\\\"title\\\":\\\"Creative Logo\\\",\\\"category\\\":\\\"web\\\",\\\"imgUrl\\\":\\\"img/web/web5.jpg\\\"},{\\\"id\\\":14,\\\"title\\\":\\\"Creative Logo\\\",\\\"category\\\":\\\"web\\\",\\\"imgUrl\\\":\\\"img/web/web6.jpg\\\"},{\\\"id\\\":15,\\\"title\\\":\\\"Creative Logo\\\",\\\"category\\\":\\\"web\\\",\\\"imgUrl\\\":\\\"img/web/web7.jpg\\\"},{\\\"id\\\":16,\\\"title\\\":\\\"Creative Logo\\\",\\\"category\\\":\\\"web\\\",\\\"imgUrl\\\":\\\"img/web/web8.jpg\\\"},{\\\"id\\\":17,\\\"title\\\":\\\"Creative Logo\\\",\\\"category\\\":\\\"web\\\",\\\"imgUrl\\\":\\\"img/web/web9.jpg\\\"},{\\\"id\\\":18,\\\"title\\\":\\\"Creative Logo\\\",\\\"category\\\":\\\"photography\\\",\\\"imgUrl\\\":\\\"img/photography/ph1.jpg\\\"},{\\\"id\\\":19,\\\"title\\\":\\\"Creative Logo\\\",\\\"category\\\":\\\"photography\\\",\\\"imgUrl\\\":\\\"img/photography/ph2.jpg\\\"},{\\\"id\\\":20,\\\"title\\\":\\\"Creative Logo\\\",\\\"category\\\":\\\"photography\\\",\\\"imgUrl\\\":\\\"img/photography/ph3.jpg\\\"},{\\\"id\\\":21,\\\"title\\\":\\\"Creative Logo\\\",\\\"category\\\":\\\"photography\\\",\\\"imgUrl\\\":\\\"img/photography/ph4.jpg\\\"},{\\\"id\\\":22,\\\"title\\\":\\\"Creative Logo\\\",\\\"category\\\":\\\"photography\\\",\\\"imgUrl\\\":\\\"img/photography/ph5.jpg\\\"},{\\\"id\\\":23,\\\"title\\\":\\\"Creative Logo\\\",\\\"category\\\":\\\"photography\\\",\\\"imgUrl\\\":\\\"img/photography/ph6.jpg\\\"},{\\\"id\\\":24,\\\"title\\\":\\\"Creative Logo\\\",\\\"category\\\":\\\"photography\\\",\\\"imgUrl\\\":\\\"img/photography/ph7.jpg\\\"},{\\\"id\\\":25,\\\"title\\\":\\\"Creative Logo\\\",\\\"category\\\":\\\"photography\\\",\\\"imgUrl\\\":\\\"img/photography/ph8.jpg\\\"},{\\\"id\\\":27,\\\"title\\\":\\\"Creative Logo\\\",\\\"category\\\":\\\"app\\\",\\\"imgUrl\\\":\\\"img/app/app1.jpg\\\"},{\\\"id\\\":28,\\\"title\\\":\\\"Creative Logo\\\",\\\"category\\\":\\\"app\\\",\\\"imgUrl\\\":\\\"img/app/app1.jpg\\\"},{\\\"id\\\":29,\\\"title\\\":\\\"Creative Logo\\\",\\\"category\\\":\\\"app\\\",\\\"imgUrl\\\":\\\"img/app/app2.jpg\\\"},{\\\"id\\\":30,\\\"title\\\":\\\"Creative Logo\\\",\\\"category\\\":\\\"app\\\",\\\"imgUrl\\\":\\\"img/app/app3.jpg\\\"},{\\\"id\\\":31,\\\"title\\\":\\\"Creative Logo\\\",\\\"category\\\":\\\"app\\\",\\\"imgUrl\\\":\\\"img/app/app5.jpg\\\"},{\\\"id\\\":32,\\\"title\\\":\\\"Creative Logo\\\",\\\"category\\\":\\\"app\\\",\\\"imgUrl\\\":\\\"img/app/app6.jpg\\\"},{\\\"id\\\":33,\\\"title\\\":\\\"Creative Logo\\\",\\\"category\\\":\\\"app\\\",\\\"imgUrl\\\":\\\"img/app/app7.jpg\\\"},{\\\"id\\\":34,\\\"title\\\":\\\"Creative Logo\\\",\\\"category\\\":\\\"app\\\",\\\"imgUrl\\\":\\\"img/app/app8.jpg\\\"},{\\\"id\\\":35,\\\"title\\\":\\\"Creative Logo\\\",\\\"category\\\":\\\"app\\\",\\\"imgUrl\\\":\\\"img/app/app9.jpg\\\"}]\");\n\n//# sourceURL=webpack:///./public/projects.json?");

/***/ }),

/***/ "./sources/js/app.js":
/*!***************************!*\
  !*** ./sources/js/app.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/main.js */ \"./sources/js/main.js\");\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/app.scss */ \"./sources/scss/app.scss\");\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_app_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n//# sourceURL=webpack:///./sources/js/app.js?");

/***/ }),

/***/ "./sources/js/main.js":
/*!****************************!*\
  !*** ./sources/js/main.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _public_projects_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/projects.json */ \"./public/projects.json\");\nvar _public_projects_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/projects.json */ \"./public/projects.json\", 1);\n\nwindow.addEventListener('load', () => {\n  let proyects = _public_projects_json__WEBPACK_IMPORTED_MODULE_0__;\n  let container = document.querySelector('.tabs__panel');\n\n  if (container) {\n    proyects.forEach(proy => {\n      let data = printCards(proy);\n      container.appendChild(data);\n    });\n    loadMore();\n  }\n\n  filters();\n  menuMobile();\n  changeStructure();\n});\n\nconst filters = () => {\n  let filters = Array.from(document.querySelectorAll('.tabs__filters__item'));\n  let proyectsFilter;\n  let proyects = _public_projects_json__WEBPACK_IMPORTED_MODULE_0__;\n  let container = document.querySelector('.tabs__panel');\n\n  if (filters) {\n    filters.forEach(filter => {\n      filter.addEventListener('click', () => {\n        let categorySelected = filter.dataset.category;\n        document.querySelector('.tabs__filters__item.tabs__filters__item--active').classList.remove('tabs__filters__item--active');\n        filter.classList.add('tabs__filters__item--active');\n\n        if (categorySelected === 'all') {\n          proyectsFilter = _public_projects_json__WEBPACK_IMPORTED_MODULE_0__;\n          container.innerHTML = '';\n          proyectsFilter.forEach(proy => {\n            let data = printCards(proy);\n            container.appendChild(data);\n            /* loadMore() */\n          });\n          loadMore();\n        } else {\n          container.innerHTML = '';\n          proyectsFilter = proyects.filter(category => {\n            console.log(\"asdasd\", category.category, categorySelected);\n\n            if (category.category === categorySelected) {\n              let data = printCards(category);\n              container.appendChild(data);\n              /* loadMore() */\n\n              loadMore();\n            }\n          });\n        }\n      });\n    });\n  }\n};\n\nconst template = document.querySelector(\"template\");\n\nconst printCards = data => {\n  console.log(data);\n  const resourceTemplate = document.importNode(template.content, true);\n  const card = resourceTemplate.querySelector(\"#resource\");\n  const title = card.querySelector('.cards__information h3');\n  const category = card.querySelector('.cards__information p');\n  const img = card.querySelector('.cards__thumbnail img');\n  img.src = data.imgUrl;\n  title.innerText = data.title;\n  category.innerText = data.category;\n  return card;\n};\n\nconst loadMore = () => {\n  let container = document.querySelector('.tabs__panel');\n  let items = Array.from(container.querySelectorAll('.cards'));\n  let loadMore = document.querySelector('#loadMore');\n  let maxItems = 5;\n  let loadItems = 4;\n  let hiddenClass = \"cards__hidden\";\n  items.forEach(function (item, index) {\n    if (index > maxItems - 1) {\n      item.classList.add(hiddenClass);\n    }\n  });\n  loadMore.addEventListener(\"click\", function (e) {\n    e.preventDefault();\n    [].forEach.call(document.querySelectorAll(`.${hiddenClass}`), (item, index) => {\n      if (index < loadItems) {\n        item.classList.remove(hiddenClass);\n      }\n\n      if (document.querySelectorAll(`.${hiddenClass}`).length === 0) {\n        loadMore.style.display = \"none\";\n      }\n    });\n\n    if (document.querySelectorAll(`.${hiddenClass}`).length === 0) {\n      loadMore.style.display = \"none\";\n    } else {\n      loadMore.style.display = \"inline-block\";\n    }\n  });\n};\n\nconst menuMobile = () => {\n  let open = document.querySelector('.header__hamburguer__open');\n  let close = document.querySelector('.header__hamburguer__close');\n  let menu = document.querySelector('.header__menu');\n  let hamburguer = document.querySelector('.header__hamburguer');\n  open.addEventListener('click', () => {\n    hamburguer.classList.add('header__hamburguer--active');\n    menu.classList.add('header__menu--active');\n  });\n  close.addEventListener('click', () => {\n    hamburguer.classList.remove('header__hamburguer--active');\n    menu.classList.remove('header__menu--active');\n  });\n};\n\nconst changeStructure = () => {\n  let column = document.querySelector('.tabs__estructure--column');\n  let block = document.querySelector('.tabs__estructure--block');\n  let panel = document.querySelector('.tabs__panel');\n  column.addEventListener('click', e => {\n    document.querySelector('.tabs__panel.tabs__panel--columns').classList.remove('tabs__panel--columns');\n    panel.classList.add('tabs__panel--block');\n  });\n  block.addEventListener('click', e => {\n    document.querySelector('.tabs__panel.tabs__panel--block').classList.remove('tabs__panel--block');\n    panel.classList.add('tabs__panel--columns');\n  });\n};\n\n//# sourceURL=webpack:///./sources/js/main.js?");

/***/ }),

/***/ "./sources/scss/app.scss":
/*!*******************************!*\
  !*** ./sources/scss/app.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!../../node_modules/css-loader/dist/cjs.js??ref--5-2!../../node_modules/postcss-loader/dist/cjs.js??ref--5-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-4!./app.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./sources/scss/app.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./sources/scss/app.scss?");

/***/ })

/******/ });