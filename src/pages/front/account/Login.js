import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// components
import { HeaderBack } from '../../../components/layout/front/header';
import { Input } from '../../../components/input';
import { Button } from '../../../components/modal';
// 개발자 라이브러리
import { handleInputChange } from '../../../utils/input';
import { idSave, init, loginRequest } from '../../../redux/actions/auth';
// css
import { Container, LoginInner } from '../../../styles/account/login';
// images
import kakao from '../../../images/common/kakao.png';

const Login = () => {
  
  const history = useHistory();
  const dispatch = useDispatch();
  const prev_pathname = useSelector((store) => store.auth.saveUrl); // home 로그인 모달 창 > 로그인 버튼 클릭 시, prev_pathname 저장

  const auth = useSelector((store) => store.auth);
  const storageData = localStorage.getItem('userId');
  const saveId = storageData === null || storageData === '' ? '' : atob(storageData);
  console.log(auth);

  const [state, setState] = useState({
    userId: saveId,
    userPass: '',
    idSave: saveId,

    loginError: false,
  });
  const [loginError, setLoginError] = useState(false);

  const handleLogin = (e) => {
    handleInputChange(e, state, setState);
    setLoginError(false);
  };

  // 로그인 버튼
  const handleSubmit = (e) => {
    e.preventDefault();

    if (state.idCheck) {
      dispatch(idSave(btoa(state.userId)));
    }

    dispatch(loginRequest(state.userId, state.userPass, 'W', '59.15.34.157', false));
  };

  // 로그인 상태 값 체크
  const loginStatus = async () => {
    const login_status = await auth.login.status;

    // 로그인 정상
    if (login_status === 'SUCCESS') {
      history.push({
        pathname: prev_pathname ? `${prev_pathname}` : '/',
      });

    // 로그인 실패
    } else if (login_status === 'FAILURE') {
  
      setLoginError(true);
      dispatch(init());
    }
  };
   
  useEffect(() => {
    loginStatus();
  }, [auth.login.status]);

  const { userId, userPass } = state;

  return (
    <React.Fragment>
      <HeaderBack />
      <Container>
        <LoginInner>
          <div className='account-head'>
            <h1 className='account-title'>로그인</h1>
            <p className='account-sub'>회원 서비스 이용을 위해 로그인 합니다.</p>
          </div>

          <form onSubmit={(e) => handleSubmit(e)}>
            <div className='login-input-content'>
              <Input 
                title="아이디"
                margin="0 0 30px 0"
                value={userId}
                name="userId"
                onChange={(e) => 
                  handleLogin(e)
                }
                kind={loginError ? 'global-input-error' : ''}
                errorIcon={loginError}
                errorMessage={loginError && '오류 메시지 텍스트'}
              />
              <Input 
                title="비밀번호"
                type="password"
                value={userPass}
                name="userPass"
                onChange={(e) => 
                  handleLogin(e)
                }
              />
            </div>

            <div className='login-btn-content'>
              <Button 
                type={'submit'}
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
          </form>

          <div className='login-sign-in-content'>
            <span>아이디 찾기</span>
            <span>비밀번호 찾기</span>
            <span>회원가입</span>
          </div>
        </LoginInner>

      </Container>
    </React.Fragment>
  );
};

export default Login;