import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Nav from "../components/Nav";
import FooterComponent from "./FooterComponent";
import config from "./../config";
import AuthService from "./../auth/AuthService";
import { ReCaptcha } from "react-recaptcha-v3";

class HomeComponent extends React.Component {
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

       

        {/* Inspiro Slider */}
        <div
          id="slider"
          className="inspiro-slider arrows-large arrows-creative dots-creative"
          data-height-xs={360}
        >
           {/* Slide 2 */}
          <div
            className="slide background-overlay-gradient kenburns background-image"
            style={{ backgroundImage: 'url("/images/banner/2.jpg")' }}
          >
            <div className="container">
              <div className="slide-captions text-center text-light">
                {/* Captions */}
                <span className="strong">
                  <h4 className="business">
                    <span className="business">NUTECH CANCER BIOMARKERS</span>
                  </h4>
                </span>
                <h2>
                  Dedicated to investing in <br></br>your prostate health.
                </h2>
                <a
                  href="/patients/about"
                  className="btn btn-default scroll-to"
                >
                
                  Explore more
                </a>
                <a
                  type="button"
                  href="#contact"
                  className="btn btn-light scroll-to"
                >
                  Contact
                </a>
              
             
                {/* end: Captions */}
              </div>
            </div>
          </div>
          {/* end: Slide 2 */}
          {/* Slide 1 */}
          <div
            className="slide background-overlay-gradient background-image"
            style={{ backgroundImage: 'url("/images/banner/1.jpg")' }}
          >
            <div className="container">
              <div className="slide-captions text-center text-light">
                {/* Captions */}
                <span className="strong" data-caption-animation="zoom-out">
                  <h4 className="business">
                    <span className="business">NUTECH CANCER BIOMARKERS</span>
                  </h4>
                </span>
                <h2>
                  Welcome to Nutech Cancer <br></br>Biomarkers India Pvt. Ltd.
                </h2>
                <h4>Let’s invest in your prostate health</h4>
                <div data-caption-animation="zoom-out">
                 <a href="/about"  className="btn btn-rounded">
                    All about us
                  </a>
                </div>
               
                {/* end: Captions */}
              </div>
            </div>
          </div>
          {/* end: Slide 1 */}
         
        </div>
        {/*end: Inspiro Slider */}
      

        {/* Call to action */}
        <section className="text-center">
          <div className="container-fulid">
            <div className="row">
              <h2 className="m-b-20 text-center">
                We’re Just Getting Started! <br></br>Explore the
                possibilities...
              </h2>
              <div className="col-md-15 col-sm-3">
                <div className="serviceBox">
                  <img src="images/icons/icon.png"></img>

                  <h1>
                    Assess your<br></br> risk
                  </h1>
                </div>
              </div>
               <div className="col-md-15 col-sm-3">
                <div className="serviceBox">
                  <img src="images/icons/first blood.png"></img>

                  <h1>
                    blood test <br></br>using patented technology
                  </h1>
                </div>
              </div>
              <div className="col-md-15 col-sm-3">
                <div className="serviceBox">
                  <img src="images/icons/home service.png"></img>
                  <h1>
                    {" "}
                    At home <br></br>service
                  </h1>
                </div>
              </div>
               <div className="col-md-15 col-sm-2">
                <div className="serviceBox">
                  <img src="images/icons/prostate cancer.png"></img>

                  <h1>
                    Early Detection of<br></br>prostate cancer
                  </h1>
                </div>
              </div>
             
 
              <div className="col-md-15 col-sm-3">
                <div className="serviceBox">
                  <img src="images/icons/eliminate cost.png"></img>
                  <h1>
                    {" "}
                    Eliminate costly <br></br>cancer treatment
                  </h1>
                </div>
              </div>
             
             
            </div>
          </div>
        </section>
        {/*float*/}
        <div className="float-button">
          <a href="/physicians/seromarktest"><button
            data-toggle="modal"
            data-target=".your-modal"
            className="float-right"
          >
            seromark-1
          </button></a>
          <br></br>
          <br></br>{" "}
         <a href="home#contact"> <button
            data-toggle="modal"
            data-target=".your-modal"
            className="float-right"
          >
            Contact Us
          </button></a>
        </div>
        {/*endfloat */}
        {/*end usps*/}
        {/*booking*/}
        <section id="services" className="background-grey p-t-40 p-b-40">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-title text-center">
                  <h2>Our Popular Tests</h2>
                  <p className="lead">
                    These are the Most Popular Tests at{" "}
                    <b>NUTECH CANCER BIOMARKERS</b> <br></br>
                    However, you will get more options when you register.
                  </p>
                </div>
              </div>
            </div>
            <br></br>
          </div>

