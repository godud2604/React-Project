import styled from "styled-components";
import { inlineFlexbox } from "../../../utils";
import theme from "../../../utils/theme";

export const Container = styled.div`
  ${inlineFlexbox('end')};
  width: 100%;
  padding: 13px 20px 13px 10px;
  background: ${theme.colors.pink1};

  span {
    margin-right: 10px;
    ${theme.Body1};
    color: ${theme.colors.white};
  }
`;
