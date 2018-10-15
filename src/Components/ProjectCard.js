import React from "react";
import { Grid, Row, Col } from "react-bootstrap";

import "./style.css";
let ProjectCard = props => {
  return (
    <Row className="ProjectCard">
      <Col md={3}>
        <img
          src={props.img}
          style={{ height: "250px", width: "100%",marginTop:'20px' }}
        />
      </Col>
      <Col md={9}>
        <h3 >{props.Title}</h3>
        <h4 >Status:  {props.Status}</h4>
        <p >
          {" "}
          <strong>Location:</strong>
          {props.Location}
        </p>
        <p >
          <strong>Total Cost :</strong>
          {props.Cost}
        </p>
        <br />
        <p >{props.Details}</p>
      </Col>
    </Row>
  );
};
export default ProjectCard;
