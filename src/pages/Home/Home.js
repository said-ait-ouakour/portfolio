import React from 'react'
import About from '../../components/About'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'
import Services from '../../components/Services'
import Skills from '../../components/Skills'
import './index.css'

const Home = () => {
  return (
    <div className='home-section font-rubik text-white'>
      <NavBar />
      <About />
      <Services />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
