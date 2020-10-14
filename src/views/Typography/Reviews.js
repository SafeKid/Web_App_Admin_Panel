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
import ReviewCard from "./ReviewCard";

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
  const [cards, setCards] = React.useState([]);
  const [selected, setSelected] = React.useState([]);

  React.useEffect(() => { fetchData() }, []);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleBack = () => {
    window.location.replace("/admin/typography");
  }

  const handleAdd = (key, reviewRespond) => {
    firebase.database().ref('Reviews').child(key).update({respond:reviewRespond})
  };

  function fetchData(){
    firebase.database().ref('Reviews').on('value', (snapshot) => {
      let cards = [];
      setCards([]);
      setSelected([]);

      if(snapshot.exists()){
        snapshot.forEach((reviewData) => {
          let review = reviewData.val();
          review.key = reviewData.key;

          cards.push(<ReviewCard review={review} handleAdd={(key, reviewRespond) => handleAdd(key, reviewRespond)} />);
          
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
          <h3 className="font-color"><b>User Reviews
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
