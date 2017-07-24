import React from 'react'
// import { Link } from 'react-router'
import LoginBox from '../auth/LoginBox'

//Home has no props or methods, so can be a stateless component with no class.
const Home = () => (
  <div className="home">
    <h1 className='title'>Report Generator</h1>
    <LoginBox url="http://localhost:5000/" />
  </div>
)

export default Home;
