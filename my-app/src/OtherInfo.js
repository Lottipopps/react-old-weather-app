import React from "react";
import "./styles.css";

function OtherInfo() {
  return (
    <div className="col-3">
      <ul>
        <li id="date">
          <span role="img" aria-label="calendar">
            🗓️
          </span>{" "}
          Wednesday 22 Feb 2023, 00:37
        </li>
        <li>
          <span role="img" aria-label="globe">
            🌍
          </span>{" "}
          <span id="weather-description">Overcast Clouds </span>
        </li>
        <li>
          <span role="img" aria-label="wind">
            💨
          </span>{" "}
          Wind speed <span id="wind-speed">2</span> km/h
        </li>
        <li>
          <span role="img" aria-label="bubbles">
            🫧
          </span>{" "}
          Humidity <span id="humidity">91</span>%
        </li>
      </ul>
    </div>
  );
}

export default OtherInfo;
