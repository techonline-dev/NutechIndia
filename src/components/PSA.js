import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Nav from "./Nav";
import FooterComponent from "./FooterComponent";

class PSA extends React.Component {
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
                  <h1>Early Detection & Advance Treatment Can Save Lives...</h1>
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
                   PSA Test
                  </h2>
                  <p>
                  Prostate-specific antigen or PSA, is an enzyme mainly produced in prostate gland and released into the semen of a man. It binds to proteins in semen and breaks them down making the semen more liquid. During ejaculation, some PSA passes into the bloodstream through the rich blood supply of the prostate. In blood, PSA can be found in two forms: free PSA, where it hasn’t bound to any proteins and bound PSA, where it has bound to proteins.<br></br>
<h3>Therefore, PSA can be measured as:</h3>
<ul><li><b>A free PSA test</b>	 that measures only the unbound PSA in the blood and</li>
<li>	<b>A total PSA test</b> that measures both bound and free PSA in the blood.</li></ul>

                  </p>
                </div>
              </div>
              <div className="col-sm-6">
                <img
                  src="/images/pages/PSA test.jpg"
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

export default PSA;
