import React, { Component } from 'react';
import Background from '../img/image1_parallax.jpg';

class Quote extends React.Component {
  render() {
    return (

		<section id="quote" class="post-block no-content light" data-step="5" style={{backgroundImage: "url("+Background+")"}}>
	      <article class="section-content">
	        <a href="#"><i></i></a>
	        <h2>"He who learns but does not think, is lost! He who thinks but does not learn is in great danger." <small>-Confucious</small></h2>
	        <a href="#resume"><button class="more white">Is the quote brainy enough for you?</button></a>
	      </article>
	    </section>
	);
}
}

export default Quote