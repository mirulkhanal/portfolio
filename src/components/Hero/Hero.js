import React, { useEffect } from 'react'
import '../../styles/Hero.css'
import {
  ActionButton,
  HeroContainer,
  HeroImage,
  HeroTitle,
  HeroTitleContainer,
} from './StyledHeroComponents'
import { gsap, Power3, Power2 } from 'gsap'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'
import { ReadingDoodle } from 'react-open-doodles'

gsap.registerPlugin(ScrollToPlugin)
const Hero = () => {
  useEffect(() => {
    gsap.from('.hero__container', {
      scrollTo: {
        nextSibling: true,
      },
    })
    gsap.from('.hero__title', {
      opacity: 0,
      x: -150,
      duration: 0.9,
      ease: Power3.easeInOut,
      delay: 0.3,
    })
    gsap.from('.hero__action__button', {
      opacity: 0,
      x: 150,
      duration: 0.9,
      ease: Power3.easeInOut,
      delay: 0.3,
    })
    gsap.from('.hero__container', {
      opacity: 0,
      x: -200,
      duration: 0.7,
      ease: Power3.easeInOut,
    })
    gsap.from('.hero__image', {
      opacity: 0,
      y: 150,
      duration: 0.7,
      delay: 0.5,
      ease: Power2.easeInOut,
    })
  })

  const handleExplore = () => {
    gsap.to(window, {
      scrollTo: {
        y: '+= 779',
        // opacity: 0.5,
        ease: Power3.easeInOut,
      },
    })
  }
  return (
    <>
      <HeroContainer className='hero__container'>
        <HeroTitleContainer>
          <HeroTitle>
            <p className='hero__title'>Hello World!</p>
          </HeroTitle>
          <ActionButton
            onClick={handleExplore}
            className='hero__action__button'>
            Explore
          </ActionButton>
        </HeroTitleContainer>
        <HeroImage className='hero__image'>
          <ReadingDoodle />
        </HeroImage>
      </HeroContainer>
    </>
  )
}

export default Hero
