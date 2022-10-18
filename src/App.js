import React, { useState, useEffect } from "react";
import Nav from "./components/Nav/Nav";
import Interface from "./components/Interface/Interface";
import styles from "./global.module.css"

export default function App() {
  const [countries, setCountries] = useState();
  const [darkMode,setDarkMode] = useState(false)

  //function to get countries data from API
  const getCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all").then(
      (response) => response.json()
    );

    setCountries(response.sort((a, b) => a.name.common.localeCompare(b.name.common)));
  };

  useEffect(() => {
    getCountries();
  }, []);

  const toggleDarkMode = () =>{
    return (darkMode ? setDarkMode(false) : setDarkMode(true))
  }

  return (
    <div>
      <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Interface  darkMode={darkMode} countries={countries} />
    </div>
  );
}