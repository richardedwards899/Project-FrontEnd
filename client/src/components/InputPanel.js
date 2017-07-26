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

    console.log('Received notice of a change to position: ', number);
    if (this.isValid(number)){
      this.setState({
        currentPosition: number
      });
    }
  }

  // On dismounting, needs to return back currentPosition
  componentWillUnmount(){

    const request = new XMLHttpRequest();
    const url = "http://localhost:5000/api/inputs/"+this.props.input.id+'/'+this.state.currentPosition;

    request.open("PATCH", url);  // PATCH http://localhost:5000/inputs/:id/:value
    request.setRequestHeader("Content-Type", "application/json");
    request.withCredentials = true;

    request.onload = () => {

      if(request.status === 200){
        const response = JSON.parse(request.responseText)
        console.log('server says:', response);
      }
    }
    request.send(null);
  }

  render(){
    return (
      <div className='input_panel'>
        <h4>{this.props.input.name}</h4>
        <Slider position={this.props.input.position} onChange={this.setPosition}/>
        <p className='text_display'>{this.props.responses[this.state.currentPosition]}</p>
      </div>
    );
  }
}

export default InputPanel;
