const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * (5/9);
  if(Number.isInteger(celsius)) {
    return celsius;
  }
  else {
    let result = celsius.toFixed(1);
    return Number.parseFloat(result);

  }
  

};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = (celsius * (9/5)) + 32;
  if(Number.isInteger(fahrenheit)) {
    return fahrenheit 
  }
  else {
    let result = fahrenheit.toFixed(1);
    return Number.parseFloat(result);
  }

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
