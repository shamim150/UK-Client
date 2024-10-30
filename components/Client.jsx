import React from 'react'
import logo1 from '../app/assets/logo.jpg'
import Image from 'next/image'

const Client = () => {
  return (
    <div className='flex items-center justify-between p-20 bg-[#BDC9FF]'>
        <div className='flex items-center gap-x-2'>
            <Image className='w-20 h-20 rounded-xl' alt='image1' src={logo1}/>
            <p className='text-white font-bold text-2xl'>PinkSAle</p>
        </div>
        <div className='flex items-center gap-x-2'>
            <Image className='w-20 h-20 rounded-xl' alt='image1' src={logo1}/>
            <p className='text-white font-bold text-2xl'>PinkSAle</p>
        </div>
        <div className='flex items-center gap-x-2'>
            <Image className='w-20 h-20 rounded-xl' alt='image1' src={logo1}/>
            <p className='text-white font-bold text-2xl'>PinkSAle</p>
        </div>
        <div className='flex items-center gap-x-2'>
            <Image className='w-20 h-20 rounded-xl' alt='image1' src={logo1}/>
            <p className='text-white font-bold text-2xl'>PinkSAle</p>
        </div>
        <div className='flex items-center gap-x-2'>
            <Image className='w-20 h-20 rounded-xl' alt='image1' src={logo1}/>
            <p className='text-white font-bold text-2xl'>PinkSAle</p>
        </div>
        <div className='flex items-center gap-x-2'>
            <Image className='w-20 h-20 rounded-xl' alt='image1' src={logo1}/>
            <p className='text-white font-bold text-2xl'>PinkSAle</p>
        </div>
        
    </div>
  )
}

export default Client