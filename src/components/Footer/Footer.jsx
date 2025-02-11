import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
        <span className="company-name-wrapper">
            <img src="./Yesudoss_Logo.png" alt="logo" width={60} />
            <p className="orangeText">Yesudoss Builders</p>
          </span> 
          <span className="secondaryText">
          Building spaces that blend quality with innovation. <br />
          Creating lasting value for generations to come.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Address</span>
          <span className="secondaryText">No.7, 9th street, Nehru <br/> Colony, Palavanthangal, Chennai - 600 114</span>
          {/* <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
