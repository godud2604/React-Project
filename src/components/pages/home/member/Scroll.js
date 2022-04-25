import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
// components
import { SubNav } from '../../../layout/front/header';
import { TitleBtnImg } from '../../../detail';
// css
import { ScrollSection } from '../../../../styles/home/member';
// images
import scrollBg02 from '../../../../images/home/home/scroll-bg-02.jpg';
import scrollBg03 from '../../../../images/home/member/scroll-bg-03.jpg';

const Scroll = () => {
  const history = useHistory();
  const scrollRef = useRef(null);

  const IndexRef = useRef();
  const focusRef = useRef();

  const [isFixed, setIsFixed] = useState(false); // subNav fixed

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  
  const subNavInfo = [
    {
      "id": 1,
      "title": '휴대폰',
    },
    {
      "id": 2,
      "title": '자동차 다이렉트 보험 할인',
    },
    {
      "id": 3,
      "title": '컨시어지',
    },
  ];

  // subNav fixed when scroll
  const handleScroll = () => {
    if(!scrollRef.current) return;

    const scrollTop = scrollRef.current.getBoundingClientRect().top;
    
    if (scrollTop <= 70 || null) {
      setIsFixed(true);

      if (scrollTop >= -266) {
        // nav 휴대폰 color change
        setToggleState(1);
      } else if (scrollTop < -265 && scrollTop >= -717 ){
        // nav 자동차 다이렉트 보험 할인 color change
        setToggleState(2); 
      } else {
        // nav concierge color change
        setToggleState(3); 
      }
    } else {
      setIsFixed(false);
    }
  };

  // subNav fixed when scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  // subNav 클릭 시, 해당 nav로 이동
  useEffect(() => {
    let nodes = [];

    const IndexClickEvent = (node, i) => {
      // removeEvent를 위해 외부 배열에 담아둠
      nodes.push(node);

      node.addEventListener('click', () => {
        const headerHeight = 70;
        const pointHeight = 42;
        const swiperHeight = 294;
        const phoneHeight = 32 + 218;
        const carHeight = 32 + 380; 

        let kind = focusRef.current.children[i].className.split(' ')[2];

        switch(kind) {
          case 'phone':
            window.scrollTo({
              top: headerHeight + pointHeight + swiperHeight - 20,
              behavior: 'smooth',
            })
            break;
          case 'car':
            window.scrollTo({
              top: headerHeight + pointHeight + swiperHeight + phoneHeight + 30,
              behavior: 'smooth',
            })
            break;
          case 'concierge':
            window.scrollTo({
              top: headerHeight + pointHeight + swiperHeight + phoneHeight + carHeight + 80,
              behavior: 'smooth',
            })
            break;
          default:
            console.log('not kind')
            break;
        }
      });
    };

    if (IndexRef.current) {
      console.log(IndexRef.current.children);

      // HTMLCollection 유사 배열이기 때문에, 배열 메서드 중 일부를 지원 안함. forEach나 .map 사용 불가
      // 따라서 destucturing으로 배열에 다시 담아줬음
      [...IndexRef.current.children].map((node, i) => IndexClickEvent(node, i));
    }

    return nodes.map((node, i) => node.removeEventListener('click', IndexClickEvent(node, i)));

  }, []);


  return (
    <ScrollSection ref={scrollRef}>
      <SubNav
        nav={subNavInfo}
        toggleState={toggleState}
        toggleTab={toggleTab}
        btmColor="#E83F6F"
        kind={isFixed ? 'fixed-active' : undefined}
        ref={IndexRef}
      />

      <div 
        className='nav-menu' 
        ref={focusRef}
      >
        <TitleBtnImg
          title="휴대폰 특가 할인"
          kind="phone"

          btnTxt="자세히보기"
          btnWidth="100px"
          btnClick={() => history.push('/member/phone')}
          children
        >
          <div className='member-phone'>
            <div className='member-phone-txt-wrap'>
              <p className='main-txt'>갤럭시 S21 Ultra</p>
            </div>
          </div>
        </TitleBtnImg>

        <TitleBtnImg 
          title="자동차 보험 할인"
          kind="car"

          btnTxt="자세히보기"
          btnWidth="100px"
          btnClick={() => history.push('/member/car')}

          imgSrc={[scrollBg03, scrollBg02]}
          
        />
        <TitleBtnImg 
          title="컨시어지"
          kind="concierge"

          btnTxt="자세히보기"
          btnWidth="100px"
          btnClick={() => history.push('/member/concierge')}

          imgSrc={[scrollBg03, scrollBg02]}
        />
      </div>

    </ScrollSection>
  );
};

export default Scroll;