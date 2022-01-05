import styled from "styled-components";
import theme from "../../../theme";

export const GlobalInput = styled.div`
  /* common */
  margin: ${(props) => props.margin ? props.margin : ''};

  .global-input-title {
    ${theme.SubTitle2}
    color: ${theme.colors.gray1};
    line-height: 2;
  }

  .global-input-wrap {
    position: relative;
  }

  .global-input-place {
    display: flex;
    ${theme.Body1};
    color: ${theme.colors.black1};
    z-index: 1;

    width: ${(props) => props.width ? props.width : '100%'};
    height: ${(props) => (props.height ? props.height : '42px')};
    padding: ${(props) => props.padding ? props.padding : '0 0 0 10px'};
  
    border: ${(props) => props.border ? props.border : `1px solid ${theme.colors.gray3}`};
    border-radius: ${(props) => props.radious ? props.radious : '4px'};

    :focus {
      caret-color: ${theme.colors.orange}; // caret(input cursor) 색상 변경
      border: 1px solid ${theme.colors.orange};
    }

    ::placeholder {
      ${theme.Body2};
      color: ${theme.colors.grey3};
    }

    img {
      margin-right: 5px;
    }
  }

  .message {
    line-height: 2.4;
    ${theme.Caption};
    color: ${theme.colors.gray3};

    &.error-message {
      color: ${theme.colors.red};
    }
  }

  .global-input-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
  }

  
  input[type="password"] {
    font-family: 'pass', 'Roboto', Helvetica, Arial, sans-serif ;
    font-size: 40px;
    letter-spacing: -6px;

    &::-webkit-input-placeholder {
      transform: scale(0.77);
      transform-origin: 0 50%;
    }

    &::-moz-placeholder {
      font-size: 14px;
      opacity: 1;
    }

    &:-ms-input-placeholder {
      font-size: 14px;
      font-family: 'Roboto', Helvetica, Arial, sans-serif;
    }
  }
  /* common end */
`;