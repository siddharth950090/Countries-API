import React, { useEffect, useState } from 'react'
import "./country.css" 
import CountryShimmer from './CountryShimmer'
import { Link, useLocation, useParams } from 'react-router-dom';
import useWindowSize from "../Hooks/useWindowSize"

export default function CountryDetails() {
    // const countryName = new URLSearchParams(window.location.search).get('name');
    const params = useParams();
    const countryName = params.country
    const location = useLocation()
    //  const windowSize = useWindowSize()

    console.log(location.state)
    // console.log(params)
    // console.log(countryName)

    const[countryData, setCountryData] = useState(null)
    const[notFound, setNotFound] = useState(false)



    function updateCountryData(data){
        setCountryData({
            flag: data.flags.svg,
            name: data.name.common,
            nName: Object.values(data.name.nativeName)[0].common,
            population: data.population,
            region: data.region,
            subregion: data.subregion||"",
            capital: data.capital,
            tld: data.tld,
            currencies: Object.values(data.currencies)[0].name,
            languages: Object.values(data.languages)[0],
            borders: []
            })
            if(!data.borders){
                data.borders = []
            }
            Promise.all(data.borders.map((border) =>{
                return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
                .then((res) => res.json())
                .then(([borderCountry]) => borderCountry.name.common)
            })).then((borders) =>{
                setTimeout(() => setCountryData((prevState) =>({...prevState, borders})))
            })
    }



    useEffect(() =>{


        if(location.state){
            updateCountryData(location.state)
            return
        }
        fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
        .then(res => res.json())
        .then(([data]) =>{ 
            // console.log(data)
            updateCountryData(data)
            
        }).catch((err) =>{
            setNotFound(true)
        })
    },[countryName])

    if(notFound){
        return <div>country Not Found</div>
    }
  return (
    countryData === null? <CountryShimmer/> : <main>
        <div className="country-container">
            <span className="back-btn" onClick={() => history.back()}><i className="fa-solid fa-arrow-left" ></i>&nbsp;&nbsp;Back</span>
        
            <div className="specific-country">
                <img src={countryData.flag} alt="" className="flag-img" />
                <div className="country-info">
                    <h2>{countryData.name}</h2>
                    <div className="rows">
                        <div className="row1">
                            <p><b>Native Name: </b>{countryData.nName}</p>
                            <p><b>Population: </b>{countryData.population}</p>
                            <p><b>Region: </b>{countryData.region}</p>
                            <p><b>Sub Region: </b>{countryData.subRegion}</p>
                            <p><b>Capital: </b>{countryData.capital}</p>
                        </div>
                        <div className="row2">
                            <p><b>Top Level Domain: </b>{countryData.tld}</p>
                            <p><b>Currencies: </b>{countryData.currencies}</p>
                            <p><b>Languages: </b>{countryData.languages}</p>
                        </div>
                    </div>
                </div>
                {countryData.borders.length !== 0 && <p className="border"><b>Border Countries: </b>
                {
                    countryData.borders.map((border) => <Link key={border} to={`/${border}`}>{border}</Link> )
                }
                </p>}
            </div>
        </div>
        
        {/* <h1 style={{textAlign: "center"}}>{windowSize.height} X {windowSize.width} </h1> */}
    </main>
  )
}
