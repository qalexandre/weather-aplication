import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/home";

const Routers = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeScreen />} />
    </Routes>
  </BrowserRouter>
);

export default Routers;
