import "./Hero.css";
import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { init, sendForm } from '@emailjs/browser';
// import SearchBar from "../SearchBar/SearchBar";
import {FaStar} from 'react-icons/fa';
import { useState } from "react";

init(import.meta.env.VITE_EMAILJS_USER_ID)

const Hero = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    service: "Choose a Service",
    description: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!/^\d{10}$/.test(formData.contact)) {
      alert("Please enter a valid 10-digit phone number");
      setIsSubmitting(false);
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      alert("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    try {
      await sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_USER_ID
      );

      alert('Thank you! We have received you enquiry. Our team will contact you shortly.');
      setFormData({
        name: "",
        contact: "",
        email: "",
        service: "Choose a Service",
        description: ""
      });
    } catch (err) {
      console.error('Email send failed:', err);
      alert('There was an error sending your enquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
    <form className="enquiry-form" onSubmit={handleSubmit}>
    <label>Name <span>*</span></label>
      <input 
        className="long-input" 
        name="name"
        value={formData.name}
        onChange={handleChange}
        required 
      />

      <label>Contact <span>*</span></label>
      <input 
        className="long-input" 
        name="contact"
        type="tel"
        pattern="[0-9]{10}"
        value={formData.contact}
        onChange={handleChange}
        required 
      />

      <label>Email <span>*</span></label>
      <input 
        className="long-input" 
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required 
      />

      <label>Service <span>*</span></label>
      <select 
        className="long-input" 
        name="service"
        value={formData.service}
        onChange={handleChange}
        required
      >
        <option value="Choose a Service">Choose a Service</option>
        <option value="Building Construction">Building Construction</option>
        <option value="2D & 3D Printing">2D & 3D Printing</option>
        <option value="Pre-Consultancy">Pre-Consultancy</option>
        <option value="Interiors & Paintings">Interiors & Paintings</option>
        <option value="Building Renovation">Building Renovation</option>
      </select>

      <label>Description</label>
      <textarea 
        className="long-input" 
        name="description"
        value={formData.description}
        onChange={handleChange}
      />

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Submit'}
      </button>
    </form>
  </motion.div>
</div>
      </div>
    </section>
  );
};

export default Hero;
