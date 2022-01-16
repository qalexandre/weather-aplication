import axios from "axios";
const Api = axios.create({
  baseURL: "https://api.weatherapi.com/v1",
});

export default Api;
