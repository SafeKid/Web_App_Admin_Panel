import React, { Component } from 'react';
import  "views/Image.css"
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


class Users extends Component{

    // call updateUser (App.js)
    handleUpdate = () => {
        this.props.updateUser(this.indexNum, this.date.value, this.case1.value, this.location.value);
    }

    render(){

        const {allUsers, pressEditBtn, pressDelete} = this.props;

        const usersList = allUsers.map((user, index) => {

            return user.isEditing === true ? (
                
                <tr  key={index}>
                    <td><input type="date" id="field" ref={(val) => {this.date = val}} required defaultValue={user.date}/></td>
                    <td><textarea type="text"  id="field" ref={(val) => {this.case1 = val}} required defaultValue={user.case1} rows={5}/></td>
                    <td><input type="text" id="field" ref={(val) => {this.location = val}} required defaultValue={user.location}/></td>
                    <td>
                    <input type="button" value="Update" id="field" onClick={this.handleUpdate} ref={() => {this.indexNum = index}} className="btn green"/>
                    </td>
                </tr>  

            ) : (

                <tr  key={index}>
                    <td id="heading">{user.date}</td>
                    <td id="heading1">{user.case1}</td>
                    <td id="heading2">{user.location}</td>
                    <td id="heading3"><button className="btn yellow black-text" onClick={() => pressEditBtn(index)}>Edit </button>   |   <button className="btn purple" onClick={()=>pressDelete(index)}> Delete</button></td>
                </tr>
                 
            );
        });

        return(
            <table className="striped">
                <thead >
                    <tr>
                    <th >Date</th>
                    <th >Case</th>
                    <th>Location</th>
                    <th>Action</th>
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