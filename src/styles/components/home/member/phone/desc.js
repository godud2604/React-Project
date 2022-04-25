import styled from "styled-components";
import theme from "../../../../utils/theme";
// images

export const Container = styled.section`
  margin-bottom: 40px;
`;

export const DescComponent = styled.div`
  display: flex;
  color: ${theme.colors.black1};
  
  .desc-content-img {
    width: 50%;
  
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;

    }
  }

  .desc-content-txt {
    width: 50%;
    padding: 20px;
    background: ${(props) => props.bg ?? 'rgba(247, 227, 170, 0.5)'};
    
    svg {
      margin-bottom: 10px;
    }

    span, p {
      word-break: keep-all;
    }

    span {
      margin-bottom: 10px;
      line-height: 1.3;
      white-space: nowrap;
      ${theme.H2};
      
    }

    p {
      line-height: 1.3;
      ${theme.Body1}
    }
  }
  
  &.order-change {
    .desc-content-img {
      order: 1;
    }

    .desc-content-txt {
      order: 0;
    }
  }
`;
