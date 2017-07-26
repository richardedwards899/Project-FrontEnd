import React from 'react';
import PanelList from './PanelList';

class ReportGenerator extends React.Component{

  constructor(props){
    super(props);

  }

  render(){

    console.log("Re-rendering in ReportGenerator: input[0] position:", this.props.report.inputs[0].position);  //is this sometimes out of date?
    console.log("Re-rendering in ReportGenerator: input[1] position:", this.props.report.inputs[1].position);  //is this sometimes out of date?

    return (
      <div className='report_generator'>

        <h2 className='title'>Report Generator</h2>
        <PanelList report={this.props.report} />

      </div>
    );
  }
}

export default ReportGenerator;
