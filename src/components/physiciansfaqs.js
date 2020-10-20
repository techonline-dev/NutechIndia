import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Nav from "../components/Nav";
import FooterComponent from "./FooterComponent";

class physiciansfaqs extends React.Component {
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
  <h1>Early Detection & Advance Treatment Can Save Lives...</h1>                {/* end: Captions */}
              </div>
            </div>
          </div>
          {/* end: Slide 2 */}
        </div>
  <section id="faqs" className="background-grey text-left">
          <div className="container">
            <div className="row team-members team-members-shadow">
              <div className="col-md-12 pad">
                <div className="section-title text-center">
                  <h2 className="m-b-20 text-center">
Frequently Asked Questions For Caregivers             </h2>
                </div>
                <div className="accordion toggle fancy radius clean">
                  <div className="ac-item ac-active">
                    <h5 className="ac-title">
                      <i className="fa fa-question-circle" />
                     Who should be recommended for SeroMark-1 test?
                    </h5>
                    <div className="ac-content">
                    <ul> <li>	People who are health conscious and concerned about their prostate health</li>
 <li>	Have a history in their family for prostate cancer</li>
	 <li>Have urination problems</li>
	 <li>Have undergone surgery (Radical Prostatectomy) </li>
	 <li>Are being monitored for micro metastasis or biochemical failure using PSA test</li>
	 <li>Are considering re-biopsy for a prior negative biopsy.</li>
	 <li>Have PSA= 4-10 ng/mL (Gray Zone). </li></ul>

                    </div>
                  </div>
                  <div className="ac-item">
                    <h5 className="ac-title">
                      <i className="fa fa-question-circle" />
                     	What are the benefits of SeroMark-1 test?
                    </h5>
                    <div style={{ display: "none" }} className="ac-content">
                     <p>SeroMark-1 test is NOT useful for patients after the cancer has already manifested. However, our pre-emptive approach exploits the use of SeroMark-1 testing to identify cancer very early. Some major benefits of SeroMark-1 test are –</p>
<ul>	<li>Identifying prostate cancer very early, even in normal appearing people,</li>
<li>	Help reduce the need for painful and repeated biopsies spurred as a result of elevated Prostate Specific </li><li>Antigen (PSA) levels that might be false positive and eliminate time consuming patient’s visits,</li>
<li>	It is reasonably priced,</li>
<li>	The test may help improve health in men and prevent deaths due to prostate cancer,</li>
<li>	Help investigate even after prostate surgery or therapy in prostate cancer positive patients, whether or not </li><li>cancer is eliminated and if not then which treatment/intervention is immediately necessary.</li></ul>

                    </div>
                  </div>
                  <div className="ac-item">
                    <h5 className="ac-title">
                      <i className="fa fa-question-circle" />
                      What is the cost of SeroMark-1 Test?
                    </h5>
                    <div style={{ display: "none" }} className="ac-content">
                   <p>  SeroMark-1 test costs Rs. 4000/test. All other tests in the world-wide markets today cost around US $500 (Rs. 35000/- to 40,000/-) and are mainly utilized for stratifying cancer aggressiveness and addressing or monitoring the best treatment options <a href="">(See comparative chart)</a>. </p>
                    </div>
                  </div>
                  <div className="ac-item">
                    <h5 className="ac-title">
                      <i className="fa fa-question-circle" />
                      How can I order SeroMark-1 test for my patient?
                    </h5>
                    <div style={{ display: "none" }} className="ac-content">
                     <p>SeroMark-1 test can be ordered from anywhere in the country through our website (nutechbiomarkersindia.com) or feel free to contact us at <a href="tel:+91 8898664466">+91 8898664466</a>, <b>Fax:</b> +91-22-2966 3990, <b>Email: </b><a href
                     ="mailto:admin@nutechbiomarkersindia.com">admin@nutechbiomarkersindia.com</a>.</p> 
                    </div>
                  </div>
                  <div className="ac-item">
                    <h5 className="ac-title">
                      <i className="fa fa-question-circle" />
                     Why shouldn’t I use just PSA test?
                    </h5>
                    <div style={{ display: "none" }} className="ac-content">
                     <p> There are chances that Prostate Specific Antigen (PSA) levels can be elevated even when cancer isn't present (known as a false positive result), and/or to be within normal levels when cancer is present (false negative). Thus, PSA tests sometimes may not be accurate enough to carry forward a treatment and it is not appropriate to solely depend on PSA tests. </p>


                    </div>
                  </div>
                  
                  <div className="ac-item">
                    <h5 className="ac-title">
                      <i className="fa fa-question-circle" />
                      	What are the benefits of getting SeroMark-1 test done at home? 
                    </h5>
                    <div style={{ display: "none" }} className="ac-content">
                    <ul>	<li><b>Phlebotomist collects a blood sample at home/place of choice in the comfort and convenience </b>and sends it directly to the NuTech laboratory overnight. A result is provided to the individual registered on NuTech website or to the ordering physician within 3-5 days upon acceptable sample receipt.</li>
<li><b>Minimize patients in the office/optimize office capacity:</b> When office space and patient appointment times are limited, the At-Home blood collection provides an actionable result that helps inform both the physician and patient to also determine intervention decisions in a virtual environment.</li>
<li>	SeroMark-1 prostate test <b>can improve confidence </b>in the decision to proceed or to defer the repeat prostate biopsy procedure.</li>
<li><b>Result interpretation</b> and support is available 5 days a week.</li></ul>

                    </div>
                  </div>
                </div>
              </div>
             
            </div>
             <a
                  href="/home/#contact"
                  target="”_blank”"
                  className="btn btn-light btn-outline btn-rounded"
                >
                  Connect with a Representative
                </a>

             <a
                  href="/home/#contact"
                  target="”_blank”"
                  className="btn btn-light btn-outline btn-rounded"
                >
                  Click to know more
                </a>
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

export default physiciansfaqs;
