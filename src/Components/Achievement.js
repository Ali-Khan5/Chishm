import React from "react";

import "./style.css";
let Achievement = props => {
  return (
    <div className="ThirdCard">
      <center>
        <h3>Our Impact </h3>
      </center>
      <ul>
        <li>
          {" "}
          <strong>4</strong> Mentors and mentees enrolled in our mentoring
          program.
        </li>
        <li style={{ paddingTop: "11px" }}>
          <strong>1</strong> Teacher enrolled in formal teacher training course.
        </li>
        <li style={{ paddingTop: "12px" }}>
          <strong>1</strong> school supported through various projects.
        </li>
      </ul>
    </div>
  );
};
export default Achievement;
