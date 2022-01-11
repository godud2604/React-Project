import React from 'react';
// components
import { Agree } from '../../../components/agree';
import { HeaderBack } from '../../../components/layout/front/header';
import { Input, InputBtn } from '../../../components/input';
// css
import { Container, SignUpInner } from '../../../styles/account/signup';

const Signup = () => {
  return (
    <React.Fragment>
      <HeaderBack/>
      <Container>
        <SignUpInner>
          <div className='account-head'>
            <h1 className='account-title'>회원가입</h1>
            <p className='account-sub'>드림어반스퀘어에 오신 것을 환영합니다!</p>
          </div>

          <div className='signup-agree-content'>
            <Agree
              txt1={'서비스 이용에 필요한 사항입니다.'}
              txt2={'이용약관 및 개인정보 수집 이용동의를 확인해주세요.'}
            />
          </div>

          <div className='signup-input-content'>
            <InputBtn 
              margin="0 0 50px 0"

              ipTitle="휴대폰 번호"
              ipHelpMessage="숫자만 입력하세요."

              btnKind="btn_05"
              btnTxt="인증"
              btnWd="68px"
              btnHt="32px"
            />

            <Input 
              title="인증번호"
              placeholder="인증번호를 입력하세요."
              helpMessage="도움말 텍스트"
            />
          </div>
        </SignUpInner>
      </Container>
    </React.Fragment>
  );
};

export default Signup;