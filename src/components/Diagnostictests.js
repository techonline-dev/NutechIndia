import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Nav from "../components/Nav";
import FooterComponent from "./FooterComponent";

class Diagnostictests extends React.Component {
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
 <section >
         
          <div className="container">
          <div className="row">   
          <div className="col-sm-6">
<h2><b>Screening and Diagnostic Tests</b></h2>

<p><b>SeroMark-1 Test – SeroMark-1 test</b> is a patented technology that examines unique biomarkers in human blood (serum). If, the test is recommended by physician or self-ordered, the blood sample is withdrawn, usually from arm the and tested for biomarkers in laboratory. It is an easy test, reasonably priced and results are obtained within 3-5 working days. The SeroMark-1 prostate Test, is the only screening test for early detection of prostate cancer in "normal appearing" men and provides actionable information, that aids in the treatment/intervention decisions for men aged 40 and above. </p>

<p><b>Prostate-Specific Antigen (PSA) Test – </b>The PSA blood test is done by withdrawing blood sample usually from arm to measuring the level of PSA in the blood. PSA is a protein made only by the prostate and prostate cancers. Usually very little PSA is found in the blood of a man with a healthy prostate. A rapid rise or high levels of PSA may be a sign of some problem, but rise is not necessarily due to prostate cancer. There can be other non-cancerous reasons as well like enlargement of the prostate gland, inflammation of the prostate etc. Talk with your healthcare provider about whether the PSA test is useful for you.</p>
              </div>  
              <div className="col-sm-6">
                <img src="/images/pages/Diagnostic tests.jpg"></img>
              </div>
              <div className="col-sm-12">
               <p> <b>Digital Rectal Examination (DRE) –</b> DRE is conducted by a healthcare provider. He puts a lubricated gloved finger into the rectum and feels for an abnormal shape or thickness to the prostate. DRE is slightly uncomfortable procedure for clients but safe and easy to do. However, DRE by itself cannot detect early cancer and needs to be coupled with other above-mentioned tests.</p>

<p><b>Biopsy –</b> A biopsy is a type of minor surgery. For a prostate biopsy, small pieces of tissue are removed from the prostate gland and examined carefully under a microscope for presence of any cancer cells. This is the only way to know for sure, if you have prostate cancer.
Doctors recommend a biopsy based on PSA, SeroMark – 1 and DRE results. Your doctor will also consider your family history of prostate cancer, ethnicity, biopsy history and other health factors.</p>
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

export default Diagnostictests;
