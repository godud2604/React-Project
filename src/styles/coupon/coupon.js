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

export const CouponInner = styled.div`
  padding-bottom: 100px;

  .coupon-list {
    margin-top: 40px
  }
`;

