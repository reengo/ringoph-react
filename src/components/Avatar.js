import React from 'react';

class Avatar extends React.Component {
  render() {
    const avatar = this.props.avatar ? this.props.avatar : "https://s.gravatar.com/avatar/d6be1682fed668f61587d2397b06a2df?s=100"

    return (
      <a href="/"><i></i><img class="img-circle img-responsive img-thumbnail" src={ avatar } alt="ringo avatar" /></a>
    );
    
  }
}

export default Avatar;