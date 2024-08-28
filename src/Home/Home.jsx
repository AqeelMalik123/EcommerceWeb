import React from 'react'
import styled from 'styled-components'
import HeroSection from '../components/HeroSection'
import Service from '../components/service'
import Trusted from '../components/Trusted'
// import HeroSection from '../components/HeroSection'
// import Service from '../components/service'
// import Trusted from '../components/Trusted'

export default function Home() {
  return (
    // <Wrapper>
    <>
      <HeroSection/>
      <Service/>
      <Trusted/>
      </>
    // </Wrapper>
  )
}
const Wrapper=styled.section`
background-color:${({theme})=>theme.colors.bg}
width:20rem;
height:20rem;
`