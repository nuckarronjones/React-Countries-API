import React, { useState } from "react";
import style from "./card.module.css";
import { Link, useNavigate } from "react-router-dom";

export default function Card(props) {
  return (
    <>
      <Link to={`/CountryResult/${props.countryID}`}>
        <div
          className={`${
            props.darkMode ? style[`card-dark-mode`] : style[`card-light`]
          } card h-100 w-100`}
        >
          <img className="card-img-top" src={props.flag} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <div>
              <b>Population: </b>
              {props.population}
            </div>
            <div>
              <b>Region: </b>
              {props.region}
            </div>
            <div>
              <b>Capital: </b>
              {props.capital}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
