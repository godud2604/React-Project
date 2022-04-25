import React from 'react';
// components
import { MainLayout } from '../../../components/layout/front';
import Point from '../../../components/pages/home/member/Point';
import { PointDetail } from '../../../components/detail';
import { None } from '../../../components/modal';
// css
import { PointHistorySection } from '../../../styles/home/phoneHistory';

const PointHistory = () => {
  return (
    <MainLayout headerBack>
      <PointHistorySection>
        <Point />

        <div className='point-history-content'>
          <h1>포인트 History</h1>
          {/* 1. history 존재 */}
          <PointDetail 
            minus
            date="2021.11.01"
            title="휴대폰 구매"
            point="25,000"
          />
          <PointDetail 
            plus
            date="2021.11.01"
            title="휴대폰 구매"
            point="25,000"
          />

          {/* 2. history 존재 X */}
          {/* <None message="아직 적립된 포인트가 없습니다." /> */}
        </div>
      </PointHistorySection>
    </MainLayout>
  );
};

export default PointHistory;