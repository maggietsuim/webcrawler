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
import ReadMore from '@crossfield/react-read-more';
import ReadMoreButton from '@crossfield/react-read-more';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  content: {
    fontSize: 12,
  }
}));

function JobPosting(props) {
  const classes = useStyles();
  function replaceHTML(input) {
    input = input.replace(/<span>|<\/span>|<\/br>|\n|&nbsp;/g, '');
    return input;
  }
  return (
    <Card className={classes.card}>
      <CardHeader
        title={props.role.CompanyName}
        subheader={props.role.Role + " " + props.role.Location}
        avatar={
          <Avatar aria-label="logo" src={props.role.LogoUrl} />
        }
      />
      <ReadMore
        initialHeight={350}
        readMore={propss =>
          <ReadMoreButton 
            onClick={propss.onClick}
          >
            {propss.open ? 'Read Less' : 'Read More'}
          </ReadMoreButton>
        }
      >
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.content}>
            <p dangerouslySetInnerHTML={{__html: replaceHTML(props.role.Description)}} />
          </Typography>
        </CardContent>
      </ReadMore>

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