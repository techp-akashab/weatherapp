import {VISUALCROSSINGAPIKEY} from '../config'
async function fetchWeatherData(city) {
  // const visualcrossingapikey = "CJRFCJ47P4KPCGBN43X5JTWNE";
  const weatherUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&elements=datetime%2Cname%2Caddress%2CresolvedAddress%2Clatitude%2Clongitude%2Ctemp%2Cfeelslike%2Cprecipprob%2Cwindspeed%2Cuvindex%2Cconditions%2Cdescription%2Cicon&key=${VISUALCROSSINGAPIKEY}&contentType=json`;
  try {
    const response = await fetch(weatherUrl);
    const weatherData = await response.json();
    console.log(weatherData);
    
    return weatherData;
  } catch (error) {
    console.error("Error Fetching weather data: ", error);
  }
}
export default fetchWeatherData;