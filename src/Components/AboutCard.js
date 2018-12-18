import React from "react";
import { Col } from "react-bootstrap";
import "./style.css";
let ProgramsCard = props => {
  return (
    // <div className="SecondryCard" style={{backgroundColor:'#F0F0FC'}}>
    //   {props.heading ? <h2 style={{color:'#012382 !important'}}>{props.heading}</h2> : null}
    //   {props.text ? <p style={{fontSize:'1.1em'}}>{props.text}</p> : null}
    // </div>

    <Col md={6} >
      
        <Col md={3} >
          <img
            style={{ borderRadius: "100px" }}
            src={props.source}
            height={185} width={185}
            alt='educating children'
          />
        </Col>
        <Col md={8} mdOffset={1}>
          <h2>{props.heading}</h2>
          <p style={{ fontSize: "17px" }}>{props.para}</p>
        </Col>
   
    </Col>
  );
};
export default ProgramsCard;
