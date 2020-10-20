import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Nav from "./Nav";
import FooterComponent from "./FooterComponent";

class Totalpsa extends React.Component {
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
                 <h1>Early Detection & Advance Treatment Can Save Lives...</h1>
                {/* end: Captions */}
              </div>
            </div>
          </div>
          {/* end: Slide 2 */}
        </div>
<section
          style={{
            background:
              "url(https://www.exosomedx.com/sites/default/files/2019-12/exosomeMuted900.jpg)",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="slide-captions text-left">
                  <h2>
                    {" "}
                  Total PSA and free PSA test and its limitations
                  </h2>
                  <p>
                 Whether the patient needs one or both tests, depends on individual situation and determining what a high PSA score means can be complicated. Prostate-specific antigen is not prostate cancer specific and has low sensitivity and specificity for prostate cancer. This is the reason sometimes this question generates much debate and confusion.<br></br>

Prostate cancer can raise PSA levels, but so can other conditions. PSA levels may be increased in conditions like benign prostatic enlargement (BPH), medications given for treatment of enlarged prostate, prostatitis or prostatic inflammation, lower urinary tract infection (UTI), obesity, hepatitis etc. Studies have shown that about 75% of men with an elevated PSA, do not have prostate cancer. Similarly, sometimes PSA is not elevated even if the patient has prostate cancer.<br></br>

For further clarification, some urologists measure free PSA as the proportion of free PSA to total PSA, in cases where PSA level ranges between 4 ng/ml and 10 ng/ml called as “gray zone”.  As per some studies, a total PSA in this range and a free PSA greater than 25% are more likely observed in benign condition than in cancer. Men with a total PSA in the same range and a free PSA below 10% may need to have a biopsy. More likely than not, they have prostate cancer.<br></br>

Increased incidences of prostate cancer in India in recent years and increased willingness of caregivers for treatment, has led to potentially unnecessary biopsies and overtreatment. The SeroMark-1 test with high sensitivity and a negative predictive value of 74% allows for greater confidence to rule out prostate cancer. The SeroMark-1 test is not dependent on PSA.

                  </p>
                </div>
              </div>
              <div className="col-sm-6">
                <img
                  src="https://gpnotebook.com/PSA%20screening.png"
                  style={{ width: "100%",}}
                 className="ImgTop"></img>
              </div>
            </div>
          </div>
          <div className="container">
            <h2 style={{textAlign:'center', textTransform:'none'}}>Diferences between Diagnostic Tests and Screening Tests</h2>
          <table>
<tbody>
<tr>
<td><strong> </strong></td>
<td><strong>Diagnostic test</strong></td>
<td><strong>Screening test</strong></td>
</tr>
<tr>
<td><strong>Specificity and Sensitivity</strong></td>
<td>The cut-off is set towards high specificity, with more weight given to diagnostic precision and accuracy than to the acceptability of the test to patients</td>
<td>The cut-off is set towards high sensitivity. As a result, many of the positive results are false positives. This is acceptable, particularly if the screening test is not harmful or expensive.</td>
</tr>
<tr>
<td><strong>Cost</strong></td>
<td>Patients have symptoms that require accurate diagnosis and therefore higher costs are justified.</td>
<td>Since large numbers of people will be screened to identify a very small number of cases, the financial resources needed must be justified carefully.</td>
</tr>
<tr>
<td><strong>Result of the test</strong></td>
<td>The test result provides a definitive diagnosis (e.g. a definite diagnosis of Meningitis through blood test or lumbar puncture.)</td>
<td>The result of the test is an estimate of the level of risk and determines whether a diagnostic test is justified.</td>
</tr>
<tr>
<td><strong>Invasiveness</strong></td>
<td>May be invasive (involving the introduction of instruments or other objects into the body or body cavities).</td>
<td>Often non-invasive.</td>
</tr>
<tr>
<td><strong>Population offered the test</strong></td>
<td>Those with symptoms or who are under investigation following a positive screening test.</td>
<td>Those without symptoms of disease, but can be at risk.</td>
</tr>
</tbody>
          </table>
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

export default Totalpsa;
