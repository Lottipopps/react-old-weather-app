import React from "react";
import "./styles.css";
import "./Forecast";
import "./Searchform";
import "./Footer";

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
