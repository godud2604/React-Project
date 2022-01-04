import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Pagination, Navigation, Autoplay
} from 'swiper';
// 개발자 라이브러리
import { Alert, Button } from '../../../components/common/modal';
import HeaderNav from '../../../components/common/header/HeaderNav';
import Footer from '../../../components/common/footer/Footer';
// css
import { Container, MainSection, ScrollSection } from '../../../styles/home/home';
// images
import bell from '../../../images/common/gray-bell.svg';
import scrollBg02 from '../../../images/home/scroll-bg-02.jpg';
import scrollBg03 from '../../../images/home/scroll-bg-03.jpg';

const Home = ({ logInModal }) => {
  SwiperCore.use([ Pagination, Navigation, Autoplay]);
  
  const history = useHistory();
  const scrollRef = useRef(null);
  const [state, setState] = useState({
    isHeaderColor: false,
    isLogInMadal: logInModal,
  });

  // header color change when scroll
  const handleScroll = () => {
    if(!scrollRef.current) return;

    if (scrollRef.current.getBoundingClientRect().top <= 88 || null) {
      setState({
        ...state,
        isHeaderColor: true,
      });

    } else {
      setState({
        ...state,
        isHeaderColor: false,
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  const { isHeaderColor, isLogInMadal } = state;

  return (
    <React.Fragment>
      <HeaderNav 
        headerKind={isHeaderColor ? 'header-white' : ''}
      />
      <Container>
        <MainSection>
          <Swiper 
            pagination={{
              "type": "fraction"
            }} 
            loop={true}
            autoplay={{ delay: 2000 }}
            navigation={true} 
            className="home-swiper"
          >
            <SwiperSlide>
              <div className='main-txt-wrap'>
                <h1 className='title'>드림어반스퀘어 입점</h1>
                <p className='sub'>
                  진주혁신도시의 핫플레이스 <br />
                  드림어반스퀘어 맛집,핫플 모두 만나 보세요.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='main-txt-wrap'>
                <h1 className='title'>추가 배너2</h1>
                <p className='sub'>
                  진주혁신도시의 핫플레이스 <br />
                  드림어반스퀘어 맛집,핫플 모두 만나 보세요.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='main-txt-wrap'>
                <h1 className='title'>추가 배너3</h1>
                <p className='sub'>
                  진주혁신도시의 핫플레이스 <br />
                  드림어반스퀘어 맛집,핫플 모두 만나 보세요.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className='main-btn'>
            <Button
              kind="btn_04"
              width="100%"
              imgSrc={bell}
              children={"새로운 알림"}              
            />
          </div>
        </MainSection>

        <ScrollSection>
          <div className='starbucks' ref={scrollRef}>
            <div className='starbucks-txt-wrap'>
              <p className='main-txt'>스타벅스와 함께</p>
              <p className='sub-txt'>크리스마스의 즐거움을 나눠보세요.</p>
            </div>
          </div>

          <div className='home-slide-menu'>
            <div className='menu-content'>
              <h2>신규 입점 매장</h2>
              <Button
                width="86px"
                height="32px"
                kind="btn_02"
                children={"모두보기"}
              />
            </div>
            <div className='menu-image'>
              <img src={scrollBg02} alt="신규 입점 매장" />
            </div>
          </div>

          <div className='home-slide-menu'>
            <div className='menu-content'>
              <h2>지금 인기 메뉴</h2>
              <Button
                width="86px"
                height="32px"
                kind="btn_02"
                children={"모두보기"}
              />
            </div>
            <div className='menu-image'>
              <img src={scrollBg03} alt="지금 인기 메뉴" />
            </div>
          </div>
        </ScrollSection>
      </Container>
      <Footer />

      {isLogInMadal && (
        <Alert 
          kind="alert-1"
          title="먹플 회원전용 서비스"
          sub1="로그인이 필요한 서비스입니다."
          btnTxt1="회원가입"
          btnTxt2="로그인"
          onClick1={(e) => {
            e.stopPropagation(); // 버블링현상 방지
            history.push('/signup')
          }}
          onClick2={(e) => {
            e.stopPropagation(); // 버블링현상 방지
            history.push('/login')
          }}
          bgClick={() => {
            history.push('/');
          }}
        />
      )}
    </React.Fragment>
  );
};

export default Home;