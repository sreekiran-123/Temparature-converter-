function convertTemperature() {
    const kelvinInput = document.getElementById("kelvin").value;
    const celsiusInput = document.getElementById("celsius").value;
    const fahrenheitInput = document.getElementById("fahrenheit").value;
  
    if (kelvinInput !== "") {
      const kelvin = parseFloat(kelvinInput);
      const celsius = kelvin - 273.15;
      const fahrenheit = celsius * (9 / 5) + 32;
      document.getElementById("celsius").value = celsius.toFixed(2);
      document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
    } else if (celsiusInput !== "") {
      const celsius = parseFloat(celsiusInput);
      const fahrenheit = celsius * (9 / 5) + 32;
      const kelvin = celsius + 273.15;
      document.getElementById("kelvin").value = kelvin.toFixed(2);
      document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
    } else if (fahrenheitInput !== "") {
      const fahrenheit = parseFloat(fahrenheitInput);
      const celsius = (fahrenheit - 32) * (5 / 9);
      const kelvin = celsius + 273.15;
      document.getElementById("kelvin").value = kelvin.toFixed(2);
      document.getElementById("celsius").value = celsius.toFixed(2);
    }
  }
  
  function clearFields() {
    document.getElementById("kelvin").value = "";
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
  }
  
  document.getElementById("generate-button").addEventListener("click", convertTemperature);
  document.getElementById("clear-button").addEventListener("click", clearFields);
  