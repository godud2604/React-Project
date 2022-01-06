import React from 'react';
// css
import { Container } from '../../styles/components/coupon';
// images
import coupon from '../../images/account/coupon.jpg';
import { ReactComponent as CouponIcon } from '../../images/common/icon-coupon.svg';


const Coupon = () => {
  return (
    <Container>
      <div className='coupon-img'>
        <img src={coupon} alt="쿠폰" />
      </div>

      <div className='coupon-txt'>
        <div className='coupon-head'>
          <h2 className='coupon-store-name'>
            불막열삼
          </h2>
          <span className='coupon-location'>진주점</span>
        </div>

        <div className='coupon-body'>
          <div className='coupon-body-discount'>
            <div className='svg'>
              <CouponIcon />
            </div>
            <strong>1,000원 할인</strong>
          </div>
          
          <p>(3만원이상 주문 시 / 3월 9일까지)</p>
        </div>
      </div>
    </Container>
  );
};

export default Coupon;