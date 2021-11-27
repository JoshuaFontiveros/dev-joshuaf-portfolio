import React from 'react';
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <div className='about'>
      <Link to='/aboutme'>
        <h1>About</h1>
      </Link>
    </div>
  );
};

export default About;
