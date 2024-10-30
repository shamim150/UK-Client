import React from 'react'
import logo1 from '../app/assets/logo.jpg'
import Image from 'next/image'

const Client = () => {
  return (
    <div className='p-6 md:p-20 bg-[#BDC9FF]'>
      <div className='flex items-center justify-center flex-wrap gap-4 md:gap-6'>
        <div className='flex items-center gap-x-2'>
          <Image className='w-16 h-16 md:w-20 md:h-20 rounded-xl' alt='image1' src={logo1} />
          <p className='text-white font-bold text-lg md:text-2xl'>PinkSale</p>
        </div>
        <div className='flex items-center gap-x-2'>
          <Image className='w-16 h-16 md:w-20 md:h-20 rounded-xl' alt='image1' src={logo1} />
          <p className='text-white font-bold text-lg md:text-2xl'>PinkSale</p>
        </div>
        <div className='flex items-center gap-x-2'>
          <Image className='w-16 h-16 md:w-20 md:h-20 rounded-xl' alt='image1' src={logo1} />
          <p className='text-white font-bold text-lg md:text-2xl'>PinkSale</p>
        </div>
        <div className='flex items-center gap-x-2'>
          <Image className='w-16 h-16 md:w-20 md:h-20 rounded-xl' alt='image1' src={logo1} />
          <p className='text-white font-bold text-lg md:text-2xl'>PinkSale</p>
        </div>
        <div className='flex items-center gap-x-2'>
          <Image className='w-16 h-16 md:w-20 md:h-20 rounded-xl' alt='image1' src={logo1} />
          <p className='text-white font-bold text-lg md:text-2xl'>PinkSale</p>
        </div>
        <div className='flex items-center gap-x-2'>
          <Image className='w-16 h-16 md:w-20 md:h-20 rounded-xl' alt='image1' src={logo1} />
          <p className='text-white font-bold text-lg md:text-2xl'>PinkSale</p>
        </div>
      </div>
    </div>
  )
}

export default Client
