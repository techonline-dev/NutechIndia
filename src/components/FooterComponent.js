import React from "react";
import { HashLink as Link } from "react-router-hash-link";

class FooterComponent extends React.Component {
  render() {
    return (
      <footer id="footer" className="footer-light">
        <div className="footer-content p-b-0 p-t-30">
          <div className="container">
            <div className="row text-left">
              <div className="col-md-3">
                {/* Footer widget area 1 */}
                <div
                  className="widget clearfix widget-contact-us"
                  style={{
                    backgroundImage: 'url("images/world-map-dark.png")',
                    backgroundPosition: "50% 20px",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <h4>NUTECH CANCER BIOMARKERS</h4>
                  <ul className="list-icon">
                    <li>
                      <i className="fa fa-map-marker" /> Office#4, Green Meadows
                      5F,
                      <br /> Lokhandwala Township,
                      <br /> Kandivali (E), Mumbai-400101
                    </li>
                    <li>
                      <i className="fa fa-phone" /> +91 88986-64466
                    </li>
                    <li>
                      <i className="fa fa-fax" />
                      +91-22-2966 3990
                    </li>
                    <li>
                      <i className="fa fa-envelope" />{" "}
                      <a href="mailto:admin@nutechbiomarkersindia.com">
                        admin@nutechbiomarkersindia.com
                      </a>
                    </li>
                    {/*  <li>
                      <br />
                      <i className="fa fa-clock-o" />
                      Monday - Friday: <strong>09:00 - 17:00</strong>
                      <br />
                      Saturday - Sunday: <strong>Closed</strong>
                  </li>*/}
                  </ul>
                  {/* Social icons */}
                  <div className="social-icons social-icons-border float-left m-t-20">
                    <ul>
                      <li className="social-facebook">
                        <a
                          href="https://www.facebook.com/nutechbiomarkers/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li className="social-youtube">
                        <a
                          href="https://www.youtube.com/user/kelavkar"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-youtube" />
                        </a>
                      </li>
                      <li className="social-linkedin">
                        <a
                          href="https://www.linkedin.com/company/nutechcancerbiomarkers/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* end: Social icons */}
                </div>
                {/* end: Footer widget area 1 */}
              </div>
              <div className="col-md-3">
                {/* Footer widget area 2 */}
                <div className="widget">
                  <h4 style={{paddingLeft:"50px"}}>Our Company</h4>
                  <ul className="list-icon list-icon-arrow"  style={{paddingLeft:"50px"}}>
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>
                      <Link to="/mission">Mission</Link>
                    </li>

                  

                    <li>
                      <Link to="/team">Our team
</Link>
                    </li>
                   
                  </ul>
                </div>
                {/* end: Footer widget area 2 */}
              </div>
              <div className="col-md-3">
                {/* Footer widget area 3 */}
                <div className="widget">
                  <h4> Caregivers</h4>
                  <ul className="list-icon list-icon-arrow">
                    <li>
                      <Link to="/physicians/seromarktest">SeroMark-1 test</Link>
                    </li>
                    <li>
                      <Link to="/psa-test">PSA test</Link>
                    </li>
                    <li>
                      <Link to="/totalpsa">Limitations of PSA test</Link>
                    </li>

                    <li>
                      <Link to="/physicians/faqs">FAQs by caregivers</Link>
                    </li>
                  </ul>
                </div>
                {/* end: Footer widget area 3 */}
              </div>
              <div className="col-md-3">
                {/* Footer widget area 4 */}
                <div className="widget">
                  <h4>Patients</h4>
                  <ul className="list-icon list-icon-arrow">
                    <li>
                      <Link to="/AbouttheProstate">About the Prostate</Link>
                    </li>
                    <li>
                      <Link to="/symptoms">Symptoms</Link>
                    </li>
                    <li>
                      <Link to="/patients/about">
                         Prostate Cancer
                      </Link>
                    </li>
                    <li>
                      <Link to="/diagnostictests">Diagnostic tests</Link>
                    </li>
                     <li>
                      <Link to="/patients/faqs">FAQs by patients
</Link>
                    </li>
                  </ul>
                </div>
                {/* end: Footer widget area 4 */}
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-content p-b-20 p-t-20">
          <div className="container">
            <div className="col-md-9">
              <div className="copyright-text text-center">
                <i className="fa fa-copyright"></i> {new Date().getFullYear()}
                &nbsp;NUTECH CANCER BIOMARKERS INDIA PRIVATE LIMITED.
              </div>
            </div>
            <div className="col-md-3">
              {" "}
              <img src="images/payment.png" className="payment"></img>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default FooterComponent;
