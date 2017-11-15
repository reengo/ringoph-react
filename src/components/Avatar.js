import React, { Component } from 'react';

class Avatar extends React.Component {
  render() {
  	const next = "#" + this.props.next;
    const className = this.props.className;
    const btnContent = this.props.btnContent;
    const avatar = this.props.avatar ? this.props.avatar : "https://s.gravatar.com/avatar/d6be1682fed668f61587d2397b06a2df?s=100"

    return (
      <a href="#"><i></i><img class="img-circle img-responsive img-thumbnail" src={ avatar } /></a>
    );
    
  }
}

export default Avatar;