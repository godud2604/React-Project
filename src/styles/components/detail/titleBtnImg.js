import styled from "styled-components";
import { flexbox } from "../../utils";
import theme from "../../utils/theme";

export const Container = styled.section`
  margin-top: 30px;

  .menu-content {
    ${flexbox('between')};
    margin-bottom: 16px;
    padding: 0 10px;

    h2 {
      ${theme.H2}
      color: ${theme.colors.black1};
    }
  }

  .menu-image {

    &:nth-child(2) {
      height: 210px;
    }

    &:nth-child(3) {
      height: 150px;
    }

    &:not(:last-child) {
      margin-bottom: 20px;
    }    

    img {
      width: 100%;
      height: 100%;
    }
  }
`;
