import React from "react";
import { Carousel } from "react-bootstrap";
import Img3 from "./../media/pictures/photo3.png";
import "./style.css";
let HomeCarousal = () => {
  return (
    <Carousel indicators={false} >
      <Carousel.Item >
      
        <div className="MemberContainer" />
        <img
          src={
            "https://res.cloudinary.com/dcw1i97ph/image/upload/v1543483922/783_million_people_do_not_have_access_to_clean_and_safe_drinking_water_globally_according_to_the_United_Nations_Millennium_Development_Goals_Report_4_vf14hy.png"
          }
          alt="Avatar"
          className=" fullResImg "
        />
        <div className="overlayCarousal">
       
          Chishm is a platform to support education amongst the underprivileged
          youth of Pakistan by bridging them to privileged people
        </div>
      </Carousel.Item>
      <Carousel.Item>
     
        <div className="MemberContainer">
          <img src={Img3} alt="Avatar" className="fullResImg" />
          <div className="overlayCarousal">
            Chishm contributed technically and financially to establish a
            science laboratory at Save the Future School in Lyari, Karachi. Such
            facilities are essential to for giving students a strong foundation
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      
        <div className="MemberContainer">
          <img
            src={
              "https://res.cloudinary.com/dcw1i97ph/image/upload/v1543481705/783_million_people_do_not_have_access_to_clean_and_safe_drinking_water_globally_according_to_the_United_Nations_Millennium_Development_Goals_Report_2_nzn4pb.png"
            }
            alt="Avatar"
            className="fullResImg"
          />
          <div className="overlayCarousal">
            Mentoring session underway between an overseas mentor and his mentee
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        
        <div className="MemberContainer">
          <img
            src={
              "https://res.cloudinary.com/dcw1i97ph/image/upload/v1543157325/WhatsApp_Image_2018-11-13_at_11.54.57_AM_vvqmbx.jpg"
            }
            alt="Avatar"
            className="fullResImg"
          />
          <div className="overlayCarousal">
            A teacher sponsored by us to receive teacher training education is
            now training her fellow teachers
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousal;
