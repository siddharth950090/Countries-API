import React,{useEffect, useState} from 'react'

import Search from './Search'
import Filter from './Filter'
import CountryContainer from './CountryContainer'
import useWindowSize from "../Hooks/useWindowSize"

export default function Home() {
    
    const[query, setQuery] = useState('')
    // const windowSize = useWindowSize()
  return (
    <main>
        <div className="container main-container">
            <div className="functions">
              <Search setQuery= {setQuery}/>
              <Filter setQuery= {setQuery} />
            </div>
            {/* <h1 style={{textAlign: "center"}}>{windowSize.height} X {windowSize.width} </h1> */}
            <CountryContainer query= {query}/>
        </div>
      </main>
  )
}
