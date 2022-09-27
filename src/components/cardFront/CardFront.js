import React from 'react'
import './CardFront.css'

const CardFrente = ({ formValues }) => {
    const { name, cardNumber, month, year } = formValues;

  return (
    <div className='card-front'>
      <span className='logo_cartao'>
        <svg 
        width="84" 
        height="47" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg">
          <ellipse 
          cx="23.478" 
          cy="23.5" 
          rx="23.478" 
          ry="23.5" 
          fill="#fff" />
          <path d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z" stroke="#fff" />
          </svg>
      </span>

      <div className='card_front_data'>
        <p className='card_number'>{cardNumber}</p>
        <p className='name_person'>{name}</p>
          <div className='validate'>
            <p className='validate_month'>{month}</p>
            <p className='validate_year'>{year}</p>
          </div>
      </div>
    </div>
  )
}

export default CardFrente;