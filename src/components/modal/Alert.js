
// ******************************************************************************
//* { isLogInMadal && (
//*   <Alert 
//*     kind="alert-1"
//*     title="먹플 회원전용 서비스"
//*     sub1="로그인이 필요한 서비스입니다."
//*     btnTxt1="회원가입"
//*     btnTxt2="로그인"
//*     onClick1={(e) => {
//*       e.stopPropagation(); // ** 버블링현상 방지
//*       history.push('/signup')
//*     }}
//*     onClick2={(e) => {
//*       e.stopPropagation(); // ** 버블링현상 방지
//*       history.push('/login')
//*     }}
//*     bgClick={() => {
//*       // 배경 클릭 시, 모달 닫히는 기능
//*     }}
//*   />
//* )}
//*
//* ===> bgClick 사용 시, onClick1과 onClick2에 버블링현상 방지 사용해주어야 합니다
// *********************************************************************************

import React from 'react';
// css
import { GlobalAlert } from '../../styles/components/modal/alert';

const Alert = ({
  title,
  sub1,
  sub2,
  sub3,
  btnTxt1,
  btnTxt2,
  onClick1,
  onClick2,
  bgClick, // 배경 클릭 시, 모달 닫히는 기능
  img,

  // css
  kind,
  width,
  height,
  padding,
  titleColor,
  subColor,
  btnColor,
  btnBackColor,
}) => {
  
  return (
    <GlobalAlert
      className={kind}
      titleColor={titleColor}
      btnColor={btnColor}
      btnBackColor={btnBackColor}
      subColor={subColor}
      width={width}
      height={height}
      padding={padding}
      btnTxt1={btnTxt1}
      btnTxt2={btnTxt2}
      
      onClick={bgClick} // 배경 클릭 시, 모달 닫히는 기능
    >
      <div className={'shadow-modal'}>
        <div className="text">
          {img && (
            <div className="img">
              <img src={img} alt="모달 이미지" />
            </div>
          )}

          {title && <h2 className="alert-title">{title}</h2>}

          <p>
            {sub1} <br />
            {sub2}
          </p>

          {sub3 && <p className="sub3">{sub3}</p>}
        </div>

        <div className="button">
          {(kind === 'alert-1' || kind === 'alert-3') && (
            <React.Fragment>
              <button 
                type="button"
                className='btn1' 
                onClick={onClick1}
              >
                {btnTxt1 ? btnTxt1 : '취소'}
              </button>
              <button
               type="button"
               className="btn2" 
               onClick={onClick2}
              >
                {btnTxt2 ? btnTxt2 : '확인'}
              </button>
            </React.Fragment>
          )}
          {(kind === 'alert-2' || kind === 'alert-4') && (
            <button type="button" onClick={onClick1}>
              확인
            </button>
          )}
        </div>
      </div>
    </GlobalAlert>
  );
};

export default Alert;

