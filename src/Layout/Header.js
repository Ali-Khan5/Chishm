import React, { Component } from "react";
import { Navbar, NavItem, MenuItem, NavDropdown, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import LogoImg from './../media/Capture.PNG';

import "./style.css";
class Header extends Component {
  render() {
    return (
      <div>
        <div style={{ textAlign: "center", backgroundColor: "#f5f5f5" }}>
          <img
            src={LogoImg}
            alt="Our Chishm Logo"
          height={95}
          width={210}
          style={{marginTop:'10px'}}
          
          />
        </div>
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
             <Navbar.Brand>
            {/* <a href="#brand">
              <img src="http://res.cloudinary.com/dcw1i97ph/image/upload/c_fit,h_100,w_150/v1536947011/Caaaaaaapture_pyzuz7.png" alt="Our Chishm Logo" />
            </a> */}
          </Navbar.Brand>
          <Navbar.Toggle /> 
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav >
              <LinkContainer to="/">
                <NavItem eventKey={1}> Home </NavItem>
              </LinkContainer>
              <LinkContainer to="/about" >
                <NavItem eventKey={2} >About Us</NavItem>
              </LinkContainer>
              <LinkContainer to="/stories">
                <NavItem eventKey={3}>Our Stories</NavItem>
              </LinkContainer>
              <NavDropdown 
                eventKey={4}
                title="Programs"
                id="basic-nav-dropdown"
              >
               <LinkContainer to="/mentoring#mentor">
                <MenuItem eventKey={4.1} href="/mentoring#mentor">
                  {" "}
                  Mentoring Program
                </MenuItem>
                </LinkContainer>
                <LinkContainer to="/teacher#teacher">
                <MenuItem eventKey={4.2} href="/teacher#teacher">
                  Teacher Training Program
                </MenuItem>
                </LinkContainer>
                <LinkContainer to="/sole#sole">
                <MenuItem eventKey={4.3} href="/sole#sole">
                SOLE</MenuItem>
                </LinkContainer>
               
              </NavDropdown>
              <LinkContainer to="/projects">
              <NavItem eventKey={5} >
                Projects
              </NavItem>
              </LinkContainer>
              <LinkContainer to="/getInvolved">
              <NavItem eventKey={6} href="/getInvolved">
                Get Involved
              </NavItem>
              </LinkContainer>
              <LinkContainer to="/contactus">
              <NavItem eventKey={7} href="/contactus">
                Contact Us
              </NavItem>
              </LinkContainer>
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
      </div>
    );
  }
}
export default Header;
