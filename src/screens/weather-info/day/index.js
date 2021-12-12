import { Control, Field, Icon, Input, Section } from "rbx";
import React, { Fragment, useState } from "react";
import ListDay from "../../../components/card/list-day";
import Header from "../../../components/header";
import WeatherDayCard from "../../../components/card/weather-day";
import WeatherService from "../../../services/weathers";

const DayInfoScreen = () => {
  const [query, setQuery] = useState("");
  const [showCards, setShowCards] = useState(false);
  const [card, setCard] = useState({
    weatherIcon: "",
    condition: "",
    name: "",
    region: "",
    date: "",
    temp: "",
  });
  const [cards, setCards] = useState([
    { location: "", current: "", forecast: "" },
  ]);

  const fetchCards = () => {};

  const searchWeatherDay = async (query) => {
    const response = await WeatherService.searchDay(query);
    setCards({
      location: response.data.location,
      current: response.data.current,
      forecast: response.data.forecast,
    });
    setCard({
      weatherIcon: response.data.current.condition.icon,
      condition: response.data.current.condition.text,
      name: response.data.location.name,
      region: response.data.location.region,
      date: response.data.location.localtime,
      temp: response.data.current.temp_c,
    });
    setShowCards(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchWeatherDay(query);
    }
  };

  return (
    <Fragment>
      <Header />
      <Field>
        <Control>
          <Input
            size="small"
            type="text"
            placeholder="Pesquisar"
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </Control>
      </Field>

      <Section size="small" className="home">
        {showCards && <WeatherDayCard card={card} cards={cards} />}
        {showCards && <ListDay cards={cards} />}
      </Section>
    </Fragment>
  );
};

export default DayInfoScreen;
