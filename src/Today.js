import React from "react";
import "./styles.css";

function Today() {
  return (
    <div className="col-6">
      <div className="row">
        <div className="d-flex icon-temperature">
          <img src="" alt="" id="weather-icon" width="170px" />
          <div>
            <span id="current-temperature"> 6</span>{" "}
            <span className="conversion-btns">°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Today;
