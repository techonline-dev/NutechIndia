import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Nav from "../components/Nav";
import FooterComponent from "./FooterComponent";

class About extends React.Component {
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
              <div className="col-md-6 col-sm-12 text-left">
                <h2 className="m-b-20 text-left">
                 About Prostate Cancer
                </h2>
                <p className="lead text-left">
                 Cancer begins when healthy cells in the prostate grow out of control and forms a tumor. A tumor can be cancerous or benign. Cancerous tumor can grow and spread to other parts of the body and is called malignant. A benign tumor means the tumor can grow but will not spread. Prostate cancer is a malignant growth in the prostate gland. </p>
  <p className="lead text-left">
Among males, prostate cancer is now the third leading cancer site in India (followed by lung and oesophageal cancer) . In its 2016 projection, the Indian Council of Medical Research (ICMR) estimated the total number of new cancer cases in India is expected to be approximately 14.5 lakh (1.4 million), out of which 50,000 (0.05 million) new cases are of prostate cancer alone, and the figure is likely to reach 60,000 (0.06 million) from the nearly 17.3 lakh (1.7 million) additional new cases estimated in 2020.</p>
<p className="lead text-left">
In some cases, prostate growth is very slow that and might not show any serious health concerns. Whereas, in some, it might cause aggressive illness needing immediate treatment and can quickly spread to other organs or bones. To know the stage and grade of cancer (if available), a few tests are suggested, which helps your urologist decide on your treatment requirement. 


                </p>
               
              </div>
              <div className="col-md-6 col-sm-12 text-left topg">
                 <img
                  src="/images/pages/About Prostate Cancer.jpg"
                  style={{ width: "100%" }}
               ></img>
              </div>
              {/* end features box */}
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

export default About;
