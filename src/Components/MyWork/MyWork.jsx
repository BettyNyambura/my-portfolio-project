
import React, { useState } from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';

const MyWork = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((project) => (
          <div className="mywork-card" key={project.id} onClick={() => handleCardClick(project)}>
            <img src={project.img} alt={project.title} className="mywork-card-img" />
            <div className="mywork-card-content">
              <h2>{project.title}</h2>
              <p className="mywork-impact">{project.impact}</p>
              <p className="mywork-techstack">{project.techStack}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="mywork-modal" onClick={handleCloseModal}>
          <div className="mywork-modal-content" onClick={e => e.stopPropagation()}>
            <button className="mywork-modal-close" onClick={handleCloseModal}>×</button>
            <h2>{selectedProject.title}</h2>
            <p className="mywork-modal-impact">{selectedProject.impact}</p>
            <p className="mywork-modal-techstack">{selectedProject.techStack}</p>
            <hr />
            <h3>Problem</h3>
            <p>{selectedProject.problem}</p>
            <h3>Architecture</h3>
            <img src={selectedProject.architectureImg} alt="Architecture Diagram" className="mywork-modal-architecture" />
            <h3>Technical Highlights</h3>
            <ul>
              {selectedProject.highlights.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <h3>Impact Metrics</h3>
            <div className="mywork-modal-metrics">
              {selectedProject.metrics.map((metric, idx) => (
                <div key={idx} className="mywork-metric">
                  <span className="mywork-metric-value">{metric.value}</span>
                  <span className="mywork-metric-label">{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyWork;
