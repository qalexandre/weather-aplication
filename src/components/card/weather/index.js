import React from "react";
import { Card, Image, Media, Title, Content } from "rbx";
import tempIcon from "../../../assets/icons/temp.png";
import tempMinIcon from "../../../assets/icons/temp_min.png";
import tempMaxIcon from "../../../assets/icons/temp_max.png";
import "../../../styles/home.scss";

const WeatherCard = (props) => {
  return (
    <Card>
      <Card.Content>
        <Media>
          <Media.Item as="figure" align="left">
            <Image.Container as="p" size={64}>
              <Image alt="64x64" src={props.card.current.condition.icon} />
            </Image.Container>
          </Media.Item>
          <Media.Item>
            <Title as="p" size={4}>
              <Title as="p" size={4}>
                {props.card.condition} <br />
                <p>
                  <img src={tempIcon} height="15" width="15" alt="" />
                  {props.card.current.temp_c}º
                </p>
                <p className="temps">
                  <img src={tempMaxIcon} height="15" width="15" alt="" />
                  {props.card.forecast.forecastday[0].day.maxtemp_c}º
                  <img src={tempMinIcon} height="15" width="15" alt="" />
                  {props.card.forecast.forecastday[0].day.mintemp_c}º
                </p>
              </Title>
            </Title>
          </Media.Item>
        </Media>
        <Content>
          {props.card.location.name} / {props.card.location.region}
          <br />
        </Content>
      </Card.Content>
    </Card>
  );
};

export default WeatherCard;
