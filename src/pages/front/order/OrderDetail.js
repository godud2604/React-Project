import React from 'react';
// components
import { MainLayout } from '../../../components/layout/front';
import { Button } from '../../../components/modal';
// css
import { OrderDetailInner } from '../../../styles/order/order';
// images
import store from '../../../images/home/main-bg.jpg';
import { ReactComponent as Location } from '../../../images/common/icon-location.svg';
import { ReactComponent as Minus } from '../../../images/common/btn-minus.svg';
import { ReactComponent as Plus } from '../../../images/common/btn-plus.svg';


const OrderDetail = () => {
  return (
    <MainLayout 
      headerBack 
      backTitle="불막열삼" 
      backBg="rgba(255, 255, 255, 0.5)"
      backArrowColor="#333333"
    >
      <OrderDetailInner>
        <div className='main-bg'>
          <img src={store} alt="매장 사진" />
        </div>
        
        <div className='order-detail-content'>
          <article>
            <h1 className='detail-title'>생막창</h1>
            <div className='detail-num'>
              <strong>9,900원</strong>
              <Button 
                kind="btn_06"
                children="990포인트"
                width="74px"
                height="27px"
                fontSize="12px"
              />
            </div>

            <hr />

            <p className='detail-sub'>16가지 비법 재료로 맛을 낸 삶지 않은 과일 숙성 생막창</p>
            <div className='detail-location'>
              <Location 
                fill="#4F4F4F"
              />
              <span>드림어반스퀘어 1층</span>
            </div>
          </article>
        </div>

        <div className='order-detail-footer'>
          <div className='detail-count'>
            <div className='detail-count-num'>
              <Minus />
              <strong>1</strong>
              <Plus />
            </div>

            <strong className='detail-count-price'>9,900원</strong>
          </div>

          <div className='detail-count-btn'>
            <Button 
              kind="btn_03"
              children="포장주문"
              width="116px"
              height="40px"
              margin="0 10px 0 0"
            />
            <Button 
               kind="btn_02"
               children="장바구니"
               width="116px"
               height="40px"
            />
          </div>
        </div>
      </OrderDetailInner>
    </MainLayout>
  );
};

export default OrderDetail;