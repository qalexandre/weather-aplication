import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/home";
import DayInfoScreen from "./screens/weather-info/day";

const Routers = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/day" element={<DayInfoScreen />} />
    </Routes>
  </BrowserRouter>
);

export default Routers;
