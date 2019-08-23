import React, { Component } from 'react';
import './CardBody.css';
import CardButton from '../CardButton/CardButton';
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CardBody extends Component {
  render() {
    return (
      <div className="CardBody">
        <p className="CardBody-Date">{this.props.date}</p>
        <h2 className="CardBody-CompanyName">{this.props.companyName}</h2>
        <div className="CardBody-Location">
          <FontAwesomeIcon icon={faLocationArrow}/>
          <h4 className="CardBody-LocationText">{this.props.locationName}</h4>
        </div>
        <h4 className="CardBody-RoleName">{this.props.roleName}</h4>

        {/* TODO: Render a list here */}
        <p className="CardBody-Content">{this.props.text}</p>
        
        <CardButton />
      </div>
    )
  }
}

export default CardBody;