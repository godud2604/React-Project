import styled from "styled-components";
import theme from "../utils/theme";
// images
import mainBg from "../../images/home/member/main-bg.jpg";
import scrollBg01 from "../../images/home/member/scroll-bg-01.jpg";

export const Container = styled.div`
`

export const MainSection = styled.div`
  position: sticky;
  top: 70px;
  color: ${theme.colors.white};

  .point-wrap {
    position: relative;
  }

  .main-txt-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding-left: 30px;
    width: 100%;
    height: 294px;

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
      color: ${theme.colors.gray1};
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
    transform: translateY(-1px);
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
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
  top: 70px;
  width: 100%;
  padding: 35px 20px 100%;
  background-color: ${theme.colors.white};
  z-index: ${theme.zIndex.home_level}; // TODO : 수정하기

  .member-phone {
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: 218px;
    color: ${theme.colors.gray1};
    background-image: url(${scrollBg01});
    background-repeat: no-repeat;
    background-size: 100%;

    &-txt-wrap {
      width: 100%;
      line-height: 1.2;
      padding: 25px 20px;
      text-align: right;
      background-color: rgba(255, 255, 255, .8);

      .main-txt {
        ${theme.H2};
      }
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


