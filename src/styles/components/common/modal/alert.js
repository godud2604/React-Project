import styled from "styled-components";
import theme from "../../../utils/theme";

export const GlobalAlert = styled.div`
  /* common  */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: center;
 
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;

  .shadow-modal {
    width: 100%;
    min-height: 189px;
    overflow: hidden;
    border-radius: 20px;
    background: ${theme.colors.white};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }

  .img {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  .text {
    background-color: ${theme.colors.white};
    padding: ${(props) => (props.padding ? props.padding : '')};
  }

  h2 {
    ${theme.H2};
    color: ${theme.colors.black1};

    &.alert-title {
      margin-bottom: 10px;
    }
  }

  p {
    ${theme.Body1};
    color: ${theme.colors.grey2};
    word-break: keep-all; // 단어 단위로 줄바꿈

    &.sub3 {
      padding-top: 20px;
    }
  }

  .button {
    width: 100%;
    height: 100%;

    button {
      padding: 8px 15px 7px;
      ${theme.Body1};
      color: ${(props) => (props.btnColor ? props.btnColor : `${theme.colors.white}`)};
      background: ${(props) =>
    props.btnBackColor ? props.btnBackColor : `${theme.colors.lavender}`};
      border-radius: 20px;
      outline: none;
    }
  }
  /* common end */

  /****************************** kind ********************************/
  /* alert-1 */
  &.alert-1 {
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
  &.alert-2 {
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
  &.alert-3 {
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
  &.alert-4 {
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
