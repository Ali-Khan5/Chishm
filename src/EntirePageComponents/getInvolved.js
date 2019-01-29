import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import "./style.css";
import { Link } from "react-router-dom";
const getInvolved = props => {
  return (
    <div className="MemberSection">
      <Grid fluid>
        <div className="projectPageHeader">
          <h2 style={{ fontSize: "50px" }}> Get Involved </h2>
        </div>
        <br />
        <Row>
          <Col md={8} mdOffset={2}>
            <div
              style={{
                // backgroundColor: "#fffff3",
                // borderRadius: "2px",
                textAlign: "center",
                // color: "rgb(25, 86, 147)",
                padding: "30px",
                fontSize: "17px"
                // boxShadow:
                //   "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)"
              }}
            >
              <h2 >
                <i style={{ fontSize: "45px" }} className="fas fa-users" />
              </h2>
              <h3 className="SecondryHeading"> Become a mentor</h3>
              <p>
                You can join our team as a mentor under the{" "}
                <Link
                  style={{
                    textDecoration: "underline",
                    color: "#fffff3 ",
                    fontWeight: "bold"
                  }}
                  to="/mentoring"
                >
                  Mentoring Program{" "}
                </Link>
                For more details, refer to our mentoring program page and apply
                there.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={8} mdOffset={2}>
            <div
              style={{
                // backgroundColor: "#fffff3",
                // borderRadius: "2px",
                textAlign: "center",
                // color: "rgb(25, 86, 147)",
                padding: "30px",
                fontSize: "17px",
                // boxShadow:
                //   "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",
                marginTop: "10px"
              }}
            >
              {" "}
              <h3>
                <i
                  style={{ fontSize: "45px" }}
                  className="fas fa-hand-holding-usd"
                />
              </h3>
              <h3 className="SecondryHeading"> Become a sponsor</h3>
              <p>
                The sponsorship of the students is part of our{" "}
                <Link
                  style={{
                    textDecoration: "underline",
                    color: "#fffff3 ",
                    fontWeight: "bold"
                  }}
                  to="/mentoring"
                >
                  {" "}
                  Mentoring Program{" "}
                </Link>
                . Our idea is to find a sponsor for each mentee enrolled in the
                mentoring program. The sponsorship of the mentees include
                bearing expenses such as tuition fees, books and uniform.
                Depending on the case the mentees family is also compensated
                with household expenses if it prevents the mentee being part of
                child-labour. For our open sponsorship positions please send us
                an email and we will get back to you with more details.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={8} mdOffset={2}>
            <div
              style={{
                // backgroundColor: "#fffff3",
                // borderRadius: "2px",
                textAlign: "center",
                // color: "rgb(25, 86, 147)",
                padding: "30px",
                fontSize: "17px",
                // boxShadow:
                //   "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)"
                marginTop: "10px"
              }}
            >
              <h3>
                <i style={{ fontSize: "45px" }} className="fas fa-handshake" />
              </h3>
              <h3 className="SecondryHeading"> Become a partner </h3>
              <p>
                We are always looking forward to work with schools and
                institutions who are trying to create a wind of change in
                Pakistan. If you think that any of our programs and projects
                could benefit your institution kindly get in touch with us
                through email.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={8} mdOffset={2}>
            <div
              style={{
                // backgroundColor: "#fffff3",
                // borderRadius: "2px",
                textAlign: "center",
                // color: "rgb(25, 86, 147)",
                padding: "30px",
                fontSize: "17px",
                // boxShadow:
                //   "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)"
                marginTop: "10px"
              }}
            >
              <h3>
                <i
                  style={{ fontSize: "45px" }}
                  className="fas fa-chalkboard-teacher"
                />
              </h3>
              <h3 className="SecondryHeading"> Become a volunteer </h3>
              <p>
                Chishm is entirely run by volunteers and that's why we are
                always looking for enthusiastic volunteers. Whether you want to
                volunteer for a few weeks, months or years, we always have place
                for you on our team. We are actively seeking volunteers to join
                our team for the following roles:
              </p>
              <Row>
                <Col md={6} sm={12}>
                  <h4
                    style={{
                      backgroundColor: " #fffff3",
                      borderRadius: "2px",
                      textAlign: "center",
                      color: "rgb(25, 86, 147)",
                      padding: "40px",
                      boxShadow:
                        "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)"
                    }}
                  >
                    {" "}
                    IT specialists
                  </h4>
                </Col>
                <Col md={6} sm={12}>
                  <h4
                    style={{
                      backgroundColor: " #fffff3",
                      borderRadius: "2px",
                      textAlign: "center",
                      color: "rgb(25, 86, 147)",
                      padding: "40px",
                      boxShadow:
                        "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)"
                    }}
                  >
                    {" "}
                    Project Leads
                  </h4>
                </Col>
                <Col md={6} sm={12}>
                  <h4
                    style={{
                      backgroundColor: " #fffff3",
                      borderRadius: "2px",
                      textAlign: "center",
                      color: "rgb(25, 86, 147)",
                      padding: "40px",
                      boxShadow:
                        "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)"
                    }}
                  >
                    {" "}
                    Legal experts
                  </h4>
                </Col>
                <Col md={6} sm={12}>
                  <h4
                    style={{
                      backgroundColor: " #fffff3",
                      borderRadius: "2px",
                      textAlign: "center",
                      color: "rgb(25, 86, 147)",
                      padding: "40px",
                      boxShadow:
                        "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)"
                    }}
                  >
                    {" "}
                    Teaching assistants
                  </h4>
                </Col>
                <Col md={6} sm={12}>
                  <h4
                    style={{
                      backgroundColor: " #fffff3",
                      borderRadius: "2px",
                      textAlign: "center",
                      color: "rgb(25, 86, 147)",
                      padding: "40px",
                      boxShadow:
                        "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)"
                    }}
                  >
                    {" "}
                    Education consultants
                  </h4>
                </Col>
                <Col md={6} sm={12}>
                  <h4
                    className="getinvolvedStyle"
                    style={{
                      backgroundColor: " #fffff3",
                      borderRadius: "2px",
                      textAlign: "center",
                      color: "rgb(25, 86, 147)",
                      padding: "35px",
                      boxShadow:
                        "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)"
                    }}
                  >
                    On-ground project assistants
                  </h4>
                </Col>
                <Col md={12} sm={12}>
                  <h4
                    style={{
                      backgroundColor: " #fffff3",
                      borderRadius: "2px",
                      textAlign: "center",
                      color: "rgb(25, 86, 147)",
                      padding: "40px",
                      boxShadow:
                        "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)"
                    }}
                  >
                    {" "}
                    Social media handler
                  </h4>
                </Col>
              </Row>
              <p>
                {" "}
                If you have a feeling that you can contribute in the above
                mentioned areas or in any other area in your mind, just write us
                a short mail describing yourself at and we will get back to you.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6} mdOffset={3}>
            <div
              style={{
                // backgroundColor: "#fffff3",
                // borderRadius: "2px",
                textAlign: "center",
                // color: "rgb(25, 86, 147)",
                padding: "30px",
                fontSize: "17px",
                // boxShadow:
                //   "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)"
                marginTop: "10px"
              }}
            >
              <h3>
                <i style={{ fontSize: "45px" }} className="fas fa-wrench" />
              </h3>
              <h3 className="SecondryHeading"> Help us improve </h3>
              <p>
                We always welcome feedback from people on how to improve our
                operations, programs and projects. If you have any feedback or
                suggestions, please send us an email.
              </p>
            </div>
          </Col>
        </Row>
        <br />
      </Grid>
    </div>
  );
};
export default getInvolved;
