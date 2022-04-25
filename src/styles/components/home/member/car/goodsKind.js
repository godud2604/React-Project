import styled from "styled-components";
import { flexbox } from "../../../../utils";
import theme from "../../../../utils/theme";
// images

export const Container = styled.section`
  ${flexbox()};
  flex-wrap: wrap;
  margin-right: -1rem;

  .goods-kind-content {
    width: 8.5625rem;
    height: 3.125rem;
    margin-right: 2rem;
    margin-bottom: 1.7rem;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;

      // 이미지 선명하게
      image-rendering: -webkit-optimize-contrast;
      transform: translateZ(0);
      backface-visibility: hidden;
    }
  }

  .goods-kind-title {
    width: 158px;
    padding: 2px 0; 
    ${theme.Body2};
    text-align: center;
    white-space: nowrap;
    background-color: ${theme.colors.gray6};
  }
`;

