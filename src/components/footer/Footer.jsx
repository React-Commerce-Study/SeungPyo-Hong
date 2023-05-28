import React from 'react';
import styled from 'styled-components';
import instaIcon from '../../assets/images/icon-insta.svg';
import fbIcon from '../../assets/images/icon-fb.svg';
import youtubeIcon from '../../assets/images/icon-yt.svg';

export default function Footer() {
  return (
    <FooterStyle>
      <section className='wrapper'>
        <div className='footer-nav'>
          <div className='footer-nav-site'>
            <a href='#'>호두샵소개</a>
            <span>|</span>
            <a href='#'>이용약관</a>
            <span>|</span>
            <a href='#'>
              <strong>개인정보처리방침</strong>
            </a>
            <span>|</span>
            <a href='#'>전자금융거래약관</a>
            <span>|</span>
            <a href='#'>청소년보호정책</a>
            <span>|</span>
            <a href='#'>제휴문의</a>
          </div>
          <div className='footer-nav-sns'>
            <a href='#'>
              <img src={instaIcon} alt='인스타그램링크' />
            </a>
            <a href='#'>
              <img src={fbIcon} alt='페이스북링크' />
            </a>
            <a href='#'>
              <img src={youtubeIcon} alt='유튜브링크' />
            </a>
          </div>
        </div>
        <span className='footer-horizon-line'></span>
        <div className='footer-company-desc'>
          <span>
            <strong>(주)HODU SHOP</strong>
          </span>
          <span>제주특별자치도 제주시 동광고 137 제주코딩베이스캠프</span>
          <span>사업자 번호 : 000-0000-0000 | 통신판매업</span>
          <span>대표 : 김호두</span>
        </div>
      </section>
    </FooterStyle>
  );
}

const FooterStyle = styled.footer`
  margin-top: 230px;
  background-color: #f2f2f2;

  .wrapper {
    display: flex;
    flex-direction: column;
    max-width: 1280px;
    box-sizing: border-box;
    margin: 0 auto;
    height: 300px;
    padding: 60px 20px 0 20px;
    font-size: 14px;
  }

  .footer-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footer-nav-site {
    a {
      text-decoration: none;
    }

    a:visited {
      color: black;
    }

    a strong {
      font-weight: bold;
    }
    span {
      margin: 0 14px;
    }
  }

  .footer-nav-sns {
    display: flex;
    gap: 14px;
  }

  .footer-horizon-line {
    display: block;
    width: 100%;
    height: 1px;
    background-color: #c4c4c4;
    margin-top: 22px;
    margin-bottom: 30px;
  }

  .footer-company-desc {
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #767676;

    span strong {
      font-weight: bold;
    }
  }
`;
