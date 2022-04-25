import styled from "styled-components";
import theme from "../../../../utils/theme";
// images

export const Container = styled.section`
  display: inline-block;
  width: 100%;
  margin: 30px 0;

  .titleChildren-title {
    ${theme.H2};
    padding: 20px 0;
    font-size: 18px;
    text-align: center;
    color: ${theme.colors.black1};
    background-color: ${theme.colors.yellow};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

`;

