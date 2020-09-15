import React, { Component } from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


export class Services extends Component {
  render() {
    return (
      <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <h3>
              Skill Development Online Live Programs
            </h3>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <Card className="service-card">
                <CardImg top width="100%" src="/img/services/photoshop.jpg" alt="Card image cap" />
                <CardBody className="service-card-body">
                  <CardTitle className="service-card-title">Adobe Photoshop & Illustartor</CardTitle>
                  <CardSubtitle>Master Course For Beginners</CardSubtitle>
                  <hr></hr>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> 
                  <a 
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc3npukOAHKtDgw2tElKHH21cDdSqCiCwj-y_vMSXrNFX_wTg/viewform?usp=sf_link">
                  <Button>
                  Apply
                  </Button>
                  </a>
                </CardBody>
              </Card>
            </div>
            <div className="col-lg-4">
              <Card className="service-card">
                <CardImg top width="100%" src="/img/services/dsPython.jpg" alt="Card image cap" />
                <CardBody className="service-card-body">
                  <CardTitle className="service-card-title">Data Science With Python</CardTitle>
                  <CardSubtitle>For Beginners</CardSubtitle>
                  <hr></hr>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  <a 
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc3npukOAHKtDgw2tElKHH21cDdSqCiCwj-y_vMSXrNFX_wTg/viewform?usp=sf_link">
                  <Button>
                  Apply
                  </Button>
                  </a>
                </CardBody>
              </Card>
            </div>
            <div className="col-lg-4">
              <Card className="service-card">
                <CardImg top width="100%" src="/img/services/mlPython.jpg" alt="Card image cap" />
                <CardBody className="service-card-body">
                  <CardTitle className="service-card-title">Machine Learning with Python</CardTitle>
                  <CardSubtitle>For Beginners</CardSubtitle>
                  <hr></hr>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  <a 
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc3npukOAHKtDgw2tElKHH21cDdSqCiCwj-y_vMSXrNFX_wTg/viewform?usp=sf_link">
                  <Button>
                  Apply
                  </Button>
                  </a>
                </CardBody>
              </Card>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <Card className="service-card">
                <CardImg top width="100%" src="/img/services/uiUx.png" alt="Card image cap" />
                <CardBody className="service-card-body">
                  <CardTitle className="service-card-title">UI/UX development</CardTitle>
                  <CardSubtitle>For Beginners</CardSubtitle>
                  <hr></hr>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  <a 
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc3npukOAHKtDgw2tElKHH21cDdSqCiCwj-y_vMSXrNFX_wTg/viewform?usp=sf_link">
                  <Button>
                  Apply
                  </Button>
                  </a>
                </CardBody>
              </Card>
            </div>
            <div className="col-lg-4">
              <Card className="service-card">
                <CardImg top width="100%" src="/img/team/Rishabh.jpeg" alt="Card image cap" />
                <CardBody className="service-card-body">
                  <CardTitle className="service-card-title">Cloud Computing & Cloud Native development using AWS</CardTitle>
                  <hr></hr>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  <a 
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc3npukOAHKtDgw2tElKHH21cDdSqCiCwj-y_vMSXrNFX_wTg/viewform?usp=sf_link">
                  <Button>
                  Apply
                  </Button>
                  </a>
                </CardBody>
              </Card>
            </div>
            <div className="col-lg-4">
              <Card className="service-card">
                <CardImg top width="100%" src="/img/team/Rishabh.jpeg" alt="Card image cap" />
                <CardBody className="service-card-body">
                  <CardTitle className="service-card-title">Prepare for AWS Certified Cloud Practitioner Certification CLF-C01</CardTitle>
                  <hr></hr>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  <a 
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc3npukOAHKtDgw2tElKHH21cDdSqCiCwj-y_vMSXrNFX_wTg/viewform?usp=sf_link">
                  <Button>
                  Apply
                  </Button>
                  </a>
                </CardBody>
              </Card>
            </div>
          </div>
          <h3>
            Internship Programs
          </h3>
          <div className="row">
          <div className="col-lg-4">
            <Card className="service-card-internship">
              <CardImg top width="100%" src="/img/team/Rishabh.jpeg" alt="Card image cap" />
              <CardBody className="service-card-body">
                <CardTitle className="service-card-internship-title">Internity Summer Internship</CardTitle>
                <CardSubtitle>45 Days</CardSubtitle>
                <hr></hr>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Apply in April 2021</Button>
              </CardBody>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card className="service-card-internship">
              <CardImg top width="100%" src="/img/team/Rishabh.jpeg" alt="Card image cap" />
              <CardBody className="service-card-body">
                <CardTitle className="service-card-internship-title">Internity Corporate Internship</CardTitle>
                <CardSubtitle>(Exclusive)</CardSubtitle>
                <hr></hr>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Coming Soon</Button>
              </CardBody>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card className="service-card-internship">
              <CardImg top width="100%" src="/img/team/Rishabh.jpeg" alt="Card image cap" />
              <CardBody className="service-card-body">
                <CardTitle className="service-card-internship-title">Internity Winter Internship</CardTitle>
                <CardSubtitle>45 Days</CardSubtitle>
                <hr />
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Apply in Oct 2020</Button>
              </CardBody>
            </Card>
          </div>
        </div>
        </div> 
      </div>
           
      
    );
  }
}

export default Services;
