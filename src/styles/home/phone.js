import styled from "styled-components";
import { flexbox } from "../utils";
import theme from "../utils/theme";

export const PhoneSection = styled.div`
  margin-top: 70px;

  h2 {
    margin-bottom: 25px;
    ${theme.H2};
    text-align: center;
    font-size: 25px;
    color: ${theme.colors.black1};
  }
`;

export const VarietyPhone = styled.div`
  margin-bottom: 80px;

  .varierty-img {
    display: flex;
    
    
    .img {
      flex: 1;
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      
      // 이미지 선명하게
      image-rendering: -webkit-optimize-contrast;
      transform: translateZ(0);
      backface-visibility: hidden;
    }
  }
`;

export const FreeGift = styled.div`
  margin-bottom: 80px;
  
  .free-gift-content {
    ${flexbox()};
    flex-wrap: wrap;
    padding: 20px;
    background-color: ${theme.colors.gray6};
  }

  .gift-wrap {
    width: calc(50% - 10px);
    height: 150px;
    margin-bottom: 20px;
    color: ${theme.colors.black1};
    background-color: ${theme.colors.white};
    border-radius: 100%;
    text-align: center;

    /* 홀수일 때만 적용 */
    &:nth-child(2n+1) {
      margin-right: 20px;
    }

    .img {
      height: 117px;
    }

    p {
      ${theme.Body1};
    }
  }
`;

export const Apply = styled.div`
  padding: 0 20px 200px;
  color: ${theme.colors.white};

  .apply-content {
    ${flexbox('around')};
    text-align: center;
  }

  .svg {
    height: 35px;
    margin-bottom: 10px;
  }

  .apply-txt {
    ${flexbox()};
    width: 70px;
    height: 42px;
    line-height: 1.1;
    ${theme.Body2};
    border-radius: 4px;
    background-color: #FB5E5E;
  }
`;

export const PhoneFloat = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 15px;
  ${theme.Body1};
  text-align: center;
  color: ${theme.colors.white};
  background: ${theme.colors.pink1};
`;
