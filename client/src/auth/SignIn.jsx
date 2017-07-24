import React from 'react'

class SignIn extends React.Component {

  constructor(props){
    super(props);

    // Defines the initial state
    this.state = {
      email:"",
      password:""
    }

    //set up method bindings to this class instance
    this.handleOnChangeEmail = this.handleOnChangeEmail.bind(this)
    this.handleOnChangePassword = this.handleOnChangePassword.bind(this)
    this.signIn = this.signIn.bind(this)
  }

  handleOnChangeEmail(event) {
    this.setState({email: event.target.value})
  }

  handleOnChangePassword(event) {
    this.setState({password: event.target.value})
  }

  signIn(event){
    event.preventDefault();

    const request = new XMLHttpRequest();

    request.open("POST", this.props.url);   // POST localhost:5000/users/sign_in.json
    request.setRequestHeader("Content-Type", "application/json");
    request.withCredentials = true;

    const data = {
      user:{
        email: this.state.email,
        password: this.state.password
      }
    }
    request.send(JSON.stringify(data))

    request.onload = () => {          // FAT ARROW! TO RETAIN 'this'
      if(request.status === 201){     // If we get 201, it means that something has been created as a result of the request
        let user = JSON.parse(request.responseText);  //server must return whatever's been created?
        this.props.onSignIn(user);
      }
    }
  }

  render() {
    return (
      <form  className='login-form' >
        <input type="text" onChange={this.handleOnChangeEmail}  placeholder="Email" />
        <input type="password" onChange={this.handleOnChangePassword}  placeholder="Password" />
        <button onClick={this.signIn}>Sign in</button>
      </form>
    )
  }
}

export default SignIn;
