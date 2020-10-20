import React from 'react';
import Nav from '../components/Nav';
import FooterComponent from './FooterComponent';
import AuthService from '../auth/AuthService';

class ChangePasswordComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      status: null,
      token: null,
      password: '',
      repassword: '',
      isLoading: false
    };
    this.Auth = new AuthService();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    // for query parameter: const token  = this.props.location.search.substring(2)
    const { token } = this.props.match.params;
    let loggedInToken = this.Auth.getToken();
    if (token !== undefined) return this.setState({ token: token });
    else if (loggedInToken !== null) return this.setState({token: loggedInToken});
    else return this.props.history.replace('/login');
  }

  async handleSubmit(e) {
    e.preventDefault();
    let pregex = new RegExp(/^(?=.*[a-zA-Z0-9]).{6,}$/g);
    if (this.state.password !== this.state.repassword) return this.setState({ message: 'Passwords don\'t match' });
    else if (!pregex.test(this.state.password))
      return this.setState({ message: 'Password must be atleast 6 characters long.' })
    else {
      this.setState({isLoading: true, message: ''});
      try {
        let res = await this.Auth.changePassword(this.state.token, this.state.password);
        this.setState({
          message: res.message,
          status: res.status,
          isLoading: false,
          password: '',
          email: ''
        })
      } catch (e) {
        this.props.history.push({ pathname: '/error', state: { status: 500, message: 'Internal Server Error!' } })
        // alert(e);
      }
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div>
        <Nav />
        <section className="container">
          <div className="row">
            <div className="col-md-5 center background-white">
              {this.state.status === 200 ? <h3>Password has been changed <i className="fa fa-check-circle"></i></h3> : <h3>Change Password</h3>}
              {this.state.message !== '' && (
                <div role="alert" className={this.state.status === 200 ? "alert alert-success alert-dismissible" : "alert alert-danger alert-dismissible"}>
                  <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span> </button>
                  {this.state.message}
                </div>
              )}
              {this.state.isLoading && (
                <div className="col-md-12 loader-inner line-scale-pulse-out-rapid text-center m-b-15">
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                </div>
              )}
              <form className="form-transparent-grey" onSubmit={this.handleSubmit}>
                <div className="form-group m-b-5">
                  <label className="sr-only">New Password</label>
                  <input type="password" className="form-control" placeholder="New Password" id="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                </div>
                <div className="form-group m-b-5">
                  <label className="sr-only">Confirm Password</label>
                  <input type="password" className="form-control" placeholder="Confirm Password" id="repassword" name="repassword" value={this.state.repassword} onChange={this.handleChange} required />
                </div>
                <br />
                <div className="form-group">
                  <button type="submit" className="btn btn-block">Change Password</button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <FooterComponent />
      </div>
    )
  }
}

export default ChangePasswordComponent;