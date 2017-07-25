import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, IndexRoute } from 'react-router-dom'

import Home from './components/Home';
import Reports from './components/Reports';
import ReportGenerator from './components/ReportGenerator';


class App extends React.Component{


  // The HashRouter is directing us to different components based upon the URL.
  // We can use Links in other parts of the app to hit these routes
  render(){

    return (
      <HashRouter>
        <div className='container'>
          <Route exact path="/" component={ Home } />
          <Route path='/reports' component={ Reports } />
          <Route path='/report_generator' component={ () => { return <ReportGenerator test={1} /> } }  />
        </div>
      </HashRouter>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'))
