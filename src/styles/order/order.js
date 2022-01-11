import styled from "styled-components";
import theme from "../utils/theme";
import { flexbox, inlineFlexbox } from "../utils/flexbox";


export const Container = styled.div`
  /* common */
  margin-top: 68px;
  padding: 20px;
  color: ${theme.colors.gray1};

  .order-head {
    margin-bottom: 40px;
  }

  .order-title {
    ${theme.H2};
  }

  .order-sub {
    ${theme.Body2};
  }
  /* common end */

`

export const OrderInner = styled.div`
  padding-bottom: 100px;

  .order-head {
    ${flexbox('between')};

    .order-search {
      position: absolute;
      right: 10px;
      padding: 10px;
    }
  }

  .order-nav {
    margin-top: 15px;
    margin-bottom: 30px;

    .nav-list {
      ${flexbox('start')};
      padding: 10px;
    }

    .nav-item {
      ${theme.Body1};

      &.is-active {
        ${theme.SubTitle1};
      }

      &:not(:last-child) {
        margin-right: 15px;
      }
    }
  }

  .order-list {
    ${flexbox()};
    flex-wrap: wrap;

    section {
      width: calc(50% - 10px);
      margin-bottom: 20px;

      &:nth-child(2n+1) {
        margin-right: 20px;
      }
    }
  }
  
  .order-bottom-store-select {
    position: fixed;
    bottom: 56px;
    ${flexbox('between')};
    width: 100%;
    margin: 0 -20px;
    padding: 10px 20px;
    ${theme.Body2};
    color: ${theme.colors.white};
    background-color: ${theme.colors.orange};

    .select {
      width: 100%;
      ${inlineFlexbox('between')};
      border-bottom: 1px solid ${theme.colors.white};
    }

    .shopping-bag {
      margin: 0 10px 0 30px;
    }
  }
`;

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

export const SearchInner = styled.div`
  padding-bottom: 100px;

  .order-search-none {
    ${flexbox()};
    margin-top: 80px;
    ${theme.Body1};
    color: ${theme.colors.black1};
  }

  .order-list {
    ${flexbox()};
    flex-wrap: wrap;

    section {
      width: calc(50% - 10px);
      margin-bottom: 20px;

      &:nth-child(2n+1) {
        margin-right: 20px;
      }
    }
  }
`;

export const StoreSelectInner = styled.div`
  padding-bottom: 100px;

  .store-nav {
    margin-top: 40px;
  }

  .store-list {
    margin-top: 20px;
  }

`;
