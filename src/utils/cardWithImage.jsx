import { useState, useEffect } from "react";
import { Button, Card, Image, Text, CardBody, CardFooter, Heading } from "@chakra-ui/react";

const CardWithImage = ({ title, description, price, images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Fade out current image
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length); // Switch to next image
        setFade(true); // Fade in new image
      }, 500); // Wait for fade-out to complete
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Card maxW="sm" overflow="hidden" borderRadius="lg" boxShadow="lg">
      {/* Image Container */}
      <div style={{ position: "relative", height: "400px", overflow: "hidden" }}>
        <Image
          src={images[currentImage]}
          alt={title}
          objectFit="cover"
          width="100%"
          height="100%"
          transition="opacity 0.5s ease-in-out"
          opacity={fade ? 1 : 0}
          position="absolute"
          top="0"
          left="0"
        />
      </div>

      {/* Card Body */}
      <CardBody p="6">
        <Heading size="md" mb="2">
          {title}
        </Heading>
        <Text color="gray.600" mb="4">
          {description}
        </Text>
        <Text fontSize="2xl" fontWeight="medium" color="blue.600" mb="4">
          {price}
        </Text>
      </CardBody>

      {/* Card Footer */}
      {/* <CardFooter p="6" bg="gray.50" borderTop="1px solid" borderColor="gray.200">
        <Button variant="solid" colorScheme="blue" flex="1" mr="2">
          Buy Now
        </Button>
        <Button variant="outline" colorScheme="blue" flex="1">
          Add to Cart
        </Button>
      </CardFooter> */}
    </Card>
  );
};

export default CardWithImage;