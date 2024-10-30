import Image from 'next/image'
import React from 'react'
import logo1 from '../app/assets/logo.jpg'

const Buy = () => {
  return (
    <div className='bg-[#6878C1]'>
        <h2 className='text-[60px] text-white text-center'>Buy Token Now</h2>
        <div className='flex items-center justify-center gap-10 mt-5'>
            <Image alt='img' src={logo1} className='h-20 w-20 rounded-lg '/>
            <p className='text-[60px] text-[#FF78DF] '>Asiswabe</p>
        </div>
    </div>
  )
}

export default Buy