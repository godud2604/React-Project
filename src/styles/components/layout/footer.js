import styled from "styled-components";
import { flexbox } from "../../utils/flexbox";
import theme from "../../utils/theme";

export const Container = styled.section`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  ${theme.Body2};
  color: ${theme.colors.grey1};
  background: ${theme.colors.white};
  filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.1));
  z-index: ${theme.zIndex.footer_level};

  .footer-nav {
    ${flexbox()};
    flex-direction: column;
    flex: 1;
    height: 56px;
    text-decoration: none;
    background-color: ${theme.colors.boxGray};
    cursor: pointer;

    &:last-child {
      border-right: 0;
    }

    .svg {
      height: 30px;
    }

    &-txt {
      color: ${theme.colors.gray3};
      text-align: center;

      &.is-active {
        color: ${theme.colors.orange};
      }
    }
  }
`;