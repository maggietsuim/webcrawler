import React, { Component } from 'react';
import './Card.css';
import CardHeader from '../CardHeader/CardHeader'
import CardBody from '../CardBody/CardBody'

class Card extends Component {
  render() {
    return (
      <div className="Card">
        <CardHeader 
          companyName={this.props.companyName}
          role={this.props.role}
          location={this.props.location}
          logoUrl={this.props.logoUrl}
        />
        <CardBody 
          linkedinLink={this.props.linkedinLink}
          companyAppLink={this.props.companyAppLink}
          description={this.props.description}
        />
      </div>
    )
  }
}

export default Card;