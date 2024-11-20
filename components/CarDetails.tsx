import React from 'react'
import { CarProps } from '@types';

interface carDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}


const CarDetails = () => {
  return (
    <div>CarDetails</div>
  )
}

export default CarDetails