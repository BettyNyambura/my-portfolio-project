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
        <div className="about-right">
            <div className="about-para">
                <p>Result-oriented AI Systems Engineer with experience building and deploying production-ready AI solutions across AWS, Azure, and GCP. Skilled in LLMs, RAG pipelines, OCR/VLM systems, cloud infrastructure, and backend engineering. Strong collaborator with a proven track record of delivering measurable impact, including enterprise AI systems that significantly reduce operational time and costs..</p>
                <h3>Skills and Capabilities</h3>
            </div>
          {/* <div className="about-left">
            <img src={profile_img} alt="" />
          </div> */}
            <div className="about-skills">
              <div className="about-skill"><p>LLMs & RAG Systems</p><hr style={{width:"90%"}}/></div>
              <div className="about-skill"><p>OCR & Vision-Language Models (VLMs)</p><hr style={{width:"85%"}}/></div>
              <div className="about-skill"><p>Python & Backend Engineering</p><hr style={{width:"85%"}}/></div>
              <div className="about-skill"><p>AWS (Bedrock, Lambda, S3, Textract)</p><hr style={{width:"80%"}}/></div>
              <div className="about-skill"><p>Vector Databases (Pinecone) & Knowledge Graphs</p><hr style={{width:"80%"}}/></div>
              <div className="about-skill"><p>Cloud & DevOps (Docker, Kubernetes, Terraform)</p><hr style={{width:"75%"}}/></div>
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
        {/* <div className="about-achievement">
          <h1>10+</h1>
          <p>HAPPY CLIENTS</p>
        </div> */}
      </div>
    </div>
  )
}

export default About
