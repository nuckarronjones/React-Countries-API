import React from "react";

export default function Filter(props) {

  //function that runs custom event handler passed down from props when the dropdown changes
  function filterCountry(e){
    let filter = e.target.value
    props.onChangeRegion(filter)
  }

  return (
    <div className="float-md-right"> 
      <select onChange={filterCountry}> 
        <option disabled selected>
          Filter by Region
        </option>
        <option value="Africa">Africa</option> 
        <option value="Asia">Asia</option> 
        <option value="America">America</option> 
        <option value="Europe">Europe</option> 
        <option value="Oceania">Oceania</option> 
      </select> 
    </div> 
  );
}