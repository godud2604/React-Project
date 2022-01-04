import styled from "styled-components";
import mainBg from "../../images/home/main-bg.jpg";
import scrollBg01 from "../../images/home/scroll-bg-01.jpg";
import theme from "../theme";

export const Container = styled.div`
`

export const MainSection = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 364px;
  background-image: url(${mainBg});
  background-repeat: no-repeat;
  background-size: 100%;
  z-index: -1;

  // 이미지 선명하게
  image-rendering: pixelated;
  transform: translateZ(0);
  backface-visibility: hidden;

  .main-txt-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    margin-top: 10px;
    padding-left: 30px;
    color: ${theme.colors.white};

    .title {
      margin-bottom: 25px;
      ${theme.H1};
    }

    .sub {
      ${theme.SubTitle1};
      line-height: 1.3;
    }
  }

  .main-btn {
    margin-top: 10px;
    padding: 0 20px;
  }
`;

export const ScrollSection = styled.div`
  width: 100%;
  margin-top: 440px;
  padding: 20px 20px 100px;
  background-color: ${theme.colors.white};

  .starbucks {
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: 218px;
    color: ${theme.colors.gray1};
    background-image: url(${scrollBg01});
    background-repeat: no-repeat;
    background-size: 100%;

    .starbucks-txt-wrap {
      width: 100%;
      height: 80px;
      line-height: 1.2;
      padding: 15px 18px 10px;
      text-align: right;
      background-color: rgba(255, 255, 255, .8);
    }

    .main-txt {
      ${theme.H2};
    }

    .sub-txt {
      ${theme.SubTitle1};
    }
  }


  .home-slide-menu {
    margin-top: 30px;

    .menu-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
      padding: 0 10px;

      h2 {
        ${theme.H2}
        color: ${theme.colors.black1};
      }
    }

    .menu-image {
      img {
        width: 100%;
      }
    }
  }
`