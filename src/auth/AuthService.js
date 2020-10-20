import config from '../config';
let download = require('downloadjs');
export default class AuthService {
  constructor(domain) {
    this.domain = domain || config.url;
    this.fetch = this.fetch.bind(this);
    this.login = this.login.bind(this);
    // this.getProfile = this.getProfile.bind(this);
  }

  async login(email, password) {
    try{
      const res = await this.fetch(`${this.domain}/user/login`, {
        method: 'POST',
        body: JSON.stringify({
          email,
          password
        })
      });
      if(res.token) this.setToken(res.token);
      return res;
    } catch(e) {
      console.log(e);
    }
  }

  async signup(fullName, email, password) {
    try{
      const res = await this.fetch(`${this.domain}/user/signup`, {
        method: 'POST',
        body: JSON.stringify({
          fullName,
          email,
          password
        })
      });
      return res;
    } catch(e) {
      console.log(e);
    }
  }

  async lostPassword(email) {
    try {
      const res = await this.fetch(`${this.domain}/user/forgot-password`, {
        method: 'POST',
        body: JSON.stringify({
          email
        })
      });
      return res;
    } catch(e) {
      console.log(e);
    }
  }

  async changePassword(token, password) {
    try{
      const res = await this.fetch(`${this.domain}/user/change-password/${token}`, {
        method: 'POST',
        body: JSON.stringify({
          password
        })
      });
      return res;
    } catch(e) {
      console.log(e);
    }
  }

  async verification(token) {
    try{
      const res = await this.fetch(`${this.domain}/user/verification/${token}`, {
        method: 'GET'
      });
      return res;
    } catch(e) {
      console.log(e);
    }
  }

  async checkCoupon(couponCode) {
    try{
      const res = await this.fetch(`${this.domain}/coupon/${couponCode}`, {
        method: 'GET'
      });
      return res;
    } catch(e) {
      console.log(e);
    }
  }

  async book(details) {
    try{
      const res = await this.fetch(`${this.domain}/order/book-test`, {
        method: 'POST',
        body: JSON.stringify(details)
      });
      return res;
    } catch(e) {
      console.log(e);
    }
  }

  async rzInitiate(id, userEmailId) {
    try{
      const res = await this.fetch(`${this.domain}/payment/initiate`, {
        method: 'POST',
        body: JSON.stringify({
          id,
          userEmailId
        })
      });
      return res;
    } catch(e) {
      console.log(e);
    }
  }

  async rzConfirmation(obj) {
    try{
      const res = await this.fetch(`${this.domain}/payment/confirmation`, {
        method: 'POST',
        body: JSON.stringify(obj)
      });
      return res;
    } catch(e) {
      console.log(e);
    }
  }

  async getReport(id) {
    try{
      let url = `${this.domain}/order/fetch-report/${id}`;
      return fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': this.getToken()
        }
      }).then(function(resp) {
        if(resp.status===401) throw new Error();
        return resp.blob();
      }).then(function(blob) {
        download(blob);
      });
    } catch(e) {
      console.log(e);
    }
  }

  async contactUs(name, email, contact, comment) {
    try{
      const res = await this.fetch(`${this.domain}/user/contact-us`, {
        method: 'POST',
        body: JSON.stringify({
          name,
          email,
          contact,
          comment
        })
      });
      return res;
    } catch(e) {
      console.log(e);
    }
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken() // GEtting token from localstorage
    return !!token; // && !this.isTokenExpired(token) // handwaiving here
  }

  // isTokenExpired(token) {
  //   try {
  //     const decoded = decode(token);
  //     if (decoded.exp < Date.now() / 1000) { // Checking if token is expired. N
  //       return true;
  //     }
  //     else
  //       return false;
  //   }
  //   catch (err) {
  //     return false;
  //   }
  // }

  setToken(token) {
    localStorage.setItem('id_token', token);
    // localStorage.setItem('id_email', email);
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token')
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
    // localStorage.removeItem('id_email');
  }

  // getEmail() {
  //   return localStorage.getItem('id_email');
  // }
  // getProfile() {
  //   // Using jwt-decode npm package to decode the token
  //   return decode(this.getToken());
  // }


  async fetch(url, options) {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    if (this.loggedIn()) {
      headers['Authorization'] = this.getToken()
    }
    try{
      let res = await fetch(url, {
        headers,
        ...options
      });
      let status = res.status;
      let json = await res.json();
      let response = {
        ...json,
        status
      }
      return response;
    } catch(e) {
      console.log(e);
    }
    // return fetch(url, {
    //   headers,
    //   ...options
    // })
    //   .then(this._checkStatus)
    //   .then(response => response.json())
  }

  _checkStatus(response) {
    // raises an error in case response status is not a success
    if (response.status >= 200 && response.status < 300) { // Success status lies between 200 to 300
      return response
    } else {
      var error = new Error(response.statusText)
      error.response = response;
      throw error;
    }
  }
}