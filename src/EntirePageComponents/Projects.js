import React, { Component } from "react";
import "./style.css";
import { Grid, Row, Col } from "react-bootstrap";
import ProjectCARD from "../Components/ProjectCard";
import Img1 from "../media/pictures/photo3.png";
import Img2 from "../media/pictures/blind.png";
import Card from "../Components/Card";
const Projects = () => {
  return (
    <div
      style={{
        color: " #233067",
        backgroundColor: "#fffff3"
      }}
    >
      <div className="projectPageHeader">
        <h2 style={{ fontSize: "50px" }}> Projects </h2>
      </div>
      <br />
      <Grid>
        <Row>
          {/* <Col md={6} mdOffset={3} xs={12}>
            <Card
              heading={"What do we achieve"}
              text={`Besides our long term programs, we undertake 
        short term projects which contribute to  strengthen the 
        institutes catering to educate the underprivileged children of our society.`}
            />
          </Col> */}
          <Col md={7}>
            <h2>What do we achieve</h2>
            <p style={{ fontSize: "17px", letterSpacing: " 0.03em" }}>
              {" "}
              Besides our long term programs, we undertake short term projects
              which contribute to strengthen the institutes catering to educate
              the underprivileged children of our society.
            </p>
          </Col>
        </Row>
        <Row>
          <Col mdOffset={5} md={7}>
            <h2 style={{ marginLeft: "70px" }}>Whom do we serve</h2>
            <p
              style={{
                fontSize: "17px",
                letterSpacing: " 0.03em",
                marginLeft: "70px"
              }}
            >
              {" "}
              Local communities encountering the deficit of educational
              facilities.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={7}>
            <h2>What do we do</h2>
            <p style={{ fontSize: "17px", letterSpacing: " 0.03em" }}>
              {" "}
              Our projects include establishing libraries to supplement
              classroom education and complement national curriculum;
              establishing science laboratories to equip students with practical
              knowledge; providing multimedia and Internet based learning tools;
              and introducing creative teaching methodologies
            </p>
          </Col>
        </Row>

        <br />
        <Row>
          {/* <Col md={6} mdOffset={3} xs={12}>
            <Card
              heading={`Whom do we serve`}
              text={`
              Local communities encountering the deficit of educational facilities.
              `}
            />
          </Col> */}
        </Row>
        <br />
        <Row>
          {/* <Col md={6} mdOffset={3} xs={12}>
            <Card
              text={`Our projects include establishing libraries to supplement
               classroom education and complement national curriculum; establishing science laboratories to 
               equip students with practical knowledge; providing multimedia and Internet based learning tools; 
              and introducing creative teaching methodologies.`}
              heading={`What do we do`}
            />
          </Col> */}
        </Row>
        <br />
      </Grid>
      <Grid className="inverseStyle" fluid>
        <br />
        <Row>
          <Col>
            <h2 style={{ textAlign: "center", color: "#fffff3" }}>
              Ways to get involved
            </h2>
          </Col>
        </Row>

        <Row>
          <Col md={6} style={{ marginTop: "20px" }}>
            <div
              style={{
                backgroundColor: "#fffff3",
                borderRadius: "2px",
                textAlign: "center",
                color: "rgb(25, 86, 147)",
                padding: "30px",
                fontSize: "17px",
                boxShadow:
                  "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)"
              }}
            >
              <h3>Become a project initiator</h3>
              <p>
                If you have an interesting project idea and would like a
                platform for it, let us know and we can work on it together.
              </p>
           
            </div>
            {/* <Card
              heading={`Become a project initiator`}
              text={`If you have an interesting project idea and would 
            like a platform for it, let us know and we can work on it together.`}
            /> */}
          </Col>
          <Col md={6} style={{ marginTop: "20px" }}>
            <div
              style={{
                backgroundColor: "#fffff3",
                borderRadius: "2px",
                textAlign: "center",
                color: "rgb(25, 86, 147) ",
                padding: "30px",
                fontSize: "17px",
                boxShadow:
                  "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)"
              }}
            >
              <h3>Become a volunteer</h3>
              <p>
                If you would like to volunteer on an ongoing or prospective
                project, please send us an email and we will get in touch with
                you.
              </p>
            </div>
            {/* <Card
              heading={`Become a volunteer`}
              text={`If you would like to volunteer on an 
            ongoing or prospective project, please send us an email and we will get in touch with you.`}
            /> */}
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={6} mdOffset={3}>
            <div
              style={{
                backgroundColor: "#fffff3",
                borderRadius: "2px",
                textAlign: "center",
                color: "rgb(25, 86, 147) ",
                padding: "30px",
                fontSize: "17px",
                boxShadow:
                  "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)"
              }}
            >
              <h3>Become a sponsor</h3>
              <p>
                If you would like to financially contribute towards an ongoing
                or prospective project, please send us an email and we will get
                back to you with details on current and future projects that
                require funding.
              </p>
            </div>
            {/* <Card
              heading={`Become a sponsor`}
              text={` If you would like to financially contribute towards an
               ongoing or prospective project, please send us an email and we will get back to you with details on 
               current and future projects that require funding.`}
            /> */}
          </Col>
        </Row>
        <br />
        <Row>
          <div className="OurprojectHeader">
            <h2 style={{ fontSize: "55px" }}> Our Projects</h2>
            <h2 style={{ fontSize: "55px" }}>
              <i className="fas fa-medal" />{" "}
            </h2>
          </div>
        </Row>
        <br />
        <Row>
          <Col md={10} mdOffset={1}>
            <ProjectCARD
              Title={`Establishing Science Lab at Save The Future School`}
              Status={` Completed (September 2017)`}
              Location={`Lyari, Karachi`}
              Cost={`PKR 70,000`}
              Details={`Save The Future School is run by another 
              nonprofit organization. In 2018, the school started Matric classes for which a science 
              lab was necessary. We provided technical and 
              financial expertise to setup a lab that caters for multiple groups of students`}
              img={Img1}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={10} mdOffset={1}>
            <ProjectCARD
              Title={`Nishtarabad School for Blind
             
              `}
              Status={` Status: Completed (October 2016)`}
              Location={`Peshawar`}
              Cost={`PKR 243,500`}
              Details={`Nishtarabad school for blind is a government run 
              primary school in Peshawar with over 80 students. The school was 
              short on stationery items for blind thus hindering the process of 
              learning. Our scope was to provide items such as Braille paper, 
              frames, and math slates for each student and surplus for future or replacement`}
              img={Img2}
            />
          </Col>
        </Row>
        <br />
      </Grid>
    </div>
  );
};

export default Projects;
