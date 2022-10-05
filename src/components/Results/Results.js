import React from 'react'
import Card from "./Card"

export default function Results(props) {
  console.log(props.countries[1])
  
  
  return (
    <>
    <div className="row">
    {
    props.countries && props.countries.map((country,index)=> (
      <div>
        {/* {country.name.common} */}
        <div className="col-3">
        <Card key={index} name={country.name.common} flag={country.flags.png}/>
        </div>
      </div>
   ))}
   </div>
    </>
  )
}