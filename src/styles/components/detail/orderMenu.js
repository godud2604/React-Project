import styled from "styled-components";
import theme from "../../utils/theme";

export const Container = styled.section`
  color: ${theme.colors.gray1};

  .main-bg {
    margin-bottom: 10px;
    border-radius: 5px;
    overflow: hidden;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .menu-name {
    ${theme.Body1};
    line-height: 1.5;
  }

  .menu-price {
    ${theme.SubTitle1};
  }
`;
