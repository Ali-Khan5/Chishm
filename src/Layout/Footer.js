import React from 'react';
import { Grid, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const Footer=()=>{
    return(
        <div style={{backgroundColor:'#f5f5f5',padding:'15px',color:'#000000'}}>
            <Grid>
                <Row>   
                    <Col md={6}>
                    <center>
                        <h4 style={{color:"rgb(25, 86, 147)"}}>  Contact  </h4>
                        <h3>info@chishm.org</h3>
                        
                        <h3 style={{color:"rgb(25, 86, 147)"}}>  Explore our Programs  </h3>
                       <Link to="/mentoring" ><h4>Mentoring</h4></Link>
                       <Link to="/teacher" >  <h4>Teacher training</h4></Link>
                       <Link to="/sole" ><h4>Sole</h4></Link>
                    </center>
                    </Col>
                    <Col md={6}>
                    <center>
                        <h4 style={{color:"rgb(25, 86, 147)"}} >Social Links</h4>
                      
                       <span style={{fontSize: '2.4em',color:'#3b5998'}}><i className="fab fa-facebook-square"></i></span>
                       <span style={{fontSize: '2.4em',color:'#38A1F3'}}>  <i className="fab fa-twitter-square"></i></span>
                       <h5>All contents displayed on the website belong to Chishm and to their partner school</h5>
                    </center>
                    </Col>

                </Row>
            </Grid>
        </div>
    );
}
export default Footer;