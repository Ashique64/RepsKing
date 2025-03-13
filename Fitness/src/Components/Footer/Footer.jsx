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
        }
    ];

    const footerItems = [
        {
            title: "OPEN HOUR",
            items: [
                {name: "Monday 11am-7pm"},
                {name: "Tuesday-Friday 11am-8pm"},
                {name: "Saturday 10am-6pm"},
                {name: "Sunday 11am-6pm"},
            ],
        },
        {
            title: "COMPANY",
            items: [
                { name: "Home", id: "hero" }, 
                { name: "About", id: "about" }, 
                { name: "Services", id: "services" }, 
                { name: "Pricing", id: "pricing" }
            ],
        },
        {
            title: "Others",
            items: [{name: "FAQs"}, {name: "Privacy Policy"}, {name: "Terms & Conditions"}, {name:"Feedback"}],
        },
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
                                        Logo
                                        <img src="" alt="" />
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
                            {footerItems.map((item, index) => (
                                <div key={index} className="col-lg-3 col-md-4 footer_content_col">
                                    <div className="items">
                                        <div className="title">
                                            <h4>{item.title}</h4>
                                        </div>
                                        <div className="item_list">
                                            <ul>
                                                {item.items.map((listItem, index) => (
                                                    <li key={index}>
                                                        <a href={listItem.id ? `#${listItem.id}` : "#"}>{listItem.name}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
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
