import React from "react";
import { Carousel, Grid, Row, Col } from "react-bootstrap";
import Img1 from "../saad.jpg";
import Img2 from "../sadia.png";
import Img3 from "../faraz.jpg";
import "./style.css";
const Testimonials = () => {
  return (
    <div
      style={{ height: "100%", backgroundColor: "white", color: "#331177  " }}
    >
      <Grid>
        <Row className="show-grid">
          <Col>
            <h2> Testimonials </h2>
            <Carousel controls={false}>
              <Carousel.Item>
                <center>
                  <img className="testimonalPic" src={Img1} alt="Saad's "/>
                  <p>
                    <strong>Saad Idrees </strong><br />
                    Mentor
                  </p>
                  <p style={{fontSize:'18px'}}>
                    <q>
                      {" "}
                      It was fun when I started giving my mentee topics to think
                      on and then we both would discuss our opinions in the next
                      meeting until he started giving me topics to think about -
                      then it became exciting and challenging. We both have
                      learnt so much together
                    </q>
                  </p>
                  <br/>
                </center>
              </Carousel.Item>
              <Carousel.Item>
                <center>
                  <img className="testimonalPic" src={Img2} alt="Sadia's " />
                  <p>
                   <strong>  Sadia Khan </strong><br />
                    Mentor
                  </p>
                  <p style={{fontSize:'18px'}}>
                    <q>
                      {" "}
                      I feel lucky to be the mentor of a very intelligent girl.
                      Her opinions on different topics are food for thought. Her
                      ambitious nature and curiosity never cease to amaze me and
                      it is a journey that continues to be enlightening for both
                      of us
                    </q>
                  </p>
                  <br/>
                </center>
              </Carousel.Item>
              <Carousel.Item>
                <center>
                  <img className="testimonalPic" src={Img3} alt="Faraz Arshad's " />
                  <p>
                  <strong>Faraz Arshad</strong> <br />
                    Mentor
                  </p>
                  <p style={{fontSize:'18px'}}>
                    <q>
                      {" "}
                      I believe that if you are privileged, then it becomes your
                      duty to share it with the society. At Chishm we share the
                      privilege of being educated with communities struggling
                      for survival with the conviction that one day this would
                      change their fate. On behalf of this institution I invite
                      you all to join hands with us and create the wind of
                      change
                    </q>
                  </p>
                  <br/>
                </center>
              </Carousel.Item>
            
            </Carousel>
            <br/>
            <br/>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};
export default Testimonials;