          <div className="row">
            <div className="pricing-table full-width">
              {config.services.map((item, index) => {
                return (
                  <div key={index} className="col-md-2 col-sm-12 col-xs-12">
                    <div
                      className={
                        index === Math.ceil(config.services.length / 2) - 1
                          ? "plan featured"
                          : "plan"
                      }
                    >
                      <div className="plan-header">
                        <h4>{item.testName}</h4>
                        <div className="plan-price">
                          <sup>₹</sup>
                          {item.testAmount}
                        </div>
                        <p className="text-muted">{item.description}</p>
                      </div>
                      <div className="plan-list">
                        <ul>
                          {item.points.map((point, id) => {
                            return (
                              <li key={id}>
                                {id === 3 ? (
                                  <span className="label label-default">
                                    NEW
                                  </span>
                                ) : (
                                  <i className="fa fa-check" />
                                )}
                                {point}
                              </li>
                            );
                          })}
                        </ul>
                        <div className="plan-button">
                          <Link to="/book" className="btn">
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/*End Booking*/}

        {/* Services */}
        <section
          id="facts"
          className="parallax background-overlay-dark p-t-100 p-b-100"
          data-stellar-background-ratio="0.7"
        >
          <div className="container xs-text-center sm-text-center text-light text-left">
            <div className="row">
              <div className="col-md-8 p-b-60">
                <h2 className="m-b-20">
                  A Company helping Physicians Who Care
                </h2>
                <p className="lead" style={{textTransform:'none'}}>
                  A self-ordered test via phone or web-site is also available to
                  the following: Physicians/doctors, Government and Corporate
                  supported healthcare for financially underprivileged,
                  servicemen, volunteers, public servants e.t.c, Blood
                  collection centers, Health camps, Hospitals, Private
                  healthcare providers, Large companies providing healthcare
                  packages and health insurance companies.
                </p>
                <p className="lead" style={{textTransform:'none'}}>
                  Not only will NUTECH's SeroMark-1 test help you and your
                  doctors work together to address your existing prostate
                  condition early, they will also strive to help you improve
                  your quality of life, achieve your wellness goals, and heal
                  your body to live your best life possible.{" "}
                </p>
                <a
                  href="http://www.freepatentsonline.com/9903878.html"
                  target="”_blank”"
                  className="btn btn-light btn-outline btn-rounded"
                >
                  Patent
                </a>
              </div>
              <div className="col-md-4">
                <div className="col-md-12">
                  <div className="text-center">
                    <div className="counter text-large">
                      {" "}
                      <span
                        data-speed={4000}
                        data-refresh-interval={30}
                        data-to={1}
                        data-from={0}
                        data-seperator="true"
                      />{" "}
                    </div>
                    <div className="seperator seperator-small" />
                    <p>YEAR</p>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="text-center">
                    <div className="counter text-large">
                      {" "}
                      <span
                        data-speed={4550}
                        data-refresh-interval={30}
                        data-to={254}
                        data-from={100}
                        data-seperator="true"
                      />{" "}
                    </div>
                    <div className="seperator seperator-small" />
                    <p>LIVES SAVED</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Start Ayurvedic 
        <section id="ayurvedic">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6 text-left">
                <iframe
                  width="620"
                  height="500"
                  src="https://www.youtube.com/embed/v6F-GWGKWQw"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="col-md-6 col-sm-6 text-left">
                <h2 className="text-left">
                  Ayurvedic treatment by Dr. Swathi Giri
                </h2>
                <h3 className="m-b-20 text-left">
                  Ayurvedic treatment can stop further spread of prostate
                  cancer.
                </h3>
                <p className="lead text-left">
                  Dr. Swathi Giri is one of the celebrated Ayurvedic physicians
                  in India, and practiced Ayurvedic medicine for several years.
                  Dr. Swathi's clinic was established in 2001, and since then,
                  she has drawn scores of patients, including cancer patients.
                  She is proficient in identifying, diagnosing (nadi pariksha)
                  various health issues and treating them successfully by
                  Ayurved.
                </p>
                <p className="lead text-left">
                  Dr. Giri is an expert in identifying diverse set of health
                  ailments and conditions including cancers and can treat them
                  early. Particularly, if detected early, via available tests
                  such as{" "}
                  <Link to="/book">
                    <u>SeroMark-1</u>
                  </Link>
                  , her expertise in Ayurvedic treatment can stop further spread
                  of prostate cancer.
                </p>
                <p className="lead text-left">
                  Dr. Giri’s clinic is located in Manish Nagar, Nagpur,
                  Maharashtra - 440015. Please visit website:{" "}
                  <a
                    href="http://drswathi.in"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <u>www.drswathi.in</u>
                  </a>{" "}
                  for more information.
                </p>

                <div data-caption-animation="zoom-out">
                  <a
                    href="http://drswathi.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark btn-outline btn-rounded"
                  >
                    Website
                  </a>
                  <button
                    href="#modalYoutube3"
                    data-lightbox="inline"
                    className="btn btn-rounded"
                  >
                    <i className="fa fa-play" /> Video
                  </button>
                </div>
                <div
                  id="modalYoutube3"
                  className="modal"
                  data-delay={3000}
                  style={{ maxWidth: "700px", minHeight: "380px" }}
                >
                  <h5>A few words from Dr. Swathi Giri</h5>
                  <div className="iframe-wrSwathi Giriap m-b-20">
                    <iframe
                      title="youtubetitle"
                      id="youtube"
                      width={560}
                      height={315}
                      src="https://www.youtube.com/embed/v6F-GWGKWQw?loop=1&playlist=v6F-GWGKWQw"
                      frameBorder={0}
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
              {/* end features box 
            </div>
          </div>
        </section>
        {/* end: Call to action */}
       
        {/* Contact */}
        <section id="contact" className="p-t-80 p-b-80 contactback">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                {/* Start: Post item*/}

                <div className="post-item quote">
                  <div className="post-item-wrap">
                    <div className="post-quote-img">
                      
                      <Link to="/">
                        <span className="post-meta-category">Our Locations:</span>
                      </Link>
                    </div>
                    <div className="post-item-description">
                     <h2 className="contactheading"><br></br>
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
        {/* end: Wrapper */}
        {/* Go to top button */}
        <a href="#home" id="goToTop">
          <i className="fa fa-angle-up top-icon" />
          <i className="fa fa-angle-up" />
        </a>
      </div>
    );
  }
}

export default HomeComponent;
