import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth f-container">
        
        {/* 1. Left Column: Company Info */}
        <div className="flexColStart f-left">
          <span className="company-name-wrap-text">
            <img src="./Yesudoss_Logo.png" alt="logo" width={60} />
            <p className="footerText">Yesudoss Builders</p>
          </span>
          <span className="footerSecondaryText f-aboutText">
            Building spaces that blend quality with innovation. <br />
            Creating lasting value for generations to come.
          </span>
        </div>

        {/* 2. Services Column */}
        <div className="flexColStart f-services">
          <span className="footerMainText">Our Services</span>
          <div className="services-list">
            <span>Building Construction</span>
            <span>2D &amp; 3D Printing</span>
            <span>Pre-Consultancy</span>
            <span>Interiors &amp; Paintings</span>
            <span>Building Renovation</span>
          </div>
        </div>

        {/* 3. Middle Column: Contact Info */}
        <div className="flexColStart f-middle">
          <span className="footerMainText">Contact Info</span>
          <span className="footerSecondaryText">Phone: +91 73581 88299</span>
          <span className="footerSecondaryText">Email: yesudossbuilders@gmail.com</span>
          <span className="footerSecondaryText">Working Hours: Mon - Sat, 9 AM - 6 PM</span>
        </div>

        {/* 4. Right Column: Address + Map */}
        <div className="flexColStart f-right">
          <span className="footerMainText">Address</span>
          <span className="footerSecondaryText">
            No.7, 9th street, Nehru Colony, <br />
            Palavanthangal, Chennai - 600 114
          </span>
          <div className="map-container">
            {/* Replace src with your actual Google Maps embed link */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.838172346292!2d80.1833687!3d12.9822003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f002c7dcdfd%3A0xe33ca96d8bdba3fb!2sYesudoss%20Builders!5e0!3m2!1sen!2sin!4v1741538459801!5m2!1sen!2sin" width="100%" height="250" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
          </div>
        </div>
      </div>

      {/* Optional Footer Bottom for Copyright */}
      <div className="f-bottom flexCenter">
        <span className="footerSecondaryText">
          © {new Date().getFullYear()} Yesudoss Builders. All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
