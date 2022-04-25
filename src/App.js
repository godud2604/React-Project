/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from "styled-components";
// 개발자 라이브러리
import Route from './routes/FrontRoute'
import { getStatusRequest } from './redux/actions/auth';
// components
import { SideBar } from './components/layout/front/sidebar';
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
  const SIDEBAR_STATUS = useSelector((store) => store.sidebar.isSideBar); // 더보기 sidebar 

  useEffect(() => {
    if (storageData !== null) {
      dispatch(getStatusRequest());
    }
  }, []);
  
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {SIDEBAR_STATUS && (  // 더보기 sidebar
          <React.Fragment>
            <SideBar />
          </React.Fragment>
        )}
        <Route /> 
      </ThemeProvider>
    </>
  );
}

export default App;