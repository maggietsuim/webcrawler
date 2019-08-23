import React, { Component } from 'react';
import './JobPosting.css';
import Card from '../Card/Card';

class JobPosting extends Component {
  render() {
    return (
      <div className="JobPosting">
        <Card 
          companyName="Stripe" 
          roleName="Security Software Engineer (Intern)"
          locationName="San Francisco"
        />
      </div>
    );
  }
}

export default JobPosting;