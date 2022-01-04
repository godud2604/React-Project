import React from 'react';
// css
import styled from 'styled-components';
import theme from '../../../styles/theme';
const Alert = ({
  title,
  sub1,
  sub2,
  sub3,
  btnTxt1,
  btnTxt2,
  onClick1,
  onClick2,
  bgClick, // 배경 클릭 시, 모달 닫히게
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
    <StyledModal
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
      
      onClick={bgClick}
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
    </StyledModal>
  );
};

export default Alert;

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: center;
 
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;

  .shadow-modal {
    width: 100%;
    min-height: 189px;
    overflow: hidden;
    border-radius: 20px;
    background: ${theme.colors.white};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }

  .img {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  .text {
    background-color: ${theme.colors.white};
    padding: ${(props) => (props.padding ? props.padding : '')};
  }

  h2 {
    ${theme.H2};
    color: ${theme.colors.black1};

    &.alert-title {
      margin-bottom: 10px;
    }
  }

  p {
    ${theme.Body1};
    color: ${theme.colors.grey2};
    word-break: keep-all; // 단어 단위로 줄바꿈

    &.sub3 {
      padding-top: 20px;
    }
  }

  .button {
    width: 100%;
    height: 100%;

    button {
      padding: 8px 15px 7px;
      ${theme.Title};
      color: ${(props) => (props.btnColor ? props.btnColor : `${theme.colors.white}`)};
      background: ${(props) =>
    props.btnBackColor ? props.btnBackColor : `${theme.colors.lavender}`};
      border-radius: 20px;
      outline: none;
    }
  }

`;
