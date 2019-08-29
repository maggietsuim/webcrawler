import React, { Component } from 'react';
import './Card.css';
import CardHeader from '../CardHeader/CardHeader'
import CardBody from '../CardBody/CardBody'

class Card extends Component {
  render() {
    return (
      <article className="Card">
        <CardHeader image={'https://source.unsplash.com/user/erondu/600x400'}/>
        <CardBody 
          companyName={this.props.companyName}
          roleName={this.props.roleName}
          locationName={this.props.locationName}
          text={this.props.text}
        />
      </article>
    )
  }
}

export default Card;