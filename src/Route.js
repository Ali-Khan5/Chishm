import React, { Component } from "react";
import { Route, Router } from "react-router-dom";
import Home from "./EntirePageComponents/Home";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import createBrowserHistory from "history/createBrowserHistory";
import About from "./EntirePageComponents/About";
import Stories from "./EntirePageComponents/OurStories";
import Programs from "./Programs";
import Mentoring from "./EntirePageComponents/MentoringProgram";
import TeacherTraining from "./EntirePageComponents/TeacherProgram";
import SOLE from './EntirePageComponents/Sole.js'
import Project from './EntirePageComponents/Projects';
const history = createBrowserHistory();

class Routers extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="theme">
          <div className="fl-page">
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/stories" component={Stories} />

            <Route path="/mentoring" component={Mentoring} />
            <Route path="/teacher" component={TeacherTraining} />
            <Route path="/sole" component={SOLE} />
            <Route path="/projects" component={Project}/>
            <div className="fl-page-footer-wrap">
              <Footer />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default Routers;
