import React from "react";
import "./style.css";
const Members = props => {
  return (
    <div className="SHADOW TeamMemberWIDTH" style={{backgroundColor:'#F0F0FC',color:'rgb(25, 86, 147)'}}>
      <div className="MemberContainer">
        <img src={props.imgSrc} alt="Avatar" className="image" />
        <div className="overlay">
          {props.memberName}
          <br />
          {props.Title}
        </div>
      </div>
      
      <p style={{ textAlign: "center",margin:'15px 25px',fontSize:'14px',fontWeight:'bold'}}>
      {props.details}
      </p>
    </div>
  );
};

export default Members;
