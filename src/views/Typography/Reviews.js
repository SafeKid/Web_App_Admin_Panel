import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
import  "views/Image.css"
import firebase from "../../config/firebase.js";
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
    width:100,
    height:100,
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
          <h3 className="font-color"><b>User Reviews</b></h3>
      <GridContainer>
      <GridItem xs={12} sm={6} md={3}>
    <Card className={classes.root}>
      <CardHeader id="reviewscardheader"
        avatar={
          <Avatar profile aria-label="recipe" className={classes.avatar}>
            <a href="#pablo" onClick={e => e.preventDefault()}>
               <img src={avatar} alt="..." />
            </a>
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
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        I do like the app. It does everything it says. Although it seems to have a lag time, sometimes it gives me 
        a warning about my son's text but I can't see it right away. I would like to monitor his social networking better, e
        specially snap chat and Instagram, where I can see what pictures they are exchanging. Concerned mother of a teen aged boy.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
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
        </IconButton>
        <IconButton aria-label="share">
        <span class="material-icons">
         comment
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

    <br/>
   
      <GridItem xs={12} sm={6} md={3}>
    <Card className={classes.root}>
      <CardHeader id="reviewscardheader"
        avatar={
          <Avatar profile aria-label="recipe" className={classes.avatar}>
            <a href="#pablo" onClick={e => e.preventDefault()}>
               <img src={avatar1} alt="..." />
            </a>
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="Nethma Jayasinghe"
        subheader="July 14, 2020"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        I do like the app. It does everything it says. Although it seems to have a lag time, sometimes it gives me 
        a warning about my son's text but I can't see it right away. I would like to monitor his social networking better, e
        specially snap chat and Instagram, where I can see what pictures they are exchanging. Concerned mother of a teen aged boy.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
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
        </IconButton>
        <IconButton aria-label="share">
        <span class="material-icons">
         comment
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
        
        </IconButton>
      </CardActions>
      </Card>
    </GridItem>

    <GridItem xs={12} sm={6} md={3}>
    <Card className={classes.root}>
      <CardHeader id="reviewscardheader"
        avatar={
          <Avatar profile aria-label="recipe" className={classes.avatar}>
            <a href="#pablo" onClick={e => e.preventDefault()}>
               <img src={avatar2} alt="..." />
            </a>
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="Nethu Jayawardhana"
        subheader="January 07, 2020"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        I do like the app. It does everything it says. Although it seems to have a lag time, sometimes it gives me 
        a warning about my son's text but I can't see it right away. I would like to monitor his social networking better, e
        specially snap chat and Instagram, where I can see what pictures they are exchanging. Concerned mother of a teen aged boy.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
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
        </IconButton>
        <IconButton aria-label="share">
        <span class="material-icons">
         comment
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
        </IconButton>
      </CardActions>
    </Card>
    </GridItem>

    <GridItem xs={12} sm={6} md={3}>
    <Card className={classes.root}>
      <CardHeader id="reviewscardheader"
        avatar={
          <Avatar profile aria-label="recipe" className={classes.avatar}>
            <a href="#pablo" onClick={e => e.preventDefault()}>
               <img src={avatar3} alt="..." />
            </a>
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="Danush Abesinghe"
        subheader="June 01, 2020"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        I do like the app. It does everything it says. Although it seems to have a lag time, sometimes it gives me 
        a warning about my son's text but I can't see it right away. I would like to monitor his social networking better, e
        specially snap chat and Instagram, where I can see what pictures they are exchanging. Concerned mother of a teen aged boy.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
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
        </IconButton>
        <IconButton aria-label="share">
        <span class="material-icons">
         comment
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
      <CardHeader id="reviewscardheader"
        avatar={
          <Avatar profile aria-label="recipe" className={classes.avatar}>
            <a href="#pablo" onClick={e => e.preventDefault()}>
               <img src={avatar4} alt="..." />
            </a>
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="Saara De Silva"
        subheader="February 14, 2020"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        I do like the app. It does everything it says. Although it seems to have a lag time, sometimes it gives me 
        a warning about my son's text but I can't see it right away. I would like to monitor his social networking better, e
        specially snap chat and Instagram, where I can see what pictures they are exchanging. Concerned mother of a teen aged boy.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
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
        </IconButton>
        <IconButton aria-label="share">
        <span class="material-icons">
         comment
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

    <br/>
   
      <GridItem xs={12} sm={6} md={3}>
    <Card className={classes.root}>
      <CardHeader id="reviewscardheader"
        avatar={
          <Avatar profile aria-label="recipe" className={classes.avatar}>
            <a href="#pablo" onClick={e => e.preventDefault()}>
               <img src={avatar5} alt="..." />
            </a>
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="Vimal Jayasooriya"
        subheader="June 14, 2020"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        I do like the app. It does everything it says. Although it seems to have a lag time, sometimes it gives me 
        a warning about my son's text but I can't see it right away. I would like to monitor his social networking better, e
        specially snap chat and Instagram, where I can see what pictures they are exchanging. Concerned mother of a teen aged boy.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
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
        </IconButton>
        <IconButton aria-label="share">
        <span class="material-icons">
         comment
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
        </IconButton>
      </CardActions>
    </Card>
    </GridItem>

    <GridItem xs={12} sm={6} md={3}>
    <Card className={classes.root}>
      <CardHeader id="reviewscardheader"
        avatar={
          <Avatar profile aria-label="recipe" className={classes.avatar}>
            <a href="#pablo" onClick={e => e.preventDefault()}>
               <img src={avatar1} alt="..." />
            </a>
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="Vinusha Perera"
        subheader="February 09, 2020"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        I do like the app. It does everything it says. Although it seems to have a lag time, sometimes it gives me 
        a warning about my son's text but I can't see it right away. I would like to monitor his social networking better, e
        specially snap chat and Instagram, where I can see what pictures they are exchanging. Concerned mother of a teen aged boy.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
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
        </IconButton>
        <IconButton aria-label="share">
        <span class="material-icons">
         comment
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
        </IconButton>
      </CardActions>
    </Card>
    </GridItem>

    <GridItem xs={12} sm={6} md={3}>
    <Card className={classes.root}>
      <CardHeader id="reviewscardheader"
        avatar={
          <Avatar profile aria-label="recipe" className={classes.avatar}>
            <a href="#pablo" onClick={e => e.preventDefault()}>
               <img src={avatar} alt="..." />
            </a>
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="Hector Fernando"
        subheader="March 06, 2020"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        I do like the app. It does everything it says. Although it seems to have a lag time, sometimes it gives me 
        a warning about my son's text but I can't see it right away. I would like to monitor his social networking better, e
        specially snap chat and Instagram, where I can see what pictures they are exchanging. Concerned mother of a teen aged boy.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
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
        </IconButton>
        <IconButton aria-label="share">
        <span class="material-icons">
         comment
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
        </IconButton>
      </CardActions>
     </Card>
    </GridItem>
    </GridContainer>
    </div>
  );
}
