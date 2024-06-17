import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Button } from "@mui/material";

const HomeSectionCarosel = ({ data, sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);


  const responsive = {
    0: {
      items: 1,
      itemsFit: "contain",
    },
    568: {
      items: 2,
      itemsFit: "contain",
    },
    1024: {
      items: 4.5,
      itemsFit: "contain",
    },
  };

  // function for prev side and next slide
  const slidePrev = () => {
    setActiveIndex(activeIndex - 1);
  };
  const slideNext = () => {
    setActiveIndex(activeIndex + 1);
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  // update mobileData to Data
  const items = data
    ?.slice(0, 15)
    .map((item) => <HomeSectionCard product={item} />);

  
  return (
    <div className="sm:px-4 lg:px-0 border bg-slate-100">
      <h2 className="text-2xl font-extrabold  text-gray-800 py-3 px-2 ">
        {sectionName}
      </h2>
      <div className="relative pl-10 pb-5 pt-5 items-center">
        <AliceCarousel
          items={items}
          responsive={responsive}
          disableButtonsControls
          disableDotsControls
          mouseTracking
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
          animationType="fadeout"
          autoPlay
          autoPlayInterval={1000}
          animationDuration={2000}
        />
        {activeIndex !== items?.length - 5 && (
          <Button
            onClick={slideNext}
            variant="contained"
            className="z-50 bg-white"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="next"
          >
            <ArrowBackIosIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}
        {activeIndex !== 0 && (
          <Button
            onClick={slidePrev}
            variant="contained"
            className="z-50 bg-white"
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(-90deg)",
              bgcolor: "white",
            }}
            aria-label="prev"
          >
            <ArrowBackIosIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarosel;
