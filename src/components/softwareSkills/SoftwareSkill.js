import React from 'react';
import { Fade } from 'react-reveal';
import './SoftwareSkill.css';
import { skillsSection } from '../../portfolio';

const SoftwareSkill = () => {
  return (
    <div>
      <div className='software-skills-main-div'>
        <Fade right duration={1500}>
          <h3>Front-End</h3>
          <ul className='dev-icons'>
            {skillsSection.fesoftwareSkills.map((skills) => {
              return (
                <li className='software-skill-inline' name={skills.skillName}>
                  <i className={skills.fontAwesomeClassname}></i>
                  <p>{skills.skillName}</p>
                </li>
              );
            })}
          </ul>
        </Fade>
        <Fade left duration={1500}>
          <h3>Back-End</h3>
          <ul className='dev-icons'>
            {skillsSection.besoftwareSkills.map((skills) => {
              return (
                <li className='software-skill-inline' name={skills.skillName}>
                  <i className={skills.fontAwesomeClassname}></i>
                  <p>{skills.skillName}</p>
                </li>
              );
            })}
          </ul>
        </Fade>
        <Fade right duration={1500}>
          <h3>General</h3>
          <ul className='dev-icons'>
            {skillsSection.gsoftwareSkills.map((skills) => {
              return (
                <li className='software-skill-inline' name={skills.skillName}>
                  <i className={skills.fontAwesomeClassname}></i>
                  <p>{skills.skillName}</p>
                </li>
              );
            })}
          </ul>
        </Fade>
      </div>
    </div>
  );
};

export default SoftwareSkill;
