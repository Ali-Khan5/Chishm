import React from "react";
import "./style.css";
const Members = props => {
  return (
    <div className="SHADOW" style={{backgroundColor:'#F0F0FC',color:'#233067'}}>
      <div className="MemberContainer">
        <img src={props.imgSrc} alt="Avatar" className="image" />
        <div className="overlay">
          {props.memberName}
          <br />
          {props.Title}
        </div>
      </div>
      <br />
      <p style={{ textAlign: "center",padding:'10px',fontWeight:'bold'}}>{props.details}</p>
    </div>
  );
};

export default Members;
