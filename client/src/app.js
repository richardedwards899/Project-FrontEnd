import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, IndexRoute } from 'react-router-dom'

import Home from './components/Home';
import Reports from './components/Reports';
import ReportGenerator from './components/ReportGenerator';


class App extends React.Component{

  constructor(props){
    super(props);

    // initialise the state. This 'report' object is what is to be passed to ReportGenerator to render.
    this.state = {
      report: null
    }

    //method bindings
    this.setReport = this.setReport.bind(this);
  }

  setReport(report){
    this.setState({
      report: report
    })
  }

  // The HashRouter is directing us to different components based upon the URL.
  // We can use Links in other parts of the app to hit these routes.
  render(){

    return (
      <HashRouter>
        <div className='container'>
          <Route exact path="/" component={ Home } />
          {/* <Route path='/reports' component={ Reports } /> */}
          <Route path='/reports' component={ () => { return <Reports setReport={this.setReport} />} } />
          <Route path='/report_generator' component={ () => { return <ReportGenerator report={this.state.report} /> } }  />
        </div>
      </HashRouter>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'))
