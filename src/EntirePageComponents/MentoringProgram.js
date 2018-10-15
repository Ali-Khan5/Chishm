import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import "./style.css";
import Card from '../Components/Card';
import Program1 from "../media/pictures/Program_1.PNG";
import Program2 from "../media/pictures/Program_2.PNG";
import Program3 from "../media/pictures/Program_3.PNG";

const MentoringProgram = props => {
  return (
    <div className="MemberSection">
      <Grid>
        <Row>
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
            {/* <h2 className="board-game">Mentoring Program</h2>   */}
            {/* <img
              style={{ width: "100%", minHeight: "200px", maxHeight: "205px" }}
              src={Program1}
            /> */}
            <h2 style={{ minHeight: "100px",padding:'35px',backgroundColor:'#233067 ',color:'#F0F0FC',borderRadius:'5px',textAlign:'center'}} >Mentoring Program </h2 >
          </Col>
          <Col md={4}>
            {/* <h2 >Teacher Training Program</h2>  */}
            {/* <img
              style={{ width: "100%", minHeight: "200px", maxHeight: "205px" }}
              src={Program2}
            /> */}
            <h2 style={{minHeight: "100px",padding:'35px',backgroundColor:'#233067 ',color:'#F0F0FC',borderRadius:'5px',textAlign:'center'}}>Teacher Training Program</h2 >
          </Col>
          <Col md={4}>
            {/* <h2 style={{ textAlign: "center" }} className="retro">SOLE</h2>  */}
            {/* <img
              style={{ width: "100%", minHeight: "200px", maxHeight: "205px" }}
              src={Program3}
            /> */}
            <h2 style={{minHeight: "138px",padding:'40px',backgroundColor:'#233067 ',color:'#F0F0FC',borderRadius:'5px',textAlign:'center'}} >SOLE</h2>
          </Col>
        </Row>
        <h2 style={{ textAlign: "center" }} id="mentor">
          {" "}
          Mentoring Program{" "}
        </h2>
        <Row>
          <Col sm={10} smOffset={1}>
          <br/>
            {/* <h3> What do we achieve</h3>
            <p>
              Through Chishm’s Mentoring Program, we achieve higher enrollment
              of underprivileged children in formal schools; retention of at
              children-at-risk attending schools. We make these children
              self-sufficient and self-confident by identifying their potentials
              and skills, and through fostering academics, creative and critical
              thinking, civic and ethical sense. This development enables them
              to take better decisions and set their life goals.
            </p> */}
            <Card heading={` What do we achieve`} 
            text={` Through Chishm’s Mentoring Program, we achieve higher enrollment
            of underprivileged children in formal schools; retention of at
            children-at-risk attending schools. We make these children
            self-sufficient and self-confident by identifying their potentials
            and skills, and through fostering academics, creative and critical
            thinking, civic and ethical sense. This development enables them
            to take better decisions and set their life goals.`}
            />
            <br/>
            <Card heading={`Whom do we serve`}
            text={`Chishm’s Mentoring Program is especially aimed for the
            underprivileged children of our society aged between 6 to 18
            years. We offer this program as a platform to the mentors and
            sponsors who come from different walks of life to engage in the
            betterment of our society.`}
            />
            {/* <h3>Whom do we serve</h3>
            <p>
              Chishm’s Mentoring Program is especially aimed for the
              underprivileged children of our society aged between 6 to 18
              years. We offer this program as a platform to the mentors and
              sponsors who come from different walks of life to engage in the
              betterment of our society.
            </p> */}
            <br/>
            <Card heading={`What do we do:`} text={`This program connects privileged youth (mentors) to the
              underprivileged children (mentees), thereby establishing a bond
              which is mutually beneficial. Mentors normally conduct one to one
              mentoring sessions with their mentees which are assigned to them
              in one of our partner schools. In addition, through our individual
              sponsors, we contribute towards tuition fees of these mentees and
              compensate their earnings if they were previously not enrolled in
              school for the purpose of supporting their family.`}/>
            {/* <h3>What do we do: </h3>
            <p>
              This program connects privileged youth (mentors) to the
              underprivileged children (mentees), thereby establishing a bond
              which is mutually beneficial. Mentors normally conduct one to one
              mentoring sessions with their mentees which are assigned to them
              in one of our partner schools. In addition, through our individual
              sponsors, we contribute towards tuition fees of these mentees and
              compensate their earnings if they were previously not enrolled in
              school for the purpose of supporting their family.
            </p> */}
          </Col>
        </Row>
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
              >
                {" "}
                Mentoring Handbook{" "}
              </a>{" "}
              and{" "}
              <a
                href="https://drive.google.com/file/d/1vuPRcCvuwXqMUZYeOHXCMt2grobwChjo/view"
                target="_blank"
              >
                {" "}
                Mentoring Curriculum{" "}
              </a>{" "}
              for more details on this program. If you want to join us as one of
              our mentors, then please fill out the{" "}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeY1pNs53tDGyAJFIP8MMWvJ2hi4vgwJgHE-Xgp3h4tSBaCZg/viewform"
                targer="_blank"
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
            <p style={{ textAlign: "justify" }}>
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
            <p style={{ textAlign: "justify" }}>
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
            <p style={{ textAlign: "justify" }}>
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
            <p style={{ textAlign: "justify" }}>
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
                <i class="fas fa-bullhorn" />{" "}
              </span>{" "}
              Spread the word
            </h3>
            <p style={{ textAlign: "justify" }}>
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
      </Grid>
    </div>
  );
};
export default MentoringProgram ;
  
