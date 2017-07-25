import React from 'react';
// import { Link } from 'react-router-dom';

class InputPanel extends React.Component{

  constructor(props){
    super(props);

  }

  render(){
    return (
      <div className='input_panel'>
        <h4>{this.props.input.name}</h4>
        <Slider />
      </div>
    );
  }
}

export default InputPanel;
