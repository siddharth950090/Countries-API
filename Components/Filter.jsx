import React from 'react'

export default function Filter({setQuery}) {
  return (
    <select className="filter" onChange={(e) => setQuery(e.target.value.toLowerCase())}>
        <option hidden>Filter by Region</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        <option value="Africa">Africa</option>
    </select>
  )
}
