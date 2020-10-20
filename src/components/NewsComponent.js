import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Nav from "../components/Nav";
import FooterComponent from "./FooterComponent";

class NewsComponent extends React.Component {
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
                <h1>Fight Prostate Cancer... With New Hope!</h1>
              </div>
            </div>
          </div>
          {/* end: Slide 2 */}
        </div>

       {/* Our News */}
        <section className="background-grey">
          <div className="container">
            <div className="section-title text-center m-b-20">
              <h2>Know More...</h2>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3">
                  <div className="news">
                    <img
                      src="https://www.exosomedx.com/sites/default/files/styles/crop_350x220/public/2019-12/AdobeStock_136718370.jpeg?itok=KENd9xcs"
                      className="img-responsive"
                    ></img>
                  
                    <h5>
                      <a href="https://www.youtube.com/watch?v=ZUSkWb5QP8A&feature=share&ab_channel=ProstateCancerResearchInstitute" target="_blank">
                      What is a normal PSA finding ? 
                      </a>
                    </h5>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="news">
                    <img
                      src="images/news/Cheeky prostate cancer ad looking to raise awareness.png"
                      className="img-responsive"
                    ></img>
                    
                    <h5>
                      <a href="https://www.youtube.com/watch?v=RitPsVQPlz8&feature=share&ab_channel=CityNewsToronto" target="_blank">
                       ‘Cheeky’ prostate cancer ad to raise awareness
                      </a>
                    </h5>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="news">
                    <img
                      src="images/news/Prostate Cancer Animation.png"
                      className="img-responsive"
                    ></img>
                    
                    <h5>
                      <a href="https://www.youtube.com/watch?v=zg3j5Ig4dJY&feature=share&ab_channel=Johnson%26Johnson" target="_blank">
                      About Prostate Cancer

                      </a>
                    </h5>
                  </div>
                </div>
                <div className="col-md-3">
                  {" "}
                  <div className="news">
                    <img
                      src="images/news/Dr Uday Bhaskar  Prostate Cancer  Manipal Hospitals India.png"
                      className="img-responsive"
                    ></img>
                    <h5>
                      <a href="https://www.youtube.com/watch?v=yDj0pXTC2fc&feature=share&ab_channel=ManipalHospitals" target="_blank">
                        Dr. Uday Bhaskar | Prostate Cancer | Manipal Hospitals India

                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 p-t-40 p-b-80">
              <div className="row">
                <div className="col-md-3">
                  <div className="news">
                    <img
                      src="images/news/Dr P N Dogra on Prostate Cancer.png"
                      className="img-responsive"
                    ></img>
                    <h5>
                      <a href="https://www.youtube.com/watch?v=6O6R6HciUBU&feature=share" target="_blank">
                       Prostate Cancer | Dr. P N Dogra 

                      </a>
                    </h5>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="news">
                    <img
                      src="images/news/About Prostate Cancer (Hindi).png"
                      className="img-responsive"
                    ></img>
                    <h5>
                      <a href="https://www.youtube.com/watch?v=2TYOAGt0qac&ab_channel=DharamshilaNarayanaSuperspecialityHospital" target="_blank">
                      Prostate Cancer (Hindi)| Dr. Anshuman Kumar | Dharamshila Hospital

                      </a>
                    </h5>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="news">
                    <img
                      src="images/news/Prostate cancer (in hindi) prostate cancer treatment.png"
                      className="img-responsive"
                    ></img>
                   
                    <h5>
                      <a href="https://www.youtube.com/watch?v=LveW9-YtXYo&feature=share" target="_blank">
                     Information an cancer (in Hindi)
                      </a>
                    </h5>
                  </div>
                </div>
                <div className="col-md-3">
                  {" "}
                  <div className="news">
                    <img
                      src="images/news/Prostate Cancer-Cause.png"
                      className="img-responsive"
                    ></img>
                    <h5>
                      <a href="https://www.youtube.com/watch?v=ttO_kfy498c&feature=share" target="_blank">
                      Prostate Cancer awareness | Dr. Manisha Singh | Mahavir Cancer Institute 

                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end: Our News */}

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

export default NewsComponent;
