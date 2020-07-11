import React, { Component } from 'react';
import  "views/Image.css"
import firebase from "../../config/firebase.js";
import Geosuggest from 'react-geosuggest';

class Users extends Component{

    // call updateUser (App.js)
    handleUpdate = () => {
        this.props.updateUser(this.indexNum, this.date.value, this.case.value);
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

        const {allUsers, pressEditBtn, pressDelete} = this.props;

        const usersList = allUsers.map((user, index) => {

            return user.isEditing === true ? (
                
                <tr  key={index}>
                    <td><input type="date" ref={(val) => {this.date = val}} required defaultValue={user.date}/></td>
                    <td><input type="text" ref={(val) => {this.case = val}} required defaultValue={user.case}/></td>
                    <td>
                    <input type="button" value="Update" onClick={this.handleUpdate} ref={() => {this.indexNum = index}} className="btn green"/>
                    </td>
                </tr>  

            ) : (

                <tr  key={index}>
                    <td>{user.date}</td>
                    <td>{user.case}</td>
                    <td><button className="btn white black-text" onClick={() => pressEditBtn(index)}>Edit</button>  </td>
                     <td> <button className="btn red" onClick={()=>pressDelete(index)}>Delete</button></td>
                </tr>

            );
        });

        return(

            <table>
                <thead className="thead-dark">
                    <tr className="bordered">
                    <th className="length">Date</th>
                    <th className="length">Previous Cases</th>
                    <th className="length">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {usersList}
                </tbody>
            </table>
        );
    }
}

export default Users;
