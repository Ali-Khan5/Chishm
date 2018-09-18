import React from "react";
import { Button } from 'react-bootstrap' ;
import "./style.css";
let Cardd = props => {
  return (
    <div >
      {props.colorScheme == "prime" ? (
        <div className="cardBorder" >
          {props.text ? <p>{props.text}</p> : null}
        </div>
      ) : (
        <div className="SecondryCard">
          {props.heading ? <h3>{props.heading}</h3> : null}
          {props.text ? <p>{props.text}</p>  : <ul style={{textAlign:'justify'}}>
                 <li> <strong>4</strong> Mentors and mentees enrolled in our mentoring program.</li>
                 <li><strong>1</strong> Teacher enrolled in formal teacher training course.</li>
                 <li><strong>1</strong> school supported through various projects.</li>
                 <br/>
                 
                  </ul>}
         { props.buttonText ?<Button bsStyle="primary"> {props.buttonText} </Button>:null}
        </div>
      )}
    </div>
  );
};
export default Cardd;
