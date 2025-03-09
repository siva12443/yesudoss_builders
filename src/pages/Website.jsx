import React from 'react'
// import Companies from "../components/Companies/Companies";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
// import GetStarted from "../components/GetStarted/GetStarted";
import cardWithImage from "../utils/cardWithImage";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Residencies from '../components/Projects/Projects';
import Value from "../components/Value/Value";


const Website = () => {
  return (
    <div className="App">
      <div id="heroSection">
        <Hero />
      </div>
      <div id="servicesSection">
        <Services />
      </div>
      <div id="valueSection">
        <Value />
      </div>
      <div id="projectsSection">
        <Residencies />
      </div>
      <div id="contactSection">
        <Contact />
      </div>
    </div>
  );
}

export default Website