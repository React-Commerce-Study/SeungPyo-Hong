import React, { useState } from 'react';
import leftBtn from '../../assets/images/icon-swiper-1.svg';
import rightBtn from '../../assets/images/icon-swiper-2.svg';
import styled from 'styled-components';
import sliderBg1 from '../../assets/images/slider-bg-1.jpg';
import sliderBg2 from '../../assets/images/slider-bg-2.jpg';
import sliderBg3 from '../../assets/images/slider-bg-3.jpg';
import sliderBg4 from '../../assets/images/slider-bg-4.jpg';
import sliderBg5 from '../../assets/images/slider-bg-5.jpg';

export default function Slider() {
  const slides = [sliderBg1, sliderBg2, sliderBg3, sliderBg4, sliderBg5];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlide = (index) => {
    setActiveIndex(index);
  };

  const sliderChange = (direction) => {
    if (direction === 'left') {
      if (activeIndex === 0) {
        setActiveIndex(slides.length - 1);
      } else {
        setActiveIndex((prev) => (prev -= 1));
      }
    } else {
      if (activeIndex === slides.length - 1) {
        setActiveIndex(0);
      } else {
        setActiveIndex((prev) => (prev += 1));
      }
    }
  };

  return (
    <Section>
      {slides.map((slide, index) => (
        <div
          key={index * 10}
          className={`slide ${index === activeIndex ? 'active' : ''}`}
          activeindex={`-${activeIndex * 100}%`}
        >
          <img src={slide} alt={`${index}번 슬라이드`} />
        </div>
      ))}
      <button
        className='swiper-btn swiper-left'
        onClick={() => {
          sliderChange('left');
        }}
      >
        <img src={leftBtn} alt='왼쪽으로넘기기' />
      </button>
      <button className='swiper-btn swiper-right'>
        <img
          src={rightBtn}
          alt='오른쪽으로넘기기'
          onClick={() => {
            sliderChange('right');
          }}
        />
      </button>
      <div className='slider-indicator'>
        {slides.map((slide, index) => {
          return (
            <button
              key={index}
              className={`indicator ${index === activeIndex ? 'active' : ''}`}
              onClick={() => handleSlide(index)}
            ></button>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  display: flex;

  max-width: 100vw;
  height: 500px;
  position: relative;
  background-color: #c4c4c4;
  overflow: hidden;

  .slide {
    width: 100%;
    transform: translateX(${(props) => props.children[0][0].props.activeindex});
    flex-shrink: 0;
    transition: all 0.3s ease-in-out;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .swiper-left,
  .swiper-right {
    border: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    cursor: pointer;
  }

  .swiper-left {
    left: 0;
  }

  .swiper-right {
    right: 0;
  }

  .slider-indicator {
    display: flex;
    position: absolute;
    top: 480px;
    left: 50%;
    transform: translateX(-50%);
    gap: 3px;

    button {
      display: block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: none;
      background-color: #5bbc58;
      padding: 0;
      box-sizing: border-box;
      cursor: pointer;

      &:not(.active) {
        background-color: white;
      }
    }
  }
`;
