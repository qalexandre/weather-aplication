import { Button, Column } from "rbx";
import React, { Fragment } from "react";
import CardDay from "./card";
import "../../../styles/cards.scss";

const ListDay = (props) => {
  return (
    <Fragment>
      <Column.Group className="column-cards">
        <Column size={4}>
          <CardDay card={props.card} cardDay={props.cardsDay.index0} />
        </Column>
        <Column size={4}>
          <CardDay card={props.card} cardDay={props.cardsDay.index1} />
        </Column>
        <Column size={4}>
          <CardDay card={props.card} cardDay={props.cardsDay.index2} />
        </Column>
      </Column.Group>
      {props.indexCard > 1 ? (
        <Button color="danger" align="left" onClick={props.previousCards}>
          Voltar
        </Button>
      ) : null}
      {props.indexCard !== 22 ? (
        <Button color="primary" align="right" onClick={props.nextCards}>
          Avançar
        </Button>
      ) : null}
    </Fragment>
  );
};

export default ListDay;
