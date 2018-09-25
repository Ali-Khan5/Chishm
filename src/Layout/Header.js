import React, { Component } from "react";
import { Navbar, NavItem, MenuItem, NavDropdown, Nav } from "react-bootstrap";
 import { Link } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';

import "./style.css";
class Header extends Component {
  render() {
    return (
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">
              <img src="http://res.cloudinary.com/dcw1i97ph/image/upload/c_fit,h_100,w_150/v1536947011/Caaaaaaapture_pyzuz7.png" alt="Our Chishm Logo" />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
          <LinkContainer to="/">
            <NavItem eventKey={1}> Home
            </NavItem>
             </LinkContainer>
             <LinkContainer to="/about">
            <NavItem eventKey={2}>
             About Us
            </NavItem>
            </LinkContainer>
            <LinkContainer to="/stories">
            <NavItem eventKey={3}>
              Our Stories
            </NavItem>
            </LinkContainer>
            <NavDropdown eventKey={4} title="Programs" id="basic-nav-dropdown">
         
           <MenuItem eventKey={4.1} href="/programs#mentor">     Mentoring Program</MenuItem>
             <MenuItem eventKey={4.2} href="/programs#teacher" >Teacher Training Program</MenuItem>
              <MenuItem eventKey={4.3 } href="/programs#sole">SOLE</MenuItem>
              {/* <MenuItem divider />
              <MenuItem eventKey={4.3}>Separated link</MenuItem> */}
            </NavDropdown>
            <NavItem eventKey={5} href="#">
              Projects
            </NavItem>
            <NavItem eventKey={6} href="#">
              Get Involved
            </NavItem>
            <NavItem eventKey={7} href="#">
              Contact Us
            </NavItem>
          </Nav>
          {/* <Nav pullRight>
            <NavItem eventKey={1} href="#">
              Link Right
            </NavItem>
            <NavItem eventKey={2} href="#">
              Link Right
            </NavItem>
          </Nav> */}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default Header;
