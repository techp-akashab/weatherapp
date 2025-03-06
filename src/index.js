import "./index.css";
import DisplayTemperature from "./components/displayTemperature.js";
import DisplayTodayForecast from "./components/displayTodayForecast.js";
import fetchWeatherData from "./components/fetchWeatherData.js";
import DisplayAirCondition from "./components/displayAirCondition.js";
import DisplayForecastTemperature from "./components/displayForecastTemperature.js";

function debounce(func, delay)
{
  let timer;
  return function(...args)
  {
    clearTimeout(timer);
    timer = setTimeout(()=>func.apply(this, args), delay);
  }
}
const renderPage = async (location = "pune") => {
  const loading = document.getElementById("loading");
  loading.style.display = "block";
  try {
    const weatherData = await fetchWeatherData(location);
    if (weatherData) {
      //Temperature Display(temp-display)
      let tempDisplay = document.getElementById("temp-display");
      DisplayTemperature(tempDisplay, weatherData);

      //Today's Forecast
      let todayForecast = document.getElementById("today-forecast");
      DisplayTodayForecast(todayForecast, weatherData);

      // Air Conditions
      let airCondition = document.getElementById("air-condition");
      DisplayAirCondition(airCondition, weatherData.currentConditions);

      //7-day Forecast
      let forecastContainer = document.getElementById("future-forecast");
      DisplayForecastTemperature(forecastContainer, weatherData);
    }
  } catch (error) {
    console.log("Erro Fetching weather data: ", error);
  } finally {
    loading.style.display = "none";
  }
};
// Search Functionality
let search = document.getElementById("search-bar");
// search.addEventListener("focusout", () => {
//   let inputCity = search.value;
//   renderPage(inputCity);
//   search.value = "";
// });
search.addEventListener(
  "input",
  debounce(() => {
    let inputCity = search.value;
    renderPage(inputCity);
  }, 1000)
);
document.addEventListener("DOMContentLoaded", async () => renderPage());
