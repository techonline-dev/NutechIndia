import React from "react";
import Nav from "../components/Nav";
import FooterComponent from "./FooterComponent";

class team extends React.Component {
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
                <h1>Our Core Team</h1>
                {/* end: Captions */}
              </div>
            </div>
          </div>
          {/* end: Slide 2 */}
        </div>
        {/* About us */}
     
        {/* end: About us */}
        <section style={{ padding: "50px" }}>
          <div className="row">
            <div className="section-title text-center">
              <h2 className="m-b-20 text-center">
               Our Team
              </h2>
              <p className="lead">
               We are proud to introduce our team of professionals, having years of experience, full of enthusiasm, passion and commitment.
              </p>
           
            </div>
          
            </div>
        </section>

        {/* Team Start */}
        <section id="team" className="background-grey p-t-60 p-b-60">
          <div className="container">
            <div className="row team-members team-members-shadow m-b-40">
              <div className="col-md-4">
                <div className="team-member">
                  <div className="team-image">
                    <img
                      src="/images/team/druddhav.jpeg"
                      alt="Dr. Uddhav Kelavkar"
                    />
                  </div>
                  <div className="team-desc">
                    <h3>Dr. Uddhav Kelavkar</h3>
                    <span>Managing Director</span>
                    <p> </p>
                    <div className="align-center">
                      <a
                        className="btn btn-xs btn-slide btn-light"
                        href="mailto:uddhav@ncbiprivatelimited.com"
                        data-width={80}
                      >
                        <i className="fa fa-envelope" />
                        <span>Mail</span>
                      </a>
                       <button
                    href="#Uddhav"
                        data-lightbox="inline"
                         className="btn btn-xs btn-slide btn-light"
                  >
                            <i className="fa fa-eye" />
                         <span>Details</span>

                  </button>
                      <div
                  id="Uddhav"
                  className="modal"
                  style={{ maxWidth: "700px", minHeight: "380px" }}
                >
                  <h2><b>Uddhav P. Kelavkar, Ph.D, MBA (Founding member, Managing Director)</b></h2>
                 <p>He founded NuTech Cancer Biomarkers India Pvt. Ltd in 2017. He has led the translational research programs in Urology at several institutions including Emory University, University of Pittsburgh and Mercer University particularly in Prostate and Bladder cancers. Dr. Kelavkar received his Doctor of Philosophy degree in Microbiology from the Maharaja Sayajirao University of Baroda, India and MBA degree from Stetson School of Business, Mercer University, USA. He completed his postdoctoral training at the University of Louisville School of Medicine in Kentucky, Clark Atlanta University in Georgia, and at the Michigan Genome Center. Dr. Kelavkar was Assistant Professor at Emory University, Atlanta before moving to the University of Pittsburgh, School of Medicine. He came to Savannah from the University of Pittsburgh, School of Medicine where he served as Assistant Professor of Hematology/Oncology in the Prostate and Urologic Cancer Center. He has published more than 40 published papers in peer-reviewed research journals and written two book chapters. He has been invited to lecture at several national and international conferences. His research has been funded by the American Cancer Society, the Department of Défense Prostate Cancer Research Program, and the National Cancer Institute, National Institutes of Health (NIH). He also served on numerous national and international study sections including NIH and the Department of Défense Prostate Cancer Research Programs. He has a patent for the SeroMark-1 technology.</p>
                </div>
                    
                    
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="team-member">
                  <div className="team-image">
                    <img
                      src="/images/team/kalpana.jpg"
                      alt="Kalpana Patel Kelavkar"
                    />
                  </div>
                  <div className="team-desc">
                    <h3>Kalpana Patel Kelavkar</h3>
                    <span>Director</span>
                    <p> </p>
                    <div className="align-center">
                      <a
                        className="btn btn-xs btn-slide btn-light"
                        href="mailto:kalpana@ncbiprivatelimited.com"
                        data-width={80}
                      >
                        <i className="fa fa-envelope" />
                        <span>Mail</span>
                          </a>
                               <button
                    href="#Kalpana"
                        data-lightbox="inline"
                         className="btn btn-xs btn-slide btn-light"
                  >
                            <i className="fa fa-eye" />
                         <span>Details</span>

                  </button>
                      <div
                  id="Kalpana"
                  className="modal"
                  style={{ maxWidth: "700px", minHeight: "380px" }}
                >
                  <h2><b>Kalpana Patel Kelavkar, BA (Founding Member and Director)</b></h2>
                 <p> Before joining NuTech as a Director in 2017, she served as managing partner of Sun and Sea Enterprises, LLC, as well as Managing Broker of KP Hotel brokerage, LLC since 2005. She is a second-generation hotelier with a Business Associates degree from TriCounty Technical College in Pendleton, S.C., and has been certified by Cornell University as Hotel Broker (CHB). She also has earned International Property Specialist certification from the National Association of Realtors and a Financial Service Representative certification from the United Jersey Bank. Kalpana has been a Lifetime member of AAHOA and served as a member on its board.</p>
                </div>
                    
                    </div>             </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="team-member">
                  <div className="team-image">
                    <img src="/images/team/tushar.jpg" alt="Tushar Barad" />
                  </div>
                  <div className="team-desc">
                    <h3>Tushar Barad</h3>
                    <span>Director</span>
                    <p> </p>
                    <div className="align-center">
                      <a
                        className="btn btn-xs btn-slide btn-light"
                        href="mailto:tushar@ncbiprivatelimited.com"
                        data-width={80}
                      >
                        <i className="fa fa-envelope" />
                        <span>Mail</span>
                      </a>
                       <button
                    href="#Tushar"
                        data-lightbox="inline"
                         className="btn btn-xs btn-slide btn-light"
                  >
                            <i className="fa fa-eye" />
                         <span>Details</span>

                  </button>
                      <div
                  id="Tushar"
                  className="modal"
                  style={{ maxWidth: "700px", minHeight: "380px" }}
                >
                  <h2><b>Tushar Barad, MS, BA (Director):</b></h2>
                 <p> He is a professional who has worked from grassroot level interacting with research scientists, clinicians, oncologists, pharmacologists, quality control heads, regulatory compliance officials, and accreditation bodies in India. His journey on molecular oncology began in 2004 for breast and colon cancer screening and detecting metastasis from blood samples. Later in 2007, he launched patented Biomed2 technology for B & T Cell Clonality assays for Lymphoma Diagnosis and built the market from scratch. His strengths were further leveraged in areas such as Molecular Cytogenetics, Next Generation Sequencing, and Microarray technology. He has been invited as a speaker, as an expert panelist, and as a chair in several prestigious national conferences on molecular oncology and pathology. Having success in the area of Onco-pathology for over 2 decades, he was appointed as a Director in NuTech Cancer Biomarkers India Private Limited.</p>
                </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        </section>
        {/* Team End */}

       
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

export default team;
