import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";
import   ScrollToTopOnMount  from '../Components/scrollup';
const MentoringProgram = props => {
  return (
    <div className="MemberSection">
    <ScrollToTopOnMount/>
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
                <h2 style={{ fontSize: "35px" }}>Mentoring Program</h2>
                <p style={{ fontSize: "18px", letterSpacing: "0.03em" }}>
                  {" "}
                  Mentoring Program is the cornerstone of Chishm and serves as a
                  platform to connect the underprivileged youth to the
                  privileged ones. By such connections we expect exchange of
                  knowledge and experiences that will influence our youth in a
                  positive way.
                </p>
              </div>
            </Col>
            <Col md={5}>
              <img
                className="aboutMeIMGheight"
                src="https://res.cloudinary.com/dcw1i97ph/image/upload/v1544540259/IMG_0253_opt_pxxm4q.jpg"
                alt='student receiving a mentoring session by our international mentor '
              />
            </Col>
          </Row>
          {/* <Row className="AboutMESPACING">
            <Col md={5} xsHidden smHidden>
              <img
                className="displayIMGheight"
                src="https://res.cloudinary.com/dcw1i97ph/image/upload/v1544540251/IMG_0275_opt_gimncd.jpg"
              />
            </Col>
            <Col md={7}>
              <div className="ProgramDetailsAlignmentWithPictureRight">
                <h2 style={{ fontSize: "35px" }}>What do we achieve</h2>
                <p style={{ fontSize: "18px", letterSpacing: "0.03em" }}>
                  {" "}
                  Through Chishm’s Mentoring Program, we achieve higher
                  enrollment and retention of children in schools in
                  underprivileged areas. By identifying their potentials and
                  skills, and through fostering academics, creative and critical
                  thinking, civic and ethical sense, we make these children
                  self-sufficient and self-confident.
                </p>
              </div>
            </Col>
            <Col md={5} mdHidden lgHidden>
              <img
                className="displayIMGheight"
                src="https://res.cloudinary.com/dcw1i97ph/image/upload/v1544540687/IMG_0289_opt_swefwp.jpg"
              />
            </Col>
          </Row>
          <Row className="AboutMESPACING">
            <Col md={7}>
              <div className="ProgramDetailsAlignmentWithPictureLeft">
                <h2 style={{ fontSize: "35px" }}>Whom do we serve</h2>
                <p style={{ fontSize: "18px", letterSpacing: "0.03em" }}>
                  {" "}
                  Chishm’s Mentoring Program is especially aimed for the
                  children belonging to underprivileged areas, aged between 6 to
                  18 years. Additionally, this program serves as a platform to
                  the mentors and sponsors who come from different walks of life
                  to engage with these children for the betterment of our
                  society.
                </p>
              </div>
            </Col>
            <Col md={5}>
              <img
                className="displayIMGheight"
                src="https://res.cloudinary.com/dcw1i97ph/image/upload/v1544540918/IMG_0292_xf9hc8.jpg"
              />
            </Col>
          </Row>
          <Row className="AboutMESPACING">
            <Col md={5} xsHidden smHidden>
              <img
                className="displayIMGheight"
                src="https://res.cloudinary.com/dcw1i97ph/image/upload/v1544540991/IMG_0369_ljivht.jpg"
              />
            </Col>
            <Col md={7}>
              <div className="ProgramDetailsAlignmentWithPictureRight">
                <h2 style={{ fontSize: "35px" }}>What do we do: </h2>
                <p style={{ fontSize: "18px", letterSpacing: "0.03em" }}>
                  {" "}
                  This program connects privileged youth (mentors) to children
                  from underprivileged areas (mentees). Mentors normally conduct
                  one to one mentoring sessions with their mentees which are
                  assigned to them in one of our partner schools. In addition,
                  through our individual sponsors, we contribute towards tuition
                  fees of these mentees and compensate their earnings if they
                  were previously not enrolled in school for the purpose of
                  supporting their family.
                </p>
              </div>
            </Col>
            <Col md={5} mdHidden lgHidden>
              <img
                className="displayIMGheight"
                src="https://res.cloudinary.com/dcw1i97ph/image/upload/v1543483922/783_million_people_do_not_have_access_to_clean_and_safe_drinking_water_globally_according_to_the_United_Nations_Millennium_Development_Goals_Report_4_vf14hy.png"
              />
            </Col>
          </Row> */}
          <br />
          <br />
          <h2 style={{ textAlign: "center", fontSize: "45px" }}>
            <b>Our Program</b> in a Nutshell
          </h2>
          <hr />
          <Row>
            {/* <ProgramsCard
              source={
                "https://res.cloudinary.com/dcw1i97ph/image/upload/v1544540687/IMG_0289_opt_swefwp.jpg"
              }
              para={`Through Chishm’s Mentoring Program, we achieve higher
                  enrollment and retention of children in schools in
                  underprivileged areas. By identifying their potentials and
                  skills, and through fostering academics, creative and critical
                  thinking, civic and ethical sense, we make these children
                  self-sufficient and self-confident.`}
              heading={"What do we achieve"}
            />
            <ProgramsCard
              source={
                "https://res.cloudinary.com/dcw1i97ph/image/upload/v1544540918/IMG_0292_xf9hc8.jpg"
              }
              para={` Chishm’s Mentoring Program is especially aimed for the children belonging to underprivileged areas, aged between 6 to 18 years. Additionally, this program serves as a platform to the mentors and sponsors who come from different 
              walks of life to engage with these children for the betterment of our society.`}
              heading={"Whom do we serve"}
            />
             <ProgramsCard
              source={
                "https://res.cloudinary.com/dcw1i97ph/image/upload/v1543483922/783_million_people_do_not_have_access_to_clean_and_safe_drinking_water_globally_according_to_the_United_Nations_Millennium_Development_Goals_Report_4_vf14hy.png"
              }
              para={`This program connects privileged youth (mentors) to children
              from underprivileged areas (mentees). Mentors normally conduct
              one to one mentoring sessions with their mentees which are
              assigned to them in one of our partner schools. In addition,
              through our individual sponsors, we contribute towards tuition
              fees of these mentees and compensate their earnings if they
              were previously not enrolled in school for the purpose of
              supporting their family.`}
              heading={"What do we do"}
            /> */}
            <Col md={8} mdOffset={2}>
              <div
                style={{
                  textAlign: "center",
                  padding: "30px",
                  fontSize: "17px",
                  marginTop: "10px"
                }}
              >
                <h3> What do we achieve</h3>
                <p>
                  Through Chishm’s Mentoring Program, we achieve higher
                  enrollment and retention of children in schools in
                  underprivileged areas. By identifying their potentials and
                  skills, and through fostering academics, creative and critical
                  thinking, civic and ethical sense, we make these children
                  self-sufficient and self-confident.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={8} mdOffset={2}>
              <div
                style={{
                  textAlign: "center",
                  padding: "30px",
                  fontSize: "17px",
                  marginTop: "10px"
                }}
              >
                <h3> Whom do we serve</h3>
                <p>
                  Chishm’s Mentoring Program is especially aimed for the
                  children belonging to underprivileged areas, aged between 6 to
                  18 years. Additionally, this program serves as a platform to
                  the mentors and sponsors who come from different walks of life
                  to engage with these children for the betterment of our
                  society.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={8} mdOffset={2}>
              <div
                style={{
                  textAlign: "center",
                  padding: "30px",
                  fontSize: "17px",
                  marginTop: "10px"
                }}
              >
                <h3>What do we do</h3>
                <p>
                  This program connects privileged youth (mentors) to children
                  from underprivileged areas (mentees). Mentors normally conduct
                  one to one mentoring sessions with their mentees which are
                  assigned to them in one of our partner schools. In addition,
                  through our individual sponsors, we contribute towards tuition
                  fees of these mentees and compensate their earnings if they
                  were previously not enrolled in school for the purpose of
                  supporting their family
                </p>
              </div>
            </Col>
          </Row>
          <br />
        </section>
      </Grid>
      <Grid>
        <Row>
          <Col sm={10} smOffset={1}>
            <hr />
            <h2 style={{ textAlign: "center" }}>Interested in Mentoring?</h2>
            <p style={{ textAlign: "center", fontSize: "1.3em" }}>
              This mentoring program has been envisioned with the help of
              experts in the field of teaching, pedagogy, psychology and
              mentoring and is intended to have a positive impact on the lives
              of underprivileged children of our society. Please refer to the
              <a
                href="https://drive.google.com/file/d/1uELgkXy5RZklIE2omwdBAjvWHlybSmtT/view"
                target="_black"
                style={{textDecoration: 'underline',color:'#0d0ba3'}}
                rel="noopener noreferrer" 
              >
                {" "}
                Mentoring Handbook{" "}
              </a>{" "}
              and{" "}
              <a
               style={{textDecoration: 'underline',color:'#0d0ba3'}}
                href="https://drive.google.com/file/d/1vuPRcCvuwXqMUZYeOHXCMt2grobwChjo/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Mentoring Curriculum{" "}
              </a>{" "}
              for more details on this program. If you want to join us as one of
              our mentors, then please fill out the{" "}
              <a
               style={{textDecoration: 'underline',color:'#0d0ba3'}}
                href="https://docs.google.com/forms/d/e/1FAIpQLSeY1pNs53tDGyAJFIP8MMWvJ2hi4vgwJgHE-Xgp3h4tSBaCZg/viewform"
                targer="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Mentoring Expression of Interest form{" "}
              </a>{" "}
              so we know a bit about you. We will then get in touch with you to
              discuss further details.
            </p>
            <hr />
          </Col>
        </Row>
        <h2 style={{ textAlign: "center" }}> Other ways to get involved</h2>
        <Row>
          <Col md={4}>
            <h3>
              <span style={{ fontSize: "2.4em" }}>
                <i className="fas fa-hand-holding-usd" />
              </span>{" "}
              Become a sponsor{" "}
            </h3>
            <p style={{ fontSize: "17px" }}>
              You have the possibility to sponsor a mentee enrolled in this
              program. Please send us an email to get further details.
            </p>
          </Col>
          <Col md={4}>
            <h3>
              <span style={{ fontSize: "2.4em" }}>
                {" "}
                <i className="fas fa-user-astronaut" />
              </span>{" "}
              Become a consultant
            </h3>
            <p style={{ fontSize: "17px" }}>
              Whether you are an educationist, child-psychologist, a pedagogy
              expert or just someone with interesting ideas, there is always a
              place for you in our “expert panel” that constantly advises us to
              keep this program evolving. Just send an email and we will contact
              you as soon as possible.
            </p>
          </Col>
          <Col md={4}>
            <h3>
              {" "}
              <span style={{ fontSize: "2.4em" }}>
                {" "}
                <i className="fas fa-school" />{" "}
              </span>
              Become a partner
            </h3>
            <p style={{ fontSize: "17px" }}>
              {" "}
              we are constantly looking for schools and institutions catering to
              the education of underprivileged children which can take advantage
              from our Mentoring Program. Please send us an email to discuss
              further.{" "}
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h3>
              {" "}
              <span style={{ fontSize: "2.4em" }}>
                {" "}
                <i className="fas fa-handshake" />
              </span>{" "}
              Become a strategic program planner
            </h3>
            <p style={{ fontSize: "17px" }}>
              We are always looking for enthusiastic people who would like to be
              part of the team running this mentoring program. From handling
              administrative issues to managing finances to developing
              strategies on how to advance the program. If this interests you,
              send us an email so we can work something out.
            </p>
          </Col>
          <Col md={4} />
          <Col md={4}>
            <h3>
              <span style={{ fontSize: "2.4em" }}>
                {" "}
                <i className="fas fa-bullhorn" />{" "}
              </span>{" "}
              Spread the word
            </h3>
            <p style={{ textAlign: "justify", fontSize: "17px" }}>
              If you know of a person who might be interested in mentoring or is
              already mentoring in his personal capacity then let them know
              about us. We can learn from their experience and they can learn
              about other mentors experience through our platform and
              collectively we can work towards a common goal. Additionally, many
              people are looking for platforms through which they can donate
              towards educating our youth. Let them know about us.
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
              (their mentee) in order to guide and support them through schools
              and institutions.
            </p>
          </Col>
        </Row>
        <h2 style={{ textAlign: "center" }}>Explore our Programs</h2>
        <Row>
          <Col md={4}>
           <Link to="/mentoring"> <div className="OtherProgramsPictures">
              <img
                style={{ width: "100%" }}
                src={
                  "https://res.cloudinary.com/dcw1i97ph/image/upload/v1544551679/concepts_byhyyw.png"
                 
                }
                alt="mentoring program link"
              />
            </div>
            </Link>
          </Col>
          <Col md={4}>
          <Link to="/teacher" >    <div className="OtherProgramsPictures">
              <img
                style={{ width: "100%" }}
                src={
                  "https://res.cloudinary.com/dcw1i97ph/image/upload/v1544551679/concepts_1_rdnacx.png"
                  
                }
                alt="teacher training program link"
              />
            </div>
            </Link>
          </Col>
          <Col md={4}>
        <Link to="/sole#sole" >  <div className="OtherProgramsPictures">
              <img
                style={{ width: "100%" }}
                src={
                  "https://res.cloudinary.com/dcw1i97ph/image/upload/v1544551679/concepts_2_abwmay.png"
                }
                alt="sole program link"
              />
            </div>
            </Link> 
          </Col>
        </Row>
      </Grid>
      <br />
    </div>
  );
};
export default MentoringProgram;
