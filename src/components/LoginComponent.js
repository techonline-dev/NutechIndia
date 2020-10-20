import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import FooterComponent from "./FooterComponent";
import AuthService from "../auth/AuthService";
import { ReCaptcha } from "react-recaptcha-v3";
import config from "./../config";

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      status: null,
      message: "",
      lost: false,
      isLoading: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitLostPassword = this.handleSubmitLostPassword.bind(this);
    this.lostPassword = this.lostPassword.bind(this);
    this.Auth = new AuthService();
    if (this.Auth.loggedIn()) this.props.history.replace("/dashboard");
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  lostPassword() {
    this.setState({
      lost: !this.state.lost,
      status: null,
      message: "",
      email: "",
      password: "",
      isLoading: false,
    });
  }

  async handleSubmitLostPassword(event) {
    event.preventDefault();
    this.setState({ isLoading: true, message: "" });
    try {
      let res = await this.Auth.lostPassword(this.state.email);
      return this.setState({
        message: res.message,
        status: res.status,
        isLoading: false,
        password: "",
        email: "",
      });
    } catch (e) {
      this.props.history.push({
        pathname: "/error",
        state: { status: 500, message: "Internal Server Error!" },
      });
      // alert(e);
    }
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ isLoading: true, message: "" });
    try {
      let res = await this.Auth.login(this.state.email, this.state.password);
      this.setState({
        message: res.message,
        status: res.status,
        isLoading: false,
        password: "",
        email: "",
      });
      if (res.token) this.props.history.replace("/dashboard");
    } catch (e) {
      this.props.history.push({
        pathname: "/error",
        state: { status: 500, message: "Internal Server Error!" },
      });
      // alert(e);
    }
  }
  verifyCallback = (recaptchaToken) => {
    // Here you will get the final recaptchaToken!!!
    console.log("");
  };
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

                <h1>It's Never Too Late, To Get Tested For Prostate!</h1>
                {/* end: Captions */}
              </div>
            </div>
          </div>
          {/* end: Slide 2 */}
        </div>
        <ReCaptcha
          sitekey={config.sitekey}
          action="login"
          verifyCallback={this.verifyCallback}
        />
        {this.state.lost ? (
          <section className="container">
            <div className="row">
              <div className="col-md-5 center background-white">
                {this.state.status === 200 ? (
                  <h3>
                    Verification Email Sent{" "}
                    <i className="fa fa-check-circle"></i>
                  </h3>
                ) : (
                  <h3>Forgot your Password?</h3>
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
                  onSubmit={this.handleSubmitLostPassword}
                >
                  <div className="form-group m-b-5">
                    <label className="sr-only">Email </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email registered with our website"
                      id="email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className="form-group form-inline">
                    <Link
                      onClick={this.lostPassword}
                      to="/login"
                      className="right"
                    >
                      <small>Go Back to Login</small>
                    </Link>
                  </div>
                  <br />
                  <div className="form-group">
                    <button type="submit" className="btn btn-block">
                      Recover Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        ) : (
          <section className="container">
            <div className="row">
              <div className="col-md-5 center background-white">
                <p className="m-b-5">
                  Don't have an account yet? &nbsp;{" "}
                  <Link to="/signup">
                    {" "}
                    <button type="button" className="btn btn-light btn-xs">
                      Signup
                    </button>{" "}
                  </Link>
                </p>
                <h3 style={{fontSize:"26px"}}>Login to your Account</h3>
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
                    <label className="sr-only">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      id="email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className="form-group m-b-5">
                    <label className="sr-only">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      id="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className="form-group form-inline">
                    <Link
                      onClick={this.lostPassword}
                      to="/login"
                      className="right"
                    >
                      <small>Lost your Password?</small>
                    </Link>
                  </div>
                  <br />
                  <ReCaptcha
                    sitekey={config.sitekey}
                    action="login"
                    verifyCallback={this.verifyCallback}
                  />
                  <div className="form-group">
                    <button type="submit" className="btn btn-block">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        )}
        <FooterComponent />
      </div>
    );
  }
}

export default LoginComponent;
