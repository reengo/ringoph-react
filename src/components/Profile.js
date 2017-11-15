import React, { Component } from 'react';

class Profile extends React.Component {
  render() {
    const profile = "http://gravatar.com/avatar/cd55e546cba8f19ef07018179f114f9d?s=200";
    return (
		<div>
      <div className="feature-image col-lg-5 col-md-5  col-xs-12">
        <img className="img-circle img-thumbnail" src={ profile } /> 
      </div>
      
      <div className="feature-content col-lg-7 col-md-7 col-xs-12">
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
    </div>
	);
}
}

export default Profile;




