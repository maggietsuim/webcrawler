import React from 'react';
import './CardHeader.css'
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CardHeader(props) {
  return (
    <div className="CardHeader">
      <h1>{props.companyName}</h1>
      <div>
        <h2 className="CardHeader-CompanyName">{props.companyName}</h2>
        <div className="CardHeader-Location">
          <FontAwesomeIcon icon={faLocationArrow}/>
          <h4 className="CardHeader-LocationText">{props.location}</h4>
        </div>
        <h4 className="CardHeader-RoleName">{props.role}</h4>
      </div>
      <div className="CardHeader-Logo-Frame">
        <img className="CardHeader-Logo" src={props.logoUrl}/>
      </div>
    </div>
  )
}


export default CardHeader;