import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import style from "./countryresult.module.css";
import "../../global.css";

export default function CountryResult(props) {
  //set country initially to the current ID from the main countries page
  const [countryCode, setCountryCode] = useState(useParams().id);
  const [country, setCountryResult] = useState();
  const [isLoading, setLoading] = useState(true);

  const getCountries = async () => {
    setCountryCode(countryCode); //set the NEW country code to the value changed from the border country buttons
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha/${countryCode}`
    ).then((response) => response.json());

    setCountryResult(response[0]);
    setLoading(false);

    console.log(country);
  };

  //when the country code changes, the component re renders for the same URL
  useEffect(() => {
    getCountries();
  }, [countryCode]);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div
      className={`${props.darkMode && style["bg-dark-theme"]} ${
        style["min-height"]
      }`}
    >
      <div className="container">
        <Link to="/">
          <button
            className={`${props.darkMode && style["dark-btn"]}
                            } p-1 pl-4 pr-4 ml-2 rounded shadow-sm mt-5 mb-5`}
          >
            <i class="bi bi-arrow-left"></i> Back{" "}
          </button>
        </Link>

        <div className="row">
          <section className="col-12 col-md-6 d-flex align-items-center justify-content-center">
            <div
              className={style.countryResultImage}
              style={{ ["background-image"]: `url(${country.flags.svg}) ` }}
            ></div>
          </section>

          <section className="col-12 col-md-6 d-flex align-items-center justify-content-end">
            <div>
              <div className="row mb-3">
                <div className="col-12">
                  <h1>{country.name.common}</h1>
                </div>
              </div>

              <div className="row">

                <aside className="col-6">
                  <ul className="undecorated-ul ">
                    <li>
                      <b>Native Name:</b> {country.name.common}
                      {}
                    </li>
                    <li>
                      <b>Population:</b>{" "}
                      {country.population.toLocaleString("en")}
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
                </aside>
                
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
                    <div className="row mt-2">
                      {country.borders &&
                        country.borders.map((border) => (
                          <Link
                            to={`/CountryResult/${border}`}
                            state={{
                              dark: props.darkMode,
                            }}
                          >
                            {/* When you click a country, the countryID is set to the border -> useEffect listens -> sends api request -> re-renders component */}
                            <div
                              className={`${props.darkMode && style["dark-btn"]}
                            } col-1 d-inline p-1 pl-3 pr-3 ml-2 rounded shadow-sm`}
                              onClick={() => {
                                setCountryCode(border);
                              }}
                            >
                              {border}
                            </div>
                          </Link>
                        ))}
                    </div>
                  </p>
                </div>
                
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
