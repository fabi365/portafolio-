import React from 'react'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
      <div className='max-w-[1300px], mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
        <div className='space-y-4 text-purple-400'>
          <h3 className='text-2xl text-gray-200 font-semibold'>Fabian L.</h3>
            <a href="#"><FaWhatsapp className='font-4xl'/></a>
            <a href="#"><FaInstagram className='font-4xl'/></a>
        </div>

        <p className='text-gray-400'>@2024 Fabian L.</p>

      </div>

    </div>

  )
}

export default Footer