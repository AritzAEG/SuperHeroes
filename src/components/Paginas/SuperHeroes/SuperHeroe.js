import React from 'react'


function SuperHeroe({title, imageSource, text}) {
  return (
    <div className='card text-center mt-4'>
        <img src={imageSource} alt='' />
        <div className='card-body'>
            <h4 className='card-title'>{title}</h4>
            <p className='card-text'>{text}</p>
        </div>
    </div>
  )
}

export default SuperHeroe