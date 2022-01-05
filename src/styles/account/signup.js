import styled from "styled-components";
import theme from "../theme";

export const Container = styled.div`

`

export const Agreement = styled.section`
  color: ${theme.colors.black1};

  hr {
    border: 1px solid ${theme.colors.gray4};
  }

  .agree-txt {
    ${theme.Body2};
    line-height: 1.3;
  }

  .agree-content {
    display: flex;
    align-items: center;
    padding: 6px 0 6px 8px;

    &.agree-main {
      ${theme.SubTitle1};
    }

    &.agree-sub {
      ${theme.Body1};
      color: ${theme.colors.gray1};
    }

    .agree-img {
      margin-right: 10px;
    }
  }
`; 