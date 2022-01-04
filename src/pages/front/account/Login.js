import React from 'react';
import HeaderBack from '../../../components/common/header/HeaderBack';
import { Container } from '../../../styles/account/login';

const Login = () => {
  return (
    <React.Fragment>
      <HeaderBack />
      <Container>
        <h1 className='login-title'>로그인</h1>
        <p className='login-sub'>회원 서비스 이용을 위해 로그인 합니다.</p>


      </Container>
    </React.Fragment>
  );
};

export default Login;