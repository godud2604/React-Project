import React from 'react';
// css
import { Container, SettingInner } from '../../../../styles/components/layout/sidebar';
// images
import { ReactComponent as RightArrow } from '../../../../images/common/btn-arrow-right.svg';
import { ReactComponent as BackArrow } from '../../../../images/common/btn-arrow-back.svg';


const SideBarSetting = ({ state, setState }) => {
  return (
    <Container sideSubPage>
      <SettingInner>
        <div className='sidebar-close' onClick={() => setState({ ...state, isSideSetting: false })}>
          <BackArrow 
            width="24px"
            height="24px"
            fill='#828282'
          />
        </div>

        <div className='sidebar-setting-head'>
          <h1 className='title'>환경설정</h1>
          <p>
            <strong>현재버전 1.0.0</strong>
            <span>최신 버전 사용중</span>
          </p>
        </div>
        
        <nav className='sidebar-list-wrap'>
          <h2 className='title'>약관 및 서비스 정책 안내</h2>
          <ul className='sidebar-list'>
            <li className='sidebar-item'>
              <div className="left">
                <span>서비스 이용약관</span>
              </div>
              <RightArrow 
                fill='#828282'
              />
            </li>
            <li className='sidebar-item'>
              <div className="left">
                <span>개인정보 취급방침</span>
              </div>
              <RightArrow 
                fill='#828282'
              />
            </li>
          </ul>

          <h2 className='title'>서비스</h2>
          <ul className='sidebar-list'>
            <li className='sidebar-item'>
              <div className="left">
                <span>푸시알림</span>
              </div>
              <RightArrow 
                fill='#828282'
              />
            </li>
            <li className='sidebar-item'>
              <div className="left">
                <span>위치정보서비스 사용</span>
              </div>
              <RightArrow 
                fill='#828282'
              />
            </li>
            <li className='sidebar-item'>
              <div className="left">
                <span>마케팅 활용/광고성 정보 수신</span>
              </div>
              <RightArrow 
                fill='#828282'
              />
            </li>
          </ul>
        </nav>
      </SettingInner>
    </Container>
  );
};

export default SideBarSetting;