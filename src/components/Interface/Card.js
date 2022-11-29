import React from "react";
import style from "./card.module.css";
import { Link } from "react-router-dom";
import "../../global.css";

export default function Card(props) {
  return (
    <>
      <Link
        to={`/CountryResult/${props.countryID}`}
        state={{
          darkMode: props.darkMode,
        }}
      >
        <div
          className={`${
            props.darkMode ? style[`card-dark-mode`] : style[`card-light`]
          } card h-100 w-100`}
        >
          <div
            className="card-img-top"
            style={{ ["background-image"]: `url(${props.flag})` }}
          ></div>
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <div>
              <b>Population: </b>
              {props.population.toLocaleString("en")}
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
