import Api from "./api";

const WeatherService = {
  search: (query) =>
    Api.get(
      `/forecast.json?key=358d95c88dbf4e97982153237210612&q=${query}&days=1&aqi=no&alerts=no&lang=pt`,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      }
    ),
  searchDay: (query) =>
    Api.get(
      `/forecast.json?key=358d95c88dbf4e97982153237210612&q=${query}&days=1&aqi=no&alerts=no&lang=pt`,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      }
    ),
};

export default WeatherService;
