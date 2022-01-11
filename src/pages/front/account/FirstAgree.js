import React from 'react';
import { useHistory } from 'react-router-dom';
// components
import { Agree } from '../../../components/agree';
import { HeaderBack } from '../../../components/layout/front/header';
import { Button } from '../../../components/modal';
// css
import { Container, FirstAgreeInner } from '../../../styles/account/signup';

const FirstAgree = () => {
  const history = useHistory();

  return (
    <React.Fragment>
      <HeaderBack />
      <Container>
        <FirstAgreeInner>
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
              // disabled={true} 
              onClick={() => history.push({
                pathname: '/kakao',
              })}
            />
          </div>
        </FirstAgreeInner>
      </Container>
    </React.Fragment>
  );
};

export default FirstAgree;