import React from "react";
import { Card, Image, Media, Title, Content } from "rbx";
import Moment from "moment";
import tempIcon from "../../../assets/icons/temp.png";
import tempMinIcon from "../../../assets/icons/temp_min.png";
import tempMaxIcon from "../../../assets/icons/temp_max.png";

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
                <img src={tempIcon} height="20" width="20" alt="" />
                {props.card.current.temp_c}º <br />
                <img src={tempMaxIcon} height="20" width="20" alt="" />
                {props.card.forecast.forecastday[0].day.maxtemp_c}º
                <img src={tempMinIcon} height="20" width="20" alt="" />
                {props.card.forecast.forecastday[0].day.mintemp_c}º
              </Title>{" "}
            </Title>
          </Media.Item>
        </Media>
        <Content>
          {props.card.location.name} / {props.card.location.region}
          <br />
          <time dateTime="2016-1-1">
            {Moment(props.card.location.localtime).format("HH:MM")}
          </time>
        </Content>
      </Card.Content>
    </Card>
  );
};

export default WeatherCard;
