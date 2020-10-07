/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "./views/Dashboard/Dashboard"
import Typography from "./views/Typography/Typography"
import UserProfile from "./views/UserProfile/UserProfile"
import TableList from "./views/TableList/TableList"
import DeviceAdd from './views/Dashboard/Device_add'
import UserReg from './views/Dashboard/User_reg'
import Reviews from './views/Typography/Reviews'
import UserQuestions from './views/Typography/Questions'
import Login from "./views/Login/login"

// core components
import Admin from "layouts/Admin.js";

import "assets/css/material-dashboard-react.css?v=1.9.0";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route exact path="/Device_add" component={DeviceAdd}/>
      <Route exact path="/User_reg" component={UserReg}/>
      <Route exact path="/Reviews" component={Reviews}/>
      <Route exact path="/Questions" component={UserQuestions}/>
      <Route exact path="/Dashboard" component={Dashboard}/>
      <Route exact path="/Typography" component={Typography}/>
      <Route exact path ="/login" component={Login}/>
      <Route exact path="/UserProfile" component={UserProfile}/>
      <Route exact path="/TableList" component={TableList}/>
      <Redirect from="/" to="/login" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
