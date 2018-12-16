import React, { Component } from "react";
import "./style.css";
import { Grid, Row, Col } from "react-bootstrap";
const ContactUs = () => {
  return (
    <div
      style={{
        color: " rgb(25, 86, 147)",
        backgroundColor: "#FFFFF3"
      }}
    >
      <div className="projectPageHeader">
        <h2 style={{ fontSize: "50px" }}> Contact Us </h2>
      </div>
      <br />
      <Grid>
        <Row>
          <Col md={8} mdOffset={2}>
            <p
              style={{
                fontSize: "20px",
                letterSpacing: " 0.03em",
                textAlign: "center"
              }}
            >
              {" "}
              For any queries, information, comments and feedback, please write
              to us on info@chishm.org
            </p>
          </Col>
        </Row>

        <br />
      </Grid>
    </div>
  );
};

export default ContactUs;
