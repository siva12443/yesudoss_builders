import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./Projects.css";
import { SimpleGrid, Box } from "@chakra-ui/react";
import { sliderSettings } from "../../utils/common";
import PropertyCard from "../PropertyCard/PropertyCard";
import useProperties from "../../hooks/useProperties";
import CardWithImage from "../../utils/cardWithImage";
import {PuffLoader} from 'react-spinners'

const cardData = [
  {
    title: "Site 1",
    description: "Our 1st project made our client so satisfied with the interior and exterior works",
    images: [
      "/Site1_1.jpeg",
      "/Site1_2.jpeg",
      "/Site1_3.jpeg",
      "/Site1_4.jpeg",
      "/Site1_5.jpeg",
      "/Site1_7.jpeg",
    ],
  },
  {
    title: "Site 2",
    description: "Our 2nd project made our client so satisfied with the interior and exterior works",
    images: [
      "/Site2_1.jpg",
      "/Site2_2.jpg",
      "/Site2_3.jpg",
      "/Site2_8.jpg",
      "/Site2_9.jpg",
      "/Site2_10.jpg",
      "/Site2_11.jpg",
    ],
  },
  {
    title: "Site 3",
    description: "Our 3rd project made our client so satisfied with the interior and exterior works",
    images: [
      "/Site3_1.jpg",
      "/Site3_2.jpg",
      "/Site3_3.jpg",
      "/Site3_4.jpg",
      "/Site3_5.jpg",
      "/Site3_6.jpg",
      "/Site3_7.jpg",
      "/Site3_8.jpg",
      "/Site3_9.jpg",
    ],
  },
  {
    title: "Site 4",
    description: "Our 4th project made our client so satisfied with the interior and exterior works",
    images: [
      "/Site4_1.jpg",
      "/Site4_2.jpg",
      "/Site4_3.jpg",
      "/Site4_4.jpg",
      "/Site4_5.jpg",
      "/Site4_6.jpg",
      "/Site4_7.jpg",
    ],
  },
  {
    title: "Site 5",
    description: "Our 5th project is a church project",
    images: [
      "/Site5_1.jpg",
      "/Site5_2.jpg",
      "/Site5_3.jpg",
      "/Site5_4.jpg",
      "/Site5_5.jpg",
      "/Site5_6.jpg",
    ],
  },
];

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
          <span className="primaryText">Our Projects</span>
        </div>
        <Box p="6">
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="6">
        {cardData.map((card, index) => (
          <CardWithImage
            key={index}
            title={card.title}
            description={card.description}
            price={card.price}
            images={card.images}
          />
        ))}
      </SimpleGrid>
    </Box>
      </div>
    </div>
  );
};

export default Residencies;

const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slideTo(-4)} className="r-prevButton">
        &lt;
      </button>
      <button onClick={() => swiper.slideTo(4)} className="r-nextButton">
        &gt;
      </button>
    </div>
  );
};
