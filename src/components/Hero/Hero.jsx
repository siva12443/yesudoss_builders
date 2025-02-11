import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
// import SearchBar from "../SearchBar/SearchBar";
import {FaStar} from 'react-icons/fa';

const Hero = () => {
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
            <img src="./hero Image.jpg" alt="houses" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
