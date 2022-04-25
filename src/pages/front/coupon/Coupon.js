import React, { useState } from 'react';
import { CouponDetail } from '../../../components/detail';
import { MainLayout } from '../../../components/layout/front';
import { SubNav } from '../../../components/layout/front/header';
// css
import { Container, CouponInner } from '../../../styles/coupon/coupon';

const Coupon = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const subNavInfo = [
    {
      "id": 1,
      "title": '사용 가능 쿠폰',
    },
    {
      "id": 2,
      "title": '쿠폰히스토리',
    },
  ];
  return (
    <MainLayout navBottom headerBack backTitle="쿠폰">
      <Container>
        <CouponInner>
          <SubNav 
            nav={subNavInfo}
            toggleState={toggleState}
            toggleTab={toggleTab}
          />
          
          <div className='coupon-list'>
            <CouponDetail />
            <CouponDetail />
            <CouponDetail />
          </div>
        </CouponInner>
      </Container>
    </MainLayout>
  );
};

export default Coupon;