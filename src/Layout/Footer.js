import React from 'react';
import { Grid, Row, Col } from "react-bootstrap";
const Footer=()=>{
    return(
        <div style={{backgroundColor:'#f5f5f5',padding:'15px',color:'#000000'}}>
            <Grid>
                <Row>   
                    <Col md={6}>
                    <center>
                        <h4>  Contact  </h4>
                        <h3>info@chishm.org</h3>
                    </center>
                    </Col>
                    <Col md={6}>
                    <center>
                        <h4>Social Links</h4>
                      
                       <span style={{fontSize: '2.4em'}}><i className="fab fa-facebook-square"></i></span>
                       <span style={{fontSize: '2.4em'}}>  <i className="fab fa-twitter-square"></i></span>
                    </center>
                    </Col>

                </Row>
            </Grid>
        </div>
    );
}
export default Footer;