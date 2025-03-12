import React from "react";
import "./Services.scss";

const Services = () => {
    const Items = [
        {
            icon: "bx bx-dumbbell",
            title: "Modern Equipment",
            description: "Train with top-tier fitness equipment designed to maximize performance and results.",
        },
        {
            icon: "bx bx-bowl-hot",
            title: "Healthy Nutrition Plan",
            description: "A well-balanced diet plan tailored to fuel your workouts and boost recovery.",
        },
        {
            icon: "bx bx-run",
            title: "Training Plan",
            description: "Expert-designed workouts to help you achieve your fitness goals efficiently.",
        },
        {
            icon: "bx bx-customize",
            title: "Unique to Your Needs",
            description: "Personalized fitness programs that cater to your specific body type and goals.",
        },
    ];

    return (
        <div className="services" id="services">
            <div className="container-fluid">
                <div className="row title_row">
                    <h3 className="subtitle">Why choose us</h3>
                    <h2 className="title">push your limits forward</h2>
                </div>
                <div className="row service_row">
                    {Items.map((item, index) => (
                        <div key={index} className="service_col col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="service_item">
                                <div className="icon">
                                    <i class={item.icon}></i>
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
