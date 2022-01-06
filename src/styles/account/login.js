import styled from "styled-components";
import theme from "../utils/theme";

export const Container = styled.div`
  /* common */
  margin-top: 68px;
  padding: 20px;
  color: ${theme.colors.gray1};

  .account-head {
    margin-bottom: 40px;
  }

  .account-title {
    margin-bottom: 20px;
    ${theme.H2};
  }

  .account-sub {
    ${theme.Body2};
  }
  /* common end */
`

export const LoginInner = styled.div`
  .login-input-content {
    margin-bottom: 40px;
  }

  .login-btn-content {
    margin-bottom: 40px; 
  }

  .login-sign-in-content {
    display: flex;
    justify-content: center;
    ${theme.Body2};
    text-align: center;

    span {
      position: relative;
      margin: 0 10px;

      &:not(:last-child) {
        &:after {
          content: "";
          position: absolute;
          display: block;
          top: -3%;
          right: -10px;
          width: 1px;
          height: 15px;
          background-color: ${theme.colors.gray1};
        }
      }
    }
  }
`;