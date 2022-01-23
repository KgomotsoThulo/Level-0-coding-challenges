function celsiusToFahrenheit(celsiusTemp) {
    var fahrenheit = 0;
    fahrenheit = (celsiusTemp * 9 / 5) + 32;
    console.log(fahrenheit + " F");
}

function fahrenheitToCelsius(fahrenheitTemp) {
   var celsius = 0;
   celsius = (fahrenheitTemp - 32) * 5 / 9;
   console.log(celsius + " C"); 
}

celsiusToFahrenheit(0);
fahrenheitToCelsius(53);