const convertToCelsius = function(fahrenheit) {
  const number =  (fahrenheit - 32) * 5/9;
  const celsius = parseFloat(number.toFixed(1));
  return celsius;
};

const convertToFahrenheit = function(celsius) {
  let number = (celsius * 9/5) + 32;
  const fahrenheit = parseFloat(number.toFixed(1));
  return fahrenheit;
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
