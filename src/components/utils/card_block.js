import React from "react";

import Card from "./card";
import Loader from "./loader";

const card_block = props => {
  const renderCards = list =>
    list ? list.map((card, i) => <Card key={i} {...card} />) : null;

  return (
    <div className="container">
      {renderCards(props.list)} <Loader loading={props.load} />
    </div>
  );
};

export default card_block;
