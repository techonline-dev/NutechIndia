import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import AuthService from "./auth/AuthService";
import HomeComponent from "./components/HomeComponent";
import AboutComponent from "./components/AboutComponent";
import BlogComponent from "./components/BlogComponent";
import GalleryComponenet from "./components/GalleryComponent";
import NewsComponent from "./components/NewsComponent";
import physiciansfaqs from "./components/physiciansfaqs";
import patientsfaqs from "./components/patientsfaqs";
import seromarktest from "./components/seromarktest";
import Contact from "./components/Contact";
import Diagnostictests from "./components/Diagnostictests";
import AbouttheProstate from "./components/AbouttheProstate";
import Publications from "./components/Publications";
import Totalpsa from "./components/Totalpsa";
import OurTechnology from "./components/OurTechnology";
import About from "./components/About";
import team from "./components/team";
import LoginComponent from "./components/LoginComponent";
import SignupComponent from "./components/SignupComponent";
import DashboardComponent from "./components/DashboardComponent";
import BookComponent from "./components/BookComponent";
import Mission from "./components/Mission";
import PSA from "./components/PSA";
import Symptoms from "./components/Symptoms";
import CheckoutComponent from "./components/CheckoutComponent";
import VerificationComponent from "./components/VerificationComponent";
import ChangePasswordComponent from "./components/ChangePasswordComponent";
import ErrorComponent from "./error";
import { loadReCaptcha } from "react-recaptcha-v3";
import config from "./config";

class App extends Component {
  componentDidMount() {
    loadReCaptcha(config.sitekey);
  }
  render() {
    let Auth = new AuthService();
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={HomeComponent} />
            <Route path="/home" exact component={HomeComponent} />
            <Route path="/about" exact component={AboutComponent} />
                        <Route path="/mission" exact component={Mission} />
                        <Route path="/psa-test" exact component={PSA} />
 <Route path="/symptoms" exact component={Symptoms} />
            <Route path="/gallery" exact component={GalleryComponenet} />
                        <Route path="/team" exact component={team} />
            <Route path="/contact" exact component={Contact} />

            <Route path="/news" exact component={NewsComponent} />

            <Route path="/diagnostictests" exact component={Diagnostictests} />
            <Route path="/physicians/faqs" exact component={physiciansfaqs} />
            <Route
              path="/totalpsa"
              exact
              component={Totalpsa}
            />

            <Route
              path="/publications"
              exact
              component={Publications}
            />

         
            <Route
              path="/AbouttheProstate"
              exact
              component={AbouttheProstate}
            />
            <Route path="/patients/about" exact component={About} />
            <Route path="/patients/faqs" exact component={patientsfaqs} />
            <Route
              path="/physicians/seromarktest"
              exact
              component={seromarktest}
            />
            <Route path="/Our-Technology" exact component={OurTechnology} />
            <Route path="/blog" exact component={BlogComponent} />
            <Route path="/login" exact component={LoginComponent} />
            <Route path="/signup" exact component={SignupComponent} />
            <Route path="/dashboard" exact component={DashboardComponent} />
            <Route path="/book" exact component={BookComponent} />
            <Route path="/checkout" exact component={CheckoutComponent} />
            <Route
              path="/verification/:token"
              exact
              component={VerificationComponent}
            />
            <Route
              path="/changepassword"
              exact
              component={ChangePasswordComponent}
            />
            <Route
              path="/change-password/:token"
              exact
              component={ChangePasswordComponent}
            />
            <Route
              path="/logout"
              render={() => {
                Auth.logout();
                return <Redirect to={{ pathname: "/login" }} />;
              }}
            />
            <Route path="*" component={ErrorComponent} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
