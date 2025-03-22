import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsEnvelope, BsFillChatDotsFill, BsMailbox, BsMailbox2, BsWhatsapp } from "react-icons/bs";
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
const Contact = () => {
  return (
    <div id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          {/* <span className="orangeText">Our Contact Us</span> */}
          <span className="primaryText">Contact the best builders in Chennai</span>
          <span className="secondaryText">
            What are you waiting for? Call us now.
          </span>

          <div className="flexColCenter contactModes">
            {/* first row */}
            <div className="flexCenter row">
              <div className="flexColCenter mode">
                <div className="flexCenter">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColCenter detail">
                    <span className="contactTitle">Call</span>
                  </div>
                </div>
                <div className="flexCenter button" onClick={() => window.open("tel:+917358188299", "_self")}>Call now</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexCenter">
                  <div className="flexCenter icon">
                    <BsWhatsapp size={25} />
                  </div>
                  <div className="flexColCenter detail">
                    <span className="contactTitle">Chat</span>
                  </div>
                </div>
                <div className="flexCenter button" onClick={() => window.open('https://wa.me/7358188299?text=Hello%2C%20Yesudoss%20Builders!', '_blank')}>Chat now</div>
              </div>
            </div>

            {/* second row */}
            <div className="flexStart row">
              <div className="flexColCenter mode-email">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsEnvelope size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="contactTitle">Email</span>
                    <span className="contactText">yesudossbuilders@gmail.com</span>
                  </div>
                </div>
                <div className="flexCenter button" 
                onClick={() => window.open(`mailto:yesudossbuilders@gmail.com?subject=Enquiry%20Regarding%20Construction%20Services&body=Dear%20Yesudoss%20Builders,%0A%0A[Please%20provide%20your%20enquiry%20details%20here]%0A%0AName:%0AContact:%0AService%20Required:%0ADescription:`)}
                target="_blank"
                rel="noopener noreferrer">Write Email</div>
              </div>

              {/* <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter button">Message now</div>
              </div> */}
            </div> 
          </div>
        </div>

        {/* right side */}
        <div className="flexEnd c-right">
          <div className="image-container">
            <img src="./contact-us2.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
