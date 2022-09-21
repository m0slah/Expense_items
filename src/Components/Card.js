import React from "react";
import "./Card.css";

function Card(props) {
  const classes = 'card '+ props.className;
  return( <div className={classes}>{props.childern}</div>);
}

export default Card;
