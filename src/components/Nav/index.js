import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import styles from "./styles.module.css";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Nav() {
 /* Change(option)
  {
    localStorage.setItem('lang', option.target.value);
    window.location.reload();
  }*/
  return (
    <>
      <div className="container-fluid topbar">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">  {/* Social icons */}
                  <div className="social-icons social-icons-border float-left mobilesocial">
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
                  {/* end: Social icons */}</div>
            <div className="col-sm-2"><select className="language">
<option>English</option>
<option>Hindi</option>

            </select>
</div>
            <div className="col-sm-2">
              {" "}
              <Link to="">
                <button
                  type="button"
                  style={{ margin: "0px" }}
                  className="Topcall call"
                >
                  <span style={{ fontSize: '16px'}}>  <i className="fa fa-phone" /> +91 88986-64466</span>
                </button>
              </Link>{" "}
            </div>
            <div className="col-sm-2">
              {" "}
              <Link to="/book">
                <button
                  type="button"
                  style={{ margin: "0px" }}
                  className="btn btn-rounded btn-reveal btn-sm btn-success test"
                >
                  <span>Book Test</span>
                  <i className="fa fa-arrow-right"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fulid">
        <header className={styles.header}>
          <div className={styles.logo}>
            <Link to="/home">
              <img src="/images/logo.png" alt="NUTECH Logo" height="55px" />
            </Link>
          </div>
          <DesktopNav />
          <MobileNav />
        </header>
      </div>
      <div className={styles.placeholder} />
    </>
  );
}
