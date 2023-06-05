import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import shoppingCart from '../../assets/images/shopping-cart-button.svg';
import pageSwipeBtnLeft from '../../assets/images/page-swiper-left.svg';
import pageSwipeBtnRight from '../../assets/images/page-swiper-right.svg';
import { useNavigate } from 'react-router-dom';

export default function Main() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  async function getProducts() {
    try {
      const response = await fetch('https://openmarket.weniv.co.kr/products');

      if (!response.ok) {
        throw new Error('상품 데이터를 불러오는 데 실패했습니다.');
      }

      const data = await response.json();
      setProducts(data.results);
    } catch (error) {
      console.error('상품 데이터를 불러오는 데 실패했습니다:', error.message);
    }
  }

  const linkToDetail = (el, event) => {
    navigate(`/products/${el}`);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <MainStyle>
      <section className='wrapper'>
        {/* {!detailPage && ( */}
        {/* <> */}
        <UnorderdList>
          {/* <div className='page-swipe-buttons'>
            <button className='page-swipe-button-left'>
              <img src={pageSwipeBtnLeft} alt='상품페이지왼쪽으로넘기기' />
            </button>
            <button className='page-swipe-button-right'>
              <img src={pageSwipeBtnRight} alt='상품페이지오른쪽으로넘기기' />
            </button>
          </div> */}
          {products.map((el) => {
            return (
              <li
                className='product-card'
                key={el.product_id}
                onClick={(event) => linkToDetail(el.product_id, event)}
              >
                <img
                  className='product-image'
                  src={el.image}
                  alt='상품이미지'
                />
                <img
                  className='add-to-cart-button'
                  src={shoppingCart}
                  alt='장바구니추가버튼'
                />
                <div className='product-desc'>
                  <span>{el.store_name}</span>
                  <span>{el.product_name}</span>
                  <span>
                    <strong>{el.price.toLocaleString()}</strong>원
                  </span>
                </div>
              </li>
            );
          })}
        </UnorderdList>
        <Pagination>
          <button className='page-swipe-button-left'>
            <img src={pageSwipeBtnLeft} alt='상품페이지왼쪽으로넘기기' />
          </button>
          <input type='number' min={1} />
          <span>/</span>
          <span>6</span>
          <button className='page-swipe-button-right'>
            <img src={pageSwipeBtnRight} alt='상품페이지오른쪽으로넘기기' />
          </button>
        </Pagination>
        {/* </> */}
        {/* )} */}
        {/* {detailPage && <ProductDetail productData={productData} />} */}
      </section>
    </MainStyle>
  );
}

const MainStyle = styled.main`
  display: flex;
  justify-content: center;
  max-width: 1280px;
  margin: 0 auto;
  margin-top: 80px;

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

const UnorderdList = styled.ul`
  display: grid;
  position: relative;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  justify-items: center;
  gap: 78px 70px;

  /* .page-swipe-buttons {
      display: flex;
      justify-content: space-between;
      position: absolute;
      width: calc(100% + 260px);
      top: 50%;
      transform: translateY(-50%);
      z-index: 1000;

      .page-swipe-button-left,
      .page-swipe-button-right {
        padding: 0;
        background-color: transparent;
        border: none;
      }
    } */

  .product-card {
    position: relative;
    width: 380px;
    cursor: pointer;
  }

  .product-image {
    display: inline-block;
    width: 100%;
    aspect-ratio: 380/380;
    object-fit: fill;
    vertical-align: top;
    box-sizing: border-box;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    margin-bottom: 20px;
  }

  .add-to-cart-button {
    position: absolute;
    top: calc(380px - 76px);
    right: 20px;
  }

  .add-to-cart-button:hover {
    transform: scale(1.2);
    transition: 0.2s all;
  }
  .product-desc {
    display: flex;
    flex-direction: column;
    gap: 10px;

    span:nth-child(1) {
      font-size: 16px;
      color: #21bf48;
    }

    span:nth-child(2) {
      font-size: 18px;
      color: #414141;
    }

    span:nth-child(3) {
      font-size: 16px;
      color: #232323;
      strong {
        font-size: 24px;
        font-weight: bold;
      }
    }
  }
`;

const Pagination = styled.article``;
