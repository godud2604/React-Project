import styled from "styled-components";
import theme from "../../../../utils/theme";
import { flexbox } from "../../../../utils";

// images

export const Container = styled.section`
  
  .telecom-content {
    display: flex;
    margin-bottom: 40px;
    padding: 30px 20px 20px;
    color: ${theme.colors.black1};
    background-color: ${theme.colors.gray6};

    &-img {
      flex: 1;
    }

    &-txt {
      flex: 1;
      padding-left: 13px;
      color: ${theme.colors.gray1};

      h2 {
        ${theme.H2};
        margin: 5px 0 20px;
        text-align: right;
      }

      span {
        ${theme.Caption};
      }

      strong {
        ${theme.SubTitle1};
      }

      ul {
      }

      li {
        ${flexbox('between')};

        &:not(:last-child) {
          margin-bottom: 15px;
        }

        &.purchase-price {
          padding: 10px;
          margin: 0 -10px;
          background-color: ${theme.colors.yellow};
        }
      }
    }
  }
`;