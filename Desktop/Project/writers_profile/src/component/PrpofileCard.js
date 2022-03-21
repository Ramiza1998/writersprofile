import React from 'react'

function PrpofileCard(writer) {
  return (
    <div className='card'>
    <img src= {Image/${writer.avatar}.png }
    height="3000px" width="300px" alt={writer.img}/>

    <div className='textGroup'>
    <h3>{writer.name}</h3>
    <p>{writer.email}</p>
    <p>{writer.phone}</p>

    <botton className='actionBtn'



    </div>
    </div>


  )
}

export default PrpofileCard