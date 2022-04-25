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

  .content {
    display: none;
    margin-top: 20px;

    &.active-content {
      display: block;
    }
  }

  .order-nav {
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

      /* 홀수일 때만 적용 */
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
      ${inlineFlexbox('between')};
      width: 100%;
      border-bottom: 1px solid ${theme.colors.white};
    }

    .shopping-bag {
      margin: 0 10px 0 30px;
    }
  }
`;
