import React from "react";
import Nav from "../components/Nav";
import FooterComponent from "./FooterComponent";

class Mission extends React.Component {
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
                <h1>Nutech Cancer Biomarkers India-Your Trusted Healthcare Partner</h1>
                {/* end: Captions */}
              </div>
            </div>
          </div>
          {/* end: Slide 2 */}
        </div>
        {/* About us */}
        <section>
           <div className="container">
            <div className="row">
               <div className="col-md-6 col-sm-12 text-left topg">
                 <img
                  src="/images/portfolio/4.jpg"
                  style={{ width: "100%" }}
                className="ImgTop"></img>
              </div>
              {/* end features box */}
              <div className="col-md-6 col-sm-12 text-left">
                <h2 className="m-b-20 text-left">
                Our Mission
                </h2>
                <p className="lead text-left">
                  As per Census 2011, the population of males between 40 to 65 years is approximately 12-13 crores. In the recent past, Indian Council of Medical Research has observed an alarming rise in Prostate Cancer (PCa) incidence in Indian males, where in the age specific incidence further increases after the age of 60 years. Prostate gland (present under the urinary bladder) is found only in men and its uncontrolled growth gives birth to Prostate Cancer. Currently, there are no adequate monitoring or screening measures available in the country for EARLY detection of PCa. If the increased PCa incidences are not addressed urgently; it will eventually create a huge economic burden to both; the individual with PCa as well as to the healthcare system in India. The cost for prostate cancer treatments goes in lacs of rupees with no guarantee of cure. Therefore, with a strong belief that, prevention is cheaper, affordable and the cancer easily manageable if caught early; NuTech Cancer Biomarkers India Pvt. Ltd. offers an affordable PCa screening solution through SeroMark-1 testing.
                </p>
              
               <p style={{color:"#108ee9"}}><b>Our mission is to fulfil the urgent unmet need of Prostate Cancer screening, to address this unforeseen devastating health concern in males. "IT'S WORTH INVESTING IN YOURSELF"</b></p>
<p>Currently, SeroMark-1 test is the only early prostate cancer screening test, which helps the patient and his physician, take an informed decision on further interventions/treatments. </p>

              </div>
             
            </div>
          </div>
        </section>
        {/* end: About us */}
      
      
       
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

export default Mission;
