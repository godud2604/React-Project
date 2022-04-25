import styled from "styled-components";
import theme from "../../utils/theme";

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
      transition: all 100ms ease-in-out;

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

  /* kind */

  &.fixed-active {
    position: sticky;
    top: 68px;
    width: 100%;
    background-color: ${theme.colors.white};
  }
`;