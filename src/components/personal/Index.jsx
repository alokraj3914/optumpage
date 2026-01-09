import React from 'react'
import Navbar from '../common/navbar/Navbar'
import Hero from '../common/hero/Hero'
import Main from './main/Main'
import Wrap from './wrap/Wrap'
import Couch from './couch/Couch'
import HealthSection from './healthsection/HealthSection'
import Footer from './footer/Footer'
import FooterCard from '../common/footer/FooterCard'
import Section from '../common/section/Section'

function Personal() {
  return (
     <>
    <Navbar/>
      <Hero/>
      <Main />
      <Wrap />
      <Couch/>
      <HealthSection />
      <Footer />
      <FooterCard />
      <Section/>
    </>
  )
}

export default Personal