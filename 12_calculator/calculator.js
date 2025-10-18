const add = function (...arg) {
  let sum = 0;
  for (let i = 0; i < arg.length; i++) {
    sum += arg[i];
  }
  return sum;
};

const subtract = function (...arg) {
  let sum = 0;
  for (let i = 0; i < arg.length; i++) {
    if (i === 0) {
      sum += arg[i];
    } else {
      sum -= arg[i];
    }
  }
  return sum;
};

const sum = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

const multiply = function (arr) {
  let sum = 1;
  for (let i = 0; i < arr.length; i++) {
    sum *= arr[i];
  }
  return sum;
};

const power = function (x, pow) {
  let sum = x;
  for (let i = 0; i < pow - 1; i++) {
    sum *= x;
  }
  return sum;
};

const factorial = function (x) {
  let sum = 1;
  for (let i = x; i > 0; i--) {
    sum *= i;
  }
  return sum;
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
