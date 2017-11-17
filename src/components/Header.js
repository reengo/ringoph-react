import React, { Component } from 'react';
import logo from '../img/logo-ringo-pad.png';


class Header extends React.Component {
  render() {
    return (
      <header className="navbar-fixed-top">
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
                  <span className="sr-only">Toggle Navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#"><img src={logo} /></a></div>

          <div className="collapse navbar-collapse" id="navbar-collapse">
              <div className="container">
                  <ul className="nav nav-pills pull-right">
                    <li><a href="#top"><i className="icon-home icon-2x animated fadeInDown"></i> <span className="animated fadeInDown">HOME</span></a></li>
                    <li><a href="#resume"><i className="icon-file-text icon-2x animated fadeInDown"></i> <span className="animated fadeInDown">RESUME</span></a></li>
                    <li><a href="#profile"><i className="icon-user icon-2x animated fadeInDown"></i> <span className="animated fadeInDown">PROFILE</span></a></li>
                    <li><a href="#works"><i className="icon-suitcase icon-2x animated fadeInDown"></i> <span className="animated fadeInDown">WORKS</span></a></li>
                    <li><a href="#contact"><i className="icon-phone icon-2x animated fadeInDown"></i> <span className="animated fadeInDown">CONTACT</span></a></li>
                  </ul>

              </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;