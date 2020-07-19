import React from 'react';
import './Greeting.css';
import SocialMedia from '../../components/socialMedia/SocialMedia';
// import Button from "../../components/button/Button";
import { greeting } from '../../portfolio';
import { Fade } from 'react-reveal';
// import emoji from "react-easy-emoji";

const Greeting = () => {
  return (
    <div className='greet-main' id='greeting'>
      <div className='greeting-main'>
        <Fade bottom duration={1500} distance='40px'>
          <div className='greeting-text-div'>
            <div>
              <h1 className='greeting-text'>
                {greeting.title}
                {/* <span className="wave-emoji">{emoji("👋")}</span> */}
              </h1>
              <p className='greeting-text-p subTitle'>
                <i>{greeting.subTitle}</i>
              </p>
              {/* <SocialMedia /> */}
              {/* <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
            </div> */}
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
