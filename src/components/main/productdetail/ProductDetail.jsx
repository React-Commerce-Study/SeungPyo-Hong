import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import minusBtn from '../../../assets/images/icon-minus-line.svg';
import plusBtn from '../../../assets/images/icon-plus-line.svg';

export default function ProductDetail({ productData }) {
  const [productNum, setProductNum] = useState(1);
  const [productDetail, setProductDetail] = useState({});
  const { product_id } = useParams();

  const productNumHandler = (type) => {
    if (type === 'add') {
      setProductNum((prev) => (prev += 1));
    } else {
      if (productNum > 1) {
        setProductNum((prev) => (prev -= 1));
      } else {
        setProductNum(1);
      }
    }
  };

  const directInputProductNumHandler = (event) => {
    const value = Number(event.target.value);
    if (value <= 0) {
      setProductNum(1);
    } else {
      setProductNum(value);
    }
  };

  async function loadProductDetail() {
    try {
      const response = await fetch(
        `https://openmarket.weniv.co.kr/products/${product_id}`
      );

      if (!response.ok) {
        throw new Error('상품 데이터를 불러오는 데 실패했습니다.');
      }

      const data = await response.json();
      console.log(data);
      setProductDetail(data);
    } catch (error) {
      console.error('상품 데이터를 불러오는 데 실패했습니다:', error.message);
    }
  }

  useEffect(() => {
    console.log(product_id);
    loadProductDetail();
  }, []);

  const Section = styled.section`
    display: flex;
    justify-content: center;
    max-width: 1280px;
    margin: 0 auto;
    /* margin-top: 80px; */

    .wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    .detail-header {
      display: flex;
    }

    .product-image-container {
      max-width: 600px;
      width: 100%;
      aspect-ratio: 1/1;

      img {
        max-width: 100%;
        height: auto;
        object-fit: contain;
      }
    }

    .buying-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .product-summary {
        span {
          display: block;
        }
      }

      .product-quantity-btns {
        display: flex;

        input {
          width: 50px;
          height: 50px;
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
        input[type='number']::-webkit-outer-spin-button,
        input[type='number']::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      }
    }
  `;
  return (
    <Section>
      <div className='wrapper'>
        <article className='detail-header'>
          <div className='product-image-container'>
            <img src={productDetail.image} alt='상품이미지' />
          </div>
          <div className='buying-info'>
            <div className='product-summary'>
              <span>스토어 네임{productDetail.store_name}</span>
              <span>프로덕트 네임{productDetail.product_name}</span>
              <span>가격{productDetail.price?.toLocaleString()}</span>
            </div>
            <div className='product-buying'>
              <span>택배배송 / 무료배송</span>
              <div className='product-quantity-btns'>
                <button
                  onClick={() => {
                    productNumHandler('reduce');
                  }}
                >
                  -
                </button>
                <input
                  type='number'
                  value={productNum || ''}
                  onChange={directInputProductNumHandler}
                />
                {/*
                input[type="number"]::-webkit-outer-spin-button,
                input[type="number"]::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
              } */}
                <button
                  onClick={() => {
                    productNumHandler('add');
                  }}
                >
                  +
                </button>
              </div>
              <div className='product-price'>
                <span>총 상품 금액</span>
                <div>
                  <span>총 수량 {productNum}개</span>
                  <span>|</span>
                  <span>
                    {(productDetail.price * productNum).toLocaleString()}원
                  </span>
                </div>
              </div>
              <div className='product-buying-buttons'>
                <button>바로 구매</button>
                <button>장바구니</button>
              </div>
            </div>
          </div>
        </article>
        <article className='detail-desc'>
          <button>버튼</button>
          <button>리뷰</button>
          <button>Q&A</button>
          <button>반품/교환정보</button>
        </article>
      </div>
    </Section>
  );
}
