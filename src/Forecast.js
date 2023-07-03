import React from "react";
import "./styles.css";
import Today from "./Today";
import OtherInfo from "./OtherInfo";
import NextWeek from "./NextWeek";

function Forecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <h1>London</h1>
      </div>
      <div className="row ">
        <Today />
        <OtherInfo />
        <hr />
        <NextWeek />
      </div>
    </div>
  );
}
export default Forecast;
