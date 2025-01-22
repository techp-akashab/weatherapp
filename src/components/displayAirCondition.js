import CreateElement from "./createElement";
import "./displayAirCondition.css";
function DisplayAirCondition(container, weatherData) {
  container.innerHTML = ''
  let upperDiv = CreateElement("div", { id: "air-cond-upper-cont" }, [
    CreateElement("h4", { id: "air-cond-upper-cont-title" }, [
      "Air Conditions",
    ]),
  ]);
  let lowerDiv = CreateElement("div", { id: "air-cond-lower-cont" });
  lowerDiv.innerHTML = `
  <div class = "air-cond-real-feel air-condition">
    <h5><span class="material-symbols-outlined">thermometer</span>Real Feel</h5>
    <p>${weatherData.feelslike}&deg;</p>
  </div>
  <div class = "air-cond-wind-speed air-condition">
    <h5><span class="material-symbols-outlined">air</span>Wind Speed</h5>
    <p>${weatherData.windspeed}km/h</p>
  </div>
  <div class = "air-cond-chance-of-rain air-condition">
    <h5><span class="material-symbols-outlined">rainy</span>Chance of Rain</h5>
    <p>${weatherData.precipprob}%</p>
  </div>
  <div class = "air-cond-uv-index air-condition">
    <h5><span class="material-symbols-outlined">sunny</span>UV Index</h5>
    <p>${weatherData.uvindex}</p>
  </div>
  `;
  container.append(upperDiv, lowerDiv);
}
export default DisplayAirCondition;
