import React from 'react';
// css
import { Container } from '../../styles/components/detail/orderStore';
// images
import store from '../../images/home/main-bg.jpg';

const OrderStore = ({ onClick }) => {
  return (
    <Container className='store-item' onClick={onClick}>
      <div className='main-bg'>
        <img src={store} alt="매장 사진" />
      </div>

      <div className='store-txt-wrap'>
        <h2 className='store-name'>음료1</h2>
        <p className='store-kind'>막창, 삼겹살 고기집</p>
        <p className='store-location'>매장위치 : 1F</p>
      </div>
    </Container>
  );
};

export default OrderStore;