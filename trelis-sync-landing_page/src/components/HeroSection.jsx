import React from 'react';
import HeroWrapper from './HeroWrapper'
import HeroText from './HeroText'
import HeroCTA from './HeroCTA'

export default function HeroSection() {
  return (
    <HeroWrapper>
      <HeroText />
      <HeroCTA />
    </HeroWrapper>
  )
}