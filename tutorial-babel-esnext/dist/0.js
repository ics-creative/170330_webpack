(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/sub.js":
/*!********************!*\
  !*** ./src/sub.js ***!
  \********************/
/*! exports provided: Hello */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hello", function() { return Hello; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Hello = /*#__PURE__*/function () {
  function Hello() {
    _classCallCheck(this, Hello);
  }

  _createClass(Hello, [{
    key: "say",

    /** 非同期指定で呼び出します。 */
    value: function () {
      var _say = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(message) {
        var arr, numList, numList2, str, _numList, _loop, _i, _numList2, restParam, reDate, match, year, month, day, instance, _object$hoge, object, fuga;

        return regeneratorRuntime.wrap(function _callee2$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.log("💜ES2015 - テンプレート構文");
                console.log("".concat(message, "\u3092\u51FA\u529B\u3057\u307E\u3057\u305F"));
                console.log("💛ES2016 - べき乗の検証");
                console.log(Math.pow(3, 2)); // 9

                console.log(Math.pow(2, 8)); // 256

                console.log(Math.pow(2, 10)); // 1024

                console.log("💛ES2016 - Array.include の検証");
                arr = ["hoge", "fuga", "piyo"];
                console.log(arr.includes("hoge")); // true

                console.log(arr.includes("moja")); // false

                console.log("💚ES2017 - async, await の検証");
                numList = [1, 2, 3];
                _context3.next = 14;
                return Promise.all(numList.map(function (id) {
                  return id * 2;
                }));

              case 14:
                numList2 = _context3.sent;
                console.log(numList2); // [2, 4, 6]

                console.log("💚ES2017 - String.prototype.padEnd() の検証");
                str = "moja";
                console.log(str.padEnd(10, "hoge")); // mojahogeho

                console.log(str.padEnd(5, "piyo")); // mojap

                console.log("💙ES2018 - Asynchronous Iteration"); // ES2018 : async, await の検証

                _numList = [1, 2, 3];
                _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop() {
                  var i;
                  return regeneratorRuntime.wrap(function _loop$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          i = _numList2[_i];
                          _context.next = 3;
                          return new Promise(function (resolve) {
                            console.log(i);
                            resolve();
                          });

                        case 3:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _loop);
                });
                _i = 0, _numList2 = _numList;

              case 24:
                if (!(_i < _numList2.length)) {
                  _context3.next = 29;
                  break;
                }

                return _context3.delegateYield(_loop(), "t0", 26);

              case 26:
                _i++;
                _context3.next = 24;
                break;

              case 29:
                _numList.forEach( /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(i) {
                    return regeneratorRuntime.wrap(function _callee$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return new Promise(function (resolve) {
                              console.log(i);
                              resolve();
                            });

                          case 2:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x2) {
                    return _ref.apply(this, arguments);
                  };
                }());

                restParam = function restParam(p1, p2) {
                  console.log(p1); // 1

                  console.log(p2); // 2

                  for (var _len = arguments.length, p3 = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                    p3[_key - 2] = arguments[_key];
                  }

                  console.log(p3); // [3, 4, 5]
                };

                console.log("💙ES2018 - Rest/Spread Properties");
                restParam(1, 2, 3, 4, 5);
                console.log("💙ES2018 - Regular Expression Named Capture Groups");
                reDate = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
                match = reDate.exec("2018-04-30");
                year = match[1]; // 2018

                month = match[2]; // 04

                day = match[3]; // 30

                console.log(year); // 2018

                console.log(month); // 04

                console.log(day); // 30

                instance = new MyClass();
                instance.show();
                console.log("💗️ES2019 - flatの検証");
                console.log([[1, 2], 3, 4].flat()); // 結果：[1, 2, 3, 4]

                console.log(["牛", "豚", "マグロ"].flatMap(function (food) {
                  return [food, "".concat(food, "\u4E3C")];
                })); // 結果：["牛", "牛丼", "豚", "豚丼", "マグロ", "マグロ丼"]

                console.log("💗️ES2019 - fromEntriesの検証");
                console.log(Object.fromEntries([["id", 16], ["name", "鈴木"]]));
                _context3.prev = 49;
                throw new Error("🙅");

              case 53:
                _context3.prev = 53;
                _context3.t1 = _context3["catch"](49);
                // (error)の指定は必須
                console.warn("💗️ES2019 - エラーの省略");

              case 56:
                object = {};
                fuga = (_object$hoge = object.hoge) === null || _object$hoge === void 0 ? void 0 : _object$hoge.fuga;
                console.log("💗️ES2020 - オプショナルチェイニング", fuga);

              case 59:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee2, null, [[49, 53]]);
      }));

      function say(_x) {
        return _say.apply(this, arguments);
      }

      return say;
    }()
  }]);

  return Hello;
}();

var MyClass = /*#__PURE__*/function () {
  // hoge = '💗ES2019 - メンバーフィールドの検証';
  function MyClass() {
    _classCallCheck(this, MyClass);
  }

  _createClass(MyClass, [{
    key: "show",
    value: function show() {// console.log(this.hoge);
    }
  }]);

  return MyClass;
}();

/***/ })

}]);
//# sourceMappingURL=0.js.map