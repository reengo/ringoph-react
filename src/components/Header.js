import React, { Component } from 'react';
import logo from '../img/logo-ringo-pad.png';


class Header extends React.Component {
  render() {
    return (
      <header class="navbar-fixed-top">
        <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
                  <span class="sr-only">Toggle Navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#"><img src={logo} /></a></div>

          <div class="collapse navbar-collapse" id="navbar-collapse">
              <div class="container">
                  <ul class="nav nav-pills pull-right">
                    <li><a href="#top"><i class="icon-home icon-2x animated fadeInDown"></i> <span class="animated fadeInDown">HOME</span></a></li>
                    <li><a href="#resume"><i class="icon-file-text icon-2x animated fadeInDown"></i> <span class="animated fadeInDown">RESUME</span></a></li>
                    <li><a href="#profile"><i class="icon-user icon-2x animated fadeInDown"></i> <span class="animated fadeInDown">PROFILE</span></a></li>
                    <li><a href="#works"><i class="icon-suitcase icon-2x animated fadeInDown"></i> <span class="animated fadeInDown">WORKS</span></a></li>
                    <li><a href="#contact"><i class="icon-phone icon-2x animated fadeInDown"></i> <span class="animated fadeInDown">CONTACT</span></a></li>
                  </ul>

              </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;