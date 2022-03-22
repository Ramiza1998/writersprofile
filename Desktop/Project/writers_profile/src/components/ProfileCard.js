import React from 'react'

function ProfileCard({writer}) {
  return (
    <div className='card'>
    <img src= {`images/${writer.avatar}.png`}
    height="3000px" width="300px" alt={writer.img}/>

    <div className='textGroup'>
    <h3>{writer.name}</h3>
    <p>{writer.email}</p>
    <p>{writer.phone}</p>

    <botton className='actionBtn'>Read Bio</botton>



    </div>
    </div>


  )
}

export default ProfileCard;