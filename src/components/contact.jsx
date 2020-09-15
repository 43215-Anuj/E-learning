import React, { Component } from "react";

export class Contact extends Component {
  render() {
    return (
      <div>
        <div id="contact">
          <div className="container">
            <div className="col-md-4">
              <div className="row">
                <div className="section-title">
                  <h2>Internity</h2>
                  <p>
                    Together We Can
                  </p>
                </div>
                <img src="img/internity-logo.png" alt="logo" />
              </div>
            </div>
            <div className="col-md-4 text-center">
              <h3>Move To </h3>
                <p><a href="#features" className="page-scroll">Features</a></p>
                <p><a href="#about" className="page-scroll">About Us</a></p>
                <p><a href="#services" className="page-scroll">Our Services</a></p>
                <p><a href="#team" className="page-scroll">Faculty</a></p>
                <p><a href="#portfolio" className="page-scroll">Gallery</a></p>
            </div>
            <div className="col-md-3 col-md-offset-1 contact-info">
              <div className="contact-item">
                <h3>Contact Info</h3>
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Address
                  </span>
                  {this.props.data ? this.props.data.address : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> Phone
                  </span>{" "}
                  {this.props.data ? this.props.data.phone : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> Email
                  </span>{" "}
                  {this.props.data ? this.props.data.email : "loading"}
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="social">
                  <ul>
                    <li>
                      <a
                        href={this.props.data ? this.props.data.facebook : "/"}
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href={this.props.data ? this.props.data.twitter : "/"}>
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href={this.props.data ? this.props.data.youtube : "/"}>
                        <i className="fa fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <div className="container text-center">
            <p>
              &copy; 2020 all rights reserved. Design by{" "}
              <a href="http://www.templatewire.com" rel="nofollow">
                Internity Team
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
