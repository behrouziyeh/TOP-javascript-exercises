const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  return arr.reduce(((total, item) => total + item), 0);
};

const multiply = function(args) {
  return args.reduce((product, item) => product * item, 1);
};

const power = function(base, power) {
  return (+base) ** +power;
};

const factorial = function(num) {
  if (num === 0) return 1;
  if (num < 0) return "ERROR";
  else return num * factorial(num - 1)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
