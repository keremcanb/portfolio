import React from 'react';
import './Greeting.css';
import { greeting } from '../../portfolio';
import { Fade } from 'react-reveal';

const Greeting = () => {
  return (
    <div className='greet-main' id='greeting'>
      <div className='greeting-main'>
        <Fade bottom duration={1500} distance='40px'>
          <div className='greeting-text-div'>
            <div>
              <h1 className='greeting-text'>{greeting.title}</h1>
              <p className='greeting-text-p subTitle'>
                <i>{greeting.subTitle}</i>
              </p>
            </div>
          </div>
        </Fade>
        <Fade top duration={1500} distance='40px'>
          <div className='greeting-image-div'>
            <img
              alt='saad sitting on table'
              src={require('../../assets/images/starry_window.svg')}
            ></img>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Greeting;
