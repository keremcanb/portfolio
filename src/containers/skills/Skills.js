import React from 'react';
import './Skills.css';
import SoftwareSkill from '../../components/softwareSkills/SoftwareSkill';
import { Fade } from 'react-reveal';

const Skills = () => {
  return (
    <div className='main' id='skills'>
      <div className='skills-main-div'>
        <Fade left duration={1500}>
          <div className='skills-image-div'>
            <img
              alt='Saad Working'
              src={require('../../assets/images/code_inspection.svg')}
            ></img>
          </div>
        </Fade>
        <div className='skills-text-div'>
          <Fade bottom duration={1500}>
            <h1 className='skills-heading'>Skills</h1>
          </Fade>
          <SoftwareSkill />
        </div>
      </div>
    </div>
  );
};

export default Skills;
