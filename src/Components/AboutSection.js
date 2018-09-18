import React from "react";
import { Grid, Row, Col, Jumbotron } from "react-bootstrap";
import Card from "./Card";
import Achievement from './Achievement';
import "./style.css";
const AboutSection = () => {
  return (
    <Grid>
      <Row className="show-grid">
       
        <Col>
          <Card
            colorScheme="prime"
            text={` Chishm is a platform to support education amongst the 
            underprivileged youth of Pakistan by bridging them to
             privileged people. We bring together like-minded people
              from different walks of life to share their ideas on how 
              to increase accessibility and quality of formal education 
              for underprivileged communities. Through our local and global 
              support, we are able to translate these ideas into reality.`}
          />
        </Col>
      </Row>
        <hr/>
      <Row className="show-grid">
        <Col md={4} lg={4}>
          <Card
         
            heading={`What We Do`}
            text={`Provide mentors for weak 
        underprivileged students / at-risk youth,
         enrol street children into schools, 
         implement creative learning tools, train teachers, strengthen educational institutes.
                        `}
            buttonText={`Visit our Projects page`}
          />
        </Col>
        <Col md={4} lg={4}>
            <Achievement/>
        </Col>
        <Col md={4} lg={4} >
            <Card 
             heading={`How you can help`} 
             text={`
             Sponsor a child, become a mentor, volunteer in our projects, 
             refer to us children who need support, 
             refer us to people sharing similar vision, help improve our method,
             share our mission with the world
             `}
             buttonText={`Get Involved`}
            />
        </Col>
      </Row>
    </Grid>
  );
};

export default AboutSection;
