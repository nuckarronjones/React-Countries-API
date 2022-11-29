import React from "react";
import Card from "./Card";
import "../../global.css";

export default function Results(props) {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          {props.countries &&
            props.countries.map((country, index) => (
              <div className="col-12 col-md-3 col-sm-6 mb-4" key={country.name.common}>
                <Card
                  countryID={country.cca2}
                  darkMode={props.darkMode}
                  name={country.name.common}
                  flag={country.flags.svg}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
