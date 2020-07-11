import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link, withRouter} from 'react-router-dom';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import carfix from "assets/img/baby.jpg"
import firebase from "../../config/firebase.js";
import  "views/Image.css"
import avatar from "assets/img/views/marc.jpg";
import avatar1 from "assets/img/views/face2.jpg";
import avatar2 from "assets/img/views/face3.jpg";
import avatar3 from "assets/img/views/man1.jpg";
import avatar4 from "assets/img/views/face5.jpg";
import avatar5 from "assets/img/views/man3.jpg";
import GridContainer from 'components/Grid/GridContainer';
import GridItem from "components/Grid/GridItem.js";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    width:50,
    height:50,
    padding: '1%',
    margin:10
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div
        className="App1"
        style={{
          backgroundImage: `url(${carfix})`
        }}>
          <h3 className="font-color"><b>Questions About the Product</b></h3>
      <GridContainer>
      <GridItem xs={12} sm={6} md={3}>
    <Card className={classes.root}>
    <CardContent>
        <Typography variant="body2" color="textSecondary" component="p"><h4>
        Can no longer see phones location and daughter cannot use 
        Strava as location settings said to be off, however, 
        everything is turned on. No idea what's going on or how to solve it</h4>
       
        <CardHeader
        avatar={
          <Avatar profile aria-label="recipe" className={classes.avatar}>
              <Link to ="/User_reg">
               {/* <img src={avatar} alt="..." /> */}A
               </Link>
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="Ayesh Jayasinghe"
        subheader="June 20, 2020"
      />
       </Typography>
      </CardContent>
      
      <CardActions disableSpacing>
        <IconButton aria-label="share">
        <span class="material-icons">
        question_answer
        </span>
       </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          {/* <ExpandMoreIcon /> */}
        </IconButton>
      </CardActions>
    </Card>
    </GridItem>

    <GridItem xs={12} sm={6} md={3}>
    <Card className={classes.root}>
    <CardContent>
        <Typography variant="body2" color="textSecondary" component="p"><h4>
        Can no longer see phones location and daughter cannot use 
        Strava as location settings said to be off, however, 
        everything is turned on. No idea what's going on or how to solve it</h4>
       
        <CardHeader
        avatar={
          <Avatar profile aria-label="recipe" className={classes.avatar}>
              <Link to ="/User_reg">
               {/* <img src={avatar1} alt="..." /> */}N
               </Link>
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="Nethu Jayasooriya"
        subheader="June 20, 2020"
      />
       </Typography>
      </CardContent>
      
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
        <span class="material-icons">
            thumb_up_alt
          </span>
        </IconButton>
        <IconButton aria-label="share">
        <span class="material-icons">
            thumb_down_alt
          </span>
        </IconButton> */}
        <IconButton aria-label="share">
        <span class="material-icons">
        question_answer
        </span>
       </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          {/* <ExpandMoreIcon /> */}
        </IconButton>
      </CardActions>
    </Card>
    </GridItem>

    <GridItem xs={12} sm={6} md={3}>
    <Card className={classes.root}>
    <CardContent>
        <Typography variant="body2" color="textSecondary" component="p"><h4>
        Can no longer see phones location and daughter cannot use 
        Strava as location settings said to be off, however, 
        everything is turned on. No idea what's going on or how to solve it</h4>
       
        <CardHeader
        avatar={
          <Avatar profile aria-label="recipe" className={classes.avatar}>
              <Link to ="/User_reg">
               {/* <img src={avatar2} alt="..." /> */}S
               </Link>
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="Sadew Gomas"
        subheader="June 10, 2020"
      />
       </Typography>
      </CardContent>
      
      <CardActions disableSpacing>
        <IconButton aria-label="share">
        <span class="material-icons">
        question_answer
        </span>
       </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          {/* <ExpandMoreIcon /> */}
        </IconButton>
      </CardActions>
    </Card>
    </GridItem>

    <GridItem xs={12} sm={6} md={3}>
    <Card className={classes.root}>
    <CardContent>
        <Typography variant="body2" color="textSecondary" component="p"><h4>
        Can no longer see phones location and daughter cannot use 
        Strava as location settings said to be off, however, 
        everything is turned on. No idea what's going on or how to solve it</h4>
       
        <CardHeader
        avatar={
          <Avatar profile aria-label="recipe" className={classes.avatar}>
              <Link to ="/User_reg">
               {/* <img src={avatar3} alt="..." /> */}D
               </Link>
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="Danuka De Silva"
        subheader="June 02, 2020"
      />
       </Typography>
      </CardContent>
      
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
        <span class="material-icons">
            thumb_up_alt
          </span>
        </IconButton>
        <IconButton aria-label="share">
        <span class="material-icons">
            thumb_down_alt
          </span>
        </IconButton> */}
        <IconButton aria-label="share">
        <span class="material-icons">
        question_answer
        </span>
       </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          {/* <ExpandMoreIcon /> */}
        </IconButton>
      </CardActions>
    </Card>
    </GridItem>
    </GridContainer>

    <br/>

    <GridContainer>
      <GridItem xs={12} sm={6} md={3}>
    <Card className={classes.root}>
    <CardContent>
        <Typography variant="body2" color="textSecondary" component="p"><h4>
        Can no longer see phones location and daughter cannot use 
        Strava as location settings said to be off, however, 
        everything is turned on. No idea what's going on or how to solve it</h4>
       
        <CardHeader
        avatar={
          <Avatar profile aria-label="recipe" className={classes.avatar}>
              <Link to ="/User_reg">
               <img src={avatar} alt="..." />
               </Link>
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="Ayesh Jayasooriya"
        subheader="June 20, 2020"
      />
       </Typography>
      </CardContent>
      
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
        <span class="material-icons">
            thumb_up_alt
          </span>
        </IconButton>
        <IconButton aria-label="share">
        <span class="material-icons">
            thumb_down_alt
          </span>
        </IconButton> */}
        <IconButton aria-label="share">
        <span class="material-icons">
        question_answer
        </span>
       </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          {/* <ExpandMoreIcon /> */}
        </IconButton>
      </CardActions>
    </Card>
    </GridItem>

    <GridItem xs={12} sm={6} md={3}>
    <Card className={classes.root}>
    <CardContent>
        <Typography variant="body2" color="textSecondary" component="p"><h4>
        Can no longer see phones location and daughter cannot use 
        Strava as location settings said to be off, however, 
        everything is turned on. No idea what's going on or how to solve it</h4>
       
        <CardHeader
        avatar={
          <Avatar profile aria-label="recipe" className={classes.avatar}>
              <Link to ="/User_reg">
               <img src={avatar1} alt="..." />
               </Link>
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="Ayesh Jayasooriya"
        subheader="June 20, 2020"
      />
       </Typography>
      </CardContent>
      
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
        <span class="material-icons">
            thumb_up_alt
          </span>
        </IconButton>
        <IconButton aria-label="share">
        <span class="material-icons">
            thumb_down_alt
          </span>
        </IconButton> */}
        <IconButton aria-label="share">
        <span class="material-icons">
        question_answer
        </span>
       </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          {/* <ExpandMoreIcon /> */}
        </IconButton>
      </CardActions>
    </Card>
    </GridItem>

    <GridItem xs={12} sm={6} md={3}>
    <Card className={classes.root}>
    <CardContent>
        <Typography variant="body2" color="textSecondary" component="p"><h4>
        Can no longer see phones location and daughter cannot use 
        Strava as location settings said to be off, however, 
        everything is turned on. No idea what's going on or how to solve it</h4>
       
        <CardHeader
        avatar={
          <Avatar profile aria-label="recipe" className={classes.avatar}>
              <Link to ="/User_reg">
               <img src={avatar2} alt="..." />
               </Link>
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="Ayesh Jayasooriya"
        subheader="June 20, 2020"
      />
       </Typography>
      </CardContent>
      
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
        <span class="material-icons">
            thumb_up_alt
          </span>
        </IconButton>
        <IconButton aria-label="share">
        <span class="material-icons">
            thumb_down_alt
          </span>
        </IconButton> */}
        <IconButton aria-label="share">
        <span class="material-icons">
        question_answer
        </span>
       </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          {/* <ExpandMoreIcon /> */}
        </IconButton>
      </CardActions>
    </Card>
    </GridItem>

    <GridItem xs={12} sm={6} md={3}>
    <Card className={classes.root}>
    <CardContent>
        <Typography variant="body2" color="textSecondary" component="p"><h4>
        Can no longer see phones location and daughter cannot use 
        Strava as location settings said to be off, however, 
        everything is turned on. No idea what's going on or how to solve it</h4>
       
        <CardHeader
        avatar={
          <Avatar profile aria-label="recipe" className={classes.avatar}>
              <Link to ="/User_reg">
               <img src={avatar3} alt="..." />
               </Link>
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="Ayesh Jayasooriya"
        subheader="June 20, 2020"
      />
       </Typography>
      </CardContent>
      
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
        <span class="material-icons">
            thumb_up_alt
          </span>
        </IconButton>
        <IconButton aria-label="share">
        <span class="material-icons">
            thumb_down_alt
          </span>
        </IconButton> */}
        <IconButton aria-label="share">
        <span class="material-icons">
        question_answer
        </span>
       </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          {/* <ExpandMoreIcon /> */}
        </IconButton>
      </CardActions>
    </Card>
    </GridItem>
    </GridContainer>
    </div>
  );
}
