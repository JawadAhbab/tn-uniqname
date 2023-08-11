'use strict';

var _toConsumableArray = require("@babel/runtime/helpers/toConsumableArray");
var tnCapitalize = require('tn-capitalize');
var tnCase = require('tn-case');
var tnRandom = require('tn-random');
var ung = require('unique-names-generator');
var dic = [];
var dicadd = function dicadd(a) {
  return a.map(function (e) {
    return dic.push.apply(dic, _toConsumableArray(e.split(/[ -]/g).filter(function (i) {
      return i.length > 2;
    })));
  });
};
dicadd([ung.countries, ung.animals, ung.adjectives, ung.colors, ung.languages].flat());
var uniqname = function uniqname() {
  var words = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
  var seed = arguments.length > 1 ? arguments[1] : undefined;
  var properseed = seed !== null && seed !== void 0 ? seed : "".concat(new Date().getTime()).concat(tnRandom.random(0, 1000));
  var dictionaries = Array.from({
    length: words
  }).fill(dic);
  var name = ung.uniqueNamesGenerator({
    dictionaries: dictionaries,
    seed: properseed
  });
  return tnCapitalize.capitalize(tnCase.spaceCase(name));
};
exports.uniqname = uniqname;
