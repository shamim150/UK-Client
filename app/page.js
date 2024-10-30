import Banner from '@/components/Banner'
import Buy from '@/components/Buy'
import Client from '@/components/Client'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Wego from '@/components/Wego'
import React from 'react'

const page = () => {
  return (
    <div>
      <Banner/>
      <Contact/>
      <Wego/>
      <Client/>
      <Buy/>
      <Footer/>
    </div>
  )
}

export default page