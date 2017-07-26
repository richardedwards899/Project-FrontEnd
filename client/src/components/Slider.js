import React from 'react';

class Slider extends React.Component{

  constructor(props){
    super(props);

    //Initialises the state
    this.state = {
      sliderValue: this.props.position
    }

    //method bindings
    this.updatePosition = this.updatePosition.bind(this);
  }

  updatePosition(position){
    console.log('Slider has moved to ', position);
    this.setState({
      sliderValue: position
    });
  }

  componentWillUnmount(){
    console.log("Unmounting!  Time to write to the db!");

  }

  render(){
    return (
      <div className='sliderDiv'>
        <input
          defaultValue={this.props.position}
          
          onChange={ (event) => {
            this.updatePosition(event.target.value);

          }}
          className='slider'
          type="range"
          min="0"
          max="100"
          step='25'
          ref={ (input) => { this.input = input } }
        />
      </div>
    );
  }
}

export default Slider;
