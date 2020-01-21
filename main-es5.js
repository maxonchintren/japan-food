function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav [style.transform] = 'menuPosition'>\n  <ul>\n    <li><a href='#top'>welcome</a></li>\n    <li><a href='#menu'>menu</a></li>\n    <li><a href='#order'>order</a></li>\n    <li>contact</li>\n    <li (click) = 'toggleMenu()'>&#9776;</li>\n  </ul>\n</nav>\n<header id='top'>\n  <div>\n    <img src=\"./../assets/images/logo.png\">\n    <p>New opening</p>\n    <span>23rd sept</span>\n    <br>\n    <a>learn more</a>\n  </div>\n</header>\n<main>\n  <section class='cook__section'>\n    <div class='main__cont'>\n      <div class='text__cont'>\n        <span>What do we actually cook?</span>\n        <p>Lorem ipsum dolor sit amet, consectetur \n          adipisicing elit sed do eiusmod tempor \n          incididunt ut labore et dolorem magna aliqua. \n          Ut enim ad minim veniam, quis nostrud</p>\n      </div>\n      <div class='arrow__cont'>\n        <img src=\"./../assets/images/section2-arrow.png\">\n      </div>\n    </div>\n    <div class='facts__cont'>\n      <div>\n        <span>\n          New tastes\n        </span>\n        <p>\n          Lorem ipsum dolor sit amet, consectetur \n          adipisicing elit sed do eiusmod tempor \n          incididunt ut labore et dolorem magna aliqua.\n        </p>\n      </div>\n      <div>\n        <span>\n          New dishes cooking\n        </span>\n        <p>\n          Lorem ipsum dolor sit amet, consectetur \n          adipisicing elit sed do eiusmod tempor \n          incididunt ut labore et dolorem magna aliqua.\n        </p>\n      </div>\n      <div>\n        <span>\n          New restaraunt\n        </span>\n        <p>\n          Lorem ipsum dolor sit amet, consectetur \n          adipisicing elit sed do eiusmod tempor \n          incididunt ut labore et dolorem magna aliqua.\n        </p>\n      </div>\n    </div>\n  </section>\n  <section class='order__section' id='menu'>\n    <div class='outer__cont'>\n      <div class='heading'>\n        <span>We bring tradition</span>\n        <p>to your plate</p>\n      </div>\n      <div class='dishes__cont'>\n        <div class='single-dish__cont' *ngFor='let dish of dishes'>\n          <img [src]= 'dish.photo_url'>\n          <div class='dish__desc'>\n            <span class='dish__name'>{{dish.name}}</span>\n            <p>{{dish.description}}</p>\n            <div>\n              <select (change) = 'showPrice()'>\n                <option *ngFor = 'let num of [1,2,3,4,5,6]'>{{num}}</option>\n              </select>\n              <button type='button' (click)='addDishToOrder(dish.name)'>Add to your order!</button>\n            </div>\n            <span class='pricing'>{{dish.price | currency}}</span>\n            <span class='order__total'>Total for this dish: {{dish.price * dish.amount | currency}}, Amount: {{dish.amount}} (max: 6)</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class='order-confirm__section'>\n    <form id='order'>\n      <div class='order-confirm__heading'>\n        <p>Confirm your order!</p>\n      </div>\n      <div class='order-confirm-inner__container'>\n        <div class='input__container'>\n          <label for='full-name'>Full Name</label>\n          <input type ='text' id='full-name' maxlength=\"35\" placeholder=\"John Smith\" minlength=\"5\">\n        </div>\n        <div class='input__container'>\n          <label for='phone-number'>Phone Number</label>\n          <input type ='text' id='phone-number' placeholder=\"+7999111222\" maxlength=\"11\" minlength=\"11\">\n        </div>\n        <div class='input__container'>\n          <label for='number-of-people'>How many people?</label>\n          <input type ='number' id='number-of-people' min='1' max='10' (keydown) = 'false' value='1'>\n        </div>\n      </div>\n      <div class='order__details'>\n        <div class='order-details__detail' *ngFor = 'let dish of dishes'>\n          <span  *ngIf = 'dish.amount > 0'>{{dish.name}}</span>\n          <input *ngIf = 'dish.amount > 0' \n          type ='number' min='0' max='6' \n          (keydown) = 'false' [value] = 'dish.amount'\n          (change) = 'changeAmount(dish)'>\n          <span  *ngIf = 'dish.amount > 0'>{{(dish.amount * dish.price).toFixed(2) | currency}}</span>\n        </div>\n        <p class='total-cost'>{{totalCost()}}</p>\n        <button type=\"button\">Confirm order</button>\n      </div>\n    </form>\n  </section>\n  <section class='new__menu'>\n    <div class='new-menu-heading__container'>\n      <span>Discover</span>\n      <p>our new menu</p>\n    </div>\n    <div class='new-menu-dishes__container'>\n      <div class='new-menu-dish'>\n        <img src=\"./../assets/images/new-menu-1.png\">\n        <span class='new-dish-name'>Food / 16th March, 2020</span>\n        <p>Lorem ipsum dolor sit amet, consectetur \n          adipisicing elit sed do eiusmod tempor \n          incididunt ut labore et dolorem magna aliqua.</p>\n        <span>Read more</span>\n      </div>\n      <div class='new-menu-dish'>\n        <img src=\"./../assets/images/new-menu-2.png\">\n        <span class='new-dish-name'>Spices / 16th March, 2020</span>\n        <p>Lorem ipsum dolor sit amet, consectetur \n          adipisicing elit sed do eiusmod tempor \n          incididunt ut labore et dolorem magna aliqua.</p>\n        <span>Read more</span>\n      </div>\n      <div class='new-menu-dish'>\n        <img src=\"./../assets/images/new-menu-3.png\">\n        <span class='new-dish-name'>Chicken Curry / 05th April, 2020</span>\n        <p>Lorem ipsum dolor sit amet, consectetur \n          adipisicing elit sed do eiusmod tempor \n          incididunt ut labore et dolorem magna aliqua.</p>\n        <span>Read more</span>\n      </div>\n    </div>\n  </section>\n  <footer>\n    <div class='socials__cont'>\n      <img src='./../assets/images/social-1.png'>\n      <img src='./../assets/images/social-2.png'>\n      <img src='./../assets/images/social-3.png'>\n      <img src='./../assets/images/social-4.png'>\n      <img src='./../assets/images/social-5.png'>\n    </div>\n    <div class='info__cont'>\n      <div class='about__cont'>\n        <span>about</span>\n        <p>Lorem ipsum dolor sit amet, consectetur \n          adipisicing elit sed do eiusmod tempor \n          incididunt ut labore et dolorem magna aliqua.</p>\n      </div>\n      <div class='links__cont'>\n        <span>links</span>\n        <ul>\n          <li><a>Link</a></li>\n          <li><a>Link</a></li>\n          <li><a>Link</a></li>\n          <li><a>Link</a></li>\n        </ul>\n      </div>\n    </div>\n  </footer>\n</main>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css?family=Gochi+Hand|Montserrat:400,700&display=swap\");\nbutton, select {\n  padding: 5px 10px;\n  font-size: 15px;\n  margin: 10px 5px;\n  font-family: \"Montserrat\", sans-serif;\n  background-color: rgba(33, 33, 33, 0.6);\n  color: #fff;\n  border: 1px solid rgba(155, 175, 109, 0.6);\n  -webkit-transition: 0.1s;\n  transition: 0.1s;\n  height: 36px;\n  border-radius: 6px;\n}\nbutton:hover, select:hover {\n  background-color: #9baf6d;\n  border-color: rgba(255, 255, 255, 0.6);\n}\nbutton:focus, select:focus {\n  outline: 0;\n}\nbutton:active {\n  -webkit-transform: scale(1.1, 1.1);\n          transform: scale(1.1, 1.1);\n}\nnav {\n  position: fixed;\n  background-color: rgba(69, 73, 59, 0.8);\n}\nnav ul {\n  list-style: none;\n  width: 910px;\n  height: 57px;\n  margin: 0;\n  padding: 0;\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n}\nnav ul li {\n  display: inline-block;\n  width: 25%;\n  height: 40px;\n  text-transform: uppercase;\n  font-family: \"Montserrat\", sans-serif;\n  color: #9baf6d;\n  font-size: 30px;\n  padding: 8px 0;\n  text-align: center;\n}\nnav ul li:hover {\n  background-color: #9baf6d;\n  cursor: pointer;\n  color: #fff;\n}\nnav ul li:last-child {\n  margin-left: 15px;\n  margin-bottom: 20px;\n  padding: 0;\n  width: 10%;\n  font-size: 40px;\n}\nnav ul li:last-child:hover {\n  color: #fff;\n  background-color: transparent;\n}\nnav ul li a {\n  color: inherit;\n  text-decoration: none;\n}\nheader {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n          align-items: center;\n  background-image: url('header-bg.png');\n  background-size: cover;\n  height: 100vh;\n}\nheader div {\n  margin-right: 15%;\n}\nheader div img {\n  width: 160px;\n  height: 130px;\n}\nheader div p {\n  font-size: 50px;\n  text-transform: uppercase;\n  color: #fff;\n  font-family: \"Montserrat\", sans-serif;\n  margin-bottom: 0;\n}\nheader div span {\n  font-size: 60px;\n  text-transform: uppercase;\n  color: #9baf6d;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: bold;\n}\nheader div a {\n  padding: 10px 15px;\n  text-align: center;\n  display: block;\n  font-size: 50px;\n  text-transform: uppercase;\n  color: #9baf6d;\n  font-family: \"Montserrat\", sans-serif;\n  margin-top: 80px;\n  background-color: rgba(69, 73, 59, 0.6);\n}\nheader div a:hover {\n  background-color: #45493b;\n  cursor: pointer;\n}\n.cook__section {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  background-color: #212121;\n}\n.cook__section .main__cont {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.cook__section .main__cont div {\n  width: 50%;\n}\n.cook__section .main__cont .arrow__cont {\n  text-align: end;\n}\n.cook__section .main__cont .text__cont {\n  font-size: 25px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.cook__section .main__cont .text__cont span {\n  font-family: \"Gochi Hand\", cursive;\n  color: #9baf6d;\n  margin-left: 70px;\n}\n.cook__section .main__cont .text__cont p {\n  color: #fff;\n  margin-left: 70px;\n  font-family: \"Montserrat\", sans-serif;\n}\n.cook__section .facts__cont {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background-color: #45493b;\n}\n.cook__section .facts__cont div {\n  width: 33%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 50px 0;\n}\n.cook__section .facts__cont div span {\n  font-family: \"Gochi Hand\", cursive;\n  font-size: 25px;\n  color: #9baf6d;\n}\n.cook__section .facts__cont div p {\n  width: 65%;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 25px;\n  color: #fff;\n}\n.order__section {\n  background-color: #212121;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  vertical-align: middle;\n}\n.order__section .outer__cont {\n  width: 70%;\n  background-color: #45493b;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  border: 90px solid #212121;\n}\n.order__section .outer__cont .heading {\n  text-align: center;\n  margin-top: 35px;\n}\n.order__section .outer__cont .heading span {\n  font-family: \"Gochi Hand\", cursive;\n  color: #9baf6d;\n  font-size: 35px;\n}\n.order__section .outer__cont .heading p {\n  font-family: \"Montserrat\", sans-serif;\n  color: #fff;\n  text-transform: uppercase;\n  font-size: 50px;\n  font-weight: lighter;\n  margin-top: 0;\n}\n.order__section .outer__cont .dishes__cont {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 100%;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  flex-wrap: wrap;\n}\n.order__section .outer__cont .dishes__cont .single-dish__cont {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 50%;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  flex-wrap: wrap;\n}\n.order__section .outer__cont .dishes__cont .single-dish__cont img {\n  width: 50%;\n}\n.order__section .outer__cont .dishes__cont .single-dish__cont .dish__desc {\n  width: 50%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n  text-align: center;\n  border-top: 2px solid rgba(155, 175, 109, 0.6);\n}\n.order__section .outer__cont .dishes__cont .single-dish__cont .dish__desc span {\n  font-size: 25px;\n  color: #9baf6d;\n  text-transform: capitalize;\n  font-family: \"Gochi Hand\", cursive;\n}\n.order__section .outer__cont .dishes__cont .single-dish__cont .dish__desc .pricing {\n  color: #fff;\n}\n.order__section .outer__cont .dishes__cont .single-dish__cont .dish__desc .order__total {\n  font-size: 16px;\n  font-family: \"Montserrat\", sans-serif;\n  color: #fff;\n}\n.order__section .outer__cont .dishes__cont .single-dish__cont .dish__desc p {\n  color: #fff;\n  font-size: 1em;\n  margin: 20px 0;\n  width: 85%;\n  font-family: \"Montserrat\", sans-serif;\n}\n.order__section .outer__cont .dishes__cont .single-dish__cont .dish__desc div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.order-confirm__section {\n  height: 1730px;\n  background-image: url('bg-order-confirm.png');\n  background-size: cover;\n  border-top: 1px solid transparent;\n}\n.order-confirm__section form {\n  background-color: rgba(33, 33, 33, 0.9);\n  margin: 500px auto;\n}\n.order-confirm__section form .order-confirm__heading {\n  border-top: 1px solid transparent;\n  text-align: center;\n}\n.order-confirm__section form .order-confirm__heading p {\n  color: #9baf6d;\n  font-family: \"Gochi Hand\", cursive;\n  font-size: 35px;\n}\n.order-confirm__section form .order-confirm-inner__container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.order-confirm__section form .order-confirm-inner__container .input__container {\n  margin: 15px 70px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.order-confirm__section form .order-confirm-inner__container .input__container:last-child {\n  margin-right: 200px;\n}\n.order-confirm__section form .order-confirm-inner__container .input__container label {\n  margin-bottom: 10px;\n  color: #fff;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 20px;\n}\n.order-confirm__section form .order-confirm-inner__container .input__container input {\n  width: 300px;\n  background-color: rgba(69, 73, 59, 0.6);\n  color: #fff;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 18px;\n  border: none;\n}\n.order-confirm__section form .order-confirm-inner__container .input__container #number-of-people {\n  width: 80px;\n  text-align: center;\n}\n.order-confirm__section form .order__details {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.order-confirm__section form .order__details .order-details__detail {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-top: 20px;\n  width: 80%;\n}\n.order-confirm__section form .order__details .order-details__detail span {\n  color: #9baf6d;\n  font-family: \"Gochi Hand\", cursive;\n  font-size: 30px;\n  margin: 20px auto;\n  text-transform: capitalize;\n  width: 200px;\n}\n.order-confirm__section form .order__details .order-details__detail input {\n  width: 80px;\n  height: 25px;\n  background-color: rgba(69, 73, 59, 0.6);\n  color: #fff;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 16px;\n  border: none;\n  text-align: center;\n}\n.order-confirm__section form .order__details .total-cost {\n  font-size: 35px;\n  font-family: \"Gochi Hand\", cursive;\n  color: #fff;\n}\n.new__menu {\n  background-color: #45493b;\n  border: 1px solid transparent;\n}\n.new__menu .new-menu-heading__container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin-top: 30px;\n}\n.new__menu .new-menu-heading__container span {\n  color: #9baf6d;\n  font-family: \"Gochi Hand\", cursive;\n  font-size: 45px;\n}\n.new__menu .new-menu-heading__container p {\n  text-transform: uppercase;\n  color: #fff;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 35px;\n  margin-top: 0;\n}\n.new__menu .new-menu-dishes__container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin: 40px auto;\n}\n.new__menu .new-menu-dishes__container .new-menu-dish {\n  background-color: #fff;\n  font-family: \"Montserrat\", sans-serif;\n  width: 17%;\n  margin: 0 40px;\n}\n.new__menu .new-menu-dishes__container .new-menu-dish img {\n  width: 100%;\n}\n.new__menu .new-menu-dishes__container .new-menu-dish span {\n  display: block;\n  font-size: 16px;\n  margin: 15px 10px;\n  font-weight: bolder;\n}\n.new__menu .new-menu-dishes__container .new-menu-dish span:hover {\n  color: #9baf6d;\n  cursor: pointer;\n}\n.new__menu .new-menu-dishes__container .new-menu-dish p {\n  font-size: 15px;\n  margin: 5px 10px;\n}\nfooter {\n  background-color: #45493b;\n}\nfooter .socials__cont {\n  background-color: #212121;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\nfooter .socials__cont img {\n  margin: 25px 35px;\n}\nfooter .socials__cont img:hover {\n  cursor: pointer;\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n}\nfooter .info__cont {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\nfooter .info__cont div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin: 30px 80px;\n  width: 40%;\n}\nfooter .info__cont div span {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 25px;\n  color: #fff;\n  margin-bottom: 15px;\n  text-transform: uppercase;\n}\nfooter .info__cont div p {\n  color: #fff;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 18px;\n  margin: 0;\n}\nfooter .info__cont div ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\nfooter .info__cont div ul li {\n  margin: 10px 0;\n}\nfooter .info__cont div ul li a {\n  text-decoration: none;\n  color: #fff;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 18px;\n}\nfooter .info__cont div ul li a:hover {\n  border-bottom: 1px solid #fff;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Db2RpbmcvcHJvamVjdHMgVlMvamFwYW4tZm9vZC9zcmMvYXNzZXRzL2luc3RydW1lbnRzL3ZhcmlhYmxlcy5zY3NzIiwiL21udC9kL0NvZGluZy9wcm9qZWN0cyBWUy9qYXBhbi1mb29kL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsaUdBQUE7QUNFUjtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUNERFE7RUNFUix1Q0FBQTtFQUNBLFdETlE7RUNPUiwwQ0FBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREVJO0VBQ0kseUJEZEs7RUNlTCxzQ0FBQTtBQ0FSO0FER0k7RUFDSSxVQUFBO0FDRFI7QURLQTtFQUNJLGtDQUFBO1VBQUEsMEJBQUE7QUNGSjtBREtBO0VBQ0ksZUFBQTtFQUVBLHVDQUFBO0FDSEo7QURLSTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7QUNIUjtBREtRO0VBQ0kscUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EscUNEMUNBO0VDMkNBLGNEL0NDO0VDZ0RELGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNIWjtBREtZO0VBQ0kseUJEckRIO0VDc0RHLGVBQUE7RUFDQSxXRHRESjtBRW1EWjtBRE1ZO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ0poQjtBRE1nQjtFQUNJLFdEakVSO0VDa0VRLDZCQUFBO0FDSnBCO0FEU1k7RUFDSSxjQUFBO0VBQ0EscUJBQUE7QUNQaEI7QURjQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHFCQUFBO1VB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QTtBQ25FUjtBRHFFUTtFQUNJLGlCQUFBO0FDbkVaO0FEcUVZO0VBQ0ksZUFBQTtFQUNBLDZCQUFBO1VBQUEscUJBQUE7QUNuRWhCO0FEd0VJO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ3RFUjtBRHdFUTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQ3RFWjtBRHdFWTtFQUNJLHFDRGxlSjtFQ21lSSxlQUFBO0VBQ0EsV0R2ZUo7RUN3ZUksbUJBQUE7RUFDQSx5QkFBQTtBQ3RFaEI7QUR5RVk7RUFDSSxXRDdlSjtFQzhlSSxxQ0QzZUo7RUM0ZUksZUFBQTtFQUNBLFNBQUE7QUN2RWhCO0FEMEVZO0VBQ0ksZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ3hFaEI7QUQwRWdCO0VBQ0ksY0FBQTtBQ3hFcEI7QUQwRW9CO0VBQ0kscUJBQUE7RUFDQSxXRDdmWjtFQzhmWSxxQ0QzZlo7RUM0ZlksZUFBQTtBQ3hFeEI7QUQwRXdCO0VBQ0ksNkJBQUE7RUFDQSxlQUFBO0FDeEU1QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9R29jaGkrSGFuZHxNb250c2VycmF0OjQwMCw3MDAmZGlzcGxheT1zd2FwJyk7XHJcbiRjb2xvci1tYWluOiAjOWJhZjZkO1xyXG4kY29sb3Itc3ViOiAjZmZmO1xyXG4kYmctY29sb3Itc2Vjb25kYXJ5OiAjNDU0OTNiO1xyXG4kYmctY29sb3ItbWFpbjojMjEyMTIxO1xyXG4kZm9udC1tYWluOiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiRmb250LWdvY2hpOiAnR29jaGkgSGFuZCcsIGN1cnNpdmU7XHJcblxyXG4iLCJAaW1wb3J0ICcuLy4uL2Fzc2V0cy9pbnN0cnVtZW50cy92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG5idXR0b24sIHNlbGVjdCB7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbjogMTBweCA1cHg7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtbWFpbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50aXplKCRjb2xvcjogJGJnLWNvbG9yLW1haW4sICRhbW91bnQ6IDAuNCk7XHJcbiAgICBjb2xvcjogJGNvbG9yLXN1YjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50aXplKCRjb2xvcjogJGNvbG9yLW1haW4sICRhbW91bnQ6IDAuNCk7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjFzO1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1tYWluO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnRpemUoJGNvbG9yOiAjZmZmLCAkYW1vdW50OiAwLjQpO1xyXG4gICAgfVxyXG5cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmJ1dHRvbjphY3RpdmUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEsIDEuMSk7XHJcbn1cclxuXHJcbm5hdiB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTkwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudGl6ZSgkY29sb3I6ICRiZy1jb2xvci1zZWNvbmRhcnksICRhbW91bnQ6IDAuMik7XHJcblxyXG4gICAgdWwge1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgd2lkdGg6IDkxMHB4O1xyXG4gICAgICAgIGhlaWdodDogNTdweDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LW1haW47XHJcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItbWFpbjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbWFpbjtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3Itc3ViO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMCU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci1zdWI7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLy4uL2Fzc2V0cy9pbWFnZXMvaGVhZGVyLWJnLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuXHJcbiAgICBkaXYge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTUlO1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTYwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLXN1YjtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LW1haW47XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLW1haW47XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1tYWluO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGEgeyBcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItbWFpbjtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LW1haW47XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50aXplKCRjb2xvcjogJGJnLWNvbG9yLXNlY29uZGFyeSwgJGFtb3VudDogMC40KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yLXNlY29uZGFyeTtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmNvb2tfX3NlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3ItbWFpbjtcclxuXHJcbiAgICAubWFpbl9fY29udCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hcnJvd19fY29udCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50ZXh0X19jb250IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWdvY2hpO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci1tYWluO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDcwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci1zdWI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNzBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1tYWluO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mYWN0c19fY29udCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3Itc2Vjb25kYXJ5O1xyXG5cclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICB3aWR0aDogMzMlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW46IDUwcHggMDtcclxuXHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWdvY2hpO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci1tYWluO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2NSU7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJGZvbnQtbWFpbjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3Itc3ViO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ub3JkZXJfX3NlY3Rpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yLW1haW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHJcbiAgICAub3V0ZXJfX2NvbnQge1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yLXNlY29uZGFyeTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYm9yZGVyOiA5MHB4IHNvbGlkICRiZy1jb2xvci1tYWluO1xyXG5cclxuICAgICAgICAuaGVhZGluZyB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzVweDtcclxuXHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWdvY2hpO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci1tYWluO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1tYWluO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci1zdWI7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZGlzaGVzX19jb250IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgICAgICAgICAuc2luZ2xlLWRpc2hfX2NvbnQge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAuZGlzaF9fZGVzYyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHRyYW5zcGFyZW50aXplKCRjb2xvcjogJGNvbG9yLW1haW4sICRhbW91bnQ6IDAuNCk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLW1haW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJGZvbnQtZ29jaGk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLnByaWNpbmcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLXN1YjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5vcmRlcl9fdG90YWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1tYWluO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLXN1YjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci1zdWI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LW1haW47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5vcmRlci1jb25maXJtX19zZWN0aW9uIHtcclxuICAgIGhlaWdodDogMTczMHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLy4uL2Fzc2V0cy9pbWFnZXMvYmctb3JkZXItY29uZmlybS5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBcclxuICAgIGZvcm0ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50aXplKCRjb2xvcjogJGJnLWNvbG9yLW1haW4sICRhbW91bnQ6IDAuMSk7XHJcbiAgICAgICAgbWFyZ2luOiA1MDBweCBhdXRvO1xyXG5cclxuICAgICAgICAub3JkZXItY29uZmlybV9faGVhZGluZyB7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjokY29sb3ItbWFpbjtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1nb2NoaTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm9yZGVyLWNvbmZpcm0taW5uZXJfX2NvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgLmlucHV0X19jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDcwcHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3Itc3ViO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1tYWluO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50aXplKCRjb2xvcjogJGJnLWNvbG9yLXNlY29uZGFyeSwgJGFtb3VudDogMC40KTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLXN1YjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJGZvbnQtbWFpbjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAjbnVtYmVyLW9mLXBlb3BsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAub3JkZXJfX2RldGFpbHMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgLm9yZGVyLWRldGFpbHNfX2RldGFpbCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcblxyXG4gICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci1tYWluO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1nb2NoaTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnRpemUoJGNvbG9yOiAkYmctY29sb3Itc2Vjb25kYXJ5LCAkYW1vdW50OiAwLjQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3Itc3ViO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1tYWluO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50b3RhbC1jb3N0IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1nb2NoaTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3Itc3ViO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgfSAgXHJcbiAgICB9XHJcbn1cclxuXHJcbi5uZXdfX21lbnUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yLXNlY29uZGFyeTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG5cclxuICAgIC5uZXctbWVudS1oZWFkaW5nX19jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLW1haW47XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1nb2NoaTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0NXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3Itc3ViO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJGZvbnQtbWFpbjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubmV3LW1lbnUtZGlzaGVzX19jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiA0MHB4IGF1dG87XHJcblxyXG4gICAgICAgIC5uZXctbWVudS1kaXNoIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXN1YjtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LW1haW47XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNyU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCA0MHB4O1xyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMTVweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLW1haW47XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3Itc2Vjb25kYXJ5O1xyXG5cclxuICAgIC5zb2NpYWxzX19jb250IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3ItbWFpbjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBtYXJnaW46IDI1cHggMzVweDtcclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5pbmZvX19jb250IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgbWFyZ2luOiAzMHB4IDgwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MCU7XHJcblxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1tYWluO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci1zdWI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLXN1YjtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1tYWluO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAgICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3Itc3ViO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJGZvbnQtbWFpbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGNvbG9yLXN1YjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Hb2NoaStIYW5kfE1vbnRzZXJyYXQ6NDAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XG5idXR0b24sIHNlbGVjdCB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbjogMTBweCA1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMywgMzMsIDMzLCAwLjYpO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNTUsIDE3NSwgMTA5LCAwLjYpO1xuICB0cmFuc2l0aW9uOiAwLjFzO1xuICBoZWlnaHQ6IDM2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbmJ1dHRvbjpob3Zlciwgc2VsZWN0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzliYWY2ZDtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG59XG5idXR0b246Zm9jdXMsIHNlbGVjdDpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG5cbmJ1dHRvbjphY3RpdmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSwgMS4xKTtcbn1cblxubmF2IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY5LCA3MywgNTksIDAuOCk7XG59XG5uYXYgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICB3aWR0aDogOTEwcHg7XG4gIGhlaWdodDogNTdweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxubmF2IHVsIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjUlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM5YmFmNmQ7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgcGFkZGluZzogOHB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbm5hdiB1bCBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5YmFmNmQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNmZmY7XG59XG5uYXYgdWwgbGk6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTAlO1xuICBmb250LXNpemU6IDQwcHg7XG59XG5uYXYgdWwgbGk6bGFzdC1jaGlsZDpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbm5hdiB1bCBsaSBhIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vLi4vYXNzZXRzL2ltYWdlcy9oZWFkZXItYmcucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbmhlYWRlciBkaXYge1xuICBtYXJnaW4tcmlnaHQ6IDE1JTtcbn1cbmhlYWRlciBkaXYgaW1nIHtcbiAgd2lkdGg6IDE2MHB4O1xuICBoZWlnaHQ6IDEzMHB4O1xufVxuaGVhZGVyIGRpdiBwIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuaGVhZGVyIGRpdiBzcGFuIHtcbiAgZm9udC1zaXplOiA2MHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzliYWY2ZDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbmhlYWRlciBkaXYgYSB7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiA1MHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzliYWY2ZDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tdG9wOiA4MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY5LCA3MywgNTksIDAuNik7XG59XG5oZWFkZXIgZGl2IGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU0OTNiO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jb29rX19zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcbn1cbi5jb29rX19zZWN0aW9uIC5tYWluX19jb250IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uY29va19fc2VjdGlvbiAubWFpbl9fY29udCBkaXYge1xuICB3aWR0aDogNTAlO1xufVxuLmNvb2tfX3NlY3Rpb24gLm1haW5fX2NvbnQgLmFycm93X19jb250IHtcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxuLmNvb2tfX3NlY3Rpb24gLm1haW5fX2NvbnQgLnRleHRfX2NvbnQge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmNvb2tfX3NlY3Rpb24gLm1haW5fX2NvbnQgLnRleHRfX2NvbnQgc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBcIkdvY2hpIEhhbmRcIiwgY3Vyc2l2ZTtcbiAgY29sb3I6ICM5YmFmNmQ7XG4gIG1hcmdpbi1sZWZ0OiA3MHB4O1xufVxuLmNvb2tfX3NlY3Rpb24gLm1haW5fX2NvbnQgLnRleHRfX2NvbnQgcCB7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tbGVmdDogNzBweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xufVxuLmNvb2tfX3NlY3Rpb24gLmZhY3RzX19jb250IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NTQ5M2I7XG59XG4uY29va19fc2VjdGlvbiAuZmFjdHNfX2NvbnQgZGl2IHtcbiAgd2lkdGg6IDMzJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiA1MHB4IDA7XG59XG4uY29va19fc2VjdGlvbiAuZmFjdHNfX2NvbnQgZGl2IHNwYW4ge1xuICBmb250LWZhbWlseTogXCJHb2NoaSBIYW5kXCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6ICM5YmFmNmQ7XG59XG4uY29va19fc2VjdGlvbiAuZmFjdHNfX2NvbnQgZGl2IHAge1xuICB3aWR0aDogNjUlO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5vcmRlcl9fc2VjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLm9yZGVyX19zZWN0aW9uIC5vdXRlcl9fY29udCB7XG4gIHdpZHRoOiA3MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NTQ5M2I7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJvcmRlcjogOTBweCBzb2xpZCAjMjEyMTIxO1xufVxuLm9yZGVyX19zZWN0aW9uIC5vdXRlcl9fY29udCAuaGVhZGluZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMzVweDtcbn1cbi5vcmRlcl9fc2VjdGlvbiAub3V0ZXJfX2NvbnQgLmhlYWRpbmcgc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBcIkdvY2hpIEhhbmRcIiwgY3Vyc2l2ZTtcbiAgY29sb3I6ICM5YmFmNmQ7XG4gIGZvbnQtc2l6ZTogMzVweDtcbn1cbi5vcmRlcl9fc2VjdGlvbiAub3V0ZXJfX2NvbnQgLmhlYWRpbmcgcCB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIG1hcmdpbi10b3A6IDA7XG59XG4ub3JkZXJfX3NlY3Rpb24gLm91dGVyX19jb250IC5kaXNoZXNfX2NvbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5vcmRlcl9fc2VjdGlvbiAub3V0ZXJfX2NvbnQgLmRpc2hlc19fY29udCAuc2luZ2xlLWRpc2hfX2NvbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDUwJTtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLm9yZGVyX19zZWN0aW9uIC5vdXRlcl9fY29udCAuZGlzaGVzX19jb250IC5zaW5nbGUtZGlzaF9fY29udCBpbWcge1xuICB3aWR0aDogNTAlO1xufVxuLm9yZGVyX19zZWN0aW9uIC5vdXRlcl9fY29udCAuZGlzaGVzX19jb250IC5zaW5nbGUtZGlzaF9fY29udCAuZGlzaF9fZGVzYyB7XG4gIHdpZHRoOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2JhKDE1NSwgMTc1LCAxMDksIDAuNik7XG59XG4ub3JkZXJfX3NlY3Rpb24gLm91dGVyX19jb250IC5kaXNoZXNfX2NvbnQgLnNpbmdsZS1kaXNoX19jb250IC5kaXNoX19kZXNjIHNwYW4ge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiAjOWJhZjZkO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1mYW1pbHk6IFwiR29jaGkgSGFuZFwiLCBjdXJzaXZlO1xufVxuLm9yZGVyX19zZWN0aW9uIC5vdXRlcl9fY29udCAuZGlzaGVzX19jb250IC5zaW5nbGUtZGlzaF9fY29udCAuZGlzaF9fZGVzYyAucHJpY2luZyB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLm9yZGVyX19zZWN0aW9uIC5vdXRlcl9fY29udCAuZGlzaGVzX19jb250IC5zaW5nbGUtZGlzaF9fY29udCAuZGlzaF9fZGVzYyAub3JkZXJfX3RvdGFsIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjZmZmO1xufVxuLm9yZGVyX19zZWN0aW9uIC5vdXRlcl9fY29udCAuZGlzaGVzX19jb250IC5zaW5nbGUtZGlzaF9fY29udCAuZGlzaF9fZGVzYyBwIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBtYXJnaW46IDIwcHggMDtcbiAgd2lkdGg6IDg1JTtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xufVxuLm9yZGVyX19zZWN0aW9uIC5vdXRlcl9fY29udCAuZGlzaGVzX19jb250IC5zaW5nbGUtZGlzaF9fY29udCAuZGlzaF9fZGVzYyBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm9yZGVyLWNvbmZpcm1fX3NlY3Rpb24ge1xuICBoZWlnaHQ6IDE3MzBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi8uLi9hc3NldHMvaW1hZ2VzL2JnLW9yZGVyLWNvbmZpcm0ucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG4ub3JkZXItY29uZmlybV9fc2VjdGlvbiBmb3JtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMywgMzMsIDMzLCAwLjkpO1xuICBtYXJnaW46IDUwMHB4IGF1dG87XG59XG4ub3JkZXItY29uZmlybV9fc2VjdGlvbiBmb3JtIC5vcmRlci1jb25maXJtX19oZWFkaW5nIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ub3JkZXItY29uZmlybV9fc2VjdGlvbiBmb3JtIC5vcmRlci1jb25maXJtX19oZWFkaW5nIHAge1xuICBjb2xvcjogIzliYWY2ZDtcbiAgZm9udC1mYW1pbHk6IFwiR29jaGkgSGFuZFwiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDM1cHg7XG59XG4ub3JkZXItY29uZmlybV9fc2VjdGlvbiBmb3JtIC5vcmRlci1jb25maXJtLWlubmVyX19jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5vcmRlci1jb25maXJtX19zZWN0aW9uIGZvcm0gLm9yZGVyLWNvbmZpcm0taW5uZXJfX2NvbnRhaW5lciAuaW5wdXRfX2NvbnRhaW5lciB7XG4gIG1hcmdpbjogMTVweCA3MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm9yZGVyLWNvbmZpcm1fX3NlY3Rpb24gZm9ybSAub3JkZXItY29uZmlybS1pbm5lcl9fY29udGFpbmVyIC5pbnB1dF9fY29udGFpbmVyOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDIwMHB4O1xufVxuLm9yZGVyLWNvbmZpcm1fX3NlY3Rpb24gZm9ybSAub3JkZXItY29uZmlybS1pbm5lcl9fY29udGFpbmVyIC5pbnB1dF9fY29udGFpbmVyIGxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLm9yZGVyLWNvbmZpcm1fX3NlY3Rpb24gZm9ybSAub3JkZXItY29uZmlybS1pbm5lcl9fY29udGFpbmVyIC5pbnB1dF9fY29udGFpbmVyIGlucHV0IHtcbiAgd2lkdGg6IDMwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY5LCA3MywgNTksIDAuNik7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgYm9yZGVyOiBub25lO1xufVxuLm9yZGVyLWNvbmZpcm1fX3NlY3Rpb24gZm9ybSAub3JkZXItY29uZmlybS1pbm5lcl9fY29udGFpbmVyIC5pbnB1dF9fY29udGFpbmVyICNudW1iZXItb2YtcGVvcGxlIHtcbiAgd2lkdGg6IDgwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5vcmRlci1jb25maXJtX19zZWN0aW9uIGZvcm0gLm9yZGVyX19kZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5vcmRlci1jb25maXJtX19zZWN0aW9uIGZvcm0gLm9yZGVyX19kZXRhaWxzIC5vcmRlci1kZXRhaWxzX19kZXRhaWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgd2lkdGg6IDgwJTtcbn1cbi5vcmRlci1jb25maXJtX19zZWN0aW9uIGZvcm0gLm9yZGVyX19kZXRhaWxzIC5vcmRlci1kZXRhaWxzX19kZXRhaWwgc3BhbiB7XG4gIGNvbG9yOiAjOWJhZjZkO1xuICBmb250LWZhbWlseTogXCJHb2NoaSBIYW5kXCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICB3aWR0aDogMjAwcHg7XG59XG4ub3JkZXItY29uZmlybV9fc2VjdGlvbiBmb3JtIC5vcmRlcl9fZGV0YWlscyAub3JkZXItZGV0YWlsc19fZGV0YWlsIGlucHV0IHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2OSwgNzMsIDU5LCAwLjYpO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm9yZGVyLWNvbmZpcm1fX3NlY3Rpb24gZm9ybSAub3JkZXJfX2RldGFpbHMgLnRvdGFsLWNvc3Qge1xuICBmb250LXNpemU6IDM1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkdvY2hpIEhhbmRcIiwgY3Vyc2l2ZTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5uZXdfX21lbnUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU0OTNiO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi5uZXdfX21lbnUgLm5ldy1tZW51LWhlYWRpbmdfX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG4ubmV3X19tZW51IC5uZXctbWVudS1oZWFkaW5nX19jb250YWluZXIgc3BhbiB7XG4gIGNvbG9yOiAjOWJhZjZkO1xuICBmb250LWZhbWlseTogXCJHb2NoaSBIYW5kXCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogNDVweDtcbn1cbi5uZXdfX21lbnUgLm5ldy1tZW51LWhlYWRpbmdfX2NvbnRhaW5lciBwIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBtYXJnaW4tdG9wOiAwO1xufVxuLm5ld19fbWVudSAubmV3LW1lbnUtZGlzaGVzX19jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiA0MHB4IGF1dG87XG59XG4ubmV3X19tZW51IC5uZXctbWVudS1kaXNoZXNfX2NvbnRhaW5lciAubmV3LW1lbnUtZGlzaCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgd2lkdGg6IDE3JTtcbiAgbWFyZ2luOiAwIDQwcHg7XG59XG4ubmV3X19tZW51IC5uZXctbWVudS1kaXNoZXNfX2NvbnRhaW5lciAubmV3LW1lbnUtZGlzaCBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbi5uZXdfX21lbnUgLm5ldy1tZW51LWRpc2hlc19fY29udGFpbmVyIC5uZXctbWVudS1kaXNoIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDE1cHggMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cbi5uZXdfX21lbnUgLm5ldy1tZW51LWRpc2hlc19fY29udGFpbmVyIC5uZXctbWVudS1kaXNoIHNwYW46aG92ZXIge1xuICBjb2xvcjogIzliYWY2ZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm5ld19fbWVudSAubmV3LW1lbnUtZGlzaGVzX19jb250YWluZXIgLm5ldy1tZW51LWRpc2ggcCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luOiA1cHggMTBweDtcbn1cblxuZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1NDkzYjtcbn1cbmZvb3RlciAuc29jaWFsc19fY29udCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuZm9vdGVyIC5zb2NpYWxzX19jb250IGltZyB7XG4gIG1hcmdpbjogMjVweCAzNXB4O1xufVxuZm9vdGVyIC5zb2NpYWxzX19jb250IGltZzpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xufVxuZm9vdGVyIC5pbmZvX19jb250IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuZm9vdGVyIC5pbmZvX19jb250IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogMzBweCA4MHB4O1xuICB3aWR0aDogNDAlO1xufVxuZm9vdGVyIC5pbmZvX19jb250IGRpdiBzcGFuIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuZm9vdGVyIC5pbmZvX19jb250IGRpdiBwIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW46IDA7XG59XG5mb290ZXIgLmluZm9fX2NvbnQgZGl2IHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuZm9vdGVyIC5pbmZvX19jb250IGRpdiB1bCBsaSB7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuZm9vdGVyIC5pbmZvX19jb250IGRpdiB1bCBsaSBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5mb290ZXIgLmluZm9fX2NvbnQgZGl2IHVsIGxpIGE6aG92ZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./order.service */
    "./src/app/order.service.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(_orderService) {
        _classCallCheck(this, AppComponent);

        this._orderService = _orderService;
        this.title = 'japan-food';
        this.multiplicator = 1;
        this.dishes = this._orderService.orderDishes;
        this.menuPosition = 'translateX(-92%)';
      }

      _createClass(AppComponent, [{
        key: "toggleMenu",
        value: function toggleMenu() {
          if (this.menuPosition === 'translateX(-92%)') {
            this.menuPosition = 'translateX(0px)';
          } else {
            this.menuPosition = 'translateX(-92%)';
          }
        }
      }, {
        key: "showPrice",
        value: function showPrice() {
          this._orderService.showPrice();
        }
      }, {
        key: "addDishToOrder",
        value: function addDishToOrder(name) {
          this._orderService.addDishToOrder(name);
        }
      }, {
        key: "totalCost",
        value: function totalCost() {
          this._orderService.totalCost();
        }
      }, {
        key: "changeAmount",
        value: function changeAmount(dish) {
          this._orderService.changeAmount(dish);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/order.service.ts":
  /*!**********************************!*\
    !*** ./src/app/order.service.ts ***!
    \**********************************/

  /*! exports provided: OrderService */

  /***/
  function srcAppOrderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderService", function () {
      return OrderService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var OrderService =
    /*#__PURE__*/
    function () {
      function OrderService() {
        _classCallCheck(this, OrderService);

        //////////
        this.orderDishes = [{
          name: 'california sushi',
          price: 14.95,
          amount: 0,
          photo_url: "./../assets/images/dish-1.png",
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.'
        }, {
          name: 'traditional wok',
          price: 17.95,
          amount: 0,
          photo_url: "./../assets/images/dish-2.png",
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.'
        }, {
          name: 'poke bowl',
          price: 18.95,
          amount: 0,
          photo_url: "./../assets/images/dish-3.png",
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.'
        }, {
          name: 'fresh salmon',
          price: 21.20,
          amount: 0,
          photo_url: "./../assets/images/dish-4.png",
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.'
        }, {
          name: 'avacado sushi',
          price: 12.50,
          amount: 0,
          photo_url: "./../assets/images/dish-5.png",
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.'
        }, {
          name: 'king sushi',
          price: 19.75,
          amount: 0,
          photo_url: "./../assets/images/dish-6.png",
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.'
        }];
      } /////


      _createClass(OrderService, [{
        key: "showPrice",
        value: function showPrice() {
          var target = event.target;
          var div = target.parentElement.parentElement;
          var shownPrice = div.querySelector('.pricing');
          var targetDishName = div.querySelector('.dish__name');
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this.orderDishes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var dish = _step.value;

              if (dish.name === targetDishName.textContent) {
                shownPrice.textContent = '$' + String((dish.price * parseFloat(target.options[target.selectedIndex].text)).toFixed(2));
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        } /////

      }, {
        key: "addDishToOrder",
        value: function addDishToOrder(name) {
          var target = event.target;
          var countField = target.parentElement.parentElement.querySelector('select');
          var count = parseFloat(countField.options[countField.selectedIndex].text);
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = this.orderDishes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var dish = _step2.value;

              if (dish.name === name && dish.amount + count <= 6) {
                dish.amount += count;
              }
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        } ////

      }, {
        key: "totalCost",
        value: function totalCost() {
          var field = document.querySelector('.total-cost');
          var result = 0;
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = this.orderDishes[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var dish = _step3.value;
              result += dish.price * dish.amount;
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }

          field.textContent = 'Total: $' + String(result.toFixed(2));
        } //// 

      }, {
        key: "changeAmount",
        value: function changeAmount(dish) {
          var target = event.target;
          dish.amount = parseFloat(target.value);
        }
      }]);

      return OrderService;
    }();

    OrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], OrderService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /mnt/d/Coding/projects VS/japan-food/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map