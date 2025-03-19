import React from "react";
import Hero from "../../Components/Hero/Hero";
import About from "../../Components/About/About";
import 
Services from "../../Components/Services/Services";
import BMI from "../../Components/BMI/BMI";
import Pricing from "../../Components/Pricing/Pricing";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";

const Home = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <About />
            <Services />
            <BMI />
            <Pricing />
            <Footer />
        </>
    );
};

export default Home;
