import React, { useState } from "react";
import "./BMI.scss";

const BMI = () => {

    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, setBmi] = useState("");

    const calculateBMI = (e) => {
        e.preventDefault();
        if (weight && height) {
            const heightInMeters = height / 100; 
            const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
            setBmi(bmiValue);
        }
    };

    const getBMIStatus = (bmi) => {
        if (bmi < 18.5) return 'Underweight - "You might need to gain some weight. A balanced diet and strength training can help."';
        if (bmi >= 18.5 && bmi < 24.9) return 'Normal Weight - "Great job! Maintain a healthy lifestyle with a balanced diet and regular exercise."';
        if (bmi >= 25 && bmi < 29.9) return 'Overweight - "Consider adopting a healthier diet and more physical activity to stay fit."';
        return "Obese - It's important to take steps toward a healthier lifestyle. Consult a nutritionist and engage in regular exercise.";
    };

    return (
        <div className="bmi" id="bmi">
            <div className="container-fluid">
                <div className="row bmi_row">
                    <div className="item1 col-xl-6 col-lg-6 col-md-12">
                        <div className="bmi_title">
                            <h3 className="title">Calculate your bmi</h3>
                            <p className="para">
                                The Body Mass Index (BMI) Calculator calculates body mass index from your Weight and Height.
                            </p>
                        </div>
                        <form className="bmi_form" onSubmit={calculateBMI}>
                            <div className="row first_row">
                                <div className="item-1 col-xl-6 col-lg-6 col-md-6">
                                    <input
                                        type="number"
                                        placeholder="Weight (kg)"
                                        required
                                        value={weight}
                                        onChange={(e) => setWeight(e.target.value)}
                                        min="1"
                                    />
                                </div>
                                <div className="item-2 col-xl-6 col-lg-6 col-md-6">
                                    <input
                                        type="number"
                                        placeholder="Height (cm)"
                                        required
                                        value={height}
                                        onChange={(e) => setHeight(e.target.value)}
                                        min="1"
                                    />
                                </div>
                            </div>
                            <div className="row second_row">
                                <div className="item-1 col-xl-6 col-lg-6 col-md-6">
                                    <button type="submit">Calculate</button>
                                </div>
                                <div className="item-2 col-xl-6 col-lg-6 col-md-6">
                                    <input type="text" placeholder="BMI Result" value={bmi} readOnly />
                                    
                                </div>
                            </div>
                        </form>
                        <div className="message">
                            <h6>{bmi ? getBMIStatus(bmi) : "Enter values to calculate"}</h6>
                        </div>
                    </div>
                    <div
                        className="item2 col-xl-6 col-lg-6 col-md-12"
                        style={{
                            backgroundImage: `url('/Images/bmi-4.jpg')`,
                            backgroundSize: "cover",
                            backgroundPosition: "left",
                        }}
                    >
                        <div className="shape-1"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BMI;
