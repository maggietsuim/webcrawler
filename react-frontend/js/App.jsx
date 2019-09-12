import React, { useState, useEffect } from 'react';
require('./App.css');
import JobPosting from './Components/JobPosting/JobPosting';

function useFetch(url) {
  const [data, setData] = useState([]);
  async function fetchUrl() {
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
  }
  useEffect(() => {
    fetchUrl();
  }, []);
  return [data];
}

function App() {
  const [roles] = useFetch(
      "http://127.0.0.1:5000/db"
  );
  return (
    <div>
      {roles.map((role) => (
        <JobPosting
          role = {role}
        />
      ))}
    </div>
  );
}

export default App;
