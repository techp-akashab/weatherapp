import CreateElement from "./createElement";
import "./displayTodayForecast.css";
import getIcon from "./getIcons.js";
async function displayTodayForecast(container, weatherData) {
  container.innerHTML = "";
  function convertTo12HourFormat(time24) {
    const [hours, minutes] = time24.split(":").map(Number);
    const period = hours >= 12 ? "PM" : "AM";
    const hours12 = hours % 12 || 12;
    return `${hours12}:${String(minutes).padStart(2, "0")} ${period}`;
  }
  let title = CreateElement("h4", { id: "todayForecastTitle" }, [
    "Today's Forecast",
  ]);
  container.append(title);
  let forecastContainer = CreateElement("div", { id: "forecastContainer" });
  for (let i = 6; i < weatherData.days[0].hours.length; i += 3) {
    let time = CreateElement("p", { class: "todayForecastTime" });
    time.textContent = convertTo12HourFormat(
      weatherData.days[0].hours[i].datetime
    );
    let iconImg = await getIcon(weatherData.days[0].hours[i].icon);
    let img = CreateElement("img", { class: "tempImage", src: iconImg });
    let temp = CreateElement("p", { class: "todayForecastTemp" });
    temp.innerHTML = `${weatherData.days[0].hours[i].temp}&deg;`
    let div = CreateElement("div", { class: "todayForecastCont" }, [
      time,
      img,
      temp,
    ]);
    if (i + 3 >= weatherData.days[0].hours.length) {
      div.setAttribute("id", "lastOne");
    }
    forecastContainer.append(div);
  }
  container.append(forecastContainer);
}
export default displayTodayForecast;
