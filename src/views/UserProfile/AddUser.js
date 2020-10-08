import React,{ Component } from 'react';
import  "views/Image.css"


class AddUser extends Component{

    state = {
        date:null,
        case1:null,
        location:null,
        isEditing:false
    }
    //call addUser (App.js)
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state);  
        e.target.reset();

    }
    // update state
    updateState = (e) => {
        this.setState({
            [e.target.name]:e.target.value,
        });
    }

    render(){
        return(
            <div className="row">
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field col s2">
                        <input name="date" autoComplete="off" placeholder="Enter date" required type="date" onChange={ this.updateState} />
                    </div>
                    <div className="input-field col s2">
                        <input name="case1" autoComplete="off" type="text" required placeholder="Enter case" onChange={ this.updateState } />
                    </div>
                    <div className="input-field col s2">
                        <input name="location" autoComplete="off" placeholder="Enter location" required type="text" onChange={ this.updateState} />
                    </div>
                   
                    <div className="input-field col s2">
                        <input type="submit" value="Add +" className="btn white black-text"/>
                    </div>
                </form>
            </div>
        );
    }
}
export default AddUser;