import React, { Component } from 'react';
import Background from '../img/reengo.png';
import reengologo from '../img/reengo-50.jpg';

class Blog extends React.Component {
  render() {
    return (

		<section id="blog" class="video-block dark" data-step="5" style={{backgroundImage:"url("+ Background +")"}}>
      <article class="section-content">
        <a href="#"><img class="img-circle img-thumbnail" src={reengologo} /></a>
        <h2>Reengo</h2>
        <p>I have a semi-updated blog on Reengo.</p>
        <p>come visit and get a doze of my sheer intellect :D</p>
        <a href="http://www.reengo.com" target="_blank"><button class="more">Visit Reengo.com <i class="icon-arrow-right"></i></button></a>
      </article>
    </section>
	);
}
}

export default Blog




