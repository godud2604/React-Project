import styled from "styled-components";
import theme from "../utils/theme";

export const Container = styled.section`
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

export const SignUpInner = styled.div`
  padding-bottom: 80px;

  .signup-agree-content {
    margin-bottom: 30px;
  }
`;

export const FirstAgreeInner = styled.div`
  .agree-btn {
    margin-top: 40px;
  }
`;

export const KakaoLoginInner = styled.div`
  padding-bottom: 80px;

  .kakao-login-input-content {
    margin-bottom: 80px;
  }
`;

export const SignUpCompleteInner = styled.div`
  padding-bottom: 80px;
  
  .agree-btn {
    margin-top: 40px;
  }

  .complete-title {
    ${theme.SubTitle1};
    color: ${theme.colors.black1};
    margin-bottom: 20px;
    padding-left: 5px;
  }
`;

export const Agreement = styled.section`
  color: ${theme.colors.black1};

  hr {
    border: 1px solid ${theme.colors.gray4};
  }

  .agree-txt {
    padding-left: 10px;
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