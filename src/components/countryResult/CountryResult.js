import React, { useState } from "react";
import { useParams, Link, useNavigate, useLocation, Outlet } from "react-router-dom";
import style from "./countryresult.module.css";
import "../../global.css";

export default function CountryResult(props) {
  let navigate = useNavigate()
  const location = useLocation();
  

  const {id} = useParams();
  const [thisId,setThisId] = useState()
  const [country] = useState(
    props.countries.filter((country) => country.cca2 === id)
  )[0];

  

  return (
    <div
      className={`${props.darkMode && style["bg-dark-theme"]} ${
        style["min-height"]
      }`}
    >
      <div className="container">

          <button onClick={()=> navigate(-1)} className="btn btn-dark mt-5 mb-5">
            <i class="bi bi-arrow-left"></i> Back{" "}
          </button>

        <div className="row">
          <div className="col-6">
            <div
              className={style.countryResultImage}
              style={{ ["background-image"]: `url(${country.flags.svg}) ` }}
            ></div>
          </div>

          <div className="col-6 d-flex align-items-center justify-content-end">
            <div>
              <div className="row mb-3">
                <div className="col-12">
                  <h1>{country.name.common}</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <ul className="undecorated-ul ">
                    <li>
                      <b>Native Name:</b> {country.name.common}{}
                    </li>
                    <li>
                      <b>Population:</b> {country.population.toLocaleString('en')  }
                    </li>
                    <li>
                      <b>Region:</b> {country.region}
                    </li>
                    <li>
                      <b>Sub Region:</b> {country.subregion}
                    </li>
                    <li>
                      <b>Capital:</b> {country.capital}
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul className="undecorated-ul">
                    <li>
                      <b>Top Level Domain: </b> {country.tld}
                    </li>
                    <li>
                      <b>Currencies: </b>
                      {country.currencies &&
                        Object.values(country.currencies)
                          .map((currency) => currency.name)
                          .join(", ")}
                    </li>
                    <li>
                      <b>Languages: </b>
                      {country.languages &&
                        Object.values(Object.values(country.languages)).join(
                          ", "
                        )}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-12">
                  <p>
                    <b>Border Countries: </b>
                    {country.borders &&
                      country.borders.map((border) => (
                        <Link to={`/CountryResult/AL`} state={{ from: "country result" }}>
                        <button className="btn btn-dark">{border}</button>
                        </Link>
                      ))}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
