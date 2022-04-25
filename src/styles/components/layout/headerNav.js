import styled from "styled-components";
import { flexbox } from "../../utils/flexbox";
import theme from "../../utils/theme";

export const NavContainer = styled.section`
  position: fixed;
  top: 0;
  ${flexbox('between', 'end')};
  width: 100%;
  height: ${(props) => props.height ?? '68px'};
  padding: 0 20px;
  color: ${theme.colors.white};
  background-color: ${(props) => props.bgColor ?? 'rgba(255,255,255,0)'};
  transition: all 100ms ease-in-out;
  z-index: ${theme.zIndex.header_nav_level};

  // props > headerKind (scroll 시, header 변경)
  &.header-white {
    color: ${theme.colors.black1};
    background-color: ${theme.colors.white};
  }

  nav {
    
    .nav-list {
      display: flex;
    }

    .nav-item {
      ${theme.Body1};

      &.is-active {
        padding-bottom: 6px;
        ${theme.SubTitle1};
        font-weight: 600;
        border-bottom: 3px solid ${theme.colors.orange};
      }

      &:not(:last-child) {
        margin-right: 10px;
      }
    }
  }

  .header-btn {
    margin-bottom: 2px;
  }
`;
