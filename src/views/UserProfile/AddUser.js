import React,{ Component } from 'react';
import firebase from "../../config/firebase.js";
import  "views/Image.css"
import Geosuggest from 'react-geosuggest';

class AddUser extends Component{

    state = {
        date:new Date(),
        case:null,
        isEditing:false
    }
    //call addUser (App.js)
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state);  
        const date = this.getDate();
        e.target.reset();

    }
    // update state
    updateState = (e) => {
        this.setState({
            [e.target.case]:e.target.value,
            [e.target.date]:e.target.value,
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
            <div className="row">
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field col s4">
                        <input name="date" autoComplete="off" placeholder="Enter date" required type="date" onChange={ this.updateState} />
                    </div>
                    <div className="input-field col s2">
                        <input name="case" autoComplete="off" type="text" required placeholder="Enter Previous cases" onChange={ this.updateState } />
                    </div>
                    <div className="input-field col s2">
                        <input type="submit" value="Add" className="btn blue"/>
                    </div>
                </form>
            </div>
        );
    }
}
export default AddUser;