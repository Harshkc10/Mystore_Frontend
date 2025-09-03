import React, { useState } from 'react';
import './slider.css';
import product1 from '../images/login_bg.jpg';
import product2 from '../images/harsh.jpeg';

const productImages = [
  product1,product2,product1,product2,product1,product2,product1,product2,
  product1,product2,product1,product2,product1,product2,product1,product2,
  product1,product2,product2,product2
];

const VISIBLE_COUNT = 6;

const Slider = () => {
  const [startIdx, setStartIdx] = useState(0);

  const goLeft = () => {
    setStartIdx((prev) => Math.max(prev - 1, 0));
  };

  const goRight = () => {
    setStartIdx((prev) =>
      Math.min(prev + 1, productImages.length - VISIBLE_COUNT)
    );
  };


  const maxIdx = productImages.length - VISIBLE_COUNT;

  return (
    <div className="slider_container">
      <div className="slider_controls">
        <button className="arrow_left" onClick={goLeft} disabled={startIdx === 0}>
          &lt;
        </button>
        <div className="images">
          {productImages
            .slice(startIdx, startIdx + VISIBLE_COUNT)
            .map((img, idx) => (
              <img
                key={startIdx + idx}
                src={img}
                alt={`Product ${startIdx + idx + 1}`}
                className="slider_img"
              />
            ))}
        </div>
        <button
          className="arrow_right"
          onClick={goRight}
          disabled={startIdx === maxIdx}
        >
          &gt;
        </button>
      </div>
      
    </div>
  );
};

export default Slider;