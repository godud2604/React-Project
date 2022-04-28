/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// components
import { NavBottom } from '../../../components/layout/front/footer';
import { Alert, Button } from '../../../components/modal';
import { HeaderNav } from '../../../components/layout/front/header';
import Scroll from '../../../components/pages/home/home/Scroll';
// 개발자 라이브러리
import SwiperSection from '../../../components/pages/home/home/SwiperSection';
import { saveUrl } from '../../../redux/actions/auth';
// css
import { Container, MainSection } from '../../../styles/home/home';
// images
import bell from '../../../images/common/gray-bell.svg';

const Home = ({ logInModal, prevPathName }) => {
  
  const dispatch = useDispatch();
  const history = useHistory();
  const [state, setState] = useState({
    isHeaderColor: false,
    isLogInMadal: logInModal,
  });

  const { isHeaderColor, isLogInMadal } = state;

  return (
    <React.Fragment>
      <HeaderNav 
        headerKind={isHeaderColor ? 'header-white' : undefined}
      />
      <Container>
        <MainSection>
          <SwiperSection />

          <div className='main-btn'>
            <Button
              kind="btn_04"
              width="100%"
              imgSrc={bell}
              children={"새로운 알림"}              
            />
          </div>
        </MainSection>

        <Scroll 
          state={state}
          setState={setState}
        />
      </Container>
      <NavBottom />

      {isLogInMadal && (
        <Alert 
          kind="alert-1"
          title="먹플 회원전용 서비스"
          sub1="로그인이 필요한 서비스입니다."
          btnTxt1="회원가입"
          btnTxt2="로그인"
          onClick1={(e) => {
            e.stopPropagation(); // 버블링현상 방지
            setState({
              ...state,
              isLogInMadal: false,
            });
            history.push('/signup')
          }}
          onClick2={(e) => {
            e.stopPropagation(); // 버블링현상 방지
            setState({
              ...state,
              isLogInMadal: false,
            });
            dispatch(saveUrl(prevPathName));
            history.push('/login')
          }}
          bgClick={() => {
            setState({
              ...state,
              isLogInMadal: false,
            });
            history.push('/');
          }}
        />
      )}
    </React.Fragment>
  );
};

export default Home;