import styled from "styled-components";
import { flexbox } from "../../utils/flexbox";
import theme from "../../utils/theme";

export const GlobalSearch = styled.div`
  /* common */

  ${flexbox('between')}
  
  .global-input-01 {
    width: 100%;

    .global-input-place {
      padding: 0 0 0 50px;
      border-color: ${theme.colors.gray6};

      :focus {
        caret-color: ${theme.colors.black1}; // caret(input cursor) 색상 변경
      }

      ::placeholder {
        ${theme.Body1};
      }
    }

    .global-input-icon {
      left: 20px;
      width: 24px;
    }
  }

  button {
    margin: 0 10px 0 20px;
  }
  

  /* common end */

`;