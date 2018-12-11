import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import "./style.css";
import Program1 from "../media/pictures/Program_1.PNG";
import Program2 from "../media/pictures/Program_2.PNG";
import Program3 from "../media/pictures/Program_3.PNG";
import Card from "../Components/Card";

const Programs = props => {
  return (
    <div className="TecherSection">
      <Grid
        fluid
        style={{
          color: " rgb(25, 86, 147)",
          backgroundColor: "#fffff3"
        }}
      >
        <section>
         
          <Row className="AboutMESPACING">
            <Col md={7}>
              <div className="ProgramDetailsAlignmentWithPictureLeft">
                <h2 style={{ fontSize: "35px" }}>Teacher Training Program</h2>
                <p style={{ fontSize: "18px", letterSpacing: "0.03em" }}>
                  {" "}
                  Apart from just giving lectures, a good teacher can really
                  instill the love for learning and instigate the curiosity of
                  understanding the world in students. Moreover the teachers
                  play a pivotal role by becoming early role models for the
                  students thus giving inspirations and aspirations for their
                  future. At Chishm, we believe that teachers are the most
                  important resource a school has. Therefore, we incepted the
                  "Teacher Training Program" which is aimed at equipping the
                  teachers with latest teaching methods that will help them
                  shape children into leaders. .
                </p>
              </div>
            </Col>
            <Col md={5}>
              <img
                className="aboutMeIMGheight"
                src="https://res.cloudinary.com/dcw1i97ph/image/upload/v1544555053/IMG_0326_p0nodx.jpg"
              />
            </Col>
          </Row>
          <Row className="AboutMESPACING">
            <Col md={5} xsHidden smHidden>
              <img
                className="displayIMGheight"
                src="https://res.cloudinary.com/dcw1i97ph/image/upload/v1544555044/IMG_0339_zkcaiv.jpg"
              />
            </Col>
            <Col md={7}>
              <div className="ProgramDetailsAlignmentWithPictureRight">
                <h2 style={{ fontSize: "35px" }}>What do we achieve</h2>
                <p style={{ fontSize: "18px", letterSpacing: "0.03em" }}>
                  {" "}
                  Teachers equipped with necessary pedagogic skills and basics
                  of child psychology; skills to articulate course content
                  effectively and creatively; skills to conduct classes in a
                  more interactive and engaging way that promotes critical
                  thinking among the students; skills to integrate basic social
                  topics such as ethics and civic responsibility within the
                  course content.
                </p>
              </div>
            </Col>
            <Col md={5} mdHidden lgHidden>
              <img
                className="displayIMGheight"
                src="https://res.cloudinary.com/dcw1i97ph/image/upload/v1544555044/IMG_0339_zkcaiv.jpg"
              />
            </Col>
          </Row>
          <Row className="AboutMESPACING">
            <Col md={7}>
              <div className="ProgramDetailsAlignmentWithPictureLeft">
                <h2 style={{ fontSize: "35px" }}>Whom do we serve</h2>
                <p style={{ fontSize: "18px", letterSpacing: "0.03em" }}>
                  {" "}
                  Chishm’s Teacher Training program is especially aimed for the
                  teachers employed in community schools catering to students
                  from underprivileged communities. walks of life to engage with
                  these children for the betterment of our society.
                </p>
              </div>
            </Col>
            <Col md={5}>
              <img
                className="displayIMGheight"
                src="https://res.cloudinary.com/dcw1i97ph/image/upload/v1544555045/IMG_0336_fusqkp.jpg"
              />
            </Col>
          </Row>
          <Row className="AboutMESPACING">
            <Col md={5} xsHidden smHidden>
              <img
                className="displayIMGheight"
                src="https://res.cloudinary.com/dcw1i97ph/image/upload/v1544555044/IMG_0339_zkcaiv.jpg"
              />
            </Col>
            <Col md={7}>
              <div className="ProgramDetailsAlignmentWithPictureRight">
                <h2 style={{ fontSize: "35px" }}>What do we do: </h2>
                <p style={{ fontSize: "18px", letterSpacing: "0.03em" }}>
                  {" "}
                  We introduce our in-house Self Organized Learning Environment
                  (SOLE) based teacher training program to schools through our
                  local members and volunteers who train one or two teachers on
                  how to conduct a SOLE session. These teachers then become SOLE
                  coaches and mediate the teacher training program within their
                  school. In each school, training can last for up to 6 months
                  with one SOLE session per week
                </p>
              </div>
            </Col>
            <Col md={5} mdHidden lgHidden>
              <img
                className="displayIMGheight"
                src="https://res.cloudinary.com/dcw1i97ph/image/upload/v1544555044/IMG_0339_zkcaiv.jpg"
              />
            </Col>
          </Row>
          <br />
        </section>
      </Grid>
      <div className="TecherSection">
        <Grid>
         <hr/>
          <h2 style={{ textAlign: "center" }}>Ways to get involved</h2>
          <hr/>
          <Row>
            <Col md={6}>
              <h3>
                <i
                  style={{ fontSize: "2.4em" }}
                  className="fas fa-user-graduate"
                />{" "}
                Become a teacher trainer:
              </h3>
              <p style={{ textAlign: "justify",fontSize:'17px' }}>
                If you are coming from pedagogy background or have any
                experience in child development and psychology please send us an
                email. We will make sure that your valuable knowledge is
                imparted to impassioned teachers looking for your support.
              </p>
            </Col>
            <Col md={6}>
              <h3>
                <i
                  style={{ fontSize: "2.3em" }}
                  className="fas fa-chalkboard-teacher"
                />{" "}
                Sponsor a teacher for training course :
              </h3>
              <p style={{ textAlign: "justify",fontSize:'17px' }}>
                We are sending selected teachers to recognised teacher training
                institutes for short and long term courses. You have an
                opportunity to sponsor a teacher for such a course and leave a
                long lasting impact on generations to come. Please get in touch
                with us via email to get further details.
              </p>
            </Col>
            <Col md={12}>
              <h3>
                {" "}
                <i style={{ fontSize: "2.3em" }} className="fas fa-pen-fancy" />
                Become a strategic program planner and developer:
              </h3>
              <p style={{ textAlign: "justify",fontSize:'17px' }}>
                The world we live in now is seeing an exponential growth in
                areas such as science, technology, health, economics, politics,
                etc. With new information and discoveries coming out every day,
                our current inflexible way of teaching will become obsolete. We
                therefore need to adapt our teaching methods that, apart from
                equipping students with basic knowledge, equips them with the
                ability to acquire up-to-date knowledge through different
                resources independently and instills in them critical and
                creative thinking skills. We are therefore constantly updating
                teacher training program. If you would like to get involved in
                planning and developing this program further then please get in
                touch via email
              </p>
            </Col>
          </Row>
          <Row>
            {" "}
            <h2 style={{ textAlign: "center" }} id="mentor">
              {" "}
              Programs{" "}
            </h2>
            <Col sm={10} smOffset={1}>
              <p
                style={{
                  textAlign: "justify",
                  marginTop: "5%",
                  fontSize: "1.4em"
                }}
              >
                Programs are Chishm’s long term projects that aim to strengthen
                individuals such as students and teachers from deprived
                communities. Our key long-term project is the Mentoring Program
                which is the cornerstone of Chishm. Through this program, an
                individual person (mentor) is linked with an individual student
                (their mentee) in order to guide and support them through
                schools and institutions.
              </p>
            </Col>
          </Row>
          <h2 style={{ textAlign: "center" }}>Explore our Programs</h2>
          <Row>
            <Col md={4}>
              {/* <h2 className="board-game">Mentoring Program</h2>   */}
              <img
                style={{ width: "100%", marginTop: "10px" }}
                src={
                  "https://res.cloudinary.com/dcw1i97ph/image/upload/v1544551679/concepts_byhyyw.png"
                }
              />
              {/* <h2
              style={{
                minHeight: "100px",
                padding: "49px",
                backgroundColor: "#233067 ",
                color: "#F0F0FC",
                borderRadius: "5px",
                textAlign: "center"
              }}
            >
              Mentoring Program{" "}
            </h2> */}
            </Col>
            <Col md={4}>
              {/* <h2 >Teacher Training Program</h2>  */}
              {/* <img
              style={{ width: "100%", minHeight: "200px", maxHeight: "205px" }}
              src={Program2}
            /> */}
              <img
                style={{ width: "100%", marginTop: "10px" }}
                // style={{ width: "100%", minHeight: "200px", maxHeight: "205px" }}
                src={
                  "https://res.cloudinary.com/dcw1i97ph/image/upload/v1544551679/concepts_1_rdnacx.png"
                }
              />
              {/* <h2
              style={{
                minHeight: "100px",
                padding: "35px",
                backgroundColor: "#233067 ",
                color: "#F0F0FC",
                borderRadius: "5px",
                textAlign: "center"
              }}
            >
              Teacher Training Program
            </h2> */}
            </Col>
            <Col md={4}>
              {/* <h2 style={{ textAlign: "center" }} className="retro">SOLE</h2>  */}
              {/* <img
              style={{ width: "100%", minHeight: "200px", maxHeight: "205px" }}
              src={Program3}
            /> */}

              <img
                className="text-center"
                style={{ width: "100%", marginTop: "10px" }}
                // style={{ width: "100%", minHeight: "200px", maxHeight: "205px" }}

                src={
                  "https://res.cloudinary.com/dcw1i97ph/image/upload/v1544551679/concepts_2_abwmay.png"
                }
              />

              {/* <h2
              style={{
                minHeight: "138px",
                padding: "40px",
                backgroundColor: "#233067 ",
                color: "#F0F0FC",
                borderRadius: "5px",
                textAlign: "center"
              }}
            >
              SOLE
            </h2> */}
            </Col>
          </Row>
          <br />
          <br />
        </Grid>
      </div>
    </div>
  );
};
export default Programs;
