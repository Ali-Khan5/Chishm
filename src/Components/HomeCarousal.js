import React from "react";
import { Carousel } from "react-bootstrap";
import Img2 from "./../media/pictures/photo1.png";
import Img3 from "./../media/pictures/photo3.png";
import "./style.css";
let HomeCarousal = () => {
  return (
    <Carousel indicators={false}>
      <Carousel.Item>
        <img 
          className="fullResImg"
          alt="900x500"
          src="https://res.cloudinary.com/dcw1i97ph/image/upload/c_fit,h_400,w_1657/v1537167262/photo2_xwxbfb.png"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img  className="fullResImg" alt="900x500" src={Img3} />
        <Carousel.Caption>
          <h3 style={{backgroundColor:'#233067',padding:'25px',borderRadius:'5px',opacity:'0.92'}}>
            Chishm contributed technically and financially to establish a
            science laboratory ,Save the Future School in Lyari, Karachi.{" "}
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img  className="fullResImg" alt="900x500" src={Img2} />
        <Carousel.Caption>
          <h3 style={{backgroundColor:'#233067',padding:'25px',borderRadius:'5px',opacity:'0.92'}}>
            One of our international mentors having a session with his mentee
            over skype.
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousal;
