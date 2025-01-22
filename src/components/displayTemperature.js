import CreateElement from "./createElement.js";
import "./displayTemperature.css";
import getIcon from "./getIcons.js";
async function DisplayTemperature(tempDisplay, weatherData) {
  tempDisplay.innerHTML = "";
  let cityName = CreateElement("h2", { id: "cityName" }, [
    weatherData.resolvedAddress || "Unknown Location",
  ]);
  let rainChance = CreateElement("p", { id: "rainChance" }, [
    `Chance of rain: ${weatherData.days[0]?.precipprob || 0}%`,
  ]);
  let temp = CreateElement("p", { id: "temp" });
  temp.innerHTML = `${weatherData.days[0]?.temp || "N/A"}&deg;C`;
  let tempDiv = CreateElement("div", { id: "tempDiv" }, [cityName, rainChance]);
  let leftDiv = CreateElement("div", { class: "leftTempDisplay" }, [
    tempDiv,
    temp,
  ]);
  let iconImg = await getIcon(weatherData.currentConditions.icon);
  let img = CreateElement("img", {
    id: "tempImage",
    src: iconImg,
  });
  let rightDiv = CreateElement("div", { class: "rightTempDisplay" }, [img]);
  tempDisplay.append(leftDiv, rightDiv);
}
export default DisplayTemperature;
