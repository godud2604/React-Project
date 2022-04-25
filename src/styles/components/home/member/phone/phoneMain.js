import styled from "styled-components";
import theme from "../../../../utils/theme";
// images
import mainBg from "../../../../../images/home/member/main-bg.jpg";

export const Container = styled.section`
  position: relative;
  margin-bottom: 40px;
  padding-top: 60px;
  width: 100%;
  height: 294px;

  background-image: url(${mainBg});
  background-repeat: no-repeat;
  background-size: cover;

  p {
    padding: 15px;
    ${theme.SubTitle1};
    text-align: center;
    color: ${theme.colors.black1};
    background: rgba(255, 255, 255, 0.5);;
  }

  button {
    position: absolute;
    right: 20px;
    bottom: 20px;
  }
`;
