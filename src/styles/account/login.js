import styled from "styled-components";
import theme from "../theme";

export const Container = styled.div`
  margin-top: 68px;
  padding: 20px;
  color: ${theme.colors.gray1};

  .login-title {
    margin-bottom: 20px;
    ${theme.H2};
  }

  .login-sub {
    ${theme.Body2};
  }
`
