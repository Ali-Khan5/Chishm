import React from "react";
import { Grid, Carousel, Row, Col } from "react-bootstrap";
import Img1 from "./../media/pictures/saad.jpg";
import Img2 from "./../media/pictures/sadia.png";
import Img3 from "./../media/pictures/faraz.jpg";

import Gallery from "react-grid-gallery";
// const IMAGES = [
//   {
//     src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
//     thumbnail:
//       "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
//     thumbnailWidth: 320,
//     thumbnailHeight: 174,

//     caption: "After Rain (Jeshu John - designerspics.com)"
//   },
//   {
//     src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
//     thumbnail:
//       "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
//     thumbnailWidth: 320,
//     thumbnailHeight: 212,
//     tags: [
//       { value: "Ocean", title: "Ocean" },
//       { value: "People", title: "People" }
//     ],
//     caption: "Boats (Jeshu John - designerspics.com)"
//   },

//   {
//     src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
//     thumbnail:
//       "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
//     thumbnailWidth: 320,
//     thumbnailHeight: 212
//   }
// ];
const OurStories = () => {
  return (
    <div>
      <Grid>
        <Row>
          <Col>
            <h2>Our Stories</h2>
            {/* <Gallery images={IMAGES}/> */}
            <Demo4 />
          </Col>
        </Row>
      </Grid>
      <div fluid="true" className="testimonals">
        <Grid className="SHADOW" fluid>
          <Row className="show-grid">
            <Col
              md={12}
              style={{
                height: "100%",
                backgroundColor: "#fffff3",
                color: "rgb(25, 86, 147)",
                borderRadius: "2px"
              }}
            >
              {" "}
              <Col mdOffset={1}>
                <br />
                <h2 style={{ fontSize: "35px" }}>
                  {" "}
                  <span style={{ borderBottom: "3px solid rgb(25, 86, 147)" }}>
                    Testimonials{" "}
                  </span>{" "}
                </h2>
                <hr />
              </Col>
              <Carousel controls={false}>
                <Carousel.Item className="CarousalPersonStyling">
                  <center>
                    <img className="testimonalPic" src={Img1} alt="Saad's " />
                    <p
                      className="TestimonialPersonParagrapghStyling"
                      style={{ color: "rgb(25, 86, 147)", fontSize: "18px" }}
                    >
                      <q>
                        {" "}
                        It was fun when I started giving my mentee topics to
                        think on and then we both would discuss our opinions in
                        the next meeting until he started giving me topics to
                        think about - then it became exciting and challenging.
                        We both have learnt so much together
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
                    <p
                      className="TestimonialPersonParagrapghStyling"
                      style={{ color: "rgb(25, 86, 147)", fontSize: "18px" }}
                    >
                      <q>
                        {" "}
                        I feel lucky to be the mentor of a very intelligent
                        girl. Her opinions on different topics are food for
                        thought. Her ambitious nature and curiosity never cease
                        to amaze me and it is a journey that continues to be
                        enlightening for both of us
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
                    <p
                      className="TestimonialPersonParagrapghStyling"
                      style={{ color: "rgb(25, 86, 147)", fontSize: "18px" }}
                    >
                      <q>
                        {" "}
                        I believe that if you are privileged, then it becomes
                        your duty to share it with the society. At Chishm we
                        share the privilege of being educated with communities
                        struggling for survival with the conviction that one day
                        this would change their fate. On behalf of this
                        institution I invite you all to join hands with us and
                        create the wind of change
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
      </div>
    </div>
  );
};

class Demo4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: this.props.images
    };
  }

  render() {
    var images = this.state.images.map(i => {
      i.customOverlay = (
        <div style={captionStyle}>
          <div>{i.caption}</div>
        </div>
      );
      return i;
    });

    return (
      <div
        style={{
          display: "block",
          minHeight: "1px",
          width: "100%",
          border: "1px solid #ddd",
          overflow: "auto"
        }}
      >
        <Gallery images={images} enableImageSelection={false} />
        <br />
        <br />
      </div>
    );
  }
}

const captionStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  maxHeight: "250px",
  overflow: "hidden",
  position: "absolute",
  bottom: "0",
  width: "100%",
  color: "white",
  padding: "2px",
  fontSize: "90%"
};

Demo4.defaultProps = {
  images: [
    {
      src:
        "https://res.cloudinary.com/dcw1i97ph/image/upload/v1537539288/photo3_s300ud.png",
      thumbnail:
        "https://res.cloudinary.com/dcw1i97ph/image/upload/v1537539288/photo3_s300ud.png",
      thumbnailWidth: 420,
      thumbnailHeight: 150,
      caption:
        "Chishm contributed technically and financially to establish a science laboratory at Save the Future School in Lyari, Karachi. Such facilities are essential to for giving students a strong foundation"
    },
    {
      src:
        "https://res.cloudinary.com/dcw1i97ph/image/upload/v1543481705/783_million_people_do_not_have_access_to_clean_and_safe_drinking_water_globally_according_to_the_United_Nations_Millennium_Development_Goals_Report_2_nzn4pb.png",
      thumbnail:
        "https://res.cloudinary.com/dcw1i97ph/image/upload/v1543481705/783_million_people_do_not_have_access_to_clean_and_safe_drinking_water_globally_according_to_the_United_Nations_Millennium_Development_Goals_Report_2_nzn4pb.png",
      thumbnailWidth: 420,
      thumbnailHeight: 150,

      caption:
        "Mentoring session underway between an overseas mentor and his mentee"
    },
    {
      src:
        "https://res.cloudinary.com/dcw1i97ph/image/upload/v1544555053/IMG_0326_p0nodx.jpg",
      thumbnail:
        "https://res.cloudinary.com/dcw1i97ph/image/upload/v1544555053/IMG_0326_p0nodx.jpg",
      thumbnailWidth: 420,
      thumbnailHeight: 150,

      caption:
        "  A teacher sponsored by us to receive teacher training education is now training her fellow teachers. "
    },
    {
      src:
        "https://res.cloudinary.com/dcw1i97ph/image/upload/v1544538687/IMG_0289_xpdzqx.jpg",
      thumbnail:
        "https://res.cloudinary.com/dcw1i97ph/image/upload/v1544538687/IMG_0289_xpdzqx.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 150,

      caption: "An overseas mentor using digital mentoring to tutor his mentee"
    }
  ]
};
export default OurStories;
