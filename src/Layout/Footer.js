import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footerShadow"
      style={{ backgroundColor: "#f5f5f5", padding: "15px", color: "#000000" }}
    >
      <Grid>
        <Row>
          <Col md={12}>
            <center>
              
              <h3>info@chishm.org</h3>

         
              <h4 style={{ color: "rgb(25, 86, 147)" }}>Social Links</h4>

              <span style={{ fontSize: "2.4em", color: "#3b5998" }}>
                <i className="fab fa-facebook-square" />
              </span>
              <span style={{ fontSize: "2.4em", color: "#38A1F3" }}>
                {" "}
                <i className="fab fa-twitter-square" />
              </span>
              <h5>
              All content displayed on this website belong to Chishm and their partners
              </h5>
            </center>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};
export default Footer;
