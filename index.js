const celciusC1 = document.getElementById("celsius");
const fahrenheitF1 = document.getElementById("fahrenheit");
const kelvinK1 = document.getElementById("kelvin");

function changeTemp(event) {
  const currentTemp = Number(event.target.value);

  if (event.target.name === "celsius") {
    fahrenheitF1.value = (currentTemp * 1.8 + 32).toFixed(2);
    kelvinK1.value = (currentTemp + 273.15).toFixed(2);
  } else if (event.target.name === "fahrenheit") {
    celciusC1.value = ((currentTemp - 32) / 1.8).toFixed(2);
    kelvinK1.value = ((currentTemp - 32) / 1.8 + 273.15).toFixed(2);
  } else if (event.target.name === "kelvin") {
    celciusC1.value = (currentTemp - 273.15).toFixed(2);
    fahrenheitF1.value = ((currentTemp - 273.15) * 1.8 + 32).toFixed(2);
  }
}
