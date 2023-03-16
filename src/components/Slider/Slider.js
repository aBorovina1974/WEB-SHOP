import React, { useState } from "react";
import styles from "./Slider.module.scss";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import SliderNavigation from "./SliderNavigation/SliderNavigation";

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  let totalSlides;
  const slideImages = [image1, image2, image3, image4];
  totalSlides = slideImages.length;
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
            <img src={slide} alt="Slide image" />
          </div>
        ))}
      </div>
      <SliderNavigation />
    </div>
  );
};

export default Slider;
