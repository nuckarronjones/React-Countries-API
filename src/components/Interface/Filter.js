import React from "react";

export default function Filter() {
  return (
    <div className="float-md-right">
      <select name="cars">
      <option value="" disabled selected>Filter by Region</option>
        <option value="volvo">Africa</option>
        <option value="saab">Asia</option>
        <option value="mercedes">America</option>
        <option value="audi">Europe</option>
        <option value="audi">Oceana</option>
      </select>
    </div>
  );
}
