import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/lib/Button";
import Header from "./Layout/Header";
import HomeCarousal from './Components/HomeCarousal'
import About from './Components/AboutSection'
import Testimonials from './Components/Testimonials';
class App extends Component {
  render() {
    return (
      <div className="theme"> 
        <div >
        <Header />
          <HomeCarousal/>
          <br/>
          <About/>
          <br />
          <Testimonials/>
        </div>
      </div>
    );
  }
}

export default App;
