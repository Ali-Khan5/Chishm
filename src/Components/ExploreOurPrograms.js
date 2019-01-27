import React from "react";
import { Button,Row,Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./style.css";
let ExploreOurPrograms = props => {
  return (
    
      <Row>
        {" "}
        <h2 className="MainHeading" style={{ textAlign: "center" }}>
          Explore our Programs
        </h2>
        <Row>
          <Col sm={10} smOffset={1}>
            <p
              style={{
                textAlign: "center",
                marginTop: "0%",
                fontSize: "1.37em"
              }}
            >
              Programs are Chishm’s long term projects that aim to strengthen
              individuals such as students and teachers from deprived
              communities. Our key long-term project is the Mentoring Program
              which is the cornerstone of Chishm. Through this program, an
              individual person (mentor) is linked with an individual student
              (their mentee) in order to guide and support them through schools
              and institutions.
            </p>
          </Col>
        </Row>
        <Col md={4}>
          {" "}
          <div className="OtherProgramsPictures">
            <Link to="/mentoring">
              <img
                style={{ width: "100%" }}
                src={
                  "https://res.cloudinary.com/dcw1i97ph/image/upload/v1544551679/concepts_byhyyw.png"
                }
                alt="mentoring program link"
              />
            </Link>
          </div>
        </Col>
        <Col md={4}>
          {" "}
          <div className="OtherProgramsPictures">
            <Link to="/teacher">
              <img
                style={{ width: "100%" }}
                src={
                  "https://res.cloudinary.com/dcw1i97ph/image/upload/v1544551679/concepts_1_rdnacx.png"
                }
                alt="teacher training program link"
              />
            </Link>
          </div>
        </Col>
        <Col md={4}>
          {" "}
          <div className="OtherProgramsPictures">
            <Link to="/sole#sole">
              <img
                style={{ width: "100%" }}
                src={
                  "https://res.cloudinary.com/dcw1i97ph/image/upload/v1544551679/concepts_2_abwmay.png"
                }
                alt="sole program link"
              />
            </Link>
          </div>
        </Col>
      </Row>
    
  );
};
export default ExploreOurPrograms;
