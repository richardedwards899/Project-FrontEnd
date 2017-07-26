import React from 'react';

class SliderDescription extends React.Component{

  constructor(props){
    super(props);

    //inititialise the state. Maps input positions to pieces of text.
    this.state = {
      0: "Zero",
      25: "Twenty five",
      50: "Fifty",
      75: "Seventy five",
      100: "One hundred",
      currentPosition: 0
    }

    //method bindings
    this.setCurrentPosition = this.setCurrentPosition.bind(this);
  }

  setCurrentPosition(number){

    switch (number) {
      case 0:
      case 25:
      case 50:
      case 75:
      case 100:
        this.setState({
          currentPosition: number
        })
        console.log('Set currentPosition in state to: ', number);
        break;
      default:
        currentPosition = null;
    }
  }

  //returns a textarea set with the text associated with the current position.
  render(){
    return (
      <div className='slider_description'>
        <p className='text_display'>{this.state[this.state.currentPosition]}</p>
      </div>
    );
  }
}

export default SliderDescription;
