import styled from "styled-components";
import theme from "../utils/theme";
import { flexbox, inlineFlexbox } from "../utils/flexbox";


export const Container = styled.section`
  display: flex;
  margin: ${(props) => props.margin ? props.margin : '0 0 20px 0'};
  color: ${theme.colors.gray1};
  border: 1px solid ${theme.colors.gray5};
  border-radius: 20px;
  overflow: hidden;

  .coupon-img {
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .coupon-txt {
    padding: 20px 0 20px 20px;
  }

  .coupon-head {
    
    .coupon-store-name {
      ${theme.SubTitle1};
      line-height: 1.3;
    }

    .coupon-location {
      ${theme.Body1};
      line-height: 1.3;

    }
  }

  .coupon-body {
    margin-top: 10px;

    &-discount {
      ${inlineFlexbox()};
      margin-bottom: 5px;
      
      .svg {
        margin-right: 10px;
      }
    }

    strong {
      ${theme.H2};
      color: ${theme.colors.orange};
    }

    p {
      ${theme.Body2};
      color: ${theme.colors.gray3};
      letter-spacing: 0;
    }
  }
`