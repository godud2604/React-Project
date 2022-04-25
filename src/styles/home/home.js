import styled from "styled-components";
import mainBg from "../../images/home/home/main-bg.jpg";
import scrollBg01 from "../../images/home/home/scroll-bg-01.jpg";
import theme from "../utils/theme";

export const Container = styled.section`
`

export const MainSection = styled.div`
  position: sticky;
  top: 0;

  .main-txt-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding-left: 30px;
    color: ${theme.colors.white};
    width: 100%;
    height: 364px;

    background-image: url(${mainBg});
    background-repeat: no-repeat;
    background-size: cover;

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
    margin: 20px 0;
    padding: 0 20px;
  }

  // swiper
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .home-swiper {
    height: 364px;
  }

  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }

  .swiper-pagination-lock {
    display: block;
    top: 300px;
  }

  .swiper-pagination {
    position: absolute;
    left: auto;
    right: 20px;
    bottom: 20px;
    display: inline-block;
    width: auto;
    padding: 6px 8px;
    color: ${theme.colors.white};
    border-radius: 50px;
    background: rgba(0,0,0, .5);

    span {
      ${theme.SubTitle2};
    }
  }
`;

export const ScrollSection = styled.div`
  position: relative;
  width: 100%;
  padding: 20px 20px 100px;
  background-color: ${theme.colors.white};
  z-index: ${theme.zIndex.home_level};

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
      font-weight: 700;
    }
  }
`