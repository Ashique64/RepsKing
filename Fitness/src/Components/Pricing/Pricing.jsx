import React from "react";
import "./Pricing.scss";

const Pricing = () => {
    const pricingPlans = [
        {
            title: "Couple Package",
            price: "$ 149",
            type: "Couple Membership",
            features: [
                "Gym access for two",
                "Personal trainer for both",
                "Access to all classes",
                "Customized workout plans",
                "Free nutrition consultation",
                "Exclusive partner discounts",
            ],
        },
        {
            title: "3 Months Package",
            price: "$ 79",
            type: "Short-Term Access",
            features: [
                "Gym access for 3 months",
                "Trainer support",
                "Strength & cardio sessions",
                "Group workout sessions",
                "Flexible workout hours",
                "Discount on 6-month renewal",
            ],
        },
        {
            title: "6 Months Package",
            price: "$ 129",
            type: "Half-Year Access",
            features: [
                "Gym access for 6 months",
                "Trainer assistance",
                "All group classes included",
                "Weight training sessions",
                "Custom workout plans",
                "Discount on 1-year renewal",
            ],
        },
        {
            title: "1 Year Package",
            price: "$ 199",
            type: "Full-Year Access",
            features: [
                "Gym access for 12 months",
                "Unlimited personal training",
                "All classes included",
                "Advanced fitness tracking",
                "Priority access to events",
                "Exclusive gym merchandise",
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
                        <div key={index} className="col-xl-3 col-lg-3 col-md-12 pricing_col">
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
