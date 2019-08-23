import React, { Component } from 'react';
import './CardHeader.css'

class CardHeader extends Component {
  render() {
    const { image } = this.props;
    var style = { 
        backgroundImage: 'url(' + image + ')',
    };
    return (
      <header style={style} id={image} className="CardHeader">
        <h4 className="CardHeader-Title">News</h4>
      </header>
    )
  }
}

export default CardHeader;