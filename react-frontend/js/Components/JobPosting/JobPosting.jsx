import React, { Component } from 'react';
import './JobPosting.css';
import Card from '../Card/Card';

class JobPosting extends Component {
  render() {
    return (
      <div className="JobPosting">
        {this.props.details.map((detail) => (
          <Card 
            companyName={detail.CompanyName}
            roleName={detail.Role}
            locationName={detail.Location}
            text={detail.Requirements}
          />
        ))}
      </div>
    );
  }
}

export default JobPosting;