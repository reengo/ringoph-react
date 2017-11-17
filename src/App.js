import React, { Component } from 'react';
import logo from './img/logo-ringo-pad.png';
import bgTara from './img/ringobass-tara.jpg';
import bgLookUp from './img/image1_parallax.jpg';
import reengoBG from './img/reengo.png';
import reengologo from './img/reengo-50.jpg';

import './App.css';
import Header from './components/Header.js';


import Works from './components/Works.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

import Section from './components/Section.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />

        <Section 
          type="first"
          next="quote"
          className="video-block dark" 
          background={bgTara}
          title="Welcome to Ringo"
          content="Yep! thats my name. and this is my portfolio website." />

        <Section 
          type="quote"
          next="resume"
          className="post-block no-content light" 
          background={bgLookUp}
          title="&quot;He who learns but does not think, is lost! He who thinks but does not learn is in great danger.&quot;"
          btnClass="more white"
          btnContent="Is the quote brainy enough for you?"   />

        <Section 
          type="resume"
          next="profile"
          className="post-block no-content light" 
          title="Online Resume"
          content="If you happen to be looking for a front end developer, you may be looking at the right place! :D <br />check out my online resume and see if I fit your needs."
          btnClass="more black"
          btnContent="View Online Resume"
          url="/resume"  />

        <Section 
          type="profile"
          next="blog"
          className="feature-block dark" />

        <Section 
          type="blog"
          next="works"
          className="video-block dark" 
          avatar={ reengologo }
          background={ reengoBG }
          title="Reengo"
          content="I have a semi-updated blog on Reengo. come visit and get a doze of my sheer intellect :D"
          btnClass="more"
          btnContent="Visit Reengo.com >" 
          url="http://www.reengo.com"  />

        <Works />

        <Contact />

        <Footer />
      </div>
    );
  }
}

export default App;