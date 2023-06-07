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

  const shippingFeeDisplay = (fee) => {
    if (fee === 0) {
      return ' 무료배송';
    } else return ` ${fee?.toLocaleString()}원`;
  };

  useEffect(() => {
    console.log(product_id);
    loadProductDetail();
  }, []);

  return (
    <Section>
      <div className='wrapper'>
        <article className='detail-header'>
          <div className='product-image-container'>
            <img src={productDetail.image} alt='상품이미지' />
          </div>
          <div className='buying-info'>
            <div className='product-summary'>
              <span>{productDetail.store_name}</span>
              <span>{productDetail.product_name}</span>
              <span>
                <strong>{productDetail.price?.toLocaleString()}</strong>원
              </span>
            </div>
            <div className='product-buying'>
              <span className='shipping-fee'>
                택배배송 /{shippingFeeDisplay(productDetail.shipping_fee)}
              </span>
              <span className='horizon-line'></span>
              <div className='product-quantity-btns'>
                <button
                  onClick={() => {
                    productNumHandler('reduce');
                  }}
                ></button>
                <input
                  type='number'
                  value={productNum || ''}
                  onChange={directInputProductNumHandler}
                />

                <button
                  onClick={() => {
                    productNumHandler('add');
                  }}
                ></button>
              </div>
              <span className='horizon-line'></span>
              <div className='product-price'>
                <span>총 상품 금액</span>
                <div className='product-price-quantity'>
                  <span>
                    총 수량 <strong>{productNum}</strong>개
                  </span>
                  <span>|</span>
                  <span>
                    <strong>
                      {(
                        productDetail.price * productNum +
                        productDetail.shipping_fee
                      ).toLocaleString()}
                    </strong>
                    원
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
          <button className='active'>상세정보</button>
          <button>리뷰</button>
          <button>Q&A</button>
          <button>반품/교환정보</button>
        </article>
      </div>
    </Section>
  );
}

const Section = styled.section`
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

    .detail-header {
      display: flex;
      width: 100%;
      justify-content: center;
      gap: 50px;
      margin-bottom: 140px;
    }

    .product-image-container {
      max-width: 600px;
      width: 100%;
      aspect-ratio: 1/1;

      img {
        max-width: 100%;
        height: 100%;
        object-fit: fill;
      }
    }

    .buying-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-basis: 630px;

      .product-summary {
        span {
          display: block;
        }

        span:nth-child(1) {
          font-size: 18px;
          color: #767676;
        }

        span:nth-child(2) {
          margin-top: 16px;
          margin-bottom: 20px;
          font-size: 36px;
        }

        span:nth-child(3) {
          font-size: 18px;
          strong {
            font-size: 36px;
            font-weight: bold;
          }
        }
      }

      .product-buying {
        .shipping-fee {
          display: block;
          font-size: 16px;
          color: #767676;
          margin-bottom: 20px;
        }

        .horizon-line {
          display: block;
          width: 100%;
          height: 2px;
          background-color: #c4c4c4;
        }
      }

      .horizon-line:nth-child(4) {
        margin-bottom: 30px;
      }

      .product-quantity-btns {
        margin-top: 30px;
        margin-bottom: 30px;
        display: flex;

        button {
          border: 1px solid #c4c4c4;
          width: 50px;
          height: 50px;
          cursor: pointer;
        }

        button:nth-child(1) {
          background: url(${minusBtn}) no-repeat center;
          border-radius: 5px 0 0 5px;
        }

        button:nth-child(3) {
          background: url(${plusBtn}) no-repeat center;
          border-radius: 0 5px 5px 0;
        }

        input {
          width: 50px;
          height: 50px;
          font-size: 18px;
          border: 1px solid #c4c4c4;
          text-align: center;
          padding: 0;
          margin: 0;
          box-sizing: border-box;
          border-left: none;
          border-right: none;
        }
        input[type='number']::-webkit-outer-spin-button,
        input[type='number']::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      }

      .product-price {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        margin-bottom: 30px;

        span:nth-child(1) {
          font-size: 18px;
          font-weight: bold;
        }

        .product-price-quantity {
          display: flex;
          align-items: baseline;
          span:nth-child(1) {
            font-size: 18px;
            color: #767676;
            strong {
              font-weight: 700;
              color: #21bf48;
            }
          }

          span:nth-child(2) {
            display: inline-block;
            color: #c4c4c4;
            margin-left: 11px;
            margin-right: 12px;
          }

          span:nth-child(3) {
            font-size: 18px;
            color: #21bf48;
            strong {
              font-size: 36px;
              font-weight: 700;
            }
          }
        }
      }

      .product-buying-buttons {
        display: flex;
        gap: 14px;

        button {
          display: block;
          height: 60px;
          border: none;
          border-radius: 5px;
          font-size: 18px;
          font-weight: bold;
          color: white;
        }

        button:nth-child(1) {
          width: 416px;
          background-color: #21bf48;
        }

        button:nth-child(2) {
          width: 200px;
          background-color: #767676;
        }
      }
    }

    .detail-desc {
      width: 100%;
      display: flex;
      margin-bottom: 200px;

      button {
        display: block;
        width: calc(100% / 4);
        height: 60px;
        color: #767676;
        font-weight: bold;
        border: none;
        border-bottom: 6px solid #e0e0e0;
        cursor: pointer;
      }

      button.active {
        color: #21bf48;
        border-color: #21bf48;
      }
    }
  }
`;
