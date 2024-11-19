"use client"

import React from 'react'
import {Image, CustomButton} from '@/components'

const Hero = () => {

  const handleScroll = () => {

  }

  return (
    <div>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>Find, book, or rent a car — quickly and easily.</h1>

        <p className='hero__subtitle'>Streamline your car rental experience with our effortless booking process.</p>
      </div>

      <CustomButton
        title="Explore Cars"
        containerStyles="bg-primary-white rounded-full mt-10"
        handleClick={handleScroll}
      />

      <div className="hero__image-container">
        <div className="her__image">
          <Image src="" />
        </div>
      </div>
    </div>
  )
}

export default Hero