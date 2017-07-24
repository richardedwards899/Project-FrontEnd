import React from 'react';
import { Link } from 'react-router-dom'

class SignOut extends React.Component{

  constructor(props){
    super(props);

    //method binding
    this.signOut = this.signOut.bind(this)
  }

  signOut(event){
    event.preventDefault();

    const request = new XMLHttpRequest();
    request.open("DELETE", this.props.url);  // DELETE ...5000/users/sign_out.json
    request.setRequestHeader("Content-Type", "application/json");
    request.withCredentials = true;

    request.onload = () => {
      console.log('signed out with status:', request.status)

      if (request.status === 204){   // successful, but no content to return
        this.props.onSignOut(null);  //set user to null in LoginBox
      }
    }
    request.send(null);
  }

  render() {
    return (
       <div>
        <button onClick={this.signOut}>Sign out</button>
        <Link className='shows-link' to='/shows'>View reports</Link>
      </div>
    )
  }
}

export default SignOut
