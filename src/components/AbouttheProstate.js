import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Nav from "./Nav";
import FooterComponent from "./FooterComponent";

class AbouttheProstate extends React.Component {
  componentDidMount() {
    window.updateUIAfterReact();
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
                <h1>The Best Protection is Early Detection!</h1>
                {/* end: Captions */}
              </div>
            </div>
          </div>
          {/* end: Slide 2 */}
        </div>
<section
          style={{
            background:
              "url(https://www.exosomedx.com/sites/default/files/2019-12/exosomeMuted900.jpg)",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="slide-captions text-left">
                  <h2>
                    {" "}
                  About the Prostate
                  </h2>
                    <p>
Prostate gland is a little walnut shaped gland, situated in men’s pelvis beneath the bladder. The major function of prostate gland is to produce seminal fluid, the liquid in semen that protects, supports and helps transport sperm.
</p>
                </div>
              </div>
              <div className="col-sm-6">
                <img
                  src="/images/pages/About the Prostatec3.jpg"
                  style={{ width: "100%",}}
                ></img>
              </div>
            </div>
          </div>
        </section>
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

export default AbouttheProstate;
