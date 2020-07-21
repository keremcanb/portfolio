import React, { Component } from 'react';
import Header from '../components/header/Header';
import Greeting from './greeting/Greeting';
import Skills from './skills/Skills';
import StackProgress from './skillProgress/skillProgress';
import Achievement from './achievement/Achievement';
import Contact from '../containers/contact/Contact';
import Footer from '../components/footer/Footer';

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Greeting />
        <Skills />
        <StackProgress />
        <Achievement />
        <Contact />
        <Footer />
      </div>
    );
  }
}
