import React from 'react'
import './CardBack.css'


 const CardBack = ({ codigo }) => {

  return (
    <div className='card-back'> 
        <p className='cvc'>
          {codigo}
        </p>
    </div>
  )
}

export default CardBack;