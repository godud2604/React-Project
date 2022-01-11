import React from 'react';
// components
import { InputBtn } from '../../../input';
// css
import { Container, InfoInner } from '../../../../styles/components/layout/sidebar';
// images
import { ReactComponent as BackArrow } from '../../../../images/common/btn-arrow-back.svg';

const SideBarInfo = ({ state, setState }) => {
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
          <span className='logout'>로그아웃</span>
        </div>

        <InputBtn 
          margin="0 0 50px 0"
          ipTitle="닉네임"
          btnKind="btn_02"
          btnTxt="변경"
          btnWd="68px"
          btnHt="32px"
        />

        <InputBtn 
          margin="0 0 50px 0"
          ipTitle="비밀번호"
          btnKind="btn_02"
          btnTxt="변경"
          btnWd="68px"
          btnHt="32px"
        />

        <InputBtn 
          margin="0 0 50px 0"
          ipTitle="휴대폰 번호"
          btnKind="btn_02"
          btnTxt="변경"
          btnWd="68px"
          btnHt="32px"
        />

        <InputBtn 
          margin="0 0 50px 0"
          ipTitle="이메일"
          btnKind="btn_02"
          btnTxt="변경"
          btnWd="68px"
          btnHt="32px"
        />
        
        
      </InfoInner>
    </Container>
  );
};

export default SideBarInfo;