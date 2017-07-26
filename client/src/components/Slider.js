import React from 'react';

class Slider extends React.Component{

  constructor(props){
    super(props);

  }

  render(){
    return (
      <div className='sliderDiv'>
        <input
          defaultValue={this.props.position}
          onChange={ (event) => { this.props.onChange(parseInt(event.target.value)); } }
          className='slider'
          type="range"
          min="0"
          max="100"
          step='25'
        />
      </div>
    );
  }
}

export default Slider;
