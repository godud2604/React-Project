import React from 'react';
// components
import { Container } from '../../styles/components/detail/orderMenu';
// images
import store from '../../images/home/home/main-bg.jpg';

const OrderMenu = ({ onClick }) => {
  return (
    <Container onClick={onClick}>
      <div className='main-bg'>
        <img src={store} alt="매장 사진" />
      </div>

      <h2 className='menu-name'>음료1</h2>
      <strong className='menu-price'>₩6,000</strong>
    </Container>
  );
};

export default OrderMenu;