const add = ((num1, num2) => num1 + num2);


const subtract =((num1, num2) => num1 - num2);

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
}

const multiply = function(array) {
  return array.reduce((accumulator, current) => accumulator * current);

};

const power = function(base, exponent) {
  return Math.pow(base, exponent);
	
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
