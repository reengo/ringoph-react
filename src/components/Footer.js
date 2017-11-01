import React, { Component } from 'react';
import Background from '../img/image1_parallax.jpg';

class Footer extends React.Component {
  render() {
    return (

		<footer>
      <div class="container">
        <div class="row">
          <p class="sig col-lg-7 col-md-6 col-sm-5 col-xs-12">Copyright &copy; 2013. Ringo Bautista. All Rights Reserved</p>
          <ul class="nav nav-pills pull-right">
            <li><a href="http://github.com/reengo"><i class="icon-github icon-2x"></i></a></li>
            <li><a href="http://twitter.com/ringobautista"><i class="icon-twitter icon-2x"></i></a></li>
            <li><a href="http://facebook.com/ringoblin"><i class="icon-facebook icon-2x"></i></a></li>
            <li><a href="https://ph.linkedin.com/pub/ringo-bautista/64/562/6a2"><i class="icon-linkedin-sign icon-2x"></i></a></li>
            <li><a href="https://instagram.com/reengo"><i class="icon-instagram icon-2x"></i></a></li>
          </ul>
        </div>
      </div>
    </footer>
	);
}
}

export default Footer




