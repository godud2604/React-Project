
// ******************************************************************************
// 1. image 한 개
// <TitleBtnImg 
//  title="신규 입점 매장"
//  btnTxt="모두보기"
//  imgSrc={[scrollBg02]}
// />
//
// 2. image 두 개 이상
// <TitleBtnImg 
//  title="지금 인기 메뉴"
//  btnTxt="모두보기"
//  imgSrc={[scrollBg02, scrollBg03]}
// />
// ******************************************************************************

import React, { forwardRef } from 'react';
// components
import { Button } from '../modal';
// css
import { Container } from '../../styles/components/detail/titleBtnImg';

const TitleBtnImg = forwardRef(({
  title,
  kind,

  btnClick,
  btnTxt,
  btnWidth,

  imgSrc,


  children,
}, ref) => {

  // image 만 있을 때
  if (imgSrc) {
    return (
      <Container ref={ref} className={kind}>
        <div 
          className='menu-content' 
        >
          <h2>{title}</h2>
          <Button
            width={btnWidth ? btnWidth : '86px'}
            height="32px"
            kind="btn_02"
            children={btnTxt}
            onClick={btnClick}
          />
        </div>
  
        {imgSrc.map((img, idx) => {
          return (
            <div className='menu-image' key={idx}>
              <img src={img} alt={title} />
            </div>
          )
        })}
      </Container>
    );
  }

  // 그 외의 children은 상위 컴포넌트에서 구현
  if (children) {
    return (
      <Container ref={ref} className={kind}>
        <div 
          className='menu-content' 
        >
          <h2>{title}</h2>
          <Button
            width={btnWidth ? btnWidth : '86px'}
            height="32px"
            kind="btn_02"
            children={btnTxt}
            onClick={btnClick}
          />
        </div>

        {children}
      </Container>
    );
  }
});

export default TitleBtnImg;