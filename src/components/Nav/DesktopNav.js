import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import styles from "./styles.module.css";
import Dropdown from "./Dropdown";
import jwt from "jsonwebtoken";
import AuthService from "./../../auth/AuthService";

let Auth = new AuthService();

export default function DesktopNav() {
  let decoded = jwt.decode(Auth.getToken());
  return Auth.loggedIn() ? (
    <nav className={styles.nav}>
      <Link to="/book">
        <button
          type="button"
          style={{ margin: "0px" }}
          className="btn btn-rounded btn-reveal btn-sm btn-success"
        >
          <span>Book Test</span>
          <i className="fa fa-arrow-right"></i>
        </button>
      </Link>
      <Link to="/dashboard" className={styles.link}>
        Tests Status
      </Link>
      <Dropdown
        title="Company"
        links={[
          { to: "/home#mission", tag: "Mission" },
          { to: "/home#ayurvedic", tag: "Ayurvedic Treatment" },
          { to: "/home#facts", tag: "Facts" },
          { to: "/home#gallery", tag: "Gallery" },
          { to: "/home#services", tag: "Services" },
        ]}
      />
      <Dropdown
        title="About Us"
        links={[
          { to: "/about#whoweare", tag: "Who we are" },
          { to: "/about#faqs", tag: "FAQs" },
          { to: "/about#resources", tag: "Resources" },
          { to: "/home#contact", tag: "Contact" },
        ]}
      />
      <Dropdown
        title={decoded.fullName.split(" ")[0]}
        custom={true}
        isLast
        links={[
          // { to: "/changepassword", tag: "Password" },
          { to: "/logout", tag: "Logout" },
        ]}
      />
    </nav>
  ) : (
    <nav className={styles.nav}>
      <Dropdown
        title="Caregivers"
        links={[
          { to: "/physicians/seromarktest", tag: "SeroMark-1 Test" },
          {
            to: "/psa-test",
            tag: "PSA Test",
          },
          { to: "/totalpsa", tag: "Limitations of PSA Test" },
          { to: "/physicians/faqs", tag: "FAQs by caregivers" },
        ]}
      />

      <Dropdown
        title="Patients"
        links={[
          { to: "/AbouttheProstate", tag: "About the Prostate" },
          {
            to: "/symptoms",
            tag: "Symptoms",
          },
          { to: "/patients/about", tag: "Prostate Cancer" },
           { to: "/diagnostictests", tag: "Diagnostic Tests" },
          { to: "/patients/faqs", tag: "FAQs by patients" },
        ]}
        />
        
 <Dropdown
        title="Our Company"
        links={[
          { to: "/about", tag: "About Us" },
          { to: "/mission", tag: "Mission" },
            { to: "/home#contact", tag: "Location" },
          {
            to: "/team", tag: "Our Team",
          },
         
        ]}
        />

        <Dropdown
        title="Publications and Gallery"
        links={[
          { to: "/news", tag: "Blogs/News" },
          { to: "/publications", tag: "Publications" },
          
             { to: "/gallery", tag: "Gallery" },
         
        ]}
        />
 <Link to="/Our-Technology" className={styles.link}>
        Our Technology 
      </Link>
      <Link to="/login" className={styles.link}>
        Login <i className="fa fa-user"></i>
      </Link>
    </nav>
  );
}
