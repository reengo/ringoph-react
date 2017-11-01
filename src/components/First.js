import React, { Component } from 'react';
import Background from '../img/ringobass-tara.jpg';

class First extends React.Component {
  render() {
    return (

		<section class="video-block dark" data-step="5" style={{backgroundImage:"url("+Background+")"}}>
		  <div class="container">
		    <article class="section-content">
		      <h2>Welcome to Ringo</h2>
		      <p class="lead">Yep! thats my name. and this is my portfolio website.</p>

		      <a href="#quote"><i class="icon-circle-arrow-down icon-3x"></i></a>
		    </article>
		  </div>

		  <article class="video"></article>
		</section>
	);
 }
}

export default First;