import React, { useEffect, useState } from 'react'
import data from '../data'
import CountryCard from './CountryCard'
import CountryShimmer from './CountryShimmer'

export default function CountryContainer({query}) {
  const[data, setData] = useState([])
  useEffect(() =>{
    fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json())
    .then((countryData) =>{
      setData(countryData)
    })
  },[])



  // console.log(filtered)
    // console.log(data)
    const array = data.filter((country) =>
      country.name.common.toLowerCase().includes(query)  || country.region.toLowerCase().includes(query)
      ).map((country) => {
      return (
         data.length === 0? ('loading......h') :  <CountryCard key ={data.indexOf(country)}
          name ={country.name.common} 
          flag = {country.flags.svg} 
          region ={country.region} 
          capital = {country.capital?.[0]}  
          population={country.population}
          data = {country}  />)
    })
    // console.log(array)
  return (
    <>{!data.length? (<CountryShimmer /> ): (<div className="countries-container">{array}
    </div>)}</>
  )
}
 