import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Nav from "../components/Nav";
import FooterComponent from "./FooterComponent";
import config from "./../config";
import AuthService from "./../auth/AuthService";
import { ReCaptcha } from "react-recaptcha-v3";
class Contact extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      name: "",
      contact: "",
      email: "",
      comment: "",
      status: null,
      message: "",
      isLoadingSubmit: false,
      checkBoxMsg1: false,
      checkBoxMsg2: false,
      checkBoxMsg3: false,
      checkBoxMsg4: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.Auth = new AuthService();
  }
  verifyCallback = (recaptchaToken) => {
    // Here you will get the final recaptchaToken!!!
    console.log("");
  };
  componentDidMount() {
    window.updateUIAfterReact();
  }

  handleCheckbox(arg, event) {
    if (arg === "a") this.setState({ checkBoxMsg1: !this.state.checkBoxMsg1 });
    else if (arg === "b")
      this.setState({ checkBoxMsg2: !this.state.checkBoxMsg2 });
    else if (arg === "c")
      this.setState({ checkBoxMsg3: !this.state.checkBoxMsg3 });
    else if (arg === "d")
      this.setState({ checkBoxMsg4: !this.state.checkBoxMsg4 });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({
      isLoadingSubmit: true,
      message: "",
    });
    try {
      let message = "";
      if (this.state.checkBoxMsg1)
        message =
          message +
          "Checkbox1: I am a family or specialist doctor and I would like to offer the Seromark1®-Prostate Cancer Screening test to my patients \n\n";
      if (this.state.checkBoxMsg2)
        message =
          message +
          "Checkbox2: I would like to become an independent provider / distributor of the Seromark1®-Prostate Cancer Screening test outside the US(In India) \n\n";
      if (this.state.checkBoxMsg3)
        message =
          message +
          "Checkbox3: I am a patient interested in the Seromark1®-Prostate Cancer Screening test \n\n";
      if (this.state.checkBoxMsg4)
        message =
          message +
          "Checkbox4: I would like to join the mailing list and be kept informed about Seromark1®-Prostate Cancer Screening and Nutech Cancer Biomarkers. \n\n";
      message = message + "Custom Message: " + this.state.comment;
      let res = await this.Auth.contactUs(
        this.state.name,
        this.state.email,
        this.state.contact,
        message
      );
      if (res.status === 200) {
        return this.setState({
          isLoadingSubmit: false,
          name: "",
          contact: "",
          email: "",
          comment: "",
          status: res.status,
          message: res.message,
        });
      }
      return this.setState({
        isLoadingSubmit: false,
        name: "",
        contact: "",
        email: "",
        comment: "",
        status: 400,
        message: "Something went wrong! please try again after some time.",
      });
    } catch (e) {
      this.props.history.push({
        pathname: "/error",
        state: { status: 500, message: "Internal Server Error!" },
      });
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
                <h1>Contact Us</h1>
                {/* end: Captions */}
              </div>
            </div>
          </div>
          {/* end: Slide 2 */}
        </div>
        {/* About us */}
      {/* Contact */}
        <section id="contact" className="p-t-80 p-b-80 contactback">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                {/* Start: Post item*/}

                <div className="post-item quote">
                  <div className="post-item-wrap">
                    <div className="post-quote-img">
                    
                      <Link to="/blog">
                        <span className="post-meta-category">Our Locations:</span>
                      </Link>
                    </div>
                    <div className="post-item-description">
                     
                      <h2 className="contactheading">
                       NuTech Cancer Biomarkers India Pvt. Ltd. Is based out of Mumbai, Maharashtra.
                      </h2>
                      <p>
                                            <b>Headquarters:</b><br></br>
                                            Office#4, Green Meadows 5F,<br></br>
Lokhandwala Township,<br></br>
Kandivali (E), Mumbai-400101<br></br>
Phone: <a href="tel:+91 8898664466">+91 8898664466</a><br></br>
Fax: +912229663990<br></br>
Email: <a href="mailto:admin@nutechbiomarkersindia.com">admin@nutechbiomarkersindia.com</a>

                      </p>
                     
                    </div>
                  </div>
                </div>
                {/* end: Post item*/}
              </div>
              <div className="col-md-7 text-left">
                <h2 className="textcolor">Drop us a line!</h2>
                <form
                  className="form-transparent-grey"
                  onSubmit={this.handleSubmit}
                >
                  <div className="row">
                    <div className="form-group col-sm-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Enter your Name"
                        value={this.state.name}
                        onChange={(e) => this.handleChange(e)}
                        required
                      />
                    </div>
                    <div className="form-group col-sm-6">
                      <input
                        type="tel"
                        pattern="[0-9]{10}"
                        name="contact"
                        className="form-control"
                        placeholder="Phone No. (10 digits)"
                        value={this.state.contact}
                        onChange={(e) => this.handleChange(e)}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter your Email"
                      value={this.state.email}
                      onChange={(e) => this.handleChange(e)}
                      required
                    />
                  </div>
                  <div className="form-group m-b-0">
                    <div className="checkbox">
                      <label>
                        <input
                          type="checkbox"
                          checked={this.state.checkBoxMsg1}
                          onChange={(event) => this.handleCheckbox("a", event)}
                        />
                        I am a family or specialist doctor and I would like to
                        offer the Seromark1®-Prostate Cancer Screening test to
                        my patients
                      </label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input
                          type="checkbox"
                          checked={this.state.checkBoxMsg2}
                          onChange={(event) => this.handleCheckbox("b", event)}
                        />
                        I would like to become an independent provider /
                        distributor of the Seromark1®-Prostate Cancer Screening
                        test outside the US(In India)
                      </label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input
                          type="checkbox"
                          checked={this.state.checkBoxMsg3}
                          onChange={(event) => this.handleCheckbox("c", event)}
                        />
                        I am a patient interested in the Seromark1®-Prostate
                        Cancer Screening test
                      </label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input
                          type="checkbox"
                          checked={this.state.checkBoxMsg4}
                          onChange={(event) => this.handleCheckbox("d", event)}
                        />
                        I would like to join the mailing list and be kept
                        informed about Seromark1®-Prostate Cancer Screening and
                        Nutech Cancer Biomarkers.
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      type="text"
                      name="comment"
                      rows={4}
                      className="form-control required"
                      placeholder="Enter your Message"
                      value={this.state.comment}
                      onChange={(e) => this.handleChange(e)}
                      required
                    />
                  </div>
                  <ReCaptcha
                    sitekey={config.sitekey}
                    action="login"
                    verifyCallback={this.verifyCallback}
                  />
                  <div className="row">
                    <div className="form-group col-sm-6">
                      <button className="btn btn-light" type="submit">
                        <i className="fa fa-paper-plane" />
                        &nbsp;Send message
                      </button>
                    </div>
                    {this.state.isLoadingSubmit && (
                      <div className="text-center row loader-inner line-scale-pulse-out-rapid">
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                      </div>
                    )}
                  </div>
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
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* end: Contact */}

       
        {/* Footer */}
        <FooterComponent />
        {/* end: Footer */}
        <a href="foo" id="goToTop">
          <i className="fa fa-angle-up top-icon" />
          <i className="fa fa-angle-up" />
        </a>
        {/*Plugins*/}
        {/*Template functions*/}
      </div>
    );
  }
}

export default Contact;
