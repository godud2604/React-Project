import styled from "styled-components";
import { flexbox } from "../../utils";
import theme from "../../utils/theme";

export const GlobalNone = styled.div`
  ${flexbox};
  flex-direction: column;
  margin: ${(props) => props.margin ?? '60px 0 0 0'};

  svg {
    margin-bottom: 20px;
  }

  .global-none-message {
    ${theme.Body2};
    color: ${theme.colors.gray3};
  }
`;