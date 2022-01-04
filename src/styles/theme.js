import { css } from 'styled-components';

// text-styles
const fontSizes = {
  H1: '30px',
  H2: '20px',
  SubTitle1: '15px',
  SubTitle2: '12px',
  Body1: '15px',
  Body2: '12px',
  Caption: '10px',
};

const H1 = css`
  font-size: ${fontSizes.H1};
  font-family: NotoB;
  font-weight: 700;
`;

const H2 = css`
  font-size: ${fontSizes.H2};
  font-family: NotoB;
  font-weight: 700;
`;

const SubTitle1 = css`
  font-size: ${fontSizes.SubTitle1};
  font-family: NotoB;
`;

const SubTitle2 = css`
  font-size: ${fontSizes.SubTitle2};
  font-family: NotoB;
`;

const Body1 = css`
  font-size: ${fontSizes.Body1};
  font-family: NotoR;
`;

const Body2 = css`
  font-size: ${fontSizes.Body2};
  font-family: NotoR;
`;

const Caption = css`
  font-size: ${fontSizes.Caption};
  font-family: NotoB;
`;

// colors
const colors = {
  black1: 'rgb(0,0,0)',
  black2: 'rgb(18,18,18)',
  gray1: 'rgb(55,56,56)',
  gray2: 'rgb(77,77,78)',
  gray3: '#828282',
  gray4: '#BDBDBD',
  gray6: '#F2F2F2',
  midGray: 'rgb(248,248,248)',
  lightGray: 'rgb(252,252,252)',

  orange: '#F47F38',
  yellow: '#FFBF00',
  pink1: '#E83F6F',
  pink2: '#F49FB7',
  white: 'rgb(255,255,255)',
};


const theme = {
  fontSizes,
  H1,
  H2,
  SubTitle1,
  SubTitle2,
  Body1,
  Body2,
  Caption,

  colors,
};

export default theme;
