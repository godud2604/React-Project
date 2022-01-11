import styled from "styled-components";
import theme from "../../utils/theme";

export const GlobalButton = styled.button`
  /* common  */

 ${(props) => (props.display ? `display: ${props.display};` : 'display: flex;')}
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: ${(props) => props.width ? props.width : '100%'};
  height: ${(props) => props.height ? props.height : '42px'};
  margin: ${(props) => props.margin};
  padding: ${(props) => (props.padding ? props.padding : '0 1.5em')};
  ${theme.Body1};
  font-size: ${(props) => props.fontSize};

  cursor: pointer;
  border-radius: ${(props) => (props.radious ? props.radious : '20px')};
  border: none;
  outline: none !important;
  white-space: nowrap;
  transition: all 100ms ease-in-out;

  &:focus {
    box-shadow: none;
  }

  .global-btn-img {
    width: 20px;
    margin-right: 10px;
  }

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

  :disabled {
    opacity: 0.6;
    cursor: default;
  }
  /* common end */

  /****************************** kind ********************************/

  &.btn_01 {
    background-color: #FAE100;
    color: #381E1F;
  }

  // 배경: white, 색상: orange, border: orange
  &.btn_02 {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.orange};
    border: 1px solid ${({ theme }) => theme.colors.orange};
  }

  // 배경: orange, 색상: white
  &.btn_03 {
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
  }

  // 배경: boxGray, 색상: gray1
  &.btn_04 {
    background-color: ${({ theme }) => theme.colors.boxGray};
    color: ${({ theme }) => theme.colors.gray1};
  }

  // 배경: gray4, 색상: white
  &.btn_05 {
    background-color: ${({ theme }) => theme.colors.gray4};
    color: ${({ theme }) => theme.colors.white};
  }

  // 배경: gray3, 색상: white
  &.btn_06 {
    background-color: ${({ theme }) => theme.colors.gray3};
    color: ${({ theme }) => theme.colors.white};
  }

   // 배경: gray2, 색상: white, border: 0
   &.btn_07 {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.gray2};
    border: 0;
  }
`;