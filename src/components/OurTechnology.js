import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Nav from "../components/Nav";
import FooterComponent from "./FooterComponent";

class OurTechnology extends React.Component {
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
                <h1>Helping Clients With Advanced Patented Technology</h1>
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
                   Our Technology and Value Proposition
                  </h2>
                  <p>
                   Some of the currently available prostate screenings are invasive, need painful biopsies, entail time consuming patient’s visits, and are very expensive (cost-prohibitive). Prostate cancer will rob your valuable time, joy and money. Early and regular SeroMark-1 testing can stop that. The prostate cancer treatment for an individual can cost him lakhs of rupees! What would you pay to find out the early status and avoid or eliminate unnecessary/ uncomfortable diagnostic tests and treatment of prostate cancer? SeroMark-1 test costs only Rs. 4000, and saves lakhs from your savings, if you test when young (Age 40 onwards).
                  </p>
                </div>
              </div>
              <div className="col-sm-6">
                <img
                  src="/images/portfolio/4.jpg"
                  style={{ width: "100%" }}
                ></img>
              </div>
            </div>
            <div className="row">
              
              <h2>Disclaimers</h2>
<ul style={{textAlign:'left'}}><li>The SeroMark-1 Prostate test does not provide a diagnosis of prostate cancer.</li>
<li>	The SeroMark-1 Prostate Test does not replace the PSA.</li>
<li>	The results of the SeroMark-1 Prostate test should be interpreted in conjunction with other laboratory and clinical data available to the clinician when considering the prostate biopsy decision.</li>
<li>	A low risk matrix of SeroMark-1 Prostate result does not preclude the possibility of developing cancer in the future.</li>
<li>	The results of the SeroMark-1 test cannot be interpreted as absolute evidence of the absence or presence of prostate disease.</li>
<li>A test is not a substitute for a biopsy; it is intended to support the biopsy decision</li>
                <li>The SeroMark-1 Prostate Test is not indicated for:
                     <ol style={{liststyle:"circle"}}><li>Men with a diagnosis of prostate cancer</li>
                    <li>Prior treatment of prostate cancer</li>
                     <li>Diagnosis of prostatitis or BPH within the past 3-6 months</li>
                  </ol>            
                  
</li></ul>

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

export default OurTechnology;
