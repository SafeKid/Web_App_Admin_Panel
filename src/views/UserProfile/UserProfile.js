import React, { Component } from 'react';
import Users from './Users';
import AddUser from './AddUser';
import carfix from "assets/img/coverpage.jpg";
import firebase from "../../config/firebase.js";
import Geosuggest from 'react-geosuggest';
import  "views/Image.css"


class App extends Component{

    // Default dummy data
    state = {

        users:[
          {date:"2020-02-12", case:"After 3-Year-Old's Death, Bill Would Change Way Child Abuse Cases Are Handled", isEditing:false},
          {date:"2020-03-14", case:"After 3-Year-Old's Death, Bill Would Change Way Child Abuse Cases Are Handled", isEditing:false},
          {date:"2020-01-02", case:"After 3-Year-Old's Death, Bill Would Change Way Child Abuse Cases Are Handled", isEditing:false}
    
        ]
      }
      // (newUser) is received from AddUser.js
      addUser = (newUser) => {
            let users = [...this.state.users, newUser];
            this.setState({
                users
            });     
      }

      // when press edit button
      // (i) is received from Users.js
      pressEditBtn = (i) => {
        let users = this.state.users;
        users[i].isEditing = true;
        this.setState({
            users
        });
      }

      // (i, name, age) is received from Users.js
      updateUser = (i, name, age) => {
        let users = this.state.users;
        users[i].name = name;
        users[i].age = age;
        users[i].isEditing = false;

        this.setState({
            users
        });

      }
      // (i) is received from Users.js
      pressDelete = (i) => {
        let users = this.state.users.filter((u,index)=>{
            return index !== i;
        });
        this.setState({
            users
        });
      }

      getDate = () => 
  {
    let date = this.state.date;
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yyyy = date.getFullYear();

    if(dd < 10) {
      dd = '0' + dd;
    }

    if(mm < 10) {
      mm = '0' + mm;
    }

    let dateString = yyyy + '-' + mm + '-' + dd;

    return dateString;
  }
      
    render(){
        return(
          <div
          className="App"
          style={{
            backgroundImage: `url(${carfix})`
          }}>
            <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

            <div className="containers">
                <h4><b>Posts</b></h4>
                <Users allUsers={this.state.users} pressEditBtn={this.pressEditBtn} updateUser={this.updateUser} pressDelete={this.pressDelete} />
                <AddUser addUser={this.addUser}/>
                <Geosuggest />
            </div>
            </div>
        );
    }
}

export default App;