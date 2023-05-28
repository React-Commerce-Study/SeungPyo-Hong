import React, { useState } from 'react';
import hoduLogo from '../../assets/images/Logo-hodu.svg';
import search from '../../assets/images/search.svg';
import searchBlur from '../../assets/images/search-blur.svg';
import cartImg from '../../assets/images/icon-shopping-cart.svg';
import userImg from '../../assets/images/icon-user.svg';
import styled from 'styled-components';

export default function Header() {
  //React 스럽게 코드 수정하기
  function changeFormBorderColor() {
    const $form = document.querySelector('.header-search-form');
    $form.style.borderColor = '#21bf48';
    const $searchTool = document.querySelector('.search-tool');
    $searchTool.setAttribute('src', search);
  }

  function changeFormBorderColorToOrigin() {
    const $form = document.querySelector('.header-search-form');
    $form.style.borderColor = '#c4c4c4';
    const $searchTool = document.querySelector('.search-tool');
    $searchTool.setAttribute('src', searchBlur);
  }

  return (
    <HeaderStyle>
      <section className='wrapper'>
        <h1 className='a11y-hidden'>호두마켓헤더</h1>
        <div className='header-left'>
          <img src={hoduLogo} alt='호두로고' />
          <form className='header-search-form'>
            <input
              type='text'
              placeholder='상품을 검색해보세요!'
              onFocus={() => changeFormBorderColor()}
              onBlur={() => changeFormBorderColorToOrigin()}
            />
            <button type='button'>
              <img className='search-tool' src={searchBlur} alt='검색돋보기' />
            </button>
          </form>
        </div>
        <div className='header-right'>
          <a className='header-user-menu' href='#'>
            <img src={cartImg} alt='장바구니' />
            <span>장바구니</span>
          </a>
          <a className='header-user-menu' href='#'>
            <img src={userImg} alt='마이페이지' />
            <span>마이페이지</span>
          </a>
        </div>
      </section>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
  display: flex;
  justify-content: center;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 22px;

  .wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 90px;

    .header-left,
    .header-right {
      display: flex;
      gap: 30px;
      align-items: center;
    }

    .header-search-form {
      display: flex;
      position: relative;
      justify-content: space-between;
      align-items: center;
      width: 400px;
      height: 46px;
      padding: 0 22px;
      background: #ffffff;
      border: 2px solid #c4c4c4;
      border-radius: 50px;
      transition: 0.3s all;

      input {
        width: 100%;
        height: 70%;
        font-size: 16px;
        border: none;

        &:focus {
          outline: none;
        }
      }

      button {
        background-color: transparent;
        border: none;
        cursor: pointer;

        img {
          pointer-events: none;
        }
      }
    }

    .header-user-menu {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-decoration: none;

      span {
        font-size: 12px;
        color: #767676;
      }
    }
  }
`;
