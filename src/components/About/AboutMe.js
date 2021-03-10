// import { gsap } from 'gsap/gsap-core'
import React, { useEffect } from 'react'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'
// import { DoggieDoodle } from 'react-open-doodles'
import { ReactComponent as DevIcon } from '../../media/dev.svg'

import {
  AboutContainer,
  ContentContainer,
  BioContainer,
} from './StyledAboutComponents'

const AboutMe = () => {
  useEffect(() => {}, [])

  return (
    <>
      <AboutContainer id='about__container'>
        <ContentContainer>
          <h1 className='title'>Hi There! I am Mirul Khanal</h1>
          <p className='subtitle'>Welcome to my portfolio website.</p>
          <DevIcon />
        </ContentContainer>
        <BioContainer>
          <ImQuotesLeft
            style={{ fontSize: '2em', color: 'white', margin: '20px' }}
          />
          <p style={{ display: 'inline' }}>
            My name is Mirul Khanal. I am a web developer.
            <br />I primarily work with javascript and its libraries /
            frameworks. Lorem ipsum vanera aafai type garnu paryo. lorem ipsum
            dolor sit amet lofre detrapo mili fo Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Sit, voluptates Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Fugit, et.
          </p>
          <ImQuotesRight
            style={{
              fontSize: '2em',
              color: 'white',
              marginLeft: '20px',
            }}
          />
        </BioContainer>
      </AboutContainer>
    </>
  )
}
export default AboutMe
