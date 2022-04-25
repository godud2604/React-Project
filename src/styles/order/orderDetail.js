import styled from "styled-components";
import theme from "../utils/theme";
import { flexbox, inlineFlexbox } from "../utils/flexbox";

export const OrderDetailInner = styled.div`
  padding-bottom: 150px;
  color: ${theme.colors.gray1};  

  .main-bg {
    height: 375px;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .order-detail-content {
    padding: 20px;
  }

  article {
    padding: 10px;
    background: ${theme.colors.gray6};
    border-radius: 4px;
  }

  .detail-title, .detail-num {
    ${theme.H2};
  }

  .detail-title {
    line-height: 1.5;
  }

  .detail-num {
    ${flexbox('between')}
    color: ${theme.colors.orange};  
  }

  hr {
    margin-bottom: 10px;
    border: 1px solid ${theme.colors.gray5};
  }

  .detail-sub, .detail-location {
    ${theme.Body1};
  }

  .detail-sub {
    margin-bottom: 10px;
    line-height: 1.3;
    word-break: keep-all;
  }

  .detail-location {
    ${inlineFlexbox()};

    svg {
      margin-right: 15px;
    }
  }

  /* footer */
  .order-detail-footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 10px 20px;
    color: ${theme.colors.black1};
    background-color: ${theme.colors.white};
    filter: ${theme.boxShadows.dropShadow};
  }

  .detail-count {
    ${flexbox('between')};
    ${theme.H2};
    margin-bottom: 20px;

    &-num {
      ${flexbox()};

      strong {
        margin: 0 10px;
      }
    }
  }

  .detail-count-btn {
    ${flexbox('end')};
  }
`;
