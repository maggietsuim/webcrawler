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
          text={'Kayaks crowd Three Sister Springs, where people and manatees maintain controversial coexistence. Kayaks crowd Three Sister Springs, where people and manatees maintain controversial coexistence. Kayaks crowd Three Sister Springs, where people and manatees maintain controversial coexistence. Kayaks crowd Three Sister Springs, where people and manatees maintain controversial coexistence. Kayaks crowd Three Sister Springs, where people and manatees maintain controversial coexistence.'}
        />
      </article>
    )
  }
}

export default Card;