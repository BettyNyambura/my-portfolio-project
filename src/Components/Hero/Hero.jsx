
import React, { useState } from 'react';
import './Hero.css';
import profile_img from '../../assets/profilepicbetty.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  const [showResume, setShowResume] = useState(false);

  const handleResumeClick = () => setShowResume(true);
  const handleCloseModal = () => setShowResume(false);

  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I am Betty Waiyego,</span> a talented <span> AI Engineer</span> specializing in LLMs, RAG pipelines, OCR, and cloud-native AI deployments.</h1>
      <p>Shipping LLM solutions across cloud platforms and enterprise environments.</p>
      <div className='hero-action'>
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Let's Connect</AnchorLink></div>
        <div className="hero-resume" onClick={handleResumeClick}>My Resume</div>
      </div>

      {showResume && (
        <div className="mywork-modal" onClick={handleCloseModal}>
          <div className="mywork-modal-content" onClick={e => e.stopPropagation()}>
            <button className="mywork-modal-close" onClick={handleCloseModal}>×</button>
            <h2>My Resume</h2>
            <iframe
              src="/resume.pdf"
              title="Resume PDF"
              width="100%"
              height="500px"
              style={{ border: "none", marginBottom: "1rem" }}
            ></iframe>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hero-resume-link">
              Download Resume (PDF)
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
