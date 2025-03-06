import CreateElement from "./createElement";
import "./displayForecastTemperature.css";
import getIcon from "./getIcons.js";

async function DisplayForecastTemperature(container, weatherData) {
  container.innerHTML = "";
  let upperDiv = CreateElement("div", { id: "forecast-upper-cont" }, [
    CreateElement("h3", { id: "forecast-upper-cont-title" }, [
      "7-day forecast",
    ]),
  ]);
  let lowerDiv = CreateElement("div", { id: "forecast-lower-cont" });
  for (let i = 0; i < 7; i++) {
    let singleDayForecast = CreateElement("div", {
      class: "single-day-forecast",
    });
    let date = new Date(weatherData.days[i].datetime);
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    date = days[date.getDay()];
    let iconImg = await getIcon(weatherData.days[i].icon);
    singleDayForecast.innerHTML = `
    <h5>${i == 0 ? "Today" : date}</h5>
    <p class="forecast-description"><img src = ${iconImg} class="forecast-image"/>${
      weatherData.days[i].conditions
    }</p>
    <p>${weatherData.days[i].temp}&deg;</p>
    `;
    lowerDiv.append(singleDayForecast);
  }
  container.append(upperDiv, lowerDiv);
}
export default DisplayForecastTemperature;
