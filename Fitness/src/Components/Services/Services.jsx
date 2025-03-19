import React from "react";
import "./Services.scss";

const Services = () => {
    const Items = [
        {
            icon: "bx bx-dumbbell",
            title: "Modern Equipment",
            description:
                "Train with state-of-the-art fitness machines and free weights designed for optimal results and safety.",
        },
        {
            icon: "bx bx-user-voice",
            title: "Personal Training",
            description:
                "One-on-one coaching with certified trainers who will guide and motivate you through personalized workouts.",
        },
        {
            icon: "bx bx-calendar-check",
            title: "Fitness Program",
            description:
                "Structured workout plans tailored to improve overall strength, endurance, and flexibility for everyday health.",
        },
        {
            icon: "bx bx-line-chart-down",
            title: "Weight Loss Program",
            description:
                "Comprehensive approach combining cardio, strength training, and nutrition guidance to help you shed unwanted pounds.",
        },
        {
            icon: "bx bx-body",
            title: "Body Building Training",
            description:
                "Specialized hypertrophy-focused routines designed to increase muscle mass and sculpt your physique.",
        },
        {
            icon: "bx bx-heart-circle",
            title: "Cardio",
            description:
                "Heart-pumping workouts that improve cardiovascular health, burn calories, and boost your endurance.",
        },
        {
            icon: "bx bx-trending-up",
            title: "Weight Gaining Program",
            description:
                "Strategic training and nutrition plans for hardgainers looking to increase muscle mass and healthy weight.",
        },
        {
            icon: "bx bx-time-five",
            title: "Special Timing for Ladies",
            description:
                "Dedicated women-only hours providing a comfortable and supportive environment for female members.",
        },
    ];

    return (
        <div className="services" id="services" style={{ backgroundImage: `url(Images/service-7.jpg)` }}>
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
                                    <i className={item.icon}></i>
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
