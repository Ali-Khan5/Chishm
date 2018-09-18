import React from 'react';
import { Carousel } from 'react-bootstrap'
import Img1 from './../photo2.png';
import Img2 from './../photo1.png';
import Img3 from './../photo3.png'
import './style.css'
let HomeCarousal =()=>{
    return(
        <Carousel >
  <Carousel.Item>
    <img className="fullResImg" alt="900x500" src='http://res.cloudinary.com/dcw1i97ph/image/upload/c_scale,h_700,w_1609/v1537167262/photo2_xwxbfb.png' />
    <Carousel.Caption>
      {/* <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img className="fullResImg" alt="900x500" src={Img2} />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img className="fullResImg"  alt="900x500" src={Img3} />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
}

export default HomeCarousal;