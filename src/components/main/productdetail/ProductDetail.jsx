import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
      // console.log(productDetail);
    } catch (error) {
      console.error('상품 데이터를 불러오는 데 실패했습니다:', error.message);
    }
  }

  useEffect(() => {
    console.log(product_id);
    loadProductDetail();
  }, []);

  return (
    <>
      <div>
        <img src={productDetail.image} alt='상품이미지' />
        <div>
          <div>
            <span>{productDetail.store_name}</span>
            <span>{productDetail.product_name}</span>
            <span>{productDetail.price?.toLocaleString()}</span>
          </div>
          <div>
            <span>택배배송 / 무료배송</span>
            <div>
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
            <div>
              <span>총 상품 금액</span>
              <span>총 수량 {productNum}개</span>
              <span>
                {(productDetail.price * productNum).toLocaleString()}원
              </span>
            </div>
            <div>
              <button>바로 구매</button>
              <button>장바구니</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button>버튼</button>
        <button>리뷰</button>
        <button>Q&A</button>
        <button>반품/교환정보</button>
      </div>
    </>
  );
}
