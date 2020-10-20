import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import FooterComponent from "./FooterComponent";
import AuthService from "../auth/AuthService";
import { ReCaptcha } from "react-recaptcha-v3";
import config from "./../config";

class SignupComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      password: "",
      repassword: "",
      message: "",
      status: null,
      isLoading: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.Auth = new AuthService();
    if (this.Auth.loggedIn()) this.props.history.replace("/dashboard");
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  verifyCallback = (recaptchaToken) => {
    // Here you will get the final recaptchaToken!!!
    console.log("hello");
  };
  async handleSubmit(e) {
    e.preventDefault();
    this.setState({ isLoading: true, message: "" });
    // new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^)(_])[A-Za-z\d@$!%*?&#^)(_]{8,}$/g);
    // for atleast 8, 1 upper, 1 lower, 1 number, 1 special
    let pregex = new RegExp(/^(?=.*[a-zA-Z0-9]).{6,}$/g);
    if (this.state.password !== this.state.repassword)
      return this.setState({
        message: "Passwords don't match",
        isLoading: false,
      });
    else if (!pregex.test(this.state.password))
      return this.setState({
        message: "Password must be atleast 6 characters long.",
        isLoading: false,
      });
    else {
      try {
        let res = await this.Auth.signup(
          this.state.fullName,
          this.state.email,
          this.state.password
        );
        if (res.status === 200)
          return this.setState({
            message: res.message,
            status: res.status,
            isLoading: false,
            fullName: "",
            email: "",
            password: "",
            repassword: "",
          });

        return this.setState({
          message: res.message,
          isLoading: false,
        });
      } catch (e) {
        this.props.history.push({
          pathname: "/error",
          state: { status: 500, message: "Internal Server Error!" },
        });
        // alert(e);
      }
    }
  }
  render() {
    return (
      <div>
        <Nav />
        <div
          className="breadcrumbs"
          style={{
            background:
              "url(https://www.exosomedx.com/sites/default/files/2019-12/EoxosomeDkBlue72.jpg)",
          }}
        >
          {/* Slide 2 */}
          <div className="slide">
            <div className="container">
              <div className="slide-captions text-left text-light">
                {/* Captions */}

                <h1>Signup for NUTECH</h1>
                {/* end: Captions */}
              </div>
            </div>
          </div>
          {/* end: Slide 2 */}
        </div>
        <section className="container">
          <div className="row">
            <div className="col-md-5 center background-white">
              {this.state.status === 200 ? (
                <h3>
                  Verification Email Sent <i className="fa fa-check-circle"></i>
                </h3>
              ) : (
                <h3>Signup for NUTECH</h3>
              )}
              {this.state.message !== "" && (
                <div
                  role="alert"
                  className={
                    this.state.status === 200
                      ? "alert alert-success alert-dismissible"
                      : "alert alert-danger alert-dismissible"
                  }
                >
                  <button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>{" "}
                  </button>
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
              <form
                className="form-transparent-grey"
                onSubmit={this.handleSubmit}
              >
                <div className="form-group">
                  <label className="sr-only">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                    name="fullName"
                    value={this.state.fullName}
                    onChange={(e) => this.handleChange(e)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="sr-only">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    value={this.state.email}
                    onChange={(e) => this.handleChange(e)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="sr-only">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={(e) => this.handleChange(e)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="sr-only">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                    name="repassword"
                    value={this.state.repassword}
                    onChange={(e) => this.handleChange(e)}
                    required
                  />
                </div>
                <ReCaptcha
                  sitekey={config.sitekey}
                  action="signup"
                  verifyCallback={this.verifyCallback}
                />
                <div className="form-group">
                  {!this.state.isLoading && (
                    <button type="submit" className="btn btn-block">
                      Signup
                    </button>
                  )}
                </div>
              </form>
              <p className="small">
                Already have an account? &nbsp;{" "}
                <Link to="/login">
                  {" "}
                  <button type="button" className="btn btn-light btn-xs">
                    Login
                  </button>{" "}
                </Link>
              </p>
            </div>
          </div>
        </section>
        <FooterComponent />
      </div>
    );
  }
}

export default SignupComponent;
