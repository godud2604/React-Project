import React from 'react';
// components
import { Button } from '../../../../modal';
// css
import { Container } from '../../../../../styles/components/home/member/phone/phoneMain';
// images

const PhoneMain = () => {
  return (
    <Container>
      <p>포인트로 휴대폰을 구매하세요!</p>

      <Button 
        kind="btn_08"
        width="117px"
        height="32px"
        children="지금 신청하기"
      />
    </Container>
  );
};

export default PhoneMain;