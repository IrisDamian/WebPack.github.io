// conversor/conversor.js

// Función para convertir de Celsius a Fahrenheit
export function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  // Función para convertir de Fahrenheit a Celsius
  export function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }
  