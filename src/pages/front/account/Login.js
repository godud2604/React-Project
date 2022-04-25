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
  const dispatch = useDispatch();
  const history = useHistory();
  const protocol = window.location.protocol;

  const prev_pathname = useSelector((store) => store.auth.saveUrl); // home 로그인 모달 창 => 로그인 버튼 클릭 시, prev_pathname 저장
  const auth = useSelector((store) => store.auth);
  const storageData = localStorage.getItem('userId');
  const saveId = storageData === null || storageData === '' ? '' : atob(storageData);
  
  // 카카오톡 로그인 버튼 클릭 시, REDIRECT_URI의 설정에 따른 페이지로 이동
  // src/pages/front/account/KakaoLogin.js 파일로 이동하여 카카오 로그인 api 실행
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_KEY}&redirect_uri=${protocol}${process.env.REACT_APP_KAKAO_REDIRECT_URI_TEST}&response_type=code`;

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
  const handleSubmit = () => {
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
        // 홈이 아닌, 다른 탭을 눌렀을 때 로그인 했을 때 => 로그인 성공 시에 그 페이지로 이동하기 위함
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
              kind="btn_03"
              children="로그인하기"
              margin="0 0 20px 0"
              onClick={handleSubmit}
            />

            {/* 최초 로그인 X > 카카오 로그인 실행 */}
            <a href={KAKAO_AUTH_URL}>
              <Button
                kind="btn_01"
                children="카카오로 로그인"
                imgSrc={kakao}
              />
            </a> 
            
            {/* 최초 로그인 시, 카카오톡 동의하기로 이동 */}
            {/* <Button
              kind="btn_01"
              children="카카오로 로그인"
              imgSrc={kakao}
              onClick={() => history.push({
                pathname: '/agree',
              })}
            /> */}
          </div>

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