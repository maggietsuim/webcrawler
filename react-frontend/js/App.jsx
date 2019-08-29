import React, { Component } from 'react';
require('./App.css');
import JobPosting from './Components/JobPosting/JobPosting'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {roles: []}
  }

  componentDidMount() {
    fetch('http://127.0.0.1:5000/db')
    .then(res => res.json())
    .then((data) => {
      this.setState({ roles: data })
    })
    .catch(console.log)
  }
  render() {
    return (
      <div className="App">
        <h1>Hello There</h1>
        <JobPosting details={this.state.roles}/>
      </div>
    );
  };

}

export default App;
