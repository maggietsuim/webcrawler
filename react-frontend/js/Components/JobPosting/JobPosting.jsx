import React from 'react';
require('./JobPosting.css');
// import Card from '../Card/Card';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
}));

function JobPosting(props) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader
        title={props.role.CompanyName}
      />
    </Card>
  );
}

export default JobPosting;