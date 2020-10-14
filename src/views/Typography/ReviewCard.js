import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link, withRouter} from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import firebase from "../../config/firebase.js";
import  "views/Image.css"
import GridItem from "components/Grid/GridItem.js";
import { Button } from '@material-ui/core';


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


  
export default function ReviewCard(props) {
    const { review, handleAdd } = props;
    const { key, date, name, description, user, respond, title } = review;
    const [showInput, setShowInput] = React.useState(false);
    const [showReply, setShowReply] = React.useState(false);
    const [reviewRespond, setReviewRespond] = React.useState("");
    const [cards, setCards] = React.useState([]);

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    
    return (
        <GridItem xs={12} sm={6} md={3}>
        <Card className={classes.root}>
          <CardHeader id="reviewscardheader"
            avatar={
                <Avatar profile aria-label="recipe" className={classes.avatar} id="avatar">
                <div id="avatarfont">
                     {name.substring(0,1)}
                 </div>
            </Avatar>
            }
            // action={
            //   <IconButton aria-label="settings">
            //     <MoreVertIcon />
            //   </IconButton>
            // }
            title={name}        
            subheader={date}
          />
          <CardContent>
          <Typography variant="body2" color="black" component="p"><h4 id="titleContent1">{title}</h4><hr/><p>{description}<br/><br/>{user}</p>
       </Typography>
          </CardContent>
          <CardActions disableSpacing>
         
            <div className="rply">
    {!respond.length &&
      <CardActions disableSpacing>
        {!showInput && <Button id="cardbutton1" aria-label="share" onClick={() => setShowInput(true)} >
        Reply
       </Button>}
      </CardActions> 
    }
    {!respond.length && showInput && <input id="cardinput" type="text" value={reviewRespond} onChange={(event) => setReviewRespond(event.target.value)}/> }
    {!respond.length && showInput && <Button id="cardbutton" onClick={() => handleAdd(key, reviewRespond)}>Add</Button>}
    {respond.length && !showReply ? <Button id="cardbutton2" onClick = {() => setShowReply(true)}>View Reply</Button> : null}
    {respond.length && showReply ? <Typography variant="body2" color="black" component="p"><p id="rply">{respond}</p></Typography> : null}
    {respond.length && showReply ? <Button id="cardbutton2" onClick = {() => setShowReply(false)}>Hide Reply</Button> : null}
    </div>
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
        <br/>
        </GridItem>
    )
  }
