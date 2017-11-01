import React, { Component } from 'react';
import Background from '../img/image1_parallax.jpg';

class Profile extends React.Component {
  render() {
    return (

		<section id="profile" class="feature-block dark" data-step="5">
      <div class="container">
        <article class="section-content row">
          <div class="col-lg-12"><a href="#"><i class=""></i></a></div>

          <div class="feature-image col-lg-5 col-md-5  col-xs-12">
            <img class="img-circle img-thumbnail" src="http://gravatar.com/avatar/cd55e546cba8f19ef07018179f114f9d?s=200"/> 
          </div>
          
          <div class="feature-content col-lg-7 col-md-7 col-xs-12">
            <h2>A little something about me</h2>
            <p>I've been working as a Front End Developer for nearly 10 years, I started back in the days when doing table-less markup was still cool, IE was a nightmare and Dreamweaver still belonged to Macromedia.</p>
            <p>Yes, its ancient history, but some things never change (particularly the IE part). </p>
            <p>If time permits, I play the bass, I play RPGs and I master... the arts of tekken. :D</p>
            <a href="http://github.com/reengo"><button class="more" style={{ width:"70px" }}><i class="icon-github icon-3x"></i></button></a>
            <a href="http://facebook.com/ringoblin"><button class="more" style={{ width:"70px" }}><i class="icon-facebook icon-3x"></i></button></a>
            <a href="http://twitter.com/ringobautista"><button class="more" style={{ width:"70px" }}><i class="icon-twitter icon-3x"></i></button></a>
            <a href="https://ph.linkedin.com/pub/ringo-bautista/64/562/6a2"><button class="more" style={{ width:"70px" }}><i class="icon-linkedin icon-3x"></i></button></a>
            <a href="http://instagram.com/reengo"><button class="more" style={{ width:"70px" }}><i class="icon-instagram icon-3x"></i></button></a>
          </div>
        </article>
      </div>
    </section>
	);
}
}

export default Profile;




