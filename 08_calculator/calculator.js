const add = function(num1, num2) {
  return num1 + num2;
	
};

const subtract = function(num1, num2) {
  return num1 - num2;
	
};

const sum = function(array) {
  let sum = 0;
  
  array.forEach((item) => {
    sum += item;
  })

  return sum;
	
};

const multiply = function(array) {
  let product = 1;

  array.forEach((item) => {
    product *= item;
  })

  return product;

};

const power = function(base, exponent) {
  let raised = 1;

  for(let i = 0; i < exponent; i++) {
    raised *= base;
  }

  // 4 ^ 3 - 4, 16, 

  return raised;
	
};

const factorial = function(number) {
  let factorial = 1;

  for(let i = number; i > 0; i--) {
    factorial *= i;
  }

  return factorial;
	
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
