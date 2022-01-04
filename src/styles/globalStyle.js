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

  
  /* @mixin flex($direction: 'row', $align: 'center', $justify: 'center') {
    display: flex;
    flex-direction: $direction;
    align-items: $align;
    justify-content: $justify;
  } */

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
      justify-content: space-between;
      button {
        width: calc(50% - 0.5px);
        &:nth-child(1) {
          border-right: 1px solid ${theme.colors.white};
        }
      }
    }    
    .text {
      padding: 30px 30px 40px;      
    }
    @media (max-width: 1020px) {
      .button {
        justify-content: flex-end;
        padding-bottom: 10px;
        
        button {
          color: ${theme.colors.lavender} !important;
          background: ${theme.colors.white} !important; 
          &:nth-child(1) {
            width: 30%;
          }
          &:nth-child(2) {
            width: 30%;
          }
        }
      }
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
      padding: 30px 30px 40px;      
    }
    @media (max-width: 1020px) {
      .button {
        padding: 0 20px 10px 0;
        button {
          text-align: right;
          color: ${theme.colors.lavender} !important;
          background: ${theme.colors.white} !important; 
        }
      }
      .text {
        padding: 30px;      
      }
    }
  }
  /* alert-3 */
  .alert-3 {
    text-align: center;
    
    .button {
      display: flex;
      justify-content: space-between;
      button {
        width: calc(50% - 0.5px);
        &:nth-child(1) {
          border-right: 1px solid ${theme.colors.white};
        }
      }
    }    
    .text {
      min-height: 100px;
      padding: 30px 30px 40px;      
    }
    p {
      margin-top: 0 !important;
    }
    /* 모바일 */
    @media (max-width: 1020px) {
      .button {
        justify-content: flex-end;
        padding-bottom: 10px;
        
        button {
          color: ${theme.colors.lavender} !important;
          background: ${theme.colors.white} !important; 
          &:nth-child(1) {
            width: 30%;
          }
          &:nth-child(2) {
            width: 30%;
          }
        }
      }
      .text {
        min-height: 90px;
        padding: 30px;      
      }
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
    /* 모바일 */
    @media (max-width: 1020px) {
      .button {
        padding: 0 20px 10px 0;
        button {
          text-align: right;
          color: ${theme.colors.lavender} !important;
          background: ${theme.colors.white} !important; 
        }
      }
      .text {
        min-height: 90px;
        padding: 30px 30px 15px;  
      }
    }
  }

  .copy{
    .button {
      display: flex;
      justify-content: space-between;
      button {
        width: calc(50% - 0.5px);
        &:nth-child(1) {
          border-right: 1px solid ${theme.colors.white};
        }
      }
    }    
    .text {
      padding: 30px 30px 40px;      
    }
    @media (max-width: 1020px) {
      .button {
        justify-content: flex-end;
        padding-bottom: 10px;
        
        button {
          color: ${theme.colors.lavender} !important;
          background: ${theme.colors.white} !important; 
          &:nth-child(1) {
            width: 30%;
          }
          &:nth-child(2) {
            width: 30%;
          }
        }
      }
    }
  }
`;

export default GlobalStyle;
