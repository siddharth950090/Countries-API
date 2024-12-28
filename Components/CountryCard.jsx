import React from 'react'
import { Link } from 'react-router-dom'

export default function CountryCard(props, key) {
  // console.log(props.data)
  return (
    <Link to={`/${props.name}`} className="country-card" key = {key} state={props.data}>
      <img src={props.flag} alt="flag" className="flag" />
      <div className="card-text">
        <h3>{props.name}</h3>
        <p><b>Region: </b>{props.region}</p>
        <p><b>Capital: </b>{props.capital}</p>
        <p><b>Population: </b>{props.population}</p>
      </div>
    </Link> 
  )
}
