import styled from "styled-components";
import { flexbox } from "../../utils/flexbox";
import theme from "../../utils/theme";

export const BackContainer = styled.section`
  position: fixed;
  top: 0;
  width: 100%;
  height: 68px;
  background: ${(props) => props.bg ?? `${theme.colors.white}`};
  z-index: ${theme.zIndex.header_back_level};

  .btn-back-svg {
    position: absolute;
    top: 18px;
    left: 20px;
  }

  .btn-title {
    ${flexbox()};
    height: 100%;
    ${theme.H2};
    color: ${theme.colors.gray2};
  }
`;

