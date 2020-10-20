import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styles from './styles.module.css';
import AuthService from './../../auth/AuthService';

export default class MobileNav extends Component {
  state = {
    open: false
  }
  Auth = new AuthService();
  close = () => this.setState({ open: false })

  open = () => this.setState({ open: true })

  render() {
    return (
      this.Auth.loggedIn() ?
      (<div className={styles.nav_mobile}>
        <div className={styles.nav_openIcon} onClick={this.open}>
          <i className="icofont-navigation-menu"></i>
        </div>
        {this.state.open && <>
          <div className={styles.backdrop_mobile} onClick={this.close} />
          <nav className={styles.sideDrawer}>
            <div className={styles.links_mobile}>
              <Link to="/home#mission" className={styles.link} onClick={this.close}>Mission</Link>
              <Link to="/home#ayurvedic" className={styles.link} onClick={this.close}>Ayurvedic Treatment</Link>
              <Link to="/home#facts" className={styles.link} onClick={this.close}>Facts</Link>
              <Link to="/home#gallery" className={styles.link} onClick={this.close}>Gallery</Link>
              <Link to="/home#services" className={styles.link} onClick={this.close}>Services</Link>

              <hr className={styles.divider} />

              <Link to="/about#whoweare" className={styles.link} onClick={this.close}>Who we are</Link>
              <Link to="/about#faqs" className={styles.link} onClick={this.close}>FAQs</Link>
              <Link to="/about#resources" className={styles.link} onClick={this.close}>Resources/ Brochures</Link>
              <Link to="/home#contact" className={styles.link} onClick={this.close}>Contact</Link>

              <hr className={styles.divider} />

              <Link to="/dashboard" className={styles.link} onClick={this.close}>Tests Status</Link>

              <hr className={styles.divider} />

              <Link to="/book" style={{margin:"0px 20px"}} onClick={this.close}>
                <button type="button" style={{margin: "0px"}} className="btn btn-rounded btn-reveal btn-sm btn-success">
                  <span>Book Test</span><i className="fa fa-arrow-right"></i>
                </button>
              </Link>

              <hr className={styles.divider} />

              {/* <Link to="/changepassword" className={styles.link} onClick={this.close}>Password</Link> */}
              <Link to="/logout" className={styles.link} onClick={this.close}>Logout</Link>
            </div>
          </nav>
        </>}
      </div>)
      : 
      (<div className={styles.nav_mobile}>
        <div className={styles.nav_openIcon} onClick={this.open}>
          <i className="icofont-navigation-menu"></i>
        </div>
        {this.state.open && <>
          <div className={styles.backdrop_mobile} onClick={this.close} />
          <nav className={styles.sideDrawer}>
            <div className={styles.links_mobile}>
              <Link to="/book" style={{margin:"0px 20px"}} onClick={this.close}>
                <button type="button" style={{margin: "0px"}} className="btn btn-rounded btn-reveal btn-sm btn-success">
                  <span>Book Test</span><i className="fa fa-arrow-right"></i>
                </button>
              </Link>
			  <h5 className="mobilemenu">Caregivers</h5>
              <Link to="/physicians/seromarktest" className={styles.link} onClick={this.close}>SeroMark-1 test</Link>
              <Link to="/psa-test" className={styles.link} onClick={this.close}>PSA test</Link>
              <Link to="/totalpsa" className={styles.link} onClick={this.close}>Limitations of PSA test</Link>
              <Link to="/physicians/faqs" className={styles.link} onClick={this.close}>FAQs by caregivers</Link>

              <hr className={styles.divider} />
<h5 className="mobilemenu">Patients</h5>
              <Link to="/AbouttheProstate" className={styles.link} onClick={this.close}>About the Prostate</Link>
              <Link to="/symptoms" className={styles.link} onClick={this.close}>Symptoms</Link>
			                <Link to="/patients/about" className={styles.link} onClick={this.close}>Prostate Cancer</Link>
              <Link to="/diagnostictests" className={styles.link} onClick={this.close}>Diagnostic tests</Link>
              <Link to="/patients/faqs" className={styles.link} onClick={this.close}>FAQs by patients</Link>

              <hr className={styles.divider} />
<h5 className="mobilemenu">Our Company</h5>

              <Link to="/about" className={styles.link} onClick={this.close}>About Us</Link>
			   <Link to="/mission" className={styles.link} onClick={this.close}>Mission</Link>
			   <Link to="/home#contact" className={styles.link} onClick={this.close}>Location</Link>
			   <Link to="/team" className={styles.link} onClick={this.close}>Our team</Link>

              <hr className={styles.divider} />
<h5 className="mobilemenu">Publications and Gallery</h5>
              <Link to="/news" className={styles.link} onClick={this.close}>Blogs</Link>
              <Link to="/publications" className={styles.link} onClick={this.close}>Publications</Link>
              <Link to="/news" className={styles.link} onClick={this.close}>News</Link>
              <Link to="/gallery" className={styles.link} onClick={this.close}>Gallery</Link>

<hr className={styles.divider} />

              <Link to="/Our-Technology" className={styles.link} onClick={this.close}>Our Technology</Link>
			  
              <hr className={styles.divider} />

              <Link to="/login" className={styles.link} onClick={this.close}>Login/ Signup</Link>
            </div>
          </nav>
        </>}
      </div>)
    );
  }

}