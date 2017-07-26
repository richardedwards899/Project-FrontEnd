import React from 'react';
import Slider from './Slider';

class InputPanel extends React.Component{

  constructor(props){
    super(props);

    //inititialise the state. Maps input positions to pieces of text.
    this.state = {
      0: "Zero",
      25: "Twenty five",
      50: "Fifty",
      75: "Seventy five",
      100: "One hundred",
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
      })
    }
  }

  componentWillUnmount(){
    console.log("Unmounting!  Time to write to the db!");

  }

  render(){
    return (
      <div className='input_panel'>
        <h4>{this.props.input.name}</h4>
        <Slider position={this.props.input.position} onChange={this.setPosition}/>
        <p className='text_display'>{this.state[this.state.currentPosition]}</p>
      </div>
    );
  }
}

export default InputPanel;
