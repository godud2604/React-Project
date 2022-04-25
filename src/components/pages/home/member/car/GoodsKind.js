import React from 'react';
import { Container } from '../../../../../styles/components/home/member/car/goodsKind';
// imagrs
import hana from '../../../../../images/home/member/car/hana.png';
import hyeondae from '../../../../../images/home/member/car/hyeondae.png';
import heungGug from '../../../../../images/home/member/car/heung-gug.png';
import db from '../../../../../images/home/member/car/db.png';
import axa from '../../../../../images/home/member/car/axa.png';
import carrot from '../../../../../images/home/member/car/carrot.png';
import meritz from '../../../../../images/home/member/car/meritz.png';
import hanhwa from '../../../../../images/home/member/car/hanhwa.png';
import haika from '../../../../../images/home/member/car/hyeondae-haika.png';
import kb from '../../../../../images/home/member/car/kb.png';

const GoodsKind = () => {
  return (
    <Container>
      <div className='goods-kind-content'>
        <img src={hana} alt="하나 에듀카 자동차 보험" />
        <div className='goods-kind-title'>
          <span>하나 에듀카 자동차 보험</span>
        </div>
      </div>
      <div className='goods-kind-content'>
        <img src={hyeondae} alt="현대해상 다이렉트" />
         <div className='goods-kind-title'>
          <span>현대해상 다이렉트</span>
        </div>
      </div>
      <div className='goods-kind-content'>
        <img src={heungGug} alt="흥국 이유다이렉트 자동차 보험" />
         <div className='goods-kind-title'>
          <span>흥국 이유다이렉트 자동차 보험</span>
        </div>
      </div>
      <div className='goods-kind-content'>
        <img src={db} alt="DB손해보험 다이렉트" />
         <div className='goods-kind-title'>
          <span>DB손해보험 다이렉트</span>
        </div>
      </div>
      <div className='goods-kind-content'>
        <img src={axa} alt="AXA 다이렉트자동차보험" />
         <div className='goods-kind-title'>
          <span>AXA 다이렉트자동차보험</span>
        </div>
      </div>
      <div className='goods-kind-content'>
        <img src={carrot} alt="캐롯퍼마일자동차보험" />
         <div className='goods-kind-title'>
          <span>캐롯퍼마일자동차보험</span>
        </div>
      </div>
      <div className='goods-kind-content'>
        <img src={meritz} alt="메리츠화재 다이렉트" />
         <div className='goods-kind-title'>
          <span>메리츠화재 다이렉트</span>
        </div>
      </div>
      <div className='goods-kind-content'>
        <img src={hanhwa} alt="한화다이렉트 자동차보험" />
         <div className='goods-kind-title'>
          <span>한화다이렉트 자동차보험</span>
        </div>
      </div>
      <div className='goods-kind-content'>
        <img src={haika} alt="현대해상 하이카 다이렉트" />
         <div className='goods-kind-title'>
          <span>현대해상 하이카 다이렉트</span>
        </div>
      </div>
      <div className='goods-kind-content'>
        <img src={kb} alt="KB 손해보험 다이렉트" />
         <div className='goods-kind-title'>
          <span>KB 손해보험 다이렉트</span>
        </div>
      </div>
      
      
    </Container>
  );
};

export default GoodsKind;