import React from "react";
import MainCaroselData from "./MainCaroselData";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const MainCarosel = () => {

    // for carosel responsive 
  // const responsive = {
  //   0: { items: 1 },
  //   568: { items: 2 },
  //   1024: { items: 3 },
  // };

  const items = MainCaroselData.map((item) => (
    <img className="cursor-pointer" role="presentation" src={item.image} />
  ));

  return (
    <>
      <AliceCarousel
        mouseTracking
        items={items}
        // responsive={responsive}
        controlsStrategy="alternate"
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
      />
    </>
  );
};

export default MainCarosel;
