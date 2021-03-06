import React from "react";
import "./style.css";
import { Grid, Row, Col } from "react-bootstrap";
import ProjectCARD from "../Components/ProjectCard";
import Img1 from "../media/pictures/photo3.png";
import Img2 from "../media/pictures/blind.png";
const Projects = () => {
  return (
    <div
      style={{
        color: " rgb(25, 86, 147)",
        backgroundColor: "#fffff3"
      }}
    >
      <div className="projectPageHeader">
        <h2 className="MainHeading"> Projects </h2>
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
          <Col md={4}>
            <h2 className="SecondryHeading" style={{ textAlign: "center" }}>
              What do we achieve
            </h2>
            <p
              style={{
                fontSize: "17px",
                letterSpacing: " 0.03em",
                textAlign: "center"
              }}
            >
              {" "}
              Besides our long term programs, we undertake short term projects
              which aim to strengthen the institutes catering to educate the
              underprivileged children of our society.
            </p>
          </Col>

          <Col md={4}>
            <h2 className="SecondryHeading" style={{ textAlign: "center" }}>
              Whom do we serve
            </h2>
            <p
              style={{
                fontSize: "17px",
                letterSpacing: " 0.03em",
                textAlign: "center"
              }}
            >
              {" "}
              Individuals, schools, institutions which lack the basic facilities
              to impart or promote knowledge to underprivileged children of our
              society.
            </p>
          </Col>

          <Col md={4}>
            <h2 className="SecondryHeading" style={{ textAlign: "center" }}>
              What do we do
            </h2>
            <p
              style={{
                fontSize: "17px",
                letterSpacing: " 0.03em",
                textAlign: "center"
              }}
            >
              {" "}
              Establishing libraries, laboratories, computing facilities, etc to
              supplement classroom education and complement national curriculum.
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
            <h2
              className="MainHeading"
              style={{ textAlign: "center", color: "#fffff3" }}
            >
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
              <h3 className="SecondryHeading">Become a project initiator</h3>
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
              <h3 className="SecondryHeading">Become a volunteer</h3>
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
              <h3 className="SecondryHeading">Become a sponsor</h3>
              <p>
                If you would like to financially contribute towards an ongoing
                or prospective project, please send us an email and we will get
                back to you.
              </p>
            </div>
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
              <h3 className="SecondryHeading">Spread the word</h3>
              <p>
                If you know of someone who is interested to volunteer or has a
                project idea that fits our goals, refer them to us.
              </p>
            </div>
          </Col>
        </Row>
        <br />
        <Row>
          <div className="OurprojectHeader" >
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
              img={
                " https://res.cloudinary.com/dcw1i97ph/image/upload/c_scale,h_960,w_1080/v1543080098/WhatsApp_Image_2018-10-27_at_9.08.23_PM_1_dqhdtm.jpg"
              }
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
