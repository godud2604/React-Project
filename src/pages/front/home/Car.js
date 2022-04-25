import React from 'react';
// components
import { MainLayout } from '../../../components/layout/front';
import GoodsKind from '../../../components/pages/home/member/car/GoodsKind';
import TitleChildren from '../../../components/pages/home/member/car/TitleChildren';
import { Button } from '../../../components/modal';
// css
import { CarFloat, CarMain, CarSection, TitleChidrenComponents } from '../../../styles/home/car';
// images
import { ReactComponent as Motor } from '../../../images/common/icon-car.svg';
import carDiscount from '../../../images/home/member/car/car-discount.jpg';
import counselor from '../../../images/home/member/car/car-ai-counselor.jpg';

import { ReactComponent as Arrow } from '../../../images/common/icon-double-arrow.svg';
import desk from '../../../images/common/icon-desk-phone02.svg';
import phone from '../../../images/common/icon-phone03.svg';
import smile from '../../../images/common/icon-smile.svg';

const Car = () => {
  return (
    <MainLayout 
      headerBack 
      backTitle="자동차 다이렉트 보험" 
    >
      <CarSection>
        <CarMain>
          <div className='car-main-head'>
            <p>
              1년에 딱 한번 <Motor fill="white"/> <br/>
              보험료가 저렴해지는 순간!
            </p>
          </div>

          <div className='car-main-foot'>
            <p>
              보험료 얼마까지 내려가는지 국내 보험사의 <br /> 다이렉트 보험 상품만 비교, 견적을 받아보세요.
            </p>
          </div>

          <hr />
        </CarMain>

        <TitleChildren
          title="국내 다이렉트 상품을 손쉽게 비교"
        >
          <GoodsKind />
        </TitleChildren>

        <hr />

        <TitleChildren title="비교하면 할수록 보험료 할인">
          <TitleChidrenComponents>
            <div className='title-children-discount'>
              <img src={carDiscount} alt="비교하면 할수록 보험료 할인" />
            </div>
          </TitleChidrenComponents>
        </TitleChildren>

        <hr />

        <TitleChildren title="AI 최저가 설계 및 전문 상담사 안내">
          <TitleChidrenComponents>
            <div className='title-children-discount'>
              <img src={counselor} alt="AI 최저가 설계 및 전문 상담사 안내" />
            </div>
          </TitleChidrenComponents>
        </TitleChildren>

        <hr />

        <TitleChildren title="신청방법">
          <TitleChidrenComponents>
            <div className='apply-content'>
              <div className='apply-group'>
                <div className='svg'>
                  <img src={desk} alt="상담 접수" />
                </div>
                <div className='apply-txt'>
                  <p>상담 접수</p>
                </div>
              </div>
              <Arrow fill='#000000' />
              <div className='apply-group'>
                <div className='svg'>
                  <img src={phone} alt="견적 비교 및 전문 상담" />
                </div>
                <div className='apply-txt'>
                  <p>견적 비교 및 <br /> 전문 상담</p>
                </div>
              </div>
              <Arrow fill='#000000'/>
              <div className='apply-group'>
                <div className='svg'>
                  <img src={smile} alt="보험료 할인 가입" />
                </div>
                <div className='apply-txt'>
                  <p>보험료 <br /> 할인 가입</p>
                </div>
              </div>
            </div>
          </TitleChidrenComponents>
        </TitleChildren>

        <CarFloat>
          <p>
            내 자동차 보험료 얼마나 내려갈까?
          </p>
          <Button 
            kind="btn_08"
            width="86px"
            height="32px"
            children="비교하기"
          />
        </CarFloat>
      </CarSection> 
    </MainLayout>
  );
};

export default Car;