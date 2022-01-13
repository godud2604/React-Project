import styled, { css } from "styled-components";
import { flexbox, inlineFlexbox } from "../../utils/flexbox";
import theme from "../../utils/theme";

export const Container = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 100px 20px 20px;
  color: ${theme.colors.gray1};
  background-color: ${theme.colors.white};

  overflow-y: auto;

  ${props => {
    // 더보기 환경설정, 내정보 페이지
    if (props.sideSubPage) {
      return css`
        height: 100vh;
        z-index: ${theme.zIndex.sidebar_sub_level};
      `;

    // 더보기 첫 화면
    } else {
      return css`
        height: calc(100vh - 56px);
        z-index: ${theme.zIndex.sidebar_level};
      `
    }
  }}

  .sidebar-close {
    position: absolute;
    display: inline-block;
    top: 20px;
    left: 15px;
    padding: 10px;
  }

  .sidebar-more {
    ${flexbox('between')};
    ${theme.H2};
    margin-bottom: 25px;
    padding: 0 10px;
  }

  .sidebar-list {
    ${theme.Body1};
  }
  
  .sidebar-item {
    ${flexbox('between')};
    margin-bottom: 10px;
    padding: 10px;
    border-bottom: 1px solid ${theme.colors.gray6};

    .left {
      ${inlineFlexbox()};

      > svg {
        margin-right: 10px;
      }
    }
  }
`;

export const SettingInner = styled.div`
  color: ${theme.colors.black1};

  .title {
    margin-bottom: 20px;
    padding-left: 10px;
    ${theme.Body2};
  }

  .sidebar-setting-head {
    margin-bottom: 45px;
    padding-bottom: 10px;
    border-bottom: 1px solid ${theme.colors.gray6};

    p {
      padding-left: 10px;
    }

    strong {
      margin-right: 20px;
      ${theme.SubTitle1};
    }

    span {
      ${theme.Body2};
    }
  }

  .sidebar-list {
    margin-bottom: 40px;
  }

  .sidebar-item .left {
    ${theme.SubTitle1};
  }
`;


export const InfoInner = styled.div`
  .sidebar-info-head {
    ${flexbox('between')};
    ${theme.H2};
    margin-bottom: 25px;
    padding: 0 10px;

    .info {
      ${flexbox()};
    }

    .id {
      margin-left: 15px;
      ${theme.Body1};
    }

    .logout {
      ${theme.SubTitle1};
    }
  }

  .btn_02 {
    margin: 0 0 5px 20px;
  }

  .sidebar-info-account {
    margin-bottom: 20px;

    &-title {
      ${theme.SubTitle2};    
      margin-bottom: 8px;
    }

    &-not {
      ${theme.Body1};
    }
  }

  .sidebar-info-kind {
    ${flexbox('between')};

    &-left {
      ${flexbox()};
      ${theme.Body1};

      img {
        margin-right: 10px;
      }
    }

    &.first {
      margin-bottom: 15px;
    }
  }

  .sidebar-info-pay {
    margin-bottom: 30px;

    hr {
      border: 1px solid ${theme.colors.gray6};
    }

    &-content {
      ${flexbox('between')};
      padding: 10px 5px;

      p {
        ${theme.SubTitle1};
      }
    }
  }

  .sidebar-info-out {
    ${flexbox()};
    ${theme.SubTitle1};
  }

 
`;