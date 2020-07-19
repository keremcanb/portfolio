import React from 'react';
import './Skills.css';
import SoftwareSkill from '../../components/softwareSkills/SoftwareSkill';
import { skillsSection } from '../../portfolio';
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
          <h1>Skills</h1>
          {/* <Fade right duration={1500}> */}
          {/* <h1 className='skills-heading'>{skillsSection.title} </h1> */}
          {/* </Fade> */}
          {/* <p className="subTitle skills-text-subtitle">{skillsSection.subTitle}</p> */}
          <SoftwareSkill />
          {/* <div>
              {skillsSection.skills.map(skills => {
                return <p className="subTitle skills-text">{skills}</p>;
              })}
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
