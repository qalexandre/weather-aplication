import React, { Fragment, useState } from "react";
import { Section, Field, Control, Input, Icon, Column, Help } from "rbx";
import "../../styles/home.scss";
import Header from "../../components/header";
import WeatherCard from "../../components/card/weather";
import { FaSearch } from "react-icons/fa";
import WeatherService from "../../services/weathers";
import ListDay from "../../components/card/list-day";

const HomeScreen = () => {
  const [query, setQuery] = useState("");
  const [card, setCard] = useState([]);
  const [cardsDay, setCardsDay] = useState([]);
  const [showCards, setShowCards] = useState(false);
  const [indexCard, setIndexCard] = useState(1);
  const [error, setError] = useState("");

  const nextCards = async () => {
    setIndexCard(indexCard + 3);
    let index = indexCard + 3;
    loadCards(index);
  };

  const previousCards = () => {
    setIndexCard(indexCard - 3);
    let index = indexCard - 3;
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

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchWeather(query);
    }
  };
  const searchWeather = async (query) => {
    try {
      setIndexCard(1);
      setError(null);
      const response = await WeatherService.search(query);
      setCard(response.data);
      loadCards(1);
    } catch (erro) {
      setError(erro);
    }
  };

  return (
    <Fragment>
      <Header />
      <Column.Group>
        <Column size={2}>
          <Field>
            <Control iconRight>
              <Input
                color="primary"
                size="small"
                type="text"
                placeholder="Pesquisar"
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <Icon align="right">
                <FaSearch />
              </Icon>
            </Control>
            {error && <Help color="danger">Cidade não localizada</Help>}
          </Field>
        </Column>
      </Column.Group>
      <Section size="small" className="home">
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
      </Section>
    </Fragment>
  );
};
export default HomeScreen;
