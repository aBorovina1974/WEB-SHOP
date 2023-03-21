import React, { useReducer } from "react";
import styles from "./Slider.module.scss";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import SliderNavigation from "./SliderNavigation/SliderNavigation";

let totalSlides;
const slideImages = [image1, image2, image3, image4];
totalSlides = slideImages.length;

const sliderReducer = (activeSlide, action) => {
  if (action.type === "next") {
    if (activeSlide < totalSlides - 1) {
      return ++activeSlide;
    } else {
      return (activeSlide = 0);
    }
  } else if (action.type === "prev") {
    if (activeSlide === 0) {
      return (activeSlide = totalSlides - 1);
    } else {
      return --activeSlide;
    }
  } else if (action.type === "set") {
    return (activeSlide = action.index);
  }
};

const Slider = () => {
  const [activeSlide, dispatch] = useReducer(sliderReducer, 0);

  const nextHandler = () => {
    dispatch({ type: "next" });
  };

  const previousHandler = () => {
    dispatch({ type: "prev" });
  };

  const setActiveHanler = (index) => {
    dispatch({ type: "set", index: index });
  };

  return (
    <div className={styles.slider}>
      <div className={styles.slides}>
        {slideImages.map((slide, index) => (
          <div
            className={`${styles.slide} ${
              index === activeSlide && styles.active
            } ${index === activeSlide + 1 && styles.next} ${
              index === activeSlide - 1 && styles.prev
            } ${
              activeSlide === 0 && index === totalSlides - 1 ? styles.prev : ""
            } ${
              activeSlide === totalSlides - 1 && index === 0 ? styles.next : ""
            }`}
            key={index}
          >
            <img src={slide} alt={slide} />
          </div>
        ))}
      </div>
      <SliderNavigation
        slider={{
          next: nextHandler,
          previous: previousHandler,
          set: setActiveHanler,
          slides: slideImages,
          active: activeSlide,
        }}
      />
    </div>
  );
};

export default Slider;
