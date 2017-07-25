import React from 'react';
import InputPanel from './InputPanel';

class PanelList extends React.Component{

  constructor(props){
    super(props);

    console.log('report::', this.props.report);

  }

  render(){
    return (
      <div className='panel_list'>
        <InputPanel input={this.props.report.inputs[0]}/>
        <InputPanel input={this.props.report.inputs[1]}/>
      </div>
    );
  }
}

export default PanelList;
