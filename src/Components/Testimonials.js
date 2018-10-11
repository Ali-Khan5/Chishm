import React from "react";
import { Carousel, Grid, Row, Col } from "react-bootstrap";
import Img1 from "./../media/pictures/saad.jpg";
import Img2 from "./../media/pictures/sadia.png";
import Img3 from "./../media/pictures/faraz.jpg";
import "./style.css";
const Testimonials = () => {
  return (
    <Grid className="SHADOW">
      <Row className="show-grid">
        <Col
          md={12}
          style={{
            height: "100%",
            backgroundColor: "white",
            color: "#233067  ",
            borderRadius: "2px"
          }}
        >
          <center>
            {" "}
            <br />
            <h2> Testimonials </h2>
            <hr />
          </center>
          <Carousel controls={false}>
            <Carousel.Item className="CarousalPersonStyling">
              <center>
                <img className="testimonalPic" src={Img1} alt="Saad's " />
                <p className="TestimonialPersonParagrapghStyling">
                  <q>
                    {" "}
                    It was fun when I started giving my mentee topics to think
                    on and then we both would discuss our opinions in the next
                    meeting until he started giving me topics to think about -
                    then it became exciting and challenging. We both have learnt
                    so much together
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
                <img className="testimonalPic" src={Img2} alt="Sadia's " />
                <p className="TestimonialPersonParagrapghStyling">
                  <q>
                    {" "}
                    I feel lucky to be the mentor of a very intelligent girl.
                    Her opinions on different topics are food for thought. Her
                    ambitious nature and curiosity never cease to amaze me and
                    it is a journey that continues to be enlightening for both
                    of us
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
                <p className="TestimonialPersonParagrapghStyling">
                  <q>
                    {" "}
                    I believe that if you are privileged, then it becomes your
                    duty to share it with the society. At Chishm we share the
                    privilege of being educated with communities struggling for
                    survival with the conviction that one day this would change
                    their fate. On behalf of this institution I invite you all
                    to join hands with us and create the wind of change
                  </q>
                </p>
                <h4>
                  <strong>Faraz Arshad</strong> <br />
                  Mentor
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
  );
};
export default Testimonials;
