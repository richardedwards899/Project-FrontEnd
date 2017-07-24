import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, IndexRoute } from 'react-router-dom'

import Home from './components/Home'
import Listing from './components/Listing'


class App extends React.Component{

  // The HashRouter is directing us to different components based upon the URL.

  render(){
    return (
      <HashRouter>
        <div className='container'>
          <Route exact path="/" component={ Home } />
          <Route path='/reports' component={ Reports } />
        </div>
      </HashRouter>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'))
