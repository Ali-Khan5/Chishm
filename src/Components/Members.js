import React from "react";
import "./style.css";
const Members = props => {
  return (
    <div className="SHADOW TeamMemberWIDTH" style={{backgroundColor:'#F0F0FC',color:'#233067'}}>
      <div className="MemberContainer">
        <img src={props.imgSrc} alt="Avatar" className="image" />
        <div className="overlay">
          {props.memberName}
          <br />
          {props.Title}
        </div>
      </div>
      
      <p style={{ textAlign: "center",margin:'25px 30px',fontWeight:'bold'}}>
      {props.details}
      </p>
    </div>
  );
};

export default Members;
