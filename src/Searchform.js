import React from "react";
import "./styles.css";

function Searchform() {
  return (
    <form id="search-form" autoComplete="off">
      <div className="row">
        <div className="col-8">
          <input
            type="search"
            placeholder="Search for a city"
            className="form-control"
            id="city-search"
          />
        </div>
        <div className="col-4">
          <input
            type="submit"
            value="Search"
            className="btn btn-primary btn-md"
          />
          <input
            type="button"
            value="Current Location"
            id="current-location"
            className="btn btn-success btn-sm"
          />
        </div>
      </div>
    </form>
  );
}

export default Searchform;
