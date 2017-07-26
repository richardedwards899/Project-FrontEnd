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

    console.log('Mounted Reports component - making request for reports from db');
    var request = new XMLHttpRequest();

    request.open('GET', 'http://localhost:5000/api/reports');    // We want to get all reports for the logged in user...
    request.setRequestHeader('Content-Type', "application/json");
    request.withCredentials = true;

    request.onload = () => {

       if(request.status === 200){  // If request is successful, get the reports and store into state

        var freshReports = JSON.parse(request.responseText);
        console.log("Reports freshly read from server: ", freshReports);
        console.log('Q1 position for report '+freshReports[0].year, freshReports[0].inputs[0].position);
        console.log('Q2 position for report '+freshReports[0].year, freshReports[0].inputs[1].position);

        this.setState({
          reports: freshReports
        });

       } else {
        console.log("Uh oh, you're not logged in!")
        this.props.history.goBack();
       }
    }
    request.send(null)
  }


  render(){

    return(
      <div>
        <nav>
          <Link to='/' className='smallTitle'>Choose a report to edit</Link>
        </nav>

        <div>
          {
            this.state.reports.map(function(report, index){
              return <Report key={index} report={report} setReport={this.props.setReport}/>
            }.bind(this))
          }
        </div>

      </div>
    )
  }
}

export default Reports;
