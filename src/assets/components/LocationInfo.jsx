import React from 'react'
import './styles/LocationInfo.css'

const LocationInfo = ({location}) => {
  return (
    <section className='locationinfo'>
        <h2 className='locationinfo__name'>{location?.name}</h2>
        <br />
        <ul className='locationinfo__info'>
          <li><span>Type: </span>{location?.type}</li>
          <li><span>Dimension: </span>{location?.dimension}</li>
          <li><span>Population: </span>{location?.residents.length}</li>
        </ul>
      </section>
     
  )
}

export default LocationInfo