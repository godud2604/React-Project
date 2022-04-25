import React, { useState } from 'react';
// components
import { MainLayout } from '../../../components/layout/front';
import { Desc, PhoneMain, PhoneToast, TelecomPhone } from '../../../components/pages/home/member/phone';
import { Point } from '../../../components/pages/home/member';
// css
import { PhoneSection, VarietyPhone, FreeGift, Apply, PhoneFloat } from '../../../styles/home/phone';
// images
import variery01 from '../../../images/home/member/desc-01.jpg'
import variery02 from '../../../images/home/member/main-bg.jpg'
import variery03 from '../../../images/home/member/member-phone-new.jpg'

import free01 from '../../../images/home/member/member-phone-free-01.png'
import free02 from '../../../images/home/member/member-phone-free-02.png'
import free03 from '../../../images/home/member/member-phone-free-03.png'
import free04 from '../../../images/home/member/member-phone-free-04.png'

import desk from '../../../images/common/icon-desk-phone.png';
import counsel from '../../../images/common/icon-counsel.png';
import delivery from '../../../images/common/icon-delivery-truck.png';
import { ReactComponent as Gift } from '../../../images/common/icon-present.svg';
import { ReactComponent as Arrow } from '../../../images/common/icon-double-arrow.svg';


const Phone = () => {
  const [state, setState] = useState({
    isToast: false,

    userName: '',
    hpNo: '',

    telecom: '1',
    telecomOptions: [
      { code: '1', name: 'SKT'},
      { code: '2', name: 'KT'},
      { code: '3', name: 'LG'},
      { code: '4', name: 'SKT'},
    ]
  });

  return (
    <MainLayout 
      headerBack 
      backTitle="휴대폰 신청" 
    >
      <PhoneSection>
        <Point />
        <PhoneMain />
        <Desc />
        <TelecomPhone />
        
        <VarietyPhone>
          <h2>다양한 최신폰 제공</h2>
          <div className='varierty-img'>
            <div className='img'>
              <img src={variery01} alt="다양한 최신폰 제공" />
            </div>
            <div className='img'>
              <img src={variery02} alt="다양한 최신폰 제공" />
            </div>
            <div className='img'>
              <img src={variery03} alt="다양한 최신폰 제공" />
            </div>
          </div>
        </VarietyPhone>

        <FreeGift>
          <h2>풍성한 사은품 증정</h2>
          <div className='free-gift-content'>
            <div className='gift-wrap'>
              <div className='img'>
                <img src={free01} alt="휴대폰케이스" />
              </div>
              <p>휴대폰케이스</p>
            </div>
            <div className='gift-wrap'>
              <div className='img'>
                <img src={free02} alt="보조배터리" />
              </div>
              <p>보조배터리</p>
            </div>
            <div className='gift-wrap'>
              <div className='img'>
                <img src={free03} alt="휴대용 가습기" />
              </div>
              <p>휴대용 가습기</p>
            </div>
            <div className='gift-wrap'>
              <div className='img'>
                <img src={free04} alt="고속 충전기" />
              </div>
              <p>고속 충전기</p>
            </div>
          </div>
        </FreeGift>
        
        <Apply>
          <h2>신청 방법 안내</h2>
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
                <img src={counsel} alt="상담" />
              </div>
              <div className='apply-txt'>
                <p>상담</p>
              </div>
            </div>
            <Arrow fill='#000000'/>
            <div className='apply-group'>
              <div className='svg'>
                <img src={delivery} alt="빠른 선배송" />
              </div>
              <div className='apply-txt'>
                <p>빠른 <br /> 선배송</p>
              </div>
            </div>
            <Arrow fill='#000000'/>
            <div className='apply-group'>
              <div className='svg'>
                <Gift fill='#000000' />
              </div>
              <div className='apply-txt'>
                <p>개통 완료 및 <br />사은품 수령</p>
              </div>
            </div>
          </div>
        </Apply>

        <PhoneFloat onClick={() => setState({ ...state, isToast: true })}>
          멤버쉽 포인트로 휴대폰 신청
        </PhoneFloat>
      </PhoneSection>

      {state.isToast && (
        <PhoneToast 
          state={state} 
          setState={setState} 
        />
      )}
    </MainLayout>
  );
};

export default Phone;