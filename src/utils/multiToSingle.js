import validate from "aproba";
const multiToSingle = function (json) {
  validate("S", arguments);

  return JSON.stringify(JSON.parse(json));
};

export default multiToSingle;
