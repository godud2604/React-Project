import styled from "styled-components";
import { flexbox } from "../../../utils/flexbox";

export const GlobalInputBtn = styled.div`
  margin: ${(props) => props.margin && props.margin};
  /* common */

  ${flexbox('between', 'end')};
  
  .global-input-01 {
    width: 100%;
  }

  button {
    margin: 0 20px 4px;
  }

  /* common end */

`;