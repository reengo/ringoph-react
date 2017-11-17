import React from 'react';

import CTAButton from '../components/Button.js';
import Avatar from '../components/Avatar.js';
import Profile from '../components/Profile.js';

class Section extends React.Component {
  constructor(props) {
  	super(props);
  	this.class = "test"
  }

  handleClick() {

  }

  render() {
  	const type = this.props.type;
  	const next = this.props.next;
  	const className = this.props.className;
  	const background = this.props.background;
  	const welcome = this.props.title;
  	const content = this.props.content;
  	const btnClass = this.props.btnClass;
  	const btnContent = this.props.btnContent;
  	const url = this.props.url;

  	const videoContainer = <article className="video"></article>;

    return (
		<section id={ type } className={ className } data-step="5" style={{backgroundImage:"url("+background+")"}}>
		  <div class="container">
		    <article class="section-content row">
		      { type === 'resume' ? <Avatar /> : '' }

		      <h2>{ welcome } { type === 'quote' ? <small>-Confucious</small> : '' }</h2>
		      
		      { content ? ( <p class="lead"> { content } </p> ) : ('') }

		      { type !== 'profile' ? <CTAButton 
		      	next={ next }
		      	btnClass={ btnClass }
		      	btnContent={ btnContent }
		      	url={ url }
		      	className="icon-circle-arrow-down icon-3x" /> : '' }

		      { type === 'profile' ? <Profile /> : '' }

		    </article>
		  </div>

		  { videoContainer }
		</section>
	);
 }
}

export default Section;