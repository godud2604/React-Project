import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`

  ${reset}

  * {
    letter-spacing: 0.06em; 
    box-sizing: border-box;
  }

  html{
    font-size: 16px;
    font-family: 'Noto Sans KR', sans-serif;

    @media (max-width: 1280px){
        font-size: 50%; 
    };
    @media (max-width: 568px){
        font-size: 10px; 
    };      
  };
  
  body {  
    font-family: 'Noto Sans KR', sans-serif;
  } 

  select,
  input, 
  button,
  textarea {
    border: 0;
    outline: 0 !important;
  }

  /* react-bootstrap */
  @media (min-width: 1200px) {
    .col-xl-6 {
      flex: 0 0 49.41%;
      max-width: 49.41%;
    }
    .container, .container-lg, .container-md, .container-sm, .container-xl{
      max-width: 1348px;
    }
  }
`;

export default GlobalStyle;
