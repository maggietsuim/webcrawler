import React, { useState, useEffect } from 'react';
require('./App.css');
import JobPosting from './Components/JobPosting/JobPosting';
import TextField from '@material-ui/core/TextField';
import Search from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    width: 100,
  },
}));

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
  const classes = useStyles();

  const [roles] = useFetch(
      "http://127.0.0.1:5000/db"
  );
  return (
    <div
      className="App"
    >
      <div className="App-Search">
        <TextField
          id="outlined-with-placeholder"
          label="Search a Skill"
          placeholder="e.g. Python"
          margin="normal"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
        <Button 
          variant="outlined"
          color="primary" 
          className={classes.button} 
          size="small"
          onClick={}
        >
          Search
        </Button> 
      </div>      
    </div>
  );
}

export default App;
