import styled, { css } from "styled-components";
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

  // navLink 클릭 시, color 활성화
  ${props => {
    // props로 넘어온 navcolor 값이 있을 때 
    if (props.navcolor) {
      return css`
        .nav-active {
    
          .footer-nav-txt {
            color: ${props.navcolor};
          }

          svg {
            fill: ${props.navcolor};
          }
        }
      `

    // props로 넘어온 navcolor 값이 없을 때 
    } else {
      return css`
        .nav-active {
          
          .footer-nav-txt {
            color: ${theme.colors.orange};
          }

          svg {
            fill: ${theme.colors.orange};
          }
        }
      `
    }
  }}
  // navLink 클릭 시, color 활성화 end

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