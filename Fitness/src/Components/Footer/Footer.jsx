import React from "react";
import "./Footer.scss";

const Footer = () => {
    const socialIcons = [
        {
            icon: "bx bxl-facebook",
            link: "https://www.facebook.com/",
        },
        // {
        //     icon: "bx bxl-twitter",
        //     link: "https://twitter.com/",
        // },
        {
            icon: "bx bxl-instagram",
            link: "https://www.instagram.com/",
        },
        {
            icon: "bx bxl-youtube",
            link: "https://www.youtube.com/",
        },
    ];

    const footerItems = [
        {
            title: "OPEN HOUR",
            items: [
                { name: "Monday 11am-7pm" },
                { name: "Tuesday-Friday 11am-8pm" },
                { name: "Saturday 10am-6pm" },
                { name: "Sunday 11am-6pm" },
            ],
        },
        {
            title: "COMPANY",
            items: [
                { name: "Home", id: "hero" },
                { name: "About", id: "about" },
                { name: "Services", id: "services" },
                { name: "Pricing", id: "pricing" },
            ],
        },
        // {
        //     title: "Others",
        //     items: [{name: "FAQs"}, {name: "Privacy Policy"}, {name: "Terms & Conditions"}, {name:"Feedback"}],
        // },
    ];

    return (
        <>
            <div className="footer" id="footer">
                <div className="container">
                    <div className="row logo_row">
                        <div className="col-12 logo_col">
                            <div className="logo_items">
                                <div className="logo">
                                    <a href="">
                                        <img src="/Images/Reps-Logo-2.PNG" alt="" />
                                    </a>
                                </div>
                                <div className="social">
                                    {socialIcons.map((item, index) => (
                                        <a href={item.link} key={index}>
                                            <i className={item.icon}></i>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer_content">
                        <div className="row footer_content_row">
                            <div className="footer_col1 col-xl-6 col-lg-6 col-md-6">
                                <div className="row col1_row">
                                    {footerItems.map((item, index) => (
                                        <div key={index} className="col-lg-6 col-md-4 footer_content_col">
                                            <div className="items">
                                                <div className="title">
                                                    <h4>{item.title}</h4>
                                                </div>
                                                <div className="item_list">
                                                    <ul>
                                                        {item.items.map((listItem, index) => (
                                                            <li key={index}>
                                                                <a href={listItem.id ? `#${listItem.id}` : "#"}>
                                                                    {listItem.name}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="footer_col2 col-xl-6 col-lg-6 col-md-6">
                                <div className="row location_items">
                                    <div className="item1 col-xl-6 col-lg-6 col-md-6">
                                        <i className="bx bx-phone"></i>
                                        <span>9061195387, 9074284959</span>
                                    </div>
                                    <div className="item2 col-xl-6 col-lg-6 col-md-6">
                                        <i className="bx bx-envelope"></i>
                                        <span>repskingfitnessstudio@gmail.com</span>
                                    </div>
                                    <div className="item3 col-xl-6 col-lg-6 col-md-6">
                                        <i className="bx bx-map"></i>
                                        <a style={{textDecoration: "none"}} href="https://maps.app.goo.gl/A2Gxs3btnLAwEUt19">
                                            <span>
                                                Velappaya, China Bazaar, <br /> Near Radio Shop, Killannur
                                            </span>
                                        </a>
                                    </div>
                                    <div className="item4 col-xl-6 col-lg-6 col-md-6">
                                        <i className="bx bxl-instagram"></i>
                                        <span>repsking_fitness_studio</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copy_right">
                    <div className="container">
                        <div className="col-xl-12 copy_col">
                            <div className="copy_content">
                                <div className="item">
                                    <span>© 2025 Tortillon website. All Rights Reserved.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
