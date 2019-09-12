import React, { Component } from 'react';
import './CardBody.css';
import CardButton from '../CardButton/CardButton';

class CardBody extends Component {
  render() {
    return (
      <div className="CardBody">
        <a href={this.props.linkedinLink}>LinkedIn Link</a>
        <br />
        <a href={this.props.companyAppLink}>Company App Link</a>
        <p className="CardBody-Content" dangerouslySetInnerHTML={{__html: this.props.description}}></p>
        <CardButton />
      </div>
    )
  }
}

export default CardBody;