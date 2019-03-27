import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import "./style.css";
import ScrollToTopOnMount from "../Components/scrollup";
import ExploreOurPrograms from "../Components/ExploreOurPrograms";
import { Link } from "react-router-dom";
const Programs = props => {
  return (
    <div className="MemberSection">
      <Grid
        fluid
        style={{
          color: " rgb(25, 86, 147)",
          backgroundColor: "#fffff3"
        }}
      >
        <ScrollToTopOnMount />
        <section>
        <Row className="AboutMESPACING">
            <Col md={7} xsHidden smHidden>
              <div className="ProgramDetailsAlignmentWithPictureLeft">
                <h2 style={{ fontSize: "35px" }}>SOLE</h2>
                <p style={{ fontSize: "18px", letterSpacing: "0.03em" }}>
                  {" "}
                  Self Organized Learning Environment (SOLE) is an enquiry based
                  learning approach where the teachers encourage their class to
                  work as a community to answer questions using internet, books
                  and other resources. Students are given a big question related
                  to a topic and are challenged to find its answer in groups.
                  The groups present answers back to the class at the end of the
                  session.
                </p>
              </div>
            </Col>
            <Col md={5} xsHidden smHidden>
              <img
                className="displayIMGheight "
                src="https://res.cloudinary.com/dcw1i97ph/image/upload/c_scale,h_720,w_1080/v1546076647/IMG_0452_nstoec.jpg"
              /> 
            </Col>
          </Row>
          <Row>
          <Col xs={12} sm={12} mdHidden lgHidden>
            <img
              className="programPageMainImg"
              src={
                "https://res.cloudinary.com/dcw1i97ph/image/upload/c_scale,h_720,w_1080/v1546076647/IMG_0452_nstoec.jpg"
              }
            />
            </Col>
          </Row>
          <Row>
            <Col md={12} mdHidden lgHidden>
              <div className="text-center">
                <h2  style={{  fontSize: "40px" }}>SOLE</h2>
                <p
                  style={{
                    fontSize: "18px",
                    letterSpacing: "0.01em",
                    marginTop: "15px"
                  }}
                >
                  {" "}
                  Self Organized Learning Environment (SOLE) is an enquiry based
                  learning approach where the teachers encourage their class to
                  work as a community to answer questions using internet, books
                  and other resources. Students are given a big question related
                  to a topic and are challenged to find its answer in groups.
                  The groups present answers back to the class at the end of the
                  session.
                </p>
              </div>
            </Col>
          </Row>
          {/* <Row className="AboutMESPACING">
            <Col md={5} xsHidden smHidden>
              <img
                className="aboutMeIMGheight solePictures"
                src="https://res.cloudinary.com/dcw1i97ph/image/upload/v1544557897/IMG_0186_opt_ebnmqy.jpg"
              />
            </Col>
            <Col md={7}>
              <div className="ProgramDetailsAlignmentWithPictureRight">
                <h2 style={{ fontSize: "35px" }}>What do we achieve</h2>
                <p style={{ fontSize: "18px", letterSpacing: "0.03em" }}>
                  {" "}
                  Using SOLE, teachers get better at asking big questions,
                  become more in tune with interests of students, cultivate a
                  learner-driven culture of curiosity, feel connected to
                  students. Students, in addition to gaining knowledge, improve
                  reading comprehension, establish creativity and problem
                  solving skills, develop the habits of lifelong learning,
                  strengthen interpersonal and presentation skills, get better
                  at integrating knowledge. Such methods help in making students
                  as leaders rather than followers.
                </p>
              </div>
            </Col>
            <Col md={5} mdHidden lgHidden>
              <img
                className="displayIMGheight solePictures"
                src="https://res.cloudinary.com/dcw1i97ph/image/upload/v1544557897/IMG_0186_opt_ebnmqy.jpg"
              />
            </Col>
          </Row>
          <Row className="AboutMESPACING">
            <Col md={7}>
              <div className="ProgramDetailsAlignmentWithPictureLeft">
                <h2 style={{ fontSize: "35px" }}>Whom do we serve</h2>
                <p style={{ fontSize: "18px", letterSpacing: "0.03em" }}>
                  {" "}
                  Local community schools providing education to underprivileged
                  children of our society.
                </p>
              </div>
            </Col>
            <Col md={5}>
              <img
                className="displayIMGheight solePictures"
                src="https://res.cloudinary.com/dcw1i97ph/image/upload/v1544557933/IMG_0194_opt_wnmr4e.jpg"
              /> 
            </Col>
          </Row>
          <Row className="AboutMESPACING">
            <Col md={5} xsHidden smHidden>
              <img
                className="displayIMGheight solePictures"
                src="https://res.cloudinary.com/dcw1i97ph/image/upload/v1544557996/IMG_0202_opt_ldkulw.jpg"
              />
            </Col>
            <Col md={7}>
              <div className="ProgramDetailsAlignmentWithPictureRight">
                <h2 >What do we do: </h2>
                <p style={{ fontSize: "18px", letterSpacing: "0.03em",marginTop:'-10px' }}>
                  {" "}
                  With our local experts and consultants we develop SOLE program
                  based on local curriculum and additional subjects such as
                  ethics and civil responsibility; we fulfill prerequisites for
                  implementing SOLE such as training teachers and students in
                  basics of computing and web based knowledge acquisition,
                  equipping the school with computers, other necessary
                  infrastructure and furnishing a library. We then introduce
                  SOLE as extra classes in our target schools with the aim of
                  shifting to such methods completely. For each school this is a
                  long term project as we introduce this methodology slowly and
                  continuously monitor the progress.
                </p>
              </div>
            </Col>
            <Col md={5} mdHidden lgHidden>
              <img
                className="displayIMGheight solePictures"
                src="https://res.cloudinary.com/dcw1i97ph/image/upload/v1544557996/IMG_0202_opt_ldkulw.jpg"
              />
            </Col>
          </Row> */}{" "}
          <br />
          <h2 style={{ textAlign: "center" }}  className="MainHeading" >
            <b>Our Program</b> in a Nutshell
          </h2>
          <hr />
          <Row>
            <Col md={4}>
              <div
                style={{
                  textAlign: "center",
                  // padding: "10px",
                  fontSize: "16px",
                  marginTop: "10px"
                }}
              >
                <h3 className="SecondryHeading"> What do we achieve</h3>
                <p>
                  Using SOLE, teachers get better at asking big questions,
                  become more in tune with interests of students, cultivate a
                  learner-driven culture of curiosity, feel connected to
                  students. Students gain knowledge, establish creativity and
                  problem solving skills, develop the habits of lifelong
                  learning, strengthen interpersonal and presentation skills,
                  get better at integrating knowledge. Such methods help in
                  making students as leaders rather than followers.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div
                style={{
                  textAlign: "center",
                  // padding: "10px",
                  fontSize: "16px",
                  marginTop: "10px"
                }}
              >
                <h3 className="SecondryHeading"> Whom do we serve</h3>
                <p>
                  We especially target local community schools providing
                  education to underprivileged children of our society. We
                  introduce SOLE as extra classes in our target schools with the
                  aim of shifting to such a teaching methods completely. We
                  encourage our mentors and volunteers to also use such methods
                  when tutoring or imparting knowledge to others. The content
                  can also be used freely by teachers and mentors belonging to
                  other institutions.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div
                style={{
                  textAlign: "center",
                  // padding: "10px",
                  fontSize: "16px",
                  marginTop: "10px"
                }}
              >
                <h3 className="SecondryHeading">What do we do</h3>
                <p>
                  Together with our pool of experts and various contributors
                  from all walks of life, we develop SOLE program based on local
                  curriculum and additional subjects such as character
                  education; we fulfill prerequisites for implementing SOLE such
                  as training teachers and students in basics of web based
                  knowledge acquisition, equipping the school with computers and
                  other necessary infrastructure.
                </p>
              </div>
            </Col>
          </Row>
          <br />
        </section>
      </Grid>
      <div>
        <Grid>
          <h2 className="MainHeading" style={{ textAlign: "center" }}>
            Ways to Get Involved
          </h2>
          <Row>
            <Col md={6}>
              <h3 className="SecondryHeading">
                {" "}
                <i
                  style={{ fontSize: "2em" }}
                  className="fas fa-user-ninja"
                />{" "}
                Become a SOLE coach:
              </h3>
              <p style={{ fontSize: "16.6px" }}>
                We are always on a look out for people who are willing to go to
                our target schools and coach the teachers and students in how to
                use SOLE and how to browse through information from different
                resources. This also requires helping the teacher conduct
                initial SOLE classes for different subjects. Our team will of
                course assist and guide you and you can use our SOLE toolkit as
                a starting guide. Send us an email if you would like more
                information and would like to be part of it.
              </p>
            </Col>
            <Col md={6}>
              <h3 className="SecondryHeading">
                {" "}
                <i style={{ fontSize: "2em" }} className="fas fa-laptop" />{" "}
                Become a computer trainer:
              </h3>
              <p style={{ fontSize: "16.6px" }}>
                An important prerequisite of SOLE is that teachers and students
                are aware of the basics of computer use. This would require to
                teach them how to start computer, how to use a word document,
                how to acquire information through internet, educate them on the
                positive and negative sides of computer and internet, setting up
                computers and projector, etc. Send us an email if you would like
                more information and would like to be part of it.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <h3 className="SecondryHeading">
                {" "}
                <i style={{ fontSize: "2em" }} className="fas fa-edit" />
                Become a SOLE content creator:
              </h3>
              <p
                className="TeacherParagrapghAlign"
                style={{ fontSize: "16.6px" }}
              >
                The key of SOLE is asking students big questions related to a
                topic of interest that would stimulate their thinking from
                various perspectives. You can play a part in designing such
                questions for the local curriculum and different classes. In
                addition, we introduce some extra-curricular topics like
                character education. Send us an email if you would like more
                information or would like to be part of this.
              </p>
            </Col>
            <Col md={6}>
              <h3 className="SecondryHeading">
                {" "}
                <i
                  style={{ fontSize: "2em" }}
                  className="fas fa-file-contract"
                />{" "}
                Become a strategic planner and developer:
              </h3>
              <p style={{ fontSize: "16px" }}>
                The word we live in now is seeing an exponential growth in areas
                such as science, technology, health, economics, politics, etc.
                With new information and discoveries coming out every day, our
                current inflexible way of teaching will become obsolete. We
                therefore need to continuously adapt our teaching methods,
                curriculum, etc. We are therefore constantly updating our SOLE
                program. If you would like to get involved in planning and
                developing this program further then please get in touch via
                email.
              </p>
            </Col>
            <Col md={6}>
              <h3 className="SecondryHeading">
                {" "}
                <i className="fas fa-box" style={{ fontSize: "2em" }} />{" "}
                Sponsor equipment to implement SOLE:
              </h3>
              <p style={{ fontSize: "16.6px" }}>
                You can contribute to the purchase of laptops, projector and
                books which shall be accessible to our teachers and students to
                practice SOLE. Send us an email if you are interested and we
                will get back to you with the details.
              </p>
            </Col>
          </Row>
          <br />
        </Grid>
        <Grid
          fluid
          style={{
            color: " rgb(25, 86, 147)",
            backgroundColor: "#fffff3"
          }}
        >
          <ExploreOurPrograms />
          <br />
        </Grid>
      </div>
    </div>
  );
};
export default Programs;
