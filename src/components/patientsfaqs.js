import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Nav from "../components/Nav";
import FooterComponent from "./FooterComponent";

class patientsfaqs extends React.Component {
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
                <h1>Find Answers To Your Prostate Health Worries With SeroMark-1 Test</h1>
                {/* end: Captions */}
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
                    Frequently Asked Questions For Patients </h2>
                  <p style={{textAlign:'center'}}>Our medical team will assess you and recommend a test that's right for you. We understand the importance of educating you on the most effective ways to take care of your body, so that you can prevent diseases and heal quickly.</p>
                </div>
                <div className="accordion toggle fancy radius clean">
                  <div className="ac-item ac-active">
                    <h5 className="ac-title">
                      <i className="fa fa-question-circle" />
                    Should I agree for a painful REPEAT prostate biopsy, or wait to keep finding if I have cancer?
                    </h5>
                    <div className="ac-content">
                    <ul> <li>	With combined assessment of SeroMark-1 test results coupled with PSA test result, you and your doctor will be able to make an informed choice about alternative evaluations like repeat biopsy and further steps. (Discuss with your doctor as necessary).</li>

<li>	If the SeroMark-1 test result is normal, it is unlikely that you have prostate cancer and there may be NO need for a painful repeat biopsy.</li>

<li>	If SeroMark-1 is abnormal (independent of your PSA result), there is a high likelihood that you may have cancer, and we strongly encourage you to consult your health-care provider immediately for further evaluation. 
</li></ul>

                    </div>
                  </div>
                  <div className="ac-item">
                    <h5 className="ac-title">
                      <i className="fa fa-question-circle" />
                     	Why should I consider having a SeroMark-1 and PSA Test?
                    </h5>
                    <div style={{ display: "none" }} className="ac-content">
                      <p>
                        SeroMark-1 test works best in conjunction with Prostate specific antigen (PSA) tests, it helps your physician/urologist make the most informed decision on the need for invasive testing. PSA tests aren't fool proof, it's possible for your PSA levels to be elevated when cancer isn't present, and to be normal when cancer is present. Neither the PSA test nor the rectal examination (DRE) is 100% accurate and can give an abnormal result even when cancer is not present (known as a false positive result). In addition, normal results can occur even when cancer is present (false negative). The results with PSA test results may help to find prostate cancer early even before there are symptoms. <br></br>
Many small prostate cancers detected by PSA would never develop enough to cause any symptoms. Even if your PSA level is raised, this could be for reasons other than prostate cancer and you may have unnecessary stress. This is very important since the results of PSA and DRE screenings lead to both under and over treatment of prostate cancer (PCa).

                    </p>
                    </div>
                  </div>
                  <div className="ac-item">
                    <h5 className="ac-title">
                      <i className="fa fa-question-circle" />
SeroMark-1 Test offers several potential advantages to these uncertainties:                    </h5>
                    <div style={{ display: "none" }} className="ac-content">
                 <ul><li>This test is a physician recommended/or self-ordered, easy and results can be expected within 3-5 working days. </li>
<li>	With a high PSA levels, you may need further tests such as a biopsy, which can be painful and may sometimes lead to blood in urine, semen or stools. Occasionally, having a biopsy can lead to infection of the prostate gland, which can be difficult to treat. The SeroMark-1 test may help give more information before you make the decision for the need of a biopsy. </li>
<li>	In a small number of men, a biopsy may not always detect a significant cancer even when it is present. The SeroMark-1 test may give you additional information to pursue additional testing to discover a significant cancer after a negative biopsy.</li></ul>

                      
                    </div>
                  </div>
                  <div className="ac-item">
                    <h5 className="ac-title">
                      <i className="fa fa-question-circle" />
                      	What are the benefits of SeroMark-1 testing?
                    </h5>
                    <div style={{ display: "none" }} className="ac-content">
                     <p>As prostate cancer often grows very slowly, some men might not need aggressive treatment for prostate cancer. Instead, your doctors may recommend approaches known as expectant management, watchful waiting, observation, or active surveillance. These approaches are decided based on the results of PSA blood test, DRE and SeroMark-1 test.<br></br>
The patients with less serious cancer may take control of their health decisions and quality of life, thereby avoiding the side effects of a treatment that might not have helped them live longer.  Active surveillance is often used for patients with rapidly growing disease for monitoring the cancer closely with PSA blood tests, DREs, and ultrasounds at regular intervals. Prostate biopsies may be done as well to see if the cancer is becoming more aggressive. <br></br>
Usually this approach includes a doctor visit with a PSA blood test, DRE and SeroMark-1 test about every 3 to 6 months. Trans-rectal ultrasound-guided prostate biopsies may be done every year as well. Treatment can be started, if the cancer seems to be growing or getting worse, based on abnormal SeroMark-1 test, a rising PSA level or a change in the DRE, ultrasound findings, or biopsy results. 
</p> 
                    </div>
                  </div>
                  <div className="ac-item">
                    <h5 className="ac-title">
                      <i className="fa fa-question-circle" />
                    	What is the cost of SeroMark –1 test?
                    </h5>
                    <div style={{ display: "none" }} className="ac-content">
                     <p>SeroMark-1 testing which is accurate than any known biomarkers for detecting prostate cancer, is being offered in India for only Rs. 4000/test (90% OFF from what it costs in USA) for early detection of prostate cancer from serum. </p>


