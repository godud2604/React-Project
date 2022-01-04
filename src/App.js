import React from 'react';
import { ThemeProvider } from "styled-components";
import Route from './routes/FrontRoute'
// css
import theme from "./styles/theme";
import GlobalStyle from "./styles/globalStyle";

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