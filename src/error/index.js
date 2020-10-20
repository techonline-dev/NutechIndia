import React from 'react';
import Nav from './../components/Nav';
import FooterComponent from './../components/FooterComponent';

class ErrorComponent extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <section className="m-t-80 p-b-150">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="page-error-404">{this.props.location.state ? this.props.location.state.status : 404}</div>
              </div>
              <div className="col-md-6">
                <div className="text-left">
                  <h1 className="text-medium">{this.props.location.state ? this.props.location.state.message : 'Ooops, This Page Could Not Be Found!'}</h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FooterComponent />
      </div>
    )
  }
}

export default ErrorComponent;