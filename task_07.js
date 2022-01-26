function celsiusToFahrenheit(celsiusTemp) {
  let fahrenheit = 0;
  fahrenheit = (celsiusTemp * 9) / 5 + 32;
  fahrenheit = fahrenheit + " F";
  return fahrenheit;
}

function fahrenheitToCelsius(fahrenheitTemp) {
  let celsius = 0;
  celsius = ((fahrenheitTemp - 32) * 5) / 9;
  celsius = celsius + " C";
  return celsius;
}

console.log(celsiusToFahrenheit(0));
console.log(fahrenheitToCelsius(53));
