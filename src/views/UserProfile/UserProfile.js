import React, { Component,useRef } from 'react';
import Users from './Users';
import AddUser from './AddUser';
import carfix from "assets/img/coverpage.jpg";
import firebase from "../../config/firebase.js";
//import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import  "views/Image.css";

class UserProfile extends Component{


  static defaultProps = {
    center: { lat: 6.927079, lng: 79.861244 },
  }

 
    // Default dummy data
    state = {

        users:[],
        loading: true,
      }


      componentDidMount() {
        this.fetchCases()
      }


      fetchCases = () => {
        firebase.database().ref('Previous_Cases').on('value', (snapshot) => {
          var cases = [];
          
          if(snapshot.exists()) {
            snapshot.forEach((caseSnapshot) => {
              let caseData = caseSnapshot.val();
              caseData.key = caseSnapshot.key
              caseData.isEditing = false;

              cases.push(caseData);
              
              this.setState({ users: cases, loading: false })
            })
          }
          else {
            this.setState({ loading: false })
          }
        })
      }

      
      // (newUser) is received from AddUser.js
      addUser = (newUser) => {
          const { date, case1, location } = newUser;

          firebase.database().ref('Previous_Cases').push({ date, case1, location })
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
      updateUser = (i, date, case1, location) => {
        let users = this.state.users;

        firebase.database().ref('Previous_Cases').child(users[i].key).update({ date, case1, location })

        users[i].date = date;
        users[i].case1 = case1;
        users[i].location = location;
        users[i].isEditing = false;

        this.setState({
            users
        });

      }
      // (i) is received from Users.js
      pressDelete = (i) => {
        firebase.database().ref('Previous_Cases').child(this.state.users[i].key).remove()
        
        let users = this.state.users.filter((u,index)=>{
            return index !== i;
        });
        this.setState({
            users
        });
      }

    render(){
        if(this.state.loading) {
          return(
            <div>Loading... Please wait...</div>
          )
        }

        return(
          <div className="App" 
            style={{backgroundImage: `url(${carfix})`}}>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

            <div className="containers">
                <h4><b>Posts</b></h4>
                <Users allUsers={this.state.users} pressEditBtn={this.pressEditBtn} updateUser={this.updateUser} pressDelete={this.pressDelete} />
                <AddUser addUser={this.addUser}/>
            </div>

           
            </div>


           );
    }
}


export default UserProfile

