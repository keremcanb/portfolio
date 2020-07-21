import React from 'react';
import Scrollchor from 'react-scrollchor';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <i className='fa fa-code logo' aria-hidden='true'></i>
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
        <li>
          <Scrollchor to='achievements' className='nav-link'>
            Projects
          </Scrollchor>
        </li>
        <li>
          <Scrollchor to='contact' className='nav-link'>
            Contact
          </Scrollchor>
        </li>
      </ul>
    </header>
  );
};

export default Header;
