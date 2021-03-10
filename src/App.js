import { gsap } from 'gsap'
import React, { useState } from 'react'
import './App.css'
import AboutMe from './components/About/AboutMe'
import Hero from './components/Hero/Hero'
import NavBar from './components/Navbar/NavBar'
import { useEffect } from 'react'
import Projects from './components/Projects/Projects'
import { FloatIcon } from './components/About/StyledAboutComponents'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)
const App = () => {
  const [showTop, setShowStop] = useState(false)
  useEffect(() => {
    gsap.to('.App', {
      display: 'block',
    })
  }, [])
  useEffect(() => {
    window.addEventListener('scroll', function () {
      if (this.scrollY > 600) {
        setShowStop(true)
      } else {
        setShowStop(false)
      }
    })
  }, [])
  const handleTopClick = () => {
    console.log('cicked')
    gsap.to(window, {
      scrollTo: {
        y: 0,
        ease: 'easeInOut',
      },
    })
  }
  return (
    <div className='App'>
      <NavBar />
      <Hero />
      <FloatIcon
        id='float__icon'
        className={showTop ? 'show' : 'hidden'}
        onClick={handleTopClick}
      />
      <AboutMe />
      <Projects />
    </div>
  )
}
export default App
