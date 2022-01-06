import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faArrowAltCircleLeft as left,
  faArrowAltCircleRight as right,
} from '@fortawesome/free-solid-svg-icons';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [arrowId, arrowIdChange] = useState('nonHide');
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    if (length === 1) {
      arrowIdChange('hide');
    } else {
      arrowIdChange('nonHide');
    }
  });

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="slider">
      <a href="#" className="left">
        <FontAwesomeIcon
          icon={left}
          className="left-arrow"
          id={arrowId}
          onClick={prevSlide}
        />
      </a>
      <a href="#" className="right">
        <FontAwesomeIcon
          icon={right}
          className="right-arrow"
          id={arrowId}
          onClick={nextSlide}
        />
      </a>

      <div class="NumberPerNumber">
        <span className="now">{current + 1}</span> /{' '}
        <span className="all">{length}</span>
      </div>

      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide} alt="travel image" className="image" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ImageSlider;
