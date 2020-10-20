import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Nav from "../components/Nav";
import FooterComponent from "./FooterComponent";

class Symptoms extends React.Component {
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
                 Symptoms
                </h2>
               
              <p>Usually in early stages, prostate cancer often has no symptoms. When symptoms occur, they can be like those of an enlarged prostate or BPH. If you face any of these symptoms, please consult your healthcare provider about them. Symptoms of prostate cancer can be:</p>
<ul><li>	Dull pain in the lower pelvic area</li>
<li>	Frequent urinating</li>
<li>	Trouble urinating, pain, burning, or weak urine flow</li>
<li>Blood in the urine (Hematuria) </li>
<li>	Painful ejaculation</li>
<li>Pain in the lower back, hips or upper thighs</li>
<li>Loss of appetite</li>
<li>Loss of weight</li>
                <li>Bone pain</li></ul>


        
              </div>
              <div className="col-md-6 col-sm-12 text-left">
                 <img
                  src="/images/pages/Symptoms.jpg"
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

export default Symptoms;
