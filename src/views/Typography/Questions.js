import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link, withRouter} from 'react-router-dom';
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";
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
import GridContainer from 'components/Grid/GridContainer';
import GridItem from "components/Grid/GridItem.js";
import { ScriptSnapshot } from 'typescript';
import { Button } from '@material-ui/core';
import CardComponent from './QuestionsCard';

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
  const [startDate] =React.useState(new Date());
  const [cards, setCards] = React.useState([]);
  const [selected, setSelected] = React.useState([]);
  
  
  React.useEffect(() => { fetchData() }, []);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleChange = (date) => {
    this.setState({
      startDate: date
    });
  };

  
const handleAdd = (key, reviewRespond) => {                                                                                                                                                  
  firebase.database().ref('Questions').child(key).update({ respond: reviewRespond })

};

const handleBack = () =>{
  window.location.replace("/admin/dashboard");
}
 


  function fetchData() {
    firebase.database().ref('Questions').on('value', (snapshot) => {
      let cards = [];
      setCards([]);
      setSelected([]);

      if(snapshot.exists()) {
        snapshot.forEach((questionData) => {
          let question = questionData.val();
          question.key = questionData.key;

          cards.push(<CardComponent question={question} handleAdd={(key, reviewRespond) => handleAdd(key, reviewRespond)} />);
          
          setCards([]);
          setCards(cards);
        })
      }
    })
  }   

  return (
    <div
        className="App1"
        style={{
          backgroundImage: `url(${carfix})`
        }}>
          <h3 className="font-color"><b>Questions About the Product
          <IconButton onClick={handleBack}>   
          <span className="material-icons md-48" id = "home">
          home
          </span>
          </IconButton></b></h3>
          
      <GridContainer>
      
      {cards}
    
    </GridContainer>
    </div>
  );
}
