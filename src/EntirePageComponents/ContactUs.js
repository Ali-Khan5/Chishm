import React from "react";
import "./style.css";
import { Grid, Row, Col } from "react-bootstrap";
const ContactUs = () => {
  return (
    <div
    className="projectPageHeader"
    >
      <div className="projectPageHeader">
        <h2 style={{ fontSize: "50px" }}> Contact Us </h2>
      </div>
      
      <Grid  className="projectPageHeader" fluid>
        <Row>
     
          <Col md={8} mdOffset={2}>
            <p
              style={{
                fontSize: "23px",
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

      
      </Grid>
    </div>
  );
};

export default ContactUs;
