import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import { capitalize } from 'tn-capitalize';
import { spaceCase } from 'tn-case';
import { random } from 'tn-random';
import ung from 'unique-names-generator';
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
  var properseed = seed !== null && seed !== void 0 ? seed : "".concat(new Date().getTime()).concat(random(0, 1000));
  var dictionaries = Array.from({
    length: words
  }).fill(dic);
  var name = ung.uniqueNamesGenerator({
    dictionaries: dictionaries,
    seed: properseed
  });
  return capitalize(spaceCase(name));
};
export { uniqname };
