import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
// import SearchBar from "../SearchBar/SearchBar";
import {FaStar} from 'react-icons/fa';
import { useState } from "react";

const Hero = () => {
  const [enquirerName, setEnquirerName] = useState("");
  const [enquirerContact, setEnquirerContact] = useState("");
  const [enquirerEmail, setEnquirerEmail] = useState("");
  const [serviceRequired, setServiceRequired] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Define template params as required by your EmailJS template
    const templateParams = {
      from_name: enquirerName,
      contact_number: enquirerContact,
      email: enquirerEmail,
      service: serviceRequired,
      description: serviceDescription,
    };

    // Send the email using EmailJS
    emailjs
      .send(
        'YOUR_SERVICE_ID',    // e.g. service_xxx
        'YOUR_TEMPLATE_ID',   // e.g. template_xxx
        templateParams,
        'YOUR_PUBLIC_KEY'     // e.g. user_xxx or publicKey_xxx
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Your enquiry has been submitted!');
          // Optionally clear form or set success state
        },
        (err) => {
          console.error('FAILED...', err);
          alert('There was an error sending your enquiry. Please try again.');
        }
      );
  };
  
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            {/* <div className="orange-circle" /> */}
            <motion.h1
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            >
              Where<br />
              Vision <span style={{color: "#8249d6"}}>Meets</span> 
              <br /> Craftsmanship
            </motion.h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des">
            <span>Every project is a promise of quality and dedication.</span>
            <span>We build with passion, so you can live with pride.</span>
          </div>

          {/* <SearchBar/> */}
          <span>
          <button className="button-call" onClick={() => window.open("tel:+917358188299", "_self")}>
          Call Us
              </button>
              <button className="button-outlined" onClick={() => window.open('https://wa.me/7358188299?text=Hello%2C%20Yesudoss%20Builders!', '_blank')}>
              Whatsapp Us
              </button>
              </span>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={90} end={100} duration={4} /> <span>%</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>

            <div className="flexColCenter stat">
              <span className="star-rating">
                {/* Display 5 stars */}
                <FaStar color="gold" />
                <FaStar color="gold" />
                <FaStar color="gold" />
                <FaStar color="gold" />
                <FaStar color="gold" />
              </span>
              <span className="secondaryText">Google Rating</span>
            </div>
          
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
  <motion.div
    initial={{ x: "7rem", opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{
      duration: 2,
      type: "tween",
    }}
    className="image-container"
  >
    <img src="./hero Image.jpg" alt="houses" className="hero-image" />
    
    {/* Enquiry Form Over the Image */}
    <form className="enquiry-form">
      <label>Name <span>*</span></label>
      <input className="long-input" required onChange={(e) => setEnquirerName(e.target.value)}/>
      <label>Contact <span>*</span></label>
      <input className="long-input" required onChange={(e) => setEnquirerContact(e.target.value)}/>
      <label>Email <span>*</span></label>
      <input className="long-input" required onChange={(e) => setEnquirerEmail(e.target.value)}/>
      <label>Service <span>*</span></label>
      <select className="long-input" required onChange={(e) => setServiceRequired(e.target.value)}> 
        <option value="Choose a Service">Choose a Service</option>
        <option value="Building Construction">Building Construction</option>
        <option value="2D & 3D Printing">2D & 3D Printing</option>
        <option value="Pre-Consultancy">Pre-Consultancy</option>
        <option value="Interiors & Paintings">Interiors & Paintings</option>
        <option value="Building Renovation">Building Renovation</option>
      </select>
      <label>Description</label>
      <textarea className="long-input" required onChange={e => setServiceDescription(e.target.value)}/>
      <button >Submit</button>
    </form>
  </motion.div>
</div>
      </div>
    </section>
  );
};

export default Hero;
