import React, { Component } from 'react';
require('./App.css');
import JobPosting from './Components/JobPosting/JobPosting'

class App extends Component {
  render() {
    return (
      <div className="App">
        <JobPosting />
      </div>
    );
  };

}

export default App;
