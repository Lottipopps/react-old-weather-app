import React from "react";
import "./styles.css";
import Forecast from "./Forecast.js";
import Searchform from "./Searchform.js";
import Footer from "./Footer.js";

function App() {
  return (
    <div className="container">
      <div className="weather-box">
        <Searchform />
        <Forecast />
      </div>
      <Footer />
    </div>
  );
}

export default App;
