import React from 'react';
import { useHistory } from 'react-router-dom';
// components
import { Input, InputBtn } from '../../../components/input';
import { Button } from '../../../components/modal';
import { Agree } from '../../../components/agree';
import { HeaderBack } from '../../../components/layout/front/header';
// css
import { Container, KakaoLoginInner } from '../../../styles/account/signup';

const KakaoLogin = () => {
  const history = useHistory();

  return (
    <React.Fragment>
      <HeaderBack />
      <Container>
        <KakaoLoginInner>
          <div className='account-head'>
            <h1 className='account-title'>카카오로 로그인</h1>
          </div>

          <div className='kakao-login-input-content'>
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

          <div>
            <Agree
              txt1={'최초 로그인시 드림컨시어지 서비스를 이용하기 위해'}
              txt2={'약관동의가 필요합니다.'}
            />
            <Button 
              kind="btn_03"
              children="회원가입완료"
              margin="30px 0"
              onClick={() => history.push({
                pathname: '/complete',
              })}
            />
          </div>
        </KakaoLoginInner>
      </Container>
    </React.Fragment>
  );
};

export default KakaoLogin;