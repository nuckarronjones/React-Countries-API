import React from "react";

export default function Card(props) {
  return (
    <div className="card" style={{"width" : "18rem"}}>
       <img className="card-img-top" src={props.flag} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <div><b>Population: </b>{props.population}</div>
          <div><b>Region: </b>{props.region}</div>
          <div><b>Capital: </b>{props.capital}</div>
        </div>
    </div>
  );
}