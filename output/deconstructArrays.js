"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var person = ['Jerson Antonio', 22, 'Nicaragua'];
var name = person[0],
    age = person[1],
    country = person[2],
    _person$ = person[3],
    job = _person$ === void 0 ? "Web Developer" : _person$; // const showInfo = ([name, age, country, job = "Web Developer"] = person) => {
//     return `Datas: ${name}, ${age}, ${country}, ${job}`;
// }

var showInfo = function showInfo() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : person,
      _ref2 = _slicedToArray(_ref, 4),
      name = _ref2[0],
      age = _ref2[1],
      country = _ref2[2],
      _ref2$ = _ref2[3],
      job = _ref2$ === void 0 ? "Web Developer" : _ref2$;

  return "Datas: ".concat(name, ", ").concat(age, ", ").concat(country, ", ").concat(job);
};

console.log(showInfo());