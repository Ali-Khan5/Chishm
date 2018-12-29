import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import "./style.css";
import ScrollToTopOnMount from "../Components/scrollup";
import { Link } from "react-router-dom";
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
        <ScrollToTopOnMount />
        <section>
          <Row>
            <img
              className="programPageMainImg"
              src={
                "https://res.cloudinary.com/dcw1i97ph/image/upload/v1543157325/WhatsApp_Image_2018-11-13_at_11.54.57_AM_vvqmbx.jpg"
              }
            />
          </Row>

          <Row>
            <Col md={12}>
              <div className="text-center">
                <h2 style={{ fontSize: "35px" }}>Teacher Training Program</h2>
                <p
                  style={{
                    fontSize: "18px",
                    letterSpacing: "0.01em",
                    marginTop: "15px"
                  }}
                >
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
                  shape children into leaders.
                </p>
              </div>
            </Col>
          </Row>
          {/* <Row className="AboutMESPACING">
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
          </Row> */}
          {/* <Row className="AboutMESPACING">
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
          </Row> */}

          <h2 style={{ textAlign: "center", fontSize: "45px" }}>
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
                <h3> What do we achieve</h3>
                <p>
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
            <Col md={4}>
              <div
                style={{
                  textAlign: "center",
                  // padding: "10px",
                  fontSize: "16px",
                  marginTop: "10px"
                }}
              >
                <h3> Whom do we serve</h3>
                <p>
                  Chishm’s Teacher Training program is especially aimed for the
                  teachers employed in local community schools catering to
                  students from underprivileged communities; volunteers and
                  mentors who are interested in teaching at such schools. The
                  content can also be used freely by teachers from any
                  institution.
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
                <h3>What do we do</h3>
                <p>
                  We introduce our in-house Self Organized Learning Environment
                  (SOLE) based teacher training program to schools through our
                  local members who train one or two teachers on how to conduct
                  a SOLE session. These teachers then become SOLE coaches and
                  mediate the teacher training program within their school. This
                  training becomes a continuing process within the school.
                </p>
              </div>
            </Col>
          </Row>

          <br />
        </section>
      </Grid>
      <div className="TecherSection">
        <Grid>
          <h2 style={{ textAlign: "center" }}>Ways to get involved</h2>
          <hr />
          <Row>
            <Col md={6}>
              <h3>
                <i
                  style={{ fontSize: "2.4em" }}
                  className="fas fa-user-graduate"
                />{" "}
                Become a teacher trainer:
              </h3>
              <p style={{ textAlign: "justify", fontSize: "17px" }}>
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
              <p style={{ textAlign: "justify", fontSize: "17px" }}>
                We are sending selected teachers to recognised teacher training
                institutes for short and long term courses. You have an
                opportunity to sponsor a teacher for such a course and leave a
                long lasting impact on generations to come. Please get in touch
                with us via email to get further details.
              </p>
            </Col>
            <Col md={6}>
              <h3>
                {" "}
                <i
                  style={{ fontSize: "2.3em" }}
                  className="fas fa-laptop"
                />{" "}
                Motivate teachers via skype:
              </h3>
              <p className="TeacherParagrapghAlign" style={{ fontSize: "17px" }}>
                Are you an education consultant or have experience in teaching
                and would like to connect with teachers teaching in
                underprivileged areas? Contact us and we can get you in touch
                with some teachers from our partner schools even via skype.
                Share your experiences once you are connected. You can learn
                from them as much as they can learn from you.
              </p>
            </Col>
            <Col md={6}>
              <h3>
                {" "}
                <i style={{ fontSize: "2.23em" }} className="fas fa-pen-fancy" />
                Become a strategic program planner and developer:
              </h3>
              <p style={{ fontSize: "16.6px" }}>
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

          <br />
        </Grid>
        <Grid
          fluid
          style={{
            color: " rgb(25, 86, 147)",
            backgroundColor: "#fffff3"
          }}
        >
          <Row>
            {" "}
            <h2 style={{ textAlign: "center" }}>Explore our Programs</h2>
            <Row>
              <Col sm={10} smOffset={1}>
                <p
                  style={{
                    textAlign: "center",
                    marginTop: "5%",
                    fontSize: "1.37em"
                  }}
                >
                  Programs are Chishm’s long term projects that aim to
                  strengthen individuals such as students and teachers from
                  deprived communities. Our key long-term project is the
                  Mentoring Program which is the cornerstone of Chishm. Through
                  this program, an individual person (mentor) is linked with an
                  individual student (their mentee) in order to guide and
                  support them through schools and institutions.
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
          <br />
        </Grid>
      </div>
    </div>
  );
};
export default Programs;
