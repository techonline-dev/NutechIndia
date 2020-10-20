import React from "react";
import Nav from "../components/Nav";
import FooterComponent from "./FooterComponent";

class AboutComponent extends React.Component {
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
              <div className="col-md-6 col-sm-12 text-left">
                <h2 className="m-b-20 text-left">
                 About  Nutech Cancer Biomarkers India
                </h2>
                <p className="lead text-left">
                  NuTech Cancer Biomarkers India Private Limited (NuTech) is a start-up established in 2017, recognised by the Department of Industrial Policy and Promotion, Government of India. The company is located in Mumbai, Maharashtra. It is first of its kind in India, developing a pipeline of services for blood/serum-based biomarker analysis, for cancers (including prostate cancer) to improve human health specifically addressing PCa. The Company's lead test for SeroMark-1 (patent-US9903878B2) is a lipid biomarker that can predict the presence or absence of prostate cancer in normal appearing men.
                </p>
                <h2>NuTech offers</h2>
                <ul>	<li><b>First in India, Cheapest test in the market </b>and the only early prostate cancer detection biomarker</li>
<li><b>Woman-ownership</b> (50% ownership by Mrs. Kalpana Patel Kelavkar),</li>
<li><b>Largest share in the untapped prostate cancer market </b>in India,</li>
<li><b>Compliance</b>under 9 environmental & Labour laws,</li>
<li><b>Fully-functioning service-based business,</b></li>
<li>Use of <b>self-patented technology,</b></li>
<li>Leveraging other businesses by outsourcing some of its operations (for e.g., human resources, blood collection),</li>
<li><b>No acquisition of any outside assets </b>(purchase of building etc.).  <b>Focuses</b> on developing its own new <b>in-house projects</b> (for e.g., MethMark-1 test-in progress),</li>
<li>	<b>Interest in SeroMark-1 licensing </b>that will secure strategic alliances, partnerships, and licensing deals, and</li>
<li><b>New standard of care for prostate health </b>care management in India.</li>
</ul>
              </div>
              <div className="col-md-6 col-sm-12 text-left topg">
                 <img
                  src="/images/portfolio/about.jpg"
                  style={{ width: "100%" }}
                className="ImgTop"></img>
              </div>
              {/* end features box */}
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

export default AboutComponent;
