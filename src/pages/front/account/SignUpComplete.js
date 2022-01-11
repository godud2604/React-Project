import React from 'react';
import { useHistory } from 'react-router-dom';
// components
import { CouponDetail } from '../../../components/detail';
import { Button } from '../../../components/modal';
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
          <CouponDetail />
          <CouponDetail />
          <CouponDetail />

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