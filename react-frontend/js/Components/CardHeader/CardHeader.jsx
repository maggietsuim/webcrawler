import React, { Component } from 'react';
import './CardHeader.css'
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CardHeader extends Component {
  render() {
    return (
      <div className="CardHeader">
        <div>
          <h2 className="CardHeader-CompanyName">{this.props.companyName}</h2>
          <div className="CardHeader-Location">
            <FontAwesomeIcon icon={faLocationArrow}/>
            <h4 className="CardHeader-LocationText">{this.props.location}</h4>
          </div>
          <h4 className="CardHeader-RoleName">{this.props.role}</h4>
        </div>
        <div className="CardHeader-Logo-Frame">
          <img className="CardHeader-Logo" src={this.props.logoUrl}/>
        </div>
      </div>
    )
  }
}

export default CardHeader;