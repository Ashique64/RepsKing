import React, { useEffect } from "react";
import "./Hero.scss";

const Hero = () => {

    return (
        <div id="hero" className="hero" style={{backgroundImage:`url(Images/hero-3.png)`}}>
            <div className="content">
                <h5> Trainer name</h5>
                {/* <h1 className="title">Shape your body shape your future</h1> */}
                <h1 className="title">You have a great start for your fitness</h1>
                <div className="btn_items col-xl-6 col-lg-6 col-md-12">
                    <a href="#pricing">
                        <button className="btn-1">Become a member</button>
                    </a>
                    <a href="">
                        <button className="btn-2">
                            <i className="bx bx-play"></i>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
