import React, { useState } from 'react'
import './Personaje.css'

function Personaje({personaje}) {
  const [volteo, setVolteo] = useState(false)
  return (
    <div>
      <img
       src={personaje.image}
       alt={
        personaje.name
       } 
       className={volteo ? "volteo" : "imagen"}
       onClick={() => setVolteo(!volteo)}
       />
    </div>
  )
}

export default Personaje