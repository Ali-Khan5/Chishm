import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import "./style.css";
import Program1 from "../media/pictures/Program_1.PNG";
import Program2 from "../media/pictures/Program_2.PNG";
import Program3 from "../media/pictures/Program_3.PNG";
import Card from '../Components/Card';

const Programs = props => {
  return (
    <div className="TecherSection">
      <Grid >
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
      </Grid>
      <div className="TecherSection">
        <Grid>
          <Row>
            <Col sm={10} smOffset={1}>
              <h2 style={{ textAlign: "center" }} id="teacher">
                Teacher Training Program
              </h2>
             
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
              <Card text={`Teachers equipped with necessary pedagogic skills and basics of
                child psychology; skills to articulate course content
                effectively and creatively; skills to conduct classes in a more
                interactive and engaging way; to instill in students critical
                thinking skills, presentation skills, confidence; skills to
                integrate basic social topics such as ethics and civic
                responsibility within the course content.`} heading={`What do we achieve:`}/>
              {/* <h3>What do we achieve: </h3>
              <p>
                Teachers equipped with necessary pedagogic skills and basics of
                child psychology; skills to articulate course content
                effectively and creatively; skills to conduct classes in a more
                interactive and engaging way; to instill in students critical
                thinking skills, presentation skills, confidence; skills to
                integrate basic social topics such as ethics and civic
                responsibility within the course content.
              </p> */}
              <br/>
              <Card text={`Chishm’s Teacher Training program is especially aimed for the
                teachers employed in local community schools catering to
                students from underprivileged communities. These teachers
                themselves come from similar backgrounds and often lack quality
                teaching skills.`} heading={`Whom do we serve:`}/>
              {/* <h3>Whom do we serve:</h3>
              <p>
                Chishm’s Teacher Training program is especially aimed for the
                teachers employed in local community schools catering to
                students from underprivileged communities. These teachers
                themselves come from similar backgrounds and often lack quality
                teaching skills.
              </p> */}
              <br/>
              <Card text={`Our Teacher Training program enrolls teachers in training
                courses at recognized institutes. Moreover we ensure that there
                is a transfer of knowledge from the teachers who have undergone
                training to other teachers of that school through implementation
                of workshops. Furthermore, together with our pool of experts,
                local members and the already trained teachers, we enhance the
                teaching quality using our in-house self organized learning
                environment (SOLE) based teacher training program through which
                teachers become better at asking big questions; become more in
                tune with interests of students; cultivate a learner-driven
                culture of curiosity; and feel more connected to students.`} heading={`What do we do:`}/>
              {/* <h3>What do we do: </h3>
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
              </p> */}
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
              <p style={{ textAlign: "justify" }}>
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
              <p style={{ textAlign: "justify" }}>
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
              <p style={{ textAlign: "justify" }}>
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
