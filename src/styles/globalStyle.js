import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import theme from './theme';
// image

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    letter-spacing: 0.06em; 
    box-sizing: border-box;
  }

  html{
    font-size: 16px;
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

  /************************** Alert **********************************/
  /* alert-1 */
  .alert-1 {
    .button {
      display: flex;
      justify-content: flex-end;
      padding-right: 20px;

      .btn1 {
        margin-right: 10px;
        color: ${theme.colors.white};
        background: ${theme.colors.orange};
      }

      .btn2 {
        color: ${theme.colors.orange};
        background: ${theme.colors.white};
        border: 1px solid ${theme.colors.orange};
      }
    }    
    .text {
      padding: 30px 30px 50px;      
    }
  }
  
  /* alert-2 */
  .alert-2 {
    .button {
      button {
        width: 100%;
      }
    }
    .text {
      padding: 30px 30px 50px;      
    }
  }
  /* alert-3 */
  .alert-3 {
    text-align: center;
    
    .button {
      display: flex;
      justify-content: flex-end;
      padding-right: 20px;
    }    
    .text {
      min-height: 100px;
      padding: 30px 30px 50px;      
    }
    p {
      margin-top: 0 !important;
    }
  }
  /* alert-4 */
  .alert-4 {
    .button {
      button {
        width: 100%;
      }
    }
    .text {
      min-height: 100px;
      padding: 30px;  
      text-align: center;
    }
    p {
      margin-top: 0 !important;
    }
  }
`;

export default GlobalStyle;
