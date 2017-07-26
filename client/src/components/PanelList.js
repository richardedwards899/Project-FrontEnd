import React from 'react';
import InputPanel from './InputPanel';

class PanelList extends React.Component{

  constructor(props){
    super(props);

    // To what extent did you manage and control the activities of the subcontractor?
    this.Q1responses = {
        0: "Not at all. The subcontractor was given free reign to do pretty much what they liked.",
       25: "A little. Sometimes the subcontractor would ask for advice, and we would give them a steer on what we wanted commerically.",
       50: "Around half and half. It felt like the research was more of a collaborative exercise between us and the subcontractor",
       75: "Quite a lot. We not only told them what we wanted them to do, we also frequently told them how to do it.",
      100: "Almost entirely. The subcontractor was working to our plan and did not deviate from pre-agreed instructions."
    }

    // When technical issues were encountered on the project, to what extent were you involved in resolving them?
    this.Q2responses = {
        0: "Not at all. If technical issues arose, our subcontractors would deal with them without bothering us. They're the experts, and that's what we were paying them for.",
       25: "A little. We were usually able to give our thoughts on how the problem should be solved, but the subcontractor would work out the gory details.",
       50: "Around half and half. We were involved both in high-level design and the hands-on defect rectification.",
       75: "Quite a lot. We took on the majority of the technical problem solving, using the subcontractor for only well-defined tasks.",
      100: "Almost entirely. When issues arose, it was our staff that performed the route cause analysis and also planned and implemented a solution to the problem."
    }
  }

  render(){
    // console.log("Re-rendering PanelList using inputs[0]:", this.props.report.inputs[0]); //this is somehow out of date!
    // console.log("Re-rendering PanelList using inputs[1]:", this.props.report.inputs[1]); //this is somehow out of date!

    return (
      <div className='panel_list'>
        <InputPanel key={0} index={0} input={this.props.report.inputs[0]} responses={this.Q1responses}/>
        <InputPanel key={1} index={1} input={this.props.report.inputs[1]} responses={this.Q2responses}/>
      </div>
    );
  }
}

export default PanelList;
