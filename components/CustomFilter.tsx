"use client"

import React, {Fragment, useState} from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Listbox, Transition } from '@headlessui/react'
import { CustomFilterProps } from '@types'
import { useSearchParams } from 'next/navigation'

const CustomFilter = ({title, options}: CustomFilterProps) => {
  const [selected, setSelected] = useState(options[0])
  const router = useRouter()

  const handleUpdateParams = (type: string, value: string) => {
    const newPathName = ""

    const searchParams = new URLSearchParams(window.location.search)
    // Update or delete the 'model' search parameter based on the 'model' value
    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    // Update or delete the 'manufacturer' search parameter based on the 'manufacturer' value
    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
       searchParams.delete("manufacturer");
    }

    router.push(newPathName)
  }

  return (
    <div className='w-fit'>
      <Listbox
        value={selected}
        onChange={(e) => setSelected(e)}
      >
        <div className='relative w-fit z-10'>
          <Listbox.Button className="custom-filter__btn">
            <span className='block truncate'>{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              width={20}
              height={20}
              className='ml-4 object-contain'
              alt="chevron up down"
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="custom-filter__options">
              {options.map((option) =>
                <Listbox.Option
                  key={option.title}
                  value={option}
                  className={({active}) => `relative cursor-default select-none py-2 px-4 ${active ? "bg-primary-blue-100 text-white" : "text-gray-900"}`}
                >
                  {({selected}) =>
                    <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                      {option.title}
                    </span>
                  }
                </Listbox.Option>
              )}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter