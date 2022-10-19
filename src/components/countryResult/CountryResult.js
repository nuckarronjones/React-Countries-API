import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function CountryResult(props) {
  const [params] = useState(useParams().id);
  const [country] = useState(
    props.countries.filter((country) => country.cca2 === params)
  );

  console.log(country[0]);

  return (
    <>
      <div className="container">
        <Link to="/">
          <button className="btn btn-dark">Back</button>
        </Link>
        <div className="row">
          <div className="col-6">
            <img className="w-100 h-100" src={country[0].flags.png} />
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-6">
                <p>Native Name: {country[0].name.common}</p>
                <p>Population: {country[0].population}</p>
                <p>Region: {country[0].region}</p>
                <p>Sub Region: {country[0].subregion}</p>
                <p>Capital: {country[0].capital}</p>
              </div>
              <div className="col-6">
                <p>Top Level Domain: {country[0].tld}</p>
                <p>Currencies:</p>
                <p>Languages:</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
