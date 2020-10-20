import React from 'react';
import config from '../config';
import Nav from '../components/Nav';
import { Link } from 'react-router-dom';
import FooterComponent from './FooterComponent';
import AuthService from './../auth/AuthService';
import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';
import Steps, { Step } from 'rc-steps';

class DashboardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testDetails: null,
      loading: true,
      isLoadingReport: false
    };
    this.domain = config.url;
    this.handleLogout = this.handleLogout.bind(this);
    this.getReport = this.getReport.bind(this);
    this.Auth = new AuthService();
    if (!this.Auth.loggedIn()) {
      this.props.history.replace('/login')
    }
  }
  async componentDidMount() {
    try {
      const res = await this.Auth.fetch(`${this.domain}/order/list`, {
        method: 'GET'
      });
      if (res.status === 401) return this.props.history.replace('/logout');
      return this.setState({ testDetails: res, loading: false });
    }
    catch (err) {
      this.Auth.logout()
      this.props.history.replace('/login')
    }
  }

  async getReport(id){
    this.setState({isLoadingReport: true});
    try{
     await this.Auth.getReport(id.id);
     this.setState({isLoadingReport: false});
      // console.log(reportRes)
      // if(reportRes.status === 401) return this.props.history.replace('/logout');
    } catch (e) {
      console.log(e)
      this.props.history.push({ pathname: '/error', state: { status: 500, message: 'Internal Server Error!' } })
    }
  }

  handleLogout() {
    this.Auth.logout()
    this.props.history.replace('/login');
  }
  customDiv(payment, report, index) {
    let obj = {};
    if (!payment) {
      obj.div = "panel panel-danger";
      obj.icon = <i className="fa fa-warning"></i>;
      obj.button = <Link to={{
        pathname: '/checkout',
        state: this.state.testDetails.Items[index]
      }}><button type="button" className="btn btn-light btn-shadow">Pay Now</button></Link>
    }
    else if (!report) {
      obj.div = "panel panel-info";
      obj.icon = <i className="fa fa-clock-o"></i>;
      obj.button = <button type="button" className="btn btn-light btn-shadow disabled">Report is being generated</button>
    }
    else {
      obj.div = "panel panel-success";
      obj.icon = <i className="fa fa-check-circle"></i>;
      obj.button = 
        <div>
          <button type="button" onClick={() => this.getReport(this.state.testDetails.Items[index])} className="btn btn-light btn-shadow">Download Report <i className="fa fa-download" /></button>
          {this.state.isLoadingReport && (<div className="text-center loader-inner line-scale-pulse-out-rapid">
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>)}
        </div>
    }
    return obj;
  }
  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          {this.state.loading ? (
            <div>
              <br /><br /><br /><br />
              <div className="loader" style={{ transform: 'translateX(50%)' }}>
                <div className="loader-inner ball-scale-multiple">
                  <div />
                  <div />
                  <div />
                </div>
              </div>
              <br /><br />
              <p>Loading...</p>
            </div>
          ) :
            (<div>
              <br />
              <div className="row">
                <div style={{padding:'30px 0px'}} className="text-left">
                  <Steps
                    current={0}
                    status='process'
                  >
                    <Step title="Book a Test" />
                    <Step title="Make Payment" icon={<i className="fa fa-rupee" style={{color:'#a94442'}}/>} />
                    <Step title="Sit Back and Relax" icon={<i className="fa fa-clock-o" style={{color: '#31708f'}} />} />
                    <Step title="Download Report" icon={<i className="fa fa-check-circle" style={{color:'#3c763d'}} />} />
                  </Steps>
                </div>
              </div>
              {this.state.testDetails && <h3>Total Tests: {this.state.testDetails.Count}</h3>}
              {this.state.testDetails.Count===0 && 
              <div>
                <img src="https://img.icons8.com/nolan/96/000000/empty-box.png" alt='No Tests yet'></img>
                <p>No data yet. Book a test to get started.</p>
              </div>}
              <div className="row">
                {this.state.testDetails && this.state.testDetails.Items.map((test, index) => (
                  <div key={index} className="col-md-6">
                    <div className={this.customDiv(test.paymentDone, test.reportGenerated).div}>
                      <div className="panel-heading">
                        <h3 className="panel-title text-left">{new Date(test.created_at).toDateString()} {this.customDiv(test.paymentDone, test.reportGenerated).icon}</h3>
                      </div>
                      <strong>Order ID:</strong> {test.id} <br />
                      <div className="row" style={{ padding: '0px 10px' }}>
                        <div className="col-md-6 text-left" style={{ padding: '0px 10px' }}>
                          <strong>Name:</strong> {test.fullName} <br />
                          <strong>Gender: </strong>{test.gender} <br />
                          <strong>Email:</strong> {test.email} <br />
                          <strong>Contact:</strong> {test.contact} <br />
                          <strong>DOB: </strong>{test.dob} <br />
                        </div>
                        <div className="col-md-6 text-left" style={{ padding: '0px 10px' }}>
                          <strong>Address:</strong> {test.area} <br />
                          <strong>City: </strong>{test.city} <br />
                          <strong>Pincode: </strong>{test.pincode} <br />
                          <strong>Test Name: </strong>{test.testName} <br />
                          <strong>Amount: ₹</strong>{test.amount} <br />
                        </div>
                      </div>
                      <br />
                      {this.customDiv(test.paymentDone, test.reportGenerated, index).button}
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/book"> <button type="button" className="btn btn-light btn-xs">Book a Test</button> </Link>
              <button type="button" className="btn btn-danger btn-xs" onClick={this.handleLogout.bind(this)}>Logout</button>
            </div>)}
        </div>
        <br /><br />
        <FooterComponent />
      </div>
    )
  }
}

export default DashboardComponent;