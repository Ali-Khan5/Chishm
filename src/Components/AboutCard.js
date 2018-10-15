import React from "react";
// import { Button } from "react-bootstrap";
import { Grid, Row, Col } from "react-bootstrap";
import "./style.css";
let AboutCardd = props => {
  return (
    // <div className="SecondryCard" style={{backgroundColor:'#F0F0FC'}}>
    //   {props.heading ? <h2 style={{color:'#012382 !important'}}>{props.heading}</h2> : null}
    //   {props.text ? <p style={{fontSize:'1.1em'}}>{props.text}</p> : null}
    // </div>
    <Row className="AboutMeCard">
      <Col
        md={12} sm={12} 
         style={{
          color: "#fffff3",
          backgroundColor: "#233067",
          // width: "100%",
          height: "100%",
          textAlign:'center'
         
        }}
      >
        {props.heading ? (
          <h2 style={{ fontSize: "2.8em" }}>{props.heading}</h2>
        ) : null}
      </Col>
      <Col
        md={12}
        xs={12} 
         style={{
          backgroundColor: "#fffff3",
          padding: "25px"
        }}
      >
        {props.text ? (
          <p style={{ fontSize: "1.2em", textAlign: "justify" }}>{props.text}</p>
        ) : null}
      </Col>
    </Row>
  );
};
export default AboutCardd;
