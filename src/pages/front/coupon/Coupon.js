import React from 'react';
import { CouponDetail } from '../../../components/detail';
import { MainLayout } from '../../../components/layout/front';
import { SubNav } from '../../../components/layout/front/header';
// css
import { Container, CouponInner } from '../../../styles/coupon/coupon';

const Coupon = () => {
  return (
    <MainLayout navBottom headerBack backTitle="쿠폰">
      <Container>
        <CouponInner>
          <SubNav 
            nav1="사용 가능 쿠폰"
            nav2="쿠폰히스토리"
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