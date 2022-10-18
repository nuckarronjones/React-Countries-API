import React, { useState, useEffect } from "react";
import Interface from "./components/Interface/Interface";
import Nav from "./components/Nav/Nav"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CountryResult from "./components/countryResult/CountryResult";
import "./global.css"

export default function App() {
  const [countries, setCountries] = useState();
  const [darkMode, setDarkMode] = useState(false);

  //function to get countries data from API
  const getCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all").then(
      (response) => response.json()
    );

    setCountries(
      response.sort((a, b) => a.name.common.localeCompare(b.name.common))
    );
  };


  useEffect(() => {
    getCountries();
  }, []);

  const toggleDarkMode = () => {
    return darkMode ? setDarkMode(false) : setDarkMode(true);
  };

  return (
    <>
      {/* <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} /> */}
      {/* <Interface darkMode={darkMode} countries={countries} /> */}

      <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Interface darkMode={darkMode} countries={countries} />} />
        </Routes>

        <Routes>
          <Route path="/CountryResult" element={<CountryResult />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
