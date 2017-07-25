import React from 'react';
import { Link } from 'react-router-dom';

class Report extends React.Component{

  constructor(props){
    super(props);

  }

  render(){
    return (
      <div className='report'>
        <Link to='/report_generator' className='reportTitle'>

          {this.props.report.year}
        </Link>
      </div>
    );
  }
}

export default Report;
