import React, { useState } from "react";
import Card from "./Card";

export default function Results(props) {

  return (
    <>
      <div className="row">
        {props.countries &&
          props.countries.map((country, index) => (
            <div className="col-12 col-md-3 mb-4">
              <Card
                key={index}
                name={country.name.common}
                flag={country.flags.png}
                population={country.population}
                region={country.region}
                capital={country.capital}
              />
            </div>
          ))}
      </div>
    </>
  );
}
