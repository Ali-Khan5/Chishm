import React, { Component } from "react";


import HomeCarousal from "./Components/HomeCarousal";
import About from "./Components/AboutSection";
import Testimonials from "./Components/Testimonials";

class App extends Component {
  render() {
    return (
      <div>
        <HomeCarousal />
        <br />
        <About />
        <br />
        <Testimonials /> <br />
      </div>
    );
  }
}

export default App;
