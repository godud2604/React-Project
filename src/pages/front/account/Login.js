import React from 'react';
import { useHistory } from 'react-router-dom';
// components
import HeaderBack from '../../../components/common/header/HeaderBack';
import { Input } from '../../../components/common/input';
import { Button } from '../../../components/common/modal';
// css
import { Container } from '../../../styles/account/login';
// images
import kakao from '../../../images/common/kakao.png';

const Login = () => {
  const history = useHistory();

  return (
    <React.Fragment>
      <HeaderBack />
      <Container>
        <div className='account-head'>
          <h1 className='account-title'>로그인</h1>
          <p className='account-sub'>회원 서비스 이용을 위해 로그인 합니다.</p>
        </div>

        <div className='login-input-content'>
          <Input 
            title="아이디"
            margin="0 0 30px 0"
          />
          <Input 
            title="비밀번호"
            type="password"
          />
        </div>

        <div className='login-btn-content'>
          <Button 
            kind="btn_03"
            children="로그인하기"
            margin="0 0 20px 0"
          />
          <Button 
            kind="btn_01"
            children="카카오로 로그인"
            imgSrc={kakao}
            onClick={() => history.push({
              // 카카오 아이디 없을 때 > 카카오로 로그인 회원가입 단계
              // 카카오 아이디 있을 때 > 홈 화면으로 이동
              pathname: '/agree', // temp
            })}
          />
        </div>

        <div className='login-sign-in-content'>
          <span>아이디 찾기</span>
          <span>비밀번호 찾기</span>
          <span>회원가입</span>
        </div>

      </Container>
    </React.Fragment>
  );
};

export default Login;