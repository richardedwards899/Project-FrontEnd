import React from 'react';

const Report = (props) => (
  <div className='report' onClick={props.onClick}>
    <div className="reportTitle">{props.year}</div>
  </div>
)

export default Report;
