import React from "react";
import "./About.scss";

const About = () => {
    return (
        <div className="about" id="about">
            <div className="container-fluid">
                <div className="row about_row">
                    <div className="item1 col-xl-6 col-lg-6 col-md-12">
                        <div className="about_img">
                            <img src="Images/about-1.jpg" alt="" />
                        </div>
                    </div>
                    <div className="item2 col-xl-6 col-lg-6 col-md-12">
                        <div className="about_content">
                            <h5 className="subtitle">About our gym</h5>
                            <h2 className="title">Transforming Lives Through Fitness Excellence</h2>
                            <p className="para">
                                Founded with a passion for health and wellness, our state-of-the-art facility combines
                                modern equipment with expert coaching to help you achieve your fitness goals. We believe in
                                creating a supportive community where members of all fitness levels can thrive. Our
                                personalized approach ensures that every workout brings you one step closer to becoming the
                                best version of yourself.
                            </p>
                            <div className="about_btn">
                                <a href="">
                                    <button>
                                        About us
                                        <span></span>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
