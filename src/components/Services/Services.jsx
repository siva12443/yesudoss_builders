import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./Services.css";
import { sliderSettings } from "../../utils/common";
import PropertyCard from "../PropertyCard/PropertyCard";
import useProperties from "../../hooks/useProperties";
import {PuffLoader} from 'react-spinners'

const Residencies = () => {

  const {isError, isLoading} = useProperties();
  const data = [
    {
      id: 1,
      img: "./Construction.jpg",
      title: "Construction",
      description: "We deliver high-quality construction services, building durable and aesthetically pleasing structures tailored to your needs."
    },
    {
      id: 2,
      img: "./Designing.jpg",
      title: "Designing",
      description: "Our expert designers craft innovative and functional spaces that blend creativity with practicality."
    },
    {
      id: 3,
      img: "./3D Planning.png",
      title: "2D & 3D Planning",
      description: "We provide detailed 2D and 3D plans to visualize your project with precision before construction begins."
    },
    {
      id: 4,
      img: "./Pre-Construction.jpg",
      title: "Pre-Construction",
      description: "We offer thorough pre-construction planning to ensure your project starts smoothly and stays on track."
    },
    {
      id: 5,
      img: "./modern-styled-entryway.jpg",
      title: "Interior Works",
      description: "Our interior solutions transform spaces into stylish, comfortable, and functional environments that reflect your style."
    },
    {
      id: 6,
      img: "./renovation.png",
      title: "Renovation",
      description: "Breathe new life into your spaces with our renovation services, combining modern techniques with timeless designs."
    },
    {
      id: 7,
      img: "./mainenance.svg",
      title: "Maintenance",
      description: "We provide reliable maintenance services to keep your property in excellent condition for years to come."
    }
  ];  

  if(isError){
    return(
      <div className='wrapper'>
        <span>Error while fetching data</span>
      </div>
    )
  }

  if(isLoading){
    return(
      <div className="wrapper flexCenter" style={{height: "60vh"}}>
        <PuffLoader
        height="80"
        width="80"
        radius={1}
        color="#4066ff"
        aria-label="puff-loading"
        />
      </div>
    )
  }


  return (
    <div id="residencies" className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          <span className="primaryText">Our Services</span>
        </div>
        <Swiper {...sliderSettings}>
          <SlideNextButton />
          {/* slider */}
          {data.slice(0, 8).map((card, i) => (
            <SwiperSlide key={i}>
              <PropertyCard card={card}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Residencies;

const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()} className="r-prevButton">
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()} className="r-nextButton">
        &gt;
      </button>
    </div>
  );
};
