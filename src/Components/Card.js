import React from "react";
import { Button } from "react-bootstrap";
import "./style.css";
let Cardd = props => {
  return (
    <div>
      {props.colorScheme === "prime" ? (
        <div className="cardBorder">
          {props.text ? <p>{props.text}</p> : null}
        </div>
      ) : (
        <div className="SecondryCard ">
          {props.heading ? <h3>{props.heading}</h3> : null}
          {props.text ? <p>{props.text}</p> : null}
          {props.buttonText ? (
            <Button bsStyle="primary"> {props.buttonText} </Button>
          ) : null}
        </div>
      )}
    </div>
  );
};
export default Cardd;
