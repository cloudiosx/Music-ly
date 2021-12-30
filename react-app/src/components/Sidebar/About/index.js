import React from 'react';
import Tag from '../../pieces/Tag';
import './About.css';

const About = (props) => {
  return (
    <div className="wrapper_with_divider about">
      <h4 className="title">About</h4>
      <span className="about_link">John Kim</span>
      <a className="about_link" href="https://www.linkedin.com/in/john-kim-developer/" target="_blank" rel="noreferrer">
        LinkedIn
      </a>
      <a className="about_link" href="https://github.com/cloudiosx" target="_blank" rel="noreferrer">
        Github
      </a>
    </div>
  );
};

About.propTypes = {};

export default About;
