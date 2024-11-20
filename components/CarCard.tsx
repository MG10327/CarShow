import React from 'react'
import Image from 'next/image'
import { CarProps } from '@types';
import { CustomButton } from '@components';

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({car}: CarCardProps) => {
  const {city_mpg, year, make, model, transmission, drive } = car

  const carRent = calculateCarRent(city_mpg, year)

  return (
    <div className='car-card group'>
      <div className="car-card__content">
        <div className='car-card__content'>
          <h2>{make} {model}</h2>
        </div>

        <p>
          <span>
            {carRent}
          </span>
        </p>
      </div>
    </div>
  )
}

export default CarCard