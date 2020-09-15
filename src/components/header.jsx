import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <img src="img/internity-logo.png" alt='logo'/>
                  <p>
                    {this.props.data ? this.props.data.paragraph : "Loading"}
                  </p>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSc3npukOAHKtDgw2tElKHH21cDdSqCiCwj-y_vMSXrNFX_wTg/viewform?usp=sf_link"
                    className="btn btn-custom btn-lg page-scroll"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register Now
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
