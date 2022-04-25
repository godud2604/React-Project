import styled from "styled-components";
import { flexbox } from "../../utils/flexbox";
import theme from "../../utils/theme";

export const NavContainer = styled.section`
  position: fixed;
  top: 0;
  ${flexbox('between', 'end')};
  width: 100%;
  height: ${(props) => props.height ? props.height : '68px'};
  padding: 0 20px;
  color: ${theme.colors.white};
  background-color: ${(props) => props.bgColor ? props.bgColor : 'rgba(255,255,255,0)'};
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

export const BackContainer = styled.section`
  position: fixed;
  top: 0;
  width: 100%;
  height: 68px;
  background: ${(props) => props.bg ? props.bg : `${theme.colors.white}`};
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

export const SubNavContainer = styled.section`

  nav {
    margin: 0 -20px;
    padding: 0 20px;
    border-bottom: 1px solid ${theme.colors.gray6};

    .nav-list {
      display: flex;
    }

    .nav-item {
      ${theme.Body1};

      &.is-active {
        padding-bottom: 6px;
        ${theme.SubTitle1};
        font-weight: 600;
        border-bottom: ${(props) => props.btmColor ? `3px solid ${props.btmColor}` : `3px solid ${theme.colors.orange}`};
      }

      &:not(:last-child) {
        margin-right: 10px;
      }
    }
  }

`;