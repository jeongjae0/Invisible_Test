const axios = require("axios");

const getWeather = async (lat, lon) => {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=d07a94c3513f0277c8a675036959a58e`
  )
  return res.data.main.temp;
}

module.exports = {
    getWeather
}
