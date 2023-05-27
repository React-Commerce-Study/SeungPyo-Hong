import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import shoppingCart from '../../assets/images/shopping-cart-button.svg';

export default function Main() {
  //https://openmarket.weniv.co.kr/products

  const [products, setProducts] = useState([]);

  async function getProducts() {
    const response = await fetch('https://openmarket.weniv.co.kr/products');
    const data = await response.json();
    setProducts(data.results);
  }

  useEffect(() => {
    getProducts();
  }, []);

  const MainStyle = styled.main`
    display: flex;
    justify-content: center;
    width: 1280px;
    margin: 0 auto;
    margin-top: 80px;

    .wrapper {
      display: flex;
      justify-content: space-between;
      min-width: 1024px;
    }
  `;

  const UnorderdList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 380px);
    gap: 70px 78px;

    .product-card {
      position: relative;

      cursor: pointer;
    }

    .product-image {
      display: inline-block;
      width: 380px;
      height: 380px;
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
  return (
    <MainStyle>
      <section className='wrapper'>
        <UnorderdList>
          {products.map((el) => {
            return (
              <li className='product-card' key={el.product_id}>
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
      </section>
    </MainStyle>
  );
}
