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

const power = function() {
	
};

const factorial = function() {
	
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
