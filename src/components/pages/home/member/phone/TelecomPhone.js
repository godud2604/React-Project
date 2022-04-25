import React from 'react';
// css
import { Container } from '../../../../../styles/components/home/member/phone/telecomPhone';
// images
import phone01 from '../../../../../images/home/member/desc-temp-phone-01.jpg'
import phone02 from '../../../../../images/home/member/desc-temp-phone-02.png'
import phone03 from '../../../../../images/home/member/desc-temp-phone-03.png'

const TelecomComponent = ({
  imgSrc,
  title,
}) => {
  return (
    <div className='telecom-content'>
      <div className='telecom-content-img'>
        <img src={imgSrc} alt={title} />
      </div>
      <div className='telecom-content-txt'>
        <h2>{title}</h2>
        <ul>
          <li>
            <span>출고가</span>
            <strong>999,900원</strong>
          </li>
          <li>
            <span>공시지원</span>
            <strong>-500,000원</strong>
          </li>
          <li>
            <span>추가할인</span>
            <strong>-75,000원</strong>
          </li>
          <li>
            <span>포인트 할인</span>
            <strong>-25,000원</strong>
          </li>
          <li className='purchase-price'>
            <span>구매가</span>
            <strong>399,900원</strong>
          </li>
        </ul>
      </div>
    </div>
  )
};

const TelecomPhone = () => {
  return (
    <Container>
      <TelecomComponent imgSrc={phone01} title="갤럭시 S21" />
      <TelecomComponent imgSrc={phone02} title="갤럭시 Z 플립 3" />
      <TelecomComponent imgSrc={phone03} title="아이폰 13" />
    </Container>
  );
};

export default TelecomPhone;