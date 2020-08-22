import React, { Component,useRef } from 'react';
import Users from './Users';
import AddUser from './AddUser';
import carfix from "assets/img/coverpage.jpg";
import firebase from "../../config/firebase.js";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import  "views/Image.css";

class UserProfile extends Component{


  static defaultProps = {
    center: { lat: 40.7446790, lng: -73.9485420 },
  };

 
    // Default dummy data
    state = {

        users:[
          {date:"2020-02-01", case1:"Nubia Docter Barahona was abused and murdered on February 11, 2011.hfhfhhghfghgffhgfhfghfhgfhgfhfghfhfghfg", location:"Gampaha", isEditing:false},
          {date:"2020-02-01", case1:"Nubia Docter Barahona was abused and murdered on February 11, 2011.", location:"Gampaha", isEditing:false},
          {date:"2020-02-01", case1:"Nubia Docter Barahona was abused and murdered on February 11, 2011.", location:"Gampaha", isEditing:false}
    
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
      updateUser = (i, date, case1, location) => {
        let users = this.state.users;
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
        let users = this.state.users.filter((u,index)=>{
            return index !== i;
        });
        this.setState({
            users
        });
      }

    render(){
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

            <Map 
            google={this.props.google} 
            zoom={14}
            onClick={this.onClick}
            defaultCenter={ this.props.center }        
            >
 
            <Marker onClick={this.onMarkerClick}
                    name={'Current location'}
                    style={{color: '#ff7777'}}
                      lat={40.7473310}
                      lng={-73.8517440}
                    />

            <InfoWindow onClose={this.onInfoWindowClose}>
                {/* <div>
                  <h1>{this.state.selectedPlace.name}</h1>
                </div> */}
            </InfoWindow>
            </Map>
            </div>


           );
    }
}


export default GoogleApiWrapper({
  apiKey: ("AIzaSyDMMtNaoakN-KNtcut2R2AgOhVJWMAjj7U")
})(UserProfile)

