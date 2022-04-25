import React, { useState } from 'react';
// 개발자 라이브러리
import { logoutRequest } from '../../../../redux/actions/auth';
import { useDispatch } from 'react-redux';
// components
import { Input, InputBtn } from '../../../input';
import { Toast } from '../../../modal';
// css
import { Container, InfoInner } from '../../../../styles/components/layout/sidebar';
// images
import kakao from '../../../../images/common/icon-kakao.png';
import naver from '../../../../images/common/icon-naver.png';
import { ReactComponent as BackArrow } from '../../../../images/common/btn-arrow-back.svg';
import { ReactComponent as RightArrow } from '../../../../images/common/btn-arrow-right.svg';
import { ReactComponent as SwitchOff } from '../../../../images/common/btn-switch-off.svg';
import { ReactComponent as SwitchOn } from '../../../../images/common/btn-switch-on.svg';


const SideBarInfo = ({ state, setState }) => { 
  const dispatch = useDispatch();

  const [toast, setToast] = useState({
    name: false,
    password: false,
  });

  return (
    <Container sideSubPage>
      <InfoInner>
        <div className='sidebar-close' onClick={() => setState({ ...state, isSideInfo: false })}>
          <BackArrow 
            width="24px"
            height="24px"
            fill='#828282'
          />
        </div>

        <div className='sidebar-info-head'>
          <div className='info'>
            <h1>더보기</h1>
            <span className='id'>myId</span>
          </div>
          <span className='logout' onClick={() => dispatch(logoutRequest())}>로그아웃</span>
        </div>

        <InputBtn 
          margin="0 0 30px 0"
          ipTitle="닉네임"
          btnKind="btn_02"
          btnTxt="변경"
          btnWd="68px"
          btnHt="32px"
          onClick={() => setToast({ ...toast, name: true })}
        />

        <InputBtn 
          margin="0 0 30px 0"
          ipTitle="비밀번호"
          btnKind="btn_02"
          btnTxt="변경"
          btnWd="68px"
          btnHt="32px"
          onClick={() => setToast({ ...toast, password: true })}
        />

        <InputBtn 
          margin="0 0 30px 0"
          ipTitle="휴대폰 번호"
          btnKind="btn_02"
          btnTxt="변경"
          btnWd="68px"
          btnHt="32px"
        />

        <InputBtn 
          margin="0 0 30px 0"
          ipTitle="이메일"
          btnKind="btn_02"
          btnTxt="변경"
          btnWd="68px"
          btnHt="32px"
        />
        
        <div className='sidebar-info-account'>
          <h2 className='sidebar-info-account-title'>연결된 계정</h2>

          {/* 연결된 계정이 없을 때 */}
          {/* <p className='sidebar-info-account-not'>연결된 계정이 없습니다.</p> */}
          
          {/* 연결된 계정이 있을 때 */}
          <div className='sidebar-info-kind first'>
            <div className='sidebar-info-kind-left'>
              <img src={kakao} alt="카카오 연동" />
              <span>카카오 연동</span>
            </div>
            <SwitchOff />
          </div>
          <div className='sidebar-info-kind'>
            <div className='sidebar-info-kind-left'>
              <img src={naver} alt="네이버 연동" />
              <span>네이버 연동</span>        
            </div>
            <SwitchOn />
          </div>
        </div>
        
        <div className='sidebar-info-pay'>
          <hr />
          <div className='sidebar-info-pay-content'>
            <p>간편결제</p>
            <RightArrow  fill="#828282"/>
          </div>
          <hr />
        </div>

        <div className='sidebar-info-out'>
          <span>회원탈퇴</span>
        </div>

        {toast.name && (
          <Toast
            closeClick={(e) => {
              e.stopPropagation();
              setToast({ ...toast, name: false });
            }}
            title="닉네임 변경"
          >
            <Input
              title="닉네임"
              helpMessage={"도움말 텍스트"}
            />
          </Toast>
        )}

        {toast.password && (
          <Toast 
            closeClick={(e) => {
              e.stopPropagation();
              setToast({ ...toast, password: false });
            }}
            title="비밀번호 변경"
          >
            <Input
              title="비밀번호"
              placeholder="Placeholder Text"
              helpMessage={"도움말 텍스트"}
              margin="0 0 60px 0"
            />

            <Input
              title="비밀번호 확인"
              helpMessage={"도움말 텍스트"}
              margin="0 0 60px 0"
            />
          </Toast>
        )}
      </InfoInner>

    </Container>
  );
};

export default SideBarInfo;