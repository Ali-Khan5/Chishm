import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import "./style.css";
import Program1 from "./media/pictures/Program_1.PNG";
import Program2 from "./media/pictures/Program_2.PNG";
import Program3 from "./media/pictures/Program_3.PNG";
const Programs = props => {
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
            <img
              style={{ width: "100%", minHeight: "200px", maxHeight: "205px" }}
              src={Program1}
            />
          </Col>
          <Col md={4}>
            {/* <h2 >Teacher Training Program</h2>  */}
            <img
              style={{ width: "100%", minHeight: "200px", maxHeight: "205px" }}
              src={Program2}
            />
          </Col>
          <Col md={4}>
            {/* <h2 style={{ textAlign: "center" }} className="retro">SOLE</h2>  */}
            <img
              style={{ width: "100%", minHeight: "200px", maxHeight: "205px" }}
              src={Program3}
            />
          </Col>
        </Row>
        <h2 style={{ textAlign: "center" }}> Mentoring Program </h2>
        <Row>
          <Col sm={10} smOffset={1}>
            <h3> What do we achieve</h3>
            <p>
              Through Chishm’s Mentoring Program, we achieve higher enrollment
              of underprivileged children in formal schools; retention of at
              children-at-risk attending schools. We make these children
              self-sufficient and self-confident by identifying their potentials
              and skills, and through fostering academics, creative and critical
              thinking, civic and ethical sense. This development enables them
              to take better decisions and set their life goals.
            </p>
            <h3>Whom do we serve</h3>
            <p>
              Chishm’s Mentoring Program is especially aimed for the
              underprivileged children of our society aged between 6 to 18
              years. We offer this program as a platform to the mentors and
              sponsors who come from different walks of life to engage in the
              betterment of our society.
            </p>
            <h3>What do we do: </h3>
            <p>
              This program connects privileged youth (mentors) to the
              underprivileged children (mentees), thereby establishing a bond
              which is mutually beneficial. Mentors normally conduct one to one
              mentoring sessions with their mentees which are assigned to them
              in one of our partner schools. In addition, through our individual
              sponsors, we contribute towards tuition fees of these mentees and
              compensate their earnings if they were previously not enrolled in
              school for the purpose of supporting their family.
            </p>
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
              Become a sponsor:{" "}
            </h3>
            <p>
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
            <p>
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
              Become a partner :
            </h3>
            <p>
              {" "}
              we are constantly looking for schools and institutions catering to
              the education of underprivileged children which can take advantage
              from our Mentoring Program. Please send us an email to discuss
              further.{" "}
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <h3>
              {" "}
              <span style={{ fontSize: "2.4em" }}>
                {" "}
                <i className="fas fa-handshake" />
              </span>
              Become a strategic program planner :
            </h3>
            <p>
              We are always looking for enthusiastic people who would like to be
              part of the team running this mentoring program. From handling
              administrative issues to managing finances to developing
              strategies on how to advance the program. If this interests you,
              send us an email so we can work something out.
            </p>
          </Col>
          <Col md={6}>
            <h3>
              <span style={{ fontSize: "2.4em" }}>
                {" "}
                <i class="fas fa-bullhorn" />{" "}
              </span>{" "}
              Spread the Word:
            </h3>
            <p>
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
      <div className="TecherSection">
        <Grid>
          <Row>
            <Col sm={10} smOffset={1}>
              <h2 style={{ textAlign: "center" }}>Teacher Training Program</h2>
              <p style={{ textAlign: "center", fontSize: "1.3em" }}>
                Apart from just giving lectures, a good teacher can really
                instill the love for learning and instigate the curiosity of
                understanding the world in students. Moreover the teachers play
                a pivotal role by becoming early role models for the students
                thus giving inspirations and aspirations for their future. At
                Chishm, we believe that teachers are the most important resource
                a school has. Therefore, we incepted the "Teacher Training
                Program" which is aimed at equipping the teachers with latest
                teaching methods that will help them shape children into leaders
                rather than followers.
              </p>
              <h3>What do we achieve: </h3>
              <p>
                Teachers equipped with necessary pedagogic skills and basics of
                child psychology; skills to articulate course content
                effectively and creatively; skills to conduct classes in a more
                interactive and engaging way; to instill in students critical
                thinking skills, presentation skills, confidence; skills to
                integrate basic social topics such as ethics and civic
                responsibility within the course content.
              </p>
              <h3>Whom do we serve:</h3>
              <p>
                Chishm’s Teacher Training program is especially aimed for the
                teachers employed in local community schools catering to
                students from underprivileged communities. These teachers
                themselves come from similar backgrounds and often lack quality
                teaching skills.
              </p>
              <h3>What do we do: </h3>
              <p>
                Our Teacher Training program enrolls teachers in training
                courses at recognized institutes. Moreover we ensure that there
                is a transfer of knowledge from the teachers who have undergone
                training to other teachers of that school through implementation
                of workshops. Furthermore, together with our pool of experts,
                local members and the already trained teachers, we enhance the
                teaching quality using our in-house self organized learning
                environment (SOLE) based teacher training program through which
                teachers become better at asking big questions; become more in
                tune with interests of students; cultivate a learner-driven
                culture of curiosity; and feel more connected to students.
              </p>
              <hr />
            </Col>
          </Row>
          <h2 style={{ textAlign: "center" }}>Ways to get involved</h2>
          <Row>
            <Col md={6}>
              <h3>
                <i
                  style={{ fontSize: "2.4em" }}
                  className="fas fa-user-graduate"
                />{" "}
                Become a teacher trainer:
              </h3>
              <p>
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
              <p>
                We are sending selected teachers to recognised teacher training
                institutes for short and long term courses. You have an
                opportunity to sponsor a teacher for such a course and leave a
                long lasting impact on generations to come. Please get in touch
                with us via email to get further details.
              </p>
            </Col>
            <Col md={12}>
              <h3 > <i  style={{ fontSize: "2.3em" }} className="fas fa-pen-fancy"></i>Become a strategic program planner and developer:</h3>
              <p>
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
        </Grid>
      </div>
    </div>
  );
};
export default Programs;
