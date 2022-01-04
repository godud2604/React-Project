import React from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';

const CommonButton = ({
  width,
  height,
  margin,
  padding,
  fontSize,

  type,
  kind,
  children,
  onClickHandler,
  disabled,
  RefButton,
  imgSrc,
  imgMargin,
  borderRadious,
  backgroundColor,
  frontText,
}) => {
  return (
    <StyledButton
      ref={RefButton}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
      fontSize={fontSize}
      onClick={onClickHandler}
      type={type}
      borderRadious={borderRadious}
      className={kind}
      backgroundcolor={backgroundColor}
      disabled={disabled}
    >
      {frontText && frontText}
      {imgSrc && <img style={{ margin: imgMargin }} src={imgSrc} />}
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  ${(props) => (props.display ? `display: ${props.display};` : 'display: flex;')}
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: ${(props) => props.width};
  height: ${(props) => props.height ? props.height : '42px'};
  line-height: ${(props) => parseInt(props.height) - 1}px;
  margin: ${(props) => props.margin};
  padding: ${(props) => (props.padding ? props.padding : '0 1.5em')};
  ${theme.Body1};
  font-size: ${(props) => props.fontSize};

  cursor: pointer;
  border-radius: ${(props) => (props.borderRadious ? props.borderRadious : '20px')};
  border: none;
  outline: none !important;
  white-space: nowrap;
  transition: all 100ms ease-in-out;

  &:focus {
    box-shadow: none;
  }
  img {
    margin-right: 10px;
  }
  :disabled {
    opacity: 0.6;
    cursor: default;
  }

  /* kind */

  &.btn_01 {
    background-color: #FAE100;
    color: #381E1F;
  }

  &.btn_02 {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.orange};
    border: 1px solid ${({ theme }) => theme.colors.orange};
  }

  &.btn_03 {
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
  }

  &.btn_04 {
    background-color: ${({ theme }) => theme.colors.boxGray};
    color: ${({ theme }) => theme.colors.gray1};
  }

  &.btn_05 {
    background-color: ${({ theme }) => theme.colors.gray4};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export default React.memo(CommonButton);
