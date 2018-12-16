import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import "./style.css";
import Members from "../Components/Members";
import SaadImg from "../media/pictures/saad.jpg";
import FarazImg from "../media/pictures/faraz.jpg";
import Card from "../Components/AboutCard";
const About = () => {
  return (
    <div className="MemberSection">
      {/* <div className="themeInverse">
        <Grid fluid>
          <br />
          <section>
            <Row>
              <Col md={10} xs={10} xsOffset={1}>
                <Card
                  heading={`Who We Are`}
                  text={` Chishm is as a non-profit platform to support and enhance the
                quality of education amongst the underprivileged youth of
                Pakistan such as street children and disabled children. Our
                approach aims to reshape the way education is imparted - which
                in turn would reshape the youth of tomorrow: from a critical
                thinking perspective, and from a value perspective. We are a
                group of volunteers from different walks of life - specializing
                in pedagogy, teaching, child psychology, project management,
                strategic planning, advisory - sharing a common vision.`}
                />
              </Col>
              <br />
            </Row>
            <br />

            <Row>
              <Col md={10} xs={10} xsOffset={1}>
                <Card
                  heading={`Whom Do We Serve`}
                  text={`Chishm supports individual children from underprivileged
                communities in Pakistan, educational institutions catering to
                these children and individual teachers working in such
                institutions.`}
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col md={10} xs={10} xsOffset={1}>
                <Card
                  heading={` What Do We Do `}
                  text={`Through our various long-term and short term projects, we
         increase the accessibility of formal education to
         underprivileged communities, increase the quality of education
         being provided to such communities and bridge the gap between
         privileged and underprivileged members of our society through
         community integration. On one hand we have long-term programs to
         provide mentors for weak students / at-risk youth, training
         teachers, enrolling street children into schools etc. On the
         other hand we have short term projects that strengthen the
         educational infrastructure and improve quality of educational
         institutes.`}
                />{" "}
              </Col>
            </Row>

            <br />
            <Row>
              <Col md={10} xs={10} xsOffset={1}>
                <Card
                  heading={`Where do we get our funding`}
                  text={`  Currently our main funding sources are individual donors. Some
                of them are long term donors who contribute towards education of
                individual children under our mentoring programme by becoming
                their financial sponsors or short term donors who donate towards
                our ongoing or prospective projects. Our operational cost is
                covered by contributions from our members. Therefore every paisa
                donated reaches a beneficiary.`}
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col md={10} xs={10} xsOffset={1}>
                <Card
                  heading={`Our  Structure`}
                  text={`  At Chishm, we follow an innovative organizational structure
                through which we are able to eliminate hierarchy and maximize
                the contributions from our members. Every person within Chishm
                is either a member or a volunteer. All decisions are made
                through majority votes of the members, unless a project specific
                policy has been defined. As such, our members are hand-picked
                and often join us as volunteers at first. Members can initiate
                their own projects if a certain number of minimum members agree
                to the project and the project’s required skill set is complete.
                Through such an approach, Chishm provides a platform for
                motivated and like-minded people to initiate social projects in
                line with our primary goals.`}
                />
              </Col>
            </Row>
          </section>
          <br />
        </Grid>
      </div> */}

      <Grid
        fluid
        style={{
          color: " rgb(25, 86, 147)",
          backgroundColor: "#FFFFF3"
        }}
      >
        <section>
          <br />
          <br />
          <Row className="">
          <Col mdHidden lgHidden>
              <h2 style={{ fontSize: "35px", margin: "15px" }}>About Us</h2>
              <p style={{ fontSize: "17px", margin: "15px" }}>
                Chishm aims to reshape the way education is imparted - which in
                turn would reshape the youth of tomorrow: from a critical
                thinking perspective, and from a values perspective.
              </p>
              <img
                className="img-responsive" 
                src="https://res.cloudinary.com/dcw1i97ph/image/upload/v1544394153/IMG_0497_zgm4dj.jpg"
              />
            </Col>
            <Col md={7}>
              <h2 className="aboutusHeadingsStyle">Who We Are</h2>
              <p className="aboutUsParagraph">
                {" "}
                Chishm is as a non-profit platform to support and enhance the
                quality of education amongst the underprivileged youth of
                Pakistan such as street children and disabled children. Our
                approach aims to reshape the way education is imparted - which
                in turn would reshape the youth of tomorrow: from a critical
                thinking perspective, and from a value perspective. We are a
                group of volunteers from different walks of life - specializing
                in pedagogy, teaching, child psychology, project management,
                strategic planning, advisory - sharing a common vision.
              </p>
              <h2 className="aboutusHeadingsStyle">Whom Do We Serve</h2>
              <p className="aboutUsParagraph">
                Chishm supports individual children from underprivileged
                communities in Pakistan, educational institutions catering to
                these children and individual teachers working in such
                institutions.
              </p>
              <h2 className="aboutusHeadingsStyle">What Do We Do</h2>
              <p className="aboutUsParagraph">
                Through our various long-term and short term projects, we
                increase the accessibility of formal education to
                underprivileged communities, increase the quality of education
                being provided to such communities and bridge the gap between
                privileged and underprivileged members of our society through
                community integration. On one hand we have long-term programs to
                provide mentors for weak students / at-risk youth, training
                teachers, enrolling street children into schools etc. On the
                other hand we have short term projects that strengthen the
                educational infrastructure and improve quality of educational
                institutes.
              </p>
              <h2 className="aboutusHeadingsStyle">
                Where do we get our funding
              </h2>
              <p className="aboutUsParagraph">
                Currently our main funding sources are individual donors. Some
                of them are long term donors who contribute towards education of
                individual children under our mentoring programme by becoming
                their financial sponsors or short term donors who donate towards
                our ongoing or prospective projects. Our operational cost is
                covered by contributions from our members. Therefore every paisa
                donated reaches a beneficiary.
              </p>
              <h2 className="aboutusHeadingsStyle">Our Structure</h2>
              <p className="aboutUsParagraph">
                At Chishm, we follow an innovative organizational structure
                through which we are able to eliminate hierarchy and maximize
                the contributions from our members. Every person within Chishm
                is either a member or a volunteer. All decisions are made
                through majority votes of the members, unless a project specific
                policy has been defined. As such, our members are hand-picked
                and often join us as volunteers at first. Members can initiate
                their own projects if a certain number of minimum members agree
                to the project and the project’s required skill set is complete.
                Through such an approach, Chishm provides a platform for
                motivated and like-minded people to initiate social projects in
                line with our primary goals.
              </p>
            </Col>
            <Col
              md={4}
              style={{ borderLeft: "2px solid black" }}
              smHidden
              xsHidden
            >
              <img
                className="img-responsive"
                src="https://res.cloudinary.com/dcw1i97ph/image/upload/v1544394153/IMG_0497_zgm4dj.jpg"
              />
              <h2 style={{ fontSize: "35px" }}>About Us</h2>
              <p style={{ fontSize: "17px" }}>
                Chishm aims to reshape the way education is imparted - which in
                turn would reshape the youth of tomorrow: from a critical
                thinking perspective, and from a values perspective.
              </p>
            </Col>
           
          </Row>
        </section>
      </Grid>
      {/* <Grid
        fluid
        style={{
          color: " #233067",
          backgroundColor: "#fffff3"
        }}
      >
        <section>
          <Row className="AboutMESPACING">
            <Col md={5}>
              <img
                className="aboutMeIMGheight"
                src="https://res.cloudinary.com/dcw1i97ph/image/upload/v1543483922/783_million_people_do_not_have_access_to_clean_and_safe_drinking_water_globally_according_to_the_United_Nations_Millennium_Development_Goals_Report_4_vf14hy.png"
              />
            </Col>
            <Col md={7}>
              <div
                style={{
                  marginTop: "60px",
                  marginLeft: "30px",
                  marginRight: "30px"
                }}
              >
                <h2 style={{ fontSize: "35px" }}>Who We Are</h2>
                <p style={{ fontSize: "17px", letterSpacing: "0.03em" }}>
                  {" "}
                  Chishm is as a non-profit platform to support and enhance the
                  quality of education amongst the underprivileged youth of
                  Pakistan such as street children and disabled children. Our
                  approach aims to reshape the way education is imparted - which
                  in turn would reshape the youth of tomorrow: from a critical
                  thinking perspective, and from a value perspective. We are a
                  group of volunteers from different walks of life -
                  specializing in pedagogy, teaching, child psychology, project
                  management, strategic planning, advisory - sharing a common
                  vision.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="AboutMESPACING">
            <Col md={7}>
              <div
                style={{
                  marginTop: "60px",
                  marginLeft: "30px",
                  marginRight: "30px"
                }}
              >
                <h2 style={{ fontSize: "35px" }}>Whom Do We Serve</h2>
                <p style={{ fontSize: "17px", letterSpacing: "0.03em" }}>
                  Chishm supports individual children from underprivileged
                  communities in Pakistan, educational institutions catering to
                  these children and individual teachers working in such
                  institutions.
                </p>
              </div>
            </Col>
            <Col md={5}>
              <img
                className="aboutMeIMGheight"
                src="https://res.cloudinary.com/dcw1i97ph/image/upload/v1543483922/783_million_people_do_not_have_access_to_clean_and_safe_drinking_water_globally_according_to_the_United_Nations_Millennium_Development_Goals_Report_4_vf14hy.png"
              />
            </Col>
          </Row>

          <Row className="AboutMESPACING">
            <Col md={5}>
              <img
                className="aboutMeIMGheight"
                src="https://res.cloudinary.com/dcw1i97ph/image/upload/v1543483922/783_million_people_do_not_have_access_to_clean_and_safe_drinking_water_globally_according_to_the_United_Nations_Millennium_Development_Goals_Report_4_vf14hy.png"
              />
            </Col>
            <Col md={7}>
              <div
                style={{
                  marginTop: "60px",
                  marginLeft: "30px",
                  marginRight: "30px"
                }}
              >
                <h2 style={{ fontSize: "35px" }}>What Do We Do</h2>
                <p style={{ fontSize: "17px", letterSpacing: "0.03em" }}>
                  Through our various long-term and short term projects, we
                  increase the accessibility of formal education to
                  underprivileged communities, increase the quality of education
                  being provided to such communities and bridge the gap between
                  privileged and underprivileged members of our society through
                  community integration. On one hand we have long-term programs
                  to provide mentors for weak students / at-risk youth, training
                  teachers, enrolling street children into schools etc. On the
                  other hand we have short term projects that strengthen the
                  educational infrastructure and improve quality of educational
                  institutes.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="AboutMESPACING">
            <Col md={7}>
              <div
                style={{
                  marginTop: "60px",
                  marginLeft: "30px",
                  marginRight: "30px"
                }}
              >
                <h2 style={{ fontSize: "35px" }}>
                  Where do we get our funding
                </h2>
                <p style={{ fontSize: "17px", letterSpacing: "0.03em" }}>
                  Currently our main funding sources are individual donors. Some
                  of them are long term donors who contribute towards education
                  of individual children under our mentoring programme by
                  becoming their financial sponsors or short term donors who
                  donate towards our ongoing or prospective projects. Our
                  operational cost is covered by contributions from our members.
                  Therefore every paisa donated reaches a beneficiary.
                </p>
              </div>
            </Col>
            <Col md={5}>
              <img
                className="aboutMeIMGheight"
                src="https://res.cloudinary.com/dcw1i97ph/image/upload/v1543483922/783_million_people_do_not_have_access_to_clean_and_safe_drinking_water_globally_according_to_the_United_Nations_Millennium_Development_Goals_Report_4_vf14hy.png"
              />
            </Col>
          </Row>
          <Row className="AboutMESPACING">
            <Col md={5}>
              <img
                className="aboutMeIMGheight"
                src="https://res.cloudinary.com/dcw1i97ph/image/upload/v1543483922/783_million_people_do_not_have_access_to_clean_and_safe_drinking_water_globally_according_to_the_United_Nations_Millennium_Development_Goals_Report_4_vf14hy.png"
              />
            </Col>
            <Col md={7}>
              <div
                style={{
                  marginTop: "40px",
                  marginLeft: "30px",
                  marginRight: "30px"
                }}
              >
                <h2 style={{ fontSize: "35px" }}>Our Structure</h2>
                <p style={{ fontSize: "17px", letterSpacing: "0.03em" }}>
                  At Chishm, we follow an innovative organizational structure
                  through which we are able to eliminate hierarchy and maximize
                  the contributions from our members. Every person within Chishm
                  is either a member or a volunteer. All decisions are made
                  through majority votes of the members, unless a project
                  specific policy has been defined. As such, our members are
                  hand-picked and often join us as volunteers at first. Members
                  can initiate their own projects if a certain number of minimum
                  members agree to the project and the project’s required skill
                  set is complete. Through such an approach, Chishm provides a
                  platform for motivated and like-minded people to initiate
                  social projects in line with our primary goals.
                </p>
              </div>
            </Col>
          </Row>
        </section>
      </Grid> */}
      <Grid fluid>
        <section>
          <br />
          <Row>
            <Col>
              <br />
              <br />
              <h2 style={{ textAlign: "center", fontSize: "2.8em" }}>
                {" "}
                <i className="fas fa-heart" />
              </h2>
              <h2 style={{ textAlign: "center", fontSize: "2.8em" }}>
                Our Members{" "}
              </h2>
              <p
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  margin: "0px 20%",
                  fontSize: "17px"
                }}
              >
                Members are the backbone of our organization who make sure that
                Chism's goals are being met by working consistently to
                streamline the processes and being integral part of the core
                projects. All our members start off with a volunteer role, and
                based on their commitment and feedback from other members, are
                offered permanent membership.
              </p>
            </Col>
          </Row>
          <br />
          <Row>
            {/* <h2 style={{ textAlign: "center" }}>Current Members </h2> */}
            <Col sm={6} md={4} className="text-center">
              <Members
                memberName={"Saad Idrees"}
                Title={"Co-founder / member"}
                imgSrc={SaadImg}
                details={
                  "Saad is a co-founder of Chishm and is currently pursuing a PhD degree in Neuroscience from Germany. He holds a B.S. degree in Engineering Sciences from G.I.K Institute Pakistan and a M.S. degree in Biomedical Engineering from Imperial College London, UK. Saad overlooks different projects under Chishm and mentors a student."
                }
              />
            </Col>

            <Col sm={6} md={4}>
              <Members
                memberName={"Muhammad Ali Khan"}
                Title={"Co-founder / member"}
                imgSrc={"https://i.imgur.com/7ipEuOI.jpg"}
                details={
                  "Ali is a co-founder of Chishm and currently works as a manager at Deloitte. He holds a B.S. degree in Accounting and Finance from IBA Karachi. Ali overlooks different projects under Chishm and mentors a student.He Too Kewl to send His Picture "
                }
              />
            </Col>

            <Col sm={6} md={4} className="text-center">
              <Members
                memberName={"Faraz Arshad"}
                Title={"Co-founder / member"}
                imgSrc={FarazImg}
                details={
                  "Faraz is a graduate from NUST Pakistan and holds a Masters Degree from KIT Germany. He is currently working as a Project Lead at an automotive company. At Chishm he is responsible for developing programs in the domain of education along with other experts. ."
                }
              />
            </Col>
          </Row>
          <Row>
            <Col md={12} />
          </Row>
        </section>
      </Grid>

      <br />
      <br />
      <br />
      <br />
    </div>
  );
};
export default About;
