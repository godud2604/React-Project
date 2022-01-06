import React from 'react';
import { useHistory } from 'react-router-dom';
// components
import Coupon from '../../../components/coupon/Coupon';
import { Button } from '../../../components/common/modal';
// css
import { Container, SignUpCompleteInner } from '../../../styles/account/signup';

const SignUpComplete = () => {
  const history = useHistory();

  return (
    <React.Fragment>
      <Container>
        <SignUpCompleteInner>
          <div className='account-head'>
            <h1 className='account-title'>회원가입 완료!</h1>
          </div>

          <h2 className='complete-title'>
            회원가입 축하 쿠폰이 발급되었습니다.
          </h2>
          <Coupon />
          <Coupon />
          <Coupon />

          <Button
            kind="btn_02"
            children="더 보기"
            margin="40px 0 0 0"
            onClick={() => history.push({
              pathname: '/',
            })}
          />
        </SignUpCompleteInner>
      </Container>
    </React.Fragment>
  );
};

export default SignUpComplete;