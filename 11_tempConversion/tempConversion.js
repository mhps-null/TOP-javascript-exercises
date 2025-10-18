const convertToCelsius = function (tempr) {
  let rounded = ((tempr - 32) * (5 / 9));
  rounded = rounded.toFixed(1);
  return Number(rounded);
};

const convertToFahrenheit = function (tempr) {
  let rounded = ((tempr * (9 / 5)) + 32);
  rounded = rounded.toFixed(1);
  return Number(rounded);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
