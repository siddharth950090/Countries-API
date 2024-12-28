import React from 'react'
import "../Main.css"

export default function CountryShimmer() {

    // new Array(10).fill(' ')

    const mapArray = Array.from({length:10}).map((el, i) => {
        return ( <div key={i} className='country-card-shimmer'>
            <div className='shimmer-img'></div> 
            <div className="card-text-shimmer">
                <h3></h3>
                <p><b> </b></p>
                <p><b> </b></p>
                <p><b> </b></p>
            </div>
        </div>)
    })

  return (
    <main className='countries-container-shimmer'>
        {mapArray}
  </main> 
  )
}
