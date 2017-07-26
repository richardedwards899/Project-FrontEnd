import React from 'react';
import PanelList from './PanelList';

class ReportGenerator extends React.Component{

  constructor(props){
    super(props);

  }

  render(){

    console.log(this.props);

    return (
      <div className='report_generator'>

        <h2 className='title'>Report Generator</h2>
        <PanelList report={this.props.report} />

      </div>
    );
  }
}

export default ReportGenerator;
