import React from 'react'
import './SuperHeroes.css'

function SuperHeroe({title, imageSource, text}) {
  return (
    <div className='card text-center mt-4'>
      <div className='overflow'>
        <img src={imageSource} alt='' className='card-img-top'/>
      </div>
      <div className='card-body'>
            <h4 className='card-title'>{title}</h4>
            <p className='card-text'>{text}</p>
      </div>
    </div>
  )
}

export default SuperHeroe