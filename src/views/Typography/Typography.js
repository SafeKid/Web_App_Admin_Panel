import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import {Link} from 'react-router-dom'
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import carfix from "assets/img/coverpage.jpg"
import  "views/Image.css"
 
import { bugs, website, server } from "variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div
    className="App"
    style={{
      backgroundImage: `url(${carfix})`
    }}>
      <div className="Wrapper">
    <div>
      <GridContainer>
      <GridItem xs={15} sm={6} md={4}>
            <Card>
            <Link to ="/Reviews">
              <CardHeader color="primary" stats icon>
                <CardIcon color="primary">
                <span class="material-icons">
                rate_review
                </span>
                </CardIcon>
                <h4 className={classes.cardTitle}><b>User Reviews</b></h4>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <hr/>
                </div>
              </CardFooter>
                </Link>
               
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <Card>
            <Link to ="/Questions">
              <CardHeader color="danger" stats icon>
                <CardIcon color="danger">
                <span class="material-icons">
                contact_support
                </span>
                </CardIcon>
                <h4 className={classes.cardTitle}><b>Questions about Product</b></h4>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <hr/>
                </div>
              </CardFooter>
                </Link>
               
            </Card>
          </GridItem>
        </GridContainer>
    </div>
    </div>
    </div>
  );
}