"use client"

import React, { useState } from 'react'
import SearchManufacturer from './SearchManufacturer'
import { manufacturers } from '@constants'

const Searchbar = () => {
  const [manufacturer, setManufacturer] = useState('')


  const handleSearch = () => {

  }

  return (
    <form className='search-bar' onSubmit={handleSearch}>

      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  )
}

export default Searchbar