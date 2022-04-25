import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import qs from 'qs';
// 개발자 라이브러리
import _axios from '../../../utils/axios';
import { loginSuccess } from '../../../redux/actions/auth';

/* *************************************** 
++ 카카오 로그인 실행 순서 
1. redirect_url에서 인가코드 받기
2. 인가코드를 이용하여, token 발급받기
3. access token 발급 받은 후, 사용자 정보 받아오기
4. 사용자 정보를 획득 한 후, 백엔드 카카오 로그인 api 실행
*************************************** */

const KakaoLogin = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const protocol = window.location.protocol;

  // 1. calllback으로 받은 인가코드
  const code = new URL(window.location.href).searchParams.get("code");

  // 2. 인가코드를 이용하여 token 발급받기
  const getToken = async () => {
    const payload = qs.stringify({
      grant_type: "authorization_code",
      client_id: process.env.REACT_APP_KAKAO_KEY,
      redirect_uri: `${protocol}${process.env.REACT_APP_KAKAO_REDIRECT_URI_TEST}`,
      code: code,
    });
    
    try {
      // access token 가져오기
      const res = await Axios.post(
        "https://kauth.kakao.com/oauth/token",
        payload
      ); 

      // Kakao Javascript SDK 초기화
      window.Kakao.init(process.env.REACT_APP_KAKAO_KEY);
      
      // access token 설정
      window.Kakao.Auth.setAccessToken(res.data.access_token);
      
      // console.log(res.data);

      // 3. access token 발급 받은 후, 사용자 정보 받아오기
      getProfile(res.data.access_token);

    } catch (err) {
      console.log(err);
    }
  };

  // 사용자 정보 받아오기
  const getProfile = async (token) => {
    try {
      // Kakao SDK API를 이용해 사용자 정보 획득
      let data = await window.Kakao.API.request({
        url: "/v2/user/me",
      });

      // 4. 사용자 정보를 획득 한 후, 백엔드 카카오 로그인 api 실행
      responseKaKao(token, data);
    } catch (err) {
      console.log(err);
    }
  };

  // 카카오 로그인
  const responseKaKao = async (token, res) => {
    // console.log(res);
    const url = '/api/account/get_login_kakao.php';
    const params = {
      token,
      kakaoId: res.id,
      hpNo: res.kakao_account.phone_number,
    };

    // console.log(params);

    const response = await _axios(url, params);
    // console.log(response);

    if (response.result === '0') {
      dispatch(loginSuccess(response));
      // replace : /mypage/home 으로 이동 시, 뒤로가기 클릭했을 때 redirect_url 페이지 뜨는 것 방지
      history.replace('/');

    } else {
      // TODO: modal 
      alert('카카오 로그인에 실패하셨습니다.')
    }
  };

  useEffect(() => {
    getToken();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <p>Loading</p>
    </>
  );
};

export default KakaoLogin;