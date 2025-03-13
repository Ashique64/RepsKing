import React from 'react'
import Hero from '../../Components/Hero/Hero'
import About from '../../Components/About/About'
import Services from '../../Components/Services/Services'
import BMI from '../../Components/BMI/BMI'
import Pricing from '../../Components/Pricing/Pricing'

const Home = () => {
  return (
    <>
    <Hero/>
    <About/>
    <Services/>
    <BMI/>
    <Pricing/>
    </>
  )
}

export default Home