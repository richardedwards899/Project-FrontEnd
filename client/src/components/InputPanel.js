import React from 'react';
import Slider from './Slider';
import SliderDescription from './SliderDescription';

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
    console.log('currentPosition should be set to: ', this.props.input.position);
  }

  render(){
    return (
      <div className='input_panel'>
        <h4>{this.props.input.name}</h4>
        <Slider position={this.props.input.position}/>
        <p className='text_display'>{this.state[this.state.currentPosition]}</p>
        {/* <p>"hello"</p> */}
      </div>
    );
  }
}

export default InputPanel;
