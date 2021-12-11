import React from "react";
import { Card, Image, Media, Title, Content } from "rbx";
import tempIcon from "../../../assets/icons/temp.png";
import tempMinIcon from "../../../assets/icons/temp_min.png";
import tempMaxIcon from "../../../assets/icons/temp_max.png";

const WeatherDayCard = (props) => {
  return (
    <Card>
      <Card.Content>
        <Media>
          <Media.Item as="figure" align="left">
            <Image.Container as="p" size={64}>
              <Image alt="64x64" src={props.card.weatherIcon} />
            </Image.Container>
          </Media.Item>
          <Media.Item>
            <Title as="p" size={4}>
              {props.card.condition} <br />
              <img src={tempIcon} height="20" width="20" alt="" />
              {props.card.temp}º <br />
              <img src={tempMinIcon} height="20" width="20" alt="" />
              {props.cards.forecast.forecastday[0].day.maxtemp_c}º
              <img src={tempMaxIcon} height="20" width="20" alt="" />
              {props.cards.forecast.forecastday[0].day.mintemp_c}º
            </Title>
          </Media.Item>
        </Media>
        <Content>
          {props.card.name} / {props.card.region}
          <br />
          <time dateTime="2016-1-1">{props.card.date}</time>
        </Content>
      </Card.Content>
    </Card>
  );
};

export default WeatherDayCard;
