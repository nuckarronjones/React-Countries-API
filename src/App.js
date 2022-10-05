import React, {useState, useEffect} from "react";
import Nav from "./components/Nav/Nav";
import Results from "./components/Results/Results";
import Interface from "./components/Interface/Interface";
import userEvent from "@testing-library/user-event";

export default function App() {

  const [countries, setCountries] = useState()

  //function to get countries data from API
  const getCountries = async()=>{
    const response = await fetch("https://restcountries.com/v3.1/all")
    .then((response)=>response.json())

    setCountries(response)
  }

  useEffect(() => {
    getCountries();
  }, []);

  //console.log(countries[0].name.common)



  return (
    <>
      <Nav />
      <div className="p-3 pr-5 pl-5">
        <Interface />
        <Results countries={countries}/>
      </div>
    </>
  );
}
