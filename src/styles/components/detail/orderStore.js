import styled from "styled-components";
import { flexbox } from "../../utils/flexbox";
import theme from "../../utils/theme";

export const Container = styled.section`
  color: ${theme.colors.gray1};
  ${flexbox('start', 'start')};

  .main-bg {
    height: 157px;
    margin-bottom: 10px;
    border-radius: 5px;
    overflow: hidden;

    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }


  .store-name {
    ${theme.SubTitle1};
    line-height: 1.3;
  }

  .store-kind, .store-location {
    ${theme.Body1};
    line-height: 1.3;
    white-space: nowrap;
  }

  .store-txt-wrap {
    padding: 10px 20px 10px 30px;
  }

`;
