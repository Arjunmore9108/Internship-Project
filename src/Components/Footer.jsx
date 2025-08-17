import React from "react";
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content-bg">
                <div className="footer-content1">
                    <p>About us</p>
                    <div className="footer-logo">
                        <img className="footer-logo-img" src="CompanyLogo.png" alt="Footer Logo" />
                    </div>
                    <p>THANE,MAHARASHTRA,INDIA-400612</p>
                    <div className="socialMedia-logos">
                        <img className="socialMedia-logo-img" src="facebook.png" alt="Facebook Logo" />
                        <img className="socialMedia-logo-img" src="instagram.png" alt="Instagram Logo" />
                        <img className="socialMedia-logo-img" src="twitter.png" alt="Twitter Logo" />
                    </div>
                    <p>Contact us</p>
                    <p>customersupport@pcverse.com</p>
                    <p> +91 9176008080</p>
                </div>
            </div>
            <div className="footer-content2">
                <div className="InnerBox">
                    <h2 style={{color:"orange", textAlign:"center",paddingTop:"10px"}}>Disclaimer</h2>
                <p>This website is developed for educational purposes only as part of a college assignment.
All product names, logos, brands, and images used in this project are the property of their respective owners.
No copyright infringement is intended. The images and content are used solely for demonstration and learning.
                </p>
                <hr>
                </hr>
                <p>
                    This site is non-commercial and not affiliated with any of the brands or companies mentioned.
All rights remain with their respective copyright holders.
                </p>
                </div>
            </div>
        </div>
    );
}
export default Footer;