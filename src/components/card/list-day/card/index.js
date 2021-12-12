import { Card, Content, Media, Title, Image } from "rbx";
import React, { Fragment } from "react";
import Moment from "moment";
import tempIcon from "../../../../assets/icons/temp.png";

const CardDay = (props) => {
  return (
    <Fragment>
      <Card size={7}>
        <Card.Content>
          <Media>
            <Media.Item as="figure">
              <Image.Container as="p" size={64}>
                <Image alt="64x64" src={props.cardDay.condition.icon} />
              </Image.Container>
            </Media.Item>

            <Media.Item>
              <Title as="p" size={6}>
                {props.cardDay.condition.text} <br />
                <img src={tempIcon} height="20" width="20" alt="" />
                {props.cardDay.temp_c}º
              </Title>
              <Content>
                {props.card.location.name} / {props.card.location.region}
                <br />
                <time>{Moment(props.cardDay.time).format("HH:00")}</time>
              </Content>
            </Media.Item>
          </Media>
        </Card.Content>
      </Card>
      <br />
    </Fragment>
  );
};

export default CardDay;
