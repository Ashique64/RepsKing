import React from "react";
import "./Pricing.scss";

const Pricing = () => {
    const pricingPlans = [
        {
            title: "Class Drop In",
            price: "$ 39",
            type: "Single Class",
            features: [
                "Access to one class",
                "No membership required",
                "Flexible timing",
                "Professional trainers",
                "Great for beginners",
                "Pay per session",
            ],
        },
        {
            title: "12 Month Unlimited",
            price: "$ 99",
            type: "Unlimited Access",
            features: [
                "Free riding",
                "Unlimited equipments",
                "Personal trainer",
                "Weight losing classes",
                "Month to month payment",
                "No time restriction",
            ],
        },
        {
            title: "6 Month Unlimited",
            price: "$ 59",
            type: "Limited Time Offer",
            features: [
                "Gym access for 6 months",
                "Trainer support",
                "Access to all classes",
                "Strength training",
                "Flexible workout hours",
                "Discount on renewals",
            ],
        },
    ];

    return (
        <div className="pricing" id="pricing" style={{ backgroundImage: `url(Images/pricing-1.jpg)` }}>
            <div className="container-fluid">
                <div className="row title_row">
                    <h3 className="subtitle">our plans</h3>
                    <h2 className="title">Choose your pricing plan</h2>
                </div>

                <div className="row pricing_row">
                    {pricingPlans.map((item, index) => (
                        <div className="col-xl-4 col-lg-4 col-md-12 pricing_col">
                            <div className="card">
                                <h4 className="title">{item.title}</h4>
                                <div className="pricing_items">
                                    <h1>{item.price}</h1>
                                    <h5>{item.type}</h5>
                                </div>
                                <div className="features">
                                    <ul>
                                        {item.features.map((feature, index) => (
                                            <li key={index}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Pricing;
