import React from 'react';
import { Link, Router } from 'react-router-dom';
import Report from './Report';

class Reports extends React.Component {

  constructor(props) {
    super(props);

    //Initialise state
    this.state = {
      reports: []
    }
  }

  componentDidMount(){

    var request = new XMLHttpRequest();

    request.open('GET', 'http://localhost:5000/api/reports');    // We want to get all reports for the logged in user...
    request.setRequestHeader('Content-Type', "application/json");
    request.withCredentials = true;

    request.onload = () => {

       if(request.status === 200){  // If request is successful, get the reports and store into state

        var reports = JSON.parse(request.responseText);
        console.log("reports: ", reports);

        this.setState({
          reports: reports
        });

       } else {
        console.log("Uh oh, you're not logged in!")
        // this.props.history.goBack();  what's this doing?
       }
    }
    request.send(null)
  }

  render(){

    return(
      <div className="listing">
        <nav>
          <Link to='/' className='title'>Choose a report to edit</Link>
        </nav>

        <div>
          {
            this.state.reports.map(function(report){
              return <Report></Report>
            })
          }
        </div>

      </div>
    )
  }
}

export default Reports;
