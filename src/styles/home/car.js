import styled from "styled-components";
import { flexbox } from "../utils";
import theme from "../utils/theme";

export const CarSection = styled.section`
  // common
  margin-top: 70px;
  padding: 0 20px 100px;

  hr {
    border: 1px solid ${theme.colors.gray6};
  }
  // common end
`;

export const CarMain = styled.div`
  line-height: 1.5;

  .car-main-head {
    margin: 0 -20px 60px;
    padding: 12px 0;
    ${theme.H2};
    text-align: center;
    color: ${theme.colors.white};
    background-color: ${theme.colors.pink1};
  }

  .car-main-foot {
    ${flexbox()};
    margin-bottom: 15px;
    ${theme.SubTitle1};
  }
`;

export const TitleChidrenComponents = styled.div`

  .title-children-discount {
    height: 105px;
    overflow: hidden;

    img {
      width: 100%;
      transform: translateY(-80px);

      // 이미지 선명하게
      image-rendering: -webkit-optimize-contrast;
    }
  }

  .apply-content {
    ${flexbox('around')};
    padding: 10px;
    text-align: center;
    background-color: ${theme.colors.gray6};

    .svg {
      ${flexbox()};
      width: 60px;
      height: 60px;
      margin: 0 auto 10px;
      background-color: ${theme.colors.white};
      border-radius: 120px;
    }

    .apply-txt {
      ${flexbox()};
      width: 70px;
      height: 42px;
      line-height: 1.3;
      ${theme.Body2};
      font-size: 11px;
      color: ${theme.colors.white};
      border-radius: 4px;
      background-color: #FB5E5E;
    }
  }
`;

export const CarFloat = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;

  ${flexbox()};

  width: 100%;
  padding: 15px;
  ${theme.Body1};
  text-align: center;
  color: ${theme.colors.white};
  background: ${theme.colors.pink1};

  p {
    margin-right: 10px;
  }
`;


