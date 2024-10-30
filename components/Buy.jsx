import Image from 'next/image'
import React from 'react'
import logo1 from '../app/assets/logo.jpg'

const Buy = () => {
  return (
    <div className='bg-[#6878C1] py-5 px-2 md:px-16 lg:px-24'>
      <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-[60px] text-white text-center font-bold'>
        Buy Token Now
      </h2>
      <div className='flex  md:flex-row items-center justify-center gap-2 md:gap-8 lg:gap-12 mt-6'>
        <Image alt='Token Logo' src={logo1} className='h-11 w-11 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 rounded-lg' />
        <p className='text-2xl sm:text-3xl md:text-4xl lg:text-[60px] text-[#FF78DF] font-semibold text-center md:text-left'>
          Asiswabe
        </p>
      </div>
    </div>
  )
}

export default Buy
