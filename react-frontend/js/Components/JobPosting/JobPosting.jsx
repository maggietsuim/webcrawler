import React from 'react';
require('./JobPosting.css');
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CheckCircle from '@material-ui/icons/CheckCircle';
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline';
import ShareIcon from '@material-ui/icons/Share';

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
        subheader={props.role.Role + " " + props.role.Location}
        avatar={
          <Avatar aria-label="logo" src={props.role.LogoUrl} />
        }
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <p dangerouslySetInnerHTML={{__html: props.role.Description}} />
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="check circle">
          <CheckCircle />
        </IconButton>
        <IconButton aria-label="check circle">
          <CheckCircleOutline />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default JobPosting;