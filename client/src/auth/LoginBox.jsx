import React from 'react';

import SignIn from './SignIn';
import SignUp from './SignUp';
import SignOut from './SignOut';

class LoginBox extends React.Component {

  constructor(props) {
    super(props);

    //initialise the state
    this.state = {
      currentUser: null
    }

    //set up method bindings to this class instance
    this.setUser = this.setUser.bind(this)
  }

  setUser(user){
    console.log("In setUser, about to set user as:", user);
    this.setState({
      currentUser: user
    })
  }

  //if there IS a user logged in, find out who it is
  fetchUser(){

    const request = new XMLHttpRequest();

    request.open("GET", this.props.url + "users.json")  //this is a request to get the current_user...
    request.setRequestHeader("Content-Type", "application/json")
    request.withCredentials = true;                   //and we're asking with authentication credentials.

    request.onload = () => {

      if(request.status === 200){
        const receivedUser = JSON.parse(request.responseText)
        console.log('receivedUser according to backend server is', receivedUser);
        this.setUser(receivedUser)
      }
      else if(request.status === 401){
        console.log('On initial mount, there is no user logged in!');
        this.setUser(null)
      }
    }
    request.send(null)
  }

  componentDidMount(){
    this.fetchUser();
  }

  render () {

      var mainDiv = null;

      // If there is no currentUser, display the Sign In and Sign Up components.
      if(!this.state.currentUser){
        mainDiv = <div>
          <h4> Please sign in </h4>
          <SignIn url={this.props.url + "users/sign_in.json"} onSignIn={this.setUser}></SignIn>
          <SignUp url={this.props.url + "users.json"} onSignUp={this.setUser}></SignUp>
        </div>
      }

      // If there is a currentUser, display the Sign Out component.
      if(this.state.currentUser){
        mainDiv = <div>
          <h4> Welcome {this.state.currentUser.email}!</h4>
          <SignOut url={this.props.url + "users/sign_out.json"} onSignOut={this.setUser}></SignOut>
        </div>
      }

      return (
        <div>
          { mainDiv }
        </div>
      )
  }
}

export default LoginBox
