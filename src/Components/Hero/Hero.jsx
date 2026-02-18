import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profilepicbetty.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className= 'hero'>
      <img src= {profile_img} alt="" />
      <h1><span>I am Betty Waiyego,</span> a talented <span> AI Engineer</span> specializing in LLMs, RAG pipelines, OCR, and cloud-native AI deployments.</h1>
      <p>I am a web developer with more than 2 years of experience </p>
      <div className='hero-action'>
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Let's Connect</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero
