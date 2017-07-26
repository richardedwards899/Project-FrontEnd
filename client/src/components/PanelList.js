import React from 'react';
import InputPanel from './InputPanel';

class PanelList extends React.Component{

  constructor(props){
    super(props);

    this.Q1responses = {
        0: "This is piece of text associated with the 0 position.",
       25: "This is piece of text associated with the 25 position.",
       50: "This is piece of text associated with the 50 position.",
       75: "This is piece of text associated with the 75 position.",
      100: "This is piece of text associated with the 100 position."
    }
    this.Q2responses = {
        0: "Aardvark 0 position.",
       25: "Aardvark 25 position.",
       50: "Aardvark 50 position.",
       75: "Aardvark 75 position.",
      100: "Aardvark 100 position.",
    }
  }

  render(){
    return (
      <div className='panel_list'>
        <InputPanel input={this.props.report.inputs[0]} responses={this.Q1responses}/>
        <InputPanel input={this.props.report.inputs[1]} responses={this.Q2responses}/>
      </div>
    );
  }
}

export default PanelList;
