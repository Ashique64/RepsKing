import React from "react";
import "./Hero.scss";

const Hero = () => {
    return (
        <div id="hero" className="hero">
            <div className="content">
                <h5>—— Trainer name</h5>
                <h1 className="title">Shape your body shape your future</h1>
                <div className="btn_items col-xl-6 col-lg-6 col-md-12">
                    <button className="btn-1">Become a member</button>
                    <button className="btn-2">
                        <i className="bx bx-play"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;


    