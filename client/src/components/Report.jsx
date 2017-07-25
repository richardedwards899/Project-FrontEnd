import React from 'react'
import { string, number } from 'prop-types'

const Report = (props) => (
  <div className='report'>

      <h2 className='show-title'>{props.title}</h2>
      <h4 className='show-series'>Series ({props.series})</h4>
      <p className='show-description'>{props.description}</p>

  </div>
)

Report.propTypes = {
  title: string.isRequired,
  image: string.isRequired,
  series: number.isRequired,
  description: string.isRequired
}


export default Report;
