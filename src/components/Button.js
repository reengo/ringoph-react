import React from 'react';

class CTAButton extends React.Component {
  render() {
  	const next = this.props.next;
    const className = this.props.className;
    const btnClass = this.props.btnClass;
    const btnContent = this.props.btnContent;
    const url = this.props.url;
    if(next === "quote"){
      return (
        <a href={ next === "profile" || next === 'works' ? url : "#"+next}><i className={ className }></i></a>
      );
    }else{
      return (
        <a href={ next === "profile" || next === 'works' ? url : "#"+next}><button className={ btnClass }>{ btnContent }</button></a>
      );
    }
    
  }
}

export default CTAButton;