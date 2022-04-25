import styled from 'styled-components';
import theme from '../../utils/theme';

export const GlobalRadio = styled.div`

  .global-radio-title {
    ${theme.SubTitle2};
    color: ${theme.colors.gray1};
  }

  .global-radio-content {
    display: flex;
    margin: ${(props) => props.margin};
    color: ${theme.colors.black1};
  }

  .global-radio-wrap {
    margin: ${(props) => props.wrapMargin ? props.wrapMargin : '10px'};
  }

  .svg {
    margin-right: 10px;
  }

  label {
    display: flex;
    align-items: center;
    width: auto;
    ${theme.Body1};
  }

  input {
    display: none;
  }

  .global-radio-help {
    ${theme.Caption};
    color: ${theme.colors.gray3};
  }
`;
