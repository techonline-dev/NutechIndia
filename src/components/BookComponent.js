import React from 'react';
import config from '../config';
import Nav from './Nav';
import FooterComponent from './FooterComponent';
import AuthService from './../auth/AuthService';
import { Link } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';
import Steps, { Step } from 'rc-steps';
import Modal from './Modal/Modal';
import Datepicker from './Datepicker';

class BookComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      contact: '',
      email: '',
      gender: 'Male',
      area: '',
      city: '',
      istate: '',
      pincode: '',
      testID: '',
      testAmount: 0,
      couponCode: '',
      couponMessage: '',
      discountPercent: 0,
      discountAmount: 0,
      totalAmount: 0,
      isLoadingCoupon: false,
      isLoadingSubmit: false,
      couponStatus: null,
      message: '',
      status: null,
      consentChecked: false,
      positive: '',
      biopsyPositive: '',
      dre: '',
      enlargedProstate: '',
      biopsyPlanning: '',
      biopsyDoctorName:'',
      prostateRemoved: '',
      hivPositive: '',
      doctorName: '',
      doctorContact: '',
      doctorAddress: '',
      tPSA: '',
      fPSA: '',
      relativeWithCancer: ''
    };
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
    this.domain = config.url;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.checkCoupon = this.checkCoupon.bind(this);
    this.handleChangeTest = this.handleChangeTest.bind(this);
    this.Auth = new AuthService();
    if (!this.Auth.loggedIn()) {
      this.props.history.replace('/login')
    }
  }

  componentDidMount() {
    window.updateUIAfterReact();
    // const picker = window.jQuery('[data-toggle="datepicker"]');
    // picker.datepicker({ format: 'dd/MM/yyyy' });
    // picker.on('pick.datepicker', e => {
    //   this.dob = e.date.toISOString().split('T')[0];
    // });

    if (!this.Auth.loggedIn()) return this.props.history.replace('/login');
    let decoded = jwt.decode(this.Auth.getToken());
    this.setState({
      fullName: decoded.fullName,
      email: decoded.email
    });
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  focusTextInput() {
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    this.textInput.current.focus();
  }

  async handleChangeTest(event) {
    const test = config.services.find(ele => ele.testID === event.target.value);
    await this.setState({
      testID: test.testID,
      testAmount: test.testAmount,
      discountPercent: 0,
      couponStatus: null,
      couponMessage: '',
      couponCode: ''
    });
    this.reCalculatePrice();
  }

  async reCalculatePrice() {
    return await this.setState({
      discountAmount: this.state.testAmount * (this.state.discountPercent) / 100,
      totalAmount: this.state.testAmount * (100 - this.state.discountPercent) / 100,
    })
  }

  async checkCoupon() {
    this.setState({
      isLoadingCoupon: true
    })
    let couponCode = this.state.couponCode;
    if (!couponCode || !this.state.testID) return this.setState({ isLoadingCoupon: false })
    try {
      let res = await this.Auth.checkCoupon(couponCode);
      if (res.status === 401) return this.props.history.replace('/logout');
      if (res.status !== 200) {
        await this.setState({
          isLoadingCoupon: false,
          couponMessage: res.message,
          couponStatus: res.status,
          discountPercent: 0,
          couponCode: ''
        });
        return this.reCalculatePrice()
      };
      await this.setState({
        isLoadingCoupon: false,
        discountPercent: res.discountPercent,
        couponStatus: res.status,
        couponCode: couponCode
      });
      return this.reCalculatePrice()
    } catch(e) {
      await this.setState({
        couponMessage: "Something went wrong! Please try again.",
        isLoadingCoupon: false,
        discountPercent: 0,
        couponCode:'',
        couponStatus: 500
      });
      return this.reCalculatePrice()
    }
  }

  handleCheckbox(event) {
    this.setState({ consentChecked: !this.state.consentChecked });
  }

  handleLogout() {
    this.Auth.logout()
    this.props.history.replace('/login');
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({
      isLoadingSubmit: true
    })
    let obj = this.state;
    let questions = {
      "Doctor's Name": this.state.doctorName || null,
      "Doctor's Contact": this.state.doctorContact || null,
      "Doctor's Address": this.state.doctorAddress || null,
      "Has your doctor performed Digital Rectal Exam (DRE)?": this.state.dre || null,
      "Do you have an enlarged Prostate?": this.state.enlargedProstate || null,
      "Have you done or planning biopsy?": this.state.biopsyPlanning || null,
      "Is your biopsy positive for cancer?": 'no',
      "Name of the doctor who did biopsy": this.state.biopsyDoctorName || null,
      "If done, When did you do your biopsy?": this.biopsyWhen || null,
      "If planning, When are you planning to do biopsy?": this.biopsyPlanningWhen || null,
      "Already tested positive for prostate cancer?": 'no',
      "Total PSA (ng/mL)": this.state.tPSA || null,
      "Free PSA (ng/mL)": this.state.fPSA || null,
      "Is the prostate surgically removed becaues of cancer?": this.state.prostateRemoved || null,
      "If removed, when? ": this.when || null,
      "Does anyone in your family have prostate cancer?": this.state.relativeWithCancer || null,
      "Are you HIV positive? ": this.state.hivPositive || null
    }
    obj.city = obj.city + ', ' + obj.istate;
    obj.dob = this.dob;
    obj.questions = questions;
    try {
      let res = await this.Auth.book(obj);
      if (res.status === 401) return this.props.history.replace('/logout');
      return this.setState({
        message: res.message,
        status: res.status,
        isLoadingSubmit: false,
        contact: '',
        area: '',
        city: '',
        istate: '',
        pincode: '',
        testID: '',
        testAmount: 0,
        couponCode: '',
        couponMessage: '',
        discountPercent: 0,
        discountAmount: 0,
        totalAmount: 0,
        isLoadingCoupon: false,
        couponStatus: null,
        consentChecked: false
      })
    } catch (e) {
      this.props.history.push({ pathname: '/error', state: { status: 500, message: 'Internal Server Error!' } })
    }
  }
  render() {
    return (
      <div>
        <Nav />
        <section className="container" style={{ paddingTop: '25px' }}>
          <div className="row">
            <div style={{ padding: '30px 0px' }} className="text-left">
              <Steps
                current={0}
                status='process'
              >
                <Step title="Book a Test" />
                <Step title="Make Payment" icon={<i className="fa fa-rupee" style={{ color: '#a94442' }} />} />
                <Step title="Sit Back and Relax" icon={<i className="fa fa-clock-o" style={{ color: '#31708f' }} />} />
                <Step title="Download Report" icon={<i className="fa fa-check-circle" style={{ color: '#3c763d' }} />} />
              </Steps>
            </div>
          </div>
          {this.state.isLoadingSubmit && (<div className="text-center row loader-inner line-scale-pulse-out-rapid">
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>)}
          <div className="row">
            <form className="form-transparent-grey" onSubmit={this.handleSubmit}>
              <div className="col-md-6 text-left">
                <div className="col-md-12 m-b-20">
                  <h3>Register for the Lab test</h3>
                  {this.state.message !== '' && (
                    <div role="alert" className={this.state.status === 200 ? "alert alert-success alert-dismissible m-b-0" : "alert alert-danger alert-dismissible  m-b-0"}>
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span> </button>
                      {this.state.status === 200 ? <Link to='/dashboard'><u>{this.state.message}</u></Link> : this.state.message}
                    </div>
                  )}
                </div>


                <div className="col-md-12 form-group">
                  <label className="sr-only">TestName</label>
                  <select className="form-control" value={this.state.testID} onChange={this.handleChangeTest} name="testID" required>
                    <option value='' disabled hidden> *Select a Test ▼</option>
                    {config.services.map((item, index) => {
                      return <option key={index} value={item.testID}>{item.testName}</option>
                    })}
                  </select>
                </div>

                <div>
                  <div className="col-md-6 form-group">
                    <label className="sr-only">Full Name</label>
                    <input type="text" className="form-control" placeholder="*Full Name" name="fullName" value={this.state.fullName} onChange={this.handleChange} required/>
                  </div>
                  <div className="col-md-6 form-group">
                    {/* <input type="text" pattern="\d{1,2}/\d{1,2}/\d{4}" className="form-control docs-date" placeholder="*Date of Birth (dd/mm/yyyy)" name="dob" data-toggle="datepicker" required />
                    <div data-toggle="datepicker"></div> */}
                    <Datepicker id="0" name="dob" placeholder="*Date of Birth (dd/mm/yyyy)" dateChange={e=>{
                          this.dob = e.date.toISOString().split('T')[0];
                      }}/>
                  </div>
                </div>

                <div>
                  <div className="col-md-6 form-group">
                    <label className="sr-only">Email</label>
                    <input type="email" className="form-control" placeholder="*Email" name="email" value={this.state.email} onChange={this.handleChange} required />
                  </div>
                  <div className="col-md-6 form-group">
                    <label className="sr-only">Phone No. For communication </label>
                    <input type="tel" pattern="[0-9]{10}" className="form-control" placeholder="*Phone No. - 10 digits" name="contact" title="For e.g. 9876543210" value={this.state.contact} onChange={this.handleChange} required />
                  </div>
                </div>

                {/* <div className="col-md-12 form-group">
                  <label className="sr-only">Date of Birth</label>
                  <input type="date" className="form-control" placeholder="Date of Birth" name="dob" value={this.state.dob} onChange={this.handleChange} required />
                </div> */}
                <div className="col-md-6 form-group">
                  <label className="sr-only">Address</label>
                  <input type="text" className="form-control" placeholder="*Address" name="area" value={this.state.area} onChange={this.handleChange} required />
                </div>
                <div className="col-md-6 form-group">
                  <label className="sr-only">City</label>
                  <input type="text" className="form-control" placeholder="*City" name="city" value={this.state.city} onChange={this.handleChange} required />
                </div>

                <div className="col-md-6 form-group">
                  <label className="sr-only">State</label>
                  <select className="form-control" value={this.state.istate} onChange={this.handleChange} name="istate" required>
                    <option value='' disabled hidden> *State (INDIA) ▼</option>
                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                    <option value="Daman and Diu">Daman and Diu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jammu">Jammu</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kashmir">Kashmir</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Ladakh">Ladakh</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Orissa">Orissa</option>
                    <option value="Pondicherry">Pondicherry</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttaranchal">Uttaranchal</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="West Bengal">West Bengal</option>
                  </select>
                </div>
                <div className="col-md-6 form-group">
                  <label className="sr-only">Pincode</label>
                  <input type="text" pattern="[0-9]{6}" className="form-control" placeholder="*6 digits Pincode" name="pincode" value={this.state.pincode} onChange={this.handleChange} required />
                </div>
                <div className="col-md-12 form-group m-b-5">
                  1) Who is your treating doctor?
                </div>
                <div>
                  <div className="col-md-6 form-group">
                    <input type="text" className="form-control" placeholder="Doctor's name (OPTIONAL)" name="doctorName" value={this.state.doctorName} onChange={this.handleChange} />
                  </div>
                  <div className="col-md-6 form-group">
                    <input type="tel" pattern="[0-9]{10}" className="form-control" placeholder="Doctor's phone (OPTIONAL)" name="doctorContact" value={this.state.doctorContact} onChange={this.handleChange} />
                  </div>
                </div>
                <div className="col-md-12 form-group">
                  <input type="text" className="form-control" placeholder="Doctor's Address (OPTIONAL)" name="doctorAddress" value={this.state.doctorAddress} onChange={this.handleChange} />
                </div>
                <div className="col-md-12 form-group m-b-5">
                  2) Has your doctor performed Digital Rectal Exam (DRE) on you?
                </div>
                <div onChange={this.handleChange} className="col-md-12">
                  <div className="col-md-6 m-t-0 radio">
                    <label>
                      <input type="radio" name="dre" id="dreYes" value="yes" /> Yes
                    </label>
                  </div>
                  <div className="col-md-6 m-t-0 radio">
                    <label>
                      <input type="radio" name="dre" id="dreNo" value="no" required/> No
                    </label>
                  </div>
                </div>
                {this.state.dre === 'yes' && 
                  <>
                  <div className="col-md-12 form-group m-b-5">
                    2a) Do you have an enlarged prostate (BPH)?
                  </div>
                  <div onChange={this.handleChange} className="col-md-12">
                    <div className="col-md-6 m-t-0 radio">
                      <label>
                        <input type="radio" name="enlargedProstate" id="enlargedProstateYes" value="yes" /> Yes
                      </label>
                    </div>
                    <div className="col-md-6 m-t-0 radio">
                      <label>
                        <input type="radio" name="enlargedProstate" id="enlargedProstateNo" value="no" required/> No
                      </label>
                    </div>
                  </div>
                  <div className="col-md-12 form-group m-b-5">
                    2b) Have you done or planning biopsy?
                  </div>
                  <div onChange={this.handleChange} className="col-md-12">
                    <div className="col-md-4 m-t-0 radio">
                      <label>
                        <input type="radio" name="biopsyPlanning" id="biopsyPlanningDone" value="done" /> Done
                      </label>
                    </div>
                    <div className="col-md-4 m-t-0 radio">
                      <label>
                        <input type="radio" name="biopsyPlanning" id="biopsyPlanningPlanning" value="planning" /> Planning
                      </label>
                    </div>
                    <div className="col-md-4 m-t-0 radio">
                      <label>
                        <input type="radio" name="biopsyPlanning" id="biopsyPlanningNot" value="notSure" required/> Not Sure
                      </label>
                    </div>
                  </div>
                  {this.state.biopsyPlanning === 'done' &&
                    <>
                      <div>
                        <div className="col-md-6 form-group">
                          <input type="text" className="form-control" placeholder="*Doctor's name who did it" name="biopsyDoctorName" value={this.state.biopsyDoctorName} onChange={this.handleChange} required />
                        </div>
                        <div className="col-md-6 form-group">
                          <Datepicker id="2" name="biopsyWhen" placeholder="when?" dateChange={e=>{
                              this.biopsyWhen = e.date.toISOString().split('T')[0];
                          }}/>
                        </div>
                      </div>
                      <div className="col-md-12 form-group m-b-5">
                        2c) Is your biopsy positive for cancer?
                      </div>
                      <div onChange={this.handleChange} className="col-md-12">
                        <div className="col-md-6 m-t-0 radio">
                          <label>
                            <input type="radio" name="biopsyPositive" id="biopsyPositiveYes" value="yes" /> Yes
                          </label>
                        </div>
                        <div className="col-md-6 m-t-0 radio">
                          <label>
                            <input type="radio" name="biopsyPositive" id="biopsyPositiveNo" value="no" required/> No
                          </label>
                        </div>
                      </div>
                    </>
                  }
                  {this.state.biopsyPlanning === 'planning' &&
                    <div className="col-md-12 form-group">
                      <Datepicker id="3" name="biopsyPlanningWhen" placeholder="when?" dateChange={e=>{
                          this.biopsyPlanningWhen = e.date.toISOString().split('T')[0];
                      }}/>
                    </div>
                  }
                  </>
                }
                <div className="col-md-12 form-group m-b-5">
                  3) Are you already tested positive for prostate cancer?
                </div>
                <div onChange={this.handleChange} className="col-md-12">
                  <div className="col-md-6 m-t-0 radio">
                    <label>
                      <input type="radio" name="positive" id="positiveYes" value="yes" /> Yes
                    </label>
                  </div>
                  <div className="col-md-6 m-t-0 radio">
                    <label>
                      <input type="radio" name="positive" id="positiveNo" value="no" required/> No
                    </label>
                  </div>
                </div>
                {(this.state.positive === 'yes' || this.state.biopsyPositive === 'yes') && 
                  <div className="col-md-12 form-group m-b-5 text-danger">
                    &nbsp; &nbsp; You are not eligible to take the test.
                  </div>
                }
                {this.state.positive === 'no' && this.state.biopsyPositive !== 'yes' &&
                <>
                  <div className="col-md-12 form-group m-b-5">
                    4) Your recent PSA test values <strong>(OPTIONAL)</strong>
                  </div>
                  <div className="col-md-6 form-group">
                    <input type="text" className="form-control" placeholder="Total PSA (ng/mL)" name="tPSA" value={this.state.tPSA} onChange={this.handleChange}/>
                  </div>
                  <div className="col-md-6 form-group">
                    <input type="text" className="form-control" placeholder="Free PSA (ng/mL)" name="fPSA" value={this.state.fPSA} onChange={this.handleChange}/>
                  </div>
                  <div className="col-md-12 form-group m-b-5">
                    5) Is your prostate surgically removed because of cancer?
                  </div>
                  <div onChange={this.handleChange} className="col-md-12">
                    <div className="col-md-6 m-t-0 radio">
                      <label>
                        <input type="radio" name="prostateRemoved" id="sremovedYes" value="yes" required/> Yes
                    </label>
                    </div>
                    <div className="col-md-6 m-t-0 radio">
                      <label>
                        <input type="radio" name="prostateRemoved" id="sremovedNo" value="no" /> No
                    </label>
                    </div>
                  </div>
                  {this.state.prostateRemoved==='yes' &&
                    <div className="col-md-12 form-group">
                      <Datepicker id="1" name="when" placeholder="when?" dateChange={e=>{
                          this.when = e.date.toISOString().split('T')[0];
                      }}/>
                    </div>}
                  <div className="col-md-12 form-group m-b-5">
                    6) Does anyone in your family have prostate cancer? <strong>(OPTIONAL)</strong>
                  </div>
                  <div className="col-md-12 form-group">
                    <input type="text" className="form-control" placeholder="Father/ Brother/ Uncle/ Cousin..." name="relativeWithCancer" value={this.state.relativeWithCancer} onChange={this.handleChange} />
                  </div>
                  <div className="col-md-12 form-group m-b-5">
                    7) Are you HIV positive?
                  </div>
                  <div onChange={this.handleChange} className="col-md-12">
                    <div className="col-md-6 m-t-0 radio">
                      <label>
                        <input type="radio" name="hivPositive" id="hivYes" value="yes" required/> Yes
                      </label>
                    </div>
                    <div className="col-md-6 m-t-0 radio">
                      <label>
                        <input type="radio" name="hivPositive" id="hivNo" value="no" required/> No
                      </label>
                    </div>
                  </div>
                  {(this.state.hivPositive !== '') && 
                    <button type="button" onClick={this.focusTextInput} className="btn btn-block">Proceed with Order Summary</button>
                  }
                </>
                }
              </div>
              <div className="col-md-6 text-left">
                <div className="m-b-20">
                  <h3>Order Summary</h3>
                  {this.state.couponStatus !== null && (
                    <div role="alert" className={this.state.couponStatus === 200 ? "alert alert-success alert-dismissible m-b-0" : "alert alert-danger alert-dismissible  m-b-0"}>
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span> </button>
                      {this.state.couponStatus === 200 ? "Coupon applied successfully!" : this.state.couponMessage}
                    </div>
                  )}
                </div>
                <div className="row m-b-10">
                  <div className="col-md-7">
                    <label className="sr-only">Coupon Code</label>
                    <input ref={this.textInput} type="text" className="form-control" placeholder="Coupon Code" name="couponCode" value={this.state.couponCode} onChange={this.handleChange} />
                  </div>
                  <div className="col-md-3">
                    <button type="button" onClick={this.checkCoupon} className="btn btn-block">Apply</button>
                  </div>
                  {this.state.isLoadingCoupon && (<div className="text-center col-md-2 loader-inner line-scale-pulse-out-rapid">
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                  </div>)}
                </div>
                <div className="table-responsive">
                  <table className="table" style={{ marginBottom: 0 }}>
                    <tbody>
                      <tr>
                        <td className="cart-product-name">
                          <strong>Order Subtotal</strong>
                        </td>
                        <td className="cart-product-name text-right">
                          <span className="amount">₹{this.state.testAmount}</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="cart-product-name">
                          <strong>Coupon</strong>
                        </td>
                        <td className="cart-product-name  text-right">
                          <span className="amount">{this.state.discountPercent}%</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="cart-product-name">
                          <strong>Discount</strong>
                        </td>
                        <td className="cart-product-name  text-right">
                          <span className="amount">₹{this.state.discountAmount}</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="cart-product-name">
                          <strong>Total</strong>
                        </td>
                        <td className="cart-product-name text-right">
                          <span className="amount color lead">
                            <strong>₹{this.state.totalAmount}</strong>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="form-group m-b-0">
                  <div className="checkbox">
                    <label>
                      <input
                        type="checkbox"
                        checked={this.state.consentChecked}
                        onChange={this.handleCheckbox}
                      /><b>I consent to all the <a href='#modalConsent' data-lightbox="inline"><u>terms and conditions</u></a></b>
                    </label>
                    <p className="m-b-0 text-danger">* You must agree <b>(check the box ↑)</b> to the above conditions to proceed further.</p>
                  </div>
                </div>

                <div id="modalConsent" className="modal" data-delay={1000} style={{ maxWidth: '75%', height: '75%' }}>
                  <h5>Prostate Cancer Screening. Patient Consent Details</h5>
                  <hr />
                  <Modal fullName={this.state.fullName} area={this.state.area} city={this.state.city} istate={this.state.istate} pincode={this.state.pincode} />
                </div>
                <div className="form-group">
                  <button 
                    type={(this.state.consentChecked && !this.state.isLoadingSubmit && this.state.positive==='no' && (this.state.biopsyPositive === 'no' || this.state.biopsyPositive ==='')) ? "submit" : "button"}
                    className={(this.state.consentChecked && !this.state.isLoadingSubmit && this.state.positive==='no' && (this.state.biopsyPositive === 'no' || this.state.biopsyPositive ==='')) ? "btn btn-block" : "btn btn-block disabled"}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
        <FooterComponent />
      </div>
    )
  }
}

export default BookComponent;