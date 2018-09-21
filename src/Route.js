import React, { Component } from "react";
import { Route, Router } from "react-router-dom";
import Home from "./App";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import createBrowserHistory from "history/createBrowserHistory";
import About from "./About";
import Stories from "./OurStories";
const history = createBrowserHistory();

class Routers extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="theme">
          <div className="fl-page">
            <Header />
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About}/>
                <Route path="/stories" component={Stories}/>
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