                    </div>
                  </div>
                  
                  <div className="ac-item">
                    <h5 className="ac-title">
                      <i className="fa fa-question-circle" />
                    How can I book Seromark-1 test?
                    </h5>
                    <div style={{ display: "none" }} className="ac-content">
                      <p>
                        SeroMark-1 test can be ordered from anywhere in the country through our website (<a href
                          ="nutechbiomarkersindia.com">nutechbiomarkersindia.com</a>) or feel free to contact us at <a href="tel:+91 8898664466">+91 8898664466</a>, Fax: +91222966 3990, Email: <a href="mailto:admin@nutechbiomarkersindia.com">admin@nutechbiomarkersindia.com</a>.
                    </p>

                    </div>
                  </div>
  <div className="ac-item">
                    <h5 className="ac-title">
                      <i className="fa fa-question-circle" />
                  How is theSeromark-1 test conducted and results received?
                    </h5>
                    <div style={{ display: "none" }} className="ac-content">
                      <p>
                       Once the test is booked, the company will arrange for a blood draw after confirmation of timings and location from patient. Drawing blood sample will not take more than 20 minutes (after a nurse or a certified technician will visit the home/desired location and do the necessary paperwork). The sample is then transported to our facility in Thane for analysis, and then the results are provided within approximately 3-5 working days. The results can be postal mailed within India, or alternatively can be viewed via personal email correspondence (by securely logging on to any computer having access to internet), anywhere in the world.
                    </p>

                    </div>
                  </div>
 <div className="ac-item">
                    <h5 className="ac-title">
                      <i className="fa fa-question-circle" />
                What is a normal SeroMark-1 test result?
                    </h5>
                    <div style={{ display: "none" }} className="ac-content">
                      <p>
                      The test is proprietary. Alterations in biomarkers will determine whether or not the test is normal.<b><a href="">SEROMARK-1 SHORT EXPLANATION FIGURE FROM CLINICIAN PAMPHLET </a></b>
                    </p>

                    </div>
                  </div>

<div className="ac-item">
                    <h5 className="ac-title">
                      <i className="fa fa-question-circle" />
              	What if a screening test shows that SeroMark-1 test is not normal?
                    </h5>
                    <div style={{ display: "none" }} className="ac-content">
                      <p>
                      In that case, you are strongly encouraged to consult your physician immediately along with your PSA results for alternative evaluation.
                    </p>

                    </div>
                  </div>


                  <div className="ac-item">
                    <h5 className="ac-title">
                      <i className="fa fa-question-circle" />
              What are some of the limitations and potential harms of the SeroMark-1 test for prostate cancer screening?
                    </h5>
                    <div style={{ display: "none" }} className="ac-content">
                      <p>
                     We may not foresee any potential harm in performing this test. However, you will need to seriously consult your physician if:<br></br>
1. SeroMark-1 is abnormal and PSA is lower than 3-4 ng/dL, or<br></br>
2. SeroMark-1 is abnormal and PSA is higher than 3-4 ng/dL.
<b>Disclaimer:</b>  The benefits of using SeroMark-1 test is to derive additional prostate cancer screening information and offers forward-looking views. But these views, recommendations and statements in the test results, are neither claims nor historical facts and are subject to risks and uncertainties, which could cause actual results and the timing of certain events to differ materially from those set forth in or implied herein.

                    </p>

                    </div>
                  </div>
 <div className="ac-item">
                    <h5 className="ac-title">
                      <i className="fa fa-question-circle" />
            What research has been done to study SeroMark-1 screening?
                    </h5>
                    <div style={{ display: "none" }} className="ac-content">
                      <p>
                   <b>Clinical utility and Validation of data :</b> The SeroMark-1 Prostate Test was studied in a real-world clinical setting that included expert urologists, and more than 1,000 patients in India. The study is the first-ever retrospective, randomized prostate biomarker trial with a blinded control arm conducted in a clinical utility setting.
                    </p>

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

export default patientsfaqs;
