import React from "react";
import "./style.css";
const Members = props => {
  return (
    <div className="SHADOW">
      <div className="MemberContainer">
        <img src={props.imgSrc} alt="Avatar" className="image" />
        <div className="overlay">
          {props.memberName}
          <br />
          {props.Title}
        </div>
      </div>
      <br />
      <p style={{ textAlign: "justify",padding:'5px' }}>{props.details}</p>
    </div>
  );
};

export default Members;
