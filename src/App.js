import React, { Component } from 'react';
import logo from './img/logo-ringo-pad.png';
import './App.css';
import Header from './components/Header.js';
import First from './components/First.js';
import Quote from './components/Quote.js';
import Resume from './components/Resume.js';
import Profile from './components/Profile.js';
import Works from './components/Works.js';
import Blog from './components/Blog.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

class App extends Component {
  renderHeader(logo) {
    return (
      <Header />
    );
  }

  renderFirst(){
    return (
      <First />
    );
  }

  renderQuote(){
    return (
      <Quote />
    );
  }

  renderResume(){
    return (
      <Resume />
    );
  }

  renderWorks(){
    return (
      <Profile />
    );
  }

  renderProfile(){
    return (
      <Works />
    );
  }

  renderBlog(){
    return (
      <Blog />
    );
  }

  renderContact(){
    return (
      <Contact />
    );
  }

  renderFooter(){
    return (
      <Footer />
    );
  }

  render() {
    return (
      <div className="App">
        {this.renderHeader()}
        {this.renderFirst() }
        {this.renderQuote() }
        {this.renderResume() }
        {this.renderProfile() }
        {this.renderWorks() }
        {this.renderBlog() }
        {this.renderContact() }
        {this.renderFooter() }
      </div>
    );
  }
}

export default App;