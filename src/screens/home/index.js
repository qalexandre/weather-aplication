import React, { Fragment, useState } from "react";
import "../../styles/home.scss";
import Header from "../../components/header";
import WeatherCard from "../../components/card/weather";
import WeatherService from "../../services/weathers";
import ListDay from "../../components/card/list-day";
import RainyDay from "../../assets/icons/rainy-day.png";
import Moment from "moment";

const HomeScreen = () => {
  document.title = "WheaterAPP";
  const [query, setQuery] = useState("");
  const [card, setCard] = useState([]);
  const [cardsDay, setCardsDay] = useState([]);
  const [showCards, setShowCards] = useState(false);
  const [indexCard, setIndexCard] = useState(1);

  const nextCards = async () => {
    let index = indexCard + 3;
    if (index > 22) index = 22;
    setIndexCard(index);
    loadCards(index);
  };

  const previousCards = () => {
    let index = indexCard - 3;
    if (index < 1) index = 1;
    setIndexCard(index);
    loadCards(index);
  };
  const loadCards = async (index) => {
    const response = await WeatherService.search(query);
    setCardsDay({
      index0: response.data.forecast.forecastday[0].hour[index - 1],
      index1: response.data.forecast.forecastday[0].hour[index],
      index2: response.data.forecast.forecastday[0].hour[index + 1],
    });

    setShowCards(true);
  };

  const searchWeather = async () => {
    try {
      setIndexCard(1);
      const response = await WeatherService.search(query);
      setCard(response.data);
      let hour = parseInt(Moment(Date.now()).format("HH"));
      if (hour > 22) hour = 2;
      if (hour < 1) hour = 1;
      setIndexCard(hour);
      loadCards(hour);
    } catch (erro) {}
  };

  return (
    <Fragment>
      <Header setProps={setQuery} value={query} searchWeather={searchWeather} />
      {!showCards && (
        <main>
          <img src={RainyDay} alt="" className="main-image" />
          <p className="main-text">
            “Previsão, clima, alertas e qualidade do ar de qualquer lugar do
            país rápido e prático.”
          </p>
        </main>
      )}
      {showCards && <WeatherCard card={card} />} <br />
      {showCards && (
        <ListDay
          card={card}
          cardsDay={cardsDay}
          nextCards={nextCards}
          previousCards={previousCards}
          indexCard={indexCard}
        />
      )}
    </Fragment>
  );
};
export default HomeScreen;
