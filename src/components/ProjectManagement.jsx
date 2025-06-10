import React from 'react';
import './styles/ProjectManagement.scss';

const ProjectManagement = () => {
  return (
    <section className="project-section">
      <img src="/assets/BACKGROUND.jpg" alt="background swirl" className="swirl" />
      
      <div className="content">
        <h1>
          Project<br />
          <span className="highlight">Management</span>
          <img src="/assets/highlight.jpg" alt="highlight" className='yellow' />
        </h1>
        <p>
          Images, videos, PDFs and audio files are supported. Create math expressions and diagrams
          directly from the app. Take photos with the mobile app and save them to a note.
        </p>
        <button className="get-started">Get Started →</button>
      </div>

      <div className="placeholder-box"></div>
    </section>
  );
};

export default ProjectManagement;