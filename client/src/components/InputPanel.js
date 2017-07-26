import React from 'react';
import Slider from './Slider';

// On creation, InputPanel is given the prop 'input', which is the input object.
class InputPanel extends React.Component{

  constructor(props){
    super(props);

    //inititialise the state. Maps input positions to pieces of text.
    this.state = {
      currentPosition: this.props.input.position
    }

    //method bindings
    this.setPosition = this.setPosition.bind(this);
  }

  isValid(number){
    switch (number) {
      case 0: case 25: case 50: case 75: case 100:
        return true;
    default:
        return false;
    }
  }

  setPosition(number){

    if (this.isValid(number)){
      this.setState({
        currentPosition: number
      });
    }
  }

  // After the state has been updated, write this to the db.
  componentDidUpdate(){

    const request = new XMLHttpRequest();
    const url = "http://localhost:5000/api/inputs/"+this.props.input.id+'/'+this.state.currentPosition;

    request.open("PATCH", url);  // PATCH http://localhost:5000/inputs/:id/:value
    request.setRequestHeader("Content-Type", "application/json");
    request.withCredentials = true;

    request.onload = () => {

      if(request.status === 200){
        const response = JSON.parse(request.responseText)
        console.log('Server has updated Input to:', response);
      } else {
        console.log("Server did not update Input, with status:", request.status);
      }
    }
    request.send(null);
  }

  render(){
    //Check the position in props!
    console.log('Re-rendering in InputPanel: Input position['+this.props.index+'] in state is ', this.state.currentPosition);

    return (
      <div className='input_panel'>
        <p className="question-style">{this.props.input.name}</p>
        <Slider position={this.state.currentPosition} onChange={this.setPosition}/>
        <p className='text_display'>{this.props.responses[this.state.currentPosition]}</p>
      </div>
    );
  }
}

export default InputPanel;
