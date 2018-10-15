import React from "react";
import { Grid, Row, Col } from "react-bootstrap";

// import Gallery from 'react-grid-gallery';

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
        "https://res.cloudinary.com/dcw1i97ph/image/upload/v1537167262/photo2_xwxbfb.png",
      thumbnail:
        "https://res.cloudinary.com/dcw1i97ph/image/upload/v1537167262/photo2_xwxbfb.png",
      thumbnailWidth: 471,
      thumbnailHeight: 320,

      caption: "Our Moto"
    },
    {
      src:
        "https://res.cloudinary.com/dcw1i97ph/image/upload/v1537539263/training_vdj4hc.jpg",
      thumbnail:
        "https://res.cloudinary.com/dcw1i97ph/image/upload/v1537539263/training_vdj4hc.jpg",
      thumbnailWidth: 520,
      thumbnailHeight: 120,

      caption:
        "  We have enrolled a local school teacher into a formal teacher training course in order to improve the education being offered to the children. Here, the teacher undergoing training is giving a weekly workshop to her colleagues at the school to spread the knowledge. "
    },
    {
      src:
        "https://res.cloudinary.com/dcw1i97ph/image/upload/v1537539280/photo1_zailk6.png",
      thumbnail:
        "https://res.cloudinary.com/dcw1i97ph/image/upload/v1537539280/photo1_zailk6.png",
      thumbnailWidth: 320,
      thumbnailHeight: 148,

      caption:
        "One of our international mentors having a session with his mentee over skype."
    },
    {
      src:
        "https://res.cloudinary.com/dcw1i97ph/image/upload/v1537539288/photo3_s300ud.png",
      thumbnail:
        "https://res.cloudinary.com/dcw1i97ph/image/upload/v1537539288/photo3_s300ud.png",
      thumbnailWidth: 320,
      thumbnailHeight: 213,
      caption:
        "Chishm contributed technically and financially to establish a science laboratory that would give students practical experience at Save the Future School in Lyari, Karachi."
    },
    {
      src: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg",
      thumbnail:
        "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_n.jpg",
      thumbnailWidth: 248,
      thumbnailHeight: 320,
      caption: "Big Ben (Tom Eversley - isorepublic.com)"
    },
    {
      src: "https://c1.staticflickr.com/9/8785/28687743710_870813dfde_h.jpg",
      thumbnail:
        "https://c1.staticflickr.com/9/8785/28687743710_3580fcb5f0_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 113,

      caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)"
    }
    // {
    //   src: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
    //   thumbnail:
    //     "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_n.jpg",
    //   thumbnailWidth: 313,
    //   thumbnailHeight: 320,
    //   caption: "Wood Glass (Tom Eversley - isorepublic.com)"
    // },
    // {
    //   src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
    //   thumbnail:
    //     "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg",
    //   thumbnailWidth: 320,
    //   thumbnailHeight: 213,

    //   caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)"
    // }
  ]
};
export default OurStories;
