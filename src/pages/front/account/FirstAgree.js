import React from 'react';
// components
import Agree from '../../../components/account/Agree';
import HeaderBack from '../../../components/common/header/HeaderBack';
import { Button } from '../../../components/common/modal';
// css
import { Container } from '../../../styles/account/login';

const FirstAgree = () => {
  return (
    <React.Fragment>
      <HeaderBack />
      <Container>
        <div className='account-head'>
          <h1 className='account-title'>드림컨시어지 서비스 이용 동의</h1>
        </div>

        <Agree
          txt1={'최초 로그인시 드림컨시어지 서비스를 이용하기 위해'}
          txt2={'약관동의가 필요합니다.'}
        />

        <div className='agree-btn'>
          <Button
            kind="btn_03"
            children="동의"
            disabled={true} 
          />
        </div>
      </Container>
    </React.Fragment>
  );
};

export default FirstAgree;