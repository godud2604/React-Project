import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// components
import { Alert, Button } from '../../../modal';
import { SideBarSetting, SideBarInfo } from './';
// 개발자 라이브러리
import { logoutRequest } from '../../../../redux/actions/auth';
import { setSideTabStatus } from '../../../../redux/actions/side';
// css
import { Container } from '../../../../styles/components/layout/sidebar';
// images
import { ReactComponent as Setting } from '../../../../images/common/btn-setting.svg';
import { ReactComponent as Phone } from '../../../../images/common/icon-mobile.svg';
import { ReactComponent as AirPlane } from '../../../../images/common/icon-airplane.svg';
import { ReactComponent as Service } from '../../../../images/common/btn-receipt.svg';
import { ReactComponent as Bell } from '../../../../images/common/gray-bell.svg';
import { ReactComponent as MyInfo } from '../../../../images/common/icon-person.svg';
import { ReactComponent as RightArrow } from '../../../../images/common/btn-arrow-right.svg';
import { ReactComponent as BackArrow } from '../../../../images/common/btn-arrow-back.svg';


const SideBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const auth = useSelector((store) => store.auth);
  const SIDEBAR_STATUS = useSelector((store) => store.sidebar.isSideBar);

  const [state, setState] = useState({
    isLogInMadal: SIDEBAR_STATUS,
    isSideSetting: false, // 환경설정
    isSideInfo: false, // 내 정보
  });

  if (state.isSideSetting) {
    return <SideBarSetting state={state} setState={setState} />
  }

  if (state.isSideInfo) {
    return <SideBarInfo state={state} setState={setState} />
  }

  return (
    <React.Fragment>
      { state.isLogInMadal && !auth.authStatus.isLogIn ? (
         <Alert 
          kind="alert-1"
          title="먹플 회원전용 서비스"
          sub1="로그인이 필요한 서비스입니다."
          btnTxt1="회원가입"
          btnTxt2="로그인"
          onClick1={(e) => {
            e.stopPropagation();
            dispatch(setSideTabStatus(false));
            history.push('/signup')
          }}
          onClick2={(e) => {
            e.stopPropagation();
            dispatch(setSideTabStatus(false));
            history.push('/login')
          }}
          bgClick={() => {
            dispatch(setSideTabStatus(false));
            history.push('/');
          }}
        />
       ) : (
        <React.Fragment>
          <Container>
            <div className='sidebar-close' onClick={() =>  dispatch(setSideTabStatus(false))}>
              <BackArrow 
                width="24px"
                height="24px"
                fill='#828282'
              />
            </div>
            <div className='sidebar-more'>
              <h1>더보기</h1>
              <div onClick={() => setState({ ...state, isSideSetting: true })}>
                <Setting 
                  stroke='#828282'
                />
              </div>
            </div>

            <nav className='sidebar-list-wrap'>
              <ul className='sidebar-list'>
                <li className='sidebar-item'>
                  <div className="left">
                    <Phone
                      width="24px"
                      height="24px"
                      fill='#828282'
                    />
                    <span>최신 휴대폰 할인</span>
                  </div>
                  <RightArrow 
                    fill='#828282'
                  />
                </li>
                <li className='sidebar-item'>
                  <div className="left">
                    <AirPlane
                      width="24px"
                      height="24px"
                      fill='#828282'
                    />
                    <span>여행/숙박 할인 서비스</span>
                  </div>
                  <RightArrow 
                    fill='#828282'
                  />
                </li>
                <li className='sidebar-item'>
                  <div className="left">
                    <Service
                      width="24px"
                      height="24px"
                      fill='#828282'
                    />
                    <span>서비스 이용 내역</span>
                  </div>
                  <RightArrow 
                    fill='#828282'
                  />
                </li>
                <li className='sidebar-item'>
                  <div className="left">
                    <Bell
                      width="24px"
                      height="24px"
                      fill='#828282'
                    />
                    <span>알림</span>
                  </div>
                  <RightArrow 
                    fill='#828282'
                  />
                </li>
                <li className='sidebar-item' onClick={() => setState({ ...state, isSideInfo: true })}>
                  <div className="left">
                    <MyInfo
                      width="24px"
                      height="24px"
                      fill='#828282'
                    />
                    <span>내 정보</span>
                  </div>
                  <RightArrow 
                    fill='#828282'
                  />
                </li>
              </ul>
            </nav>

            <Button
              kind="btn_03"
              children="(임시)로그아웃"
              onClick={() => dispatch(logoutRequest())}
              margin="30px 0 0 0"
            />
          </Container>
        </React.Fragment>
      )}
    </React.Fragment>

  );
};

export default SideBar;