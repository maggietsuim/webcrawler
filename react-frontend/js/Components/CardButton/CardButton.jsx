import React, { Component } from 'react';
import './CardButton.css';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Button extends Component {
  render() {
    return (
      <button className="CardButton">
        <FontAwesomeIcon icon={faChevronRight} /> Find out more
      </button>
    )
  }
}

export default Button;