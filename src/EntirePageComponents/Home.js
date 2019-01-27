import React, { Component } from "react";
import { Carousel, Grid, Row, Col } from "react-bootstrap";
import HomeCarousal from "../Components/HomeCarousal";
import Img1 from "./../media/pictures/saad.jpg";
import Img2 from "./../media/pictures/sadia.png";
import Img3 from "./../media/pictures/faraz.jpg";

class App extends Component {
  render() {
    return (
      <div>
        <HomeCarousal />

        {/* <About />
        <br />
        <Testimonials /> <br /> */}
        <div className="aboutSectionHomePage" fluid="true">
          <Grid fluid>
            <Row>
              <Col mdOffset={1} md={8}>
                <h2 className="MainHeading">
                  {" "}
                  <span style={{ borderBottom: "3px solid rgb(25, 86, 147)" }}>
                    What is Chishm?{" "}
                  </span>{" "}
                </h2>
                <hr />
                <p>
                  Chishm is a platform to support education amongst the
                  underprivileged youth of Pakistan by bridging them to
                  privileged people. We bring together like-minded people from
                  different walks of life to share their ideas on how to
                  increase accessibility and quality of formal education for
                  underprivileged communities. Through our local and global
                  support, we are able to translate these ideas into reality
                </p>
              </Col>
              <Col md={2}>
                {/* <img src={'https://res.cloudinary.com/dcw1i97ph/image/upload/c_scale,w_800/v1543042842/WhatsApp_Image_2018-10-27_at_10.05.18_PM_gvqgww.jpg'} 
              className=" homeTrianglePic "/> */}
              </Col>
            </Row>
          </Grid>
        </div>

        <div className="ourImpactHomePage">
          <Grid fluid>
            <Row>
              <Col md={4}>
                <div className="SecondryCard">
                  <center>
                    <img
                      className="homeHowYouCanHelp"
                      src={
                        "https://res.cloudinary.com/dcw1i97ph/image/upload/v1544357019/Untitled_design_3_rvmrrq.png"
                      }
                      alt='teacher giving a leacture'
                    />
                    <h2 className="SecondryHeading">
                      <span
                        style={{ borderBottom: "3px solid rgb(25, 86, 147)" }}
                      >
                        {" "}
                        What We Do{" "}
                      </span>
                    </h2>
                    <p className="" style={{ fontSize: "18px" }}>
                      Provide mentors for weak underprivileged students /
                      at-risk youth, enrol street children into schools,
                      implement creative learning tools, train teachers,
                      strengthen educational institutes.
                    </p>
                  </center>
                </div>
              </Col>
              <Col md={4}>
                <div className="SecondryCard">
                  <center>
                    <img
                      className="homeHowYouCanHelp"
                      src={
                        " https://res.cloudinary.com/dcw1i97ph/image/upload/c_scale,h_960,w_1080/v1543080098/WhatsApp_Image_2018-10-27_at_9.08.23_PM_1_dqhdtm.jpg"
                      }
                      alt="students doing an experiment"
                    />
                    <h2 className="SecondryHeading">
                      <span
                        style={{ borderBottom: "3px solid rgb(25, 86, 147)" }}
                      >
                        {" "}
                        Our Impact{" "}
                      </span>
                    </h2>
                    <ul style={{ fontSize: "17px" }}>
                      <li style={{ listStyleType: "none" }}>
                        {" "}
                        <i className="far fa-star" /> <strong>4</strong> Mentors
                        and mentees enrolled in our mentoring program.
                      </li>
                      <li style={{ listStyleType: "none" }}>
                        <i className="far fa-star" /> <strong>1</strong> Teacher
                        enrolled in formal teacher training course.
                      </li>
                      <li style={{ listStyleType: "none" }}>
                        <i className="far fa-star" /> <strong>1</strong> school
                        supported through various projects.
                      </li>
                    </ul>
                  </center>
                </div>
              </Col>

              <Col md={4}>
                <div className="SecondryCard">
                  <center>
                    <img
                      className="homeHowYouCanHelp"
                      src={
                        "https://res.cloudinary.com/dcw1i97ph/image/upload/h_960,w_1080/v1543157557/WhatsApp_Image_2018-10-27_at_9.21.26_PM_1_dxhyhc.jpg"
                      }
                      alt="mentor and mentee talking"
                    />
                    <h2 className="SecondryHeading">
                      <span
                        style={{ borderBottom: "3px solid rgb(25, 86, 147)" }}
                      >
                        {" "}
                        How you can help{" "}
                      </span>
                    </h2>
                    <p className="" style={{ fontSize: "18px" }}>
                      Sponsor a child, become a mentor, volunteer in our
                      projects, refer to us children who need support, refer us
                      to people sharing similar vision, help improve our method,
                      share our mission with the world
                    </p>
                  </center>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
        <div fluid="true" className="testimonals">
          <Grid className="SHADOW" fluid>
            <Row className="show-grid">
              <Col
                md={12}
                style={{
                  height: "100%",
                  backgroundColor: "#fffff3",
                  color: "rgb(25, 86, 147)",
                  borderRadius: "2px"
                }}
              >
                {" "}
                <Col mdOffset={1}>
                  <br />
                  <h2 className="MainHeading">
                    {" "}
                    <span
                      style={{ borderBottom: "3px solid rgb(25, 86, 147)" }}
                    >
                      Testimonials{" "}
                    </span>{" "}
                  </h2>
                  <hr />
                </Col>
                <Carousel controls={false}>
                  <Carousel.Item className="CarousalPersonStyling">
                    <center>
                      <img className="testimonalPic" src={Img1} alt="Saad's " />
                      <p
                        className="TestimonialPersonParagrapghStyling"
                        style={{ color: "rgb(25, 86, 147)", fontSize: "18px" }}
                      >
                        <q>
                          {" "}
                          It was fun when I started giving my mentee topics to
                          think on and then we both would discuss our opinions
                          in the next meeting until he started giving me topics
                          to think about - then it became exciting and
                          challenging. We both have learnt so much together
                        </q>
                      </p>
                      <h4>
                        <strong>Saad Idrees </strong>
                        <br />
                        Mentor
                      </h4>
                      <br />
                    </center>
                  </Carousel.Item>
                  <Carousel.Item className="CarousalPersonStyling">
                    <center>
                      <img
                        className="testimonalPic"
                        src={Img2}
                        alt="Sadia's "
                      />
                      <p
                        className="TestimonialPersonParagrapghStyling"
                        style={{ color: "rgb(25, 86, 147)", fontSize: "18px" }}
                      >
                        <q>
                          {" "}
                          I feel lucky to be the mentor of a very intelligent
                          girl. Her opinions on different topics are food for
                          thought. Her ambitious nature and curiosity never
                          cease to amaze me and it is a journey that continues
                          to be enlightening for both of us
                        </q>
                      </p>
                      <h4>
                        <strong> Sadia Khan </strong>
                        <br />
                        Mentor
                      </h4>
                      <br />
                    </center>
                  </Carousel.Item>
                  <Carousel.Item className="CarousalPersonStyling">
                    <center>
                      <img
                        className="testimonalPic"
                        src={Img3}
                        alt="Faraz Arshad's "
                      />
                      <p
                        className="TestimonialPersonParagrapghStyling"
                        style={{ color: "rgb(25, 86, 147)", fontSize: "18px" }}
                      >
                        <q>
                          {" "}
                          I believe that if you are privileged, then it becomes
                          your duty to share it with the society. At Chishm we
                          share the privilege of being educated with communities
                          struggling for survival with the conviction that one
                          day this would change their fate. On behalf of this
                          institution I invite you all to join hands with us and
                          create the wind of change
                        </q>
                      </p>
                      <h4>
                        <strong>Faraz Arshad</strong> <br />
                        Member
                      </h4>
                      <br />
                    </center>
                  </Carousel.Item>
                </Carousel>
                <br />
                <br />
              </Col>
            </Row>
          </Grid>
         
        </div>
      </div>
    );
  }
}

export default App;
