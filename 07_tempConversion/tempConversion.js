const convertToCelsius = function (degreeInFahrenheit) {
  degreeInCelsius = (degreeInFahrenheit - 32) * (5 / 9);
  return Math.round(degreeInCelsius * 10) / 10;
};

const convertToFahrenheit = function (degreeInCelsius) {
  degreeInFahrenheit = degreeInCelsius * (9 / 5) + 32;
  return Math.round(degreeInFahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
