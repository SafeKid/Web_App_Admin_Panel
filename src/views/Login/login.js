import React, {Component} from "react";
import  "views/Image.css"
import { render } from 'react-dom';
import carfix from "assets/img/login.jpg";
import firebase from "../../config/firebase.js";
//import DatePicker from "react-datepicker";
 
//date input
//import "react-datepicker/dist/react-datepicker.css";

//dropdown
//import ControlledOpenSelect from "../isuru-components/dropdown-button2.js"


class App extends Component {
  render() {
    return (
      <Register />
      
    );
  }
}

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

class Register extends Component{
    constructor(props) {
        super(props);
        this.state = { 
          email: '',
          password: '',
          error: null,
        };
      }

      onSubmit = event => {
        //console.log(this.state.email);
        const { email, password } = this.state;
        
          firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(function(firebaseUser){
            //console.log("SUCCESS");
            var user = firebase.auth().currentUser;
            var ref = firebase.database().ref("Users").child(user.uid); 
            ref.once('value',function (snapshot) {  
              let type=snapshot.val().type;
              if(type=="admin"){
                //console.log("hERER");
                window.location.replace("/admin/dashboard");
                
              }
              
            
            }); 
            
          }).catch(function(error) {
            console.log(error.code);
            alert(error.message);
         });
    
        event.preventDefault();
      };
      onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      };


  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === '';
  return (
    
    <div
      className="App1"
      style={{
        backgroundImage: `url(${carfix})`
      }}>
    
   
    <section className="login">
    <div className="loginContainer">
  <h2 className="heading">Login</h2>

      <form onSubmit={this.onSubmit} >
      
          
          <input className="inputlogin"
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        
     
          <input className="inputlogin"
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
       
        <button disabled={isInvalid} type="submit" className="submitlogin">
          Sign In
        </button>
        {error && <p>{error.message}</p>}
      </form>
     
      
  
      
      </div>
      
    </section>
    
    </div>
  );
}

}
render(<App />, document.getElementById('root'))
export default App;