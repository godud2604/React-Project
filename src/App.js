import React from 'react';
import { ThemeProvider } from "styled-components";
import Route from './routes/FrontRoute'
// css
import './styles/font.css';
import theme from "./styles/theme";
import GlobalStyle from "./styles/globalStyle";
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

const App = () => {

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