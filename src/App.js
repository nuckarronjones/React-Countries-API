import React, { useState, useEffect } from "react";
import Nav from "./components/Nav/Nav";
import Interface from "./components/Interface/Interface";

export default function App() {
  const [countries, setCountries] = useState();

  //function to get countries data from API
  const getCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all").then(
      (response) => response.json()
    );

    setCountries(response);
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <>
      <Nav />
      <Interface countries={countries} />
    </>
  );
}
