import styled from "styled-components";
import { animations, flexbox } from "../../utils";
import theme from "../../utils/theme";

export const GlobalToast = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: ${theme.zIndex.alert_level};

  .global-toast-inner {
    position: absolute;
    bottom: 0;
    width: 100%;
    min-height: 300px;
    padding: 20px;
    color: ${theme.colors.black1};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-color: ${theme.colors.white};
    animation: ${animations.slideFromBottom} 300ms ease-in-out;
  }  

  .toast-head {
    ${flexbox()};
    margin-bottom: 40px;
    
    .svg {
      position: absolute;
      top: 13px;
      left: 20px;
      padding: 5px;
    }

    h2 {
      ${theme.H2};
    }
  }

  .toast-body {
    margin-bottom: 40px;
  }
`;