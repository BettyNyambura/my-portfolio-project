import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/skills2.svg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
       <h1>About Me</h1> 
       <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Result-oriented team player with over two years of experience in front-end development using React, HTML5, CSS, CSS-in-JS and responsive designs. Open to new ideas, adaptable, excellent communication skills, appreciates feedback, and passionate about uncovering new possibilities.</p>
                <p>Besides a Bachelor's degree in Computer Science, my training ranges from a certification at ALX Africa to self-teaching.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"><p>C programming</p><hr style={{width:"60%"}}/></div>
                <div className="about-skill"><p>Python</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>Shell Scripting</p><hr style={{width:"90%"}}/></div>
                <div className="about-skill"><p>DevOps</p><hr style={{width:"80%"}}/></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS CCONTRIBUTIONS</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
