import React from 'react';
import './styles/TeamCollaboration.scss';

const TeamCollaboration = () => {
  return (
    <section className="team-section">
      <div className="image-container">
        <img src="/assets/Work.jpg" alt="orbit visuals" className="orbit-image" />
      </div>

      <div className="content">
        <h1>
          Work <span className="highlight">together</span>
          <img src="/assets/highlight.jpg" alt="highlight" className='second' />
        </h1>
        <p>
          With whitepace, share your notes with your colleagues and collaborate on them.
          You can also publish a note to the internet and share the URL with others.
        </p>
        <button className="cta-button">Try it now →</button>
      </div>
    </section>
  );
};

export default TeamCollaboration;