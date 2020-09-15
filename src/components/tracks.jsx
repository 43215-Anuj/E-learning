import React, { Component } from 'react';

export default class Tracks extends Component {
    render(){
        return(
            <div id="track" className="text-center">
                <div className="track-img">
                    <img src="img/track.png" alt="tracks" />
                    <div className="overlay">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-10 col-md-offset-1 section-title">
                                    <h2>Choose Your Track</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="track-data">
                                        <div className="track-name">
                                        <h3>1. Skill Development - Ideal for you if you are</h3>
                                        </div>
                                        <div className="track-info">
                                            <ul>
                                                <li>- Pursuing bachelors</li>
                                                <li>- Change of Career or Technology or Learn new Skill</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="track-data-center">
                                        <div className="track-name">
                                        <h3>3. Apply For Jobs - if you have completed either track 1 or 2</h3>
                                        </div>
                                        <div className="track-info">
                                            <ul>
                                                <li>- You can apply for Jobs available with Internity Partner Organisations.</li>
                                                <li>- You will be given preference and your resume will be shared with organisations until you are placed.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="track-data">
                                        <div className="track-name">
                                        <h3>2. Internship - Ideal for you if you are already Skilled and ready</h3>
                                        </div>
                                        <div className="track-info">
                                        <ul>
                                            <li>- To work industrial problems</li> 
                                            <li>- To get hands on experience </li>
                                            <li>- To get pre-placement offers </li>
                                            <li>- To learn open source software</li>
                                            <li>- To be ready for professional career</li>
                                            <li>- You will be given preference and your resume will be shared with organisations until you are placed.</li>
                                        </ul>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}