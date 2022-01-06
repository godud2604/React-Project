import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ThemeProvider } from "styled-components";
// 개발자 라이브러리
import Route from './routes/FrontRoute'
import { getStatusRequest } from './redux/actions/auth';

// css
import './styles/font.css';
import theme from "./styles/utils/theme";
import GlobalStyle from "./styles/globalStyle";
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

const App = () => {
  const dispatch = useDispatch();
  const storageData = localStorage.getItem('user');

  useEffect(() => {
    if (storageData !== null) {
      dispatch(getStatusRequest());
    }
  }, []);
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Route /> 
      </ThemeProvider>
    </>
  );
}

export default App;