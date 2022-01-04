import React, { useEffect, useRef, useState } from 'react';
// 개발자 라이브러리
import { Button } from '../../../components/common/modal';
import HeaderNav from '../../../components/common/header/HeaderNav';
import Footer from '../../../components/common/footer/Footer';
// css
import { Container, MainSection, ScrollSection } from '../../../styles/home/home';
// images
import bell from '../../../images/common/gray-bell.svg';
import scrollBg02 from '../../../images/home/scroll-bg-02.jpg';
import scrollBg03 from '../../../images/home/scroll-bg-03.jpg';

const Home = () => {
  const scrollRef = useRef(null);
  const [state, setState] = useState({
    isHeaderColor: false,
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

  const { isHeaderColor } = state;

  return (
    <React.Fragment>
      <HeaderNav 
        headerKind={isHeaderColor ? 'header-white' : ''}
      />
      <Container>
        <MainSection>
          <div className='main-txt-wrap'>
            <h1 className='title'>드림어반스퀘어 입점</h1>
            <p className='sub'>
              진주혁신도시의 핫플레이스 <br />
              드림어반스퀘어 맛집,핫플 모두 만나 보세요.
            </p>
          </div>

          <div className='main-btn'>
            <Button
              width="100%"
              imgSrc={bell}
              children={"새로운 알림"}              
            />
          </div>
        </MainSection>

        <ScrollSection className='scroll-section'>
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
    </React.Fragment>
  );
};

export default Home;