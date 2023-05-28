import React from 'react';
import leftBtn from '../../assets/images/icon-swiper-1.svg';
import rightBtn from '../../assets/images/icon-swiper-2.svg';
import styled from 'styled-components';
import sliderBg1 from '../../assets/images/slider-bg-1.jpg';
import sliderBg2 from '../../assets/images/slider-bg-2.jpg';
import sliderBg3 from '../../assets/images/slider-bg-3.jpg';
import sliderBg4 from '../../assets/images/slider-bg-4.jpg';
import sliderBg5 from '../../assets/images/slider-bg-5.jpg';

export default function Slider() {
  return (
    <Section>
      <img className='slider-image' src='#' alt='슬라이더이미지' />
      <button className='swiper-left'>
        <img src={leftBtn} alt='왼쪽으로넘기기' />
      </button>
      <button className='swiper-right'>
        <img src={rightBtn} alt='오른쪽으로넘기기' />
      </button>
      <div className='slider-indicator'>
        {/* span의 개수를 동적으로 조절할 수 있게 코드 리팩토링하기 */}
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Section>
  );
}

const Section = styled.section`
  max-width: 100vw;
  height: 500px;
  position: relative;
  background-color: #c4c4c4;

  .slider-image {
    display: block;
    width: 100%;
    height: 100%;
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

    span {
      display: block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: black;

      //나중에 swiper 버튼 클릭에 따라서 숫자 부분 상태만 바꿔주기
      &:not(:nth-child(1)) {
        background-color: white;
      }
    }
  }
`;
