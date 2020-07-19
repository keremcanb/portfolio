import React from 'react';
import { Fade } from 'react-reveal';
import './SoftwareSkill.css';
import { skillsSection } from '../../portfolio';

export default function SoftwareSkill() {
  return (
    <div>
      <div className='software-skills-main-div'>
        <Fade right duration={1500}>
          <h2>Front-end</h2>
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
          <h2>Back-end</h2>
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
          <h2>General</h2>
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
}
