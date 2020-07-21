import React from 'react';
// import Headroom from 'react-headroom';
import Scrollchor from 'react-scrollchor';
import './Header.css';
import { greeting, workExperiences } from '../../portfolio';

const Header = () => {
  // const exp = workExperiences.viewExperiences;

  return (
    // <Headroom>
    <header className='header'>
      {/* <a href='/' className='logo'> */}
        <i className='fa fa-code logo' aria-hidden='true'></i>
        {/* <span className='grey-color'> &lt;</span>
        <span className='logo-name'>{greeting.username}</span>
        <span className='grey-color'>/&gt;</span> */}
      {/* </a> */}

      <input className='menu-btn' type='checkbox' id='menu-btn' />
      <label className='menu-icon' htmlFor='menu-btn'>
        <span className='navicon'></span>
      </label>

      <ul className='menu'>
        <li>
          <Scrollchor to='skills' className='nav-link'>
            Skills
          </Scrollchor>
        </li>
        {/* {exp === true && (
          <li>
            <a href='#experience'>Works</a>
          </li>
        )} */}
        {/* <li>
          <a href='#projects'>Projects</a>
        </li> */}
        <li>
          <Scrollchor to='achievements' className='nav-link'>
            Projects
          </Scrollchor>
        </li>
        {/* <li>
          <a href='#blogs'>Blogs</a>
        </li> */}
        <li>
          <Scrollchor to='contact' className='nav-link'>
            Contact
          </Scrollchor>
        </li>
      </ul>
    </header>
    // </Headroom>
  );
};

export default Header;
