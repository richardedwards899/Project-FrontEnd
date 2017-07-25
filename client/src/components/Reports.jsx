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

    //bind methods
    this.displayReport = this.displayReport.bind(this);
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

  displayReport(){
    console.log('try to display report!');
  }

  render(){

    return(
      <div className="home">
        <nav>
          <Link to='/' className='smallTitle'>Choose a report to edit</Link>
        </nav>

        <div>
          {
            this.state.reports.map(function(report, index){
              return <Report key={index} createdAt={report.created_at} year={report.year} onClick={this.displayReport}/>
            }.bind(this))
          }
        </div>

      </div>
    )
  }
}

export default Reports;