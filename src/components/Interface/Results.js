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
              <div className="col-12 col-md-3 col-sm-6 col-md-4 col-lg-3 mb-4 d-sm-block d-flex justify-content-center" key={country.name.common}>
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
