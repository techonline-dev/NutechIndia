import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Nav from "../components/Nav";
import FooterComponent from "./FooterComponent";

class seromarktest extends React.Component {
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
                   SeroMark-1 Test
                  </h2>
                  <p>
                   The SeroMark-1 Prostate Test, is a simple, reasonably priced and the only screening test for early detection of prostate cancer in "normal appearing" men. SeroMark-1 test results provides actionable information, that aids treatment decisions for both; caregivers as well as men aged 40 and above. <br></br>
SeroMark-1 test is a patented technology (<a href="https://www.freepatentsonline.com/9903878.pdf" target="new" style={{color:"blue"}}>See Patent</a>), that examines concentrations of specific phospholipids in human blood (serum). Phospholipids are a subclass of a large and diverse group of organic compounds called lipids, which are building blocks of cellular membranes. <br></br><br></br>
<b>Clinical utility and Validation of data:</b> The SeroMark-1 Prostate Test was studied in a real-world clinical setting that included expert urologists, and more than 1,000 patients from India. The study is the first-ever retrospective, randomized prostate biomarker trial with a blinded control arm conducted in a clinical utility setting.

                  </p>
                </div>
              </div>
              <div className="col-sm-6">
                <img
                  src="/images/pages/seromark-1.jpg"
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

export default seromarktest;
