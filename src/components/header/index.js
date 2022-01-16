import React, { Fragment } from "react";
import WeatherIcon from "../../assets/icons/weather-icon.png";
import SearchIcon from "../../assets/icons/search.png";
import "../../styles/header.scss";

const Header = ({ setProps, value, searchWeather }) => {
  return (
    <Fragment>
      <header className="menu">
        <div className="logo">
          <img src={WeatherIcon} alt="Imagem - nuvem" className="logo-image" />
          <a className="logo-text" href="/">
            WheaterAPP
          </a>
        </div>
        <div className="search">
          <input
            value={value}
            className="search-input"
            type="text"
            placeholder="Digite um local"
            onChange={(e) => setProps(e.target.value)}
          />
          <button className="search-button" onClick={searchWeather}>
            <img src={SearchIcon} alt="" className="search-image" />
          </button>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
