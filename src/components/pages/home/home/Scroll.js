import React, { useEffect, useRef } from 'react';
// components
import { TitleBtnImg } from '../../../detail';
// css
import { ScrollSection } from '../../../../styles/home/home';
// images
import scrollBg02 from '../../../../images/home/home/scroll-bg-02.jpg';
import scrollBg03 from '../../../../images/home/home/scroll-bg-03.jpg';

const Scroll = ({ state, setState }) => {
  const scrollRef = useRef(null);

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <ScrollSection>
      <div className='starbucks' ref={scrollRef}>
        <div className='starbucks-txt-wrap'>
          <p className='main-txt'>스타벅스와 함께</p>
          <p className='sub-txt'>크리스마스의 즐거움을 나눠보세요.</p>
        </div>
      </div>
      
      <TitleBtnImg 
        title="신규 입점 매장"
        btnTxt="모두보기"
        imgSrc={[scrollBg02]}
      />
      <TitleBtnImg 
        title="지금 인기 메뉴"
        btnTxt="모두보기"
        imgSrc={[scrollBg02, scrollBg03]}
      />
    </ScrollSection>
  );
};

export default Scroll;